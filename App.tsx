import { NavigationContainer } from "@react-navigation/native";
import { Routers } from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Routers />
    </NavigationContainer>
  );
}
