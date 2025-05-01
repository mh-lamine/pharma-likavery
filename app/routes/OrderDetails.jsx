import { pb } from "@/lib/pbconfig";

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
  const { id, prescription } = order;
  return (
    <main className="w-full max-w-screen-lg mx-auto p-8">
      <h2 className="text-2xl font-medium mb-4">Commande #{id}</h2>
      <img
        src={prescription}
        className="p-1 rounded overflow-hidden border-4 border-[#026E6250] max-h-screen"
      />
    </main>
  );
}
