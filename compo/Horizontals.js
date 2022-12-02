import { StatusBar } from 'expo-status-bar';
import { StyleSheet,FlatList, Text, View } from 'react-native';

export default function Horizontals() {
    const names = [
        {
        'name':'roshan knawar'},
        {
            'name':'yoy hoony'},
            {
                'name':'kalio das'},
                {
                    'name':'tretra kumar'},
                    {
                        'name':'kaliyan singh'},
                        {
                            'name':'prem singh'},
]
  return (
    <View style={styles.container}>
   <FlatList
    data ={names}
     renderItem={(item)=>{
  return  <Text>{item.name}</Text>;
   }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
