import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContactScreen, DetailScreen, HomeScreen } from "./src";
import { DataProvider } from "./src/context/DataContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <DataProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Contact"
              component={ContactScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    </NativeBaseProvider>
  );
}
