## 1. Introduction:

      1.1 Purpose:
      
            The purpose of this SRS is to delineate both the functional and non-functional requirements of the Food Recipe app.
            The document should serve as the cornerstone for successful, well-managed project completion as well 
            as a reliable source of information in the future.
            The purpose of this system is to present the food recipes that the user is looking for and allow the 
            user to Wishlist a food recipe based on their interest.

      1.2 Scope:
      
            This system will be a Mobile Application. This system aims to find and present recipes that the user is searching for
            and allow the user to Wishlist the recipe based on their preferences. The system contains a firebase database that stores
            the user information, food recipes, and the Wish-listed food items for each user. 
            
            In addition, this system also uses the Recipes API to extract the information about the food recipe and to display it
            to the user. 


## 2. System Features and Requirements:

       2.1 Functional Requirements:
       
           2.1.1. User Registration Use Case:
           
                  1. The login page shall be displayed where the existing user can log in to the application by clicking the login 
                     button and it shall search for the user record in the database and log in to the application if the record 
                     matches.
                     
                  2. The "sign up" button shall be displayed next to the "login" button, allowing a new user to register using an 
                     email address and a password.
  

           2.1.2 Home Screen Use Case:
           
                  1. Any user who has registered in the app shall have access to search for recipes using the recipe name as a 
                     filter. The search option will make it easier for users to locate desired recipes.
                     
                  2. The Wishlist button on the home screen shall be used to browse the recipes put to the Wishlist.
                  
                  3. The user shall be provided with the option of logging out from the app from the home screen.

           2.1.3. Food Recipe Screen Use Case:
           
                  1. The user interested in specific recipe information shall have a choice of adding them to the Wishlist.
                  
                  2. Users shall delete specific recipes from the Wishlist if necessary.
                  
                  3. User shall find the information from Recipes API such as the Ingredients, Instructions on how to prepare 
                     the food item, nutrients, servings, preparation time cooking time, and the image of the food item on the 
                     Food Recipe Screen.

       2.2 Non-Functional Requirements:
       
             2.2.1. Usability:
             
                    The app shall be easy to use and have a user-friendly interface.

             2.2.2. Stability:
             
                    The app shall be stable and non-crashed when used.

             2.2.2. Privacy:
             
                    The personal information of the authorized user shall only be accessed by the database administrator.

             2.2.2. Performance:
             
                    The app shall be fast and robust while handling the database and the Recipes API.
