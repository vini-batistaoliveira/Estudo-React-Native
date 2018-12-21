
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity, Alert } from 'react-native';

const gerarFrase = () => {
    var numero = Math.random();

    numero = Math.floor(numero * 5);

    var frases = Array();

    frases[0] = "Confie no Seu Potencial, Reaja a Um Assalto";
    frases[1] = "Sarra na Pipoca";
    frases[2] = "Batatinha e Macarrão";
    frases[3] = "Dias de Derrota e Dias Derrota";
    frases[4] = "Mais Uma Frase Bosta";

    var fraseEscolhida = frases[numero];

    Alert.alert(fraseEscolhida);
}

const Style = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },

    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const App = () => {
    return (
        <View style={Style.principal}>
            <Image source={require('./imgs/logo.png')} />

            <TouchableOpacity
                onPress={gerarFrase}
                style={Style.botao}>
                <Text style={Style.textoBotao}>Nova Frase</Text>
            </TouchableOpacity>
        </View>
    );
};

AppRegistry.registerComponent('teste', () => App);