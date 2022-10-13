const gulp = require('gulp');
const shell = require('gulp-shell')

// Set the path to the .csproj file
process.env.PROJECT = 'oop-adventure.csproj';
process.env.OPTIONS = ' -p:SelfContained=false -p:PublishSingleFile=false';
process.env.OUTPUT = ' -o ./Releases/';

// The default task just build the game locally which you can launch and debug
gulp.task('default', gulp.series([shell.task('dotnet build ' + process.env.PROJECT + process.env.OPTIONS + process.env.OUTPUT)]))