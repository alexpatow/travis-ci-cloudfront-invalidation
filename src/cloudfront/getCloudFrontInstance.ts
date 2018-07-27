import * as AWS from 'aws-sdk';

import { IParsedArgv } from '../types/IParsedArgv';

export default function getCloudFrontInstance(
  argv: IParsedArgv
): AWS.CloudFront {
  return new AWS.CloudFront({
    accessKeyId: argv.accessKey,
    secretAccessKey: argv.secretKey,
  });
}
