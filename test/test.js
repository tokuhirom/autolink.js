#!/usr/bin/env node
var assert = require('assert');
var al = require('../lib/autolink.js');

assert.equal(al.autolink("http://google.com/"), "<a href='http://google.com/'>http://google.com/</a>");
assert.equal(al.autolink("http://google.com foo"), "<a href='http://google.com'>http://google.com</a> foo");
assert.equal(al.autolink("http://google.com/#yay"), "<a href='http://google.com/#yay'>http://google.com/#yay</a>");
assert.equal(al.autolink("http://google.com/ yay!"), "<a href='http://google.com/'>http://google.com/</a> yay!");
assert.equal(al.autolink("foo > @yappo heh."), 'foo &gt; @yappo heh.');
assert.equal(al.autolinkTwitter("http://mixi.jp @yappo #foo hoge"), "<a href='http://mixi.jp'>http://mixi.jp</a> <a href='http://twitter.com/yappo'>@yappo</a> <a href='https://twitter.com/#!/search/?q=%23foo'>#foo</a> hoge");
assert.equal(al.autolink("'"), '&#39;');

