import {  openai,grok, createAgent } from "@inngest/agent-kit";

import {inngest} from "../../../inngest/client";


export const helloWorld = inngest.createFunction(
    {id:"helloworld"},
    {event: "test/hello.world"},
    async ({event,step}) =>{
      const CodeAgent = createAgent({
          name: "CodeAgent",
          system: "You are an expert Next.js developer.  You write readable and maintainable code . You write simple NextBuildContext.js & React in snippets ",
          model: grok({ model: "grok-2-latest" }), 
        });

        const {output}= await CodeAgent.run(
            `Write the following snippets: ${event.data.value}`
        );

        console.log(output);
   

        

    return {Success:"ok", summary: output};
     });
