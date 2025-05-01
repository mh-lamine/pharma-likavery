import { FilePlus2, Package, UserRoundCheck } from "lucide-react";

export default function OrderTimeline({ status, showLabels }) {
  return (
    <ol className="flex items-center justify-between gap-2 sm:gap-3">
      <li
        className={`p-3 ${
          status ? "bg-[#026E6240]" : "bg-gray-200"
        } rounded-full`}
      >
        <FilePlus2 size={22} className={`${status && "text-[#026E62]"}`} />
      </li>
      <div
        className={`flex w-full ${
          status && status !== "accepted" ? "bg-[#026E6240]" : "bg-gray-200"
        } h-0.5`}
      />
      <li
        className={`p-3 ${
          status && status !== "accepted" ? "bg-[#026E6240]" : "bg-gray-200"
        } rounded-full`}
      >
        <Package
          size={22}
          className={`${status && status !== "accepted" && "text-[#026E62]"}`}
        />
      </li>
      <div
        className={`flex w-full ${
          status === "retrieved" ? "bg-[#026E6240]" : "bg-gray-200"
        }  h-0.5`}
      />
      <li
        className={`p-3 ${
          status === "retrieved" ? "bg-[#026E6240]" : "bg-gray-200"
        } rounded-full`}
      >
        <UserRoundCheck
          size={22}
          className={`${status === "retrieved" && "text-[#026E62]"}`}
        />
      </li>
    </ol>
  );
}
