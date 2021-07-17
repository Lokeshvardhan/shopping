import PRODUCTS from '../../data/dummydata';
import {DELETE_PRODUCT,CREATE_PRODUCT,UPDATE_PRODUCT} from '../actions/products';
import Product from '../../models/product';
import ProductItem from '../../components/shop/ProductItem';
const initialstate ={
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialstate, action)=>{
    console.log(state,'hii');
    switch ( action.type) {
        case CREATE_PRODUCT:
            const newProduct= new Product(
                        new Date().toString(), 
                        'u1',action.productData.title,
                        action.productData.imageUrl, 
                        action.productData.description, 
                        action.productData.price);
                        return {
                            ...state,
                            availableProducts:state.availableProducts.concat(newProduct),
                            userProducts:state.userProducts.concat(newProduct)
                        };
        case UPDATE_PRODUCT:
            const productIndex=state.userProducts.findIndex(prod => prod.id === action.pid);
            const updatedProduct= new Product(
                action.pid, 
                state.userProducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl, 
                action.productData.description, 
                state.userProducts[productIndex].price
            );
                const updatedUserProduct=[...state.userProducts];
                updatedUserProduct[productIndex]=updatedProduct;
                const availabelProductIndex=state.availableProducts.findIndex(prod => prod.id === action.pid);
                const updatedAvaliableProducts= [...state.availableProducts];
                updatedAvaliableProducts[availabelProductIndex]=updatedProduct; 
                return {
                    ...state,
                    availableProducts:updatedAvaliableProducts,
                    userProducts:updatedUserProduct
                };
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(product =>product.id !== action.pid),
                availableProducts: state.availableProducts.filter(product =>product.id !== action.pid)
            }
    }
    return state; 
};