/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectsCreateProjectTransferRequest } from "../../funcs/projectsCreateProjectTransferRequest.js";
import { CreateProjectTransferRequestRequest$inboundSchema } from "../../models/createprojecttransferrequestop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CreateProjectTransferRequestRequest$inboundSchema,
};

export const tool$projectsCreateProjectTransferRequest: ToolDefinition<
  typeof args
> = {
  name: "projects-create-project-transfer-request",
  description: `Create project transfer request

Initiates a project transfer request from one team to another. <br/> Returns a \`code\` that remains valid for 24 hours and can be used to accept the transfer request by another team using the \`PUT /projects/transfer-request/:code\` endpoint. <br/> Users can also accept the project transfer request using the claim URL: \`https://vercel.com/claim-deployment?code=<code>&returnUrl=<returnUrl>\`. <br/> The \`code\` parameter specifies the project transfer request code generated using this endpoint. <br/> The \`returnUrl\` parameter redirects users to a specific page of the application if the claim URL is invalid or expired.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await projectsCreateProjectTransferRequest(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
