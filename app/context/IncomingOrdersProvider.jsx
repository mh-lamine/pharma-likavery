import { createContext, useContext } from "react";

export const IncomingOrdersContext = createContext();

export function IncomingOrdersProvider({
  children,
  initialState,
  setIncomingOrders,
}) {
  return (
    <IncomingOrdersContext.Provider
      value={{ incomingOrders: initialState, setIncomingOrders }}
    >
      {children}
    </IncomingOrdersContext.Provider>
  );
}

export const UseIncomingOrders = () => useContext(IncomingOrdersContext);
