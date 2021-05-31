import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Badge, Button, Table } from "reactstrap";
import Notify from "./Notify";

function ProductsAdmin({ admin, fetchProductsAdmin, deleteProductsAdmin }) {
  useEffect(() => {
    fetchProductsAdmin();
  }, []);

  const [notification, setNotification] = useState({
    content: "",
    isOpen: false,
    color: "info",
  });

  const deleteProduct = useCallback((productId) => {
    deleteProductsAdmin(productId);
    setNotification({
      ...notification,
      isOpen: true,
      content: "Delete success",
      color: "info",
    });
  });

  const history = useHistory();

  const updateProduct = useCallback((productId) => { 
    history.push(`admin/edit/${productId}`,{ action : "update"});
  });

  return (
    <div className="products-admin">
      <Notify
        notification={notification}
        setNotification={setNotification}
        className="notification"
      />
      <p className="title">Danh sách sản phẩm</p>
      <Button color="primary" onClick={()=> history.push("admin/add",{action : "add"})}>Thêm sản phẩm</Button>
      <div className="container">
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã SP</th>
              <th>Tên</th>
              <th>Mô tả</th>
              <th>Giá</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {admin.list.map((product, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    {product.inventory > 0 ? (
                      <Badge color="success">Còn hàng</Badge>
                    ) : (
                      <Badge color="secondary">Hết hàng</Badge>
                    )}
                  </td>
                  <td>
                    <Button
                      color="primary"
                      size="sm"
                      onClick={() => updateProduct(product.id)}
                    >
                      Sửa
                    </Button>
                    <Button
                      color="secondary"
                      size="sm"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductsAdmin;
