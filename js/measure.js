/**
 * Created by yuchen on 12/5/14.
 */

function measure(lang, file, succeed, fail, mem) {
    var spawn = require('child_process').spawn;
    var result = spawn(lang, [file]);
    var finished = false;
    var timer;
    var startTime = new Date().getTime();
    var usage = require('usage');
    var pid = result.pid;
    var options = { keepHistory: true };
    var status = {
        memory:0,
        cpu:0,
        memoryInfo:{
            rss:0,
            vsize:0
        }
    };

    result.stdout.on('data', function (data) {
        succeed(data);
    });

    result.stderr.on('data', function (data) {
        fail(data);
    });

    result.on('close', function (code) {
        finished = true;
        clearInterval(timer);
    });

    timer = setInterval(function() {
        usage.lookup(pid, options, function (err, stat) {
            mem(stat, finished, new Date().getTime() - startTime);
        });
    }, 10);
    //usage.clearHistory(pid);
}