import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, Link, useNavigate } from "react-router";
import { CircleUserRound, LogOutIcon } from "lucide-react";
import useUser from "@/hooks/useUser";

export default function Navbar() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow bg-[#026E62]">
      <Link to="/">
        <h1 className="font-semibold text-xl uppercase tracking-wider text-white">
          Likavery
          <span className="bg-white text-[#026E62] font-semibold me-2 px-2.5 py-0.5 rounded-sm ms-2">
            PRO
          </span>
        </h1>
      </Link>
      <Drawer direction="right">
        <DrawerTrigger>
          <Avatar className="h-12 w-12 border-2 border-white">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              <CircleUserRound />
            </AvatarFallback>
          </Avatar>
        </DrawerTrigger>
        <DrawerContent className="w-full flex flex-col items-center text-right p-4">
          <DrawerHeader>
            <DrawerClose>
              <DrawerTitle
                onClick={() => navigate("/")}
                className="font-semibold text-xl uppercase tracking-wider text-right"
              >
                Likavery
              </DrawerTitle>
            </DrawerClose>
            <DrawerDescription>
              Faites-vous livrer vos soins où que vous soyez !
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="w-full p-0">
            <DrawerClose>
              {user ? (
                <UserAction user={user} setUser={setUser} />
              ) : (
                <Button onClick={() => navigate("/login")} className="w-full">
                  Login
                </Button>
              )}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}

function UserAction({ user }) {
  const { name, email } = user;
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 rounded-md p-2 flex flex-row-reverse items-center">
      <div
        onClick={() => navigate("/account")}
        className="flex flex-row-reverse gap-2 items-center w-full"
      >
        <Avatar className="h-12 w-12 rounded-md">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            <CircleUserRound />
          </AvatarFallback>
        </Avatar>
        <div className="text-right">
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <Form method="post" action="/">
        <Input type="hidden" name="_action" value="logout" />
        <Button type="submit" className="mr-auto bg-red-700">
          <LogOutIcon className="w-4 h-4 rotate-180" />
        </Button>
      </Form>
    </div>
  );
}
