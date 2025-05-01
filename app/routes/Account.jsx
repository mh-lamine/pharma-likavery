import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useUser from "@/hooks/useUser";

export default function Account() {
  const { user } = useUser();
  const { name, email, address } = user;

  return (
    <main className="flex flex-col flex-1 px-8 py-4 space-y-4">
      <h2 className="text-2xl font-medium">Mon compte</h2>
      <Form method="post" className="flex flex-col items-center gap-4">
        <InfoField name="name" type="text" defaultValue={name} />
        <InfoField name="email" type="email" defaultValue={email} />
        <InfoField name="address" type="text" defaultValue={address} />
        <Button type="submit" className="w-full">
          Modifier
        </Button>
      </Form>
      <Separator />
      <h2 className="text-2xl font-medium">Mes dernières commandes</h2>
      {/* {user.orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))} */}
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
