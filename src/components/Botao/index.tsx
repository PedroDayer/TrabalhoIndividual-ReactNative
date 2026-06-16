import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";

interface BotaoProps {
  placeHolder : string
  iconeNome?: React.ComponentProps<typeof FontAwesome>["name"];
}

export const Botao = ({placeHolder, iconeNome}: BotaoProps) => {
  return(
    <View>
      <TouchableOpacity style={styles.botao}>
        <FontAwesome name={iconeNome} size={20} color="#4285F4" />
        <Text style={styles.textoPlaceHolder}>{placeHolder}</Text>
      </TouchableOpacity>
    </View>
  ) 
};
