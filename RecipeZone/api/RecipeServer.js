import axios from 'axios';

const RecipeServer = axios.create({
  baseURL: 'https://api.edamam.com/api/recipes/v2/',
});

// adds token, if we have one to all requests.
RecipeServer.interceptors.request.use(
  async (config) => {
    // called when request is made.
    config.headers.Accept = 'application/json';
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (err) => {
    // called when error
    return Promise.reject(err);
  }
  
);

export const getRecipes = async (callback) => {
  const response = await RecipeServer.get(
    `2dbeaf3e96adcdcbcb3a4445ec9729d9?app_id=86b8ea80&app_key=9681a5085f03e57063dfcfd08ed16d1a&type=public`
  );
  callback(response.data);  
};


export const getRecipesAPI = async (callback,receipe) => { 

  const response = await RecipeServer.get(
    `${receipe}?app_id=86b8ea80&app_key=9681a5085f03e57063dfcfd08ed16d1a&type=public`
    // `2dbeaf3e96adcdcbcb3a4445ec9729d9?app_id=86b8ea80&app_key=9681a5085f03e57063dfcfd08ed16d1a&type=public`
  );
  callback(response.data);  
};







export default RecipeServer;