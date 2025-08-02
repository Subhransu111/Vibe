import {inngest} from "../../../inngest/client";

export const helloWorld = inngest.createFunction(
    {id:"helloworld"},
    {event: "test/hello.world"},
    async ({event,step}) =>{
        await step.sleep("wait a moment", "10s");
        await step.sleep("wait a moment", "5s");
        await step.sleep("wait a moment", "2s");

        return {message: `Hello, ${event.data.name}!`};
    }
)