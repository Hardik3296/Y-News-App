import React from 'react'
import { StyleSheet, View, FlatList, Text, TouchableHighlight, ActivityIndicator, Dimensions, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import ResultItem from '../components/ResultItem'
import { mapStateToProps, mapDispatchToProps } from '../redux/MappingFunctions'
import { fetchData } from '../connection/FetchData'


class HomeScreen extends React.Component {

   async getArticles(page) {
      let response = await fetchData(page)
      if (response.hits.length != 0)
         this.props.updateHomeScreenData(response)
   }

   componentDidMount() {
      if (Object.keys(this.props.data).length === 0)
         this.getArticles(0)
   }

   render() {
      return Object.keys(this.props.data).length === 0 ? <View style={styles.screenView}><ActivityIndicator size="large" color="#0000ff" /></View> : <View style={styles.screenView}>
         <FlatList
            style={{ marginHorizontal: 10, marginVertical: 5 }}
            data={this.props.data.hits}
            renderItem={({ item }) => {
               return <View key={item.objectID} style={styles.listStyle}>
                  <ResultItem item={item} navigation={this.props.navigation} />
               </View>
            }}
         />
         <TouchableHighlight underlayColor="white" onPress={() => { this.getArticles(parseInt(this.props.data.page) + 1) }} style={styles.button} ><Text style={styles.buttonText}>More</Text></TouchableHighlight>
      </View>
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


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
      fontSize: 30,
      textAlignVertical: "center"
   },
   button: {
      alignSelf: "stretch",
      alignItems: "center",
      backgroundColor: "#20E3E3",
      paddingVertical: 5
   },
   buttonText: {
      fontSize: 20,
      fontWeight: "bold"
   }
});

