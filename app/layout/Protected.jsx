import { Outlet, redirect } from "react-router";
import { pb } from "@/lib/pbconfig";
import { SITES_URLS } from "@/lib/enums";

export async function loader() {
  if (!pb.authStore.isValid) {
    throw redirect(SITES_URLS.login);
  }
  if (pb.authStore.record.role !== "pharma") {
    throw redirect(SITES_URLS[pb.authStore.record.role]);
  }
}

export default function ProtectedLayout() {
  return <Outlet />;
}
