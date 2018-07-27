"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var winston = require("winston");
var logger = new winston.Logger({
    level: 'info',
    timestamp: function () {
        return moment.utc().format();
    },
    transports: [
        new winston.transports.Console({
            colorize: true,
            timestamp: true,
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map