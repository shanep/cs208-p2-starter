import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import fs from 'node:fs';


const file = fs.readFileSync('index.html', {encoding: 'utf8'});
const dom = new JSDOM(file);

/**
 * DO NOT MODIFY THIS FILE!
 */
test('Main <div> correct and no <br> tags are used', (t) =>{
    // Get the main DIV that contains the whole song
    var allDIVs = dom.window.document.getElementsByTagName("div");
    assert.ok(allDIVs.length > 0, "At least 1 <div> exists on the page");

    // Verify that no <br> elements exist in the document
    assert.equal(dom.window.document.getElementsByTagName("br").length, 0,
        "No <br> tags exist on the page");
});

test('Main <div> contains <h2>', (t)=>{
    // Get the main DIV that contains the whole song
    var allDIVs = dom.window.document.getElementsByTagName("div");
    assert.ok(allDIVs.length > 0, "At least 1 <div> exists on the page");
    var mainDIV = allDIVs[0];

    // Get child <h2> elements
    var childH2s = mainDIV.getElementsByTagName("h2");
    // Exactly 1 should exist
    assert.equal(childH2s.length, 1, "Main <div> contains a single <h2>");
});