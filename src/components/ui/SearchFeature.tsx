"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SearchFeature() {
  const [searcValue, setSearchValue] = useState("");
  const serchHandler = (e: any) => {
    setSearchValue(e.target.value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Search size={27} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
          <DialogDescription>Serch your fabric in our store</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              onChange={serchHandler}
              id="username"
              className="col-span-3"
              placeholder="Search your products.."
            />
            <Link href={`/search/${searcValue}`}>
              <Button variant={"outline"}>
                <Search size={22} className="cursor-pointer" />
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
