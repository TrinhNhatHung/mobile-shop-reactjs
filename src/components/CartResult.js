import React, { useCallback } from "react";
import * as message from "../constants/Message";

function CartResult({ listCarts, completePurchase }) {
  let reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price * currentValue.quantity;
  const totalPayment = listCarts.reduce(reducer, 0);

  const pay = useCallback(() => {
    completePurchase(listCarts);
  });
  return (
    <tr>
      <td colSpan="3"></td>
      <td>
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>{totalPayment}</strong>
        </h4>
      </td>
      <td colSpan="3">
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
          onClick={() => pay()}
        >
          Complete purchase
        </button>
      </td>
    </tr>
  );
}

export default CartResult;
