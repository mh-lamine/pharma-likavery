export default function OrderDetails({ params }) {
  const { id } = params;
  return (
    <main className="flex-1 px-8 py-4">
      <h2 className="text-2xl font-medium">Commande #{id}</h2>
      <div>
        {/* <p>Adresse de livraison : {delivery_address}</p>
        <p>Status : {progress}</p> */}
      </div>
      {/* <Button></Button> */}
    </main>
  );
}
