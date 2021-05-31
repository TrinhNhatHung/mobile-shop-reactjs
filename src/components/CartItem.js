import React, { useCallback } from "react";

function CartItem({ item,updateProductInCart , deleteProductFromCart }) {
  const deleteCartItem = useCallback((atId) => {
    deleteProductFromCart(atId);
  });

  const updateCart = useCallback((functional) => {
    updateProductInCart(item.id, functional);
  });

  return (
    <tr>
      <th scope="row">
        <img src={item.image} alt={item.name} className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{item.name}</strong>
        </h5>
      </td>
      <td>{item.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{item.quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label
            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            onClick={() => updateCart((value) => value - 1)}
          >
            <a>—</a>
          </label>
          <label
            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            onClick={() => updateCart((value) => value + 1)}
          >
            <a>+</a>
          </label>
        </div>
      </td>
      <td></td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Remove item"
            onClick={() => deleteCartItem(item.id)}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
