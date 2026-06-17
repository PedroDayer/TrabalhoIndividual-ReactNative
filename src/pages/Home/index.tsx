import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import fotoPerfil from "../../assets/fotoPerfil.jpg";
import { FontAwesome } from "@expo/vector-icons";
import { BotaoFiltro } from "../../components/BotaoFiltro";
import { dadosPlayList } from "../../data/dadosPlayList";
import { CardPlaylist } from "../../components/CardPlayList";
import { BotaoVerMais } from "../../components/BotaoVerMais";
import { dadosRadarList } from "../../data/dadosRadarList";
import { CardFeitoParaVoce } from "../../components/CardFeitoParaVoce";
import { dadosListRecentemente } from "../../data/dadosListRecentemente";

export const Home = () => {
  return (
    <ScrollView
      style={styles.containerPai}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerPerfil}>
          <TouchableOpacity
            style={[
              styles.botaoPerfilIcone,
              !fotoPerfil && { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <View>
              {fotoPerfil ? (
                <Image
                  source={fotoPerfil}
                  alt="Foto de perfil do usuário"
                  style={styles.fotoPerfil}
                />
              ) : (
                <FontAwesome name="user" size={24} color="white" />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.titulo}>Boa noite</Text>
        </View>
        <View style={styles.headerIcones}>
          <TouchableOpacity>
            <FontAwesome
              name="bell-o"
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="history" size={24} color="white" />
          </TouchableOpacity>
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
          scrollEnabled={false}
        />
      </View>

      <View style={styles.recomendados}>
        <Text style={styles.tituloRecomendados}>Feita para você</Text>
        <BotaoVerMais placeHolder="Ver tudo" />
      </View>

      <View style={styles.feitoParaVoce}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={dadosRadarList}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardFeitoParaVoce
              imagem={item.imagem}
              titulo={item.titulo}
              subtitulo={item.subtitulo}
            />
          )}
        />
      </View>

      <View style={styles.recomendados}>
        <Text style={styles.tituloRecomendados}>Tocadas recentemente</Text>
        <BotaoVerMais placeHolder="Ver tudo" />
      </View>

      <View style={styles.feitoParaVoce}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={dadosListRecentemente}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardFeitoParaVoce
              imagem={item.imagem}
              titulo={item.titulo}
              subtitulo={item.subtitulo}
            />
          )}
        />
      </View>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
};
