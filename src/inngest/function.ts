import {  openai,grok, createAgent } from "@inngest/agent-kit";
import {Sandbox} from "@e2b/code-interpreter";
import {inngest} from "@/inngest/client";
import { getsandbox } from "./utils";


export const helloWorld = inngest.createFunction(
    {id:"helloworld"},
    {event: "test/hello.world"},
    async ({event,step}) =>{

        const SandboxID = await step.run ("get-sandbox-id",async()=>{
            const sandbox = await Sandbox.create("vibe-nextjs-examine-2")
            return sandbox.sandboxId;
        })
      const CodeAgent = createAgent({
          name: "CodeAgent",
          system: "You are an expert Next.js developer.  You write readable and maintainable code . You write simple NextBuildContext.js & React in snippets ",
          model: grok({ model: "grok-2-latest" }), 
        });

        const {output}= await CodeAgent.run(
            `Write the following snippets: ${event.data.value}`
        );


        const sandboxURL = await step.run("get-sandbox-url",async()=>{
            const sandbox = await getsandbox(SandboxID);
            const host = sandbox.getHost(3000);
            return `https://${host}`;

        })

   

        

    return {output, sandboxURL};
     });
