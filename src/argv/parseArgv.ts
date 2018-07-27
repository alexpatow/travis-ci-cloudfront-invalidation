import IArgv from '../types/IArgv';
import { IParsedArgv } from '../types/IParsedArgv';

export default function parseArgv(argv: IArgv): IParsedArgv {
  return {
    accessKey: argv.AWSAccessKey,
    branches: (argv.OnBranches || 'master')
      .split(',')
      .map((branch: string) => branch.trim()),
    distributionId: argv.CloudFrontDistributionId,
    isPR: argv.TravisPullRequest != null && argv.TravisPullRequest !== 'false',
    items: argv.ItemsforInvalidation.split(',').map((branch: string) =>
      branch.trim()
    ),
    secretKey: argv.AWSSecretKey,
    travisBranch: argv.TravisBranch,
  };
}
