import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const inputString: string = tl.getInput('urllist', true);
        tl.setResult(tl.TaskResult.Failed, `Not implemented, should alawys fail, input was ${inputString}`);
        return;
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();