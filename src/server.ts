import app from './app';
import { SERVER } from './configs/def';
import { configure } from 'log4js';

configure({
  appenders: {
    everything: {
      type: 'file',
      filename: 'all-the-logs.log',
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ['everything'], level: 'debug' },
  },
});

app.listen(SERVER.PORT, () => {
  console.log('Express server listening on port ' + SERVER.PORT);
});
