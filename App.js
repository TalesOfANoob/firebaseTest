import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/Screens/HomeScreen'
import DetailScreen from './src/Screens/DetailScreen'
import {Provider as FireProvider} from './src/Context/FirebaseTestContext'
import {Provider as AuthProvider} from './src/Context/AuthContext'
const stackNav=createStackNavigator({

  Home:HomeScreen,
  Detail:DetailScreen
})

const App=createAppContainer(stackNav);

export default ()=>{
  return (
    <AuthProvider>
      <FireProvider>
        <App/>
      </FireProvider>
    </AuthProvider>
  )
}; 