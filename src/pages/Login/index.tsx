import { Text, View } from "react-native";
import { styles } from "./style";
import { Botao } from "../../components/Botao";
import { FontAwesome } from "@expo/vector-icons";
import { InputCampo } from "../../components/Input";
import { BotaoCadastro } from "../../components/BotaoCadastro";
import googleLogo from "../../assets/search.png";
import facebookLogo from "../../assets/facebook.png";
import appleLogo from "../../assets/apple.png";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.containerPai}>
      <FontAwesome name="spotify" size={55} color="white" />
      <Text style={styles.title}>Log in to Spotify</Text>
      <View style={styles.containerContinue}>
        <Botao placeHolder="Continue with Google" source={googleLogo} />
        <Botao placeHolder="Continue with Facebook" source={facebookLogo} />
        <Botao
          placeHolder="Continue with Apple"
          source={appleLogo}
          imagemStyleAdd={{ width: 40, height: 40 }}
        />
      </View>

      <View style={styles.linhaDivisoria}></View>

      <View style={styles.containerInput}>
        <InputCampo
          textoInput="Email or username"
          placeHolder="Email or username"
        />
        <InputCampo textoInput="Password" placeHolder="Password" isPassword={true}/>
      </View>

      <View style={styles.containerLogIn}>
        <Botao
          onChange={() => navigate.navigate('StackHome')}
          placeHolder="Log in"
          botaoStyleAdd={{
            backgroundColor: "#1ED15B",
            borderWidth: 0,
            marginBottom: 25,
          }}
          textoStyleAdd={{ color: "#010602" }}
        />
        <BotaoCadastro placeHolder="Forgot your password?" />
      </View>

      <View style={styles.containerCadastro}>
        <Text style={styles.cadastro}>Dont have an account?</Text>
        <BotaoCadastro placeHolder="Sing up for Spotify" />
      </View>
    </View>
  );
};
