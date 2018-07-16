import React, {Component} from 'React';
import {View, Image, Text, StyleSheet} from 'react-native';

class PlayedView extends Component {
    render(){
        if(this.props.picked === 'Pedra'){
            return (
                <View style={customStyle.playerField}>
                    <Text style={customStyle.txtPlayer}>{this.props.player} </Text>
                    <Image source={require('../../imagens/pedra.png')}/>
                </View>
            )
        } else if(this.props.picked === 'Papel'){
            return (
                <View style={customStyle.playerField}>
                    <Text style={customStyle.txtPlayer}>{this.props.player} </Text>
                    <Image source={require('../../imagens/papel.png')}/>
                </View>
            )
        } else if(this.props.picked === 'Tesoura'){
            return (
                <View style={customStyle.playerField}>
                    <Text style={customStyle.txtPlayer}>{this.props.player} </Text>
                    <Image source={require('../../imagens/tesoura.png')}/>
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