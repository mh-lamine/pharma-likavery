import { FilePlus2, Package, UserRoundCheck } from "lucide-react";

export default function OrderTimeline({ status }) {
  console.log("status", status);
  return (
    <ol className="flex items-center justify-between">
      <li
        className={`p-3 ${
          status ? "bg-[#026E6250]" : "bg-gray-200"
        } rounded-full`}
      >
        <FilePlus2 size={22} />
      </li>
      <div
        className={`flex w-full ${
          status && status !== "accepted" ? "bg-[#026E6250]" : "bg-gray-200"
        } h-0.5`}
      />
      <li
        className={`p-3 ${
          status && status !== "accepted" ? "bg-[#026E6250]" : "bg-gray-200"
        } rounded-full`}
      >
        <Package size={22} />
      </li>
      <div
        className={`flex w-full ${
          status === "retrieved" ? "bg-[#026E6250]" : "bg-gray-200"
        }  h-0.5`}
      />
      <li
        className={`p-3 ${
          status === "retrieved" ? "bg-[#026E6250]" : "bg-gray-200"
        } rounded-full`}
      >
        <UserRoundCheck size={22} />
      </li>
    </ol>
  );
}
