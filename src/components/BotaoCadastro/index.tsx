import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./style";

interface PropsBotaoCadastro {
  placeHolder: string;
}

export const BotaoCadastro = ({ placeHolder }: PropsBotaoCadastro) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.textoPlaceHolder}>{placeHolder}</Text>
      </TouchableOpacity>
    </View>
  );
};
