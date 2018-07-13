export const testMiddleWare = store => next => action => {
     console.log("Middleware triggered:", action);
     if(action.type === 'ADD_ARTICLE') {
          console.log(`ADD_ARTICLE button was clicked, current state is ${store.getState()} \nI will now add to it`);
     }
     next(action);
}
