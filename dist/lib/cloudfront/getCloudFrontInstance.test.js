"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require("aws-sdk");
var getCloudFrontInstance_1 = require("./getCloudFrontInstance");
describe('getCloudFrontInstance', function () {
    var cloudFrontSpy;
    beforeAll(function () {
        cloudFrontSpy = jest
            .spyOn(AWS, 'CloudFront')
            .mockImplementation(function (options) {
            return {
                accessKeyId: options.accessKeyId,
                secretAccessKey: options.secretAccessKey,
            };
        });
    });
    afterAll(function () {
        cloudFrontSpy.mockReset();
    });
    it('should return a CloudFront instance', function () {
        var argv = {
            accessKey: '1',
            branches: ['dev', 'qa'],
            distributionId: '3',
            isPR: true,
            items: ['test', 'test2'],
            secretKey: '2',
            travisBranch: '6',
        };
        var result = getCloudFrontInstance_1.default(argv);
        var expectation = {
            accessKeyId: '1',
            secretAccessKey: '2',
        };
        expect(result).toEqual(expectation);
    });
});
//# sourceMappingURL=getCloudFrontInstance.test.js.map