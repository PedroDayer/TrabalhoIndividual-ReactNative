import {
  Image,
  ImageSourcePropType,
  ImageStyle,
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
  source?: ImageSourcePropType;
  botaoStyleAdd?: ViewStyle;
  textoStyleAdd?: TextStyle;
  imagemStyleAdd?: ImageStyle;
  onChange?: () => void;
}

export const Botao = ({
  placeHolder,
  source,
  botaoStyleAdd,
  textoStyleAdd,
  imagemStyleAdd,
  onChange,
}: BotaoProps) => {
  return (
    <View style={styles.containerBotao}>
      <TouchableOpacity style={[styles.botao, botaoStyleAdd]} onPress={onChange}>
        <View style={styles.containerIconeImagem}>
          {source && (
            <Image
              source={source}
              style={[styles.iconeImagem, imagemStyleAdd]}
            />
          )}
        </View>
        <Text style={[styles.textoPlaceHolder, textoStyleAdd]}>
          {placeHolder}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
