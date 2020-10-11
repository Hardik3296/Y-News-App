/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from "redux"
import { Provider } from "react-redux"
import HomeScreen from './screens/HomeScreen'
import ArticleScreen from './screens/ArticleScreen'
import Reducer from './redux/Reducer'


const Stack = createStackNavigator()
const store = createStore(Reducer)

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Your Articles" component={HomeScreen} options={{
            title: "Article List", headerTitleStyle: {
              textAlign: "center",
              color: "#000"
            }
          }} />
          <Stack.Screen name="Article" component={ArticleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}


export default App
