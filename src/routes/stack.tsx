import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../pages/Login';
import { TabsRouters } from './tabs';
import { ParametrosRotasStack } from './navigation';

const Stack = createNativeStackNavigator<ParametrosRotasStack>();

export const StackRouters = () => {

   return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StackLogin' component={Login} />
      <Stack.Screen name='StackHome' component={TabsRouters} />
    </Stack.Navigator>
  )
};
