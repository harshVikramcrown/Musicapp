import React from 'react';
import{View,Text,StyleSheet,Button} from 'react-native';
import Main from './Main';
const Details=(route,navigation,item)=>{
    const {param}=route.params;
    return(
        <View style={{marginTop:300}}>
             <Text>{param.item.trackName}</Text>
             <Text>{param.item.trackName}</Text>
        </View>
    )
}
export default Details;