import React from "react";
import Data from "./src/components/Data";
import Detail from "./src/components/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Data">
        <Stack.Screen name="Home" component={Data} />
        <Stack.Screen name="Item Detail Screen" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
