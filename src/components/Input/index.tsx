import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

interface PropsInputCampo {
  textoInput: string;
  placeHolder: string;
}

export const InputCampo = ({ textoInput, placeHolder }: PropsInputCampo) => {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.textoLabel}>{textoInput}</Text>
      <TextInput
        style={styles.textoInput}
        placeholder={placeHolder}
        placeholderTextColor="#A7A7A7"
      />
    </View>
  );
};
