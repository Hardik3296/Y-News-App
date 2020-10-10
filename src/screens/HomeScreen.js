import React from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import ResultItem from '../components/ResultItem'

class HomeScreen extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         data: []
      }
   }

   updateData = (data) => {
      this.setState({ data })
   }

   async componentDidMount() {
      let response = await fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
      response = await response.json()
      index = 0
      this.updateData(response.hits)
   }

   render() {
      return this.state.data.length === 0 ? <View style={styles.screenView}><Text style={styles.loadText}>Loading..</Text></View> : <View style={styles.screenView}>
         <FlatList
            data={this.state.data}
            renderItem={({ item, index }) => {
               return <View key={item.objectID} style={styles.listStyle}>
                  <ResultItem item={item} />
               </View>
            }}
         />
         <Button title="More" onPress={() => { this.props.navigation.navigate("Search") }} />
      </View>
   }
}

export default HomeScreen


const styles = StyleSheet.create({
   listStyle: {
      flexDirection: "row"
   },
   screenView: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
   },
   index: {
      fontSize: 20,
      color: "#8A8686",
      textAlign: "right",
   },
   loadText: {
      fontSize: 60,
      textAlignVertical: "center"
   }
});

