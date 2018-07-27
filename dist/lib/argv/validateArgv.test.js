"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateArgv_1 = require("./validateArgv");
describe('validateArgv', function () {
    var validArgv = {
        AWSAccessKey: '1',
        AWSSecretKey: '2',
        CloudFrontDistributionId: '3',
        ItemsforInvalidation: '4',
        TravisBranch: '6',
        TravisPullRequest: '7',
    };
    it('should validate if correct', function () {
        var result = validateArgv_1.default(validArgv);
        expect(result).toBe(true);
    });
    it('should invalidate on missing member', function () {
        var argvKeys = Object.keys(validArgv);
        argvKeys.forEach(function (key) {
            var tempArgv = Object.assign({}, validArgv);
            delete tempArgv[key];
            var result = validateArgv_1.default(tempArgv);
            expect(result).toBe(false);
        });
    });
});
//# sourceMappingURL=validateArgv.test.js.map