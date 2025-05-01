import OrderTimeline from "@/components/OrderTimeline";
import { Button } from "@/components/ui/button";
import { UseIncomingOrders } from "@/context/IncomingOrdersProvider";
import { ExternalLink } from "lucide-react";

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
    <main className="flex-1 p-8">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
          <ul role="list" className="divide-y">
            {incomingOrders.length
              ? incomingOrders
                  .sort((a, b) => new Date(b.created) - new Date(a.created))
                  .map((order) => (
                    <li key={order.id} className="py-4 space-y-4">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <div className="h-12 aspect-square bg-gray-200" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {order.id}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            user@email.com
                          </p>
                        </div>
                        <Button>
                          <ExternalLink />
                        </Button>
                      </div>
                      <OrderTimeline />
                    </li>
                  ))
              : "No orders yet"}
          </ul>
        </div>
      </div>
    </main>
  );
}
