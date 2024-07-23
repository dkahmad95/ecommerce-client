import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL
console.log(BASE_URL)
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// console.log(TOKEN)

let TOKEN;

try {
  const persistedRoot = localStorage.getItem("persist:root");

  if (persistedRoot) {
    const userString = JSON.parse(persistedRoot).user;
    if (userString) {
      const userObject = JSON.parse(userString);
      if (userObject && userObject.currentUser) {
        TOKEN = userObject.currentUser.accessToken;
      } else {
        throw new Error('User or currentUser not found in the parsed object');
      }
    } else {
      throw new Error('User string not found in the parsed root object');
    }
  } else {
    throw new Error('Persisted root not found in localStorage');
  }
} catch (error) {
  console.error('Error retrieving token:', error.message);
  // Optionally, handle the error further or set TOKEN to a default value
  TOKEN = null; // Or handle it according to your needs
}
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}` }
})