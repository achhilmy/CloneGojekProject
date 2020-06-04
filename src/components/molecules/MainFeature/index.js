import React from 'react';
import {View, Text, Image} from 'react-native';

const MainFeature = () =>{
    return (
    <View style={{width: '25%', alignItems: 'center'}}>
        <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../../assets/icon/go-ride.png')} />
        </View>
        <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Go-Ride</Text>
    </View>
    )
}
export default MainFeature; 