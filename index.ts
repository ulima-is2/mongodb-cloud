import { ProductDAO} from "./app/dao/ProductDAO"
import connect from './app/dao/ConnectDB'

//const db: string = "mongodb+srv://admin:admin@cluster0-bhoot.mongodb.net/test?retryWrites=true";
const db: string = "mongodb://127.0.0.1:27017/app?gssapiServiceName=mongodb&retryWrites=true"

connect({db})

let main = () => {
    let product = new ProductDAO({
        name: "test 6",
        quantity: 6
    });

    product.save((err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log(product);            
        }
    });

    let products = ProductDAO.find({ quantity: { $gt: 5 }},
        (err: any, products: any) => {
        if (err) {
            console.log(err);
        } else {
            products.forEach( ( element : any )=> {
                console.log(element.name + ":" + element.quantity); 
            });                       
        }
        process.exit(1);
    });    
}
main()