import { index, route, layout } from "@react-router/dev/routes";

export default [
  layout("layout/Protected.jsx", [
    index("routes/Home.jsx"),
    route("account", "routes/Account.jsx"),
    route("order/:id", "routes/OrderDetails.jsx"),
    route("order/:id/update-order", "routes/rs/update-order.jsx"),
  ]),
];
