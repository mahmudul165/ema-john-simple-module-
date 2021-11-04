import { initializeApp } from "firebase/app";

import firebaseConfig from "./firebase.config";
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;
/*
--------step----- 1----- for authentication
Initial Setup
1.firebase: create project
2.create web app
3.get configuration
4.initialize firebase
5.enable auth method
--------step -----2------
1.create login component
2.register component
3.create router
4.login and register


--------step-----3-----
1.set up sign in method
2.signout
3.useState
4.special obserber

--------step-----3-----
1.create a auth context
2.create context provider
3.use auth provider
3.1.value provider
4.create use auth hook

*/
