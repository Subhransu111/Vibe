import { json } from "zod";

import {caller} from "@/trpc/server" // Update the import path as needed

const page = async () => {
  const data  = await caller.createAI({text: 'world'});

  //"localhost:3000/api/createAI"
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export default page;