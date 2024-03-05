import { ref, onUnmounted } from 'vue';
import { initializeApp } from 'firebase/app'
import { 
  getFirestore, collection, onSnapshot,
  addDoc, query, where, orderBy, serverTimestamp
} from 'firebase/firestore'
import {
  getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBSO8IwAm28IZe3JAyh4ZZvAwmYWm0Nphk",
    authDomain: "chat-app-5eff7.firebaseapp.com",
    projectId: "chat-app-5eff7",
    storageBucket: "chat-app-5eff7.appspot.com",
    messagingSenderId: "719730171032",
    appId: "1:719730171032:web:c6870d89303a611837c4ed"
  };

//init firebase app
initializeApp(firebaseConfig);

//init services
const dataBase = getFirestore();
const auth = getAuth();

//collection ref
const colRef = collection(dataBase, 'messages');

//query 
const usersMessagesQuery = query(colRef, orderBy('sentAt')); 

export function useChat() {
  const messages = ref([]);
  const unsubscribe = onSnapshot(usersMessagesQuery, (snapshot) => {
      messages.value = snapshot.docs.map((doc) =>({ ...doc.data(), id: doc.id }));
  })
  onUnmounted(unsubscribe);

return messages;
}

export function sendMessage(message){
  addDoc(colRef, {
    userId: message.userId,
    sender: message.sender,
    text: message.text,
    photoUrl: message.photoUrl,
    sentAt: serverTimestamp()
  })
}

export function useAuth(){
  const user = ref(null);
  const unsubscribe = onAuthStateChanged(auth, (userLogged) => (user.value = userLogged))
  onUnmounted(unsubscribe);
  // const isLoggedIn = () => user.value !== null;
  
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  const signOutUser = () => signOut(auth);
  

  return { user, signIn, signOutUser }
}

