"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getCloudFrontParams_1 = require("./getCloudFrontParams");
describe('getCloudFrontParams', function () {
    var dateSpy;
    beforeAll(function () {
        dateSpy = jest
            .spyOn(Date.prototype, 'toISOString')
            .mockImplementation(function () { return 'testdate'; });
    });
    afterAll(function () {
        dateSpy.mockReset();
    });
    it('should return the necessary AWS params', function () {
        var parsedArgv = {
            accessKey: '1',
            branches: ['dev', 'qa'],
            distributionId: '3',
            isPR: true,
            items: ['test', 'test2'],
            secretKey: '2',
            travisBranch: '6',
        };
        var result = getCloudFrontParams_1.default(parsedArgv);
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
//# sourceMappingURL=getCloudFrontParams.test.js.map