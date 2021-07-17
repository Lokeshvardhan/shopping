export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
  return async dispatch => {
    let response;
    try{
     response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5iILVD9iBkNBZ_04ABBpvy0lQ66FhCjA',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    } catch(err){
      console.log(err);
    }
    // if (!response.ok) {
    //   throw new Error('Something went wrong!');
    // }
    
    const resData = await response.json();
    console.log(resData);
    dispatch({ type: SIGNUP });
  };
  
};
