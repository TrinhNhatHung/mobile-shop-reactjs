import React from "react";
import CartItem from "./CartItem";
import CartResult from "./CartResult";

function Cart({
  cart,
  deleteProductFromCart,
  updateProductInCart,
  completePurchase
}) {

  if (cart.list.length === 0) {
    return <div></div>;
  }

  return (
    <section className="section">
      <div className="table-responsive">
        <table className="table product-table">
          <thead>
            <tr>
              <th></th>
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.list.map((item) => {
              return (
                <CartItem
                  item={item}
                  deleteProductFromCart={deleteProductFromCart}
                  updateProductInCart={updateProductInCart}
                />
              );
            })}
            {cart.list.length > 0 && (
              <CartResult
                listCarts={cart.list}
                completePurchase={completePurchase}
              />
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Cart;
