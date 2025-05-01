export default function OrderDetails({ params }) {
  const { id } = params;
  return (
    <main className="w-full max-w-screen-lg mx-auto p-8">
      <h2 className="text-2xl font-medium">Commande #{id}</h2>
      <div>
        {/* <p>Adresse de livraison : {delivery_address}</p>
        <p>Status : {progress}</p> */}
      </div>
      {/* <Button></Button> */}
    </main>
  );
}
