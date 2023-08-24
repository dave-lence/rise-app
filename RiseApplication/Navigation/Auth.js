import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// screens
import LandingScreen from '../Screens.js/OnboardingScreens/LandingScreen'
import LandingScreenTwo from '../Screens.js/OnboardingScreens/LandingScreenTwo'
import LandingScreenThree from '../Screens.js/OnboardingScreens/LandingScreenThree'
import LandingScreenFour from '../Screens.js/OnboardingScreens/LandingScreenFour'

const Stack = createNativeStackNavigator()
const Auth = () => {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
    >
        <Stack.Screen name='Welcome' 
         component={LandingScreen}
         options={{animation:"fade_from_bottom"}}
         initialParams={LandingScreen}
        />        
        <Stack.Screen name='WelcomeTwo' 
         component={LandingScreenTwo}
         options={{animation:"slide_from_right"}}
        />        
        <Stack.Screen name='WelcomeThree' 
         component={LandingScreenThree}
         options={{animation:"slide_from_right"}}
        />        
        <Stack.Screen name='WelcomeFour' 
         component={LandingScreenFour}
         options={{animation:"slide_from_right"}}
        />        
    </Stack.Navigator>
  )
}

export default Auth