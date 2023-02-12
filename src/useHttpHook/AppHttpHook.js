import React, {useEffect, useState, useCallback} from "react";
import useHttp from "./hooks/use-http";
import Products from "./Products/Products";
import NewProduct from "./NewProduct/NewProduct";

function AppHttpHook() {
    const [products, setProducts] = useState([]);

    const httpRequestData = useHttp()

    const {isLoading, error, sendHttpRequest: fetchProducts} = httpRequestData;

    useEffect(() => {
        const manageProducts = function (productsData) {
            const loadedProducts = [];
            for (const productKey in productsData) {
                loadedProducts.push({id: productKey, text: productsData[productKey].text});
            }
            setProducts(loadedProducts);
        }

        fetchProducts({
            url: "https://react-course-86712-default-rtdb.europe-west1.firebasedatabase.app/products.json",

        }, manageProducts);
    }, [fetchProducts])
    const productAddHandler = (product) => {
        setProducts((prevProducts) => prevProducts.concat(product));
    };

    return (
        <React.Fragment>
            <NewProduct onAddProduct={productAddHandler}/>
            <Products
                items={products}
                loading={isLoading}
                error={error}
                onFetch={fetchProducts}
            />
        </React.Fragment>
    );
}

export default AppHttpHook;
