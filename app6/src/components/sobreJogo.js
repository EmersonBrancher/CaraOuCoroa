import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


export default class SobreJogo extends Component {
    render() {
        return (
            <Text style={styles.texto}>
                Aplicativo desenvolvido pelo curso de programação hibrida da Udemy.
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
