# UpdateProjectOptionsAllowlist

Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests

## Example Usage

```typescript
import { UpdateProjectOptionsAllowlist } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectOptionsAllowlist = {
  paths: [
    {
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `paths`                                                        | [models.UpdateProjectPaths](../models/updateprojectpaths.md)[] | :heavy_check_mark:                                             | N/A                                                            |