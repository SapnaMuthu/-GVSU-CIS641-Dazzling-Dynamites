import { FlatList, StyleSheet, Text, TouchableOpacity, View,  ScrollView } from 'react-native';
import { Image, ListItem } from "react-native-elements";
import React, { useEffect, useState } from 'react';
import { BaseRouter } from '@react-navigation/native';
import { getRecipes,getRecipesAPI } from '../api/RecipeServer'
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import Toast from 'react-native-root-toast';
import DropDownPicker from 'react-native-dropdown-picker';
import { auth,initRecipesDB,  storeRecipesItem } from '../fb-config/fb-credentials';

const RecipeListScreen = ({ navigation }) => {
  const email=auth.currentUser?.email;
  const [data, setRecipe] = useState([]);
  const [state, setState] = useState({email:email, name:'',image:''})


  const signoutHandler=()=>{
    auth.signOut().then(()=>{
      navigation.navigate("Login");
      Toast.show(`Logged Out Successfully`, {duration:Toast.durations.SHORT,animation: true, hideOnPress: true,})
    }).catch(error=>alert(error.message))
  }

  useEffect(()=>{
    try{
        initRecipesDB();
    }catch(error){
        console.log(error);
    }
}, [])

  useEffect(()=>{
    navigation.setOptions({
    headerRight:()=>(
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("Wishlist");
            
        }}>
 <MaterialIcons name="favorite" size={30} color="red"   /> 
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
         <Text>Wishlist</Text></View>

        </TouchableOpacity>
        ),
        headerLeft:()=>(
            <TouchableOpacity
            onPress={()=>{
              signoutHandler();
            }}
            style={{marginRight:20}}>
          <SimpleLineIcons name="logout" size={24} color="black" />
            </TouchableOpacity>
           ),

    });

});

const [open, setOpen] = useState(false);
const [receipe, setRecipesAPI] = useState([
  {label: 'Chipotle Steak Salad', value: '584a385efea21d611fd4197b83f8ad04'},
  {label: 'Chicken Teriyaki', value: '888e9fc4a808e9e4ccdb2ac24a6a2f46'},
  {label: 'Chicken Alfredo Pasta', value: 'a67887efb20d0bf8949b507f68ad1c90'},
  {label: 'Salt-Crusted Baby Potatoes', value:'0433cf626edd7ea32bde7f76dd4df1a7'},
  {label: 'Zucchini Strand Spaghetti', value: '215462c61fa59331c2311a544c73d186'},
  {label: 'Indian Masala Omelet', value: 'c736f2a4e0fce9ad6da62aa3657c61e7'},
  {label: 'Spinach Rice Gratin', value: '8524500cf70423e889d0d7fceadc4c20'},
  {label: 'Grilled Asparagus with Almond-Parsley Gremolata', value: '100ab193cab69b24a1344b0168640741'},
  {label:'Spinach Salad with Blood Oranges and Pistachios', value: '0ec48df32629a4349a37af0fed9a6835'},
  {label: 'Grape-Nuts Pudding Recipe', value: 'abb54cc8b3ebcde3eda17dce57512480'},
  {label: 'Potato and Blue Cheese Pizza', value: '8c2dda9f07d8b77d26e7f5f460464c53'},
  {label: 'Cranberry Trifle', value: '55f5a615d33468b495d96b7c1cf23621'},
  {label: 'Puffy Ramp Frittata', value: '4e5fb3a3de23652cd25860847796521a'},
  {label: 'French Fry Waffles Recipe', value: '3bbd7b704f5dcf1c1b91cb15a1078889'},
  {label: 'Chocolate Cardamom Plums Clafoutis', value : '1b49a1b18ccbd281c377de8924e979e9'},
  
]);


  useEffect(() => {
    getRecipes((data) => {
      // console.log("received: ", data._embedded.events);
      setRecipe(data.recipe);
      // console.log(data.recipe);
      // console.log("Hey",setRecipe);

      // console.log("Sapna" ,data.recipe.calories);
      // console.log("Sapna",state)
      // setVideos(data["_"]);
      
      // console.log()
      // data._embedded.events[0].name

    });
  }, []);


var label=data.label;





  return (
    <View>
      <View style={{ marginRight:10, marginLeft:10, marginTop:10, marginBottom:10}}>
      <DropDownPicker
        zIndex={2000}
        zIndexInverse={2000}
        open={open}
        setOpen={setOpen}
        items={receipe}
        setItems={setRecipesAPI}
        placeholder="Select a Receipe"
        onSelectItem={selectitem=>{ getRecipesAPI((data) => {
         setRecipe(data.recipe);
          },
          selectitem.value)}}
        />
</View>
    


<View style={styles.map}>
 <Image 
  source={{ uri: data.image }}
  style={{ width: 250, height: 250, alignContent:"center", justifyContent:"center" }}
/>


      </View>
      <View style={styles.details}>
      <ScrollView>
      <ListItem style={{ padding:7}}>

<ListItem.Content >
<ListItem.Title> Recipe Details:</ListItem.Title>
{/* <Image 
  source={{ uri: route.params.images[0].url }}
  style={{ width: 100, height: 55, alignContent:"center", justifyContent:"center" }}
/> */}


  <ListItem.Title> Recipe Name: {label}</ListItem.Title>
  <ListItem.Subtitle> Calories: {data.calories} </ListItem.Subtitle>
  <ListItem.Subtitle> Cuisine Type: {data.cuisineType}</ListItem.Subtitle>
  <ListItem.Subtitle> Dish Type: {data.dishType}</ListItem.Subtitle>
  <ListItem.Subtitle> Health Labels Type: {data.healthLabels}</ListItem.Subtitle>
  <ListItem.Subtitle> Ingredient Lines: {data.ingredientLines}</ListItem.Subtitle>

</ListItem.Content>
</ListItem></ScrollView>
<View  style={styles.save}>
<TouchableOpacity
            onPress={()=>{

                setState({
                  email:email,
                  name: data.label,
                  image: data.image
                })
                storeRecipesItem(state);
                
                Toast.show(`${label} has been Saved`, {duration:Toast.durations.SHORT,animation: true, hideOnPress: true,})
            }} >
                <MaterialIcons name="favorite" size={30} color="red" style={{marginLeft:20}}/>
            </TouchableOpacity></View>
      </View>




    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
  },
});



export default RecipeListScreen;

