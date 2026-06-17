import { Text, TextStyle, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface PropsBotaoCadastro {
  placeHolder: string;
  textoStyleAdd?: TextStyle;
}

export const BotaoCadastro = ({
  placeHolder,
}: PropsBotaoCadastro) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.textoPlaceHolder}>
          {placeHolder}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
