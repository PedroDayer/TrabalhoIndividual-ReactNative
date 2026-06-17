import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerBotao: {
    width: "100%",
    marginTop: 10,
  },

  botao: {
    backgroundColor: "transparent",
    height: 50,
    borderColor: "#444444",
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: "8%",
  },
  textoPlaceHolder: {
    fontSize: 15,
    color: "#FBFBFB",
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    marginRight: 30,
  },

  containerIconeImagem: {
    width: 30,
    alignItems: "center",
  },

  iconeImagem: {
    width: 20,
    height: 20,
  },
});
