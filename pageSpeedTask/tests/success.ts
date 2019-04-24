import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tmr.setInput('urlList', 'https://microsoft.com, https://wikipedia.org');
tmr.setInput('apiKey', '');
tmr.setInput('requestDelay', '2000');

tmr.run();