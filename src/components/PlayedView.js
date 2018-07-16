import React, {Component} from 'React';
import {View, Image, Text, StyleSheet} from 'react-native';

const pedraImg = require('../../imagens/pedra.png');
const papelImg = require('../../imagens/papel.png');
const tesouraImg = require('../../imagens/tesoura.png')

class PlayedView extends Component {
    render(){
        if(this.props.picked === 'Pedra'){
            return (
                <View style={customStyle.playerField}>
                    <Text style={customStyle.txtPlayer}>{this.props.player} </Text>
                    <Image source={pedraImg}/>
                </View>
            )
        } else if(this.props.picked === 'Papel'){
            return (
                <View style={customStyle.playerField}>
                    <Text style={customStyle.txtPlayer}>{this.props.player} </Text>
                    <Image source={papelImg}/>
                </View>
            )
        } else if(this.props.picked === 'Tesoura'){
            return (
                <View style={customStyle.playerField}>
                    <Text style={customStyle.txtPlayer}>{this.props.player} </Text>
                    <Image source={tesouraImg}/>
                </View>
            )
        } else {
            return false;
        }
    }
}

const customStyle = StyleSheet.create({
    playerField: {
        alignItems: 'center',
        marginTop: 10
    }, 
    txtPlayer: {
        fontSize: 20
    }
});

export default PlayedView;