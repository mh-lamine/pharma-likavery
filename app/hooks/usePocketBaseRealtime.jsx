import { useEffect } from "react";
import { pb } from "@/lib/pbconfig";

export function usePocketBaseRealtime(collection, callback) {
  useEffect(() => {
    if (typeof window === "undefined") return; // Skip SSR
    pb.collection(collection).subscribe("*", callback);

    return () => {
      pb.collection(collection).unsubscribe("*");
    };
  }, []);
}
