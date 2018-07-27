import { IParsedArgv } from '../types/IParsedArgv';
import getCloudFrontParams from './getCloudFrontParams';

describe('getCloudFrontParams', () => {
  let dateSpy: jest.Mock<() => string>;

  beforeAll(() => {
    dateSpy = jest
      .spyOn(Date.prototype, 'toISOString')
      .mockImplementation(() => 'testdate');
  });

  afterAll(() => {
    dateSpy.mockReset();
  });

  it('should return the necessary AWS params', () => {
    const parsedArgv: IParsedArgv = {
      accessKey: '1',
      branches: ['dev', 'qa'],
      distributionId: '3',
      isPR: true,
      items: ['test', 'test2'],
      secretKey: '2',
      travisBranch: '6',
    };

    const result = getCloudFrontParams(parsedArgv);
    expect(result).toEqual({
      DistributionId: '3',
      InvalidationBatch: {
        CallerReference: 'testdate',
        Paths: {
          Items: ['test', 'test2'],
          Quantity: 2,
        },
      },
    });
  });
});
