"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parseArgv_1 = require("./parseArgv");
describe('parseArgv', function () {
    it('should correctly parse options', function () {
        var argv = {
            AWSAccessKey: '1',
            AWSSecretKey: '2',
            CloudFrontDistributionId: '3',
            ItemsforInvalidation: 'test, test2',
            OnBranches: 'dev,qa',
            TravisBranch: '6',
            TravisPullRequest: 'true',
        };
        var expectation = {
            accessKey: '1',
            branches: ['dev', 'qa'],
            distributionId: '3',
            isPR: true,
            items: ['test', 'test2'],
            secretKey: '2',
            travisBranch: '6',
        };
        var result = parseArgv_1.default(argv);
        expect(result).toEqual(expectation);
    });
    it('should use master if no onBranches passed', function () {
        var argv = {
            AWSAccessKey: '1',
            AWSSecretKey: '2',
            CloudFrontDistributionId: '3',
            ItemsforInvalidation: 'test, test2',
            TravisBranch: '6',
            TravisPullRequest: 'true',
        };
        var expectation = {
            accessKey: '1',
            branches: ['master'],
            distributionId: '3',
            isPR: true,
            items: ['test', 'test2'],
            secretKey: '2',
            travisBranch: '6',
        };
        var result = parseArgv_1.default(argv);
        expect(result).toEqual(expectation);
    });
    it('should set isPr to false if no TravisPullRequest', function () {
        var argv = {
            AWSAccessKey: '1',
            AWSSecretKey: '2',
            CloudFrontDistributionId: '3',
            ItemsforInvalidation: 'test, test2',
            TravisBranch: '6',
        };
        var expectation = {
            accessKey: '1',
            branches: ['master'],
            distributionId: '3',
            isPR: false,
            items: ['test', 'test2'],
            secretKey: '2',
            travisBranch: '6',
        };
        var result = parseArgv_1.default(argv);
        expect(result).toEqual(expectation);
    });
    it('should set isPr to false if TravisPullRequest is false', function () {
        var argv = {
            AWSAccessKey: '1',
            AWSSecretKey: '2',
            CloudFrontDistributionId: '3',
            ItemsforInvalidation: 'test, test2',
            TravisBranch: '6',
            TravisPullRequest: 'false',
        };
        var expectation = {
            accessKey: '1',
            branches: ['master'],
            distributionId: '3',
            isPR: false,
            items: ['test', 'test2'],
            secretKey: '2',
            travisBranch: '6',
        };
        var result = parseArgv_1.default(argv);
        expect(result).toEqual(expectation);
    });
});
//# sourceMappingURL=parseArgv.test.js.map