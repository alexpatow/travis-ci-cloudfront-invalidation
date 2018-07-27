import * as moment from 'moment';
import * as winston from 'winston';

const logger = new winston.Logger({
  level: 'info',
  timestamp: () => {
    return moment.utc().format();
  },
  transports: [
    new winston.transports.Console({
      colorize: true,
      timestamp: true,
    }),
  ],
});

export default logger;
