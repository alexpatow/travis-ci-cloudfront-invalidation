#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getArgv_1 = require("./argv/getArgv");
var parseArgv_1 = require("./argv/parseArgv");
var validateArgv_1 = require("./argv/validateArgv");
var getCloudFrontInstance_1 = require("./cloudfront/getCloudFrontInstance");
var getCloudFrontParams_1 = require("./cloudfront/getCloudFrontParams");
var logger_1 = require("./utils/logger");
var argv = getArgv_1.default();
logger_1.default.info(JSON.stringify(argv));
if (!validateArgv_1.default(argv)) {
    logger_1.default.error('Missing Required Argument(s)');
    process.exit(1);
}
var parsedArgv = parseArgv_1.default(argv);
if (parsedArgv.isPR) {
    logger_1.default.info('Travis CI started due to pull request, update of CloudFront not performed.');
    process.exit(0);
}
if (parsedArgv.branches.indexOf(parsedArgv.travisBranch.trim()) === -1) {
    logger_1.default.info('Travis CI not running on ' +
        parsedArgv.travisBranch +
        ' branch, update of CloudFront' +
        ' not performed. Allowed branches: [' +
        parsedArgv.branches.join(', ') +
        '].');
    process.exit(0);
}
var cloudFront = getCloudFrontInstance_1.default(parsedArgv);
var cloudFrontParams = getCloudFrontParams_1.default(parsedArgv);
cloudFront
    .createInvalidation(cloudFrontParams)
    .promise()
    .then(function (data) {
    logger_1.default.info(JSON.stringify(data));
    process.exit(0);
})
    .catch(function (err) {
    logger_1.default.error('Error invalidating CloudFront Cache: ' + JSON.stringify(err));
    process.exit(1);
});
//# sourceMappingURL=index.js.map