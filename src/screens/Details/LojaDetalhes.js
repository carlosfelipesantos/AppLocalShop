import {View, Text, Image, ScrollView, Button} from 'react-native';
import {styles} from './StylesDetalhes';


export default function LojaDetalhes({route, navigation}) {

    const {loja} = route.params;

    return (
        <View style = {styles.container}>
            <Image source = {{uri: loja.imagem}} style = {styles.image}/>
        <View style = {styles.content}>
                <Text style = {styles.nome}>{loja.nome}</Text>
                <Text style = {styles.categoria}>{loja.categoria}</Text>
                <Text style = {styles.descricao}>Bem-vindo à {loja.nome}! Aqui você encontrará os melhores produtos e serviços.</Text>
            
            <Button
            title="Voltar para Home"
            onPress={() => navigation.goBack()}
            color="#007BFF"
            />           
            </View>
        </View>

    );
}
 