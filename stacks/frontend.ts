import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { StackContext, StaticSite } from "sst/constructs";

export function frontend({ stack }: StackContext) {
  const Cert = Certificate.fromCertificateArn(
    stack,
    "Certificate",
    "arn:aws:acm:us-east-1:871844600502:certificate/430cabda-81f5-4554-9822-cbb6be796478"
  );

  new StaticSite(stack, "web", {
    path: "packages/web",
    buildOutput: "dist",
    buildCommand: "npm run build",
    indexPage: "index.html",
    errorPage: "index.html",
    customDomain: {
      domainName: "toolbox.vastamaki.dev",
      isExternalDomain: true,
      cdk: {
        certificate: Cert,
      },
    },
  });
}
