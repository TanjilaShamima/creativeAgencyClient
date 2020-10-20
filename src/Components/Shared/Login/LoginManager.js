import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const defaulftLoggingFramework = () => {
    if(firebase.apps.length === 0)
        firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then( res => {
      const newUserInfo = res.user;
      const addRole = (userEmail, user) => {
        fetch(`https://vast-lake-13372.herokuapp.com/adminSearch?email=${userEmail}`)
        .then(res => res.json())
        .then((data) =>{
          if(data.length === 1){

            user.role = "admin";
          }
          else {
            user.role = "user";
          }
        })
        return user;
      }
      addRole(newUserInfo && newUserInfo.email, newUserInfo);
      newUserInfo.name = newUserInfo.displayName;
      return newUserInfo;
    })
    .catch(err => {
      return err.message;
    });
}