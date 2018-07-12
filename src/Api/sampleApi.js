export class sampleApi {
     static getAllCats() {
          return fetch('https://www.reddit.com/r/reactjs.json').then(response => {
               return response.json();
          }).catch(error => {
               return error;
          });
     }
}