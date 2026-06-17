import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./style";

interface PropsBotaoFiltro {
  placeHolder: string;
  botaoStyleAdd?: ViewStyle;
}

export const BotaoFiltro = ({
  placeHolder,
  botaoStyleAdd,
}: PropsBotaoFiltro) => {
  return (
    <View>
      <TouchableOpacity style={[styles.botaoFiltro, botaoStyleAdd]}>
        <Text>{placeHolder}</Text>
      </TouchableOpacity>
    </View>
  );
};
