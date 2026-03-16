import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/Home/HomeScreen';
import LojaDetalhes from './src/screens/Details/LojaDetalhes';
import { Loja } from './src/@types/loja';

export type RootStackParamList = {
  Home: undefined; //Nao recebe parametros
  Detalhes: {loja: Loja}; //Precisa receber um objeto loja
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'LocalShop'}}/>
        <Stack.Screen name="Detalhes" component={LojaDetalhes} options={({route}) => ({title: route.params.loja.nome})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
