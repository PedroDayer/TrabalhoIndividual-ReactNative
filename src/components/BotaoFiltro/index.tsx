import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./style";

interface PropsBotaoFiltro {
  placeHolder: string;
  botaoStyleAdd?: ViewStyle;
  estaAtivo?: boolean;
  onChange?: () => void;
}

export const BotaoFiltro = ({
  placeHolder,
  botaoStyleAdd,
  estaAtivo,
  onChange,
}: PropsBotaoFiltro) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.botaoFiltro,
          botaoStyleAdd,
          estaAtivo ? styles.botaoAtivo : styles.botaoInativo,
        ]}
        onPress={onChange}
      >
        <Text style={styles.placeHolder}>{placeHolder}</Text>
      </TouchableOpacity>
    </View>
  );
};
