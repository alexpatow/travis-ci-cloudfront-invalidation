"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCloudFrontParams(argv) {
    var currentTimestamp = new Date().toISOString();
    return {
        DistributionId: argv.distributionId,
        InvalidationBatch: {
            CallerReference: currentTimestamp,
            Paths: {
                Items: argv.items,
                Quantity: argv.items.length,
            },
        },
    };
}
exports.default = getCloudFrontParams;
//# sourceMappingURL=getCloudFrontParams.js.map