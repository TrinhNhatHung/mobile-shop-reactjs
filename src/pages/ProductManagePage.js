import React from 'react';
import { useHistory } from 'react-router';
import ProductsAdmin from '../bindings/ProductsAdmin';

function ProductManagePage() {
    const history = useHistory();
    const user = localStorage.getItem('user');
    if (user === null){
        alert("You must login to access this page");
        history.push("/login", { from : '/admin'});
    }
    return (
        <div className="container">
            <ProductsAdmin/>
        </div>
    );
}

export default ProductManagePage;