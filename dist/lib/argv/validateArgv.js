"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateArgv(argv) {
    return (argv.AWSAccessKey != null &&
        argv.AWSSecretKey != null &&
        argv.CloudFrontDistributionId != null &&
        argv.ItemsforInvalidation != null &&
        argv.TravisBranch != null &&
        argv.TravisPullRequest != null);
}
exports.default = validateArgv;
//# sourceMappingURL=validateArgv.js.map