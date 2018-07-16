import React, {Component} from 'React';
import {View, Image, StyleSheet} from 'react-native';

class HeaderView extends Component{
    render(){
        return (
            <View>
                <Image  style={customStyle.imageHeader} source={require('../../imagens/jokenpo.png')}/> 
            </View>
        )
    }
}

const customStyle = StyleSheet.create({
    imageHeader:{
        width: '100%'
    }
});

export default HeaderView;