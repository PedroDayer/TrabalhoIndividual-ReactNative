import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./style";

interface PropsBotaoVerMais {
  placeHolder: string;
  botaoStyleAdd?: ViewStyle;
}

export const BotaoVerMais = ({
  placeHolder,
  botaoStyleAdd,
}: PropsBotaoVerMais) => {
  return (
    <View>
      <TouchableOpacity style={[styles.botaoVerMais, botaoStyleAdd]}>
        <Text style={styles.placeHolder}>{placeHolder}</Text>
      </TouchableOpacity>
    </View>
  );
};
