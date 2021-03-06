import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {

    constructor(props) {
        super(props);

        this.state = { resultado: '' };
    }

    componentWillMount() {
        const numeroAleatorio = Math.floor(Math.random() * 2);
        let caraOuCoroa = '';

        if (numeroAleatorio === 0) {
            caraOuCoroa = 'Cara';
        } else {
            caraOuCoroa = 'Coroa';
        }
        this.setState({ resultado: caraOuCoroa });
    }

    render() {
        if (this.state.resultado === 'Cara') {
            return (
                <View style={styles.resultado}>
                    <Image source={cara} />
                </View>
            );
        } 
            return (
                <View style={styles.resultado}>
                    <Image source={coroa} />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    resultado: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
