import React, { useCallback, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

const CustomPagingLink = ({ label, to, isActive, pageTo, changePage, fetchProducts, limit }) => {
  const onClickPaginnation = useCallback((page) => {
    changePage(page);
    fetchProducts(page, limit);
  });
  return (
    <li
      className={`page-item ${isActive ? "active" : ""}`}
      onClick={() => onClickPaginnation(pageTo)}
    >
      <NavLink className="page-link" to={to}>
        {label}
      </NavLink>
    </li>
  );
};

function Pagination({
  products,
  changePage,
  fetchProducts,
  setTotalProducts
}) {
  const history = useHistory();
  useEffect(()=> {
    let page = 1;
    let pathname = history.location.pathname;
    let positionSlash = pathname.lastIndexOf("/");
    if (positionSlash !== 0){
      page = parseInt(pathname.substring(positionSlash + 1, pathname.length));
    }
    page = Number.isNaN(page) ? 1 : page;
    changePage(page);
  },[]);

  useEffect(()=> {
    setTotalProducts();
  }, products)

  const totalPage = Math.ceil(products.pagination.totalProducts / products.pagination.limit);
  let path = history.location.pathname;
  let positionPagePath = path.lastIndexOf("/");
  let currentPage = products.pagination.page;
  if (positionPagePath !== 0) {
    path = path.substring(0, positionPagePath);
  }
  let prePage = currentPage !== 1 ? currentPage - 1 : 1;
  let nextPage = currentPage !== totalPage ? currentPage + 1 : totalPage;

  const showPagination = useCallback((totalPage) => {
    let result = [];
    result.push(
      <CustomPagingLink
        label="Previous"
        to={`${path}/${prePage}`}
        isActive={false}
        changePage={changePage}
        pageTo={prePage}
        fetchProducts={fetchProducts}
        limit={products.pagination.limit}
      />
    );
    for (let i = 1; i <= totalPage; i++) {
      let isActive = products.pagination.page === i;
      result.push(
        <CustomPagingLink
          label={i}
          to={`${path}/${i}`}
          isActive={isActive}
          changePage={changePage}
          pageTo={i}
          fetchProducts={fetchProducts}
          limit={products.pagination.limit}
        />
      );
    }
    result.push(
      <CustomPagingLink
        label="Next"
        to={`${path}/${nextPage}`}
        isActive={false}
        changePage={changePage}
        pageTo={nextPage}
        fetchProducts={fetchProducts}
        limit={products.pagination.limit}
      />
    );
    return result;
  });

  return <ul className="pagination">{showPagination(totalPage)}</ul>;
}

export default Pagination;
