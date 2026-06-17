import {
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";

interface PropsCardPlayList {
  titulo: string;
  imagem: ImageSourcePropType;
}

export const CardPlaylist = ({ titulo, imagem }: PropsCardPlayList) => (
  <TouchableOpacity style={styles.card}>
    <Image source={imagem} style={styles.capa} />
    <Text style={styles.titulo} numberOfLines={2}>
      {titulo}
    </Text>
  </TouchableOpacity>
);
