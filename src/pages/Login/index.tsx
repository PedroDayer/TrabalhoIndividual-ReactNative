import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { Botao } from "../../components/Botao";
import ImagemLogo from "../../assets/ImagemLogo.png";
import { FontAwesome } from "@expo/vector-icons";

export const Login = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="spotify" size={50} color="white" />
      <Text style={styles.title}>Log in to Spotify</Text>
      <Text>Dont have an account?</Text>
      <Botao placeHolder="Continue with Google" iconeNome="google"/>
      <Botao placeHolder="Continue with Facebook" />
      <Botao placeHolder="Continue with Apple" />
    </View>
  );
};
