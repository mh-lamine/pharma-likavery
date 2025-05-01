import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { FilePlus2, Package, UserRoundCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Form } from "react-router";

export default function OrderTimeline({ id, status, showLabels }) {
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
        {status === "accepted" ? (
          <OrderAction
            trigger={
              <Package
                size={22}
                className={`${
                  status && status !== "accepted" && "text-[#026E62]"
                }`}
              />
            }
            status={status}
            id={id}
          />
        ) : (
          <Package
            size={22}
            className={`${status && status !== "accepted" && "text-[#026E62]"}`}
          />
        )}
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
        {status === "packed" ? (
          <OrderAction
            trigger={
              <UserRoundCheck
                size={22}
                className={`${status === "retrieved" && "text-[#026E62]"}`}
              />
            }
            status={status}
            id={id}
          />
        ) : (
          <UserRoundCheck
            size={22}
            className={`${status === "retrieved" && "text-[#026E62]"}`}
          />
        )}
      </li>
    </ol>
  );
}

const OrderAction = ({ id, trigger, status }) => {
  const statuses = {
    accepted: {
      current: "accepted",
      next: "packed",
    },
    packed: {
      current: "packed",
      next: "retrieved",
    },
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Confirmer le status de la commande
          </AlertDialogTitle>
          <AlertDialogDescription>
            La commande est actuellement au status{" "}
            <span className="text-[#026E62] font-medium">
              {statuses[status].current}
            </span>
            . <br /> Confirmez pour la faire avancer au status{" "}
            <span className="text-[#026E62] font-medium">
              {statuses[status].next}
            </span>
            .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Form
              method="post"
              action={`/order/${id}/update-order?new-status=${statuses[status].next}`}
            >
              <Button type="submit" className="w-full">
                Continue
              </Button>
            </Form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
