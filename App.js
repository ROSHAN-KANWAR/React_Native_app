import * as React from 'react';
import { Text,View ,ImageBackground,TextInput,StyleSheet} from 'react-native';
import { Card, Title } from 'react-native-paper';
import MyHeader from './component/MyHeader';
export default function App  () {
    return (
      <View style = {StyleSheet.container}>   
       <MyHeader />
<ImageBackground resizeMode='stretch'  style={{width:'100%' ,height:'70%'}} source={require('./assets/cuve.png')}>
<TextInput placeholder='Search your things' style = {{ color:'grey' ,padding:10,borderRadius:40 ,elevation:9 ,margin:40  ,height:35 ,backgroundColor:'white'}} />
</ImageBackground>


<View style ={styles.box}>
<View>
<Card  style ={styles.box1}>
<Card.Content>
<Title>Roshan</Title>
</Card.Content>
</Card>
<Card  style ={styles.box1}>
<Card.Content>
<Title>Roshan</Title>
</Card.Content>
</Card>
<Card  style ={styles.box1}>
<Card.Content>
<Title>Roshan</Title>
</Card.Content>
</Card>
</View>

<View>
<Card  style ={styles.box1}>
<Card.Content>
<Title>Roshan</Title>
</Card.Content>
</Card>
<Card  style ={styles.box1}>
<Card.Content>
<Title>Roshan</Title>
</Card.Content>
</Card>
<Card  style ={styles.box1}>
<Card.Content>
<Title>Roshan</Title>
</Card.Content>
</Card>
</View>
</View>

      </View>
  
     );
 
}
const styles = StyleSheet.create({
  container:{
      backgroundColor:'white',
      padding:5,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  Icons:{
      fontSize:35,
     color:'black',
      margin:6,
  },
  box:{
    flex:1,
    flexDirection:'row',
   padding:10,
   justifyContent:'space-between'
  },
  box1:{
   marginBottom:14,
padding:8,
borderRadius:30,
elevation:5,
  }
})