# CancelDeploymentGitSource3

## Example Usage

```typescript
import { CancelDeploymentGitSource3 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentGitSource3 = {
  type: "github-custom-host",
  host: "considerate-lotion.name",
  repoId: "<id>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.CancelDeploymentGitSourceDeploymentsResponseType](../models/canceldeploymentgitsourcedeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `host`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `repoId`                                                                                                                 | *models.CancelDeploymentGitSourceDeploymentsRepoId*                                                                      | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ref`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `sha`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `prId`                                                                                                                   | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |