import React from 'react'
import { View, Text, Linking, StyleSheet, TouchableHighlight } from 'react-native'

const ResultItem = ({ item, navigation }) => {

   loadArticle = (id) => {
      console.log("inside load article & id", id)
      navigation.navigate("Article")
   }

   calculateTime = (creationDate) => {
      var diffInTime = new Date() - new Date(creationDate)
      var days = Math.floor(diffInTime / (1000 * 24 * 3600))
      if (days > 0) {
         if (days === 1)
            return days + " day ago"
         else
            return days + " days ago"
      }
      var hours = Math.floor(diffInTime / (1000 * 3600))
      if (hours > 0) {
         if (hours === 1)
            return hours + " minute ago"
         else
            return hours + " minutes ago"
      }
      var minutes = Math.floor(diffInTime / (1000 * 60))
      if (minutes === 1)
         return minutes + " minute ago"
      else
         return minutes + " minutes ago"
   }

   var points = parseInt(item.points)

   return (
      <View style={styles.itemView}>
         <View style={styles.mainTextView}>
            <TouchableHighlight>
               <Text style={styles.title} onPress={() => { loadArticle(item.objectID) }}>{item.title}</Text>
            </TouchableHighlight>
         </View>
         <View style={styles.subTextView}>
            <View><Text style={[styles.distanceBetween, styles.greyText]}>{points}</Text></View>
            <View><Text style={[styles.distanceBetween, styles.greyText]}>{points > 1 ? "points by" : "point by"}</Text></View>
            <View><Text style={[styles.distanceBetween, styles.greyText]}>{item.author}</Text></View>
            <View><Text style={[styles.distanceBetween, styles.greyText]}>{calculateTime(item.created_at)}</Text></View>
            <View><Text style={[styles.distanceBetween, styles.greyText]}>|</Text></View>
            <View><Text style={[styles.distanceBetween, styles.greyText]}>hide</Text></View>
            <View><Text style={[styles.distanceBetween, styles.greyText]}>|</Text></View>
            <View><Text style={[styles.distanceBetween, styles.greyText]}>{item.num_comments + " comments"}</Text></View>
         </View>
      </View>
   )
}

export default ResultItem

const styles = StyleSheet.create({
   upvote: {
      height: 20,
      width: 15,
      marginTop: 5,
   },
   mainTextView: {
      flexDirection: "row",
      flexWrap: "wrap",
   },
   itemView: {
      width: "100%"
   },
   subTextView: {
      flexDirection: "row",
      flexWrap: "wrap"
   },
   title: {
      fontSize: 20,
      fontWeight: "bold",
      flexDirection: "row",
   },
   greyText: {
      color: "#8A8686"
   },
   distanceBetween: {
      marginRight: 5
   }
})