import React, {Component} from 'React';
import {View, Image, StyleSheet} from 'react-native';

const image = require('../../imagens/jokenpo.png');

class HeaderView extends Component{
    render(){
        return (
            <View>
                <Image  style={customStyle.imageHeader} source={image}/> 
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