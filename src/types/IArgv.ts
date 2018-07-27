export default interface IArgv {
  AWSAccessKey: string;
  TravisBranch: string;
  CloudFrontDistributionId: string;
  ItemsforInvalidation: string;
  OnBranches?: string;
  TravisPullRequest?: string;
  AWSSecretKey: string;
}
