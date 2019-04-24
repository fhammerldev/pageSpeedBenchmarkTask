import tl = require('azure-pipelines-task-lib/task');
import { runBenchmarkAsync } from 'batch-pagespeed-benchmark';
 
async function run() {
    try {
        const urls: string[] = tl.getInput('urlList', true).split(', ');
        const apiKey: string | undefined = tl.getInput('apiKey', false) || undefined;
        const requestDelay: number | undefined = Number(tl.getInput('requestDelay', false)) || undefined;
        let result = await runBenchmarkAsync(urls, requestDelay, apiKey);
        console.log(`The average performance of your websites is ${result.averagePerformance()}`);
        return;
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();