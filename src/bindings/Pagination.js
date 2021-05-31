import {connect} from 'react-redux';
import Pagination from '../components/Pagination';
import {fetchProducts, changePage, setTotalProducts} from '../action/ProductsAction';

const mapStateToProps = (state)=> ({
    products : state.products
});

const mapActionToProps = {
    fetchProducts,
    changePage,
    setTotalProducts
}

export default connect(mapStateToProps, mapActionToProps)(Pagination);