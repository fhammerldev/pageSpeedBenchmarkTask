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

    it('it should return print a number between 0 and 1', function (done: MochaDone) {
        this.timeout(20000);

        let tp = path.join(__dirname, 'success.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();
        console.log(tr.stdout);
        assert.equal(tr.succeeded, true, 'should have succeded');
        assert.equal(tr.warningIssues, 0, "should have no warnings");
        assert.equal(tr.errorIssues.length, 0, "should have 0 error issues");
        assert.equal(tr.stdout.split(' ').filter(x => x.match(/(0(\.\d+)?|1(\.0+)?)/)).length > 0, true, "Should contain one number");
        done();
    });

    // it('it should fail', function (done: MochaDone) {
    //     this.timeout(1000);

    //     let tp = path.join(__dirname, 'failure.js');
    //     let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

    //     tr.run();
    //     console.log(tr.succeeded);
    //     assert.equal(tr.succeeded, false, 'should have failed');
    //     assert.equal(tr.warningIssues, 0, "should have no warnings");
    //     assert.equal(tr.errorIssues.length, 1, "should have 1 error issue");
    //     assert.equal(tr.errorIssues[0], 'Not implemented, should alawys fail, input was microsoft.com, wikipedia.org', 'error issue output');
    //     assert.equal(tr.stdout.indexOf('Hello bad'), -1, "Should not display Hello bad");

    //     done();
    // });
});