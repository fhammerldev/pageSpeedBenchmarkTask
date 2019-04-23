import * as path from 'path';
import * as assert from 'assert';
import * as ttm from 'azure-pipelines-task-lib/mock-test';

describe('Sample task tests', function () {

    before(function () {

    });

    after(() => {

    });

    // it('should succeed with simple inputs', function(done: MochaDone) {
    //     // Add success test here
    // });

    it('it should fail', function (done: MochaDone) {
        this.timeout(1000);

        let tp = path.join(__dirname, 'failure.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();
        console.log(tr.succeeded);
        assert.equal(tr.succeeded, false, 'should have failed');
        assert.equal(tr.warningIssues, 0, "should have no warnings");
        assert.equal(tr.errorIssues.length, 1, "should have 1 error issue");
        assert.equal(tr.errorIssues[0], 'Not implemented, should alawys fail, input was anything', 'error issue output');
        assert.equal(tr.stdout.indexOf('Hello bad'), -1, "Should not display Hello bad");

        done();
    });
});