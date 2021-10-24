import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBzRKclxxo_J4bw59NrK6PThK-4nNV6pF0",
  authDomain: "idobatakaigi-with-hamu-a4f00.firebaseapp.com",
  projectId: "idobatakaigi-with-hamu-a4f00",
  storageBucket: "idobatakaigi-with-hamu-a4f00.appspot.com",
  messagingSenderId: "147481387889",
  appId: "1:147481387889:web:7e4614d0fa03bab8298cd0"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
