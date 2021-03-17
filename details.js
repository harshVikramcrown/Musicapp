import React from 'react';
import{View,Text,StyleSheet,Button} from 'react-native';
import Main from './Main';
const Details=(item,props,route,key,navigation)=>{
 const param=route.params.key;
    //console.warn(param.trackName);
    return(
        <View style={{marginTop:300}}>
             <Text>{trackName}</Text>
        </View>
    )
}
export default Details;