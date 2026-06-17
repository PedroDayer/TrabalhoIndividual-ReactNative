import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {},
  containerPai: {
    flex: 1,
    backgroundColor: "#101010",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    // ver sobre essa porcentagem depois
    marginTop: "18%",
  },

  headerPerfil: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerIcones: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginRight: 20,
  },
  botaoPerfilIcone: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },

  fotoPerfil: {
    width: "100%",
    height: "100%",
  },

  titulo: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
  },
  containerFiltro: {
    // flex: 1,
    // backgroundColor: "#101110",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    paddingHorizontal: "5%",
    gap: 15,
  },

  playList: {
    paddingHorizontal: "5%",
    marginTop: 20,
  },

  linha: {
    justifyContent: "space-between",
  },

  recomendados: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    marginBottom: 8,
    marginTop: 30,
  },

  tituloRecomendados: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F5F6F5",
  },

  feitoParaVoce: {
    paddingLeft: "5%",
  },
});
