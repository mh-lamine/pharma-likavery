import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import OrderTimeline from "./OrderTimeline";
import { Link } from "react-router";

export default function OrderCard({ order }) {
  return (
    <li className="py-4 space-y-4">
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
        <Button asChild>
          <Link to={`/order/${order.id}`}>
            <ExternalLink />
          </Link>
        </Button>
      </div>
      <OrderTimeline />
    </li>
  );
}
