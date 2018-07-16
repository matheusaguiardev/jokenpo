import React, {Component} from 'React';
import {Text, View,} from 'react-native';

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

export default ChallengeView;