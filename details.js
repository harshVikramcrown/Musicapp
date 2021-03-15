import React from 'react-native';
import{View,Text,StyleSheet,Button} from 'react-native';
const Details=({navigation})=>{
    return(
        <View>
              <Text>Hello</Text>
              <Button title="Click to go Back"
    style={styles.inp}
    onPress= {()=>navigation.navigate("Main")}
    />
        </View>
    )
}
const styles= StyleSheet.create({
    inp:{
        position:"absolute",
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
    });
export default Details;