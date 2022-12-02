import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function ImagesLad() {
  return (
    <View style={styles.container}>
      <Text>Image from scr</Text>
      <Image style = {styles.ImgStyle} source={require("../assets/text.jpg")}/>
      <Text>Image from scr</Text>
      <Image style = {styles.ImgStyle} source={require("../assets/text.jpg")}/>
      <Text>Image from scr</Text>
      <Image style = {styles.ImgStyle} source={require("../assets/text.jpg")}/>
      <Text>Image from scr</Text>
      <Image style = {styles.ImgStyle} source={require("../assets/text.jpg")}/>
      <Text>Image from scr</Text>
      <Image style = {styles.ImgStyle} source={require("../assets/text.jpg")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgStyle:{
    width:369,
    height:300,
  }
});
