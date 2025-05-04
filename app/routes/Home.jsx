import OrderCard from "@/components/OrderCard";
import OrdersPanel from "@/components/OrdersPanel";
import { useIncomingOrders } from "@/context/IncomingOrdersProvider";
import { pb } from "@/lib/pbconfig";

export function meta() {
  return [
    { title: "Likavery | Recevez vos commandes en toute simplicité" },
    {
      name: "description",
      content: "Gérez votre pharmacie et livrez vos clients !",
    },
  ];
}

export async function loader() {
  return await pb.collection("orders").getList(1, 20, {
    filter: `pharma="${pb.authStore.record.id}"&&status != "closed"`,
    requestKey: null,
  });
}

export default function Home({ loaderData: orders }) {
  const { incomingOrders } = useIncomingOrders();

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
            {orders.items?.length
              ? orders.items
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
            {incomingOrders?.length
              ? incomingOrders
                  .sort((a, b) => new Date(b.created) - new Date(a.created))
                  .map((order) => <OrderCard key={order.id} id={order.id} />)
              : "Pas de commandes à accepter"}
          </ul>
        </div>
      </OrdersPanel>
    </main>
  );
}
