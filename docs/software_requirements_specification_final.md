# Overview:

        The purpose of this SRS is to delineate both the functional and non-functional requirements of the Food Recipe app.
        The document should serve as the cornerstone for successful, well-managed project completion as well 
        as a reliable source of information in the future.
        The purpose of this system is to present the food recipes that the user is looking for and allow the 
        user to Wishlist a food recipe based on their interest.
    
# Software Requirements:

        To ensure that we achieve the expectations for the final result of our application, the software requirements must be consistent, accurate, and comprehensive.
        The two types of requirements are: Functional and Non-functional Requirements. Functional Requirements outlines the functions that are present in the app, 
        whereas Non-Functional requirements presents the app constraints and properties.
        
        ## Functional Requirements:
        
        ### User Registration:
        
        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | FR1             | The user shall be prompted to enter their email id and password on the login page.      |
        | FR2             | The user shall click on the Sign in button to log in to the app                         |
        | FR3             | The user shall create a new account by clicking on “Don’t have an account? Create here” |
        | FR4             | The user shall enter the email address and password on the Sign-Up Page                 |
        | FR5             | The user shall be prompted with the Alert message “Passwords Do Not Match!”             |
        |                 | from Firebase if the passwords don’t match.                                             |
        | FR6             | The user shall be prompted with the Alert message “The email address is badly           |
        |                 | formatted" from Firebase if the email address in invalid.                               |
        | FR7             | The user shall be prompted with the Alert message " User created" upon successful Signup|
        | FR8             | The user shall click on the Sign-up button to insert the data into Firebase.            |
        | FR9             | The user shall click on “Have an account? Sign In” to navigate to the Login page.       |
        | :-------------------------------------------------------------------------------------------------------: |
        
          ### Home Screen:
          
        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | FR10            | Any user who has registered in the app shall have access to select a recipe using the   |
        |                 | recipe name provided in the dropdown menu. The select option will make it easier for    |
        |                 | users to locate desired recipes.                                                        |
        | FR11            | The user shall use the Wishlist button on the top right of the home screen to browse the|
        |                 | reciped added to the Wishlist.                                                          |
        | FR12            | The user shall see the image displayed for a recipe on the home screen.                 |
        | FR13            | The user shall see the Recipe Details such as Recipe Name, Calories, Cuisine Type,      |
        |                 | Dish Type, Health Labels Type, and Ingredient Lines.                                    |
        | FR14            | The user shall use the Wishlist button to add a recipe to the Wishlist.                 |
        | FR15            | The user shall use the Logout button on the top left of the home screen to log out.     |
        | FR16            | The user shall be prompted with a Toast message once the Recipe is added to the wishlist|
        | FR17            | The user shall be prompted with a Toast message “Logged out successfully” once the user |
        |                 | logs out from the app.                                                                  |
        | :-------------------------------------------------------------------------------------------------------: |
        
        ### Wishlist Screen:

        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | FR18            | The user shall find the list of recipes added to the Wishlist from the Home screen.     |
        | FR19            | The user shall find the recipe’s image and the recipe’s name.                           |
        | FR20            | The user shall shall have the option of deleting a recipe from the Wishlist.            |
        | FR21            | The user shall shall be prompted with a Toast message “Recipe Removed” once the delete  |
        |                 | icon is clicked.                                                                        |
        | FR22            | The user shall shall see an empty Wishlist if no recipe has been added to the Wishlist. |
        | :-------------------------------------------------------------------------------------------------------: |
                
        ### API Implementation Requirements:
        
        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | FR23            | The user shall see the results of an API (Edamam Recipes API) displayed on the home     |
        |                 | screen.                                                                                 |
        | FR24            | The user shall see a default recipe being displayed on the Home Screen before selection |
        |                 | which is passed through a default API via Axios.                                        |
        | FR25            | The application shall use the API key(app_key) and API id(app_id) to fetch the results. |
        | FR26            | The application shall use two APIs - one to populate the default recipe even before the |
        |                 | user selects a recipe and the other API is used to populate the results based on the    |
        |                 | user selection.                                                                         |
        | FR27            | The application shall also handle Promise rejection errors which can be caused by Axios.|
        | :-------------------------------------------------------------------------------------------------------: |
        
        ### Information Retrieval From Firebase:
        
        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | FR28            | The user shall see the recipes Wishlisted by a particular user in the Wishlist screen by|
        |                 | retrieving the data from the Firebase.                                                  |
        | FR29            | The user shall delete a recipe in the Wishlist screen using the ID populated from the   |
        |                 | Firebase.                                                                               |
        | FR30            | The user shall be validated for the entered email address using the Firebase validation.|
        | FR31            | The user shall be validated for the entered password using the Firebase validation.     |
        | FR32            | The user shall be authenticated based on the credentials already present in the Firebase|
        | :-------------------------------------------------------------------------------------------------------: |
        
        ## Non-Functional Requirements:  
        
        ### Usability:
        
        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | NFR1            | The app shall be easy to use and have a user-friendly interface.                        |
        | NFR2            | GUI shall be simple and clear.                                                          |
        | NFR3            | The user shall be provided with interactive buttons.                                    |
        | NFR4            | The user shall have colorful icons in the UI.                                           |
        | NFR5            | The user shall be provided with proper Alerts when an error occurs.                     |
        | NFR6            | The user shall be provided with the Toast message when an insert or deletion occurs in  |
        |                 | the Wishlist.                                                                           |
        | NFR7            | The user shall also be provided with the Toast message when logging out from the app.   |
        | NFR8            | The user shall easily navigate through the screens.                                     |
        | :-------------------------------------------------------------------------------------------------------: |
        
            
        ### Performance:
        
        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | NFR9            | The app shall provide the API response to the user as recipe details without any delay. |
        | NFR10           | The application shall store the recipe in the Wishlist within a few seconds.            |
        | NFR11           | The application shall remove the recipe in the Wishlist within a few seconds.           |
        | NFR12           | The user shall log in to the application without any delay in the response time.        |
        | NFR13           | The application shall fetch information from the Firebase database very quickly.        |
        | :-------------------------------------------------------------------------------------------------------: |

        ### Operational Requirements:
        
        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | NFR14           | The application shall operate as a web application.                                     |
        | NFR15           | The application shall operate in an android operating system.                           |
        | NFR16           | The application shall be stable across multiple devices.                                |
        | NFR17           | The application shall retrieve the recipe information through an API call.              |
        | NFR18           | The application shall support multiple logins and thus be crash free.                   |
        | :-------------------------------------------------------------------------------------------------------: |
        
        ### Security:
        
        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | NFR19           | The user information shall be secured while registering into the application.           |
        | NFR20           | The application shall store the personalized Wishlist of recipes based on the           |
        |                 | user's email address.                                                                   |
        | NFR21           | The application shall restrict the user for strong password length.                     |
        | NFR22           | The user shall not see the password at the point of entry or at any other time.         |
        | NFR23           | The user shall not be able to edit any application data only the system administrator   |
        |                 | can do.                                                                                 |
        | :-------------------------------------------------------------------------------------------------------: |
        
        ### Maintanibility:
        
        | :-------------------------------------------------------------------------------------------------------: |
        | ID              | Requirement                                                                             |
        | :-------------: | :-------------------------------------------------------------------------------------: |
        | NFR24           | The application shall help to track user activity over time.                            |
        | NFR25           | The system administrator shall overview the application’s stability.                    |
        | NFR26           | The system administrator shall track the average engagement time of the user.           |
        | NFR27           | The system administrator shall add or delete the user in Firebase.                      |
        | NFR28           | The system administrator shall monitor the users by country.                            |
        | :-------------------------------------------------------------------------------------------------------: |
        