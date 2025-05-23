/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accessGroupsDeleteAccessGroupProject } from "../../funcs/accessGroupsDeleteAccessGroupProject.js";
import { DeleteAccessGroupProjectRequest$inboundSchema } from "../../models/deleteaccessgroupprojectop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: DeleteAccessGroupProjectRequest$inboundSchema,
};

export const tool$accessGroupsDeleteAccessGroupProject: ToolDefinition<
  typeof args
> = {
  name: "access-groups-delete-access-group-project",
  description: `Delete an access group project

Allows deletion of an access group project`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accessGroupsDeleteAccessGroupProject(
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

    return formatResult(void 0, apiCall);
  },
};
