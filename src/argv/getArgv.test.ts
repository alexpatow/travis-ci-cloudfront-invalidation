import getArgv from './getArgv';

describe('getArgv', () => {
  beforeAll(() => {
    process.argv = [];
  });
  it('should receive valid arguments from process.argv', () => {
    process.argv = [
      'node',
      'index.js',
      '--AWSAccessKey=1',
      '--AWSSecretKey=2',
      '--CloudFrontDistributionId=3',
      '--ItemsforInvalidation=4',
      '--OnBranches=5',
      '--TravisBranch=6',
      '--TravisPullRequest=7',
    ];
    const argv = getArgv();
    expect(argv).toEqual({
      AWSAccessKey: '1',
      AWSSecretKey: '2',
      CloudFrontDistributionId: '3',
      ItemsforInvalidation: '4',
      OnBranches: '5',
      TravisBranch: '6',
      TravisPullRequest: '7',
      _: [],
      a: '1',
      b: '6',
      c: '3',
      i: '4',
      o: '5',
      p: '7',
      s: '2',
    });
  });

  it('should work with flags', () => {
    process.argv = [
      'node',
      'index.js',
      '-a',
      '1',
      '-b',
      '6',
      '-c',
      '3',
      '-i',
      '4',
      '-o',
      '5',
      '-p',
      '7',
      '-s',
      '2',
    ];
    const argv = getArgv();
    expect(argv).toEqual({
      AWSAccessKey: '1',
      AWSSecretKey: '2',
      CloudFrontDistributionId: '3',
      ItemsforInvalidation: '4',
      OnBranches: '5',
      TravisBranch: '6',
      TravisPullRequest: '7',
      _: [],
      a: '1',
      b: '6',
      c: '3',
      i: '4',
      o: '5',
      p: '7',
      s: '2',
    });
  });
});
