import React from "react";
import {useState,useEffect} from "react";
import {View,FlatList,ImageBackground,StyleSheet,} from "react-native";
import Music from "./Music.js";
import { Musicdata } from "./Musicapi";
const Main = ({navigation}) => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    getMusicFromAPI();
  }, []);

  const getMusicFromAPI=async()=> {
    try{
      const response =await Musicdata.get("search?term=Michael+jackson")
      return setMusic(response.data)
        ;
      }
      catch (error) {
        console.warn(error);
      };
  }

  return (
    <View>
           <ImageBackground style={styles.back} source={require("./hd.jpg")}></ImageBackground>
      <FlatList
        data={music.results}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return <Music item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    back:{
        position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.7,
    },
});
export default Main;