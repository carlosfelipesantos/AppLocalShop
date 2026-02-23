import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function LojaCard({loja}) {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={{uri: loja.imagem}} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.nome}>{loja.nome}</Text>
                <Text style={styles.categoria}>{loja.categoria}</Text>
                <Text style={styles.distancia}>{loja.distancia}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',   
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
        elevation: 3, //sombra para Android
        shadowColor: '#000', //sombra para iOS
        shadowOffset: { width: 0, height: 2 }, //sombra para iOS
        shadowOpacity: 0.1, //sombra para iOS
        shadowRadius: 4, //sombra para iOS
    }