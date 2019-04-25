import { ProductDAO} from "./app/dao/ProductDAO"
import connect from './app/dao/ConnectDB'

//const db: string = "mongodb+srv://admin:admin@cluster0-bhoot.mongodb.net/test?retryWrites=true";
const db: string = "mongodb://127.0.0.1:27017/app?gssapiServiceName=mongodb&retryWrites=true"

connect({db})

let main = () => {
    var product = new ProductDAO({
        name: "test 2",
        quantity: 2
    });

    product.save((err: any) => {
        console.log(err);
        if (err) {
            console.log(err);
        } else {
            console.log(product);
            
        }
    });

}
main()