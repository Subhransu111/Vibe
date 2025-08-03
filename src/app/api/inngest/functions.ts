
import {inngest} from "../../../inngest/client";
import { groq, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
    {id:"helloworld"},
    {event: "test/hello.world"},
    async ({event,step}) =>{
        await step.sleep("wait a moment", "5s");
        

        return {message: `Hello, ${event.data.value}!`};
    }
)