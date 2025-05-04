import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import OrderTimeline from "./OrderTimeline";
import { Form, Link } from "react-router";

export default function OrderCard({ id, status }) {
  return (
    <li className="py-4 space-y-4">
      <div className="flex items-center">
        <div className="shrink-0">
          <div className="h-12 aspect-square bg-gray-200" />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate">{id}</p>
          <p className="text-sm text-gray-500 truncate">user@email.com</p>
        </div>
        {!status ? (
          <Form method="post" action={`/order/${id}/update-order?new-status=accepted`}>
            <Button type="submit" variant="default" className="bg-[#026E62]">
              Accepter
            </Button>
          </Form>
        ) : (
          <Button asChild>
            <Link to={`/order/${id}`}>
              <ExternalLink />
            </Link>
          </Button>
        )}
      </div>
      {status && <OrderTimeline id={id} status={status} />}
    </li>
  );
}
