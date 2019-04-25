import { ProductDAO, dbConnect} from "./app/dao/ProductDAO";


let main = () => {
    dbConnect();
    var product = new ProductDAO({
        name: "test 2",
        quantity: 2
    });

    product.save((err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log(product);
        }
    });

}
main()