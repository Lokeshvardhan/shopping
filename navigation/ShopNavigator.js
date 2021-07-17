import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {Platform} from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import UserProductsScreen from '../screens/user/UserProductScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import AuthScreen from '../screens/user/AuthScreen';
import OrdersScreen from '../screens/shop/OrderScreen';
import Colors from '../constants/color';
import CartScreen from '../screens/shop/CartScreen';
import { Ionicons } from '@expo/vector-icons';

const defaultNavOptions ={
    headerStyle:{
        backgroundColor: Platform.OS ==='android'?Colors.primary:''
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    headerBackTitleStyle:{
        fontFamily:'open-sans'
    },
    headerTintColor:Platform.OS ==='android'? 'white': Colors.accent
 }
const ProductsNavigator = createStackNavigator({
    ProductsOverview:ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart:CartScreen
}, {
    navigationOptions:{
    drawerIcon:drawerConfig=>
            <Ionicons  
                name={Platform.OS === 'android'?'md-cart':'ios-cart'}
                size={23}
                color={drawerConfig.tintColor}
        />
},
    defaultNavigationOptions:defaultNavOptions 
    }
);

const OrdersNavigator = createStackNavigator({
    Orders:OrdersScreen,

},{
    navigationOptions:{
        drawerIcon:drawerConfig=>
                <Ionicons  
                    name={Platform.OS === 'android'?'md-list':'ios-list'}
                    size={23}
                    color={drawerConfig.tintColor}
            />
    },
    defaultNavigationOptions:defaultNavOptions
});

const AdminNavigator = createStackNavigator({
    UserProducts:UserProductsScreen,
    EditProduct:EditProductScreen
},{
    navigationOptions:{
        drawerIcon:drawerConfig=>
                <Ionicons  
                    name={Platform.OS === 'android'?'md-create':'ios-create'}
                    size={23}
                    color={drawerConfig.tintColor}
            />
    },
    defaultNavigationOptions:defaultNavOptions
});
const ShopNavigator = createDrawerNavigator({
    Products:ProductsNavigator ,
    Orders: OrdersNavigator,
    Admin: AdminNavigator

},{
    contentOptions:{
        activeTintColor:Colors.primary
    }
});
const AuthNavigator = createStackNavigator({
    Auth:AuthScreen
},{
    defaultNavigationOptions:defaultNavOptions 
});

const MainNavigator =  createSwitchNavigator({
    Auth:AuthNavigator,
    Shop: ShopNavigator
});
export default createAppContainer(MainNavigator);