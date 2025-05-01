import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useUser from "@/hooks/useUser";
import { pb } from "@/lib/pbconfig";
import OrderCard from "@/components/OrderCard";

export async function loader() {
  return await pb.collection("orders").getList(1, 20, {
    filter: `pharma="${pb.authStore.record.id}"&&status="closed"`,
    requestKey: null,
  });
}

export default function Account({loaderData: orders}) {
  const { user } = useUser();
  const { name, email, address } = user;

  return (
    <main className="w-full max-w-screen-lg mx-auto p-8 space-y-4">
      <h2 className="text-2xl font-medium">Informations</h2>
      <Form method="post" className="flex flex-col items-center gap-4">
        <InfoField name="name" type="text" defaultValue={name} />
        <InfoField name="email" type="email" defaultValue={email} />
        <InfoField name="address" type="text" defaultValue={address} />
        <Button type="submit" className="w-full">
          Modifier
        </Button>
      </Form>
      <Separator />
      <h2 className="text-2xl font-medium">Historique des commandes</h2>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Commandes cloturées
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
              : "No orders yet"}
          </ul>
        </div>
      </div>
    </main>
  );
}

function InfoField({ name, type, defaultValue }) {
  return (
    <div className="w-full space-y-1">
      <Label htmlFor={name}>{name}</Label>
      <Input type={type} id={name} name={name} defaultValue={defaultValue} />
    </div>
  );
}

function OrderItem({ order }) {
  const { id, delivery_address, progress } = order;
  return (
    <Link to={`/order/${id}`} className="flex gap-2 p-2 border rounded">
      <div className="h-20 aspect-square bg-gray-500 rounded" />
      <div className="text-sm">
        <h3 className="text-lg font-medium">Commande #{order.id}</h3>
        <p>Adresse de livraison : {delivery_address}</p>
        <p>Status : {progress}</p>
      </div>
    </Link>
  );
}
