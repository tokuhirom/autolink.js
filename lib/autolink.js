// http://tokuhirom.mit-license.org/
(function () {
    "use strict";

    var global = this;
    var Y;
    if (typeof exports !== 'undefined') {
        Y = exports;
    } else {
        Y = window;
    }

    function escapeHTML(str) {
        return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    Y.autolink = function (src) {
        return src.replace(
            /(https?:\/\/[^:/<>&\s]+(?::\d+)?(?:\/[^#\s<>&()"']*(?:#(?:[^\s<>&"'()]+))?)?)|(.)/gi,
            function (all, url, normal) {
                if (url) {
                    return "<a href='" + escapeHTML(url) + "'>" + escapeHTML(url) + "</a>"
                } else {
                    return escapeHTML(normal);
                }
            }
        );
    };
    Y.autolinkTwitter = function (src) {
        return src.replace(
            /(https?:\/\/[^:/<>&\s]+(?::\d+)?(?:\/[^#\s<>&()"']*(?:#(?:[^<>&"'()]+))?)?)|(?:@([a-zA-Z0-9_-]+))|(#[A-Za-z0-9_-]+)|(.)/gi,
            function (all, url, name, hashtag, normal) {
                if (url) {
                    return "<a href='" + escapeHTML(url) + "'>" + escapeHTML(url) + "</a>"
                } else if (name) {
                    return "<a href='http://twitter.com/" + escapeHTML(name) + "'>@" + name + "</a>";
                } else if (hashtag) {
                    return "<a href='https://twitter.com/#!/search/?q=" + encodeURIComponent(hashtag) + "'>" + escapeHTML(hashtag) + '</a>';
                } else {
                    return escapeHTML(normal);
                }
            }
        );
    }
})();

