import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './StylesDetalhes';


export default function LojaDetalhes({route, navigantion}) {

    const {loja} = route.params;DOMException

    return (
        <View style = {styles.container}>
            <Image source = {{uri: loja.imagem}} style = {styles.image}/>
        <View style = {styles.content}>
                <Text style = {styles.nome}>{loja.nome}</Text>
                <Text style = {styles.categoria}>{loja.categoria}</Text>
                <Text style = {styles.descricao}>Bem-vindo à {loja.nome}! Aqui você encontrará os melhores produtos e serviços.</Text>
            
            <Button
            title="Voltar para Home"
            onPress={() => navigantion.goBack()}
            color="#007BFF"
            />           
            </View>
        </View>

    );
}
 