import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        tl.setResult(tl.TaskResult.Failed, 'Not implemented, should alawys fail');
        return;
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();