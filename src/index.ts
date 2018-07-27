#!/usr/bin/env node

import getArgv from './argv/getArgv';
import parseArgv from './argv/parseArgv';
import validateArgv from './argv/validateArgv';
import getCloudFrontInstance from './cloudfront/getCloudFrontInstance';
import getCloudFrontParams from './cloudfront/getCloudFrontParams';
import logger from './utils/logger';

const argv = getArgv();
if (!validateArgv(argv)) {
  logger.error('Missing Required Argument(s)');
  process.exit(1);
}
const parsedArgv = parseArgv(argv);

if (parsedArgv.isPR) {
  logger.info(
    'Travis CI started due to pull request, update of CloudFront not performed.'
  );
  process.exit(0);
}

if (parsedArgv.branches.indexOf(parsedArgv.travisBranch.trim()) === -1) {
  logger.info(
    'Travis CI not running on ' +
      parsedArgv.travisBranch +
      ' branch, update of CloudFront' +
      ' not performed. Allowed branches: [' +
      parsedArgv.branches.join(', ') +
      '].'
  );
  process.exit(0);
}

const cloudFront = getCloudFrontInstance(parsedArgv);
const cloudFrontParams = getCloudFrontParams(parsedArgv);

cloudFront
  .createInvalidation(cloudFrontParams)
  .promise()
  .then(data => {
    logger.info(JSON.stringify(data));
    process.exit(0);
  })
  .catch(err => {
    logger.error('Error invalidating CloudFront Cache: ' + JSON.stringify(err));
    process.exit(1);
  });
