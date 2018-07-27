import validateArgv from './validateArgv';

describe('validateArgv', () => {
  const validArgv = {
    AWSAccessKey: '1',
    AWSSecretKey: '2',
    CloudFrontDistributionId: '3',
    ItemsforInvalidation: '4',
    TravisBranch: '6',
    TravisPullRequest: '7',
  };

  it('should validate if correct', () => {
    const result = validateArgv(validArgv);
    expect(result).toBe(true);
  });

  it('should invalidate on missing member', () => {
    const argvKeys = Object.keys(validArgv);

    argvKeys.forEach(key => {
      const tempArgv = Object.assign({}, validArgv);
      delete tempArgv[key];
      const result = validateArgv(tempArgv);
      expect(result).toBe(false);
    });
  });
});
