import * as AWS from 'aws-sdk';

import { IParsedArgv } from '../types/IParsedArgv';

import getCloudFrontInstance from './getCloudFrontInstance';

describe('getCloudFrontInstance', () => {
  let cloudFrontSpy: jest.Mock<typeof AWS.CloudFront>;

  beforeAll(() => {
    cloudFrontSpy = jest
      .spyOn(AWS, 'CloudFront')
      .mockImplementation((options: AWS.CloudFront.ClientConfiguration) => {
        return {
          accessKeyId: options.accessKeyId,
          secretAccessKey: options.secretAccessKey,
        };
      });
  });

  afterAll(() => {
    cloudFrontSpy.mockReset();
  });

  it('should return a CloudFront instance', () => {
    const argv: IParsedArgv = {
      accessKey: '1',
      branches: ['dev', 'qa'],
      distributionId: '3',
      isPR: true,
      items: ['test', 'test2'],
      secretKey: '2',
      travisBranch: '6',
    };
    const result = getCloudFrontInstance(argv);
    const expectation = {
      accessKeyId: '1',
      secretAccessKey: '2',
    };
    expect(result).toEqual(expectation);
  });
});
