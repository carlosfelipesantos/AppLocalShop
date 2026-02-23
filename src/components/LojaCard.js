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