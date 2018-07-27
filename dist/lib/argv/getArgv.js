"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimist = require("minimist");
function getArgv() {
    return minimist(process.argv.slice(2), {
        alias: {
            a: 'AWSAccessKey',
            b: 'TravisBranch',
            c: 'CloudFrontDistributionId',
            i: 'ItemsforInvalidation',
            o: 'OnBranches',
            p: 'TravisPullRequest',
            s: 'AWSSecretKey',
        },
        string: [
            'AWSAccessKey',
            'TravisBranch',
            'CloudFrontDistributionId',
            'ItemsforInvalidation',
            'OnBranches',
            'TravisPullRequest',
            'AWSSecretKey',
        ],
    });
}
exports.default = getArgv;
//# sourceMappingURL=getArgv.js.map