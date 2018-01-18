#! /usr/bin/env node

const AWS = require('aws-sdk');
const argv = require('minimist')(process.argv.slice(2),{
    string: ['AWSAccessKey', 'AWSSecretKey', 'CloudFrontDistributionId', 'ItemsforInvalidation', 'TravisBranch', 'TravisPullRequest', 'OnBranches'],
    alias: {
        a: 'AWSAccessKey',
        s: 'AWSSecretKey',
        c: 'CloudFrontDistributionId',
        i: 'ItemsforInvalidation',
        b: 'TravisBranch',
        p: 'TravisPullRequest',
        o: 'OnBrances'
    }
});

if (!argv.AWSAccessKey || !argv.AWSSecretKey || !argv.CloudFrontDistributionId || !argv.ItemsforInvalidation || !argv.TravisBranch || !argv.TravisPullRequest) {
  console.log('Missing Required Argument(s)');
  process.exit(1);
}

const accessKey = argv.AWSAccessKey;
const secretKey = argv.AWSSecretKey;
const distributionId = argv.CloudFrontDistributionId;
const items = argv.ItemsforInvalidation.split(',');
const isPR = (argv.TravisPullRequest && argv.TravisPullRequest !== 'false');
const onBranches = (argv.TravisPullRequest || 'master').split(',').map(Function.prototype.call, String.prototype.trim);

if (isPR !== undefined && isPR) {
  console.log('Travis CI started due to pull request, update of CloudFront not performed.');
  process.exit(0);
}

if (onBranches.indexOf(argv.TravisBranch.trim()) === -1) {
  console.log('Travis CI not running on ' + argv.TravisBranch + ' branch, update of CloudFront not performed.');
  process.exit(0);
}

const cloudfront = new AWS.CloudFront({
  accessKeyId: accessKey,
  secretAccessKey: secretKey
});

const currentTimestamp = new Date().toISOString();

var params = {
  DistributionId: distributionId, /* required */
  InvalidationBatch: { /* required */
    CallerReference: currentTimestamp, /* required */
    Paths: { /* required */
      Quantity: items.length, /* required */
      Items: items
    }
  }
};

cloudfront.createInvalidation(params, function(err, data) {
  if (err) {
    console.log('Error invalidting CloudFront Cache: ' + JSON.stringify(err));
    process.exit(1);
  } else {
    console.log(JSON.stringify(data));
    process.exit(0);
  }
});
