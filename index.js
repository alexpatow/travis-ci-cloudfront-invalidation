const AWS = require('aws-sdk');
const argv = require('minimist')(process.argv.slice(2),{
    string: ['AWSAccessKey', 'AWSSecretKey', 'CloudFrontDistributionId', 'ItemsforInvalidation', 'TravisBranch', 'TravisPullRequest'],
    alias: {
        a: 'AWSAccessKey',
        s: 'AWSSecretKey',
        c: 'CloudFrontDistributionId',
        i: 'ItemsforInvalidation',
        b: 'TravisBranch',
        p: 'TravisPullRequest'
    }
});

if (!argv.AWSAccessKey || !argv.AWSSecretKey || !argv.CloudFrontDistributionId || !argv.ItemsforInvalidation) {
  throw new Error('Missing Required Argument(s)');
  process.exit(1);
} else {
  const accessKey = argv.AWSAccessKey;
  const secretKey = argv.AWSSecretKey;
  const distributionId = argv.CloudFrontDistributionId;
  const items = argv.ItemsforInvalidation.split(',');
  const isMaster = (argv.TravisBranch === 'master');
  const isPR = (argv.TravisPullRequest && argv.TravisPullRequest != 'false');
}

if (isPR) {
  console.log('Travis CI started due to pull request, update of CloudFront not performed.');
  process.exit(0);
}

if (!isMaster) {
  console.log('Travis CI not running on Master branch, update of CloudFront not performed.');
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
    throw new Error('Missing Required Argument(s)');
    process.exit(1);
  } else {
    console.log(JSON.stringify(data));
    process.exit(0);
  }
});
