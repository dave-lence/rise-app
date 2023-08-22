import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './Screens.js/OnboardingScreens/LandingScreen';
import LandingScreenTwo from './Screens.js/OnboardingScreens/LandingScreenTwo';
import LandingScreenThree from './Screens.js/OnboardingScreens/LandingScreenThree';
import LandingScreenFour from './Screens.js/OnboardingScreens/LandingScreenFour';
import SignUpScreen from './Screens.js/SignUpScreen/SignUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
