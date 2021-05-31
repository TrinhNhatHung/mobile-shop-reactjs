import {connect} from 'react-redux';
import ProductsAdmin from '../components/ProductsAdmin';
import { fetchProductsAdmin, updateProductsAdmin,deleteProductsAdmin} from '../action/AdminAction';

const mapStateToProps = (state)=> ({
    admin : state.admin
})

const mapActionToProps = {
    fetchProductsAdmin,
    updateProductsAdmin,
    deleteProductsAdmin
}

export default connect(mapStateToProps, mapActionToProps)(ProductsAdmin);