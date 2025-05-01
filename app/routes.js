import { index, route, layout } from "@react-router/dev/routes";

export default [
  layout("layout/Protected.jsx", [
    index("routes/Home.jsx"),
    route("account", "routes/Account.jsx"),
    route("order/:id", "routes/OrderDetails.jsx"),
    route("order/:id/accept-order", "routes/rs/accept-order.jsx"),
  ]),
];
