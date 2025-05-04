import { createContext, useContext } from "react";

export const OrdersContext = createContext();

export function OrdersProvider({
  children,
  initialState,
  setOrders,
}) {
  return (
    <OrdersContext.Provider
      value={{ orders: initialState, setOrders }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export const useOrders = () => useContext(OrdersContext);
