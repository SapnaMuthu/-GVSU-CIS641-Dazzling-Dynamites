import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image, ListItem } from "react-native-elements";
import React, { useEffect, useState } from 'react';
import { BaseRouter } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Toast from 'react-native-root-toast';
import { auth,setupRecipesListener,initRecipesDB,deleteRecipe } from '../fb-config/fb-credentials';

const Wishlist = ({ navigation }) => {

  const [savedRecipes, setsavedRecipes] = useState([]);
  
  // const email="talam@gmail.com";
  const email=auth.currentUser?.email;

  useEffect(()=>{

    setupRecipesListener((recipes)=>{
        setsavedRecipes(recipes);
    });
},[]);


const data = savedRecipes.filter(function(item){
  return item.email == email;});
  // console.log("email",email)
  // console.log("Filtered Data", data);

  const renderRecipes = ( { index, item}) => {
    // console.log("Filtered Data", data);
    return (
        // console.log("Item",item),
        <ListItem >

        <Image 
            source={{ uri: item.image }}
            style={{ width: 100, height: 55 }}
          />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            
          </ListItem.Content> 
          <TouchableOpacity
           onPress={()=>{
            deleteRecipe(item);
            Toast.show(`Receipe Removed`, {duration:Toast.durations.SHORT,animation: true, hideOnPress: true,})
          }}
          >
          <MaterialIcons name="delete" size={24} color="black" />
          </TouchableOpacity>
        </ListItem>
      
    );
  }

  return (
    <View>
      <FlatList
       data={data}
       renderItem={renderRecipes}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
  },
});



export default Wishlist;

