/**
 * Created by yuchen on 12/5/14.
 */

function measure(lang, cache, sout, serr, err) {
    var exec = require('child_process').exec,
        child;

    child = exec('/usr/bin/time -lp ' + lang + " " + cache + '> cache/' + lang + '.op',
        {maxBuffer: 1024*1024},
        function (error, stdout, stderr) {
            sout(stdout);
            serr(stderr);
            if (error !== null) {
                err(error);
            }
        });
}