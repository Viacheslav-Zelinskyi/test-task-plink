import { DataGrid } from "@material-ui/data-grid";
import store from "../../redux";
import { selectProduct } from "../../redux/reducers/selectedProduct";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ height: 400, width: "840px" }}>
        <DataGrid rows={products} columns={columns} pageSize={5}></DataGrid>
      </div>
    </div>
  );
};

export default Products;

const columns = [
  { field: "id", headerName: "ID" },
  { field: "product", headerName: "Product", width: 170 },
  { field: "sku", headerName: "SKU", width: 120 },
  { field: "ram", headerName: "RAM", width: 110 },
  { field: "hdd", headerName: "HDD", width: 110 },
  { field: "price", headerName: "Price", width: 110 },
  {
    field: "button",
    headerName: "Buy",
    sortable: false,
    renderCell: (params) => (
      <Link
        to="/user"
        className="buyButton"
        onClick={() => {
          store.dispatch(selectProduct(params.row));
        }}
      >
        Buy
      </Link>
    ),
  },
];

const products = [
  {
    id: 1,
    product: "Lenovo IC-512",
    sku: "ZC11501",
    ram: 4,
    hdd: 512,
    price: 550,
  },
  {
    id: 2,
    product: "HP Megabook 14",
    sku: "ZC12001",
    ram: 2,
    hdd: 240,
    price: 420,
  },
  {
    id: 3,
    product: "Lenovo IC-520",
    sku: "ZC22004",
    ram: 8,
    hdd: 1024,
    price: 600,
  },
  {
    id: 4,
    product: "Asus ThinkPad 15-1554",
    sku: "ZC15030",
    ram: 16,
    hdd: 1024,
    price: 700,
  },
  {
    id: 5,
    product: "Asus ThinkPad 14-254",
    sku: "ZX5467",
    ram: 8,
    hdd: 240,
    price: 520,
  },
  {
    id: 6,
    product: "HP Elitebook 15",
    sku: "ZXC5460",
    ram: 12,
    hdd: 515,
    price: 889,
  },
];
