export interface IParsedArgv {
  accessKey: string;
  secretKey: string;
  distributionId: string;
  items: string[];
  isPR: boolean;
  branches: string[];
  travisBranch: string;
}
