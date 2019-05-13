import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


export default class OutrosJogos extends Component {
    render() {
        return (
            <Text style={styles.texto}>
                Apresentada informações sobre outros jogos.
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    texto: {
        flex: 1,
        backgroundColor: '#61BD8C'
    }
});
