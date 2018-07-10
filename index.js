import {name as appName} from './app.json';
import React, {Component} from 'React';
import { AppRegistry, View, Text, Button, Image, StyleSheet } from 'react-native';

class App extends Component{

    edWins = 0;
    userWins = 0;

    constructor(props){
        super(props);
        this.state = {
            userPlay : '',
            computerPlay : '',
            resultGame: ''
         };
    }

    getWinner(computer, player){
        if(computer === player){
            return 'Empate';
        }

        if(computer === 'Papel'){
            if(player === 'Tesoura'){
                this.userWins++;
                return 'Você venceu !!';
            } else {
                this.edWins++;
                return 'Você perdeu';
            }
        } else if(computer === 'Tesoura'){
            if(player === 'Papel'){
                this.edWins++;
                return 'Você perdeu';
            } else {
                this.userWins++;
                return 'Você venceu !!';
            }
        } else if(computer === 'Pedra'){
            if(player === 'Tesoura'){
                this.edWins++;
                return 'Você perdeu';
            } else {
                this.userWins++;
                return 'Você venceu !!';
            }
        }
    }

    jokenpo(userPlay){
        var computerGame = Math.floor(Math.random() * 3);
        
        switch(computerGame){
            case 0: computerGame = 'Pedra'; break;
            case 1: computerGame = 'Papel'; break;
            case 2: computerGame = 'Tesoura'; break;
        }

        this.setState({userPlay: userPlay, computerPlay: computerGame, resultGame: this.getWinner(computerGame, userPlay)});
    }

    render(){
        return (
            <View>
                
                <HeaderView></HeaderView>

                <View style={customStyle.distribuition}>
                    <View style={customStyle.btnAction}>
                        <Button title="Tesoura" onPress={() => {this.jokenpo("Tesoura")}} />
                    </View>
                    <View style={customStyle.btnAction}>
                        <Button title="Pedra" onPress={() => {this.jokenpo("Pedra")}} />
                    </View>
                    <View style={customStyle.btnAction}>
                        <Button title="Papel" onPress={() => {this.jokenpo("Papel")}}/>
                    </View>
                   
                </View>
                
                <View style={customStyle.bottomField}>
                    <Text style={customStyle.result}>{this.state.resultGame}</Text>

                    <View>
                        <Image style={customStyle.catitaResize} source={require('./imagens/catita.jpeg')}/>
                        <PlayedView picked={this.state.computerPlay} player='Catita'></PlayedView>
                    </View>

                    <PlayedView picked={this.state.userPlay} player='Você'></PlayedView>
                </View>       

                <ChallengeView points= {this.edWins+this.userWins} player={this.userWins} ed={this.edWins} ></ChallengeView>
            </View>
        );
    }
}

class ChallengeView extends Component{
    render(){
        if(this.props.points === 0){
            return false;
        } else {
            return (
                <View>
                    <Text>Quantidade de vitórias: {this.props.player}</Text>
                    <Text>Quantidade de derrotas: {this.props.ed}</Text>
                </View> 
            )  
        }
    }
}

class HeaderView extends Component{
    render(){
        return (
            <View>
                <Image  style={customStyle.imageHeader} source={require('./imagens/jokenpo.png')}/> 
            </View>
        )
    }
}

class PlayedView extends Component{
 
    render(){
        if(this.props.picked === 'Pedra'){
            return (
                <View style={customStyle.playerField}>
                    <Text style={customStyle.txtPlayer}>{this.props.player} </Text>
                    <Image source={require('./imagens/pedra.png')}/>
                </View>
            )
        } else if(this.props.picked === 'Papel'){
            return (
                <View style={customStyle.playerField}>
                    <Text style={customStyle.txtPlayer}>{this.props.player} </Text>
                    <Image source={require('./imagens/papel.png')}/>
                </View>
            )
        } else if(this.props.picked === 'Tesoura'){
            return (
                <View style={customStyle.playerField}>
                    <Text style={customStyle.txtPlayer}>{this.props.player} </Text>
                    <Image source={require('./imagens/tesoura.png')}/>
                </View>
            )
        } else {
            return false;
        }
    }
}

const customStyle = StyleSheet.create({
    btnAction: {
        width: 90
    }, 
    distribuition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    }, 
    bottomField: {
        alignItems: 'center',
        marginTop: 10
    },
    result: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60,
        marginTop: 10
    }, 
    txtPlayer: {
        fontSize: 20
    }, 
    playerField: {
        alignItems: 'center',
        marginTop: 10
    }, 
    imageHeader:{
        width: '100%'
    },
    catitaResize: {
        width: 20,
        height: 20,
        alignItems: 'center'
    }
});

AppRegistry.registerComponent(appName, () => App);