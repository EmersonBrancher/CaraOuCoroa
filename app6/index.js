import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Rotas from './src/rotas';

export default class app6 extends Component {
    render() {
        return (
            <Rotas />
        );
    }
}

AppRegistry.registerComponent('app6', () => app6);
