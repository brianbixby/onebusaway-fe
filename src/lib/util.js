import { asyncComponent } from 'react-async-component';

export const log = (...args) => console.log(...args);
export const logError = (...args) => console.error(...args);
export const renderIf = (test, component) => test ? component : undefined;
export const classToggler = (options) => Object.keys(options).filter(key => !!options[key]).join(' ');

export const formatDate = date => {
  let dateArr = new Date(date).toDateString().split(' ');
  return `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
};

export const userValidation = props => {
    if(!props.userAuth) {
      let { history } = props;
      
      let token = localStorage.oneBusAwayToken;  
      if(token) {
        props.tokenSignIn(token)
          .then(() => {
            return props.userProfileFetch()
              .catch(err => logError(err));
          })
          .catch(err => {
            localStorage.removeItem("oneBusAwayToken");
            logError(err);
            if(props.location.pathname == '/user/*')
              return history.replace('/');
          });
      } else {
        if(props.location.pathname !== '/user/*')
          return history.replace('/');
      }
    }
    return;
  };

export const makeAsyncComponent = importStmt => {
  return asyncComponent({
    resolve: () => importStmt
  })
};