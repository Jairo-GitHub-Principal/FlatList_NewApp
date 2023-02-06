import React, {Component, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';


const x =()=>{
  const [data,setData] = useState([])
 
  return data;
}

const newData = []
for(i= 0; i < 1000; i++ ){
newData.push({ 
            title: "Lorem ipsum", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in congue risus, non viverra tellus. Nam faucibus ligula non metus ultrices mollis. Cras dolor purus, hendrerit eu eros quis, dignissim eleifend mi. In tincidunt mi in diam egestas congue ac ut purus. Nulla semper libero vitae blandit vehicula.",
            image: require('../images/img1.webp'),
            id:newData.length
            
            
})
  
newData.push({ 
            title: "Curabitur vulputate", 
            text: "Curabitur vulputate enim in lacus imperdiet, a convallis odio posuere. Nulla id ex et purus sodales rutrum non eu eros. Ut consequat est lacus.",
            image: require('../images/img2.webp'),
            id:newData.length+1
    })

    newData.push({ 
            title: "Proin hendrerit", 
            text: "Proin hendrerit nisl id turpis bibendum, sit amet scelerisque augue elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a blandit sapien.",
            image: require('../images/img3.webp'),
            id:newData.length+2
    })

  }
// tentando fazer o multiplicador
    
   
    
    

   
   
  

const ItemComponent = ({itemRenderizado, onPress, backgroundColor, textColor,titleColor}) => (
  <View onPress={onPress} style={[styles.itemEstilo, {backgroundColor}]}>
   
    <Image  source={itemRenderizado.image} style={{width:100,height:100}}></Image>
    <Text style={[styles.titleEstilo, {color: titleColor}]}>{itemRenderizado.title}</Text>
    <Text style={[styles.textEstilo,{color: textColor}]}>{itemRenderizado.text}</Text>
  </View>
);

const RnFlatList = () => {
  const [selectedId, setSelectedId] = useState();

  //************tentar fazer a listaggem infinita */
  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(false);
  const[page,setPage]=useState(1);
  const[error,setError]=useState(null);
  const[hasMore,setHasMore]=useState(true);
  
  useEffect(()=>{},[])
    async function loadlista(){

    }

  // 8888888888888888888listagem infinita8888888888888888888888
  
  const renderItem = ({item}) => {
  
    const backgroundColor = '#6e3b6e' ;
    const colorTitle = 'white' ;
    const colorText ='yellow';
    

    return (
      <ItemComponent
        itemRenderizado={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        titleColor={colorTitle}
        textColor={colorText}
      />
    );
  };

  
  
    return (
        
    <View>
      <FlatList 
        data={newData}
        renderItem={renderItem}
        keyExtractor={itemkeyExtrator => itemkeyExtrator.id}
        extraData={selectedId}
       key={itemKey => itemKey.id}
        
        
      />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemEstilo: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleEstilo: {
    fontSize: 16,
    fontWeight:700
  },
  textEstilo:{
    fontSize:15,
    fontWeight:500

  }
});

export default RnFlatList;