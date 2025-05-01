import { FilePlus2, Package, UserRoundCheck } from "lucide-react";

export default function OrderTimeline() {
  return (
    <ol className="flex items-center justify-between">
      <li className="p-3 bg-gray-100 rounded-full">
        <FilePlus2 size={22} />
      </li>
      <div className="flex w-full bg-gray-200 h-0.5" />
      <li className="p-3 bg-gray-100 rounded-full">
        <Package size={22} />
      </li>
      <div className="flex w-full bg-gray-200 h-0.5" />
      <li className="p-3 bg-gray-100 rounded-full">
        <UserRoundCheck size={22} />
      </li>
    </ol>
  );
}
