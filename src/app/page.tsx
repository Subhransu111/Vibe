"use client";
import {toast} from"sonner";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

const Page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background job started successfully!");
    },
  }));

  return (
    <div className="p-4 max-w-7xl mx-auto caret-amber-100">
      <button disabled={invoke.isPending}  onClick={() => invoke.mutate({ text: "subhransu" })}>
        invoke background Job
      </button>
    </div>
  );
};

export default Page;