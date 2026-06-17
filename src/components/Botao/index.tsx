import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";

interface BotaoProps {
  placeHolder: string;
  iconeNome?: React.ComponentProps<typeof FontAwesome>["name"];
  botaoStyleAdd?: ViewStyle;
  textoStyleAdd?: TextStyle;
}

export const Botao = ({
  placeHolder,
  iconeNome,
  botaoStyleAdd,
  textoStyleAdd,
}: BotaoProps) => {
  return (
    <View style={styles.containerBotao}>
      <TouchableOpacity style={[styles.botao, botaoStyleAdd]}>
        <FontAwesome name={iconeNome} size={20} color="#4285F4" />
        <Text style={[styles.textoPlaceHolder, textoStyleAdd]}>
          {placeHolder}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
