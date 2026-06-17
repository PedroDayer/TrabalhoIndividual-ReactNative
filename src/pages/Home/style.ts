import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {},
  containerPai: {
    flex: 1,
    // backgroundColor: "#101110",
    backgroundColor: "pink",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    // ver sobre essa porcentagem depois
    marginTop: "15%",
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
    marginVertical: 20,
  },

  linha: {
    justifyContent: "space-between",
  },
});
