"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require("aws-sdk");
function getCloudFrontInstance(argv) {
    return new AWS.CloudFront({
        accessKeyId: argv.accessKey,
        secretAccessKey: argv.secretKey,
    });
}
exports.default = getCloudFrontInstance;
//# sourceMappingURL=getCloudFrontInstance.js.map