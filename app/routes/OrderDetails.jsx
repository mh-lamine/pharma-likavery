import OrderTimeline from "@/components/OrderTimeline";
import { pb } from "@/lib/pbconfig";
import { Info } from "lucide-react";

export async function loader({ params }) {
  const order = await pb.collection("orders").getOne(params.id);

  return {
    ...order,
    prescription: pb.files.getURL(order, order.prescription, {
      thumb: "200x200",
    }),
  };
}

export default function OrderDetails({ loaderData: order }) {
  const { id, prescription, status } = order;
  return (
    <main className="w-full max-w-screen-lg mx-auto p-8 space-y-4">
      <h2 className="text-2xl font-medium">Commande #{id}</h2>
      <div className="sm:w-2/3 lg:w-1/2 space-y-4">
        <Alert />
        <OrderTimeline id={id} status={status} showLabels={true} />
      </div>
      <img
        src={prescription}
        className="p-1 rounded overflow-hidden border-4 border-[#026E6250] max-h-screen"
      />
    </main>
  );
}

const Alert = () => (
  <div
    className="flex items-center gap-4 p-4 text-sm text-[#026E62] rounded-lg bg-[#026E6240] w-fit"
    role="alert"
  >
    <Info />
    <span className="sr-only">Info</span>
    <div>Sélectionnez l'état de la commande pour mettre à jour son statut.</div>
  </div>
);
