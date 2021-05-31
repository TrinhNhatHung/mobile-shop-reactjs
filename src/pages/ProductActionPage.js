import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { config } from "../config/config";

function ProductActionPage() {
  const match = useRouteMatch();
  const history = useHistory();
  const productId = match.params.id;
  const [product, setProduct] = useState({});
  useEffect(async () => {
    const res = await axios.get(`${config.api.products}/${productId}`);
    setProduct(res.data);
  }, []);

  const onChangeInput = useCallback((event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "inventory"){
      value = parseInt(value);
    }
    setProduct({
      ...product,
      [name]: value,
    });
  });

  const onClickSaveBtn = useCallback(async () => {
    if (history.location.state.action === "update") {
      await axios.put(`${config.api.products}/${product.id}`, product);
    } else if (history.location.state.action === "add") {
      await axios.post(`${config.api.products}`, {
        ...product,
        image : "https://images-na.ssl-images-amazon.com/images/I/51wcd%2Bz24TL._SX425_.jpg",
        rating : 0
      });
    }
    history.replace("/admin");
  });
  return (
    <div className="container form">
      <Form>
        <FormGroup>
          <Label for="productName">Tên sản phẩm</Label>
          <Input
            type="text"
            name="name"
            id="productName"
            placeholder="Product name..."
            value={product.name}
            onChange={(event) => onChangeInput(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="productDescription">Mô tả sản phẩm</Label>
          <Input
            type="text"
            name="description"
            id="productDescription"
            placeholder="Description..."
            value={product.description}
            onChange={(event) => onChangeInput(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="productPrice">Giá</Label>
          <Input
            type="text"
            name="price"
            id="productPrice"
            placeholder="Price..."
            value={product.price}
            onChange={(event) => onChangeInput(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="productInventory">Số lượng</Label>
          <Input
            type="number"
            name="inventory"
            id="productInventory"
            placeholder="Number of product..."
            value={product.inventory}
            onChange={(event) => onChangeInput(event)}
          />
        </FormGroup>
        <Button color="danger" onClick={() => history.replace("/admin")}>
          Trở lại
        </Button>
        <Button color="primary" onClick={() => onClickSaveBtn()}>
          Lưu lại
        </Button>
      </Form>
    </div>
  );
}

export default ProductActionPage;
