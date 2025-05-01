import { FilePlus2, Package, UserRoundCheck } from "lucide-react";
import { Badge } from "./ui/badge";

export default function OrderTimeline() {
  return (
    <ol className="flex items-center justify-between">
      <li>
        <Badge asChild variant="secondary" className="p-2">
          <FilePlus2 size={40} />
        </Badge>
      </li>
      <div className="flex w-full bg-gray-200 h-0.5" />
      <li>
        <Badge asChild variant="secondary" className="p-2">
          <Package size={40} />
        </Badge>
      </li>
      <div className="flex w-full bg-gray-200 h-0.5" />
      <li>
        <Badge asChild variant="secondary" className="p-2">
          <UserRoundCheck size={40} />
        </Badge>
      </li>
    </ol>
  );
}
