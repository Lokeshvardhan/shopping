import React from 'react';
import {FlatList, View,Text,StyleSheet,TouchableOpacity, Touchable, Platform} from 'react-native';
import {Ionicons } from '@expo/vector-icons';
const CartItem = props =>{
    return <View style={styles.cartitem}>
        <View style={styles.itemdata}>
            <Text style={styles.quantity}>{props.quantity}</Text>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.itemdata}>
            <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
            {props.deletable && <TouchableOpacity onPress={props.onRemove} style={styles.delete}>
                <Ionicons 
                    name={Platform.OS === 'android'?'md-trash':'ios-trash'}
                    size={23}
                    color="red"   
                />
            </TouchableOpacity>}
        </View>
    </View>
}

const styles=StyleSheet.create({
    cartitem:{
        padding:10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20
    },
    itemdata:{
        flexDirection:'row',
        alignItems:'center',


    },
    quantity:{
        fontFamily:'open-sans',
        color:'#888',
        fontSize:16
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:16,

    },
    amount:{
        fontFamily:'open-sans-bold',
        fontSize:16,
    },
    delete:{
        marginLeft:20,
    }
})

export default CartItem;