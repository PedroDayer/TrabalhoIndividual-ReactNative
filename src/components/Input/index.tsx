import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

interface PropsInputCampo extends TextInputProps {
  textoInput: string;
  placeHolder: string;
  isPassword?: boolean;
}

export const InputCampo = ({
  textoInput,
  placeHolder,
  isPassword,
  ...rest
}: PropsInputCampo) => {
  const [esconderSenha, setEsconderSenha] = useState(true);
  return (
    <View style={styles.containerInput}>
      <Text style={styles.textoLabel}>{textoInput}</Text>
      <View style={styles.containerInputSenha}>
        <TextInput
          style={styles.textoInput}
          placeholder={placeHolder}
          placeholderTextColor="#A7A7A7"
          secureTextEntry={isPassword ? esconderSenha : false}
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setEsconderSenha(!esconderSenha)}>
            <FontAwesome
              name={esconderSenha ? "eye-slash" : "eye"}
              size={20}
              color="#A7A7A7"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
