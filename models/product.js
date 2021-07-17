import products from "../store/reducers/products";

class Product {
    constructor(id, ownerId, title, imageUrl, description, price){
        this.id=id;
        this.ownerId=ownerId;
        this.title=title;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl;
    }
}

export default Product;