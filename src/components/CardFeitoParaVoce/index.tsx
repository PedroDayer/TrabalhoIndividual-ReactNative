import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { styles } from "./style";

interface PropsCardFeitoParaVoce {
  titulo: string;
  imagem: ImageSourcePropType;
  subtitulo: string;
}

export const CardFeitoParaVoce = ({
  titulo,
  imagem,
  subtitulo,
}: PropsCardFeitoParaVoce) => (
  <View style={styles.card}>
    <Image source={imagem} style={styles.capa} />
    <Text style={styles.titulo} numberOfLines={1}>
      {titulo}
    </Text>
    <Text style={styles.subtitulo} numberOfLines={2}>
      {subtitulo}
    </Text>
  </View>
);
