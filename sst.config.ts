import { SSTConfig } from "sst";
import { frontend } from "./stacks/frontend";

export default {
  config(_input) {
    return {
      name: "toolbox",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(frontend, {
      stackName: `${app.name}-frontend-${app.stage}`,
    });
  },
} satisfies SSTConfig;
