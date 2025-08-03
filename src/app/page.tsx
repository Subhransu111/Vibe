"use client";
import {toast, useSonner} from"sonner";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Page = () => {
  const [value,stvalue] = useState("");
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background job started successfully!");
    },
  }));

  return (
    <div className="p-4 max-w-7xl mx-auto caret-amber-100">
      <Input value={value} onChange={(e) => stvalue(e.target.value)}  />
      <button disabled={invoke.isPending}  onClick={() => invoke.mutate({ value: value })}>
        invoke background Job
      </button>
    </div>
  );
};

export default Page;