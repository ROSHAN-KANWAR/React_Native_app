import { StatusBar } from 'expo-status-bar';
import { StyleSheet,FlatList, Text, View } from 'react-native';

export default function Flateslist() {
    const names = [
        {
          'index':1,
        'name':'roshan knawar'},
        {
          'index':2,
            'name':'yoy hoony'},
            {
              'index':3,
                'name':'kalio das'},
                {
                  'index':4,
                    'name':'tretra kumar'},
                    {
                      'index':5,
                        'name':'kaliyan singh'},
                        {
                          'index':6,
                            'name':'prem singh'},
];
  return (
   <FlatList
   style = {styles.liststyles}
   keyExtractor = {(key)=>{
    return key.index;
   }}
   horizontal
   showsHorizontalScrollIndicator={false}
    data ={names}
     renderItem={({item})=>{
  return  <Text style = {styles.container}>{item.name}</Text>;
   }}
    />
  
  );
}


const styles = StyleSheet.create({
  container: {
  
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:30,
    margin:20,
    color:'white',
    borderRadius:50,
    padding:10,
  },
  liststyles:{
    textAlign:'center',
    margin:20,
  
  }
});
