import IArgv from '../types/IArgv';
import { IParsedArgv } from '../types/IParsedArgv';
import parseArgv from './parseArgv';

describe('parseArgv', () => {
  it('should correctly parse options', () => {
    const argv: IArgv = {
      AWSAccessKey: '1',
      AWSSecretKey: '2',
      CloudFrontDistributionId: '3',
      ItemsforInvalidation: 'test, test2',
      OnBranches: 'dev,qa',
      TravisBranch: '6',
      TravisPullRequest: 'true',
    };

    const expectation: IParsedArgv = {
      accessKey: '1',
      branches: ['dev', 'qa'],
      distributionId: '3',
      isPR: true,
      items: ['test', 'test2'],
      secretKey: '2',
      travisBranch: '6',
    };

    const result = parseArgv(argv);
    expect(result).toEqual(expectation);
  });

  it('should use master if no onBranches passed', () => {
    const argv: IArgv = {
      AWSAccessKey: '1',
      AWSSecretKey: '2',
      CloudFrontDistributionId: '3',
      ItemsforInvalidation: 'test, test2',
      TravisBranch: '6',
      TravisPullRequest: 'true',
    };

    const expectation: IParsedArgv = {
      accessKey: '1',
      branches: ['master'],
      distributionId: '3',
      isPR: true,
      items: ['test', 'test2'],
      secretKey: '2',
      travisBranch: '6',
    };

    const result = parseArgv(argv);
    expect(result).toEqual(expectation);
  });

  it('should set isPr to false if no TravisPullRequest', () => {
    const argv: IArgv = {
      AWSAccessKey: '1',
      AWSSecretKey: '2',
      CloudFrontDistributionId: '3',
      ItemsforInvalidation: 'test, test2',
      TravisBranch: '6',
    };

    const expectation: IParsedArgv = {
      accessKey: '1',
      branches: ['master'],
      distributionId: '3',
      isPR: false,
      items: ['test', 'test2'],
      secretKey: '2',
      travisBranch: '6',
    };

    const result = parseArgv(argv);
    expect(result).toEqual(expectation);
  });

  it('should set isPr to false if TravisPullRequest is false', () => {
    const argv: IArgv = {
      AWSAccessKey: '1',
      AWSSecretKey: '2',
      CloudFrontDistributionId: '3',
      ItemsforInvalidation: 'test, test2',
      TravisBranch: '6',
      TravisPullRequest: 'false',
    };

    const expectation: IParsedArgv = {
      accessKey: '1',
      branches: ['master'],
      distributionId: '3',
      isPR: false,
      items: ['test', 'test2'],
      secretKey: '2',
      travisBranch: '6',
    };

    const result = parseArgv(argv);
    expect(result).toEqual(expectation);
  });
});
