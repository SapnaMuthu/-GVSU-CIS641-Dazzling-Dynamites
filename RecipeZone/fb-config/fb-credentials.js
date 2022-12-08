// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {initializeApp} from "firebase/app";
import 'firebase/database';
import 'firebase/compat/firestore';
import { getDatabase, push, ref,onValue, remove} from "firebase/database";
// import * as firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4b_PNbn0V76BazdNMKCY80txopFDUh98",
    authDomain: "xxxx-5f19c.firebaseapp.com",
    projectId: "xxxx-5f19c",
    storageBucket: "xxxx-5f19c.appspot.com",
    messagingSenderId: "373641396234",
    appId: "1:373641396234:web:15553eeae3ffe8d1199ff3"
  };

// Initialize Firebase
let app;
if (firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app()
}

const auth=firebase.auth()
export function initRecipesDB(){
  firebase.initializeApp(firebaseConfig);
} 
export function storeRecipesItem(item){

  const db = getDatabase();
  const reference=ref(db, "savedRecipes/");
  //Automatically generates a key
  push(reference, item);
}
export function setupRecipesListener(updateFunc){

  const db = getDatabase();
  const reference=ref(db, "savedRecipes/");
  onValue(reference, (snapshot)=>{
      console.log("Data Listener Fires Up with", snapshot);
      if(snapshot?.val()){
          //
          const fbObject = snapshot.val();
          const newArray=[];
         
          Object.keys(fbObject).map((key, index)=>{
              console.log(key, "||", index, "||", fbObject[key]);
               newArray.push({...fbObject[key], id: key});
          });
          updateFunc(newArray);
      }else{
          updateFunc([]);
      }
  })
  
  }

  export function deleteRecipe(item){
    const db=getDatabase();
    const reference = ref(db,`savedRecipes/${item.id}`);
    remove(reference);
} 

export {auth};
// const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);