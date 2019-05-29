import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import MuseumSearchScreen from '../screens/MuseumSearchScreen'

const AppNavigator = createStackNavigator({
    MuseumSearchScreen: {
        screen: MuseumSearchScreen,
    }

})

export default createAppContainer(AppNavigator)