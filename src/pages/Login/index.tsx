import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { Botao } from "../../components/Botao";
import ImagemLogo from "../../assets/ImagemLogo.png";
import { FontAwesome } from "@expo/vector-icons";
import { InputCampo } from "../../components/Input";

export const Login = () => {
  return (
    <View style={styles.containerPai}>
      <FontAwesome name="spotify" size={50} color="white" />
      <Text style={styles.title}>Log in to Spotify</Text>

      <Botao placeHolder="Continue with Google" iconeNome="google" />
      <Botao placeHolder="Continue with Facebook" />
      <Botao placeHolder="Continue with Apple" />

      <InputCampo
        textoInput="Email or username"
        placeHolder="Email or username"
      />
      <InputCampo textoInput="Password" placeHolder="Password" />

      <Botao placeHolder="Log in" />

      <Text style={styles.esqueceu}>Forget your password?</Text>
      <Text style={styles.cadastro}>Dont have an account? Sing up for Spotify</Text>
    </View>
  );
};
