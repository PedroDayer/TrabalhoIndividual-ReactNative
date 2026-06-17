import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import fotoPerfil from "../../assets/fotoPerfil.jpg";
import { FontAwesome } from "@expo/vector-icons";
import { BotaoFiltro } from "../../components/BotaoFiltro";
import { dadosPlayList } from "../../data/dadosPlayList";
import { CardPlaylist } from "../../components/CardPlayList";

export const Home = () => {
  return (
    <View style={styles.containerPai}>
      <View style={styles.header}>
        <View style={styles.headerPerfil}>
          <TouchableOpacity style={styles.botaoPerfilIcone}>
            <View>
              <Image
                source={fotoPerfil}
                alt="Foto de perfil do usuário"
                style={styles.fotoPerfil}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.titulo}>Boa noite</Text>
        </View>
        <View style={styles.headerIcones}>
          <FontAwesome
            name="bell-o"
            size={24}
            color="white"
            style={styles.icon}
          />
          <FontAwesome name="history" size={24} color="white" />
        </View>
      </View>

      <View style={styles.containerFiltro}>
        <BotaoFiltro
          placeHolder="Tudo"
          botaoStyleAdd={{ backgroundColor: "#24BD48" }}
        />
        <BotaoFiltro placeHolder="Música" />
        <BotaoFiltro placeHolder="Podcasts" />
      </View>

      <View style={styles.playList}>
        <FlatList
          data={dadosPlayList}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardPlaylist titulo={item.titulo} imagem={item.imagem} />
          )}
          numColumns={2} 
          columnWrapperStyle={styles.linha} 
        />
      </View>
    </View>
  );
};
