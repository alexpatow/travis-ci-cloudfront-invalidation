import { IParsedArgv } from '../types/IParsedArgv';

export default function getCloudFrontParams(
  argv: IParsedArgv
): AWS.CloudFront.CreateInvalidationRequest {
  const currentTimestamp = new Date().toISOString();

  return {
    DistributionId: argv.distributionId,
    InvalidationBatch: {
      CallerReference: currentTimestamp,
      Paths: {
        Items: argv.items,
        Quantity: argv.items.length,
      },
    },
  };
}
