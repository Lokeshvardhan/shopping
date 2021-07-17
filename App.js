import React,{useState} from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { StyleSheet } from 'react-native';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const fetchfont = ()=>{
  return  Font.loadAsync({
     'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
     'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
   });
 };
export default function App() {
  const [fontloaded,setfontloaded]=useState(false);
  if(!fontloaded){
    return (
        <AppLoading 
        startAsync={fetchfont }
        onFinish={()=> setfontloaded(true)}
        onError={console.warn}
        />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
