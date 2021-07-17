import React from 'react';
import {FlatList,Button, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/color';
const ProductOverviewScreen = props =>{
    const product = useSelector(state => state.products.availableProducts);
    console.log(product);
    const dispatch = useDispatch();
    const selectItemHandler = (id,title) =>{
        props.navigation.navigate( 'ProductDetail',{ 
            productId: id,
            productTitle: title
        });
    }
    return  <FlatList 
                data={product}
                keyExtractor={item => item.id}
                renderItem={itemData => 
                    <ProductItem 
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        price={itemData.item.price}
                        onSelect={()=>{
                            selectItemHandler(itemData.item.id, itemData.item.title)
                        }}>
                        <Button 
                            color={Colors.primary} 
                            title="View Details" 
                            onPress={()=>{
                                selectItemHandler(itemData.item.id, itemData.item.title)
                            }}/>
                        <Button 
                            color={Colors.primary} 
                            title="To Cart" 
                            onPress={()=>{
                                dispatch(cartActions.addToCart(itemData.item));
                            }}/>
                    </ProductItem>}
    />; 
};

ProductOverviewScreen.navigationOptions = navData =>{
    return{
        headerTitle:'All Products',
        headerLeft:(<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName={Platform.OS==='android'?'md-menu':'ios-menu'} 
        onPress={()=>{
            navData.navigation.toggleDrawer();
        }}/>
    </HeaderButtons>),
    headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Cart" iconName={Platform.OS==='android'?'md-cart':'ios-cart'} 
        onPress={()=>{
            navData.navigation.navigate('Cart')
        }}/>
    </HeaderButtons>
    }
}

export default ProductOverviewScreen;