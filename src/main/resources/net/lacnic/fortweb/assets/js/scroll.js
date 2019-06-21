//easing
! function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return n(e)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    function e(n) {
        var e = 7.5625,
            t = 2.75;
        return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375
    }
    void 0 !== n.easing && (n.easing.jswing = n.easing.swing);
    var t = Math.pow,
        u = Math.sqrt,
        r = Math.sin,
        i = Math.cos,
        a = Math.PI,
        c = 1.70158,
        o = 1.525 * c,
        s = 2 * a / 3,
        f = 2 * a / 4.5;
    n.extend(n.easing, {
        def: "easeOutQuad",
        swing: function(e) {
            return n.easing[n.easing.def](e)
        },
        easeInQuad: function(n) {
            return n * n
        },
        easeOutQuad: function(n) {
            return 1 - (1 - n) * (1 - n)
        },
        easeInOutQuad: function(n) {
            return n < .5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2
        },
        easeInCubic: function(n) {
            return n * n * n
        },
        easeOutCubic: function(n) {
            return 1 - t(1 - n, 3)
        },
        easeInOutCubic: function(n) {
            return n < .5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2
        },
        easeInQuart: function(n) {
            return n * n * n * n
        },
        easeOutQuart: function(n) {
            return 1 - t(1 - n, 4)
        },
        easeInOutQuart: function(n) {
            return n < .5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2
        },
        easeInQuint: function(n) {
            return n * n * n * n * n
        },
        easeOutQuint: function(n) {
            return 1 - t(1 - n, 5)
        },
        easeInOutQuint: function(n) {
            return n < .5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2
        },
        easeInSine: function(n) {
            return 1 - i(n * a / 2)
        },
        easeOutSine: function(n) {
            return r(n * a / 2)
        },
        easeInOutSine: function(n) {
            return -(i(a * n) - 1) / 2
        },
        easeInExpo: function(n) {
            return 0 === n ? 0 : t(2, 10 * n - 10)
        },
        easeOutExpo: function(n) {
            return 1 === n ? 1 : 1 - t(2, -10 * n)
        },
        easeInOutExpo: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, -20 * n + 10)) / 2
        },
        easeInCirc: function(n) {
            return 1 - u(1 - t(n, 2))
        },
        easeOutCirc: function(n) {
            return u(1 - t(n - 1, 2))
        },
        easeInOutCirc: function(n) {
            return n < .5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t(-2 * n + 2, 2)) + 1) / 2
        },
        easeInElastic: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s)
        },
        easeOutElastic: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : t(2, -10 * n) * r((10 * n - .75) * s) + 1
        },
        easeInOutElastic: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2 : t(2, -20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1
        },
        easeInBack: function(n) {
            return (c + 1) * n * n * n - c * n * n
        },
        easeOutBack: function(n) {
            return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2)
        },
        easeInOutBack: function(n) {
            return n < .5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2
        },
        easeInBounce: function(n) {
            return 1 - e(1 - n)
        },
        easeOutBounce: e,
        easeInOutBounce: function(n) {
            return n < .5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2
        }
    })
});
//onepagescroll
! function(e) {
    var t = {
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1e3,
        pagination: true,
        updateURL: false,
        keyboard: true,
        beforeMove: null,
        afterMove: null,
        loop: true,
        responsiveFallback: false,
        direction: "vertical"
    };
    e.fn.swipeEvents = function() {
        return this.each(function() {
            function i(e) {
                var i = e.originalEvent.touches;
                if (i && i.length) {
                    t = i[0].pageX;
                    n = i[0].pageY;
                    r.bind("touchmove", s)
                }
            }

            function s(e) {
                var i = e.originalEvent.touches;
                if (i && i.length) {
                    var o = t - i[0].pageX;
                    var u = n - i[0].pageY;
                    if (o >= 50) {
                        r.trigger("swipeLeft")
                    }
                    if (o <= -50) {
                        r.trigger("swipeRight")
                    }
                    if (u >= 50) {
                        r.trigger("swipeUp")
                    }
                    if (u <= -50) {
                        r.trigger("swipeDown")
                    }
                    if (Math.abs(o) >= 50 || Math.abs(u) >= 50) {
                        r.unbind("touchmove", s)
                    }
                }
            }
            var t, n, r = e(this);
            r.bind("touchstart", i)
        })
    };
    e.fn.onepage_scroll = function(n) {
        function o() {
            var t = false;
            var n = typeof r.responsiveFallback;
            if (n == "number") {
                t = e(window).width() < r.responsiveFallback
            }
            if (n == "boolean") {
                t = r.responsiveFallback
            }
            if (n == "function") {
                valFunction = r.responsiveFallback();
                t = valFunction;
                typeOFv = typeof t;
                if (typeOFv == "number") {
                    t = e(window).width() < valFunction
                }
            }
            if (t) {
                e("body").addClass("disabled-onepage-scroll");
                e(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll");
                i.swipeEvents().unbind("swipeDown swipeUp")
            } else {
                if (e("body").hasClass("disabled-onepage-scroll")) {
                    e("body").removeClass("disabled-onepage-scroll");
                    e("html, body, .wrapper").animate({
                        scrollTop: 0
                    }, "fast")
                }
                i.swipeEvents().bind("swipeDown", function(t) {
                    if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault();
                    i.moveUp()
                }).bind("swipeUp", function(t) {
                    if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault();
                    i.moveDown()
                });
                e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(e) {
                    e.preventDefault();
                    var t = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                    u(e, t)
                })
            }
        }

        function u(e, t) {
            deltaOfInterest = t;
            var n = (new Date).getTime();
            if (n - lastAnimation < quietPeriod + r.animationTime) {
                e.preventDefault();
                return
            }
            if (deltaOfInterest < 0) {
                i.moveDown()
            } else {
                i.moveUp()
            }
            lastAnimation = n
        }
        var r = e.extend({}, t, n),
            i = e(this),
            s = e(r.sectionContainer);
        total = s.length, status = "off", topPos = 0, leftPos = 0, lastAnimation = 0, quietPeriod = 500, paginationList = "";
        e.fn.transformPage = function(t, n, r) {
            if (typeof t.beforeMove == "function") t.beforeMove(r);
            if (e("html").hasClass("ie8")) {
                if (t.direction == "horizontal") {
                    var s = i.width() / 100 * n;
                    e(this).animate({
                        left: s + "px"
                    }, t.animationTime)
                } else {
                    var s = i.height() / 100 * n;
                    e(this).animate({
                        top: s + "px"
                    }, t.animationTime)
                }
            } else {
                e(this).css({
                    "-webkit-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    "-webkit-transition": "all " + t.animationTime + "ms " + t.easing,
                    "-moz-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    "-moz-transition": "all " + t.animationTime + "ms " + t.easing,
                    "-ms-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    "-ms-transition": "all " + t.animationTime + "ms " + t.easing,
                    transform: t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    transition: "all " + t.animationTime + "ms " + t.easing
                })
            }
            e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                if (typeof t.afterMove == "function") t.afterMove(r)
            })
        };
        e.fn.moveDown = function() {
            var t = e(this);
            index = e(r.sectionContainer + ".active").data("index");
            current = e(r.sectionContainer + "[data-index='" + index + "']");
            next = e(r.sectionContainer + "[data-index='" + (index + 1) + "']");
            if (next.length < 1) {
                if (r.loop == true) {
                    pos = 0;
                    next = e(r.sectionContainer + "[data-index='1']")
                } else {
                    return
                }
            } else {
                pos = index * 100 * -1
            }
            if (typeof r.beforeMove == "function") r.beforeMove(next.data("index"));
            current.removeClass("active");
            next.addClass("active");
            if (r.pagination == true) {
                e(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            }
            e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
            e("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && r.updateURL == true) {
                var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index + 1);
                history.pushState({}, document.title, n)
            }
            t.transformPage(r, pos, next.data("index"))
        };
        e.fn.moveUp = function() {
            var t = e(this);
            index = e(r.sectionContainer + ".active").data("index");
            current = e(r.sectionContainer + "[data-index='" + index + "']");
            next = e(r.sectionContainer + "[data-index='" + (index - 1) + "']");
            if (next.length < 1) {
                if (r.loop == true) {
                    pos = (total - 1) * 100 * -1;
                    next = e(r.sectionContainer + "[data-index='" + total + "']")
                } else {
                    return
                }
            } else {
                pos = (next.data("index") - 1) * 100 * -1
            }
            if (typeof r.beforeMove == "function") r.beforeMove(next.data("index"));
            current.removeClass("active");
            next.addClass("active");
            if (r.pagination == true) {
                e(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            }
            e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
            e("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && r.updateURL == true) {
                var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index - 1);
                history.pushState({}, document.title, n)
            }
            t.transformPage(r, pos, next.data("index"))
        };
        e.fn.moveTo = function(t) {
            current = e(r.sectionContainer + ".active");
            next = e(r.sectionContainer + "[data-index='" + t + "']");
            if (next.length > 0) {
                if (typeof r.beforeMove == "function") r.beforeMove(next.data("index"));
                current.removeClass("active");
                next.addClass("active");
                e(".onepage-pagination li a" + ".active").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + t + "']").addClass("active");
                e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
                e("body").addClass("viewing-page-" + next.data("index"));
                pos = (t - 1) * 100 * -1;
                if (history.replaceState && r.updateURL == true) {
                    var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (t - 1);
                    history.pushState({}, document.title, n)
                }
                i.transformPage(r, pos, t)
            }
        };
        i.addClass("onepage-wrapper").css("position", "relative");
        e.each(s, function(t) {
            e(this).css({
                position: "absolute",
                top: topPos + "%"
            }).addClass("section").attr("data-index", t + 1);
            e(this).css({
                position: "absolute",
                left: r.direction == "horizontal" ? leftPos + "%" : 0,
                top: r.direction == "vertical" || r.direction != "horizontal" ? topPos + "%" : 0
            });
            if (r.direction == "horizontal") leftPos = leftPos + 100;
            else topPos = topPos + 100;
            if (r.pagination == true) {
                paginationList += "<li><a data-index='" + (t + 1) + "' href='#" + (t + 1) + "'></a></li>"
            }
        });
        i.swipeEvents().bind("swipeDown", function(t) {
            if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault();
            i.moveUp()
        }).bind("swipeUp", function(t) {
            if (!e("body").hasClass("disabled-onepage-scroll")) t.preventDefault();
            i.moveDown()
        });
        if (r.pagination == true) {
            if (e("ul.onepage-pagination").length < 1) e("<ul class='onepage-pagination'></ul>").prependTo("body");
            if (r.direction == "horizontal") {
                posLeft = i.find(".onepage-pagination").width() / 2 * -1;
                i.find(".onepage-pagination").css("margin-left", posLeft)
            } else {
                posTop = i.find(".onepage-pagination").height() / 2 * -1;
                i.find(".onepage-pagination").css("margin-top", posTop)
            }
            e("ul.onepage-pagination").html(paginationList)
        }
        if (window.location.hash != "" && window.location.hash != "#1") {
            init_index = window.location.hash.replace("#", "");
            if (parseInt(init_index) <= total && parseInt(init_index) > 0) {
                e(r.sectionContainer + "[data-index='" + init_index + "']").addClass("active");
                e("body").addClass("viewing-page-" + init_index);
                if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
                next = e(r.sectionContainer + "[data-index='" + init_index + "']");
                if (next) {
                    next.addClass("active");
                    if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
                    e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
                    e("body").addClass("viewing-page-" + next.data("index"));
                    if (history.replaceState && r.updateURL == true) {
                        var a = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + init_index;
                        history.pushState({}, document.title, a)
                    }
                }
                pos = (init_index - 1) * 100 * -1;
                i.transformPage(r, pos, init_index)
            } else {
                e(r.sectionContainer + "[data-index='1']").addClass("active");
                e("body").addClass("viewing-page-1");
                if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='1']").addClass("active")
            }
        } else {
            e(r.sectionContainer + "[data-index='1']").addClass("active");
            e("body").addClass("viewing-page-1");
            if (r.pagination == true) e(".onepage-pagination li a" + "[data-index='1']").addClass("active")
        }
        if (r.pagination == true) {
            e(".onepage-pagination li a").click(function() {
                var t = e(this).data("index");
                i.moveTo(t)
            })
        }
        e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(t) {
            t.preventDefault();
            var n = t.originalEvent.wheelDelta || -t.originalEvent.detail;
            if (!e("body").hasClass("disabled-onepage-scroll")) u(t, n)
        });
        if (r.responsiveFallback != false) {
            e(window).resize(function() {
                o()
            });
            o()
        }
        if (r.keyboard == true) {
            e(document).keydown(function(t) {
                var n = t.target.tagName.toLowerCase();
                if (!e("body").hasClass("disabled-onepage-scroll")) {
                    switch (t.which) {
                        case 38:
                            if (n != "input" && n != "textarea") i.moveUp();
                            break;
                        case 40:
                            if (n != "input" && n != "textarea") i.moveDown();
                            break;
                        case 32:
                            if (n != "input" && n != "textarea") i.moveDown();
                            break;
                        case 33:
                            if (n != "input" && n != "textarea") i.moveUp();
                            break;
                        case 34:
                            if (n != "input" && n != "textarea") i.moveDown();
                            break;
                        case 36:
                            i.moveTo(1);
                            break;
                        case 35:
                            i.moveTo(total);
                            break;
                        default:
                            return
                    }
                }
            })
        }
        return false
    }
}(window.jQuery)