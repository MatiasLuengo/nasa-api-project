import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import { RootStackParams } from "../types";
import Detail from "../views/Detail";

const Stack = createNativeStackNavigator<RootStackParams>();
const styleOptions = {
  headerStyle: {
    backgroundColor: "rgba(7,26,93,255)",
  },
  headerTitleStyle: {
    color: "#fff",
  },
  headerTintColor: "#fff",
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={styleOptions} />
        <Stack.Screen name="Detail" component={Detail} options={styleOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
