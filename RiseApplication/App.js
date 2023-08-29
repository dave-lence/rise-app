import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./Redux/UserSlice";
import { ToastProvider } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Auth from "./Navigation/Auth";
import { NavigationContainer } from "@react-navigation/native";
import { myTheme } from "./Navigation/NavigationTheme";
import HomeNavigator from "./Navigation/HomeNavigator";
import { useEffect } from "react";

const AuthSession = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserSignIn = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        if (user) {
          dispatch(setUser(JSON.parse(user))); // Dispatch the setUser action from your userSlice
        }
      } catch (error) {
        console.log("Error retrieving user from AsyncStorage:", error);
      }
    };

    checkUserSignIn();
  }, []);

  return (
   
      <NavigationContainer theme={myTheme}>
        {user ? <HomeNavigator /> : <Auth />}
      </NavigationContainer>
   
  );
};

export default function App() {
  return (
    <ToastProvider>
      <Provider store={store}>
        <AuthSession />
      </Provider>
    </ToastProvider>
  );
}
