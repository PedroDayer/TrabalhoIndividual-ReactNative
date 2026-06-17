import { NavigationContainer } from "@react-navigation/native";
import { Routers } from "./src/routes";

export default function App() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Login />
    // </View>
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}
