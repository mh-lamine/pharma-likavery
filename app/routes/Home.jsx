import OrderCard from "@/components/OrderCard";
import { UseIncomingOrders } from "@/context/IncomingOrdersProvider";

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
  const { incomingOrders } = UseIncomingOrders();
  return (
    <main className="w-full max-w-screen-lg mx-auto p-8">
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Incoming orders
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y md:divide-y-0 md:grid grid-cols-2 gap-x-12"
          >
            {incomingOrders.length
              ? incomingOrders
                  .sort((a, b) => new Date(b.created) - new Date(a.created))
                  .map((order) => <OrderCard key={order.id} id={order.id} status={order.status} />)
              : "No orders yet"}
          </ul>
        </div>
      </div>
    </main>
  );
}
