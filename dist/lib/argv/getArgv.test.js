"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getArgv_1 = require("./getArgv");
describe('getArgv', function () {
    beforeAll(function () {
        process.argv = [];
    });
    it('should receive valid arguments from process.argv', function () {
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
        var argv = getArgv_1.default();
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
    it('should work with flags', function () {
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
        var argv = getArgv_1.default();
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
//# sourceMappingURL=getArgv.test.js.map