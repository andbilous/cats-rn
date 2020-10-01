import React,{FunctionComponent} from 'react';
import shortid from 'shortid';
import { SafeAreaView,ActivityIndicator, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

interface Props{
    facts: any,
    isLoading: boolean
}

const List: FunctionComponent<Props> = ({facts,isLoading}) =>  {
   if(isLoading){
       return  <ActivityIndicator />
   }
    return  (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={facts}
          renderItem={({item})=><View style={styles.item}><Text style={styles.title}><Text>{item.fact}</Text></Text></View>}
          keyExtractor={()=>shortid.generate()}
        />
        </SafeAreaView>
        )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 14,
    },
  });

export default List;