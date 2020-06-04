import React from 'react';
import {View, Image, Tect } from 'react-native';

const GopayFeature = (props)=>{
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
        <Image source={this.props.img}></Image>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>{this.props.title}</Text>
      </View>
    )
}
export default GopayFeature;