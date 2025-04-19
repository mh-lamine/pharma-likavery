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
  return (
    <main className="flex-1 px-8 grid place-items-center">
      Last orders received
    </main>
  );
}
