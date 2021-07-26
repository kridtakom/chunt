import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Home from "./screen/Home";
import About from "./screen/About";
import Service from "./screen/Service";
import MenuDetail from "./screen/MenuDetail";
import { Provider } from "react-redux";
import Store from "./redux/store";
import Summary from "./screen/Summary";
import OnBoarding from "./screen/OnBoarding";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="OnBoarding"
            screenOptions={({ route, navigation }) => ({
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
              ...TransitionPresets.SlideFromRightIOS,
              cardStyle: { backgroundColor: "#fff" },
            })}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MenuDetail" component={MenuDetail} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Service" component={Service} />
            <Stack.Screen name="Summary" component={Summary} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
