import { schedule } from 'danger';

const reporter = require('danger-plugin-lint-report');
schedule(
  reporter.scan({
    fileMask: 'ios-lint-results.xml',
    reportSeverity: true,
    requireLineModification: true,
  }),
);
