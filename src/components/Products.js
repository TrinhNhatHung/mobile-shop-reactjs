import React, { useCallback, useEffect } from "react";

function Products({
  fetchProducts,
  addProductToCart,
  products,
  cart,
  updateProductInCart
}) {
  useEffect(() => {
    const {page , limit} = products.pagination;
    fetchProducts(page, limit);
  }, [cart,products.pagination.page]);

  const onClickAddCartBtn = useCallback((productId) => {
    let qtyInCart = cart.list.find(
      (element) => element.id === productId
    );
    if (qtyInCart === undefined) {
          addProductToCart(productId);
    } else {
          updateProductInCart(productId, (quantity)=> quantity +1 );
    }
  });

  const showRating = useCallback((rating) => {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }

    for (let i = 1; i <= 5 - rating; i++) {
      result.push(<i key={i} className="fa fa-star-o"></i>);
    }

    return result;
  });

  return (
    <section className="section">
      <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
      <div className="row">
        {products.list.map((product) => {
          return (
            <div className="col-lg-4 col-md-6 mb-r">
              <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt={product.name}
                  />
                  <a>
                    <div className="mask waves-light waves-effect waves-light"></div>
                  </a>
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    <strong>
                      <a>{product.name}</a>
                    </strong>
                  </h4>
                  <ul className="rating">{showRating(product.rating)}</ul>
                  <p className="card-text">{product.description}</p>
                  <div className="card-footer">
                    <span className="left">{product.price}$</span>
                    <span className="right">
                      <a
                        className="btn-floating blue-gradient"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Add to Cart"
                        onClick={() => onClickAddCartBtn(product.id)}
                      >
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
