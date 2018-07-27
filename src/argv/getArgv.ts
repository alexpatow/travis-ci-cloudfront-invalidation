import * as minimist from 'minimist';
import IArgv from '../types/IArgv';

function getArgv(): IArgv {
  return minimist<IArgv>(process.argv.slice(2), {
    alias: {
      a: 'AWSAccessKey',
      b: 'TravisBranch',
      c: 'CloudFrontDistributionId',
      i: 'ItemsforInvalidation',
      o: 'OnBranches',
      p: 'TravisPullRequest',
      s: 'AWSSecretKey',
    },
    string: [
      'AWSAccessKey',
      'TravisBranch',
      'CloudFrontDistributionId',
      'ItemsforInvalidation',
      'OnBranches',
      'TravisPullRequest',
      'AWSSecretKey',
    ],
  });
}

export default getArgv;
