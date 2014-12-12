/**
 * Created by yuchen on 12/5/14.
 */
var CACHE_DIR = "cache";
var CACHE_PERL = "cache.pl";
var CACHE_PYTHON = "cache.py";
var CODE_DIR = "code";
function writeDataTo(data, destination) {
    var fs = require("fs");
    fs.writeFileSync(destination, data);
}
function readDataFrom(destinaton, callback) {
    var fs = require("fs");
    fs.readFile(destinaton, function (err, data) {
        if (err) {
            return console.log(err);
        }
        callback(data);
    });
}