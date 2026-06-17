import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Text, View } from "react-native";
import { SuaBiblioteca } from "../pages/SuaBiblioteca";
import { Buscar } from "../pages/Buscar";
import { Premium } from "../pages/Premium";
import { ParametrosRotasTabs } from "./navigation";
import Icon from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";

const Tabs = createBottomTabNavigator<ParametrosRotasTabs>();

export const TabsRouters = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          height: 90,
          elevation: 0,
          borderTopWidth: 0,
          position: "absolute",
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="TabsHome"
        component={Home}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.cardTabs}>
              <Icon name="home-outline" size={30} color={focused ? "#FDFCFE" : "#A4A3A3"} />
              <Text
                style={[
                  styles.textTabs,
                  { color: focused ? "white" : "#E4E4E4" },
                ]}
              >
                Início
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="TabsBuscar"
        component={Buscar}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.cardTabs}>
              <Icon name="search-outline" size={30} color={focused ? "#FDFCFE" : "#A4A3A3"} />
              <Text
                style={[
                  styles.textTabs,
                  { color: focused ? "white" : "#E4E4E4" },
                ]}
              >
                Buscar
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="TabsSuaBiblioteca"
        component={SuaBiblioteca}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.cardTabs}>
              <Icon name="library-outline" size={30} color={focused ? "#FDFCFE" : "#A4A3A3"} />
              <Text
                style={[
                  styles.textTabs,
                  { color: focused ? "white" : "#E4E4E4" },
                ]}
              >
                Sua Biblioteca
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="TabsPremium"
        component={Premium}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.cardTabs}>
              <FontAwesome
                name="spotify"
                size={30}
                color={focused ? "#FDFCFE" : "#A4A3A3"}
              />
              <Text
                style={[
                  styles.textTabs,
                  { color: focused ? "white" : "#E4E4E4" },
                ]}
              >
                Premium
              </Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
