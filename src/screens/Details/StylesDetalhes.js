import {StyleSheet} from 'react-native';
import { normalizeColorObject } from 'react-native'

export const styles = StyleSheet.create({
    container: { flex:1, backgroundColor: '#fff'},
    image: { width: '100%', height: 200},
    content: { padding: 20},
    nome: { fontSize: 24, fontWeight: 'bold'},
    categoria: { fontSize: 18, color: '#666', marginBottom: 15},
    descricao: { fontSize: 16, lineHeight: 24, marginBottom: 20, color: '#333'}

});

export default styles;