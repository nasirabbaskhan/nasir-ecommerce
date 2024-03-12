import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Mail, User } from "lucide-react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

export default function Avatordisplay(props: { userData: KindeUser }) {
  // console.log("given h email", props.userData.email);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>{" "}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-4 h-4 w-4" />
            <span>
              {props.userData.given_name}
              {""}
              {props.userData.family_name}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Mail className=" h-4 w-4" />
            <span>{props.userData.email}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <Link target="_blank" href={"https://github.com/nasirabbaskhan"}>
          <DropdownMenuItem className="cursor-pointer">GitHub</DropdownMenuItem>
        </Link>

        <DropdownMenuItem className="cursor-pointer">
          <LogoutLink>Log out</LogoutLink>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
