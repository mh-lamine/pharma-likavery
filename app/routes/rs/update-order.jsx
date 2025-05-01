import { pb } from "@/lib/pbconfig";
import { redirect } from "react-router";

export async function action({ request, params }) {
  const { id } = params;
  const url = new URL(request.url);
  const status = url.searchParams.get("new-status");
  const referer = request.headers.get("Referer") || `/order/${id}`;

  await pb.collection("orders").update(id, {
    status,
  });
  return redirect(referer);
}
