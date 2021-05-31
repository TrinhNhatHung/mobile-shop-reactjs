import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import ProductActionPage from "../pages/ProductActionPage";
import ProductManagePage from "../pages/ProductManagePage";

export const routes = [
  {
    path: "/home",
    exact: false,
    page : ()=> <HomePage/>
  },
  {
    path: "/admin",
    exact: true,
    page : ()=> <ProductManagePage/>
  },
  {
    path: "/admin/add",
    exact: true,
    page : ()=> <ProductActionPage/>
  },
  {
    path: "/admin/edit/:id",
    exact: true,
    page : ()=> <ProductActionPage/>
  },
  {
    path: "/login",
    exact: true,
    page : ()=> <LoginPage/>
  },
  {
    path : undefined,
    exact : undefined,
    page : ()=> <NotFound/>
  }
];