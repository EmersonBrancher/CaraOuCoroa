import { Router, Scene } from 'react-native-router-flux';
import React from 'react';
import Principal from './components/principal';
import SobreJogo from './components/sobreJogo';
import OutrosJogos from './components/outrosJogos';
import Resultado from './components/resultado';

const Rotas = () => (
    <Router>
        <Scene>
            <Scene key='principal' component={Principal} initil title="Cara ou Coroa" />
            <Scene key='sobreJogo' component={SobreJogo} title="Sobre o Jogo" />
            <Scene key='outrosJogos' component={OutrosJogos} title="Outros Jogos" />
            <Scene key='resultado' component={Resultado} title="Resultado" />
        </Scene>
    </Router>
);

export default Rotas;
