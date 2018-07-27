"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseArgv(argv) {
    return {
        accessKey: argv.AWSAccessKey,
        branches: (argv.OnBranches || 'master')
            .split(',')
            .map(function (branch) { return branch.trim(); }),
        distributionId: argv.CloudFrontDistributionId,
        isPR: argv.TravisPullRequest != null && argv.TravisPullRequest !== 'false',
        items: argv.ItemsforInvalidation.split(',').map(function (branch) {
            return branch.trim();
        }),
        secretKey: argv.AWSSecretKey,
        travisBranch: argv.TravisBranch,
    };
}
exports.default = parseArgv;
//# sourceMappingURL=parseArgv.js.map