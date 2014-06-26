#! /usr/bin/env node

var fs=require('fs'),
    lame=require('lame'),
    Speaker=require('speaker');

// create the Encoder instance
var encoder = new lame.Encoder({
    channels: 2,        // 2 channels (left and right)
    bitDepth: 16,       // 16-bit samples
    sampleRate: 44100   // 44,100 Hz sample rate
});

// Create the Speaker instance
var speaker = new Speaker({
    channels: 2,          // 2 channels
    bitDepth: 16,         // 16-bit samples
    sampleRate: 44100     // 44,100 Hz sample rate
});

var decoder = new lame.Decoder();

var path=process.argv[2];
console.log(path);
fs.createReadStream(path).pipe(decoder).pipe(speaker);