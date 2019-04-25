import { ProductDAO} from "./app/dao/ProductDAO"
import connect from './app/dao/ConnectDB'

//const db: string = "mongodb+srv://admin:admin@cluster0-bhoot.mongodb.net/test?retryWrites=true";
const db: string = "mongodb://127.0.0.1:27017/app?gssapiServiceName=mongodb&retryWrites=true"

connect({db})

let main = () => {
    let product = new ProductDAO({
        name: "test 4",
        quantity: 4
    });

    product.save((err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log(product);            
        }
    });

    let products = ProductDAO.find((err: any, products: any) => {
        if (err) {
            console.log(err);
        } else {
            products.forEach( ( element : any )=> {
                console.log(element.name); 
            });                       
        }
    });

}
main()