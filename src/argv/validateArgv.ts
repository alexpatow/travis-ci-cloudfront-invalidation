import IArgv from '../types/IArgv';

export default function validateArgv(argv: IArgv): boolean {
  return (
    argv.AWSAccessKey != null &&
    argv.AWSSecretKey != null &&
    argv.CloudFrontDistributionId != null &&
    argv.ItemsforInvalidation != null &&
    argv.TravisBranch != null &&
    argv.TravisPullRequest != null
  );
}
