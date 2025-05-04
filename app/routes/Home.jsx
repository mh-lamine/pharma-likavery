import OrderCard from "@/components/OrderCard";
import OrdersPanel from "@/components/OrdersPanel";
import { useOrders } from "@/context/OrdersProvider";

export function meta() {
  return [
    { title: "Likavery | Recevez vos commandes en toute simplicité" },
    {
      name: "description",
      content: "Gérez votre pharmacie et livrez vos clients !",
    },
  ];
}

export default function Home() {
  const { orders } = useOrders();
  const pendingOrders = orders?.filter(({ status }) =>
    ["accepted", "packed", "collected"].includes(status)
  );
  const newOrders = orders?.filter(({ status }) => status === "");

  return (
    <main className="w-full max-w-screen-lg mx-auto p-8 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">Tableau de bord</h2>
      </div>
      <OrdersPanel title="Commandes en cours">
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y md:divide-y-0 md:grid grid-cols-2 gap-x-12"
          >
            {pendingOrders?.length
              ? pendingOrders
                  .sort((a, b) => new Date(b.created) - new Date(a.created))
                  .map((order) => (
                    <OrderCard
                      key={order.id}
                      id={order.id}
                      status={order.status}
                    />
                  ))
              : "Pas de commandes en cours"}
          </ul>
        </div>
      </OrdersPanel>
      <OrdersPanel title="Nouvelles commandes">
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y md:divide-y-0 md:grid grid-cols-2 gap-x-12"
          >
            {newOrders?.length
              ? newOrders
                  .sort((a, b) => new Date(b.created) - new Date(a.created))
                  .map((order) => <OrderCard key={order.id} id={order.id} />)
              : "Pas de commandes à accepter"}
          </ul>
        </div>
      </OrdersPanel>
    </main>
  );
}
