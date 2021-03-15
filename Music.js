import React,{useCallback} from "react";
import { View, StyleSheet, Text, Image,Button, TouchableOpacity,Alert } from "react-native";

const Music = ({ item,navigation }) => {
const navigateToDetailScreen = useCallback(() => {
    navigation.navigate("Details");
    }, [item]);
    
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToDetailScreen}>
      <Image style={styles.image} source={{ uri: item.artworkUrl100 }} />
        <Text style={styles.title}> {item.trackName} </Text>
        <Text style={styles.author}> {item.artistName} </Text>
      <Text style={styles.rd}> {item.releaseDate}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
   
  container: {
    //Button:
    backgroundColor: "white",
    margin: 15,
    opacity:0.7
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
      marginBottom:10,
    marginHorizontal: 150,
    marginVertical:-150,
    color: "black",
    
  },
  rd: {
    marginVertical: 5,
    marginHorizontal: 10,
    color: "black",
    fontSize: 18,
  },
  image: {
      opacity:100,
    height: 150,
    width:150,
    marginLeft: 2,
    marginRight:250,
    marginVertical:5,
    borderRadius: 100
  },
  author: {
    marginBottom:50,
    marginRight:10,
    marginHorizontal: 200,
    fontSize: 15,
    color: "black",
  },
});

export default Music;