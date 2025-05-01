import { pb } from "@/lib/pbconfig";
import { redirect } from "react-router";

export async function action({ params }) {
  const { id } = params;
  await pb.collection("orders").update(id, {
    pharma: pb.authStore.record.id,
    status: "accepted",
  });
  // return redirect(`/order/${id}`);
  return redirect("/");
}
