/* Built on 2021-12-09 15:20:06 */
function createRequestObject() {
    var e;
    try {
        e = new XMLHttpRequest
    } catch (t) {
        e = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return e
}
function HTML5Player(e, t) {
    if (this.global_div = document.getElementById(e),
    !this.global_div)
        return void alert("Internal Error: Unable to find Video HTML Tag");
    this.global_div.style.direction = "ltr";
    this.debug = !1,
    this.consolelog = "",
    "undefined" == typeof window.console && (window.console = {},
    window.console.log = function() {}
    ),
    this.i18n = xv.i18n.getCatalog("xvplayer"),
    this.id_video = t,
    this.video_title = !1,
    this.url_low = "",
    this.url_high = "",
    this.url_hls = "",
    this.url_thumb = !1,
    this.url_thumb169 = !1,
    this.thumb_slide = !1,
    this.thumb_slide_big = !1,
    this.thumb_slide_min = !1,
    this.thumb_slide_type = HTML5Player.TYPE_SMALL,
    this.touchseek_last_positions = [],
    this.touchseek_block_click = !1,
    this.id_cdn = !1,
    this.id_cdn_hls = !1,
    this.fake_player = !1,
    this.desktop_view = !1,
    this.related_array = [],
    this.sponsors = !1,
    this.uploader_name = !1,
    this.is_smarttv = !1,
    this.force_lq = !1,
    this.forceExpanded = !1,
    this.pending_seek = 0,
    this.seek_was_playing = !1,
    this.preloaded = !1,
    this.relatedloaded = !1,
    this.plnextloaded = !1,
    this.plnexttimer = !1,
    this.plnexttime = 5,
    this.plnextclosed = !1,
    this.enableplautoplay = !0,
    this.is_embed = !1,
    this.video_url = "",
    this.forcenativehls = !1,
    this.forcenoautobuffer = !1,
    this.forcenopreviewimg = !1,
    this.chromecastdetected = !1,
    this.display_inplayersquare = !1,
    this.send_device_speed = !1,
    this.ads_active_fithteenpercentborder = !1,
    this.send_adclick_debug = !1,
    this.http_protocol = "http",
    this.https_protocol = "http",
    this.static_path = "https://static-hw.xvideos.com/v3",
    this.page_referer = !1,
    this.is_premium_site = !1,
    this.is_premium_video = !1,
    this.flashcode_available = !1,
    this.force_no_loop = !1,
    this.chromecastmedia = !1,
    this.adsquare_picture_loaded = !1,
    this.isFullScreen = !1,
    this.isFakeFullScreen = !1,
    this.isPlaying = !1,
    this.isBuffering = !1,
    this.isExpanded = !1,
    this.firstTimeBuffered = !1,
    this.lastBufferTimestamp = 0,
    this.bufferingTimeoutTimer,
    this.isPlayError = !1,
    this.canPlay = !1,
    this.videoRatio = -1,
    this.bufferBlocked_timestamp = 0,
    this.bufferBlocked_lastvalue = !1,
    this.bufferBlocked_nbtime = 0,
    this.lastErrorRecovery = 0,
    this.pendingUrlRPCUpdate = !1,
    this.hlsjsLevelParsed = !1,
    this.global_div_OriginalParentNode = this.global_div.parentNode,
    this.lastKnownCurrentTime = 0,
    this.lastCurrentTimeCheck = 0,
    this.lastTouchSeekPosition = -1,
    this.playClicked = !1,
    this.showintro = !0,
    this.showad = !1,
    this.showdoubleclick = !1,
    this.showsponsor = !0,
    this.doubleclick_ad_allowclick = !1,
    this.showmessage = !1,
    this.allow_showInfos = !1,
    this.allow_showInfosTimer = !1,
    this.showpausebt = !1,
    this.showsoundcontrol = !1,
    this.showbigthumb = !0,
    this.showparametersmenu = !1,
    this.showqualitiesmenu = !1,
    this.qualitiesmenubuttonlabel = "",
    this.showadvancedmenu = !1,
    this.showspeedmenu = !1,
    this.speed = 1,
    this.loopbtn,
    this.cursoroverprogressbar = !1,
    this.cursoroverplayer = !1,
    this.buffered_div_list = [],
    this.fragStats = [],
    this.fragStatsSended = !1,
    this.hlsNbError = 0,
    this.hlsLevelAutoForced = !1,
    this.PS4FirstSeekDone = !1,
    this.forcenobuffer_playafterpause = !1,
    this.seek_bar_color = "#F00",
    this.showsubscribebt = !1,
    this.ad_loading_error = !1,
    this.total_video_played = 0,
    this.total_video_transfer = 0,
    this.report_video_played_sent = !1,
    this.debug_events = {},
    this.thumb_slide_min_preload = {},
    this.use_browser_controls = !1,
    this.is_ios = !1,
    this.is_ipad = !1,
    this.is_ios_desktop_mode = !1,
    this.is_old_ios = !1,
    this.is_new_iphone = !1,
    this.is_safari = !1,
    this.is_ps4 = !1,
    this.is_android_app = !1,
    this.force_play_fullscreen = !1,
    this.support_native_hls = !1,
    this.support_hlsjs = !1,
    this.need_doubleclick_ad = !1,
    this.allow_touchseek = !1,
    this.is_touch_screen = "ontouchstart"in window || navigator.msMaxTouchPoints,
    this.use_hls = !1,
    this.use_native_hls = !1,
    this.use_parameter_menu = !0,
    this.is_fakeplayer_displayed = !1,
    this.is_flashplayer_displayed = !1,
    this.videoads_checked = !1,
    this.videoads = !1,
    this.videoads_miss = !1,
    this.block_popup = !1,
    this.extra_debug = !1,
    this.playlist = !1,
    this.player_init = !1,
    this.presetvisibility = {},
    this.curvisibility = {},
    this.sLocalStorageAutoNext = null,
    this.bPlautonext = !0,
    this.bIsPlNextAllowed = !0,
    this.bBigUiCoef = 1
}
function formatDuration(e) {
    return e > 3600 ? Math.floor(e / 3600) + "H " + Math.floor(e % 3600 / 60) + "min" : e > 300 ? Math.floor(e / 60) + "min" : e > 60 ? Math.floor(e / 60) + "min " + Math.floor(e % 60) + "sec" : Math.floor(e) + "sec"
}
function deferUntiljQuery(e) {
    window.jQuery ? e() : setTimeout(function() {
        deferUntiljQuery(e)
    }, 50)
}
"undefined" != typeof window && function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (i[r])
                return i[r].exports;
            var s = i[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(s.exports, s, s.exports, t),
            s.l = !0,
            s.exports
        }
        var i = {};
        return t.m = e,
        t.c = i,
        t.d = function(e, i, r) {
            t.o(e, i) || Object.defineProperty(e, i, {
                enumerable: !0,
                get: r
            })
        }
        ,
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        t.t = function(e, i) {
            if (1 & i && (e = t(e)),
            8 & i)
                return e;
            if (4 & i && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (t.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }),
            2 & i && "string" != typeof e)
                for (var s in e)
                    t.d(r, s, function(t) {
                        return e[t]
                    }
                    .bind(null, s));
            return r
        }
        ,
        t.n = function(e) {
            var i = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return t.d(i, "a", i),
            i
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "/dist/",
        t(t.s = "./src/hls.js")
    }({
        "./node_modules/eventemitter3/index.js": function(e, t, i) {
            "use strict";
            function r() {}
            function s(e, t, i) {
                this.fn = e,
                this.context = t,
                this.once = i || !1
            }
            function o(e, t, i, r, o) {
                if ("function" != typeof i)
                    throw new TypeError("The listener must be a function");
                var a = new s(i,r || e,o)
                  , n = d ? d + t : t;
                return e._events[n] ? e._events[n].fn ? e._events[n] = [e._events[n], a] : e._events[n].push(a) : (e._events[n] = a,
                e._eventsCount++),
                e
            }
            function a(e, t) {
                0 == --e._eventsCount ? e._events = new r : delete e._events[t]
            }
            function n() {
                this._events = new r,
                this._eventsCount = 0
            }
            var l = Object.prototype.hasOwnProperty
              , d = "~";
            Object.create && (r.prototype = Object.create(null),
            (new r).__proto__ || (d = !1)),
            n.prototype.eventNames = function() {
                var e, t, i = [];
                if (0 === this._eventsCount)
                    return i;
                for (t in e = this._events)
                    l.call(e, t) && i.push(d ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
            }
            ,
            n.prototype.listeners = function(e) {
                var t = d ? d + e : e
                  , i = this._events[t];
                if (!i)
                    return [];
                if (i.fn)
                    return [i.fn];
                for (var r = 0, s = i.length, o = new Array(s); r < s; r++)
                    o[r] = i[r].fn;
                return o
            }
            ,
            n.prototype.listenerCount = function(e) {
                var t = d ? d + e : e
                  , i = this._events[t];
                return i ? i.fn ? 1 : i.length : 0
            }
            ,
            n.prototype.emit = function(e, t, i, r, s, o) {
                var a = d ? d + e : e;
                if (!this._events[a])
                    return !1;
                var n, l, u = this._events[a], c = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, undefined, !0),
                    c) {
                    case 1:
                        return u.fn.call(u.context),
                        !0;
                    case 2:
                        return u.fn.call(u.context, t),
                        !0;
                    case 3:
                        return u.fn.call(u.context, t, i),
                        !0;
                    case 4:
                        return u.fn.call(u.context, t, i, r),
                        !0;
                    case 5:
                        return u.fn.call(u.context, t, i, r, s),
                        !0;
                    case 6:
                        return u.fn.call(u.context, t, i, r, s, o),
                        !0
                    }
                    for (l = 1,
                    n = new Array(c - 1); l < c; l++)
                        n[l - 1] = arguments[l];
                    u.fn.apply(u.context, n)
                } else {
                    var h, f = u.length;
                    for (l = 0; l < f; l++)
                        switch (u[l].once && this.removeListener(e, u[l].fn, undefined, !0),
                        c) {
                        case 1:
                            u[l].fn.call(u[l].context);
                            break;
                        case 2:
                            u[l].fn.call(u[l].context, t);
                            break;
                        case 3:
                            u[l].fn.call(u[l].context, t, i);
                            break;
                        case 4:
                            u[l].fn.call(u[l].context, t, i, r);
                            break;
                        default:
                            if (!n)
                                for (h = 1,
                                n = new Array(c - 1); h < c; h++)
                                    n[h - 1] = arguments[h];
                            u[l].fn.apply(u[l].context, n)
                        }
                }
                return !0
            }
            ,
            n.prototype.on = function(e, t, i) {
                return o(this, e, t, i, !1)
            }
            ,
            n.prototype.once = function(e, t, i) {
                return o(this, e, t, i, !0)
            }
            ,
            n.prototype.removeListener = function(e, t, i, r) {
                var s = d ? d + e : e;
                if (!this._events[s])
                    return this;
                if (!t)
                    return a(this, s),
                    this;
                var o = this._events[s];
                if (o.fn)
                    o.fn !== t || r && !o.once || i && o.context !== i || a(this, s);
                else {
                    for (var n = 0, l = [], u = o.length; n < u; n++)
                        (o[n].fn !== t || r && !o[n].once || i && o[n].context !== i) && l.push(o[n]);
                    l.length ? this._events[s] = 1 === l.length ? l[0] : l : a(this, s)
                }
                return this
            }
            ,
            n.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = d ? d + e : e,
                this._events[t] && a(this, t)) : (this._events = new r,
                this._eventsCount = 0),
                this
            }
            ,
            n.prototype.off = n.prototype.removeListener,
            n.prototype.addListener = n.prototype.on,
            n.prefixed = d,
            n.EventEmitter = n,
            e.exports = n
        },
        "./node_modules/node-libs-browser/node_modules/events/events.js": function(e, t) {
            function i() {
                this._events = this._events || {},
                this._maxListeners = this._maxListeners || undefined
            }
            function r(e) {
                return "function" == typeof e
            }
            function s(e) {
                return "number" == typeof e
            }
            function o(e) {
                return "object" == typeof e && null !== e
            }
            function a(e) {
                return void 0 === e
            }
            e.exports = i,
            i.EventEmitter = i,
            i.prototype._events = undefined,
            i.prototype._maxListeners = undefined,
            i.defaultMaxListeners = 10,
            i.prototype.setMaxListeners = function(e) {
                if (!s(e) || e < 0 || isNaN(e))
                    throw TypeError("n must be a positive number");
                return this._maxListeners = e,
                this
            }
            ,
            i.prototype.emit = function(e) {
                var t, i, s, n, l, d;
                if (this._events || (this._events = {}),
                "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                    if ((t = arguments[1])instanceof Error)
                        throw t;
                    var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw u.context = t,
                    u
                }
                if (i = this._events[e],
                a(i))
                    return !1;
                if (r(i))
                    switch (arguments.length) {
                    case 1:
                        i.call(this);
                        break;
                    case 2:
                        i.call(this, arguments[1]);
                        break;
                    case 3:
                        i.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        n = Array.prototype.slice.call(arguments, 1),
                        i.apply(this, n)
                    }
                else if (o(i))
                    for (n = Array.prototype.slice.call(arguments, 1),
                    d = i.slice(),
                    s = d.length,
                    l = 0; l < s; l++)
                        d[l].apply(this, n);
                return !0
            }
            ,
            i.prototype.addListener = function(e, t) {
                var s;
                if (!r(t))
                    throw TypeError("listener must be a function");
                return this._events || (this._events = {}),
                this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t),
                this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
                o(this._events[e]) && !this._events[e].warned && (s = a(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0,
                console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
                "function" == typeof console.trace && console.trace()),
                this
            }
            ,
            i.prototype.on = i.prototype.addListener,
            i.prototype.once = function(e, t) {
                function i() {
                    this.removeListener(e, i),
                    s || (s = !0,
                    t.apply(this, arguments))
                }
                if (!r(t))
                    throw TypeError("listener must be a function");
                var s = !1;
                return i.listener = t,
                this.on(e, i),
                this
            }
            ,
            i.prototype.removeListener = function(e, t) {
                var i, s, a, n;
                if (!r(t))
                    throw TypeError("listener must be a function");
                if (!this._events || !this._events[e])
                    return this;
                if (i = this._events[e],
                a = i.length,
                s = -1,
                i === t || r(i.listener) && i.listener === t)
                    delete this._events[e],
                    this._events.removeListener && this.emit("removeListener", e, t);
                else if (o(i)) {
                    for (n = a; n-- > 0; )
                        if (i[n] === t || i[n].listener && i[n].listener === t) {
                            s = n;
                            break
                        }
                    if (s < 0)
                        return this;
                    1 === i.length ? (i.length = 0,
                    delete this._events[e]) : i.splice(s, 1),
                    this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }
            ,
            i.prototype.removeAllListeners = function(e) {
                var t, i;
                if (!this._events)
                    return this;
                if (!this._events.removeListener)
                    return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
                    this;
                if (0 === arguments.length) {
                    for (t in this._events)
                        "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"),
                    this._events = {},
                    this
                }
                if (i = this._events[e],
                r(i))
                    this.removeListener(e, i);
                else if (i)
                    for (; i.length; )
                        this.removeListener(e, i[i.length - 1]);
                return delete this._events[e],
                this
            }
            ,
            i.prototype.listeners = function(e) {
                return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }
            ,
            i.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (r(t))
                        return 1;
                    if (t)
                        return t.length
                }
                return 0
            }
            ,
            i.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        },
        "./node_modules/url-toolkit/src/url-toolkit.js": function(e, t, i) {
            !function(t) {
                var i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/
                  , r = /^([^\/;?#]*)(.*)$/
                  , s = /(?:\/|^)\.(?=\/)/g
                  , o = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g
                  , a = {
                    buildAbsoluteURL: function(e, t, i) {
                        if (i = i || {},
                        e = e.trim(),
                        !(t = t.trim())) {
                            if (!i.alwaysNormalize)
                                return e;
                            var s = this.parseURL(e);
                            if (!n)
                                throw new Error("Error trying to parse base URL.");
                            return s.path = a.normalizePath(s.path),
                            a.buildURLFromParts(s)
                        }
                        var o = this.parseURL(t);
                        if (!o)
                            throw new Error("Error trying to parse relative URL.");
                        if (o.scheme)
                            return i.alwaysNormalize ? (o.path = a.normalizePath(o.path),
                            a.buildURLFromParts(o)) : t;
                        var n = this.parseURL(e);
                        if (!n)
                            throw new Error("Error trying to parse base URL.");
                        if (!n.netLoc && n.path && "/" !== n.path[0]) {
                            var l = r.exec(n.path);
                            n.netLoc = l[1],
                            n.path = l[2]
                        }
                        n.netLoc && !n.path && (n.path = "/");
                        var d = {
                            scheme: n.scheme,
                            netLoc: o.netLoc,
                            path: null,
                            params: o.params,
                            query: o.query,
                            fragment: o.fragment
                        };
                        if (!o.netLoc && (d.netLoc = n.netLoc,
                        "/" !== o.path[0]))
                            if (o.path) {
                                var u = n.path
                                  , c = u.substring(0, u.lastIndexOf("/") + 1) + o.path;
                                d.path = a.normalizePath(c)
                            } else
                                d.path = n.path,
                                o.params || (d.params = n.params,
                                o.query || (d.query = n.query));
                        return null === d.path && (d.path = i.alwaysNormalize ? a.normalizePath(o.path) : o.path),
                        a.buildURLFromParts(d)
                    },
                    parseURL: function(e) {
                        var t = i.exec(e);
                        return t ? {
                            scheme: t[1] || "",
                            netLoc: t[2] || "",
                            path: t[3] || "",
                            params: t[4] || "",
                            query: t[5] || "",
                            fragment: t[6] || ""
                        } : null
                    },
                    normalizePath: function(e) {
                        for (e = e.split("").reverse().join("").replace(s, ""); e.length !== (e = e.replace(o, "")).length; )
                            ;
                        return e.split("").reverse().join("")
                    },
                    buildURLFromParts: function(e) {
                        return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                    }
                };
                e.exports = a
            }()
        },
        "./node_modules/webworkify-webpack/index.js": function(e, t, i) {
            function r(e) {
                function t(r) {
                    if (i[r])
                        return i[r].exports;
                    var s = i[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(s.exports, s, s.exports, t),
                    s.l = !0,
                    s.exports
                }
                var i = {};
                t.m = e,
                t.c = i,
                t.i = function(e) {
                    return e
                }
                ,
                t.d = function(e, i, r) {
                    t.o(e, i) || Object.defineProperty(e, i, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }
                ,
                t.r = function(e) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                t.n = function(e) {
                    var i = e && e.__esModule ? function() {
                        return e["default"]
                    }
                    : function() {
                        return e
                    }
                    ;
                    return t.d(i, "a", i),
                    i
                }
                ,
                t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                t.p = "/",
                t.oe = function(e) {
                    throw console.error(e),
                    e
                }
                ;
                var r = t(t.s = ENTRY_MODULE);
                return r["default"] || r
            }
            function s(e) {
                return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
            }
            function o(e) {
                return !isNaN(1 * e)
            }
            function a(e, t, r) {
                var a = {};
                a[r] = [];
                var n = t.toString()
                  , l = n.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!l)
                    return a;
                for (var c, h = l[1], f = new RegExp("(\\\\n|\\W)" + s(h) + u,"g"); c = f.exec(n); )
                    "dll-reference" !== c[3] && a[r].push(c[3]);
                for (f = new RegExp("\\(" + s(h) + '\\("(dll-reference\\s(' + d + '))"\\)\\)' + u,"g"); c = f.exec(n); )
                    e[c[2]] || (a[r].push(c[1]),
                    e[c[2]] = i(c[1]).m),
                    a[c[2]] = a[c[2]] || [],
                    a[c[2]].push(c[4]);
                for (var p = Object.keys(a), v = 0; v < p.length; v++)
                    for (var g = 0; g < a[p[v]].length; g++)
                        o(a[p[v]][g]) && (a[p[v]][g] = 1 * a[p[v]][g]);
                return a
            }
            function n(e) {
                return Object.keys(e).reduce(function(t, i) {
                    return t || e[i].length > 0
                }, !1)
            }
            function l(e, t) {
                for (var i = {
                    main: [t]
                }, r = {
                    main: []
                }, s = {
                    main: {}
                }; n(i); )
                    for (var o = Object.keys(i), l = 0; l < o.length; l++) {
                        var d = o[l]
                          , u = i[d]
                          , c = u.pop();
                        if (s[d] = s[d] || {},
                        !s[d][c] && e[d][c]) {
                            s[d][c] = !0,
                            r[d] = r[d] || [],
                            r[d].push(c);
                            for (var h = a(e, e[d][c], d), f = Object.keys(h), p = 0; p < f.length; p++)
                                i[f[p]] = i[f[p]] || [],
                                i[f[p]] = i[f[p]].concat(h[f[p]])
                        }
                    }
                return r
            }
            var d = "[\\.|\\-|\\+|\\w|/|@]+"
              , u = "\\((/\\*.*?\\*/)?s?.*?(" + d + ").*?\\)";
            e.exports = function(e, t) {
                t = t || {};
                var s = {
                    main: i.m
                }
                  , o = t.all ? {
                    main: Object.keys(s.main)
                } : l(s, e)
                  , a = "";
                Object.keys(o).filter(function(e) {
                    return "main" !== e
                }).forEach(function(e) {
                    for (var t = 0; o[e][t]; )
                        t++;
                    o[e].push(t),
                    s[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
                    a = a + "var " + e + " = (" + r.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o[e].map(function(t) {
                        return JSON.stringify(t) + ": " + s[e][t].toString()
                    }).join(",") + "});\n"
                }),
                a = a + "new ((" + r.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o.main.map(function(e) {
                    return JSON.stringify(e) + ": " + s.main[e].toString()
                }).join(",") + "}))(self);";
                var n = new window.Blob([a],{
                    type: "text/javascript"
                });
                if (t.bare)
                    return n;
                var d = window.URL || window.webkitURL || window.mozURL || window.msURL
                  , u = d.createObjectURL(n)
                  , c = new window.Worker(u);
                return c.objectURL = u,
                c
            }
        },
        "./src/config.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/controller/abr-controller.js")
              , s = i("./src/controller/buffer-controller.js")
              , o = i("./src/controller/cap-level-controller.js")
              , a = i("./src/controller/fps-controller.js")
              , n = i("./src/utils/xhr-loader.js")
              , l = i("./src/controller/audio-track-controller.js")
              , d = i("./src/controller/audio-stream-controller.js")
              , u = i("./src/utils/cues.js")
              , c = i("./src/controller/timeline-controller.js")
              , h = i("./src/controller/subtitle-track-controller.js")
              , f = i("./src/controller/subtitle-stream-controller.js")
              , p = i("./src/controller/eme-controller.js")
              , v = i("./src/utils/mediakeys-helper.js");
            t.hlsDefaultConfig = {
                autoStartLoad: !0,
                startPosition: -1,
                defaultAudioCodec: undefined,
                debug: !1,
                capLevelOnFPSDrop: !1,
                capLevelToPlayerSize: !1,
                initialLiveManifestSize: 1,
                maxBufferLength: 30,
                maxBufferSize: 6e7,
                maxBufferHole: .5,
                lowBufferWatchdogPeriod: .5,
                highBufferWatchdogPeriod: 3,
                nudgeOffset: .1,
                nudgeMaxRetry: 3,
                maxFragLookUpTolerance: .25,
                liveSyncDurationCount: 3,
                liveMaxLatencyDurationCount: Infinity,
                liveSyncDuration: undefined,
                liveMaxLatencyDuration: undefined,
                liveDurationInfinity: !1,
                maxMaxBufferLength: 600,
                enableWorker: !0,
                enableSoftwareAES: !0,
                manifestLoadingTimeOut: 1e4,
                manifestLoadingMaxRetry: 1,
                manifestLoadingRetryDelay: 1e3,
                manifestLoadingMaxRetryTimeout: 64e3,
                startLevel: undefined,
                levelLoadingTimeOut: 1e4,
                levelLoadingMaxRetry: 4,
                levelLoadingRetryDelay: 1e3,
                levelLoadingMaxRetryTimeout: 64e3,
                fragLoadingTimeOut: 2e4,
                fragLoadingMaxRetry: 6,
                fragLoadingRetryDelay: 1e3,
                fragLoadingMaxRetryTimeout: 64e3,
                startFragPrefetch: !1,
                fpsDroppedMonitoringPeriod: 5e3,
                fpsDroppedMonitoringThreshold: .2,
                appendErrorMaxRetry: 3,
                loader: n["default"],
                fLoader: undefined,
                pLoader: undefined,
                xhrSetup: undefined,
                licenseXhrSetup: undefined,
                abrController: r["default"],
                bufferController: s["default"],
                capLevelController: o["default"],
                fpsController: a["default"],
                stretchShortVideoTrack: !1,
                maxAudioFramesDrift: 1,
                forceKeyFrameOnDiscontinuity: !0,
                abrEwmaFastLive: 3,
                abrEwmaSlowLive: 9,
                abrEwmaFastVoD: 3,
                abrEwmaSlowVoD: 9,
                abrEwmaDefaultEstimate: 5e5,
                abrBandWidthFactor: .95,
                abrBandWidthUpFactor: .7,
                abrMaxWithRealBitrate: !1,
                maxStarvationDelay: 4,
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                emeEnabled: !1,
                widevineLicenseUrl: undefined,
                requestMediaKeySystemAccessFunc: v.requestMediaKeySystemAccess
            },
            t.hlsDefaultConfig.subtitleStreamController = f["default"],
            t.hlsDefaultConfig.subtitleTrackController = h["default"],
            t.hlsDefaultConfig.timelineController = c["default"],
            t.hlsDefaultConfig.cueHandler = u,
            t.hlsDefaultConfig.enableCEA708Captions = !0,
            t.hlsDefaultConfig.enableWebVTT = !0,
            t.hlsDefaultConfig.captionsTextTrack1Label = "English",
            t.hlsDefaultConfig.captionsTextTrack1LanguageCode = "en",
            t.hlsDefaultConfig.captionsTextTrack2Label = "Spanish",
            t.hlsDefaultConfig.captionsTextTrack2LanguageCode = "es",
            t.hlsDefaultConfig.audioStreamController = d["default"],
            t.hlsDefaultConfig.audioTrackController = l["default"],
            t.hlsDefaultConfig.emeController = p["default"]
        },
        "./src/controller/abr-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                        new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , a = i("./src/utils/buffer-helper.js")
                  , n = i("./src/errors.js")
                  , l = i("./src/utils/logger.js")
                  , d = i("./src/utils/ewma-bandwidth-estimator.js")
                  , u = window.performance
                  , c = function(t) {
                    function i(e) {
                        var i = t.call(this, e, s["default"].FRAG_LOADING, s["default"].FRAG_LOADED, s["default"].FRAG_BUFFERED, s["default"].ERROR) || this;
                        return i.lastLoadedFragLevel = 0,
                        i._nextAutoLevel = -1,
                        i.hls = e,
                        i.timer = null,
                        i._bwEstimator = null,
                        i.onCheck = i._abandonRulesCheck.bind(i),
                        i
                    }
                    return r(i, t),
                    i.prototype.destroy = function() {
                        this.clearTimer(),
                        o["default"].prototype.destroy.call(this)
                    }
                    ,
                    i.prototype.onFragLoading = function(e) {
                        var t = e.frag;
                        if ("main" === t.type && (this.timer || (this.fragCurrent = t,
                        this.timer = setInterval(this.onCheck, 100)),
                        !this._bwEstimator)) {
                            var i = this.hls
                              , r = i.config
                              , s = t.level
                              , o = i.levels[s].details.live
                              , a = void 0
                              , n = void 0;
                            o ? (a = r.abrEwmaFastLive,
                            n = r.abrEwmaSlowLive) : (a = r.abrEwmaFastVoD,
                            n = r.abrEwmaSlowVoD),
                            this._bwEstimator = new d["default"](i,n,a,r.abrEwmaDefaultEstimate)
                        }
                    }
                    ,
                    i.prototype._abandonRulesCheck = function() {
                        var e = this.hls
                          , t = e.media
                          , i = this.fragCurrent;
                        if (i) {
                            var r = i.loader
                              , o = e.minAutoLevel;
                            if (!r || r.stats && r.stats.aborted)
                                return l.logger.warn("frag loader destroy or aborted, disarm abandonRules"),
                                this.clearTimer(),
                                void (this._nextAutoLevel = -1);
                            var n = r.stats;
                            if (t && n && (!t.paused && 0 !== t.playbackRate || !t.readyState) && i.autoLevel && i.level) {
                                var d = u.now() - n.trequest
                                  , c = Math.abs(t.playbackRate);
                                if (d > 500 * i.duration / c) {
                                    var h = e.levels
                                      , f = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / d)
                                      , p = h[i.level]
                                      , v = p.realBitrate ? Math.max(p.realBitrate, p.bitrate) : p.bitrate
                                      , g = n.total ? n.total : Math.max(n.loaded, Math.round(i.duration * v / 8))
                                      , m = t.currentTime
                                      , y = (g - n.loaded) / f
                                      , b = (a.BufferHelper.bufferInfo(t, m, e.config.maxBufferHole).end - m) / c;
                                    if (b < 2 * i.duration / c && y > b) {
                                        var _ = void 0
                                          , E = void 0;
                                        for (E = i.level - 1; E > o; E--) {
                                            var w = h[E].realBitrate ? Math.max(h[E].realBitrate, h[E].bitrate) : h[E].bitrate;
                                            if ((_ = i.duration * w / (6.4 * f)) < b)
                                                break
                                        }
                                        _ < y && (l.logger.warn("loading too slow, abort fragment loading and switch to level " + E + ":fragLoadedDelay[" + E + "]<fragLoadedDelay[" + (i.level - 1) + "];bufferStarvationDelay:" + _.toFixed(1) + "<" + y.toFixed(1) + ":" + b.toFixed(1)),
                                        e.nextLoadLevel = E,
                                        this._bwEstimator.sample(d, n.loaded),
                                        r.abort(),
                                        this.clearTimer(),
                                        e.trigger(s["default"].FRAG_LOAD_EMERGENCY_ABORTED, {
                                            frag: i,
                                            stats: n
                                        }))
                                    }
                                }
                            }
                        }
                    }
                    ,
                    i.prototype.onFragLoaded = function(t) {
                        var i = t.frag;
                        if ("main" === i.type && e.isFinite(i.sn)) {
                            if (this.clearTimer(),
                            this.lastLoadedFragLevel = i.level,
                            this._nextAutoLevel = -1,
                            this.hls.config.abrMaxWithRealBitrate) {
                                var r = this.hls.levels[i.level]
                                  , s = (r.loaded ? r.loaded.bytes : 0) + t.stats.loaded
                                  , o = (r.loaded ? r.loaded.duration : 0) + t.frag.duration;
                                r.loaded = {
                                    bytes: s,
                                    duration: o
                                },
                                r.realBitrate = Math.round(8 * s / o)
                            }
                            if (t.frag.bitrateTest) {
                                var a = t.stats;
                                a.tparsed = a.tbuffered = a.tload,
                                this.onFragBuffered(t)
                            }
                        }
                    }
                    ,
                    i.prototype.onFragBuffered = function(t) {
                        var i = t.stats
                          , r = t.frag;
                        if (!0 !== i.aborted && "main" === r.type && e.isFinite(r.sn) && (!r.bitrateTest || i.tload === i.tbuffered)) {
                            var s = i.tparsed - i.trequest;
                            l.logger.log("latency/loading/parsing/append/kbps:" + Math.round(i.tfirst - i.trequest) + "/" + Math.round(i.tload - i.tfirst) + "/" + Math.round(i.tparsed - i.tload) + "/" + Math.round(i.tbuffered - i.tparsed) + "/" + Math.round(8 * i.loaded / (i.tbuffered - i.trequest))),
                            this._bwEstimator.sample(s, i.loaded),
                            i.bwEstimate = this._bwEstimator.getEstimate(),
                            r.bitrateTest ? this.bitrateTestDelay = s / 1e3 : this.bitrateTestDelay = 0
                        }
                    }
                    ,
                    i.prototype.onError = function(e) {
                        switch (e.details) {
                        case n.ErrorDetails.FRAG_LOAD_ERROR:
                        case n.ErrorDetails.FRAG_LOAD_TIMEOUT:
                            this.clearTimer()
                        }
                    }
                    ,
                    i.prototype.clearTimer = function() {
                        clearInterval(this.timer),
                        this.timer = null
                    }
                    ,
                    Object.defineProperty(i.prototype, "nextAutoLevel", {
                        get: function() {
                            var e = this._nextAutoLevel
                              , t = this._bwEstimator;
                            if (!(-1 === e || t && t.canEstimate()))
                                return e;
                            var i = this._nextABRAutoLevel;
                            return -1 !== e && (i = Math.min(e, i)),
                            i
                        },
                        set: function(e) {
                            this._nextAutoLevel = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(i.prototype, "_nextABRAutoLevel", {
                        get: function() {
                            var e = this.hls
                              , t = e.maxAutoLevel
                              , i = e.levels
                              , r = e.config
                              , s = e.minAutoLevel
                              , o = e.media
                              , n = this.lastLoadedFragLevel
                              , d = this.fragCurrent ? this.fragCurrent.duration : 0
                              , u = o ? o.currentTime : 0
                              , c = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1
                              , h = this._bwEstimator ? this._bwEstimator.getEstimate() : r.abrEwmaDefaultEstimate
                              , f = (a.BufferHelper.bufferInfo(o, u, r.maxBufferHole).end - u) / c
                              , p = this._findBestLevel(n, d, h, s, t, f, r.abrBandWidthFactor, r.abrBandWidthUpFactor, i);
                            if (p >= 0)
                                return p;
                            l.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                            var v = d ? Math.min(d, r.maxStarvationDelay) : r.maxStarvationDelay
                              , g = r.abrBandWidthFactor
                              , m = r.abrBandWidthUpFactor;
                            if (0 === f) {
                                var y = this.bitrateTestDelay;
                                if (y) {
                                    v = (d ? Math.min(d, r.maxLoadingDelay) : r.maxLoadingDelay) - y,
                                    l.logger.trace("bitrate test took " + Math.round(1e3 * y) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * v) + " ms"),
                                    g = m = 1
                                }
                            }
                            return p = this._findBestLevel(n, d, h, s, t, f + v, g, m, i),
                            Math.max(p, 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    i.prototype._findBestLevel = function(e, t, i, r, s, o, a, n, d) {
                        for (var u = s; u >= r; u--) {
                            var c = d[u];
                            if (c) {
                                var h = c.details
                                  , f = h ? h.totalduration / h.fragments.length : t
                                  , p = !!h && h.live
                                  , v = void 0;
                                v = u <= e ? a * i : n * i;
                                var g = d[u].realBitrate ? Math.max(d[u].realBitrate, d[u].bitrate) : d[u].bitrate
                                  , m = g * f / v;
                                if (l.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(v) + "/" + g + "/" + f + "/" + o + "/" + m),
                                v > g && (!m || p && !this.bitrateTestDelay || m < o))
                                    return u
                            }
                        }
                        return -1
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = c
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/audio-stream-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                        new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/utils/binary-search.js")
                  , o = i("./src/utils/buffer-helper.js")
                  , a = i("./src/demux/demuxer.js")
                  , n = i("./src/events.js")
                  , l = i("./src/controller/level-helper.js")
                  , d = i("./src/utils/time-ranges.js")
                  , u = i("./src/errors.js")
                  , c = i("./src/utils/logger.js")
                  , h = i("./src/utils/discontinuities.js")
                  , f = i("./src/task-loop.js")
                  , p = i("./src/controller/fragment-tracker.js")
                  , v = i("./src/loader/fragment.js")
                  , g = window.performance
                  , m = {
                    STOPPED: "STOPPED",
                    STARTING: "STARTING",
                    IDLE: "IDLE",
                    PAUSED: "PAUSED",
                    KEY_LOADING: "KEY_LOADING",
                    FRAG_LOADING: "FRAG_LOADING",
                    FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                    WAITING_TRACK: "WAITING_TRACK",
                    PARSING: "PARSING",
                    PARSED: "PARSED",
                    BUFFER_FLUSHING: "BUFFER_FLUSHING",
                    ENDED: "ENDED",
                    ERROR: "ERROR",
                    WAITING_INIT_PTS: "WAITING_INIT_PTS"
                }
                  , y = function(t) {
                    function i(e, i) {
                        var r = t.call(this, e, n["default"].MEDIA_ATTACHED, n["default"].MEDIA_DETACHING, n["default"].AUDIO_TRACKS_UPDATED, n["default"].AUDIO_TRACK_SWITCHING, n["default"].AUDIO_TRACK_LOADED, n["default"].KEY_LOADED, n["default"].FRAG_LOADED, n["default"].FRAG_PARSING_INIT_SEGMENT, n["default"].FRAG_PARSING_DATA, n["default"].FRAG_PARSED, n["default"].ERROR, n["default"].BUFFER_RESET, n["default"].BUFFER_CREATED, n["default"].BUFFER_APPENDED, n["default"].BUFFER_FLUSHED, n["default"].INIT_PTS_FOUND) || this;
                        return r.fragmentTracker = i,
                        r.config = e.config,
                        r.audioCodecSwap = !1,
                        r._state = m.STOPPED,
                        r.initPTS = [],
                        r.waitingFragment = null,
                        r.videoTrackCC = null,
                        r
                    }
                    return r(i, t),
                    i.prototype.onHandlerDestroying = function() {
                        this.stopLoad(),
                        t.prototype.onHandlerDestroying.call(this)
                    }
                    ,
                    i.prototype.onHandlerDestroyed = function() {
                        this.state = m.STOPPED,
                        this.fragmentTracker = null,
                        t.prototype.onHandlerDestroyed.call(this)
                    }
                    ,
                    i.prototype.onInitPtsFound = function(e) {
                        var t = e.id
                          , i = e.frag.cc
                          , r = e.initPTS;
                        "main" === t && (this.initPTS[i] = r,
                        this.videoTrackCC = i,
                        c.logger.log("InitPTS for cc: " + i + " found from video track: " + r),
                        this.state === m.WAITING_INIT_PTS && this.tick())
                    }
                    ,
                    i.prototype.startLoad = function(e) {
                        if (this.tracks) {
                            var t = this.lastCurrentTime;
                            this.stopLoad(),
                            this.setInterval(100),
                            this.fragLoadError = 0,
                            t > 0 && -1 === e ? (c.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)),
                            this.state = m.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e,
                            this.state = m.STARTING),
                            this.nextLoadPosition = this.startPosition = this.lastCurrentTime,
                            this.tick()
                        } else
                            this.startPosition = e,
                            this.state = m.STOPPED
                    }
                    ,
                    i.prototype.stopLoad = function() {
                        var e = this.fragCurrent;
                        e && (e.loader && e.loader.abort(),
                        this.fragmentTracker.removeFragment(e),
                        this.fragCurrent = null),
                        this.fragPrevious = null,
                        this.demuxer && (this.demuxer.destroy(),
                        this.demuxer = null),
                        this.state = m.STOPPED
                    }
                    ,
                    Object.defineProperty(i.prototype, "state", {
                        get: function() {
                            return this._state
                        },
                        set: function(e) {
                            if (this.state !== e) {
                                var t = this.state;
                                this._state = e,
                                c.logger.log("audio stream:" + t + "->" + e)
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    i.prototype.doTick = function() {
                        var t, i, r, a = this.hls, l = a.config;
                        switch (this.state) {
                        case m.ERROR:
                        case m.PAUSED:
                        case m.BUFFER_FLUSHING:
                            break;
                        case m.STARTING:
                            this.state = m.WAITING_TRACK,
                            this.loadedmetadata = !1;
                            break;
                        case m.IDLE:
                            var d = this.tracks;
                            if (!d)
                                break;
                            if (!this.media && (this.startFragRequested || !l.startFragPrefetch))
                                break;
                            if (this.loadedmetadata)
                                t = this.media.currentTime;
                            else if ((t = this.nextLoadPosition) === undefined)
                                break;
                            var u = this.mediaBuffer ? this.mediaBuffer : this.media
                              , f = this.videoBuffer ? this.videoBuffer : this.media
                              , v = o.BufferHelper.bufferInfo(u, t, l.maxBufferHole)
                              , y = o.BufferHelper.bufferInfo(f, t, l.maxBufferHole)
                              , b = v.len
                              , _ = v.end
                              , E = this.fragPrevious
                              , w = Math.min(l.maxBufferLength, l.maxMaxBufferLength)
                              , k = Math.max(w, y.len)
                              , T = this.audioSwitch
                              , S = this.trackId;
                            if ((b < k || T) && S < d.length) {
                                if (void 0 === (r = d[S].details)) {
                                    this.state = m.WAITING_TRACK;
                                    break
                                }
                                if (!T && !r.live && E && E.sn === r.endSN && !v.nextStart && (!this.media.seeking || this.media.duration - _ < E.duration / 2)) {
                                    this.hls.trigger(n["default"].BUFFER_EOS, {
                                        type: "audio"
                                    }),
                                    this.state = m.ENDED;
                                    break
                                }
                                var A = r.fragments
                                  , x = A.length
                                  , L = A[0].start
                                  , P = A[x - 1].start + A[x - 1].duration
                                  , R = void 0;
                                if (T)
                                    if (r.live && !r.PTSKnown)
                                        c.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"),
                                        _ = 0;
                                    else if (_ = t,
                                    r.PTSKnown && t < L) {
                                        if (!(v.end > L || v.nextStart))
                                            return;
                                        c.logger.log("alt audio track ahead of main track, seek to start of alt audio track"),
                                        this.media.currentTime = L + .05
                                    }
                                if (r.initSegment && !r.initSegment.data)
                                    R = r.initSegment;
                                else if (_ <= L) {
                                    if (R = A[0],
                                    null !== this.videoTrackCC && R.cc !== this.videoTrackCC && (R = h.findFragWithCC(A, this.videoTrackCC)),
                                    r.live && R.loadIdx && R.loadIdx === this.fragLoadIdx) {
                                        var C = v.nextStart ? v.nextStart : L;
                                        return c.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (C + .05)),
                                        void (this.media.currentTime = C + .05)
                                    }
                                } else {
                                    var D = void 0
                                      , I = l.maxFragLookUpTolerance
                                      , O = E ? A[E.sn - A[0].sn + 1] : undefined
                                      , M = function(e) {
                                        var t = Math.min(I, e.duration);
                                        return e.start + e.duration - t <= _ ? 1 : e.start - t > _ && e.start ? -1 : 0
                                    };
                                    _ < P ? (_ > P - I && (I = 0),
                                    D = O && !M(O) ? O : s["default"].search(A, M)) : D = A[x - 1],
                                    D && (R = D,
                                    L = D.start,
                                    E && R.level === E.level && R.sn === E.sn && (R.sn < r.endSN ? (R = A[R.sn + 1 - r.startSN],
                                    c.logger.log("SN just loaded, load next one: " + R.sn)) : R = null))
                                }
                                R && (R.encrypted ? (c.logger.log("Loading key for " + R.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + S),
                                this.state = m.KEY_LOADING,
                                a.trigger(n["default"].KEY_LOADING, {
                                    frag: R
                                })) : (c.logger.log("Loading " + R.sn + ", cc: " + R.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + S + ", currentTime:" + t + ",bufferEnd:" + _.toFixed(3)),
                                (T || this.fragmentTracker.getState(R) === p.FragmentState.NOT_LOADED) && (this.fragCurrent = R,
                                this.startFragRequested = !0,
                                e.isFinite(R.sn) && (this.nextLoadPosition = R.start + R.duration),
                                a.trigger(n["default"].FRAG_LOADING, {
                                    frag: R
                                }),
                                this.state = m.FRAG_LOADING)))
                            }
                            break;
                        case m.WAITING_TRACK:
                            i = this.tracks[this.trackId],
                            i && i.details && (this.state = m.IDLE);
                            break;
                        case m.FRAG_LOADING_WAITING_RETRY:
                            var F = g.now()
                              , N = this.retryDate;
                            u = this.media;
                            var B = u && u.seeking;
                            (!N || F >= N || B) && (c.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"),
                            this.state = m.IDLE);
                            break;
                        case m.WAITING_INIT_PTS:
                            var j = this.videoTrackCC;
                            if (this.initPTS[j] === undefined)
                                break;
                            var U = this.waitingFragment;
                            if (U) {
                                var H = U.frag.cc;
                                j !== H ? (i = this.tracks[this.trackId],
                                i.details && i.details.live && (c.logger.warn("Waiting fragment CC (" + H + ") does not match video track CC (" + j + ")"),
                                this.waitingFragment = null,
                                this.state = m.IDLE)) : (this.state = m.FRAG_LOADING,
                                this.onFragLoaded(this.waitingFragment),
                                this.waitingFragment = null)
                            } else
                                this.state = m.IDLE;
                            break;
                        case m.STOPPED:
                        case m.FRAG_LOADING:
                        case m.PARSING:
                        case m.PARSED:
                        case m.ENDED:
                        }
                    }
                    ,
                    i.prototype.onMediaAttached = function(e) {
                        var t = this.media = this.mediaBuffer = e.media;
                        this.onvseeking = this.onMediaSeeking.bind(this),
                        this.onvended = this.onMediaEnded.bind(this),
                        t.addEventListener("seeking", this.onvseeking),
                        t.addEventListener("ended", this.onvended);
                        var i = this.config;
                        this.tracks && i.autoStartLoad && this.startLoad(i.startPosition)
                    }
                    ,
                    i.prototype.onMediaDetaching = function() {
                        var e = this.media;
                        e && e.ended && (c.logger.log("MSE detaching and video ended, reset startPosition"),
                        this.startPosition = this.lastCurrentTime = 0),
                        e && (e.removeEventListener("seeking", this.onvseeking),
                        e.removeEventListener("ended", this.onvended),
                        this.onvseeking = this.onvseeked = this.onvended = null),
                        this.media = this.mediaBuffer = this.videoBuffer = null,
                        this.loadedmetadata = !1,
                        this.stopLoad()
                    }
                    ,
                    i.prototype.onMediaSeeking = function() {
                        this.state === m.ENDED && (this.state = m.IDLE),
                        this.media && (this.lastCurrentTime = this.media.currentTime),
                        this.tick()
                    }
                    ,
                    i.prototype.onMediaEnded = function() {
                        this.startPosition = this.lastCurrentTime = 0
                    }
                    ,
                    i.prototype.onAudioTracksUpdated = function(e) {
                        c.logger.log("audio tracks updated"),
                        this.tracks = e.audioTracks
                    }
                    ,
                    i.prototype.onAudioTrackSwitching = function(e) {
                        var t = !!e.url;
                        this.trackId = e.id,
                        this.fragCurrent = null,
                        this.state = m.PAUSED,
                        this.waitingFragment = null,
                        t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(),
                        this.demuxer = null),
                        t && (this.audioSwitch = !0,
                        this.state = m.IDLE),
                        this.tick()
                    }
                    ,
                    i.prototype.onAudioTrackLoaded = function(t) {
                        var i = t.details
                          , r = t.id
                          , s = this.tracks[r]
                          , o = i.totalduration
                          , a = 0;
                        if (c.logger.log("track " + r + " loaded [" + i.startSN + "," + i.endSN + "],duration:" + o),
                        i.live) {
                            var n = s.details;
                            n && i.fragments.length > 0 ? (l.mergeDetails(n, i),
                            a = i.fragments[0].start,
                            i.PTSKnown ? c.logger.log("live audio playlist sliding:" + a.toFixed(3)) : c.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (i.PTSKnown = !1,
                            c.logger.log("live audio playlist - first load, unknown sliding"))
                        } else
                            i.PTSKnown = !1;
                        if (s.details = i,
                        !this.startFragRequested) {
                            if (-1 === this.startPosition) {
                                var d = i.startTimeOffset;
                                e.isFinite(d) ? (c.logger.log("start time offset found in playlist, adjust startPosition to " + d),
                                this.startPosition = d) : this.startPosition = 0
                            }
                            this.nextLoadPosition = this.startPosition
                        }
                        this.state === m.WAITING_TRACK && (this.state = m.IDLE),
                        this.tick()
                    }
                    ,
                    i.prototype.onKeyLoaded = function() {
                        this.state === m.KEY_LOADING && (this.state = m.IDLE,
                        this.tick())
                    }
                    ,
                    i.prototype.onFragLoaded = function(e) {
                        var t = this.fragCurrent
                          , i = e.frag;
                        if (this.state === m.FRAG_LOADING && t && "audio" === i.type && i.level === t.level && i.sn === t.sn) {
                            var r = this.tracks[this.trackId]
                              , s = r.details
                              , o = s.totalduration
                              , l = t.level
                              , d = t.sn
                              , u = t.cc
                              , h = this.config.defaultAudioCodec || r.audioCodec || "mp4a.40.2"
                              , f = this.stats = e.stats;
                            if ("initSegment" === d)
                                this.state = m.IDLE,
                                f.tparsed = f.tbuffered = g.now(),
                                s.initSegment.data = e.payload,
                                this.hls.trigger(n["default"].FRAG_BUFFERED, {
                                    stats: f,
                                    frag: t,
                                    id: "audio"
                                }),
                                this.tick();
                            else {
                                this.state = m.PARSING,
                                this.appended = !1,
                                this.demuxer || (this.demuxer = new a["default"](this.hls,"audio"));
                                var p = this.initPTS[u]
                                  , v = s.initSegment ? s.initSegment.data : [];
                                if (s.initSegment || p !== undefined) {
                                    this.pendingBuffering = !0,
                                    c.logger.log("Demuxing " + d + " of [" + s.startSN + " ," + s.endSN + "],track " + l);
                                    this.demuxer.push(e.payload, v, h, null, t, o, !1, p)
                                } else
                                    c.logger.log("unknown video PTS for continuity counter " + u + ", waiting for video PTS before demuxing audio frag " + d + " of [" + s.startSN + " ," + s.endSN + "],track " + l),
                                    this.waitingFragment = e,
                                    this.state = m.WAITING_INIT_PTS
                            }
                        }
                        this.fragLoadError = 0
                    }
                    ,
                    i.prototype.onFragParsingInitSegment = function(e) {
                        var t = this.fragCurrent
                          , i = e.frag;
                        if (t && "audio" === e.id && i.sn === t.sn && i.level === t.level && this.state === m.PARSING) {
                            var r = e.tracks
                              , s = void 0;
                            if (r.video && delete r.video,
                            s = r.audio) {
                                s.levelCodec = s.codec,
                                s.id = e.id,
                                this.hls.trigger(n["default"].BUFFER_CODECS, r),
                                c.logger.log("audio track:audio,container:" + s.container + ",codecs[level/parsed]=[" + s.levelCodec + "/" + s.codec + "]");
                                var o = s.initSegment;
                                if (o) {
                                    var a = {
                                        type: "audio",
                                        data: o,
                                        parent: "audio",
                                        content: "initSegment"
                                    };
                                    this.audioSwitch ? this.pendingData = [a] : (this.appended = !0,
                                    this.pendingBuffering = !0,
                                    this.hls.trigger(n["default"].BUFFER_APPENDING, a))
                                }
                                this.tick()
                            }
                        }
                    }
                    ,
                    i.prototype.onFragParsingData = function(t) {
                        var i = this
                          , r = this.fragCurrent
                          , s = t.frag;
                        if (r && "audio" === t.id && "audio" === t.type && s.sn === r.sn && s.level === r.level && this.state === m.PARSING) {
                            var o = this.trackId
                              , a = this.tracks[o]
                              , d = this.hls;
                            e.isFinite(t.endPTS) || (t.endPTS = t.startPTS + r.duration,
                            t.endDTS = t.startDTS + r.duration),
                            r.addElementaryStream(v["default"].ElementaryStreamTypes.AUDIO),
                            c.logger.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb),
                            l.updateFragPTSDTS(a.details, r, t.startPTS, t.endPTS);
                            var h = this.audioSwitch
                              , f = this.media
                              , p = !1;
                            if (h && f)
                                if (f.readyState) {
                                    var g = f.currentTime;
                                    c.logger.log("switching audio track : currentTime:" + g),
                                    g >= t.startPTS && (c.logger.log("switching audio track : flushing all audio"),
                                    this.state = m.BUFFER_FLUSHING,
                                    d.trigger(n["default"].BUFFER_FLUSHING, {
                                        startOffset: 0,
                                        endOffset: e.POSITIVE_INFINITY,
                                        type: "audio"
                                    }),
                                    p = !0,
                                    this.audioSwitch = !1,
                                    d.trigger(n["default"].AUDIO_TRACK_SWITCHED, {
                                        id: o
                                    }))
                                } else
                                    this.audioSwitch = !1,
                                    d.trigger(n["default"].AUDIO_TRACK_SWITCHED, {
                                        id: o
                                    });
                            var y = this.pendingData;
                            if (!y)
                                return c.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),
                                void d.trigger(n["default"].ERROR, {
                                    type: u.ErrorTypes.MEDIA_ERROR,
                                    details: null,
                                    fatal: !0
                                });
                            this.audioSwitch || ([t.data1, t.data2].forEach(function(e) {
                                e && e.length && y.push({
                                    type: t.type,
                                    data: e,
                                    parent: "audio",
                                    content: "data"
                                })
                            }),
                            !p && y.length && (y.forEach(function(e) {
                                i.state === m.PARSING && (i.pendingBuffering = !0,
                                i.hls.trigger(n["default"].BUFFER_APPENDING, e))
                            }),
                            this.pendingData = [],
                            this.appended = !0)),
                            this.tick()
                        }
                    }
                    ,
                    i.prototype.onFragParsed = function(e) {
                        var t = this.fragCurrent
                          , i = e.frag;
                        t && "audio" === e.id && i.sn === t.sn && i.level === t.level && this.state === m.PARSING && (this.stats.tparsed = g.now(),
                        this.state = m.PARSED,
                        this._checkAppendedParsed())
                    }
                    ,
                    i.prototype.onBufferReset = function() {
                        this.mediaBuffer = this.videoBuffer = null,
                        this.loadedmetadata = !1
                    }
                    ,
                    i.prototype.onBufferCreated = function(e) {
                        var t = e.tracks.audio;
                        t && (this.mediaBuffer = t.buffer,
                        this.loadedmetadata = !0),
                        e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                    }
                    ,
                    i.prototype.onBufferAppended = function(e) {
                        if ("audio" === e.parent) {
                            var t = this.state;
                            t !== m.PARSING && t !== m.PARSED || (this.pendingBuffering = e.pending > 0,
                            this._checkAppendedParsed())
                        }
                    }
                    ,
                    i.prototype._checkAppendedParsed = function() {
                        if (!(this.state !== m.PARSED || this.appended && this.pendingBuffering)) {
                            var e = this.fragCurrent
                              , t = this.stats
                              , i = this.hls;
                            if (e) {
                                this.fragPrevious = e,
                                t.tbuffered = g.now(),
                                i.trigger(n["default"].FRAG_BUFFERED, {
                                    stats: t,
                                    frag: e,
                                    id: "audio"
                                });
                                var r = this.mediaBuffer ? this.mediaBuffer : this.media;
                                c.logger.log("audio buffered : " + d["default"].toString(r.buffered)),
                                this.audioSwitch && this.appended && (this.audioSwitch = !1,
                                i.trigger(n["default"].AUDIO_TRACK_SWITCHED, {
                                    id: this.trackId
                                })),
                                this.state = m.IDLE
                            }
                            this.tick()
                        }
                    }
                    ,
                    i.prototype.onError = function(t) {
                        var i = t.frag;
                        if (!i || "audio" === i.type)
                            switch (t.details) {
                            case u.ErrorDetails.FRAG_LOAD_ERROR:
                            case u.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                var r = t.frag;
                                if (r && "audio" !== r.type)
                                    break;
                                if (!t.fatal) {
                                    var s = this.fragLoadError;
                                    s ? s++ : s = 1;
                                    var a = this.config;
                                    if (s <= a.fragLoadingMaxRetry) {
                                        this.fragLoadError = s;
                                        var l = Math.min(Math.pow(2, s - 1) * a.fragLoadingRetryDelay, a.fragLoadingMaxRetryTimeout);
                                        c.logger.warn("AudioStreamController: frag loading failed, retry in " + l + " ms"),
                                        this.retryDate = g.now() + l,
                                        this.state = m.FRAG_LOADING_WAITING_RETRY
                                    } else
                                        c.logger.error("AudioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."),
                                        t.fatal = !0,
                                        this.state = m.ERROR
                                }
                                break;
                            case u.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                            case u.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                            case u.ErrorDetails.KEY_LOAD_ERROR:
                            case u.ErrorDetails.KEY_LOAD_TIMEOUT:
                                this.state !== m.ERROR && (this.state = t.fatal ? m.ERROR : m.IDLE,
                                c.logger.warn("AudioStreamController: " + t.details + " while loading frag, now switching to " + this.state + " state ..."));
                                break;
                            case u.ErrorDetails.BUFFER_FULL_ERROR:
                                if ("audio" === t.parent && (this.state === m.PARSING || this.state === m.PARSED)) {
                                    var d = this.mediaBuffer
                                      , h = this.media.currentTime;
                                    if (d && o.BufferHelper.isBuffered(d, h) && o.BufferHelper.isBuffered(d, h + .5)) {
                                        var a = this.config;
                                        a.maxMaxBufferLength >= a.maxBufferLength && (a.maxMaxBufferLength /= 2,
                                        c.logger.warn("AudioStreamController: reduce max buffer length to " + a.maxMaxBufferLength + "s")),
                                        this.state = m.IDLE
                                    } else
                                        c.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),
                                        this.fragCurrent = null,
                                        this.state = m.BUFFER_FLUSHING,
                                        this.hls.trigger(n["default"].BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: e.POSITIVE_INFINITY,
                                            type: "audio"
                                        })
                                }
                            }
                    }
                    ,
                    i.prototype.onBufferFlushed = function() {
                        var e = this
                          , t = this.pendingData;
                        t && t.length ? (c.logger.log("AudioStreamController: appending pending audio data after buffer flushed"),
                        t.forEach(function(t) {
                            e.hls.trigger(n["default"].BUFFER_APPENDING, t)
                        }),
                        this.appended = !0,
                        this.pendingData = [],
                        this.state = m.PARSED) : (this.state = m.IDLE,
                        this.fragPrevious = null,
                        this.tick())
                    }
                    ,
                    i
                }(f["default"]);
                t["default"] = y
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/audio-track-controller.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/events.js")
              , o = i("./src/task-loop.js")
              , a = i("./src/utils/logger.js")
              , n = i("./src/errors.js")
              , l = function(e) {
                function t(t) {
                    var i = e.call(this, t, s["default"].MANIFEST_LOADING, s["default"].MANIFEST_PARSED, s["default"].AUDIO_TRACK_LOADED, s["default"].AUDIO_TRACK_SWITCHED, s["default"].LEVEL_LOADED, s["default"].ERROR) || this;
                    return i._trackId = -1,
                    i._selectDefaultTrack = !0,
                    i.tracks = [],
                    i.trackIdBlacklist = Object.create(null),
                    i.audioGroupId = null,
                    i
                }
                return r(t, e),
                t.prototype.onManifestLoading = function() {
                    this.tracks = [],
                    this._trackId = -1,
                    this._selectDefaultTrack = !0
                }
                ,
                t.prototype.onManifestParsed = function(e) {
                    var t = this.tracks = e.audioTracks || [];
                    this.hls.trigger(s["default"].AUDIO_TRACKS_UPDATED, {
                        audioTracks: t
                    })
                }
                ,
                t.prototype.onAudioTrackLoaded = function(e) {
                    if (e.id >= this.tracks.length)
                        return void a.logger.warn("Invalid audio track id:", e.id);
                    if (a.logger.log("audioTrack " + e.id + " loaded"),
                    this.tracks[e.id].details = e.details,
                    e.details.live && !this.hasInterval()) {
                        var t = 1e3 * e.details.targetduration;
                        this.setInterval(t)
                    }
                    !e.details.live && this.hasInterval() && this.clearInterval()
                }
                ,
                t.prototype.onAudioTrackSwitched = function(e) {
                    var t = this.tracks[e.id].groupId;
                    t && this.audioGroupId !== t && (this.audioGroupId = t)
                }
                ,
                t.prototype.onLevelLoaded = function(e) {
                    var t = this.hls.levels[e.level];
                    if (t.audioGroupIds) {
                        var i = t.audioGroupIds[t.urlId];
                        this.audioGroupId !== i && (this.audioGroupId = i,
                        this._selectInitialAudioTrack())
                    }
                }
                ,
                t.prototype.onError = function(e) {
                    e.type === n.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(),
                    e.details === n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (a.logger.warn("Network failure on audio-track id:", e.context.id),
                    this._handleLoadError()))
                }
                ,
                Object.defineProperty(t.prototype, "audioTracks", {
                    get: function() {
                        return this.tracks
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "audioTrack", {
                    get: function() {
                        return this._trackId
                    },
                    set: function(e) {
                        this._setAudioTrack(e),
                        this._selectDefaultTrack = !1
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype._setAudioTrack = function(e) {
                    if (this._trackId === e && this.tracks[this._trackId].details)
                        return void a.logger.debug("Same id as current audio-track passed, and track details available -> no-op");
                    if (e < 0 || e >= this.tracks.length)
                        return void a.logger.warn("Invalid id passed to audio-track controller");
                    var t = this.tracks[e];
                    a.logger.log("Now switching to audio-track index " + e),
                    this.clearInterval(),
                    this._trackId = e;
                    var i = t.url
                      , r = t.type
                      , o = t.id;
                    this.hls.trigger(s["default"].AUDIO_TRACK_SWITCHING, {
                        id: o,
                        type: r,
                        url: i
                    }),
                    this._loadTrackDetailsIfNeeded(t)
                }
                ,
                t.prototype.doTick = function() {
                    this._updateTrack(this._trackId)
                }
                ,
                t.prototype._selectInitialAudioTrack = function() {
                    var e = this
                      , t = this.tracks;
                    if (t.length) {
                        var i = this.tracks[this._trackId]
                          , r = null;
                        if (i && (r = i.name),
                        this._selectDefaultTrack) {
                            var o = t.filter(function(e) {
                                return e["default"]
                            });
                            o.length ? t = o : a.logger.warn("No default audio tracks defined")
                        }
                        var l = !1
                          , d = function() {
                            t.forEach(function(t) {
                                l || e.audioGroupId && t.groupId !== e.audioGroupId || r && r !== t.name || (e._setAudioTrack(t.id),
                                l = !0)
                            })
                        };
                        d(),
                        l || (r = null,
                        d()),
                        l || (a.logger.error("No track found for running audio group-ID: " + this.audioGroupId),
                        this.hls.trigger(s["default"].ERROR, {
                            type: n.ErrorTypes.MEDIA_ERROR,
                            details: n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                            fatal: !0
                        }))
                    }
                }
                ,
                t.prototype._needsTrackLoading = function(e) {
                    var t = e.details;
                    return !t || (!!t.live || void 0)
                }
                ,
                t.prototype._loadTrackDetailsIfNeeded = function(e) {
                    if (this._needsTrackLoading(e)) {
                        var t = e.url
                          , i = e.id;
                        a.logger.log("loading audio-track playlist for id: " + i),
                        this.hls.trigger(s["default"].AUDIO_TRACK_LOADING, {
                            url: t,
                            id: i
                        })
                    }
                }
                ,
                t.prototype._updateTrack = function(e) {
                    if (!(e < 0 || e >= this.tracks.length)) {
                        this.clearInterval(),
                        this._trackId = e,
                        a.logger.log("trying to update audio-track " + e);
                        var t = this.tracks[e];
                        this._loadTrackDetailsIfNeeded(t)
                    }
                }
                ,
                t.prototype._handleLoadError = function() {
                    this.trackIdBlacklist[this._trackId] = !0;
                    var e = this._trackId
                      , t = this.tracks[e]
                      , i = t.name
                      , r = t.language
                      , s = t.groupId;
                    a.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + s + ', name/language: "' + i + '" / "' + r + '"');
                    for (var o = e, n = 0; n < this.tracks.length; n++)
                        if (!this.trackIdBlacklist[n]) {
                            var l = this.tracks[n];
                            if (l.name === i) {
                                o = n;
                                break
                            }
                        }
                    if (o === e)
                        return void a.logger.warn('No fallback audio-track found for name/language: "' + i + '" / "' + r + '"');
                    a.logger.log("Attempting audio-track fallback id:", o, "group-id:", this.tracks[o].groupId),
                    this._setAudioTrack(o)
                }
                ,
                t
            }(o["default"]);
            t["default"] = l
        },
        "./src/controller/buffer-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                        new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , a = i("./src/utils/logger.js")
                  , n = i("./src/errors.js")
                  , l = i("./src/utils/mediasource-helper.js")
                  , d = l.getMediaSource()
                  , u = function(t) {
                    function i(e) {
                        var i = t.call(this, e, s["default"].MEDIA_ATTACHING, s["default"].MEDIA_DETACHING, s["default"].MANIFEST_PARSED, s["default"].BUFFER_RESET, s["default"].BUFFER_APPENDING, s["default"].BUFFER_CODECS, s["default"].BUFFER_EOS, s["default"].BUFFER_FLUSHING, s["default"].LEVEL_PTS_UPDATED, s["default"].LEVEL_UPDATED) || this;
                        return i._msDuration = null,
                        i._levelDuration = null,
                        i._live = null,
                        i._objectUrl = null,
                        i.onsbue = i.onSBUpdateEnd.bind(i),
                        i.onsbe = i.onSBUpdateError.bind(i),
                        i.pendingTracks = {},
                        i.tracks = {},
                        i
                    }
                    return r(i, t),
                    i.prototype.destroy = function() {
                        o["default"].prototype.destroy.call(this)
                    }
                    ,
                    i.prototype.onLevelPtsUpdated = function(e) {
                        var t = e.type
                          , i = this.tracks.audio;
                        if ("audio" === t && i && "audio/mpeg" === i.container) {
                            var r = this.sourceBuffer.audio;
                            if (Math.abs(r.timestampOffset - e.start) > .1) {
                                var s = r.updating;
                                try {
                                    r.abort()
                                } catch (o) {
                                    s = !0,
                                    a.logger.warn("can not abort audio buffer: " + o)
                                }
                                s ? this.audioTimestampOffset = e.start : (a.logger.warn("change mpeg audio timestamp offset from " + r.timestampOffset + " to " + e.start),
                                r.timestampOffset = e.start)
                            }
                        }
                    }
                    ,
                    i.prototype.onManifestParsed = function(e) {
                        var t = e.audio
                          , i = e.video || e.levels.length && e.altAudio
                          , r = 0;
                        e.altAudio && (t || i) && (r = (t ? 1 : 0) + (i ? 1 : 0),
                        a.logger.log(r + " sourceBuffer(s) expected")),
                        this.sourceBufferNb = r
                    }
                    ,
                    i.prototype.onMediaAttaching = function(e) {
                        var t = this.media = e.media;
                        if (t) {
                            var i = this.mediaSource = new d;
                            this.onmso = this.onMediaSourceOpen.bind(this),
                            this.onmse = this.onMediaSourceEnded.bind(this),
                            this.onmsc = this.onMediaSourceClose.bind(this),
                            i.addEventListener("sourceopen", this.onmso),
                            i.addEventListener("sourceended", this.onmse),
                            i.addEventListener("sourceclose", this.onmsc),
                            t.src = window.URL.createObjectURL(i),
                            this._objectUrl = t.src
                        }
                    }
                    ,
                    i.prototype.onMediaDetaching = function() {
                        a.logger.log("media source detaching");
                        var e = this.mediaSource;
                        if (e) {
                            if ("open" === e.readyState)
                                try {
                                    e.endOfStream()
                                } catch (t) {
                                    a.logger.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
                                }
                            e.removeEventListener("sourceopen", this.onmso),
                            e.removeEventListener("sourceended", this.onmse),
                            e.removeEventListener("sourceclose", this.onmsc),
                            this.media && (window.URL.revokeObjectURL(this._objectUrl),
                            this.media.src === this._objectUrl ? (this.media.removeAttribute("src"),
                            this.media.load()) : a.logger.warn("media.src was changed by a third party - skip cleanup")),
                            this.mediaSource = null,
                            this.media = null,
                            this._objectUrl = null,
                            this.pendingTracks = {},
                            this.tracks = {},
                            this.sourceBuffer = {},
                            this.flushRange = [],
                            this.segments = [],
                            this.appended = 0
                        }
                        this.onmso = this.onmse = this.onmsc = null,
                        this.hls.trigger(s["default"].MEDIA_DETACHED)
                    }
                    ,
                    i.prototype.onMediaSourceOpen = function() {
                        a.logger.log("media source opened"),
                        this.hls.trigger(s["default"].MEDIA_ATTACHED, {
                            media: this.media
                        });
                        var e = this.mediaSource;
                        e && e.removeEventListener("sourceopen", this.onmso),
                        this.checkPendingTracks()
                    }
                    ,
                    i.prototype.checkPendingTracks = function() {
                        var e = this.pendingTracks
                          , t = Object.keys(e).length;
                        t && (this.sourceBufferNb <= t || 0 === this.sourceBufferNb) && (this.createSourceBuffers(e),
                        this.pendingTracks = {},
                        this.doAppending())
                    }
                    ,
                    i.prototype.onMediaSourceClose = function() {
                        a.logger.log("media source closed")
                    }
                    ,
                    i.prototype.onMediaSourceEnded = function() {
                        a.logger.log("media source ended")
                    }
                    ,
                    i.prototype.onSBUpdateEnd = function() {
                        if (this.audioTimestampOffset) {
                            var e = this.sourceBuffer.audio;
                            a.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset),
                            e.timestampOffset = this.audioTimestampOffset,
                            delete this.audioTimestampOffset
                        }
                        this._needsFlush && this.doFlush(),
                        this._needsEos && this.checkEos(),
                        this.appending = !1;
                        var t = this.parent
                          , i = this.segments.reduce(function(e, i) {
                            return i.parent === t ? e + 1 : e
                        }, 0)
                          , r = {}
                          , o = this.sourceBuffer;
                        for (var n in o)
                            r[n] = o[n].buffered;
                        this.hls.trigger(s["default"].BUFFER_APPENDED, {
                            parent: t,
                            pending: i,
                            timeRanges: r
                        }),
                        this._needsFlush || this.doAppending(),
                        this.updateMediaElementDuration()
                    }
                    ,
                    i.prototype.onSBUpdateError = function(e) {
                        a.logger.error("sourceBuffer error:", e),
                        this.hls.trigger(s["default"].ERROR, {
                            type: n.ErrorTypes.MEDIA_ERROR,
                            details: n.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1
                        })
                    }
                    ,
                    i.prototype.onBufferReset = function() {
                        var e = this.sourceBuffer;
                        for (var t in e) {
                            var i = e[t];
                            try {
                                this.mediaSource.removeSourceBuffer(i),
                                i.removeEventListener("updateend", this.onsbue),
                                i.removeEventListener("error", this.onsbe)
                            } catch (r) {}
                        }
                        this.sourceBuffer = {},
                        this.flushRange = [],
                        this.segments = [],
                        this.appended = 0
                    }
                    ,
                    i.prototype.onBufferCodecs = function(e) {
                        if (0 === Object.keys(this.sourceBuffer).length) {
                            for (var t in e)
                                this.pendingTracks[t] = e[t];
                            var i = this.mediaSource;
                            i && "open" === i.readyState && this.checkPendingTracks()
                        }
                    }
                    ,
                    i.prototype.createSourceBuffers = function(e) {
                        var t = this.sourceBuffer
                          , i = this.mediaSource;
                        for (var r in e)
                            if (!t[r]) {
                                var o = e[r]
                                  , l = o.levelCodec || o.codec
                                  , d = o.container + ";codecs=" + l;
                                a.logger.log("creating sourceBuffer(" + d + ")");
                                try {
                                    var u = t[r] = i.addSourceBuffer(d);
                                    u.addEventListener("updateend", this.onsbue),
                                    u.addEventListener("error", this.onsbe),
                                    this.tracks[r] = {
                                        codec: l,
                                        container: o.container
                                    },
                                    o.buffer = u
                                } catch (c) {
                                    a.logger.error("error while trying to add sourceBuffer:" + c.message),
                                    this.hls.trigger(s["default"].ERROR, {
                                        type: n.ErrorTypes.MEDIA_ERROR,
                                        details: n.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                        fatal: !1,
                                        err: c,
                                        mimeType: d
                                    })
                                }
                            }
                        this.hls.trigger(s["default"].BUFFER_CREATED, {
                            tracks: e
                        })
                    }
                    ,
                    i.prototype.onBufferAppending = function(e) {
                        this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e],
                        this.doAppending())
                    }
                    ,
                    i.prototype.onBufferAppendFail = function(e) {
                        a.logger.error("sourceBuffer error:", e.event),
                        this.hls.trigger(s["default"].ERROR, {
                            type: n.ErrorTypes.MEDIA_ERROR,
                            details: n.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1
                        })
                    }
                    ,
                    i.prototype.onBufferEos = function(e) {
                        var t = this.sourceBuffer
                          , i = e.type;
                        for (var r in t)
                            i && r !== i || t[r].ended || (t[r].ended = !0,
                            a.logger.log(r + " sourceBuffer now EOS"));
                        this.checkEos()
                    }
                    ,
                    i.prototype.checkEos = function() {
                        var e = this.sourceBuffer
                          , t = this.mediaSource;
                        if (!t || "open" !== t.readyState)
                            return void (this._needsEos = !1);
                        for (var i in e) {
                            var r = e[i];
                            if (!r.ended)
                                return;
                            if (r.updating)
                                return void (this._needsEos = !0)
                        }
                        a.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
                        try {
                            t.endOfStream()
                        } catch (s) {
                            a.logger.warn("exception while calling mediaSource.endOfStream()")
                        }
                        this._needsEos = !1
                    }
                    ,
                    i.prototype.onBufferFlushing = function(e) {
                        this.flushRange.push({
                            start: e.startOffset,
                            end: e.endOffset,
                            type: e.type
                        }),
                        this.flushBufferCounter = 0,
                        this.doFlush()
                    }
                    ,
                    i.prototype.onLevelUpdated = function(e) {
                        var t = e.details;
                        t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start,
                        this._live = t.live,
                        this.updateMediaElementDuration())
                    }
                    ,
                    i.prototype.updateMediaElementDuration = function() {
                        var t, i = this.hls.config;
                        if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                            for (var r in this.sourceBuffer)
                                if (!0 === this.sourceBuffer[r].updating)
                                    return;
                            t = this.media.duration,
                            null === this._msDuration && (this._msDuration = this.mediaSource.duration),
                            !0 === this._live && !0 === i.liveDurationInfinity ? (a.logger.log("Media Source duration is set to Infinity"),
                            this._msDuration = this.mediaSource.duration = Infinity) : (this._levelDuration > this._msDuration && this._levelDuration > t || !e.isFinite(t)) && (a.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)),
                            this._msDuration = this.mediaSource.duration = this._levelDuration)
                        }
                    }
                    ,
                    i.prototype.doFlush = function() {
                        for (; this.flushRange.length; ) {
                            var e = this.flushRange[0];
                            if (!this.flushBuffer(e.start, e.end, e.type))
                                return void (this._needsFlush = !0);
                            this.flushRange.shift(),
                            this.flushBufferCounter = 0
                        }
                        if (0 === this.flushRange.length) {
                            this._needsFlush = !1;
                            var t = 0
                              , i = this.sourceBuffer;
                            try {
                                for (var r in i)
                                    t += i[r].buffered.length
                            } catch (o) {
                                a.logger.error("error while accessing sourceBuffer.buffered")
                            }
                            this.appended = t,
                            this.hls.trigger(s["default"].BUFFER_FLUSHED)
                        }
                    }
                    ,
                    i.prototype.doAppending = function() {
                        var e = this.hls
                          , t = this.sourceBuffer
                          , i = this.segments;
                        if (Object.keys(t).length) {
                            if (this.media.error)
                                return this.segments = [],
                                void a.logger.error("trying to append although a media error occured, flush segment and abort");
                            if (this.appending)
                                return;
                            if (i && i.length) {
                                var r = i.shift();
                                try {
                                    var o = r.type
                                      , l = t[o];
                                    l ? l.updating ? i.unshift(r) : (l.ended = !1,
                                    this.parent = r.parent,
                                    l.appendBuffer(r.data),
                                    this.appendError = 0,
                                    this.appended++,
                                    this.appending = !0) : this.onSBUpdateEnd()
                                } catch (u) {
                                    a.logger.error("error while trying to append buffer:" + u.message),
                                    i.unshift(r);
                                    var d = {
                                        type: n.ErrorTypes.MEDIA_ERROR,
                                        parent: r.parent
                                    };
                                    22 !== u.code ? (this.appendError ? this.appendError++ : this.appendError = 1,
                                    d.details = n.ErrorDetails.BUFFER_APPEND_ERROR,
                                    this.appendError > e.config.appendErrorMaxRetry ? (a.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"),
                                    i = [],
                                    d.fatal = !0,
                                    e.trigger(s["default"].ERROR, d)) : (d.fatal = !1,
                                    e.trigger(s["default"].ERROR, d))) : (this.segments = [],
                                    d.details = n.ErrorDetails.BUFFER_FULL_ERROR,
                                    d.fatal = !1,
                                    e.trigger(s["default"].ERROR, d))
                                }
                            }
                        }
                    }
                    ,
                    i.prototype.flushBuffer = function(t, i, r) {
                        var s, o, n, l, d, u, c = this.sourceBuffer;
                        if (Object.keys(c).length) {
                            if (a.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + t + "/" + i),
                            this.flushBufferCounter < this.appended) {
                                for (var h in c)
                                    if (!r || h === r) {
                                        if (s = c[h],
                                        s.ended = !1,
                                        s.updating)
                                            return a.logger.warn("cannot flush, sb updating in progress"),
                                            !1;
                                        try {
                                            for (o = 0; o < s.buffered.length; o++)
                                                if (n = s.buffered.start(o),
                                                l = s.buffered.end(o),
                                                -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && i === e.POSITIVE_INFINITY ? (d = t,
                                                u = i) : (d = Math.max(n, t),
                                                u = Math.min(l, i)),
                                                Math.min(u, l) - d > .5)
                                                    return this.flushBufferCounter++,
                                                    a.logger.log("flush " + h + " [" + d + "," + u + "], of [" + n + "," + l + "], pos:" + this.media.currentTime),
                                                    s.remove(d, u),
                                                    !1
                                        } catch (f) {
                                            a.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
                                        }
                                    }
                            } else
                                a.logger.warn("abort flushing too many retries");
                            a.logger.log("buffer flushed")
                        }
                        return !0
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = u
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/cap-level-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                        new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , a = function(t) {
                    function i(i) {
                        var r = t.call(this, i, s["default"].FPS_DROP_LEVEL_CAPPING, s["default"].MEDIA_ATTACHING, s["default"].MANIFEST_PARSED, s["default"].BUFFER_CODECS, s["default"].MEDIA_DETACHING) || this;
                        return r.autoLevelCapping = e.POSITIVE_INFINITY,
                        r.firstLevel = null,
                        r.levels = [],
                        r.media = null,
                        r.restrictedLevels = [],
                        r.timer = null,
                        r
                    }
                    return r(i, t),
                    i.prototype.destroy = function() {
                        this.hls.config.capLevelToPlayerSize && (this.media = null,
                        this._stopCapping())
                    }
                    ,
                    i.prototype.onFpsDropLevelCapping = function(e) {
                        i.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
                    }
                    ,
                    i.prototype.onMediaAttaching = function(e) {
                        this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
                    }
                    ,
                    i.prototype.onManifestParsed = function(e) {
                        var t = this.hls;
                        this.restrictedLevels = [],
                        this.levels = e.levels,
                        this.firstLevel = e.firstLevel,
                        t.config.capLevelToPlayerSize && (e.video || e.levels.length && e.altAudio) && this._startCapping()
                    }
                    ,
                    i.prototype.onBufferCodecs = function(e) {
                        this.hls.config.capLevelToPlayerSize && e.video && this._startCapping()
                    }
                    ,
                    i.prototype.onLevelsUpdated = function(e) {
                        this.levels = e.levels
                    }
                    ,
                    i.prototype.onMediaDetaching = function() {
                        this._stopCapping()
                    }
                    ,
                    i.prototype.detectPlayerSize = function() {
                        if (this.media) {
                            var e = this.levels ? this.levels.length : 0;
                            if (e) {
                                var t = this.hls;
                                t.autoLevelCapping = this.getMaxLevel(e - 1),
                                t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(),
                                this.autoLevelCapping = t.autoLevelCapping
                            }
                        }
                    }
                    ,
                    i.prototype.getMaxLevel = function(e) {
                        var t = this;
                        if (!this.levels)
                            return -1;
                        var r = this.levels.filter(function(r, s) {
                            return i.isLevelAllowed(s, t.restrictedLevels) && s <= e
                        });
                        return i.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
                    }
                    ,
                    i.prototype._startCapping = function() {
                        this.timer || (this.autoLevelCapping = e.POSITIVE_INFINITY,
                        this.hls.firstLevel = this.getMaxLevel(this.firstLevel),
                        clearInterval(this.timer),
                        this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3),
                        this.detectPlayerSize())
                    }
                    ,
                    i.prototype._stopCapping = function() {
                        this.restrictedLevels = [],
                        this.firstLevel = null,
                        this.autoLevelCapping = e.POSITIVE_INFINITY,
                        this.timer && (this.timer = clearInterval(this.timer),
                        this.timer = null)
                    }
                    ,
                    Object.defineProperty(i.prototype, "mediaWidth", {
                        get: function() {
                            var e, t = this.media;
                            return t && (e = t.width || t.clientWidth || t.offsetWidth,
                            e *= i.contentScaleFactor),
                            e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(i.prototype, "mediaHeight", {
                        get: function() {
                            var e, t = this.media;
                            return t && (e = t.height || t.clientHeight || t.offsetHeight,
                            e *= i.contentScaleFactor),
                            e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(i, "contentScaleFactor", {
                        get: function() {
                            var e = 1;
                            try {
                                e = window.devicePixelRatio
                            } catch (t) {}
                            return e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    i.isLevelAllowed = function(e, t) {
                        return void 0 === t && (t = []),
                        -1 === t.indexOf(e)
                    }
                    ,
                    i.getMaxLevelByMediaSize = function(e, t, i) {
                        if (!e || e && !e.length)
                            return -1;
                        for (var r = e.length - 1, s = 0; s < e.length; s += 1) {
                            var o = e[s];
                            if ((o.width >= t || o.height >= i) && function(e, t) {
                                return !t || (e.width !== t.width || e.height !== t.height)
                            }(o, e[s + 1])) {
                                r = s;
                                break
                            }
                        }
                        return r
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = a
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/eme-controller.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/event-handler.js")
              , o = i("./src/events.js")
              , a = i("./src/errors.js")
              , n = i("./src/utils/logger.js")
              , l = window.XMLHttpRequest
              , d = {
                WIDEVINE: "com.widevine.alpha",
                PLAYREADY: "com.microsoft.playready"
            }
              , u = function(e, t, i) {
                var r = {
                    videoCapabilities: []
                };
                return t.forEach(function(e) {
                    r.videoCapabilities.push({
                        contentType: 'video/mp4; codecs="' + e + '"'
                    })
                }),
                [r]
            }
              , c = function(e, t, i) {
                switch (e) {
                case d.WIDEVINE:
                    return u(0, i);
                default:
                    throw Error("Unknown key-system: " + e)
                }
            }
              , h = function(e) {
                function t(t) {
                    var i = e.call(this, t, o["default"].MEDIA_ATTACHED, o["default"].MANIFEST_PARSED) || this;
                    return i._widevineLicenseUrl = t.config.widevineLicenseUrl,
                    i._licenseXhrSetup = t.config.licenseXhrSetup,
                    i._emeEnabled = t.config.emeEnabled,
                    i._requestMediaKeySystemAccess = t.config.requestMediaKeySystemAccessFunc,
                    i._mediaKeysList = [],
                    i._media = null,
                    i._hasSetMediaKeys = !1,
                    i._isMediaEncrypted = !1,
                    i._requestLicenseFailureCount = 0,
                    i
                }
                return r(t, e),
                t.prototype.getLicenseServerUrl = function(e) {
                    var t;
                    switch (e) {
                    case d.WIDEVINE:
                        t = this._widevineLicenseUrl;
                        break;
                    default:
                        t = null
                    }
                    return t || (n.logger.error('No license server URL configured for key-system "' + e + '"'),
                    this.hls.trigger(o["default"].ERROR, {
                        type: a.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: a.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                        fatal: !0
                    })),
                    t
                }
                ,
                t.prototype._attemptKeySystemAccess = function(e, t, i) {
                    var r = this
                      , s = c(e, 0, i);
                    if (!s)
                        return void n.logger.warn("Can not create config for key-system (maybe because platform is not supported):", e);
                    n.logger.log("Requesting encrypted media key-system access"),
                    this.requestMediaKeySystemAccess(e, s).then(function(t) {
                        r._onMediaKeySystemAccessObtained(e, t)
                    })["catch"](function(t) {
                        n.logger.error('Failed to obtain key-system "' + e + '" access:', t)
                    })
                }
                ,
                Object.defineProperty(t.prototype, "requestMediaKeySystemAccess", {
                    get: function() {
                        if (!this._requestMediaKeySystemAccess)
                            throw new Error("No requestMediaKeySystemAccess function configured");
                        return this._requestMediaKeySystemAccess
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype._onMediaKeySystemAccessObtained = function(e, t) {
                    var i = this;
                    n.logger.log('Access for key-system "' + e + '" obtained');
                    var r = {
                        mediaKeys: null,
                        mediaKeysSession: null,
                        mediaKeysSessionInitialized: !1,
                        mediaKeySystemAccess: t,
                        mediaKeySystemDomain: e
                    };
                    this._mediaKeysList.push(r),
                    t.createMediaKeys().then(function(t) {
                        r.mediaKeys = t,
                        n.logger.log('Media-keys created for key-system "' + e + '"'),
                        i._onMediaKeysCreated()
                    })["catch"](function(e) {
                        n.logger.error("Failed to create media-keys:", e)
                    })
                }
                ,
                t.prototype._onMediaKeysCreated = function() {
                    var e = this;
                    this._mediaKeysList.forEach(function(t) {
                        t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(),
                        e._onNewMediaKeySession(t.mediaKeysSession))
                    })
                }
                ,
                t.prototype._onNewMediaKeySession = function(e) {
                    var t = this;
                    n.logger.log("New key-system session " + e.sessionId),
                    e.addEventListener("message", function(i) {
                        t._onKeySessionMessage(e, i.message)
                    }, !1)
                }
                ,
                t.prototype._onKeySessionMessage = function(e, t) {
                    n.logger.log("Got EME message event, creating license request"),
                    this._requestLicense(t, function(t) {
                        n.logger.log("Received license data, updating key-session"),
                        e.update(t)
                    })
                }
                ,
                t.prototype._onMediaEncrypted = function(e, t) {
                    n.logger.log('Media is encrypted using "' + e + '" init data type'),
                    this._isMediaEncrypted = !0,
                    this._mediaEncryptionInitDataType = e,
                    this._mediaEncryptionInitData = t,
                    this._attemptSetMediaKeys(),
                    this._generateRequestWithPreferredKeySession()
                }
                ,
                t.prototype._attemptSetMediaKeys = function() {
                    if (!this._hasSetMediaKeys) {
                        var e = this._mediaKeysList[0];
                        if (!e || !e.mediaKeys)
                            return n.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
                            void this.hls.trigger(o["default"].ERROR, {
                                type: a.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: a.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                fatal: !0
                            });
                        n.logger.log("Setting keys for encrypted media"),
                        this._media.setMediaKeys(e.mediaKeys),
                        this._hasSetMediaKeys = !0
                    }
                }
                ,
                t.prototype._generateRequestWithPreferredKeySession = function() {
                    var e = this
                      , t = this._mediaKeysList[0];
                    if (!t)
                        return n.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
                        void this.hls.trigger(o["default"].ERROR, {
                            type: a.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: a.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                            fatal: !0
                        });
                    if (t.mediaKeysSessionInitialized)
                        return void n.logger.warn("Key-Session already initialized but requested again");
                    var i = t.mediaKeysSession;
                    i || (n.logger.error("Fatal: Media is encrypted but no key-session existing"),
                    this.hls.trigger(o["default"].ERROR, {
                        type: a.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: a.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                        fatal: !0
                    }));
                    var r = this._mediaEncryptionInitDataType
                      , s = this._mediaEncryptionInitData;
                    n.logger.log('Generating key-session request for "' + r + '" init data type'),
                    t.mediaKeysSessionInitialized = !0,
                    i.generateRequest(r, s).then(function() {
                        n.logger.debug("Key-session generation succeeded")
                    })["catch"](function(t) {
                        n.logger.error("Error generating key-session request:", t),
                        e.hls.trigger(o["default"].ERROR, {
                            type: a.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: a.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                            fatal: !1
                        })
                    })
                }
                ,
                t.prototype._createLicenseXhr = function(e, t, i) {
                    var r = new l
                      , s = this._licenseXhrSetup;
                    try {
                        if (s)
                            try {
                                s(r, e)
                            } catch (d) {
                                r.open("POST", e, !0),
                                s(r, e)
                            }
                        r.readyState || r.open("POST", e, !0)
                    } catch (d) {
                        return n.logger.error("Error setting up key-system license XHR", d),
                        void this.hls.trigger(o["default"].ERROR, {
                            type: a.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: a.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0
                        })
                    }
                    return r.responseType = "arraybuffer",
                    r.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, r, e, t, i),
                    r
                }
                ,
                t.prototype._onLicenseRequestReadyStageChange = function(e, t, i, r) {
                    switch (e.readyState) {
                    case 4:
                        if (200 === e.status)
                            this._requestLicenseFailureCount = 0,
                            n.logger.log("License request succeeded"),
                            r(e.response);
                        else {
                            if (n.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"),
                            ++this._requestLicenseFailureCount <= 3) {
                                var s = 3 - this._requestLicenseFailureCount + 1;
                                return n.logger.warn("Retrying license request, " + s + " attempts left"),
                                void this._requestLicense(i, r)
                            }
                            this.hls.trigger(o["default"].ERROR, {
                                type: a.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: a.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0
                            })
                        }
                    }
                }
                ,
                t.prototype._generateLicenseRequestChallenge = function(e, t) {
                    var i;
                    return e.mediaKeySystemDomain === d.PLAYREADY ? n.logger.error("PlayReady is not supported (yet)") : e.mediaKeySystemDomain === d.WIDEVINE ? i = t : n.logger.error("Unsupported key-system:", e.mediaKeySystemDomain),
                    i
                }
                ,
                t.prototype._requestLicense = function(e, t) {
                    n.logger.log("Requesting content license for key-system");
                    var i = this._mediaKeysList[0];
                    if (!i)
                        return n.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
                        void this.hls.trigger(o["default"].ERROR, {
                            type: a.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: a.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                            fatal: !0
                        });
                    var r = this.getLicenseServerUrl(i.mediaKeySystemDomain)
                      , s = this._createLicenseXhr(r, e, t);
                    n.logger.log("Sending license request to URL: " + r),
                    s.send(this._generateLicenseRequestChallenge(i, e))
                }
                ,
                t.prototype.onMediaAttached = function(e) {
                    var t = this;
                    if (this._emeEnabled) {
                        var i = e.media;
                        this._media = i,
                        i.addEventListener("encrypted", function(e) {
                            t._onMediaEncrypted(e.initDataType, e.initData)
                        })
                    }
                }
                ,
                t.prototype.onManifestParsed = function(e) {
                    if (this._emeEnabled) {
                        var t = e.levels.map(function(e) {
                            return e.audioCodec
                        })
                          , i = e.levels.map(function(e) {
                            return e.videoCodec
                        });
                        this._attemptKeySystemAccess(d.WIDEVINE, t, i)
                    }
                }
                ,
                t
            }(s["default"]);
            t["default"] = h
        },
        "./src/controller/fps-controller.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/events.js")
              , o = i("./src/event-handler.js")
              , a = i("./src/utils/logger.js")
              , n = window.performance
              , l = function(e) {
                function t(t) {
                    return e.call(this, t, s["default"].MEDIA_ATTACHING) || this
                }
                return r(t, e),
                t.prototype.destroy = function() {
                    this.timer && clearInterval(this.timer),
                    this.isVideoPlaybackQualityAvailable = !1
                }
                ,
                t.prototype.onMediaAttaching = function(e) {
                    var t = this.hls.config;
                    if (t.capLevelOnFPSDrop) {
                        "function" == typeof (this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0),
                        clearInterval(this.timer),
                        this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod)
                    }
                }
                ,
                t.prototype.checkFPS = function(e, t, i) {
                    var r = n.now();
                    if (t) {
                        if (this.lastTime) {
                            var o = r - this.lastTime
                              , l = i - this.lastDroppedFrames
                              , d = t - this.lastDecodedFrames
                              , u = 1e3 * l / o
                              , c = this.hls;
                            if (c.trigger(s["default"].FPS_DROP, {
                                currentDropped: l,
                                currentDecoded: d,
                                totalDroppedFrames: i
                            }),
                            u > 0 && l > c.config.fpsDroppedMonitoringThreshold * d) {
                                var h = c.currentLevel;
                                a.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + h),
                                h > 0 && (-1 === c.autoLevelCapping || c.autoLevelCapping >= h) && (h -= 1,
                                c.trigger(s["default"].FPS_DROP_LEVEL_CAPPING, {
                                    level: h,
                                    droppedLevel: c.currentLevel
                                }),
                                c.autoLevelCapping = h,
                                c.streamController.nextLevelSwitch())
                            }
                        }
                        this.lastTime = r,
                        this.lastDroppedFrames = i,
                        this.lastDecodedFrames = t
                    }
                }
                ,
                t.prototype.checkFPSInterval = function() {
                    var e = this.video;
                    if (e)
                        if (this.isVideoPlaybackQualityAvailable) {
                            var t = e.getVideoPlaybackQuality();
                            this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                        } else
                            this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
                }
                ,
                t
            }(o["default"]);
            t["default"] = l
        },
        "./src/controller/fragment-finders.js": function(e, t, i) {
            "use strict";
            (function(e) {
                function r(t, i, r) {
                    if (!Array.isArray(t) || !t.length || !e.isFinite(i))
                        return null;
                    if (i < t[0].programDateTime)
                        return null;
                    if (i >= t[t.length - 1].endProgramDateTime)
                        return null;
                    r = r || 0;
                    for (var s = 0; s < t.length; ++s) {
                        var o = t[s];
                        if (a(i, r, o))
                            return o
                    }
                    return null
                }
                function s(e, t, i, r) {
                    void 0 === i && (i = 0),
                    void 0 === r && (r = 0);
                    var s = e ? t[e.sn - t[0].sn + 1] : null;
                    return s && !o(i, r, s) ? s : n["default"].search(t, o.bind(null, i, r))
                }
                function o(e, t, i) {
                    void 0 === e && (e = 0),
                    void 0 === t && (t = 0);
                    var r = Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                    return i.start + i.duration - r <= e ? 1 : i.start - r > e && i.start ? -1 : 0
                }
                function a(e, t, i) {
                    var r = 1e3 * Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                    return i.endProgramDateTime - r > e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = i("./src/utils/binary-search.js");
                t.findFragmentByPDT = r,
                t.findFragmentByPTS = s,
                t.fragmentWithinToleranceTest = o,
                t.pdtWithinToleranceTest = a
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/fragment-tracker.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                        new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/event-handler.js")
                  , o = i("./src/events.js");
                t.FragmentState = {
                    NOT_LOADED: "NOT_LOADED",
                    APPENDING: "APPENDING",
                    PARTIAL: "PARTIAL",
                    OK: "OK"
                };
                var a = function(i) {
                    function a(e) {
                        var t = i.call(this, e, o["default"].BUFFER_APPENDED, o["default"].FRAG_BUFFERED, o["default"].FRAG_LOADED) || this;
                        return t.bufferPadding = .2,
                        t.fragments = Object.create(null),
                        t.timeRanges = Object.create(null),
                        t.config = e.config,
                        t
                    }
                    return r(a, i),
                    a.prototype.destroy = function() {
                        this.fragments = null,
                        this.timeRanges = null,
                        this.config = null,
                        s["default"].prototype.destroy.call(this),
                        i.prototype.destroy.call(this)
                    }
                    ,
                    a.prototype.getBufferedFrag = function(e, t) {
                        var i = this.fragments
                          , r = Object.keys(i).filter(function(r) {
                            var s = i[r];
                            if (s.body.type !== t)
                                return !1;
                            if (!s.buffered)
                                return !1;
                            var o = s.body;
                            return o.startPTS <= e && e <= o.endPTS
                        });
                        if (0 === r.length)
                            return null;
                        var s = r.pop();
                        return i[s].body
                    }
                    ,
                    a.prototype.detectEvictedFragments = function(e, t) {
                        var i, r, s = this;
                        Object.keys(this.fragments).forEach(function(o) {
                            var a = s.fragments[o];
                            if (!0 === a.buffered) {
                                var n = a.range[e];
                                if (n) {
                                    i = n.time;
                                    for (var l = 0; l < i.length; l++)
                                        if (r = i[l],
                                        !1 === s.isTimeBuffered(r.startPTS, r.endPTS, t)) {
                                            s.removeFragment(a.body);
                                            break
                                        }
                                }
                            }
                        })
                    }
                    ,
                    a.prototype.detectPartialFragments = function(e) {
                        var t = this
                          , i = this.getFragmentKey(e)
                          , r = this.fragments[i];
                        r && (r.buffered = !0,
                        Object.keys(this.timeRanges).forEach(function(i) {
                            if (e.hasElementaryStream(i)) {
                                var s = t.timeRanges[i];
                                r.range[i] = t.getBufferedTimes(e.startPTS, e.endPTS, s)
                            }
                        }))
                    }
                    ,
                    a.prototype.getBufferedTimes = function(e, t, i) {
                        for (var r, s, o = [], a = !1, n = 0; n < i.length; n++) {
                            if (r = i.start(n) - this.bufferPadding,
                            s = i.end(n) + this.bufferPadding,
                            e >= r && t <= s) {
                                o.push({
                                    startPTS: Math.max(e, i.start(n)),
                                    endPTS: Math.min(t, i.end(n))
                                });
                                break
                            }
                            if (e < s && t > r)
                                o.push({
                                    startPTS: Math.max(e, i.start(n)),
                                    endPTS: Math.min(t, i.end(n))
                                }),
                                a = !0;
                            else if (t <= r)
                                break
                        }
                        return {
                            time: o,
                            partial: a
                        }
                    }
                    ,
                    a.prototype.getFragmentKey = function(e) {
                        return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
                    }
                    ,
                    a.prototype.getPartialFragment = function(e) {
                        var t, i, r, s = this, o = null, a = 0;
                        return Object.keys(this.fragments).forEach(function(n) {
                            var l = s.fragments[n];
                            s.isPartial(l) && (i = l.body.startPTS - s.bufferPadding,
                            r = l.body.endPTS + s.bufferPadding,
                            e >= i && e <= r && (t = Math.min(e - i, r - e),
                            a <= t && (o = l.body,
                            a = t)))
                        }),
                        o
                    }
                    ,
                    a.prototype.getState = function(e) {
                        var i = this.getFragmentKey(e)
                          , r = this.fragments[i]
                          , s = t.FragmentState.NOT_LOADED;
                        return r !== undefined && (s = r.buffered ? !0 === this.isPartial(r) ? t.FragmentState.PARTIAL : t.FragmentState.OK : t.FragmentState.APPENDING),
                        s
                    }
                    ,
                    a.prototype.isPartial = function(e) {
                        return !0 === e.buffered && (e.range.video !== undefined && !0 === e.range.video.partial || e.range.audio !== undefined && !0 === e.range.audio.partial)
                    }
                    ,
                    a.prototype.isTimeBuffered = function(e, t, i) {
                        for (var r, s, o = 0; o < i.length; o++) {
                            if (r = i.start(o) - this.bufferPadding,
                            s = i.end(o) + this.bufferPadding,
                            e >= r && t <= s)
                                return !0;
                            if (t <= r)
                                return !1
                        }
                        return !1
                    }
                    ,
                    a.prototype.onFragLoaded = function(t) {
                        var i = t.frag;
                        e.isFinite(i.sn) && !i.bitrateTest && (this.fragments[this.getFragmentKey(i)] = {
                            body: i,
                            range: Object.create(null),
                            buffered: !1
                        })
                    }
                    ,
                    a.prototype.onBufferAppended = function(e) {
                        var t = this;
                        this.timeRanges = e.timeRanges,
                        Object.keys(this.timeRanges).forEach(function(e) {
                            var i = t.timeRanges[e];
                            t.detectEvictedFragments(e, i)
                        })
                    }
                    ,
                    a.prototype.onFragBuffered = function(e) {
                        this.detectPartialFragments(e.frag)
                    }
                    ,
                    a.prototype.hasFragment = function(e) {
                        var t = this.getFragmentKey(e);
                        return this.fragments[t] !== undefined
                    }
                    ,
                    a.prototype.removeFragment = function(e) {
                        var t = this.getFragmentKey(e);
                        delete this.fragments[t]
                    }
                    ,
                    a.prototype.removeAllFragments = function() {
                        this.fragments = Object.create(null)
                    }
                    ,
                    a
                }(s["default"]);
                t.FragmentTracker = a
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/gap-controller.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/utils/buffer-helper.js")
              , s = i("./src/errors.js")
              , o = i("./src/events.js")
              , a = i("./src/utils/logger.js")
              , n = function() {
                function e(e, t, i, r) {
                    this.config = e,
                    this.media = t,
                    this.fragmentTracker = i,
                    this.hls = r,
                    this.stallReported = !1
                }
                return e.prototype.poll = function(e, t) {
                    var i = this
                      , s = i.config
                      , o = i.media
                      , n = o.currentTime
                      , l = window.performance.now();
                    if (n !== e)
                        return this.stallReported && (a.logger.warn("playback not stuck anymore @" + n + ", after " + Math.round(l - this._stalledTime) + "ms"),
                        this.stallReported = !1),
                        this._stalledTime = null,
                        void (this.nudgeRetry = 0);
                    if (!(o.ended || !o.buffered.length || o.readyState > 2 || o.seeking && r.BufferHelper.isBuffered(o, n))) {
                        var d = l - this._stalledTime
                          , u = r.BufferHelper.bufferInfo(o, n, s.maxBufferHole);
                        if (!this._stalledTime)
                            return void (this._stalledTime = l);
                        d >= 1e3 && this._reportStall(u.len),
                        this._tryFixBufferStall(u, d)
                    }
                }
                ,
                e.prototype._tryFixBufferStall = function(e, t) {
                    var i = this
                      , r = i.config
                      , s = i.fragmentTracker
                      , o = i.media
                      , a = o.currentTime
                      , n = s.getPartialFragment(a);
                    n && this._trySkipBufferHole(n),
                    e.len > .5 && t > 1e3 * r.highBufferWatchdogPeriod && (this._stalledTime = null,
                    this._tryNudgeBuffer())
                }
                ,
                e.prototype._reportStall = function(e) {
                    var t = this
                      , i = t.hls
                      , r = t.media;
                    t.stallReported || (this.stallReported = !0,
                    a.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer"),
                    i.trigger(o["default"].ERROR, {
                        type: s.ErrorTypes.MEDIA_ERROR,
                        details: s.ErrorDetails.BUFFER_STALLED_ERROR,
                        fatal: !1,
                        buffer: e
                    }))
                }
                ,
                e.prototype._trySkipBufferHole = function(e) {
                    for (var t = this, i = t.hls, r = t.media, n = r.currentTime, l = 0, d = 0; d < r.buffered.length; d++) {
                        var u = r.buffered.start(d);
                        if (n >= l && n < u)
                            return r.currentTime = Math.max(u, r.currentTime + .1),
                            a.logger.warn("skipping hole, adjusting currentTime from " + n + " to " + r.currentTime),
                            this._stalledTime = null,
                            void i.trigger(o["default"].ERROR, {
                                type: s.ErrorTypes.MEDIA_ERROR,
                                details: s.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                fatal: !1,
                                reason: "fragment loaded with buffer holes, seeking from " + n + " to " + r.currentTime,
                                frag: e
                            });
                        l = r.buffered.end(d)
                    }
                }
                ,
                e.prototype._tryNudgeBuffer = function() {
                    var e = this
                      , t = e.config
                      , i = e.hls
                      , r = e.media
                      , n = r.currentTime
                      , l = (this.nudgeRetry || 0) + 1;
                    if (this.nudgeRetry = l,
                    l < t.nudgeMaxRetry) {
                        var d = n + l * t.nudgeOffset;
                        a.logger.log("adjust currentTime from " + n + " to " + d),
                        r.currentTime = d,
                        i.trigger(o["default"].ERROR, {
                            type: s.ErrorTypes.MEDIA_ERROR,
                            details: s.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                            fatal: !1
                        })
                    } else
                        a.logger.error("still stuck in high buffer @" + n + " after " + t.nudgeMaxRetry + ", raise fatal error"),
                        i.trigger(o["default"].ERROR, {
                            type: s.ErrorTypes.MEDIA_ERROR,
                            details: s.ErrorDetails.BUFFER_STALLED_ERROR,
                            fatal: !0
                        })
                }
                ,
                e
            }();
            t["default"] = n
        },
        "./src/controller/id3-track-controller.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/events.js")
              , o = i("./src/event-handler.js")
              , a = i("./src/demux/id3.js")
              , n = i("./src/utils/texttrack-utils.js")
              , l = function(e) {
                function t(t) {
                    var i = e.call(this, t, s["default"].MEDIA_ATTACHED, s["default"].MEDIA_DETACHING, s["default"].FRAG_PARSING_METADATA) || this;
                    return i.id3Track = undefined,
                    i.media = undefined,
                    i
                }
                return r(t, e),
                t.prototype.destroy = function() {
                    o["default"].prototype.destroy.call(this)
                }
                ,
                t.prototype.onMediaAttached = function(e) {
                    this.media = e.media,
                    this.media
                }
                ,
                t.prototype.onMediaDetaching = function() {
                    n.clearCurrentCues(this.id3Track),
                    this.id3Track = undefined,
                    this.media = undefined
                }
                ,
                t.prototype.getID3Track = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        if ("metadata" === i.kind && "id3" === i.label)
                            return n.sendAddTrackEvent(i, this.media),
                            i
                    }
                    return this.media.addTextTrack("metadata", "id3")
                }
                ,
                t.prototype.onFragParsingMetadata = function(e) {
                    var t = e.frag
                      , i = e.samples;
                    this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks),
                    this.id3Track.mode = "hidden");
                    for (var r = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, s = 0; s < i.length; s++) {
                        var o = a["default"].getID3Frames(i[s].data);
                        if (o) {
                            var n = i[s].pts
                              , l = s < i.length - 1 ? i[s + 1].pts : t.endPTS;
                            n === l && (l += 1e-4);
                            for (var d = 0; d < o.length; d++) {
                                var u = o[d];
                                if (!a["default"].isTimeStampFrame(u)) {
                                    var c = new r(n,l,"");
                                    c.value = u,
                                    this.id3Track.addCue(c)
                                }
                            }
                        }
                    }
                }
                ,
                t
            }(o["default"]);
            t["default"] = l
        },
        "./src/controller/level-controller.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/events.js")
              , o = i("./src/event-handler.js")
              , a = i("./src/utils/logger.js")
              , n = i("./src/errors.js")
              , l = i("./src/utils/codecs.js")
              , d = i("./src/controller/level-helper.js")
              , u = window.performance
              , c = function(e) {
                function t(t) {
                    var i = e.call(this, t, s["default"].MANIFEST_LOADED, s["default"].LEVEL_LOADED, s["default"].AUDIO_TRACK_SWITCHED, s["default"].FRAG_LOADED, s["default"].ERROR) || this;
                    return i.canload = !1,
                    i.currentLevelIndex = null,
                    i.manualLevelIndex = -1,
                    i.timer = null,
                    i
                }
                return r(t, e),
                t.prototype.onHandlerDestroying = function() {
                    this.clearTimer(),
                    this.manualLevelIndex = -1
                }
                ,
                t.prototype.clearTimer = function() {
                    null !== this.timer && (clearTimeout(this.timer),
                    this.timer = null)
                }
                ,
                t.prototype.startLoad = function() {
                    var e = this._levels;
                    this.canload = !0,
                    this.levelRetryCount = 0,
                    e && e.forEach(function(e) {
                        e.loadError = 0;
                        var t = e.details;
                        t && t.live && (e.details = undefined)
                    }),
                    null !== this.timer && this.loadLevel()
                }
                ,
                t.prototype.stopLoad = function() {
                    this.canload = !1
                }
                ,
                t.prototype.onManifestLoaded = function(e) {
                    var t, i = [], r = {}, o = null, u = !1, c = !1, h = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), f = [];
                    if (e.levels.forEach(function(e) {
                        e.loadError = 0,
                        e.fragmentError = !1,
                        u = u || !!e.videoCodec,
                        c = c || !!e.audioCodec || !(!e.attrs || !e.attrs.AUDIO),
                        h && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = undefined),
                        o = r[e.bitrate],
                        o ? o.url.push(e.url) : (e.url = [e.url],
                        e.urlId = 0,
                        r[e.bitrate] = e,
                        i.push(e)),
                        e.attrs && e.attrs.AUDIO && d.addGroupId(o || e, "audio", e.attrs.AUDIO),
                        e.attrs && e.attrs.SUBTITLES && d.addGroupId(o || e, "text", e.attrs.SUBTITLES)
                    }),
                    u && c && (i = i.filter(function(e) {
                        return !!e.videoCodec
                    })),
                    i = i.filter(function(e) {
                        var t = e.audioCodec
                          , i = e.videoCodec;
                        return (!t || l.isCodecSupportedInMp4(t)) && (!i || l.isCodecSupportedInMp4(i))
                    }),
                    e.audioTracks && (f = e.audioTracks.filter(function(e) {
                        return !e.audioCodec || l.isCodecSupportedInMp4(e.audioCodec, "audio")
                    }),
                    f.forEach(function(e, t) {
                        e.id = t
                    })),
                    i.length > 0) {
                        t = i[0].bitrate,
                        i.sort(function(e, t) {
                            return e.bitrate - t.bitrate
                        }),
                        this._levels = i;
                        for (var p = 0; p < i.length; p++)
                            if (i[p].bitrate === t) {
                                this._firstLevel = p,
                                a.logger.log("manifest loaded," + i.length + " level(s) found, first bitrate:" + t);
                                break
                            }
                        this.hls.trigger(s["default"].MANIFEST_PARSED, {
                            levels: i,
                            audioTracks: f,
                            firstLevel: this._firstLevel,
                            stats: e.stats,
                            audio: c,
                            video: u,
                            altAudio: f.length > 0 && u
                        })
                    } else
                        this.hls.trigger(s["default"].ERROR, {
                            type: n.ErrorTypes.MEDIA_ERROR,
                            details: n.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            url: this.hls.url,
                            reason: "no level with compatible codecs found in manifest"
                        })
                }
                ,
                Object.defineProperty(t.prototype, "levels", {
                    get: function() {
                        return this._levels
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "level", {
                    get: function() {
                        return this.currentLevelIndex
                    },
                    set: function(e) {
                        var t = this._levels;
                        t && (e = Math.min(e, t.length - 1),
                        this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.setLevelInternal = function(e) {
                    var t = this._levels
                      , i = this.hls;
                    if (e >= 0 && e < t.length) {
                        if (this.clearTimer(),
                        this.currentLevelIndex !== e) {
                            a.logger.log("switching to level " + e),
                            this.currentLevelIndex = e;
                            var r = t[e];
                            r.level = e,
                            i.trigger(s["default"].LEVEL_SWITCHING, r)
                        }
                        var o = t[e]
                          , l = o.details;
                        if (!l || l.live) {
                            var d = o.urlId;
                            i.trigger(s["default"].LEVEL_LOADING, {
                                url: o.url[d],
                                level: e,
                                id: d
                            })
                        }
                    } else
                        i.trigger(s["default"].ERROR, {
                            type: n.ErrorTypes.OTHER_ERROR,
                            details: n.ErrorDetails.LEVEL_SWITCH_ERROR,
                            level: e,
                            fatal: !1,
                            reason: "invalid level idx"
                        })
                }
                ,
                Object.defineProperty(t.prototype, "manualLevel", {
                    get: function() {
                        return this.manualLevelIndex
                    },
                    set: function(e) {
                        this.manualLevelIndex = e,
                        this._startLevel === undefined && (this._startLevel = e),
                        -1 !== e && (this.level = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "firstLevel", {
                    get: function() {
                        return this._firstLevel
                    },
                    set: function(e) {
                        this._firstLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "startLevel", {
                    get: function() {
                        if (this._startLevel === undefined) {
                            var e = this.hls.config.startLevel;
                            return e !== undefined ? e : this._firstLevel
                        }
                        return this._startLevel
                    },
                    set: function(e) {
                        this._startLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.onError = function(e) {
                    if (e.fatal)
                        return void (e.type === n.ErrorTypes.NETWORK_ERROR && this.clearTimer());
                    var t, i = !1, r = !1;
                    switch (e.details) {
                    case n.ErrorDetails.FRAG_LOAD_ERROR:
                    case n.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    case n.ErrorDetails.KEY_LOAD_ERROR:
                    case n.ErrorDetails.KEY_LOAD_TIMEOUT:
                        t = e.frag.level,
                        r = !0;
                        break;
                    case n.ErrorDetails.LEVEL_LOAD_ERROR:
                    case n.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                        t = e.context.level,
                        i = !0;
                        break;
                    case n.ErrorDetails.REMUX_ALLOC_ERROR:
                        t = e.level,
                        i = !0
                    }
                    t !== undefined && this.recoverLevel(e, t, i, r)
                }
                ,
                t.prototype.recoverLevel = function(e, t, i, r) {
                    var s, o, n, l = this, d = this.hls.config, u = e.details, c = this._levels[t];
                    if (c.loadError++,
                    c.fragmentError = r,
                    i) {
                        if (!(this.levelRetryCount + 1 <= d.levelLoadingMaxRetry))
                            return a.logger.error("level controller, cannot recover from " + u + " error"),
                            this.currentLevelIndex = null,
                            this.clearTimer(),
                            void (e.fatal = !0);
                        o = Math.min(Math.pow(2, this.levelRetryCount) * d.levelLoadingRetryDelay, d.levelLoadingMaxRetryTimeout),
                        this.timer = setTimeout(function() {
                            return l.loadLevel()
                        }, o),
                        e.levelRetry = !0,
                        this.levelRetryCount++,
                        a.logger.warn("level controller, " + u + ", retry in " + o + " ms, current retry count is " + this.levelRetryCount)
                    }
                    (i || r) && (s = c.url.length,
                    s > 1 && c.loadError < s ? (c.urlId = (c.urlId + 1) % s,
                    c.details = undefined,
                    a.logger.warn("level controller, " + u + " for level " + t + ": switching to redundant URL-id " + c.urlId)) : -1 === this.manualLevelIndex ? (n = 0 === t ? this._levels.length - 1 : t - 1,
                    a.logger.warn("level controller, " + u + ": switch to " + n),
                    this.hls.nextAutoLevel = this.currentLevelIndex = n) : r && (a.logger.warn("level controller, " + u + ": reload a fragment"),
                    this.currentLevelIndex = null))
                }
                ,
                t.prototype.onFragLoaded = function(e) {
                    var t = e.frag;
                    if (t !== undefined && "main" === t.type) {
                        var i = this._levels[t.level];
                        i !== undefined && (i.fragmentError = !1,
                        i.loadError = 0,
                        this.levelRetryCount = 0)
                    }
                }
                ,
                t.prototype.onLevelLoaded = function(e) {
                    var t = this
                      , i = e.level;
                    if (i === this.currentLevelIndex) {
                        var r = this._levels[i];
                        r.fragmentError || (r.loadError = 0,
                        this.levelRetryCount = 0);
                        var s = e.details;
                        if (s.live) {
                            var o = 1e3 * (s.averagetargetduration ? s.averagetargetduration : s.targetduration)
                              , n = o
                              , l = r.details;
                            l && s.endSN === l.endSN && (n /= 2,
                            a.logger.log("same live playlist, reload twice faster")),
                            n -= u.now() - e.stats.trequest,
                            n = Math.max(o / 2, Math.round(n)),
                            a.logger.log("live playlist, reload in " + Math.round(n) + " ms"),
                            this.timer = setTimeout(function() {
                                return t.loadLevel()
                            }, n)
                        } else
                            this.clearTimer()
                    }
                }
                ,
                t.prototype.onAudioTrackSwitched = function(e) {
                    var t = this.hls.audioTracks[e.id].groupId
                      , i = this.hls.levels[this.currentLevelIndex];
                    if (i && i.audioGroupIds) {
                        var r = i.audioGroupIds.findIndex(function(e) {
                            return e === t
                        });
                        r !== i.urlId && (i.urlId = r,
                        this.startLoad())
                    }
                }
                ,
                t.prototype.loadLevel = function() {
                    if (a.logger.debug("call to loadLevel"),
                    null !== this.currentLevelIndex && this.canload) {
                        var e = this._levels[this.currentLevelIndex];
                        if ("object" == typeof e && e.url.length > 0) {
                            var t = this.currentLevelIndex
                              , i = e.urlId
                              , r = e.url[i];
                            a.logger.log("Attempt loading level index " + t + " with URL-id " + i),
                            this.hls.trigger(s["default"].LEVEL_LOADING, {
                                url: r,
                                level: t,
                                id: i
                            })
                        }
                    }
                }
                ,
                Object.defineProperty(t.prototype, "nextLoadLevel", {
                    get: function() {
                        return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                    },
                    set: function(e) {
                        this.level = e,
                        -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
            }(o["default"]);
            t["default"] = c
        },
        "./src/controller/level-helper.js": function(e, t, i) {
            "use strict";
            (function(e) {
                function r(e, t, i) {
                    switch (t) {
                    case "audio":
                        e.audioGroupIds || (e.audioGroupIds = []),
                        e.audioGroupIds.push(i);
                        break;
                    case "text":
                        e.textGroupIds || (e.textGroupIds = []),
                        e.textGroupIds.push(i)
                    }
                }
                function s(t, i, r) {
                    var s = t[i]
                      , o = t[r]
                      , a = o.startPTS;
                    e.isFinite(a) ? r > i ? (s.duration = a - s.start,
                    s.duration < 0 && n.logger.warn("negative duration computed for frag " + s.sn + ",level " + s.level + ", there should be some duration drift between playlist and fragment!")) : (o.duration = s.start - a,
                    o.duration < 0 && n.logger.warn("negative duration computed for frag " + o.sn + ",level " + o.level + ", there should be some duration drift between playlist and fragment!")) : o.start = r > i ? s.start + s.duration : Math.max(s.start - o.duration, 0)
                }
                function o(t, i, r, o, a, n) {
                    var l = r;
                    if (e.isFinite(i.startPTS)) {
                        var d = Math.abs(i.startPTS - r);
                        e.isFinite(i.deltaPTS) ? i.deltaPTS = Math.max(d, i.deltaPTS) : i.deltaPTS = d,
                        l = Math.max(r, i.startPTS),
                        r = Math.min(r, i.startPTS),
                        o = Math.max(o, i.endPTS),
                        a = Math.min(a, i.startDTS),
                        n = Math.max(n, i.endDTS)
                    }
                    var u = r - i.start;
                    i.start = i.startPTS = r,
                    i.maxStartPTS = l,
                    i.endPTS = o,
                    i.startDTS = a,
                    i.endDTS = n,
                    i.duration = o - r;
                    var c = i.sn;
                    if (!t || c < t.startSN || c > t.endSN)
                        return 0;
                    var h, f, p;
                    for (h = c - t.startSN,
                    f = t.fragments,
                    f[h] = i,
                    p = h; p > 0; p--)
                        s(f, p, p - 1);
                    for (p = h; p < f.length - 1; p++)
                        s(f, p, p + 1);
                    return t.PTSKnown = !0,
                    u
                }
                function a(t, i) {
                    var r, s = Math.max(t.startSN, i.startSN) - i.startSN, a = Math.min(t.endSN, i.endSN) - i.startSN, l = i.startSN - t.startSN, d = t.fragments, u = i.fragments, c = 0;
                    if (i.initSegment && t.initSegment && (i.initSegment = t.initSegment),
                    a < s)
                        return void (i.PTSKnown = !1);
                    for (var h = s; h <= a; h++) {
                        var f = d[l + h]
                          , p = u[h];
                        p && f && (c = f.cc - p.cc,
                        e.isFinite(f.startPTS) && (p.start = p.startPTS = f.startPTS,
                        p.endPTS = f.endPTS,
                        p.duration = f.duration,
                        p.backtracked = f.backtracked,
                        p.dropped = f.dropped,
                        r = p))
                    }
                    if (c)
                        for (n.logger.log("discontinuity sliding from playlist, take drift into account"),
                        h = 0; h < u.length; h++)
                            u[h].cc += c;
                    if (r)
                        o(i, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS);
                    else if (l >= 0 && l < d.length) {
                        var v = d[l].start;
                        for (h = 0; h < u.length; h++)
                            u[h].start += v
                    }
                    i.PTSKnown = t.PTSKnown
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = i("./src/utils/logger.js");
                t.addGroupId = r,
                t.updatePTS = s,
                t.updateFragPTSDTS = o,
                t.mergeDetails = a
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/stream-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                        new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/utils/binary-search.js")
                  , o = i("./src/utils/buffer-helper.js")
                  , a = i("./src/demux/demuxer.js")
                  , n = i("./src/events.js")
                  , l = i("./src/controller/fragment-tracker.js")
                  , d = i("./src/loader/fragment.js")
                  , u = i("./src/loader/playlist-loader.js")
                  , c = i("./src/controller/level-helper.js")
                  , h = i("./src/utils/time-ranges.js")
                  , f = i("./src/errors.js")
                  , p = i("./src/utils/logger.js")
                  , v = i("./src/utils/discontinuities.js")
                  , g = i("./src/task-loop.js")
                  , m = i("./src/controller/fragment-finders.js")
                  , y = i("./src/controller/gap-controller.js");
                t.State = {
                    STOPPED: "STOPPED",
                    IDLE: "IDLE",
                    KEY_LOADING: "KEY_LOADING",
                    FRAG_LOADING: "FRAG_LOADING",
                    FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                    WAITING_LEVEL: "WAITING_LEVEL",
                    PARSING: "PARSING",
                    PARSED: "PARSED",
                    BUFFER_FLUSHING: "BUFFER_FLUSHING",
                    ENDED: "ENDED",
                    ERROR: "ERROR"
                };
                var b = function(i) {
                    function g(e, r) {
                        var s = i.call(this, e, n["default"].MEDIA_ATTACHED, n["default"].MEDIA_DETACHING, n["default"].MANIFEST_LOADING, n["default"].MANIFEST_PARSED, n["default"].LEVEL_LOADED, n["default"].KEY_LOADED, n["default"].FRAG_LOADED, n["default"].FRAG_LOAD_EMERGENCY_ABORTED, n["default"].FRAG_PARSING_INIT_SEGMENT, n["default"].FRAG_PARSING_DATA, n["default"].FRAG_PARSED, n["default"].ERROR, n["default"].AUDIO_TRACK_SWITCHING, n["default"].AUDIO_TRACK_SWITCHED, n["default"].BUFFER_CREATED, n["default"].BUFFER_APPENDED, n["default"].BUFFER_FLUSHED) || this;
                        return s.fragmentTracker = r,
                        s.config = e.config,
                        s.audioCodecSwap = !1,
                        s._state = t.State.STOPPED,
                        s.stallReported = !1,
                        s.gapController = null,
                        s
                    }
                    return r(g, i),
                    g.prototype.onHandlerDestroying = function() {
                        this.stopLoad(),
                        i.prototype.onHandlerDestroying.call(this)
                    }
                    ,
                    g.prototype.onHandlerDestroyed = function() {
                        this.state = t.State.STOPPED,
                        this.fragmentTracker = null,
                        i.prototype.onHandlerDestroyed.call(this)
                    }
                    ,
                    g.prototype.startLoad = function(e) {
                        if (this.levels) {
                            var i = this.lastCurrentTime
                              , r = this.hls;
                            if (this.stopLoad(),
                            this.setInterval(100),
                            this.level = -1,
                            this.fragLoadError = 0,
                            !this.startFragRequested) {
                                var s = r.startLevel;
                                -1 === s && (s = 0,
                                this.bitrateTest = !0),
                                this.level = r.nextLoadLevel = s,
                                this.loadedmetadata = !1
                            }
                            i > 0 && -1 === e && (p.logger.log("override startPosition with lastCurrentTime @" + i.toFixed(3)),
                            e = i),
                            this.state = t.State.IDLE,
                            this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e,
                            this.tick()
                        } else
                            this.forceStartLoad = !0,
                            this.state = t.State.STOPPED
                    }
                    ,
                    g.prototype.stopLoad = function() {
                        var e = this.fragCurrent;
                        e && (e.loader && e.loader.abort(),
                        this.fragmentTracker.removeFragment(e),
                        this.fragCurrent = null),
                        this.fragPrevious = null,
                        this.demuxer && (this.demuxer.destroy(),
                        this.demuxer = null),
                        this.clearInterval(),
                        this.state = t.State.STOPPED,
                        this.forceStartLoad = !1
                    }
                    ,
                    g.prototype.doTick = function() {
                        switch (this.state) {
                        case t.State.BUFFER_FLUSHING:
                            this.fragLoadError = 0;
                            break;
                        case t.State.IDLE:
                            this._doTickIdle();
                            break;
                        case t.State.WAITING_LEVEL:
                            var e = this.levels[this.level];
                            e && e.details && (this.state = t.State.IDLE);
                            break;
                        case t.State.FRAG_LOADING_WAITING_RETRY:
                            var i = window.performance.now()
                              , r = this.retryDate;
                            (!r || i >= r || this.media && this.media.seeking) && (p.logger.log("mediaController: retryDate reached, switch back to IDLE state"),
                            this.state = t.State.IDLE);
                            break;
                        case t.State.ERROR:
                        case t.State.STOPPED:
                        case t.State.FRAG_LOADING:
                        case t.State.PARSING:
                        case t.State.PARSED:
                        case t.State.ENDED:
                        }
                        this._checkBuffer(),
                        this._checkFragmentChanged()
                    }
                    ,
                    g.prototype._doTickIdle = function() {
                        var e = this.hls
                          , i = e.config
                          , r = this.media;
                        if (this.levelLastLoaded !== undefined && (r || !this.startFragRequested && i.startFragPrefetch)) {
                            var s;
                            s = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                            var a = e.nextLoadLevel
                              , l = this.levels[a];
                            if (l) {
                                var d, u = l.bitrate;
                                d = u ? Math.max(8 * i.maxBufferSize / u, i.maxBufferLength) : i.maxBufferLength,
                                d = Math.min(d, i.maxMaxBufferLength);
                                var c = o.BufferHelper.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, s, i.maxBufferHole)
                                  , h = c.len;
                                if (!(h >= d)) {
                                    p.logger.trace("buffer length of " + h.toFixed(3) + " is below max of " + d.toFixed(3) + ". checking for more payload ..."),
                                    this.level = e.nextLoadLevel = a;
                                    var f = l.details;
                                    if (!f || f.live && this.levelLastLoaded !== a)
                                        return void (this.state = t.State.WAITING_LEVEL);
                                    var v = this.fragPrevious;
                                    if (!f.live && v && !v.backtracked && v.sn === f.endSN && !c.nextStart) {
                                        if (Math.min(r.duration, v.start + v.duration) - Math.max(c.end, v.start) <= Math.max(.2, v.duration)) {
                                            var g = {};
                                            return this.altAudio && (g.type = "video"),
                                            this.hls.trigger(n["default"].BUFFER_EOS, g),
                                            void (this.state = t.State.ENDED)
                                        }
                                    }
                                    this._fetchPayloadOrEos(s, c, f)
                                }
                            }
                        }
                    }
                    ,
                    g.prototype._fetchPayloadOrEos = function(e, t, i) {
                        var r = this.fragPrevious
                          , s = this.level
                          , o = i.fragments
                          , a = o.length;
                        if (0 !== a) {
                            var n, l = o[0].start, d = o[a - 1].start + o[a - 1].duration, u = t.end;
                            if (i.initSegment && !i.initSegment.data)
                                n = i.initSegment;
                            else if (i.live) {
                                var c = this.config.initialLiveManifestSize;
                                if (a < c)
                                    return void p.logger.warn("Can not start playback of a level, reason: not enough fragments " + a + " < " + c);
                                if (null === (n = this._ensureFragmentAtLivePoint(i, u, l, d, r, o, a)))
                                    return
                            } else
                                u < l && (n = o[0]);
                            if (!n) {
                                var h = void 0;
                                h = u,
                                p.logger.debug("stream-controller: _findFragment at " + h + ",\n          buffer-end " + u + ", position " + e, r),
                                n = this._findFragment(r, o, h, d, i)
                            }
                            n && (p.logger.log("Found fragment:", n),
                            n.encrypted ? (p.logger.log("Loading key for " + n.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + s),
                            this._loadKey(n)) : (p.logger.log("Loading " + n.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + s + ", currentTime:" + e.toFixed(3) + ", bufferEnd:" + u.toFixed(3)),
                            this._loadFragment(n)))
                        }
                    }
                    ,
                    g.prototype._ensureFragmentAtLivePoint = function(e, t, i, r, o, a, n) {
                        var l, d = this.hls.config, u = this.media, c = d.liveMaxLatencyDuration !== undefined ? d.liveMaxLatencyDuration : d.liveMaxLatencyDurationCount * e.targetduration;
                        if (t < Math.max(i - d.maxFragLookUpTolerance, r - c)) {
                            var h = this.liveSyncPosition = this.computeLivePosition(i, e);
                            p.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)),
                            t = h,
                            u && u.readyState && u.duration > h && (u.currentTime = h),
                            this.nextLoadPosition = h
                        }
                        if (e.PTSKnown && t > r && u && u.readyState)
                            return null;
                        if (this.startFragRequested && !e.PTSKnown) {
                            if (o)
                                if (e.hasProgramDateTime)
                                    p.logger.log("live playlist, switching playlist, load frag with same PDT: " + o.programDateTime),
                                    l = m.findFragmentByPDT(a, o.endProgramDateTime, d.maxFragLookUpTolerance);
                                else {
                                    var f = o.sn + 1;
                                    if (f >= e.startSN && f <= e.endSN) {
                                        var v = a[f - e.startSN];
                                        o.cc === v.cc && (l = v,
                                        p.logger.log("live playlist, switching playlist, load frag with next SN: " + l.sn))
                                    }
                                    l || (l = s["default"].search(a, function(e) {
                                        return o.cc - e.cc
                                    })) && p.logger.log("live playlist, switching playlist, load frag with same CC: " + l.sn)
                                }
                            l || (l = a[Math.min(n - 1, Math.round(n / 2))],
                            p.logger.log("live playlist, switching playlist, unknown, load middle frag : " + l.sn))
                        }
                        return l
                    }
                    ,
                    g.prototype._findFragment = function(e, t, i, r, s) {
                        var o, a = this.hls.config;
                        if (i < r) {
                            var n = i > r - a.maxFragLookUpTolerance ? 0 : a.maxFragLookUpTolerance;
                            p.logger.log("Looking for fragment, target is at " + i),
                            o = m.findFragmentByPTS(e, t, i, n);
                            var l = o.compareTimeInterval(i);
                            if (0 !== l) {
                                p.logger.warn("Fragment-lookup has PTS-shift:", l);
                                var d = 2 * l;
                                p.logger.log("Applying PTS shift-correction to lookup target:", d),
                                o = m.findFragmentByPTS(e, t, i + d, n)
                            }
                            p.logger.log("Fragment found is at [" + o.start + ", " + o.end + "], lookup target was at " + i)
                        } else
                            o = t[t.length - 1];
                        if (o) {
                            var u = o.sn - s.startSN
                              , c = e && o.level === e.level
                              , h = t[u - 1]
                              , f = t[u + 1];
                            if (e && o.sn === e.sn)
                                if (c && !o.backtracked)
                                    if (o.sn < s.endSN) {
                                        var v = e.deltaPTS;
                                        v && v > a.maxBufferHole && e.dropped && u ? (o = h,
                                        p.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (o = f,
                                        p.logger.log("SN just loaded, load next one: " + o.sn, o))
                                    } else
                                        o = null;
                                else
                                    o.backtracked && (f && f.backtracked ? (p.logger.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + f.sn),
                                    o = f) : (p.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),
                                    o.dropped = 0,
                                    h ? (o = h,
                                    o.backtracked = !0) : u && (o = null)))
                        }
                        return o
                    }
                    ,
                    g.prototype._loadKey = function(e) {
                        this.state = t.State.KEY_LOADING,
                        this.hls.trigger(n["default"].KEY_LOADING, {
                            frag: e
                        })
                    }
                    ,
                    g.prototype._loadFragment = function(i) {
                        var r = this.fragmentTracker.getState(i);
                        this.fragCurrent = i,
                        this.startFragRequested = !0,
                        e.isFinite(i.sn) && !i.bitrateTest && (this.nextLoadPosition = i.start + i.duration),
                        i.backtracked || r === l.FragmentState.NOT_LOADED || r === l.FragmentState.PARTIAL ? (i.autoLevel = this.hls.autoLevelEnabled,
                        i.bitrateTest = this.bitrateTest,
                        this.hls.trigger(n["default"].FRAG_LOADING, {
                            frag: i
                        }),
                        this.demuxer || (this.demuxer = new a["default"](this.hls,"main")),
                        this.state = t.State.FRAG_LOADING) : r === l.FragmentState.APPENDING && this._reduceMaxBufferLength(i.duration) && this.fragmentTracker.removeFragment(i)
                    }
                    ,
                    Object.defineProperty(g.prototype, "state", {
                        get: function() {
                            return this._state
                        },
                        set: function(e) {
                            if (this.state !== e) {
                                var t = this.state;
                                this._state = e,
                                p.logger.log("main stream:" + t + "->" + e),
                                this.hls.trigger(n["default"].STREAM_STATE_TRANSITION, {
                                    previousState: t,
                                    nextState: e
                                })
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    g.prototype.getBufferedFrag = function(e) {
                        return this.fragmentTracker.getBufferedFrag(e, u["default"].LevelType.MAIN)
                    }
                    ,
                    Object.defineProperty(g.prototype, "currentLevel", {
                        get: function() {
                            var e = this.media;
                            if (e) {
                                var t = this.getBufferedFrag(e.currentTime);
                                if (t)
                                    return t.level
                            }
                            return -1
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(g.prototype, "nextBufferedFrag", {
                        get: function() {
                            var e = this.media;
                            return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    g.prototype.followingBufferedFrag = function(e) {
                        return e ? this.getBufferedFrag(e.endPTS + .5) : null
                    }
                    ,
                    Object.defineProperty(g.prototype, "nextLevel", {
                        get: function() {
                            var e = this.nextBufferedFrag;
                            return e ? e.level : -1
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    g.prototype._checkFragmentChanged = function() {
                        var e, t, i = this.media;
                        if (i && i.readyState && !1 === i.seeking && (t = i.currentTime,
                        t > this.lastCurrentTime && (this.lastCurrentTime = t),
                        o.BufferHelper.isBuffered(i, t) ? e = this.getBufferedFrag(t) : o.BufferHelper.isBuffered(i, t + .1) && (e = this.getBufferedFrag(t + .1)),
                        e)) {
                            var r = e;
                            if (r !== this.fragPlaying) {
                                this.hls.trigger(n["default"].FRAG_CHANGED, {
                                    frag: r
                                });
                                var s = r.level;
                                this.fragPlaying && this.fragPlaying.level === s || this.hls.trigger(n["default"].LEVEL_SWITCHED, {
                                    level: s
                                }),
                                this.fragPlaying = r
                            }
                        }
                    }
                    ,
                    g.prototype.immediateLevelSwitch = function() {
                        if (p.logger.log("immediateLevelSwitch"),
                        !this.immediateSwitch) {
                            this.immediateSwitch = !0;
                            var t = this.media
                              , i = void 0;
                            t ? (i = t.paused,
                            t.pause()) : i = !0,
                            this.previouslyPaused = i
                        }
                        var r = this.fragCurrent;
                        r && r.loader && r.loader.abort(),
                        this.fragCurrent = null,
                        this.flushMainBuffer(0, e.POSITIVE_INFINITY)
                    }
                    ,
                    g.prototype.immediateLevelSwitchEnd = function() {
                        var e = this.media;
                        e && e.buffered.length && (this.immediateSwitch = !1,
                        o.BufferHelper.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4),
                        this.previouslyPaused || e.play())
                    }
                    ,
                    g.prototype.nextLevelSwitch = function() {
                        var t = this.media;
                        if (t && t.readyState) {
                            var i = void 0
                              , r = void 0
                              , s = void 0;
                            if (r = this.getBufferedFrag(t.currentTime),
                            r && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1),
                            t.paused)
                                i = 0;
                            else {
                                var o = this.hls.nextLoadLevel
                                  , a = this.levels[o]
                                  , n = this.fragLastKbps;
                                i = n && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * n) + 1 : 0
                            }
                            if ((s = this.getBufferedFrag(t.currentTime + i)) && (s = this.followingBufferedFrag(s))) {
                                var l = this.fragCurrent;
                                l && l.loader && l.loader.abort(),
                                this.fragCurrent = null,
                                this.flushMainBuffer(s.maxStartPTS, e.POSITIVE_INFINITY)
                            }
                        }
                    }
                    ,
                    g.prototype.flushMainBuffer = function(e, i) {
                        this.state = t.State.BUFFER_FLUSHING;
                        var r = {
                            startOffset: e,
                            endOffset: i
                        };
                        this.altAudio && (r.type = "video"),
                        this.hls.trigger(n["default"].BUFFER_FLUSHING, r)
                    }
                    ,
                    g.prototype.onMediaAttached = function(e) {
                        var t = this.media = this.mediaBuffer = e.media;
                        this.onvseeking = this.onMediaSeeking.bind(this),
                        this.onvseeked = this.onMediaSeeked.bind(this),
                        this.onvended = this.onMediaEnded.bind(this),
                        t.addEventListener("seeking", this.onvseeking),
                        t.addEventListener("seeked", this.onvseeked),
                        t.addEventListener("ended", this.onvended);
                        var i = this.config;
                        this.levels && i.autoStartLoad && this.hls.startLoad(i.startPosition),
                        this.gapController = new y["default"](i,t,this.fragmentTracker,this.hls)
                    }
                    ,
                    g.prototype.onMediaDetaching = function() {
                        var e = this.media;
                        e && e.ended && (p.logger.log("MSE detaching and video ended, reset startPosition"),
                        this.startPosition = this.lastCurrentTime = 0);
                        var t = this.levels;
                        t && t.forEach(function(e) {
                            e.details && e.details.fragments.forEach(function(e) {
                                e.backtracked = undefined
                            })
                        }),
                        e && (e.removeEventListener("seeking", this.onvseeking),
                        e.removeEventListener("seeked", this.onvseeked),
                        e.removeEventListener("ended", this.onvended),
                        this.onvseeking = this.onvseeked = this.onvended = null),
                        this.media = this.mediaBuffer = null,
                        this.loadedmetadata = !1,
                        this.stopLoad()
                    }
                    ,
                    g.prototype.onMediaSeeking = function() {
                        var i = this.media
                          , r = i ? i.currentTime : undefined
                          , s = this.config;
                        e.isFinite(r) && p.logger.log("media seeking to " + r.toFixed(3));
                        var a = this.mediaBuffer ? this.mediaBuffer : i
                          , n = o.BufferHelper.bufferInfo(a, r, this.config.maxBufferHole);
                        if (this.state === t.State.FRAG_LOADING) {
                            var l = this.fragCurrent;
                            if (0 === n.len && l) {
                                var d = s.maxFragLookUpTolerance
                                  , u = l.start - d
                                  , c = l.start + l.duration + d;
                                r < u || r > c ? (l.loader && (p.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),
                                l.loader.abort()),
                                this.fragCurrent = null,
                                this.fragPrevious = null,
                                this.state = t.State.IDLE) : p.logger.log("seeking outside of buffer but within currently loaded fragment range")
                            }
                        } else
                            this.state === t.State.ENDED && (0 === n.len && (this.fragPrevious = 0),
                            this.state = t.State.IDLE);
                        i && (this.lastCurrentTime = r),
                        this.loadedmetadata || (this.nextLoadPosition = this.startPosition = r),
                        this.tick()
                    }
                    ,
                    g.prototype.onMediaSeeked = function() {
                        var t = this.media
                          , i = t ? t.currentTime : undefined;
                        e.isFinite(i) && p.logger.log("media seeked to " + i.toFixed(3)),
                        this.tick()
                    }
                    ,
                    g.prototype.onMediaEnded = function() {
                        p.logger.log("media ended"),
                        this.startPosition = this.lastCurrentTime = 0
                    }
                    ,
                    g.prototype.onManifestLoading = function() {
                        p.logger.log("trigger BUFFER_RESET"),
                        this.hls.trigger(n["default"].BUFFER_RESET),
                        this.fragmentTracker.removeAllFragments(),
                        this.stalled = !1,
                        this.startPosition = this.lastCurrentTime = 0
                    }
                    ,
                    g.prototype.onManifestParsed = function(e) {
                        var t, i = !1, r = !1;
                        e.levels.forEach(function(e) {
                            (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (i = !0),
                            -1 !== t.indexOf("mp4a.40.5") && (r = !0))
                        }),
                        this.audioCodecSwitch = i && r,
                        this.audioCodecSwitch && p.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
                        this.levels = e.levels,
                        this.startFragRequested = !1;
                        var s = this.config;
                        (s.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(s.startPosition)
                    }
                    ,
                    g.prototype.onLevelLoaded = function(i) {
                        var r = i.details
                          , s = i.level
                          , o = this.levels[this.levelLastLoaded]
                          , a = this.levels[s]
                          , l = r.totalduration
                          , d = 0;
                        if (p.logger.log("level " + s + " loaded [" + r.startSN + "," + r.endSN + "],duration:" + l),
                        r.live) {
                            var u = a.details;
                            u && r.fragments.length > 0 ? (c.mergeDetails(u, r),
                            d = r.fragments[0].start,
                            this.liveSyncPosition = this.computeLivePosition(d, u),
                            r.PTSKnown && e.isFinite(d) ? p.logger.log("live playlist sliding:" + d.toFixed(3)) : (p.logger.log("live playlist - outdated PTS, unknown sliding"),
                            v.alignStream(this.fragPrevious, o, r))) : (p.logger.log("live playlist - first load, unknown sliding"),
                            r.PTSKnown = !1,
                            v.alignStream(this.fragPrevious, o, r))
                        } else
                            r.PTSKnown = !1;
                        if (a.details = r,
                        this.levelLastLoaded = s,
                        this.hls.trigger(n["default"].LEVEL_UPDATED, {
                            details: r,
                            level: s
                        }),
                        !1 === this.startFragRequested) {
                            if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                                var h = r.startTimeOffset;
                                e.isFinite(h) ? (h < 0 && (p.logger.log("negative start time offset " + h + ", count from end of last fragment"),
                                h = d + l + h),
                                p.logger.log("start time offset found in playlist, adjust startPosition to " + h),
                                this.startPosition = h) : r.live ? (this.startPosition = this.computeLivePosition(d, r),
                                p.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0,
                                this.lastCurrentTime = this.startPosition
                            }
                            this.nextLoadPosition = this.startPosition
                        }
                        this.state === t.State.WAITING_LEVEL && (this.state = t.State.IDLE),
                        this.tick()
                    }
                    ,
                    g.prototype.onKeyLoaded = function() {
                        this.state === t.State.KEY_LOADING && (this.state = t.State.IDLE,
                        this.tick())
                    }
                    ,
                    g.prototype.onFragLoaded = function(e) {
                        var i = this
                          , r = i.fragCurrent
                          , s = i.hls
                          , o = i.levels
                          , l = i.media
                          , d = e.frag;
                        if (this.state === t.State.FRAG_LOADING && r && "main" === d.type && d.level === r.level && d.sn === r.sn) {
                            var u = e.stats
                              , c = o[r.level]
                              , h = c.details;
                            if (this.bitrateTest = !1,
                            this.stats = u,
                            p.logger.log("Loaded " + r.sn + " of [" + h.startSN + " ," + h.endSN + "],level " + r.level),
                            d.bitrateTest && s.nextLoadLevel)
                                this.state = t.State.IDLE,
                                this.startFragRequested = !1,
                                u.tparsed = u.tbuffered = window.performance.now(),
                                s.trigger(n["default"].FRAG_BUFFERED, {
                                    stats: u,
                                    frag: r,
                                    id: "main"
                                }),
                                this.tick();
                            else if ("initSegment" === d.sn)
                                this.state = t.State.IDLE,
                                u.tparsed = u.tbuffered = window.performance.now(),
                                h.initSegment.data = e.payload,
                                s.trigger(n["default"].FRAG_BUFFERED, {
                                    stats: u,
                                    frag: r,
                                    id: "main"
                                }),
                                this.tick();
                            else {
                                p.logger.log("Parsing " + r.sn + " of [" + h.startSN + " ," + h.endSN + "],level " + r.level + ", cc " + r.cc),
                                this.state = t.State.PARSING,
                                this.pendingBuffering = !0,
                                this.appended = !1,
                                d.bitrateTest && (d.bitrateTest = !1,
                                this.fragmentTracker.onFragLoaded({
                                    frag: d
                                }));
                                var f = !(l && l.seeking) && (h.PTSKnown || !h.live)
                                  , v = h.initSegment ? h.initSegment.data : []
                                  , g = this._getAudioCodec(c)
                                  , m = this.demuxer = this.demuxer || new a["default"](this.hls,"main");
                                m.push(e.payload, v, g, c.videoCodec, r, h.totalduration, f)
                            }
                        }
                        this.fragLoadError = 0
                    }
                    ,
                    g.prototype.onFragParsingInitSegment = function(e) {
                        var i = this.fragCurrent
                          , r = e.frag;
                        if (i && "main" === e.id && r.sn === i.sn && r.level === i.level && this.state === t.State.PARSING) {
                            var s = e.tracks
                              , o = void 0
                              , a = void 0;
                            if (s.audio && this.altAudio && delete s.audio,
                            a = s.audio) {
                                var l = this.levels[this.level].audioCodec
                                  , d = navigator.userAgent.toLowerCase();
                                l && this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"),
                                l = -1 !== l.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"),
                                this.audioCodecSwitch && 1 !== a.metadata.channelCount && -1 === d.indexOf("firefox") && (l = "mp4a.40.5"),
                                -1 !== d.indexOf("android") && "audio/mpeg" !== a.container && (l = "mp4a.40.2",
                                p.logger.log("Android: force audio codec to " + l)),
                                a.levelCodec = l,
                                a.id = e.id
                            }
                            a = s.video,
                            a && (a.levelCodec = this.levels[this.level].videoCodec,
                            a.id = e.id),
                            this.hls.trigger(n["default"].BUFFER_CODECS, s);
                            for (o in s) {
                                a = s[o],
                                p.logger.log("main track:" + o + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
                                var u = a.initSegment;
                                u && (this.appended = !0,
                                this.pendingBuffering = !0,
                                this.hls.trigger(n["default"].BUFFER_APPENDING, {
                                    type: o,
                                    data: u,
                                    parent: "main",
                                    content: "initSegment"
                                }))
                            }
                            this.tick()
                        }
                    }
                    ,
                    g.prototype.onFragParsingData = function(i) {
                        var r = this
                          , s = this.fragCurrent
                          , o = i.frag;
                        if (s && "main" === i.id && o.sn === s.sn && o.level === s.level && ("audio" !== i.type || !this.altAudio) && this.state === t.State.PARSING) {
                            var a = this.levels[this.level]
                              , l = s;
                            if (e.isFinite(i.endPTS) || (i.endPTS = i.startPTS + s.duration,
                            i.endDTS = i.startDTS + s.duration),
                            !0 === i.hasAudio && l.addElementaryStream(d["default"].ElementaryStreamTypes.AUDIO),
                            !0 === i.hasVideo && l.addElementaryStream(d["default"].ElementaryStreamTypes.VIDEO),
                            p.logger.log("Parsed " + i.type + ",PTS:[" + i.startPTS.toFixed(3) + "," + i.endPTS.toFixed(3) + "],DTS:[" + i.startDTS.toFixed(3) + "/" + i.endDTS.toFixed(3) + "],nb:" + i.nb + ",dropped:" + (i.dropped || 0)),
                            "video" === i.type)
                                if (l.dropped = i.dropped,
                                l.dropped)
                                    if (l.backtracked)
                                        p.logger.warn("Already backtracked on this fragment, appending with the gap", l.sn);
                                    else {
                                        var u = a.details;
                                        if (!u || l.sn !== u.startSN)
                                            return p.logger.warn("missing video frame(s), backtracking fragment", l.sn),
                                            this.fragmentTracker.removeFragment(l),
                                            l.backtracked = !0,
                                            this.nextLoadPosition = i.startPTS,
                                            this.state = t.State.IDLE,
                                            this.fragPrevious = l,
                                            void this.tick();
                                        p.logger.warn("missing video frame(s) on first frag, appending with gap", l.sn)
                                    }
                                else
                                    l.backtracked = !1;
                            var h = c.updateFragPTSDTS(a.details, l, i.startPTS, i.endPTS, i.startDTS, i.endDTS)
                              , f = this.hls;
                            f.trigger(n["default"].LEVEL_PTS_UPDATED, {
                                details: a.details,
                                level: this.level,
                                drift: h,
                                type: i.type,
                                start: i.startPTS,
                                end: i.endPTS
                            }),
                            [i.data1, i.data2].forEach(function(e) {
                                e && e.length && r.state === t.State.PARSING && (r.appended = !0,
                                r.pendingBuffering = !0,
                                f.trigger(n["default"].BUFFER_APPENDING, {
                                    type: i.type,
                                    data: e,
                                    parent: "main",
                                    content: "data"
                                }))
                            }),
                            this.tick()
                        }
                    }
                    ,
                    g.prototype.onFragParsed = function(e) {
                        var i = this.fragCurrent
                          , r = e.frag;
                        i && "main" === e.id && r.sn === i.sn && r.level === i.level && this.state === t.State.PARSING && (this.stats.tparsed = window.performance.now(),
                        this.state = t.State.PARSED,
                        this._checkAppendedParsed())
                    }
                    ,
                    g.prototype.onAudioTrackSwitching = function(i) {
                        var r = !!i.url
                          , s = i.id;
                        if (!r) {
                            if (this.mediaBuffer !== this.media) {
                                p.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),
                                this.mediaBuffer = this.media;
                                var o = this.fragCurrent;
                                o.loader && (p.logger.log("switching to main audio track, cancel main fragment load"),
                                o.loader.abort()),
                                this.fragCurrent = null,
                                this.fragPrevious = null,
                                this.demuxer && (this.demuxer.destroy(),
                                this.demuxer = null),
                                this.state = t.State.IDLE
                            }
                            var a = this.hls;
                            a.trigger(n["default"].BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: e.POSITIVE_INFINITY,
                                type: "audio"
                            }),
                            a.trigger(n["default"].AUDIO_TRACK_SWITCHED, {
                                id: s
                            }),
                            this.altAudio = !1
                        }
                    }
                    ,
                    g.prototype.onAudioTrackSwitched = function(e) {
                        var t = e.id
                          , i = !!this.hls.audioTracks[t].url;
                        if (i) {
                            var r = this.videoBuffer;
                            r && this.mediaBuffer !== r && (p.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),
                            this.mediaBuffer = r)
                        }
                        this.altAudio = i,
                        this.tick()
                    }
                    ,
                    g.prototype.onBufferCreated = function(e) {
                        var t, i, r = e.tracks, s = !1;
                        for (var o in r) {
                            var a = r[o];
                            "main" === a.id ? (i = o,
                            t = a,
                            "video" === o && (this.videoBuffer = r[o].buffer)) : s = !0
                        }
                        s && t ? (p.logger.log("alternate track found, use " + i + ".buffered to schedule main fragment loading"),
                        this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
                    }
                    ,
                    g.prototype.onBufferAppended = function(e) {
                        if ("main" === e.parent) {
                            var i = this.state;
                            i !== t.State.PARSING && i !== t.State.PARSED || (this.pendingBuffering = e.pending > 0,
                            this._checkAppendedParsed())
                        }
                    }
                    ,
                    g.prototype._checkAppendedParsed = function() {
                        if (!(this.state !== t.State.PARSED || this.appended && this.pendingBuffering)) {
                            var e = this.fragCurrent;
                            if (e) {
                                var i = this.mediaBuffer ? this.mediaBuffer : this.media;
                                p.logger.log("main buffered : " + h["default"].toString(i.buffered)),
                                this.fragPrevious = e;
                                var r = this.stats;
                                r.tbuffered = window.performance.now(),
                                this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)),
                                this.hls.trigger(n["default"].FRAG_BUFFERED, {
                                    stats: r,
                                    frag: e,
                                    id: "main"
                                }),
                                this.state = t.State.IDLE
                            }
                            this.tick()
                        }
                    }
                    ,
                    g.prototype.onError = function(i) {
                        var r = i.frag || this.fragCurrent;
                        if (!r || "main" === r.type) {
                            var s = !!this.media && o.BufferHelper.isBuffered(this.media, this.media.currentTime) && o.BufferHelper.isBuffered(this.media, this.media.currentTime + .5);
                            switch (i.details) {
                            case f.ErrorDetails.FRAG_LOAD_ERROR:
                            case f.ErrorDetails.FRAG_LOAD_TIMEOUT:
                            case f.ErrorDetails.KEY_LOAD_ERROR:
                            case f.ErrorDetails.KEY_LOAD_TIMEOUT:
                                if (!i.fatal)
                                    if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                        var a = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                        p.logger.warn("mediaController: frag loading failed, retry in " + a + " ms"),
                                        this.retryDate = window.performance.now() + a,
                                        this.loadedmetadata || (this.startFragRequested = !1,
                                        this.nextLoadPosition = this.startPosition),
                                        this.fragLoadError++,
                                        this.state = t.State.FRAG_LOADING_WAITING_RETRY
                                    } else
                                        p.logger.error("mediaController: " + i.details + " reaches max retry, redispatch as fatal ..."),
                                        i.fatal = !0,
                                        this.state = t.State.ERROR;
                                break;
                            case f.ErrorDetails.LEVEL_LOAD_ERROR:
                            case f.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                this.state !== t.State.ERROR && (i.fatal ? (this.state = t.State.ERROR,
                                p.logger.warn("streamController: " + i.details + ",switch to " + this.state + " state ...")) : i.levelRetry || this.state !== t.State.WAITING_LEVEL || (this.state = t.State.IDLE));
                                break;
                            case f.ErrorDetails.BUFFER_FULL_ERROR:
                                "main" !== i.parent || this.state !== t.State.PARSING && this.state !== t.State.PARSED || (s ? (this._reduceMaxBufferLength(this.config.maxBufferLength),
                                this.state = t.State.IDLE) : (p.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"),
                                this.fragCurrent = null,
                                this.flushMainBuffer(0, e.POSITIVE_INFINITY)));
                                break;
                            case f.ErrorDetails.BUFFER_STALLED_ERROR:
                            }
                        }
                    }
                    ,
                    g.prototype._reduceMaxBufferLength = function(e) {
                        var t = this.config;
                        return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2,
                        p.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"),
                        !0)
                    }
                    ,
                    g.prototype._checkBuffer = function() {
                        var e = this.media;
                        if (e && 0 !== e.readyState) {
                            var t = this.mediaBuffer ? this.mediaBuffer : e
                              , i = t.buffered;
                            !this.loadedmetadata && i.length ? (this.loadedmetadata = !0,
                            this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, i)
                        }
                    }
                    ,
                    g.prototype.onFragLoadEmergencyAborted = function() {
                        this.state = t.State.IDLE,
                        this.loadedmetadata || (this.startFragRequested = !1,
                        this.nextLoadPosition = this.startPosition),
                        this.tick()
                    }
                    ,
                    g.prototype.onBufferFlushed = function() {
                        var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                        e && this.fragmentTracker.detectEvictedFragments(d["default"].ElementaryStreamTypes.VIDEO, e.buffered),
                        this.state = t.State.IDLE,
                        this.fragPrevious = null
                    }
                    ,
                    g.prototype.swapAudioCodec = function() {
                        this.audioCodecSwap = !this.audioCodecSwap
                    }
                    ,
                    g.prototype.computeLivePosition = function(e, t) {
                        var i = this.config.liveSyncDuration !== undefined ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
                        return e + Math.max(0, t.totalduration - i)
                    }
                    ,
                    g.prototype._seekToStartPos = function() {
                        var e = this.media
                          , t = e.currentTime
                          , i = e.seeking ? t : this.startPosition;
                        t !== i && (p.logger.log("target start position not buffered, seek to buffered.start(0) " + i + " from current time " + t + " "),
                        e.currentTime = i)
                    }
                    ,
                    g.prototype._getAudioCodec = function(e) {
                        var t = this.config.defaultAudioCodec || e.audioCodec;
                        return this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"),
                        t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")),
                        t
                    }
                    ,
                    Object.defineProperty(g.prototype, "liveSyncPosition", {
                        get: function() {
                            return this._liveSyncPosition
                        },
                        set: function(e) {
                            this._liveSyncPosition = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    g
                }(g["default"]);
                t["default"] = b
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/subtitle-stream-controller.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/events.js")
              , o = i("./src/utils/logger.js")
              , a = i("./src/crypt/decrypter.js")
              , n = i("./src/task-loop.js")
              , l = window.performance
              , d = {
                STOPPED: "STOPPED",
                IDLE: "IDLE",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING"
            }
              , u = function(e) {
                function t(t) {
                    var i = e.call(this, t, s["default"].MEDIA_ATTACHED, s["default"].ERROR, s["default"].KEY_LOADED, s["default"].FRAG_LOADED, s["default"].SUBTITLE_TRACKS_UPDATED, s["default"].SUBTITLE_TRACK_SWITCH, s["default"].SUBTITLE_TRACK_LOADED, s["default"].SUBTITLE_FRAG_PROCESSED) || this;
                    return i.config = t.config,
                    i.vttFragSNsProcessed = {},
                    i.vttFragQueues = undefined,
                    i.currentlyProcessing = null,
                    i.state = d.STOPPED,
                    i.currentTrackId = -1,
                    i.decrypter = new a["default"](t,t.config),
                    i
                }
                return r(t, e),
                t.prototype.onHandlerDestroyed = function() {
                    this.state = d.STOPPED
                }
                ,
                t.prototype.clearVttFragQueues = function() {
                    var e = this;
                    this.vttFragQueues = {},
                    this.tracks.forEach(function(t) {
                        e.vttFragQueues[t.id] = []
                    })
                }
                ,
                t.prototype.nextFrag = function() {
                    if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
                        var e = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
                        this.fragCurrent = e,
                        this.hls.trigger(s["default"].FRAG_LOADING, {
                            frag: e
                        }),
                        this.state = d.FRAG_LOADING
                    }
                }
                ,
                t.prototype.onSubtitleFragProcessed = function(e) {
                    e.success && this.vttFragSNsProcessed[e.frag.trackId].push(e.frag.sn),
                    this.currentlyProcessing = null,
                    this.state = d.IDLE,
                    this.nextFrag()
                }
                ,
                t.prototype.onMediaAttached = function() {
                    this.state = d.IDLE
                }
                ,
                t.prototype.onError = function(e) {
                    var t = e.frag;
                    t && "subtitle" !== t.type || this.currentlyProcessing && (this.currentlyProcessing = null,
                    this.nextFrag())
                }
                ,
                t.prototype.doTick = function() {
                    var e = this;
                    switch (this.state) {
                    case d.IDLE:
                        var t = this.tracks
                          , i = this.currentTrackId
                          , r = this.vttFragSNsProcessed[i]
                          , a = this.vttFragQueues[i]
                          , n = this.currentlyProcessing ? this.currentlyProcessing.sn : -1
                          , l = function(e) {
                            return r.indexOf(e.sn) > -1
                        }
                          , u = function(e) {
                            return a.some(function(t) {
                                return t.sn === e.sn
                            })
                        };
                        if (!t)
                            break;
                        var c;
                        if (i < t.length && (c = t[i].details),
                        void 0 === c)
                            break;
                        c.fragments.forEach(function(t) {
                            l(t) || t.sn === n || u(t) || (t.encrypted ? (o.logger.log("Loading key for " + t.sn),
                            e.state = d.KEY_LOADING,
                            e.hls.trigger(s["default"].KEY_LOADING, {
                                frag: t
                            })) : (t.trackId = i,
                            a.push(t),
                            e.nextFrag()))
                        })
                    }
                }
                ,
                t.prototype.onSubtitleTracksUpdated = function(e) {
                    var t = this;
                    o.logger.log("subtitle tracks updated"),
                    this.tracks = e.subtitleTracks,
                    this.clearVttFragQueues(),
                    this.vttFragSNsProcessed = {},
                    this.tracks.forEach(function(e) {
                        t.vttFragSNsProcessed[e.id] = []
                    })
                }
                ,
                t.prototype.onSubtitleTrackSwitch = function(e) {
                    if (this.currentTrackId = e.id,
                    this.tracks && -1 !== this.currentTrackId) {
                        var t = this.tracks[this.currentTrackId];
                        t && t.details && this.tick()
                    }
                }
                ,
                t.prototype.onSubtitleTrackLoaded = function() {
                    this.tick()
                }
                ,
                t.prototype.onKeyLoaded = function() {
                    this.state === d.KEY_LOADING && (this.state = d.IDLE,
                    this.tick())
                }
                ,
                t.prototype.onFragLoaded = function(e) {
                    var t = this.fragCurrent
                      , i = e.frag.decryptdata
                      , r = e.frag
                      , o = this.hls;
                    if (this.state === d.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && null != i && null != i.key && "AES-128" === i.method) {
                        var a;
                        try {
                            a = l.now()
                        } catch (n) {
                            a = Date.now()
                        }
                        this.decrypter.decrypt(e.payload, i.key.buffer, i.iv.buffer, function(e) {
                            var t;
                            try {
                                t = l.now()
                            } catch (n) {
                                t = Date.now()
                            }
                            o.trigger(s["default"].FRAG_DECRYPTED, {
                                frag: r,
                                payload: e,
                                stats: {
                                    tstart: a,
                                    tdecrypt: t
                                }
                            })
                        })
                    }
                }
                ,
                t
            }(n["default"]);
            t["default"] = u
        },
        "./src/controller/subtitle-track-controller.js": function(e, t, i) {
            "use strict";
            function r(e) {
                for (var t = [], i = 0; i < e.length; i++)
                    "subtitles" === e[i].kind && t.push(e[i]);
                return t
            }
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i("./src/events.js")
              , a = i("./src/event-handler.js")
              , n = i("./src/utils/logger.js")
              , l = function(e) {
                function t(t) {
                    var i = e.call(this, t, o["default"].MEDIA_ATTACHED, o["default"].MEDIA_DETACHING, o["default"].MANIFEST_LOADING, o["default"].MANIFEST_LOADED, o["default"].SUBTITLE_TRACK_LOADED) || this;
                    return i.tracks = [],
                    i.trackId = -1,
                    i.media = null,
                    i.subtitleDisplay = !0,
                    i
                }
                return s(t, e),
                t.prototype._onTextTracksChanged = function() {
                    if (this.media) {
                        for (var e = -1, t = r(this.media.textTracks), i = 0; i < t.length; i++)
                            if ("hidden" === t[i].mode)
                                e = i;
                            else if ("showing" === t[i].mode) {
                                e = i;
                                break
                            }
                        this.subtitleTrack = e
                    }
                }
                ,
                t.prototype.destroy = function() {
                    a["default"].prototype.destroy.call(this)
                }
                ,
                t.prototype.onMediaAttached = function(e) {
                    var t = this;
                    this.media = e.media,
                    this.media && (this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack,
                    delete this.queuedDefaultTrack),
                    this.trackChangeListener = this._onTextTracksChanged.bind(this),
                    this.useTextTrackPolling = !(this.media.textTracks && "onchange"in this.media.textTracks),
                    this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
                        t.trackChangeListener()
                    }, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                }
                ,
                t.prototype.onMediaDetaching = function() {
                    this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener),
                    this.media = null)
                }
                ,
                t.prototype.onManifestLoading = function() {
                    this.tracks = [],
                    this.trackId = -1
                }
                ,
                t.prototype.onManifestLoaded = function(e) {
                    var t = this
                      , i = e.subtitles || [];
                    this.tracks = i,
                    this.trackId = -1,
                    this.hls.trigger(o["default"].SUBTITLE_TRACKS_UPDATED, {
                        subtitleTracks: i
                    }),
                    i.forEach(function(e) {
                        e["default"] && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
                    })
                }
                ,
                t.prototype.onTick = function() {
                    var e = this.trackId
                      , t = this.tracks[e];
                    if (t) {
                        var i = t.details;
                        i && !i.live || (n.logger.log("(re)loading playlist for subtitle track " + e),
                        this.hls.trigger(o["default"].SUBTITLE_TRACK_LOADING, {
                            url: t.url,
                            id: e
                        }))
                    }
                }
                ,
                t.prototype.onSubtitleTrackLoaded = function(e) {
                    var t = this;
                    e.id < this.tracks.length && (n.logger.log("subtitle track " + e.id + " loaded"),
                    this.tracks[e.id].details = e.details,
                    e.details.live && !this.timer && (this.timer = setInterval(function() {
                        t.onTick()
                    }, 1e3 * e.details.targetduration, this)),
                    !e.details.live && this.timer && this._stopTimer())
                }
                ,
                Object.defineProperty(t.prototype, "subtitleTracks", {
                    get: function() {
                        return this.tracks
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "subtitleTrack", {
                    get: function() {
                        return this.trackId
                    },
                    set: function(e) {
                        this.trackId !== e && (this._toggleTrackModes(e),
                        this.setSubtitleTrackInternal(e))
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.setSubtitleTrackInternal = function(e) {
                    var t = this
                      , i = t.hls
                      , r = t.tracks;
                    if (!("number" != typeof e || e < -1 || e >= r.length) && (this._stopTimer(),
                    this.trackId = e,
                    n.logger.log("switching to subtitle track " + e),
                    i.trigger(o["default"].SUBTITLE_TRACK_SWITCH, {
                        id: e
                    }),
                    -1 !== e)) {
                        var s = r[e]
                          , a = s.details;
                        a && !a.live || (n.logger.log("(re)loading playlist for subtitle track " + e),
                        i.trigger(o["default"].SUBTITLE_TRACK_LOADING, {
                            url: s.url,
                            id: e
                        }))
                    }
                }
                ,
                t.prototype._stopTimer = function() {
                    this.timer && (clearInterval(this.timer),
                    this.timer = null)
                }
                ,
                t.prototype._toggleTrackModes = function(e) {
                    var t = this
                      , i = t.media
                      , s = t.subtitleDisplay
                      , o = t.trackId;
                    if (i) {
                        var a = r(i.textTracks);
                        if (-1 === e)
                            [].slice.call(a).forEach(function(e) {
                                e.mode = "disabled"
                            });
                        else {
                            var n = a[o];
                            n && (n.mode = "disabled")
                        }
                        var l = a[e];
                        l && (l.mode = s ? "showing" : "hidden")
                    }
                }
                ,
                t
            }(a["default"]);
            t["default"] = l
        },
        "./src/controller/timeline-controller.js": function(e, t, i) {
            "use strict";
            function r(e, t) {
                return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
            }
            function s(e, t, i, r) {
                return Math.min(t, r) - Math.max(e, i)
            }
            var o = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = i("./src/events.js")
              , n = i("./src/event-handler.js")
              , l = i("./src/utils/cea-608-parser.js")
              , d = i("./src/utils/output-filter.js")
              , u = i("./src/utils/webvtt-parser.js")
              , c = i("./src/utils/logger.js")
              , h = i("./src/utils/texttrack-utils.js")
              , f = function(e) {
                function t(t) {
                    var i = e.call(this, t, a["default"].MEDIA_ATTACHING, a["default"].MEDIA_DETACHING, a["default"].FRAG_PARSING_USERDATA, a["default"].FRAG_DECRYPTED, a["default"].MANIFEST_LOADING, a["default"].MANIFEST_LOADED, a["default"].FRAG_LOADED, a["default"].LEVEL_SWITCHING, a["default"].INIT_PTS_FOUND) || this;
                    if (i.hls = t,
                    i.config = t.config,
                    i.enabled = !0,
                    i.Cues = t.config.cueHandler,
                    i.textTracks = [],
                    i.tracks = [],
                    i.unparsedVttFrags = [],
                    i.initPTS = undefined,
                    i.cueRanges = [],
                    i.captionsTracks = {},
                    i.captionsProperties = {
                        textTrack1: {
                            label: i.config.captionsTextTrack1Label,
                            languageCode: i.config.captionsTextTrack1LanguageCode
                        },
                        textTrack2: {
                            label: i.config.captionsTextTrack2Label,
                            languageCode: i.config.captionsTextTrack2LanguageCode
                        }
                    },
                    i.config.enableCEA708Captions) {
                        var r = new d["default"](i,"textTrack1")
                          , s = new d["default"](i,"textTrack2");
                        i.cea608Parser = new l["default"](0,r,s)
                    }
                    return i
                }
                return o(t, e),
                t.prototype.addCues = function(e, t, i, r) {
                    for (var o = this.cueRanges, a = !1, n = o.length; n--; ) {
                        var l = o[n]
                          , d = s(l[0], l[1], t, i);
                        if (d >= 0 && (l[0] = Math.min(l[0], t),
                        l[1] = Math.max(l[1], i),
                        a = !0,
                        d / (i - t) > .5))
                            return
                    }
                    a || o.push([t, i]),
                    this.Cues.newCue(this.captionsTracks[e], t, i, r)
                }
                ,
                t.prototype.onInitPtsFound = function(e) {
                    var t = this;
                    "undefined" == typeof this.initPTS && (this.initPTS = e.initPTS),
                    this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function(e) {
                        t.onFragLoaded(e)
                    }),
                    this.unparsedVttFrags = [])
                }
                ,
                t.prototype.getExistingTrack = function(e) {
                    var t = this.media;
                    if (t)
                        for (var i = 0; i < t.textTracks.length; i++) {
                            var r = t.textTracks[i];
                            if (r[e])
                                return r
                        }
                    return null
                }
                ,
                t.prototype.createCaptionsTrack = function(e) {
                    var t = this.captionsProperties[e]
                      , i = t.label
                      , r = t.languageCode
                      , s = this.captionsTracks;
                    if (!s[e]) {
                        var o = this.getExistingTrack(e);
                        if (o)
                            s[e] = o,
                            h.clearCurrentCues(s[e]),
                            h.sendAddTrackEvent(s[e], this.media);
                        else {
                            var a = this.createTextTrack("captions", i, r);
                            a && (a[e] = !0,
                            s[e] = a)
                        }
                    }
                }
                ,
                t.prototype.createTextTrack = function(e, t, i) {
                    var r = this.media;
                    if (r)
                        return r.addTextTrack(e, t, i)
                }
                ,
                t.prototype.destroy = function() {
                    n["default"].prototype.destroy.call(this)
                }
                ,
                t.prototype.onMediaAttaching = function(e) {
                    this.media = e.media,
                    this._cleanTracks()
                }
                ,
                t.prototype.onMediaDetaching = function() {
                    var e = this.captionsTracks;
                    Object.keys(e).forEach(function(t) {
                        h.clearCurrentCues(e[t]),
                        delete e[t]
                    })
                }
                ,
                t.prototype.onManifestLoading = function() {
                    this.lastSn = -1,
                    this.prevCC = -1,
                    this.vttCCs = {
                        ccOffset: 0,
                        presentationOffset: 0
                    },
                    this._cleanTracks()
                }
                ,
                t.prototype._cleanTracks = function() {
                    var e = this.media;
                    if (e) {
                        var t = e.textTracks;
                        if (t)
                            for (var i = 0; i < t.length; i++)
                                h.clearCurrentCues(t[i])
                    }
                }
                ,
                t.prototype.onManifestLoaded = function(e) {
                    var t = this;
                    if (this.textTracks = [],
                    this.unparsedVttFrags = this.unparsedVttFrags || [],
                    this.initPTS = undefined,
                    this.cueRanges = [],
                    this.config.enableWebVTT) {
                        this.tracks = e.subtitles || [];
                        var i = this.media ? this.media.textTracks : [];
                        this.tracks.forEach(function(e, s) {
                            var o;
                            if (s < i.length) {
                                var a = Object.values(i).find(function(t) {
                                    return r(t, e)
                                });
                                a && (o = a)
                            }
                            o || (o = t.createTextTrack("subtitles", e.name, e.lang)),
                            e["default"] ? o.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : o.mode = "disabled",
                            t.textTracks.push(o)
                        })
                    }
                }
                ,
                t.prototype.onLevelSwitching = function() {
                    this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
                }
                ,
                t.prototype.onFragLoaded = function(e) {
                    var t = e.frag
                      , i = e.payload;
                    if ("main" === t.type) {
                        var r = t.sn;
                        if (r !== this.lastSn + 1) {
                            var s = this.cea608Parser;
                            s && s.reset()
                        }
                        this.lastSn = r
                    } else if ("subtitle" === t.type)
                        if (i.byteLength) {
                            if ("undefined" == typeof this.initPTS)
                                return void this.unparsedVttFrags.push(e);
                            var o = t.decryptdata;
                            null != o && null != o.key && "AES-128" === o.method || this._parseVTTs(t, i)
                        } else
                            this.hls.trigger(a["default"].SUBTITLE_FRAG_PROCESSED, {
                                success: !1,
                                frag: t
                            })
                }
                ,
                t.prototype._parseVTTs = function(e, t) {
                    var i = this.vttCCs;
                    i[e.cc] || (i[e.cc] = {
                        start: e.start,
                        prevCC: this.prevCC,
                        "new": !0
                    },
                    this.prevCC = e.cc);
                    var r = this.textTracks
                      , s = this.hls;
                    u["default"].parse(t, this.initPTS, i, e.cc, function(t) {
                        var i = r[e.trackId];
                        if ("disabled" === i.mode)
                            return void s.trigger(a["default"].SUBTITLE_FRAG_PROCESSED, {
                                success: !1,
                                frag: e
                            });
                        t.forEach(function(e) {
                            if (!i.cues.getCueById(e.id))
                                try {
                                    i.addCue(e)
                                } catch (r) {
                                    var t = new window.TextTrackCue(e.startTime,e.endTime,e.text);
                                    t.id = e.id,
                                    i.addCue(t)
                                }
                        }),
                        s.trigger(a["default"].SUBTITLE_FRAG_PROCESSED, {
                            success: !0,
                            frag: e
                        })
                    }, function(t) {
                        c.logger.log("Failed to parse VTT cue: " + t),
                        s.trigger(a["default"].SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: e
                        })
                    })
                }
                ,
                t.prototype.onFragDecrypted = function(e) {
                    var t = e.payload
                      , i = e.frag;
                    if ("subtitle" === i.type) {
                        if ("undefined" == typeof this.initPTS)
                            return void this.unparsedVttFrags.push(e);
                        this._parseVTTs(i, t)
                    }
                }
                ,
                t.prototype.onFragParsingUserdata = function(e) {
                    if (this.enabled && this.config.enableCEA708Captions)
                        for (var t = 0; t < e.samples.length; t++) {
                            var i = this.extractCea608Data(e.samples[t].bytes);
                            this.cea608Parser.addData(e.samples[t].pts, i)
                        }
                }
                ,
                t.prototype.extractCea608Data = function(e) {
                    for (var t, i, r, s, o, a = 31 & e[0], n = 2, l = [], d = 0; d < a; d++)
                        t = e[n++],
                        i = 127 & e[n++],
                        r = 127 & e[n++],
                        s = 0 != (4 & t),
                        o = 3 & t,
                        0 === i && 0 === r || s && 0 === o && (l.push(i),
                        l.push(r));
                    return l
                }
                ,
                t
            }(n["default"]);
            t["default"] = f
        },
        "./src/crypt/aes-crypto.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    this.subtle = e,
                    this.aesIV = t
                }
                return e.prototype.decrypt = function(e, t) {
                    return this.subtle.decrypt({
                        name: "AES-CBC",
                        iv: this.aesIV
                    }, t, e)
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/crypt/aes-decryptor.js": function(e, t, i) {
            "use strict";
            function r(e) {
                var t = e.byteLength
                  , i = t && new DataView(e).getUint8(t - 1);
                return i ? e.slice(0, t - i) : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.removePadding = r;
            var s = function() {
                function e() {
                    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                    this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                    this.sBox = new Uint32Array(256),
                    this.invSBox = new Uint32Array(256),
                    this.key = new Uint32Array(0),
                    this.initTable()
                }
                return e.prototype.uint8ArrayToUint32Array_ = function(e) {
                    for (var t = new DataView(e), i = new Uint32Array(4), r = 0; r < 4; r++)
                        i[r] = t.getUint32(4 * r);
                    return i
                }
                ,
                e.prototype.initTable = function() {
                    var e = this.sBox
                      , t = this.invSBox
                      , i = this.subMix
                      , r = i[0]
                      , s = i[1]
                      , o = i[2]
                      , a = i[3]
                      , n = this.invSubMix
                      , l = n[0]
                      , d = n[1]
                      , u = n[2]
                      , c = n[3]
                      , h = new Uint32Array(256)
                      , f = 0
                      , p = 0
                      , v = 0;
                    for (v = 0; v < 256; v++)
                        h[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                    for (v = 0; v < 256; v++) {
                        var g = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                        g = g >>> 8 ^ 255 & g ^ 99,
                        e[f] = g,
                        t[g] = f;
                        var m = h[f]
                          , y = h[m]
                          , b = h[y]
                          , _ = 257 * h[g] ^ 16843008 * g;
                        r[f] = _ << 24 | _ >>> 8,
                        s[f] = _ << 16 | _ >>> 16,
                        o[f] = _ << 8 | _ >>> 24,
                        a[f] = _,
                        _ = 16843009 * b ^ 65537 * y ^ 257 * m ^ 16843008 * f,
                        l[g] = _ << 24 | _ >>> 8,
                        d[g] = _ << 16 | _ >>> 16,
                        u[g] = _ << 8 | _ >>> 24,
                        c[g] = _,
                        f ? (f = m ^ h[h[h[b ^ m]]],
                        p ^= h[h[p]]) : f = p = 1
                    }
                }
                ,
                e.prototype.expandKey = function(e) {
                    for (var t = this.uint8ArrayToUint32Array_(e), i = !0, r = 0; r < t.length && i; )
                        i = t[r] === this.key[r],
                        r++;
                    if (!i) {
                        this.key = t;
                        var s = this.keySize = t.length;
                        if (4 !== s && 6 !== s && 8 !== s)
                            throw new Error("Invalid aes key size=" + s);
                        var o, a, n, l, d = this.ksRows = 4 * (s + 6 + 1), u = this.keySchedule = new Uint32Array(d), c = this.invKeySchedule = new Uint32Array(d), h = this.sBox, f = this.rcon, p = this.invSubMix, v = p[0], g = p[1], m = p[2], y = p[3];
                        for (o = 0; o < d; o++)
                            o < s ? n = u[o] = t[o] : (l = n,
                            o % s == 0 ? (l = l << 8 | l >>> 24,
                            l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l],
                            l ^= f[o / s | 0] << 24) : s > 6 && o % s == 4 && (l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l]),
                            u[o] = n = (u[o - s] ^ l) >>> 0);
                        for (a = 0; a < d; a++)
                            o = d - a,
                            l = 3 & a ? u[o] : u[o - 4],
                            c[a] = a < 4 || o <= 4 ? l : v[h[l >>> 24]] ^ g[h[l >>> 16 & 255]] ^ m[h[l >>> 8 & 255]] ^ y[h[255 & l]],
                            c[a] = c[a] >>> 0
                    }
                }
                ,
                e.prototype.networkToHostOrderSwap = function(e) {
                    return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                }
                ,
                e.prototype.decrypt = function(e, t, i, s) {
                    for (var o, a, n, l, d, u, c, h, f, p, v, g, m, y, b = this.keySize + 6, _ = this.invKeySchedule, E = this.invSBox, w = this.invSubMix, k = w[0], T = w[1], S = w[2], A = w[3], x = this.uint8ArrayToUint32Array_(i), L = x[0], P = x[1], R = x[2], C = x[3], D = new Int32Array(e), I = new Int32Array(D.length), O = this.networkToHostOrderSwap; t < D.length; ) {
                        for (f = O(D[t]),
                        p = O(D[t + 1]),
                        v = O(D[t + 2]),
                        g = O(D[t + 3]),
                        d = f ^ _[0],
                        u = g ^ _[1],
                        c = v ^ _[2],
                        h = p ^ _[3],
                        m = 4,
                        y = 1; y < b; y++)
                            o = k[d >>> 24] ^ T[u >> 16 & 255] ^ S[c >> 8 & 255] ^ A[255 & h] ^ _[m],
                            a = k[u >>> 24] ^ T[c >> 16 & 255] ^ S[h >> 8 & 255] ^ A[255 & d] ^ _[m + 1],
                            n = k[c >>> 24] ^ T[h >> 16 & 255] ^ S[d >> 8 & 255] ^ A[255 & u] ^ _[m + 2],
                            l = k[h >>> 24] ^ T[d >> 16 & 255] ^ S[u >> 8 & 255] ^ A[255 & c] ^ _[m + 3],
                            d = o,
                            u = a,
                            c = n,
                            h = l,
                            m += 4;
                        o = E[d >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[c >> 8 & 255] << 8 ^ E[255 & h] ^ _[m],
                        a = E[u >>> 24] << 24 ^ E[c >> 16 & 255] << 16 ^ E[h >> 8 & 255] << 8 ^ E[255 & d] ^ _[m + 1],
                        n = E[c >>> 24] << 24 ^ E[h >> 16 & 255] << 16 ^ E[d >> 8 & 255] << 8 ^ E[255 & u] ^ _[m + 2],
                        l = E[h >>> 24] << 24 ^ E[d >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & c] ^ _[m + 3],
                        m += 3,
                        I[t] = O(o ^ L),
                        I[t + 1] = O(l ^ P),
                        I[t + 2] = O(n ^ R),
                        I[t + 3] = O(a ^ C),
                        L = f,
                        P = p,
                        R = v,
                        C = g,
                        t += 4
                    }
                    return s ? r(I.buffer) : I.buffer
                }
                ,
                e.prototype.destroy = function() {
                    this.key = undefined,
                    this.keySize = undefined,
                    this.ksRows = undefined,
                    this.sBox = undefined,
                    this.invSBox = undefined,
                    this.subMix = undefined,
                    this.invSubMix = undefined,
                    this.keySchedule = undefined,
                    this.invKeySchedule = undefined,
                    this.rcon = undefined
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/crypt/decrypter.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/crypt/aes-crypto.js")
              , s = i("./src/crypt/fast-aes-key.js")
              , o = i("./src/crypt/aes-decryptor.js")
              , a = i("./src/errors.js")
              , n = i("./src/utils/logger.js")
              , l = i("./src/events.js")
              , d = i("./src/utils/get-self-scope.js")
              , u = d.getSelfScope()
              , c = function() {
                function e(e, t, i) {
                    var r = (void 0 === i ? {} : i).removePKCS7Padding
                      , s = void 0 === r || r;
                    if (this.logEnabled = !0,
                    this.observer = e,
                    this.config = t,
                    this.removePKCS7Padding = s,
                    s)
                        try {
                            var o = u.crypto;
                            o && (this.subtle = o.subtle || o.webkitSubtle)
                        } catch (a) {}
                    this.disableWebCrypto = !this.subtle
                }
                return e.prototype.isSync = function() {
                    return this.disableWebCrypto && this.config.enableSoftwareAES
                }
                ,
                e.prototype.decrypt = function(e, t, i, a) {
                    var l = this;
                    if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                        this.logEnabled && (n.logger.log("JS AES decrypt"),
                        this.logEnabled = !1);
                        var d = this.decryptor;
                        d || (this.decryptor = d = new o["default"]),
                        d.expandKey(t),
                        a(d.decrypt(e, 0, i, this.removePKCS7Padding))
                    } else {
                        this.logEnabled && (n.logger.log("WebCrypto AES decrypt"),
                        this.logEnabled = !1);
                        var u = this.subtle;
                        this.key !== t && (this.key = t,
                        this.fastAesKey = new s["default"](u,t)),
                        this.fastAesKey.expandKey().then(function(s) {
                            new r["default"](u,i).decrypt(e, s)["catch"](function(r) {
                                l.onWebCryptoError(r, e, t, i, a)
                            }).then(function(e) {
                                a(e)
                            })
                        })["catch"](function(r) {
                            l.onWebCryptoError(r, e, t, i, a)
                        })
                    }
                }
                ,
                e.prototype.onWebCryptoError = function(e, t, i, r, s) {
                    this.config.enableSoftwareAES ? (n.logger.log("WebCrypto Error, disable WebCrypto API"),
                    this.disableWebCrypto = !0,
                    this.logEnabled = !0,
                    this.decrypt(t, i, r, s)) : (n.logger.error("decrypting error : " + e.message),
                    this.observer.trigger(l["default"].ERROR, {
                        type: a.ErrorTypes.MEDIA_ERROR,
                        details: a.ErrorDetails.FRAG_DECRYPT_ERROR,
                        fatal: !0,
                        reason: e.message
                    }))
                }
                ,
                e.prototype.destroy = function() {
                    var e = this.decryptor;
                    e && (e.destroy(),
                    this.decryptor = undefined)
                }
                ,
                e
            }();
            t["default"] = c
        },
        "./src/crypt/fast-aes-key.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    this.subtle = e,
                    this.key = t
                }
                return e.prototype.expandKey = function() {
                    return this.subtle.importKey("raw", this.key, {
                        name: "AES-CBC"
                    }, !1, ["encrypt", "decrypt"])
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/demux/aacdemuxer.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/demux/adts.js")
                  , s = i("./src/utils/logger.js")
                  , o = i("./src/demux/id3.js")
                  , a = function() {
                    function t(e, t, i) {
                        this.observer = e,
                        this.config = i,
                        this.remuxer = t
                    }
                    return t.prototype.resetInitSegment = function(e, t, i, r) {
                        this._audioTrack = {
                            container: "audio/adts",
                            type: "audio",
                            id: 0,
                            sequenceNumber: 0,
                            isAAC: !0,
                            samples: [],
                            len: 0,
                            manifestCodec: t,
                            duration: r,
                            inputTimeScale: 9e4
                        }
                    }
                    ,
                    t.prototype.resetTimeStamp = function() {}
                    ,
                    t.probe = function(e) {
                        if (!e)
                            return !1;
                        for (var t = o["default"].getID3Data(e, 0) || [], i = t.length, a = e.length; i < a; i++)
                            if (r.probe(e, i))
                                return s.logger.log("ADTS sync word found !"),
                                !0;
                        return !1
                    }
                    ,
                    t.prototype.append = function(t, i, a, n) {
                        for (var l = this._audioTrack, d = o["default"].getID3Data(t, 0) || [], u = o["default"].getTimeStamp(d), c = e.isFinite(u) ? 90 * u : 9e4 * i, h = 0, f = c, p = t.length, v = d.length, g = [{
                            pts: f,
                            dts: f,
                            data: d
                        }]; v < p - 1; )
                            if (r.isHeader(t, v) && v + 5 < p) {
                                r.initTrackConfig(l, this.observer, t, v, l.manifestCodec);
                                var m = r.appendFrame(l, t, v, c, h);
                                if (!m) {
                                    s.logger.log("Unable to parse AAC frame");
                                    break
                                }
                                v += m.length,
                                f = m.sample.pts,
                                h++
                            } else
                                o["default"].isHeader(t, v) ? (d = o["default"].getID3Data(t, v),
                                g.push({
                                    pts: f,
                                    dts: f,
                                    data: d
                                }),
                                v += d.length) : v++;
                        this.remuxer.remux(l, {
                            samples: []
                        }, {
                            samples: g,
                            inputTimeScale: 9e4
                        }, {
                            samples: []
                        }, i, a, n)
                    }
                    ,
                    t.prototype.destroy = function() {}
                    ,
                    t
                }();
                t["default"] = a
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/demux/adts.js": function(e, t, i) {
            "use strict";
            function r(e, t, i, r) {
                var s, o, a, n, l, d = navigator.userAgent.toLowerCase(), u = r, c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                return s = 1 + ((192 & t[i + 2]) >>> 6),
                (o = (60 & t[i + 2]) >>> 2) > c.length - 1 ? void e.trigger(v["default"].ERROR, {
                    type: p.ErrorTypes.MEDIA_ERROR,
                    details: p.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !0,
                    reason: "invalid ADTS sampling index:" + o
                }) : (n = (1 & t[i + 2]) << 2,
                n |= (192 & t[i + 3]) >>> 6,
                f.logger.log("manifest codec:" + r + ",ADTS data:type:" + s + ",sampleingIndex:" + o + "[" + c[o] + "Hz],channelConfig:" + n),
                /firefox/i.test(d) ? o >= 6 ? (s = 5,
                l = new Array(4),
                a = o - 3) : (s = 2,
                l = new Array(2),
                a = o) : -1 !== d.indexOf("android") ? (s = 2,
                l = new Array(2),
                a = o) : (s = 5,
                l = new Array(4),
                r && (-1 !== r.indexOf("mp4a.40.29") || -1 !== r.indexOf("mp4a.40.5")) || !r && o >= 6 ? a = o - 3 : ((r && -1 !== r.indexOf("mp4a.40.2") && (o >= 6 && 1 === n || /vivaldi/i.test(d)) || !r && 1 === n) && (s = 2,
                l = new Array(2)),
                a = o)),
                l[0] = s << 3,
                l[0] |= (14 & o) >> 1,
                l[1] |= (1 & o) << 7,
                l[1] |= n << 3,
                5 === s && (l[1] |= (14 & a) >> 1,
                l[2] = (1 & a) << 7,
                l[2] |= 8,
                l[3] = 0),
                {
                    config: l,
                    samplerate: c[o],
                    channelCount: n,
                    codec: "mp4a.40." + s,
                    manifestCodec: u
                })
            }
            function s(e, t) {
                return 255 === e[t] && 240 == (246 & e[t + 1])
            }
            function o(e, t) {
                return 1 & e[t + 1] ? 7 : 9
            }
            function a(e, t) {
                return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
            }
            function n(e, t) {
                return !!(t + 1 < e.length && s(e, t))
            }
            function l(e, t) {
                if (t + 1 < e.length && s(e, t)) {
                    var i = o(e, t)
                      , r = i;
                    t + 5 < e.length && (r = a(e, t));
                    var n = t + r;
                    if (n === e.length || n + 1 < e.length && s(e, n))
                        return !0
                }
                return !1
            }
            function d(e, t, i, s, o) {
                if (!e.samplerate) {
                    var a = r(t, i, s, o);
                    e.config = a.config,
                    e.samplerate = a.samplerate,
                    e.channelCount = a.channelCount,
                    e.codec = a.codec,
                    e.manifestCodec = a.manifestCodec,
                    f.logger.log("parsed codec:" + e.codec + ",rate:" + a.samplerate + ",nb channel:" + a.channelCount)
                }
            }
            function u(e) {
                return 9216e4 / e
            }
            function c(e, t, i, r, s) {
                var n, l, d, u = e.length;
                return n = o(e, t),
                l = a(e, t),
                l -= n,
                l > 0 && t + n + l <= u ? (d = i + r * s,
                {
                    headerLength: n,
                    frameLength: l,
                    stamp: d
                }) : undefined
            }
            function h(e, t, i, r, s) {
                var o = u(e.samplerate)
                  , a = c(t, i, r, s, o);
                if (a) {
                    var n = a.stamp
                      , l = a.headerLength
                      , d = a.frameLength
                      , h = {
                        unit: t.subarray(i + l, i + l + d),
                        pts: n,
                        dts: n
                    };
                    return e.samples.push(h),
                    e.len += d,
                    {
                        sample: h,
                        length: d + l
                    }
                }
                return undefined
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = i("./src/utils/logger.js")
              , p = i("./src/errors.js")
              , v = i("./src/events.js");
            t.getAudioConfig = r,
            t.isHeaderPattern = s,
            t.getHeaderLength = o,
            t.getFullFrameLength = a,
            t.isHeader = n,
            t.probe = l,
            t.initTrackConfig = d,
            t.getFrameDuration = u,
            t.parseFrameHeader = c,
            t.appendFrame = h
        },
        "./src/demux/demuxer-inline.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, s = i("./src/events.js"), o = i("./src/errors.js"), a = i("./src/crypt/decrypter.js"), n = i("./src/demux/aacdemuxer.js"), l = i("./src/demux/mp4demuxer.js"), d = i("./src/demux/tsdemuxer.js"), u = i("./src/demux/mp3demuxer.js"), c = i("./src/remux/mp4-remuxer.js"), h = i("./src/remux/passthrough-remuxer.js"), f = i("./src/utils/get-self-scope.js"), p = i("./src/utils/logger.js"), v = f.getSelfScope();
            try {
                r = v.performance.now.bind(v.performance)
            } catch (m) {
                p.logger.debug("Unable to use Performance API on this environment"),
                r = v.Date.now
            }
            var g = function() {
                function e(e, t, i, r) {
                    this.observer = e,
                    this.typeSupported = t,
                    this.config = i,
                    this.vendor = r
                }
                return e.prototype.destroy = function() {
                    var e = this.demuxer;
                    e && e.destroy()
                }
                ,
                e.prototype.push = function(e, t, i, o, n, l, d, u, c, h, f, p) {
                    var v = this;
                    if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
                        var g = this.decrypter;
                        null == g && (g = this.decrypter = new a["default"](this.observer,this.config));
                        var m = r();
                        g.decrypt(e, t.key.buffer, t.iv.buffer, function(e) {
                            var a = r();
                            v.observer.trigger(s["default"].FRAG_DECRYPTED, {
                                stats: {
                                    tstart: m,
                                    tdecrypt: a
                                }
                            }),
                            v.pushDecrypted(new Uint8Array(e), t, new Uint8Array(i), o, n, l, d, u, c, h, f, p)
                        })
                    } else
                        this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(i), o, n, l, d, u, c, h, f, p)
                }
                ,
                e.prototype.pushDecrypted = function(e, t, i, r, a, f, p, v, g, m, y, b) {
                    var _ = this.demuxer;
                    if (!_ || (p || v) && !this.probe(e)) {
                        for (var E = this.observer, w = this.typeSupported, k = this.config, T = [{
                            demux: d["default"],
                            remux: c["default"]
                        }, {
                            demux: l["default"],
                            remux: h["default"]
                        }, {
                            demux: n["default"],
                            remux: c["default"]
                        }, {
                            demux: u["default"],
                            remux: c["default"]
                        }], S = 0, A = T.length; S < A; S++) {
                            var x = T[S]
                              , L = x.demux.probe;
                            if (L(e)) {
                                var P = this.remuxer = new x.remux(E,k,w,this.vendor);
                                _ = new x.demux(E,P,k,w),
                                this.probe = L;
                                break
                            }
                        }
                        if (!_)
                            return void E.trigger(s["default"].ERROR, {
                                type: o.ErrorTypes.MEDIA_ERROR,
                                details: o.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !0,
                                reason: "no demux matching with content found"
                            });
                        this.demuxer = _
                    }
                    var R = this.remuxer;
                    (p || v) && (_.resetInitSegment(i, r, a, m),
                    R.resetInitSegment()),
                    p && (_.resetTimeStamp(b),
                    R.resetTimeStamp(b)),
                    "function" == typeof _.setDecryptData && _.setDecryptData(t),
                    _.append(e, f, g, y)
                }
                ,
                e
            }();
            t["default"] = g
        },
        "./src/demux/demuxer-worker.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/demux/demuxer-inline.js")
              , s = i("./src/events.js")
              , o = i("./src/utils/logger.js")
              , a = i("./node_modules/node-libs-browser/node_modules/events/events.js")
              , n = function(e) {
                var t = new a.EventEmitter;
                t.trigger = function(e) {
                    for (var i = [], r = 1; r < arguments.length; r++)
                        i[r - 1] = arguments[r];
                    t.emit.apply(t, [e, e].concat(i))
                }
                ,
                t.off = function(e) {
                    for (var i = [], r = 1; r < arguments.length; r++)
                        i[r - 1] = arguments[r];
                    t.removeListener.apply(t, [e].concat(i))
                }
                ;
                var i = function(t, i) {
                    e.postMessage({
                        event: t,
                        data: i
                    })
                };
                e.addEventListener("message", function(s) {
                    var a = s.data;
                    switch (a.cmd) {
                    case "init":
                        var n = JSON.parse(a.config);
                        e.demuxer = new r["default"](t,a.typeSupported,n,a.vendor),
                        o.enableLogs(n.debug),
                        i("init", null);
                        break;
                    case "demux":
                        e.demuxer.push(a.data, a.decryptdata, a.initSegment, a.audioCodec, a.videoCodec, a.timeOffset, a.discontinuity, a.trackSwitch, a.contiguous, a.duration, a.accurateTimeOffset, a.defaultInitPTS)
                    }
                }),
                t.on(s["default"].FRAG_DECRYPTED, i),
                t.on(s["default"].FRAG_PARSING_INIT_SEGMENT, i),
                t.on(s["default"].FRAG_PARSED, i),
                t.on(s["default"].ERROR, i),
                t.on(s["default"].FRAG_PARSING_METADATA, i),
                t.on(s["default"].FRAG_PARSING_USERDATA, i),
                t.on(s["default"].INIT_PTS_FOUND, i),
                t.on(s["default"].FRAG_PARSING_DATA, function(t, i) {
                    var r = []
                      , s = {
                        event: t,
                        data: i
                    };
                    i.data1 && (s.data1 = i.data1.buffer,
                    r.push(i.data1.buffer),
                    delete i.data1),
                    i.data2 && (s.data2 = i.data2.buffer,
                    r.push(i.data2.buffer),
                    delete i.data2),
                    e.postMessage(s, r)
                })
            };
            t["default"] = n
        },
        "./src/demux/demuxer.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./node_modules/webworkify-webpack/index.js")
                  , s = i("./src/events.js")
                  , o = i("./src/demux/demuxer-inline.js")
                  , a = i("./src/utils/logger.js")
                  , n = i("./src/errors.js")
                  , l = i("./src/utils/mediasource-helper.js")
                  , d = i("./src/utils/get-self-scope.js")
                  , u = i("./src/observer.js")
                  , c = d.getSelfScope()
                  , h = l.getMediaSource()
                  , f = function() {
                    function t(e, t) {
                        var i = this;
                        this.hls = e,
                        this.id = t;
                        var l = this.observer = new u.Observer
                          , d = e.config
                          , f = function(t, r) {
                            r = r || {},
                            r.frag = i.frag,
                            r.id = i.id,
                            e.trigger(t, r)
                        };
                        l.on(s["default"].FRAG_DECRYPTED, f),
                        l.on(s["default"].FRAG_PARSING_INIT_SEGMENT, f),
                        l.on(s["default"].FRAG_PARSING_DATA, f),
                        l.on(s["default"].FRAG_PARSED, f),
                        l.on(s["default"].ERROR, f),
                        l.on(s["default"].FRAG_PARSING_METADATA, f),
                        l.on(s["default"].FRAG_PARSING_USERDATA, f),
                        l.on(s["default"].INIT_PTS_FOUND, f);
                        var p = {
                            mp4: h.isTypeSupported("video/mp4"),
                            mpeg: h.isTypeSupported("audio/mpeg"),
                            mp3: h.isTypeSupported('audio/mp4; codecs="mp3"')
                        }
                          , v = navigator.vendor;
                        if (d.enableWorker && "undefined" != typeof Worker) {
                            a.logger.log("demuxing in webworker");
                            var g = void 0;
                            try {
                                g = this.w = r("./src/demux/demuxer-worker.js"),
                                this.onwmsg = this.onWorkerMessage.bind(this),
                                g.addEventListener("message", this.onwmsg),
                                g.onerror = function(t) {
                                    e.trigger(s["default"].ERROR, {
                                        type: n.ErrorTypes.OTHER_ERROR,
                                        details: n.ErrorDetails.INTERNAL_EXCEPTION,
                                        fatal: !0,
                                        event: "demuxerWorker",
                                        err: {
                                            message: t.message + " (" + t.filename + ":" + t.lineno + ")"
                                        }
                                    })
                                }
                                ,
                                g.postMessage({
                                    cmd: "init",
                                    typeSupported: p,
                                    vendor: v,
                                    id: t,
                                    config: JSON.stringify(d)
                                })
                            } catch (m) {
                                a.logger.warn("Error in worker:", m),
                                a.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),
                                g && c.URL.revokeObjectURL(g.objectURL),
                                this.demuxer = new o["default"](l,p,d,v),
                                this.w = undefined
                            }
                        } else
                            this.demuxer = new o["default"](l,p,d,v)
                    }
                    return t.prototype.destroy = function() {
                        var e = this.w;
                        if (e)
                            e.removeEventListener("message", this.onwmsg),
                            e.terminate(),
                            this.w = null;
                        else {
                            var t = this.demuxer;
                            t && (t.destroy(),
                            this.demuxer = null)
                        }
                        var i = this.observer;
                        i && (i.removeAllListeners(),
                        this.observer = null)
                    }
                    ,
                    t.prototype.push = function(t, i, r, s, o, n, l, d) {
                        var u = this.w
                          , c = e.isFinite(o.startDTS) ? o.startDTS : o.start
                          , h = o.decryptdata
                          , f = this.frag
                          , p = !(f && o.cc === f.cc)
                          , v = !(f && o.level === f.level)
                          , g = f && o.sn === f.sn + 1
                          , m = !v && g;
                        if (p && a.logger.log(this.id + ":discontinuity detected"),
                        v && a.logger.log(this.id + ":switch detected"),
                        this.frag = o,
                        u)
                            u.postMessage({
                                cmd: "demux",
                                data: t,
                                decryptdata: h,
                                initSegment: i,
                                audioCodec: r,
                                videoCodec: s,
                                timeOffset: c,
                                discontinuity: p,
                                trackSwitch: v,
                                contiguous: m,
                                duration: n,
                                accurateTimeOffset: l,
                                defaultInitPTS: d
                            }, t instanceof ArrayBuffer ? [t] : []);
                        else {
                            var y = this.demuxer;
                            y && y.push(t, h, i, r, s, c, p, v, m, n, l, d)
                        }
                    }
                    ,
                    t.prototype.onWorkerMessage = function(e) {
                        var t = e.data
                          , i = this.hls;
                        switch (t.event) {
                        case "init":
                            c.URL.revokeObjectURL(this.w.objectURL);
                            break;
                        case s["default"].FRAG_PARSING_DATA:
                            t.data.data1 = new Uint8Array(t.data1),
                            t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                        default:
                            t.data = t.data || {},
                            t.data.frag = this.frag,
                            t.data.id = this.id,
                            i.trigger(t.event, t.data)
                        }
                    }
                    ,
                    t
                }();
                t["default"] = f
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/demux/exp-golomb.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/utils/logger.js")
              , s = function() {
                function e(e) {
                    this.data = e,
                    this.bytesAvailable = e.byteLength,
                    this.word = 0,
                    this.bitsAvailable = 0
                }
                return e.prototype.loadWord = function() {
                    var e = this.data
                      , t = this.bytesAvailable
                      , i = e.byteLength - t
                      , r = new Uint8Array(4)
                      , s = Math.min(4, t);
                    if (0 === s)
                        throw new Error("no bytes available");
                    r.set(e.subarray(i, i + s)),
                    this.word = new DataView(r.buffer).getUint32(0),
                    this.bitsAvailable = 8 * s,
                    this.bytesAvailable -= s
                }
                ,
                e.prototype.skipBits = function(e) {
                    var t;
                    this.bitsAvailable > e ? (this.word <<= e,
                    this.bitsAvailable -= e) : (e -= this.bitsAvailable,
                    t = e >> 3,
                    e -= t >> 3,
                    this.bytesAvailable -= t,
                    this.loadWord(),
                    this.word <<= e,
                    this.bitsAvailable -= e)
                }
                ,
                e.prototype.readBits = function(e) {
                    var t = Math.min(this.bitsAvailable, e)
                      , i = this.word >>> 32 - t;
                    return e > 32 && r.logger.error("Cannot read more than 32 bits at a time"),
                    this.bitsAvailable -= t,
                    this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(),
                    t = e - t,
                    t > 0 && this.bitsAvailable ? i << t | this.readBits(t) : i
                }
                ,
                e.prototype.skipLZ = function() {
                    var e;
                    for (e = 0; e < this.bitsAvailable; ++e)
                        if (0 != (this.word & 2147483648 >>> e))
                            return this.word <<= e,
                            this.bitsAvailable -= e,
                            e;
                    return this.loadWord(),
                    e + this.skipLZ()
                }
                ,
                e.prototype.skipUEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }
                ,
                e.prototype.skipEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }
                ,
                e.prototype.readUEG = function() {
                    var e = this.skipLZ();
                    return this.readBits(e + 1) - 1
                }
                ,
                e.prototype.readEG = function() {
                    var e = this.readUEG();
                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                }
                ,
                e.prototype.readBoolean = function() {
                    return 1 === this.readBits(1)
                }
                ,
                e.prototype.readUByte = function() {
                    return this.readBits(8)
                }
                ,
                e.prototype.readUShort = function() {
                    return this.readBits(16)
                }
                ,
                e.prototype.readUInt = function() {
                    return this.readBits(32)
                }
                ,
                e.prototype.skipScalingList = function(e) {
                    var t, i, r = 8, s = 8;
                    for (t = 0; t < e; t++)
                        0 !== s && (i = this.readEG(),
                        s = (r + i + 256) % 256),
                        r = 0 === s ? r : s
                }
                ,
                e.prototype.readSPS = function() {
                    var e, t, i, r, s, o, a, n = 0, l = 0, d = 0, u = 0, c = this.readUByte.bind(this), h = this.readBits.bind(this), f = this.readUEG.bind(this), p = this.readBoolean.bind(this), v = this.skipBits.bind(this), g = this.skipEG.bind(this), m = this.skipUEG.bind(this), y = this.skipScalingList.bind(this);
                    if (c(),
                    e = c(),
                    h(5),
                    v(3),
                    c(),
                    m(),
                    100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                        var b = f();
                        if (3 === b && v(1),
                        m(),
                        m(),
                        v(1),
                        p())
                            for (o = 3 !== b ? 8 : 12,
                            a = 0; a < o; a++)
                                p() && y(a < 6 ? 16 : 64)
                    }
                    m();
                    var _ = f();
                    if (0 === _)
                        f();
                    else if (1 === _)
                        for (v(1),
                        g(),
                        g(),
                        t = f(),
                        a = 0; a < t; a++)
                            g();
                    m(),
                    v(1),
                    i = f(),
                    r = f(),
                    s = h(1),
                    0 === s && v(1),
                    v(1),
                    p() && (n = f(),
                    l = f(),
                    d = f(),
                    u = f());
                    var E = [1, 1];
                    if (p() && p()) {
                        switch (c()) {
                        case 1:
                            E = [1, 1];
                            break;
                        case 2:
                            E = [12, 11];
                            break;
                        case 3:
                            E = [10, 11];
                            break;
                        case 4:
                            E = [16, 11];
                            break;
                        case 5:
                            E = [40, 33];
                            break;
                        case 6:
                            E = [24, 11];
                            break;
                        case 7:
                            E = [20, 11];
                            break;
                        case 8:
                            E = [32, 11];
                            break;
                        case 9:
                            E = [80, 33];
                            break;
                        case 10:
                            E = [18, 11];
                            break;
                        case 11:
                            E = [15, 11];
                            break;
                        case 12:
                            E = [64, 33];
                            break;
                        case 13:
                            E = [160, 99];
                            break;
                        case 14:
                            E = [4, 3];
                            break;
                        case 15:
                            E = [3, 2];
                            break;
                        case 16:
                            E = [2, 1];
                            break;
                        case 255:
                            E = [c() << 8 | c(), c() << 8 | c()]
                        }
                    }
                    return {
                        width: Math.ceil(16 * (i + 1) - 2 * n - 2 * l),
                        height: (2 - s) * (r + 1) * 16 - (s ? 2 : 4) * (d + u),
                        pixelRatio: E
                    }
                }
                ,
                e.prototype.readSliceType = function() {
                    return this.readUByte(),
                    this.readUEG(),
                    this.readUEG()
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/demux/id3.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e() {}
                return e.isHeader = function(e, t) {
                    return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                }
                ,
                e.isFooter = function(e, t) {
                    return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                }
                ,
                e.getID3Data = function(t, i) {
                    for (var r = i, s = 0; e.isHeader(t, i); ) {
                        s += 10;
                        s += e._readSize(t, i + 6),
                        e.isFooter(t, i + 10) && (s += 10),
                        i += s
                    }
                    return s > 0 ? t.subarray(r, r + s) : undefined
                }
                ,
                e._readSize = function(e, t) {
                    var i = 0;
                    return i = (127 & e[t]) << 21,
                    i |= (127 & e[t + 1]) << 14,
                    i |= (127 & e[t + 2]) << 7,
                    i |= 127 & e[t + 3]
                }
                ,
                e.getTimeStamp = function(t) {
                    for (var i = e.getID3Frames(t), r = 0; r < i.length; r++) {
                        var s = i[r];
                        if (e.isTimeStampFrame(s))
                            return e._readTimeStamp(s)
                    }
                    return undefined
                }
                ,
                e.isTimeStampFrame = function(e) {
                    return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
                }
                ,
                e._getFrameData = function(t) {
                    var i = String.fromCharCode(t[0], t[1], t[2], t[3])
                      , r = e._readSize(t, 4);
                    return {
                        type: i,
                        size: r,
                        data: t.subarray(10, 10 + r)
                    }
                }
                ,
                e.getID3Frames = function(t) {
                    for (var i = 0, r = []; e.isHeader(t, i); ) {
                        var s = e._readSize(t, i + 6);
                        i += 10;
                        for (var o = i + s; i + 8 < o; ) {
                            var a = e._getFrameData(t.subarray(i))
                              , n = e._decodeFrame(a);
                            n && r.push(n),
                            i += a.size + 10
                        }
                        e.isFooter(t, i) && (i += 10)
                    }
                    return r
                }
                ,
                e._decodeFrame = function(t) {
                    return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : undefined
                }
                ,
                e._readTimeStamp = function(e) {
                    if (8 === e.data.byteLength) {
                        var t = new Uint8Array(e.data)
                          , i = 1 & t[3]
                          , r = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                        return r /= 45,
                        i && (r += 47721858.84),
                        Math.round(r)
                    }
                    return undefined
                }
                ,
                e._decodePrivFrame = function(t) {
                    if (t.size < 2)
                        return undefined;
                    var i = e._utf8ArrayToStr(t.data, !0)
                      , r = new Uint8Array(t.data.subarray(i.length + 1));
                    return {
                        key: t.type,
                        info: i,
                        data: r.buffer
                    }
                }
                ,
                e._decodeTextFrame = function(t) {
                    if (t.size < 2)
                        return undefined;
                    if ("TXXX" === t.type) {
                        var i = 1
                          , r = e._utf8ArrayToStr(t.data.subarray(i));
                        i += r.length + 1;
                        var s = e._utf8ArrayToStr(t.data.subarray(i));
                        return {
                            key: t.type,
                            info: r,
                            data: s
                        }
                    }
                    var o = e._utf8ArrayToStr(t.data.subarray(1));
                    return {
                        key: t.type,
                        data: o
                    }
                }
                ,
                e._decodeURLFrame = function(t) {
                    if ("WXXX" === t.type) {
                        if (t.size < 2)
                            return undefined;
                        var i = 1
                          , r = e._utf8ArrayToStr(t.data.subarray(i));
                        i += r.length + 1;
                        var s = e._utf8ArrayToStr(t.data.subarray(i));
                        return {
                            key: t.type,
                            info: r,
                            data: s
                        }
                    }
                    var o = e._utf8ArrayToStr(t.data);
                    return {
                        key: t.type,
                        data: o
                    }
                }
                ,
                e._utf8ArrayToStr = function(e, t) {
                    void 0 === t && (t = !1);
                    for (var i, r, s, o = e.length, a = "", n = 0; n < o; ) {
                        if (0 === (i = e[n++]) && t)
                            return a;
                        if (0 !== i && 3 !== i)
                            switch (i >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                a += String.fromCharCode(i);
                                break;
                            case 12:
                            case 13:
                                r = e[n++],
                                a += String.fromCharCode((31 & i) << 6 | 63 & r);
                                break;
                            case 14:
                                r = e[n++],
                                s = e[n++],
                                a += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | (63 & s) << 0)
                            }
                    }
                    return a
                }
                ,
                e
            }()
              , s = r._utf8ArrayToStr;
            t.utf8ArrayToStr = s,
            t["default"] = r
        },
        "./src/demux/mp3demuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/demux/id3.js")
              , s = i("./src/utils/logger.js")
              , o = i("./src/demux/mpegaudio.js")
              , a = function() {
                function e(e, t, i) {
                    this.observer = e,
                    this.config = i,
                    this.remuxer = t
                }
                return e.prototype.resetInitSegment = function(e, t, i, r) {
                    this._audioTrack = {
                        container: "audio/mpeg",
                        type: "audio",
                        id: -1,
                        sequenceNumber: 0,
                        isAAC: !1,
                        samples: [],
                        len: 0,
                        manifestCodec: t,
                        duration: r,
                        inputTimeScale: 9e4
                    }
                }
                ,
                e.prototype.resetTimeStamp = function() {}
                ,
                e.probe = function(e) {
                    var t, i, a = r["default"].getID3Data(e, 0);
                    if (a && r["default"].getTimeStamp(a) !== undefined)
                        for (t = a.length,
                        i = Math.min(e.length - 1, t + 100); t < i; t++)
                            if (o["default"].probe(e, t))
                                return s.logger.log("MPEG Audio sync word found !"),
                                !0;
                    return !1
                }
                ,
                e.prototype.append = function(e, t, i, s) {
                    for (var a = r["default"].getID3Data(e, 0), n = r["default"].getTimeStamp(a), l = n ? 90 * n : 9e4 * t, d = a.length, u = e.length, c = 0, h = 0, f = this._audioTrack, p = [{
                        pts: l,
                        dts: l,
                        data: a
                    }]; d < u; )
                        if (o["default"].isHeader(e, d)) {
                            var v = o["default"].appendFrame(f, e, d, l, c);
                            if (!v)
                                break;
                            d += v.length,
                            h = v.sample.pts,
                            c++
                        } else
                            r["default"].isHeader(e, d) ? (a = r["default"].getID3Data(e, d),
                            p.push({
                                pts: h,
                                dts: h,
                                data: a
                            }),
                            d += a.length) : d++;
                    this.remuxer.remux(f, {
                        samples: []
                    }, {
                        samples: p,
                        inputTimeScale: 9e4
                    }, {
                        samples: []
                    }, t, i, s)
                }
                ,
                e.prototype.destroy = function() {}
                ,
                e
            }();
            t["default"] = a
        },
        "./src/demux/mp4demuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/utils/logger.js")
              , s = i("./src/events.js")
              , o = Math.pow(2, 32) - 1
              , a = function() {
                function e(e, t) {
                    this.observer = e,
                    this.remuxer = t
                }
                return e.prototype.resetTimeStamp = function(e) {
                    this.initPTS = e
                }
                ,
                e.prototype.resetInitSegment = function(t, i, r, o) {
                    if (t && t.byteLength) {
                        var a = this.initData = e.parseInitSegment(t);
                        null == i && (i = "mp4a.40.5"),
                        null == r && (r = "avc1.42e01e");
                        var n = {};
                        a.audio && a.video ? n.audiovideo = {
                            container: "video/mp4",
                            codec: i + "," + r,
                            initSegment: o ? t : null
                        } : (a.audio && (n.audio = {
                            container: "audio/mp4",
                            codec: i,
                            initSegment: o ? t : null
                        }),
                        a.video && (n.video = {
                            container: "video/mp4",
                            codec: r,
                            initSegment: o ? t : null
                        })),
                        this.observer.trigger(s["default"].FRAG_PARSING_INIT_SEGMENT, {
                            tracks: n
                        })
                    } else
                        i && (this.audioCodec = i),
                        r && (this.videoCodec = r)
                }
                ,
                e.probe = function(t) {
                    return e.findBox({
                        data: t,
                        start: 0,
                        end: Math.min(t.length, 16384)
                    }, ["moof"]).length > 0
                }
                ,
                e.bin2str = function(e) {
                    return String.fromCharCode.apply(null, e)
                }
                ,
                e.readUint16 = function(e, t) {
                    e.data && (t += e.start,
                    e = e.data);
                    var i = e[t] << 8 | e[t + 1];
                    return i < 0 ? 65536 + i : i
                }
                ,
                e.readUint32 = function(e, t) {
                    e.data && (t += e.start,
                    e = e.data);
                    var i = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                    return i < 0 ? 4294967296 + i : i
                }
                ,
                e.writeUint32 = function(e, t, i) {
                    e.data && (t += e.start,
                    e = e.data),
                    e[t] = i >> 24,
                    e[t + 1] = i >> 16 & 255,
                    e[t + 2] = i >> 8 & 255,
                    e[t + 3] = 255 & i
                }
                ,
                e.findBox = function(t, i) {
                    var r, s, o, a, n, l, d, u = [];
                    if (t.data ? (l = t.start,
                    a = t.end,
                    t = t.data) : (l = 0,
                    a = t.byteLength),
                    !i.length)
                        return null;
                    for (r = l; r < a; )
                        s = e.readUint32(t, r),
                        o = e.bin2str(t.subarray(r + 4, r + 8)),
                        d = s > 1 ? r + s : a,
                        o === i[0] && (1 === i.length ? u.push({
                            data: t,
                            start: r + 8,
                            end: d
                        }) : (n = e.findBox({
                            data: t,
                            start: r + 8,
                            end: d
                        }, i.slice(1)),
                        n.length && (u = u.concat(n)))),
                        r = d;
                    return u
                }
                ,
                e.parseSegmentIndex = function(t) {
                    var i, r = e.findBox(t, ["moov"])[0], s = r ? r.end : null, o = 0, a = e.findBox(t, ["sidx"]);
                    if (!a || !a[0])
                        return null;
                    i = [],
                    a = a[0];
                    var n = a.data[0];
                    o = 0 === n ? 8 : 16;
                    var l = e.readUint32(a, o);
                    o += 4;
                    o += 0 === n ? 8 : 16,
                    o += 2;
                    var d = a.end + 0
                      , u = e.readUint16(a, o);
                    o += 2;
                    for (var c = 0; c < u; c++) {
                        var h = o
                          , f = e.readUint32(a, h);
                        h += 4;
                        var p = 2147483647 & f;
                        if (1 === (2147483648 & f) >>> 31)
                            return void console.warn("SIDX has hierarchical references (not supported)");
                        var v = e.readUint32(a, h);
                        h += 4,
                        i.push({
                            referenceSize: p,
                            subsegmentDuration: v,
                            info: {
                                duration: v / l,
                                start: d,
                                end: d + p - 1
                            }
                        }),
                        d += p,
                        h += 4,
                        o = h
                    }
                    return {
                        earliestPresentationTime: 0,
                        timescale: l,
                        version: n,
                        referencesCount: u,
                        references: i,
                        moovEndOffset: s
                    }
                }
                ,
                e.parseInitSegment = function(t) {
                    var i = [];
                    return e.findBox(t, ["moov", "trak"]).forEach(function(t) {
                        var s = e.findBox(t, ["tkhd"])[0];
                        if (s) {
                            var o = s.data[s.start]
                              , a = 0 === o ? 12 : 20
                              , n = e.readUint32(s, a)
                              , l = e.findBox(t, ["mdia", "mdhd"])[0];
                            if (l) {
                                o = l.data[l.start],
                                a = 0 === o ? 12 : 20;
                                var d = e.readUint32(l, a)
                                  , u = e.findBox(t, ["mdia", "hdlr"])[0];
                                if (u) {
                                    var c = e.bin2str(u.data.subarray(u.start + 8, u.start + 12))
                                      , h = {
                                        soun: "audio",
                                        vide: "video"
                                    }[c];
                                    if (h) {
                                        var f = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
                                        if (f.length) {
                                            f = f[0];
                                            var p = e.bin2str(f.data.subarray(f.start + 12, f.start + 16));
                                            r.logger.log("MP4Demuxer:" + h + ":" + p + " found")
                                        }
                                        i[n] = {
                                            timescale: d,
                                            type: h
                                        },
                                        i[h] = {
                                            timescale: d,
                                            id: n
                                        }
                                    }
                                }
                            }
                        }
                    }),
                    i
                }
                ,
                e.getStartDTS = function(t, i) {
                    var r, s, o;
                    return r = e.findBox(i, ["moof", "traf"]),
                    s = [].concat.apply([], r.map(function(i) {
                        return e.findBox(i, ["tfhd"]).map(function(r) {
                            var s, o;
                            return s = e.readUint32(r, 4),
                            o = t[s].timescale || 9e4,
                            e.findBox(i, ["tfdt"]).map(function(t) {
                                var i, r;
                                return i = t.data[t.start],
                                r = e.readUint32(t, 4),
                                1 === i && (r *= Math.pow(2, 32),
                                r += e.readUint32(t, 8)),
                                r
                            })[0] / o
                        })
                    })),
                    o = Math.min.apply(null, s),
                    isFinite(o) ? o : 0
                }
                ,
                e.offsetStartDTS = function(t, i, r) {
                    e.findBox(i, ["moof", "traf"]).map(function(i) {
                        return e.findBox(i, ["tfhd"]).map(function(s) {
                            var a = e.readUint32(s, 4)
                              , n = t[a].timescale || 9e4;
                            e.findBox(i, ["tfdt"]).map(function(t) {
                                var i = t.data[t.start]
                                  , s = e.readUint32(t, 4);
                                if (0 === i)
                                    e.writeUint32(t, 4, s - r * n);
                                else {
                                    s *= Math.pow(2, 32),
                                    s += e.readUint32(t, 8),
                                    s -= r * n,
                                    s = Math.max(s, 0);
                                    var a = Math.floor(s / (o + 1))
                                      , l = Math.floor(s % (o + 1));
                                    e.writeUint32(t, 4, a),
                                    e.writeUint32(t, 8, l)
                                }
                            })
                        })
                    })
                }
                ,
                e.prototype.append = function(t, i, r, o) {
                    var a = this.initData;
                    a || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1),
                    a = this.initData);
                    var n, l = this.initPTS;
                    if (l === undefined) {
                        var d = e.getStartDTS(a, t);
                        this.initPTS = l = d - i,
                        this.observer.trigger(s["default"].INIT_PTS_FOUND, {
                            initPTS: l
                        })
                    }
                    e.offsetStartDTS(a, t, l),
                    n = e.getStartDTS(a, t),
                    this.remuxer.remux(a.audio, a.video, null, null, n, r, o, t)
                }
                ,
                e.prototype.destroy = function() {}
                ,
                e
            }();
            t["default"] = a
        },
        "./src/demux/mpegaudio.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
                BytesInSlot: [0, 1, 1, 4],
                appendFrame: function(e, t, i, r, s) {
                    if (i + 24 > t.length)
                        return undefined;
                    var o = this.parseHeader(t, i);
                    if (o && i + o.frameLength <= t.length) {
                        var a = 9e4 * o.samplesPerFrame / o.sampleRate
                          , n = r + s * a
                          , l = {
                            unit: t.subarray(i, i + o.frameLength),
                            pts: n,
                            dts: n
                        };
                        return e.config = [],
                        e.channelCount = o.channelCount,
                        e.samplerate = o.sampleRate,
                        e.samples.push(l),
                        e.len += o.frameLength,
                        {
                            sample: l,
                            length: o.frameLength
                        }
                    }
                    return undefined
                },
                parseHeader: function(e, t) {
                    var i = e[t + 1] >> 3 & 3
                      , s = e[t + 1] >> 1 & 3
                      , o = e[t + 2] >> 4 & 15
                      , a = e[t + 2] >> 2 & 3
                      , n = e[t + 2] >> 1 & 1;
                    if (1 !== i && 0 !== o && 15 !== o && 3 !== a) {
                        var l = 3 === i ? 3 - s : 3 === s ? 3 : 4
                          , d = 1e3 * r.BitratesMap[14 * l + o - 1]
                          , u = 3 === i ? 0 : 2 === i ? 1 : 2
                          , c = r.SamplingRateMap[3 * u + a]
                          , h = e[t + 3] >> 6 == 3 ? 1 : 2
                          , f = r.SamplesCoefficients[i][s]
                          , p = r.BytesInSlot[s]
                          , v = 8 * f * p;
                        return {
                            sampleRate: c,
                            channelCount: h,
                            frameLength: parseInt(f * d / c + n, 10) * p,
                            samplesPerFrame: v
                        }
                    }
                    return undefined
                },
                isHeaderPattern: function(e, t) {
                    return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
                },
                isHeader: function(e, t) {
                    return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
                },
                probe: function(e, t) {
                    if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                        var i = this.parseHeader(e, t)
                          , r = 4;
                        i && i.frameLength && (r = i.frameLength);
                        var s = t + r;
                        if (s === e.length || s + 1 < e.length && this.isHeaderPattern(e, s))
                            return !0
                    }
                    return !1
                }
            };
            t["default"] = r
        },
        "./src/demux/sample-aes.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/crypt/decrypter.js")
              , s = function() {
                function e(e, t, i, s) {
                    this.decryptdata = i,
                    this.discardEPB = s,
                    this.decrypter = new r["default"](e,t,{
                        removePKCS7Padding: !1
                    })
                }
                return e.prototype.decryptBuffer = function(e, t) {
                    this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
                }
                ,
                e.prototype.decryptAacSample = function(e, t, i, r) {
                    var s = e[t].unit
                      , o = s.subarray(16, s.length - s.length % 16)
                      , a = o.buffer.slice(o.byteOffset, o.byteOffset + o.length)
                      , n = this;
                    this.decryptBuffer(a, function(o) {
                        o = new Uint8Array(o),
                        s.set(o, 16),
                        r || n.decryptAacSamples(e, t + 1, i)
                    })
                }
                ,
                e.prototype.decryptAacSamples = function(e, t, i) {
                    for (; ; t++) {
                        if (t >= e.length)
                            return void i();
                        if (!(e[t].unit.length < 32)) {
                            var r = this.decrypter.isSync();
                            if (this.decryptAacSample(e, t, i, r),
                            !r)
                                return
                        }
                    }
                }
                ,
                e.prototype.getAvcEncryptedData = function(e) {
                    for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, i = new Int8Array(t), r = 0, s = 32; s <= e.length - 16; s += 160,
                    r += 16)
                        i.set(e.subarray(s, s + 16), r);
                    return i
                }
                ,
                e.prototype.getAvcDecryptedUnit = function(e, t) {
                    t = new Uint8Array(t);
                    for (var i = 0, r = 32; r <= e.length - 16; r += 160,
                    i += 16)
                        e.set(t.subarray(i, i + 16), r);
                    return e
                }
                ,
                e.prototype.decryptAvcSample = function(e, t, i, r, s, o) {
                    var a = this.discardEPB(s.data)
                      , n = this.getAvcEncryptedData(a)
                      , l = this;
                    this.decryptBuffer(n.buffer, function(n) {
                        s.data = l.getAvcDecryptedUnit(a, n),
                        o || l.decryptAvcSamples(e, t, i + 1, r)
                    })
                }
                ,
                e.prototype.decryptAvcSamples = function(e, t, i, r) {
                    for (; ; t++,
                    i = 0) {
                        if (t >= e.length)
                            return void r();
                        for (var s = e[t].units; !(i >= s.length); i++) {
                            var o = s[i];
                            if (!(o.length <= 48 || 1 !== o.type && 5 !== o.type)) {
                                var a = this.decrypter.isSync();
                                if (this.decryptAvcSample(e, t, i, r, o, a),
                                !a)
                                    return
                            }
                        }
                    }
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/demux/tsdemuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/demux/adts.js")
              , s = i("./src/demux/mpegaudio.js")
              , o = i("./src/events.js")
              , a = i("./src/demux/exp-golomb.js")
              , n = i("./src/demux/sample-aes.js")
              , l = i("./src/utils/logger.js")
              , d = i("./src/errors.js")
              , u = {
                video: 1,
                audio: 2,
                id3: 3,
                text: 4
            }
              , c = function() {
                function e(e, t, i, r) {
                    this.observer = e,
                    this.config = i,
                    this.typeSupported = r,
                    this.remuxer = t,
                    this.sampleAes = null
                }
                return e.prototype.setDecryptData = function(e) {
                    null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new n["default"](this.observer,this.config,e,this.discardEPB) : this.sampleAes = null
                }
                ,
                e.probe = function(t) {
                    var i = e._syncOffset(t);
                    return !(i < 0) && (i && l.logger.warn("MPEG2-TS detected but first sync word found @ offset " + i + ", junk ahead ?"),
                    !0)
                }
                ,
                e._syncOffset = function(e) {
                    for (var t = Math.min(1e3, e.length - 564), i = 0; i < t; ) {
                        if (71 === e[i] && 71 === e[i + 188] && 71 === e[i + 376])
                            return i;
                        i++
                    }
                    return -1
                }
                ,
                e.createTrack = function(e, t) {
                    return {
                        container: "video" === e || "audio" === e ? "video/mp2t" : undefined,
                        type: e,
                        id: u[e],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        len: 0,
                        dropped: "video" === e ? 0 : undefined,
                        isAAC: "audio" === e || undefined,
                        duration: "audio" === e ? t : undefined
                    }
                }
                ,
                e.prototype.resetInitSegment = function(t, i, r, s) {
                    this.pmtParsed = !1,
                    this._pmtId = -1,
                    this._avcTrack = e.createTrack("video", s),
                    this._audioTrack = e.createTrack("audio", s),
                    this._id3Track = e.createTrack("id3", s),
                    this._txtTrack = e.createTrack("text", s),
                    this.aacOverFlow = null,
                    this.aacLastPTS = null,
                    this.avcSample = null,
                    this.audioCodec = i,
                    this.videoCodec = r,
                    this._duration = s
                }
                ,
                e.prototype.resetTimeStamp = function() {}
                ,
                e.prototype.append = function(t, i, r, s) {
                    var a, n, u, c, h, f = t.length, p = !1;
                    this.contiguous = r;
                    var v = this.pmtParsed
                      , g = this._avcTrack
                      , m = this._audioTrack
                      , y = this._id3Track
                      , b = g.pid
                      , _ = m.pid
                      , E = y.pid
                      , w = this._pmtId
                      , k = g.pesData
                      , T = m.pesData
                      , S = y.pesData
                      , A = this._parsePAT
                      , x = this._parsePMT
                      , L = this._parsePES
                      , P = this._parseAVCPES.bind(this)
                      , R = this._parseAACPES.bind(this)
                      , C = this._parseMPEGPES.bind(this)
                      , D = this._parseID3PES.bind(this)
                      , I = e._syncOffset(t);
                    for (f -= (f + I) % 188,
                    a = I; a < f; a += 188)
                        if (71 === t[a]) {
                            if (n = !!(64 & t[a + 1]),
                            u = ((31 & t[a + 1]) << 8) + t[a + 2],
                            (48 & t[a + 3]) >> 4 > 1) {
                                if ((c = a + 5 + t[a + 4]) === a + 188)
                                    continue
                            } else
                                c = a + 4;
                            switch (u) {
                            case b:
                                n && (k && (h = L(k)) && h.pts !== undefined && P(h, !1),
                                k = {
                                    data: [],
                                    size: 0
                                }),
                                k && (k.data.push(t.subarray(c, a + 188)),
                                k.size += a + 188 - c);
                                break;
                            case _:
                                n && (T && (h = L(T)) && h.pts !== undefined && (m.isAAC ? R(h) : C(h)),
                                T = {
                                    data: [],
                                    size: 0
                                }),
                                T && (T.data.push(t.subarray(c, a + 188)),
                                T.size += a + 188 - c);
                                break;
                            case E:
                                n && (S && (h = L(S)) && h.pts !== undefined && D(h),
                                S = {
                                    data: [],
                                    size: 0
                                }),
                                S && (S.data.push(t.subarray(c, a + 188)),
                                S.size += a + 188 - c);
                                break;
                            case 0:
                                n && (c += t[c] + 1),
                                w = this._pmtId = A(t, c);
                                break;
                            case w:
                                n && (c += t[c] + 1);
                                var O = x(t, c, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                b = O.avc,
                                b > 0 && (g.pid = b),
                                _ = O.audio,
                                _ > 0 && (m.pid = _,
                                m.isAAC = O.isAAC),
                                E = O.id3,
                                E > 0 && (y.pid = E),
                                p && !v && (l.logger.log("reparse from beginning"),
                                p = !1,
                                a = I - 188),
                                v = this.pmtParsed = !0;
                                break;
                            case 17:
                            case 8191:
                                break;
                            default:
                                p = !0
                            }
                        } else
                            this.observer.trigger(o["default"].ERROR, {
                                type: d.ErrorTypes.MEDIA_ERROR,
                                details: d.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !1,
                                reason: "TS packet did not start with 0x47"
                            });
                    k && (h = L(k)) && h.pts !== undefined ? (P(h, !0),
                    g.pesData = null) : g.pesData = k,
                    T && (h = L(T)) && h.pts !== undefined ? (m.isAAC ? R(h) : C(h),
                    m.pesData = null) : (T && T.size && l.logger.log("last AAC PES packet truncated,might overlap between fragments"),
                    m.pesData = T),
                    S && (h = L(S)) && h.pts !== undefined ? (D(h),
                    y.pesData = null) : y.pesData = S,
                    null == this.sampleAes ? this.remuxer.remux(m, g, y, this._txtTrack, i, r, s) : this.decryptAndRemux(m, g, y, this._txtTrack, i, r, s)
                }
                ,
                e.prototype.decryptAndRemux = function(e, t, i, r, s, o, a) {
                    if (e.samples && e.isAAC) {
                        var n = this;
                        this.sampleAes.decryptAacSamples(e.samples, 0, function() {
                            n.decryptAndRemuxAvc(e, t, i, r, s, o, a)
                        })
                    } else
                        this.decryptAndRemuxAvc(e, t, i, r, s, o, a)
                }
                ,
                e.prototype.decryptAndRemuxAvc = function(e, t, i, r, s, o, a) {
                    if (t.samples) {
                        var n = this;
                        this.sampleAes.decryptAvcSamples(t.samples, 0, 0, function() {
                            n.remuxer.remux(e, t, i, r, s, o, a)
                        })
                    } else
                        this.remuxer.remux(e, t, i, r, s, o, a)
                }
                ,
                e.prototype.destroy = function() {
                    this._initPTS = this._initDTS = undefined,
                    this._duration = 0
                }
                ,
                e.prototype._parsePAT = function(e, t) {
                    return (31 & e[t + 10]) << 8 | e[t + 11]
                }
                ,
                e.prototype._parsePMT = function(e, t, i, r) {
                    var s, o, a, n, d = {
                        audio: -1,
                        avc: -1,
                        id3: -1,
                        isAAC: !0
                    };
                    for (s = (15 & e[t + 1]) << 8 | e[t + 2],
                    o = t + 3 + s - 4,
                    a = (15 & e[t + 10]) << 8 | e[t + 11],
                    t += 12 + a; t < o; ) {
                        switch (n = (31 & e[t + 1]) << 8 | e[t + 2],
                        e[t]) {
                        case 207:
                            if (!r) {
                                l.logger.log("unkown stream type:" + e[t]);
                                break
                            }
                        case 15:
                            -1 === d.audio && (d.audio = n);
                            break;
                        case 21:
                            -1 === d.id3 && (d.id3 = n);
                            break;
                        case 219:
                            if (!r) {
                                l.logger.log("unkown stream type:" + e[t]);
                                break
                            }
                        case 27:
                            -1 === d.avc && (d.avc = n);
                            break;
                        case 3:
                        case 4:
                            i ? -1 === d.audio && (d.audio = n,
                            d.isAAC = !1) : l.logger.log("MPEG audio found, not supported in this browser for now");
                            break;
                        case 36:
                            l.logger.warn("HEVC stream type found, not supported for now");
                            break;
                        default:
                            l.logger.log("unkown stream type:" + e[t])
                        }
                        t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                    }
                    return d
                }
                ,
                e.prototype._parsePES = function(e) {
                    var t, i, r, s, o, a, n, d, u = 0, c = e.data;
                    if (!e || 0 === e.size)
                        return null;
                    for (; c[0].length < 19 && c.length > 1; ) {
                        var h = new Uint8Array(c[0].length + c[1].length);
                        h.set(c[0]),
                        h.set(c[1], c[0].length),
                        c[0] = h,
                        c.splice(1, 1)
                    }
                    if (t = c[0],
                    1 === (t[0] << 16) + (t[1] << 8) + t[2]) {
                        if ((r = (t[4] << 8) + t[5]) && r > e.size - 6)
                            return null;
                        i = t[7],
                        192 & i && (a = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2,
                        a > 4294967295 && (a -= 8589934592),
                        64 & i ? (n = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2,
                        n > 4294967295 && (n -= 8589934592),
                        a - n > 54e5 && (l.logger.warn(Math.round((a - n) / 9e4) + "s delta between PTS and DTS, align them"),
                        a = n)) : n = a),
                        s = t[8],
                        d = s + 9,
                        e.size -= d,
                        o = new Uint8Array(e.size);
                        for (var f = 0, p = c.length; f < p; f++) {
                            t = c[f];
                            var v = t.byteLength;
                            if (d) {
                                if (d > v) {
                                    d -= v;
                                    continue
                                }
                                t = t.subarray(d),
                                v -= d,
                                d = 0
                            }
                            o.set(t, u),
                            u += v
                        }
                        return r && (r -= s + 3),
                        {
                            data: o,
                            pts: a,
                            dts: n,
                            len: r
                        }
                    }
                    return null
                }
                ,
                e.prototype.pushAccesUnit = function(e, t) {
                    if (e.units.length && e.frame) {
                        var i = t.samples
                          , r = i.length;
                        !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (r || this.contiguous) ? (e.id = r,
                        i.push(e)) : t.dropped++
                    }
                    e.debug.length && l.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
                }
                ,
                e.prototype._parseAVCPES = function(e, t) {
                    var i, r, s, o = this, n = this._avcTrack, l = this._parseAVCNALu(e.data), d = this.avcSample, u = !1, c = this.pushAccesUnit.bind(this), h = function(e, t, i, r) {
                        return {
                            key: e,
                            pts: t,
                            dts: i,
                            units: [],
                            debug: r
                        }
                    };
                    e.data = null,
                    d && l.length && !n.audFound && (c(d, n),
                    d = this.avcSample = h(!1, e.pts, e.dts, "")),
                    l.forEach(function(t) {
                        switch (t.type) {
                        case 1:
                            r = !0,
                            d || (d = o.avcSample = h(!0, e.pts, e.dts, "")),
                            d.frame = !0;
                            var l = t.data;
                            if (u && l.length > 4) {
                                var f = new a["default"](l).readSliceType();
                                2 !== f && 4 !== f && 7 !== f && 9 !== f || (d.key = !0)
                            }
                            break;
                        case 5:
                            r = !0,
                            d || (d = o.avcSample = h(!0, e.pts, e.dts, "")),
                            d.key = !0,
                            d.frame = !0;
                            break;
                        case 6:
                            r = !0,
                            i = new a["default"](o.discardEPB(t.data)),
                            i.readUByte();
                            for (var p = 0, v = 0, g = !1, m = 0; !g && i.bytesAvailable > 1; ) {
                                p = 0;
                                do {
                                    m = i.readUByte(),
                                    p += m
                                } while (255 === m);
                                v = 0;
                                do {
                                    m = i.readUByte(),
                                    v += m
                                } while (255 === m);
                                if (4 === p && 0 !== i.bytesAvailable) {
                                    g = !0;
                                    if (181 === i.readUByte()) {
                                        if (49 === i.readUShort()) {
                                            if (1195456820 === i.readUInt()) {
                                                if (3 === i.readUByte()) {
                                                    var y = i.readUByte()
                                                      , b = i.readUByte()
                                                      , _ = 31 & y
                                                      , E = [y, b];
                                                    for (s = 0; s < _; s++)
                                                        E.push(i.readUByte()),
                                                        E.push(i.readUByte()),
                                                        E.push(i.readUByte());
                                                    o._insertSampleInOrder(o._txtTrack.samples, {
                                                        type: 3,
                                                        pts: e.pts,
                                                        bytes: E
                                                    })
                                                }
                                            }
                                        }
                                    }
                                } else if (v < i.bytesAvailable)
                                    for (s = 0; s < v; s++)
                                        i.readUByte()
                            }
                            break;
                        case 7:
                            if (r = !0,
                            u = !0,
                            !n.sps) {
                                i = new a["default"](t.data);
                                var w = i.readSPS();
                                n.width = w.width,
                                n.height = w.height,
                                n.pixelRatio = w.pixelRatio,
                                n.sps = [t.data],
                                n.duration = o._duration;
                                var k = t.data.subarray(1, 4)
                                  , T = "avc1.";
                                for (s = 0; s < 3; s++) {
                                    var S = k[s].toString(16);
                                    S.length < 2 && (S = "0" + S),
                                    T += S
                                }
                                n.codec = T
                            }
                            break;
                        case 8:
                            r = !0,
                            n.pps || (n.pps = [t.data]);
                            break;
                        case 9:
                            r = !1,
                            n.audFound = !0,
                            d && c(d, n),
                            d = o.avcSample = h(!1, e.pts, e.dts, "");
                            break;
                        case 12:
                            r = !1;
                            break;
                        default:
                            r = !1,
                            d && (d.debug += "unknown NAL " + t.type + " ")
                        }
                        if (d && r) {
                            d.units.push(t)
                        }
                    }),
                    t && d && (c(d, n),
                    this.avcSample = null)
                }
                ,
                e.prototype._insertSampleInOrder = function(e, t) {
                    var i = e.length;
                    if (i > 0) {
                        if (t.pts >= e[i - 1].pts)
                            e.push(t);
                        else
                            for (var r = i - 1; r >= 0; r--)
                                if (t.pts < e[r].pts) {
                                    e.splice(r, 0, t);
                                    break
                                }
                    } else
                        e.push(t)
                }
                ,
                e.prototype._getLastNalUnit = function() {
                    var e, t = this.avcSample;
                    if (!t || 0 === t.units.length) {
                        var i = this._avcTrack
                          , r = i.samples;
                        t = r[r.length - 1]
                    }
                    if (t) {
                        var s = t.units;
                        e = s[s.length - 1]
                    }
                    return e
                }
                ,
                e.prototype._parseAVCNALu = function(e) {
                    var t, i, r, s, o, a = 0, n = e.byteLength, l = this._avcTrack, d = l.naluState || 0, u = d, c = [], h = -1;
                    for (-1 === d && (h = 0,
                    o = 31 & e[0],
                    d = 0,
                    a = 1); a < n; )
                        if (t = e[a++],
                        d)
                            if (1 !== d)
                                if (t)
                                    if (1 === t) {
                                        if (h >= 0)
                                            r = {
                                                data: e.subarray(h, a - d - 1),
                                                type: o
                                            },
                                            c.push(r);
                                        else {
                                            var f = this._getLastNalUnit();
                                            if (f && (u && a <= 4 - u && f.state && (f.data = f.data.subarray(0, f.data.byteLength - u)),
                                            (i = a - d - 1) > 0)) {
                                                var p = new Uint8Array(f.data.byteLength + i);
                                                p.set(f.data, 0),
                                                p.set(e.subarray(0, i), f.data.byteLength),
                                                f.data = p
                                            }
                                        }
                                        a < n ? (s = 31 & e[a],
                                        h = a,
                                        o = s,
                                        d = 0) : d = -1
                                    } else
                                        d = 0;
                                else
                                    d = 3;
                            else
                                d = t ? 0 : 2;
                        else
                            d = t ? 0 : 1;
                    if (h >= 0 && d >= 0 && (r = {
                        data: e.subarray(h, n),
                        type: o,
                        state: d
                    },
                    c.push(r)),
                    0 === c.length) {
                        var f = this._getLastNalUnit();
                        if (f) {
                            var p = new Uint8Array(f.data.byteLength + e.byteLength);
                            p.set(f.data, 0),
                            p.set(e, f.data.byteLength),
                            f.data = p
                        }
                    }
                    return l.naluState = d,
                    c
                }
                ,
                e.prototype.discardEPB = function(e) {
                    for (var t, i, r = e.byteLength, s = [], o = 1; o < r - 2; )
                        0 === e[o] && 0 === e[o + 1] && 3 === e[o + 2] ? (s.push(o + 2),
                        o += 2) : o++;
                    if (0 === s.length)
                        return e;
                    t = r - s.length,
                    i = new Uint8Array(t);
                    var a = 0;
                    for (o = 0; o < t; a++,
                    o++)
                        a === s[0] && (a++,
                        s.shift()),
                        i[o] = e[a];
                    return i
                }
                ,
                e.prototype._parseAACPES = function(e) {
                    var t, i, s, a, n, u = this._audioTrack, c = e.data, h = e.pts, f = this.aacOverFlow, p = this.aacLastPTS;
                    if (f) {
                        var v = new Uint8Array(f.byteLength + c.byteLength);
                        v.set(f, 0),
                        v.set(c, f.byteLength),
                        c = v
                    }
                    for (s = 0,
                    n = c.length; s < n - 1 && !r.isHeader(c, s); s++)
                        ;
                    if (s) {
                        var g = void 0
                          , m = void 0;
                        if (s < n - 1 ? (g = "AAC PES did not start with ADTS header,offset:" + s,
                        m = !1) : (g = "no ADTS header found in AAC PES",
                        m = !0),
                        l.logger.warn("parsing error:" + g),
                        this.observer.trigger(o["default"].ERROR, {
                            type: d.ErrorTypes.MEDIA_ERROR,
                            details: d.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: m,
                            reason: g
                        }),
                        m)
                            return
                    }
                    if (r.initTrackConfig(u, this.observer, c, s, this.audioCodec),
                    i = 0,
                    t = r.getFrameDuration(u.samplerate),
                    f && p) {
                        var y = p + t;
                        Math.abs(y - h) > 1 && (l.logger.log("AAC: align PTS for overlapping frames by " + Math.round((y - h) / 90)),
                        h = y)
                    }
                    for (; s < n; )
                        if (r.isHeader(c, s) && s + 5 < n) {
                            var b = r.appendFrame(u, c, s, h, i);
                            if (!b)
                                break;
                            s += b.length,
                            a = b.sample.pts,
                            i++
                        } else
                            s++;
                    f = s < n ? c.subarray(s, n) : null,
                    this.aacOverFlow = f,
                    this.aacLastPTS = a
                }
                ,
                e.prototype._parseMPEGPES = function(e) {
                    for (var t = e.data, i = t.length, r = 0, o = 0, a = e.pts; o < i; )
                        if (s["default"].isHeader(t, o)) {
                            var n = s["default"].appendFrame(this._audioTrack, t, o, a, r);
                            if (!n)
                                break;
                            o += n.length,
                            r++
                        } else
                            o++
                }
                ,
                e.prototype._parseID3PES = function(e) {
                    this._id3Track.samples.push(e)
                }
                ,
                e
            }();
            t["default"] = c
        },
        "./src/errors.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ErrorTypes = {
                NETWORK_ERROR: "networkError",
                MEDIA_ERROR: "mediaError",
                KEY_SYSTEM_ERROR: "keySystemError",
                MUX_ERROR: "muxError",
                OTHER_ERROR: "otherError"
            },
            t.ErrorDetails = {
                KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
                KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
                KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
                KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
                MANIFEST_LOAD_ERROR: "manifestLoadError",
                MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
                MANIFEST_PARSING_ERROR: "manifestParsingError",
                MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
                LEVEL_LOAD_ERROR: "levelLoadError",
                LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
                LEVEL_SWITCH_ERROR: "levelSwitchError",
                AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
                AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
                FRAG_LOAD_ERROR: "fragLoadError",
                FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
                FRAG_DECRYPT_ERROR: "fragDecryptError",
                FRAG_PARSING_ERROR: "fragParsingError",
                REMUX_ALLOC_ERROR: "remuxAllocError",
                KEY_LOAD_ERROR: "keyLoadError",
                KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
                BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
                BUFFER_APPEND_ERROR: "bufferAppendError",
                BUFFER_APPENDING_ERROR: "bufferAppendingError",
                BUFFER_STALLED_ERROR: "bufferStalledError",
                BUFFER_FULL_ERROR: "bufferFullError",
                BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
                BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
                INTERNAL_EXCEPTION: "internalException"
            }
        },
        "./src/event-handler.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/utils/logger.js")
              , s = i("./src/errors.js")
              , o = i("./src/events.js")
              , a = new Set(["hlsEventGeneric", "hlsHandlerDestroying", "hlsHandlerDestroyed"])
              , n = function() {
                function e(e) {
                    for (var t = [], i = 1; i < arguments.length; i++)
                        t[i - 1] = arguments[i];
                    this.hls = e,
                    this.onEvent = this.onEvent.bind(this),
                    this.handledEvents = t,
                    this.useGenericHandler = !0,
                    this.registerListeners()
                }
                return e.prototype.destroy = function() {
                    this.onHandlerDestroying(),
                    this.unregisterListeners(),
                    this.onHandlerDestroyed()
                }
                ,
                e.prototype.onHandlerDestroying = function() {}
                ,
                e.prototype.onHandlerDestroyed = function() {}
                ,
                e.prototype.isEventHandler = function() {
                    return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
                }
                ,
                e.prototype.registerListeners = function() {
                    this.isEventHandler() && this.handledEvents.forEach(function(e) {
                        if (a.has(e))
                            throw new Error("Forbidden event-name: " + e);
                        this.hls.on(e, this.onEvent)
                    }, this)
                }
                ,
                e.prototype.unregisterListeners = function() {
                    this.isEventHandler() && this.handledEvents.forEach(function(e) {
                        this.hls.off(e, this.onEvent)
                    }, this)
                }
                ,
                e.prototype.onEvent = function(e, t) {
                    this.onEventGeneric(e, t)
                }
                ,
                e.prototype.onEventGeneric = function(e, t) {
                    var i = function(e, t) {
                        var i = "on" + e.replace("hls", "");
                        if ("function" != typeof this[i])
                            throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + i + ")");
                        return this[i].bind(this, t)
                    };
                    try {
                        i.call(this, e, t).call()
                    } catch (a) {
                        r.logger.error("An internal error happened while handling event " + e + '. Error message: "' + a.message + '". Here is a stacktrace:', a),
                        this.hls.trigger(o["default"].ERROR, {
                            type: s.ErrorTypes.OTHER_ERROR,
                            details: s.ErrorDetails.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: e,
                            err: a
                        })
                    }
                }
                ,
                e
            }();
            t["default"] = n
        },
        "./src/events.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                MEDIA_ATTACHING: "hlsMediaAttaching",
                MEDIA_ATTACHED: "hlsMediaAttached",
                MEDIA_DETACHING: "hlsMediaDetaching",
                MEDIA_DETACHED: "hlsMediaDetached",
                BUFFER_RESET: "hlsBufferReset",
                BUFFER_CODECS: "hlsBufferCodecs",
                BUFFER_CREATED: "hlsBufferCreated",
                BUFFER_APPENDING: "hlsBufferAppending",
                BUFFER_APPENDED: "hlsBufferAppended",
                BUFFER_EOS: "hlsBufferEos",
                BUFFER_FLUSHING: "hlsBufferFlushing",
                BUFFER_FLUSHED: "hlsBufferFlushed",
                MANIFEST_LOADING: "hlsManifestLoading",
                MANIFEST_LOADED: "hlsManifestLoaded",
                MANIFEST_PARSED: "hlsManifestParsed",
                LEVEL_SWITCHING: "hlsLevelSwitching",
                LEVEL_SWITCHED: "hlsLevelSwitched",
                LEVEL_LOADING: "hlsLevelLoading",
                LEVEL_LOADED: "hlsLevelLoaded",
                LEVEL_UPDATED: "hlsLevelUpdated",
                LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
                AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
                AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
                SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
                SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
                SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
                SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
                INIT_PTS_FOUND: "hlsInitPtsFound",
                FRAG_LOADING: "hlsFragLoading",
                FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                FRAG_LOADED: "hlsFragLoaded",
                FRAG_DECRYPTED: "hlsFragDecrypted",
                FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                FRAG_PARSING_DATA: "hlsFragParsingData",
                FRAG_PARSED: "hlsFragParsed",
                FRAG_BUFFERED: "hlsFragBuffered",
                FRAG_CHANGED: "hlsFragChanged",
                FPS_DROP: "hlsFpsDrop",
                FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                ERROR: "hlsError",
                DESTROYING: "hlsDestroying",
                KEY_LOADING: "hlsKeyLoading",
                KEY_LOADED: "hlsKeyLoaded",
                STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
            };
            t["default"] = r
        },
        "./src/hls.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./node_modules/url-toolkit/src/url-toolkit.js")
              , o = i("./src/errors.js")
              , a = i("./src/loader/playlist-loader.js")
              , n = i("./src/loader/fragment-loader.js")
              , l = i("./src/loader/key-loader.js")
              , d = i("./src/controller/fragment-tracker.js")
              , u = i("./src/controller/stream-controller.js")
              , c = i("./src/controller/level-controller.js")
              , h = i("./src/controller/id3-track-controller.js")
              , f = i("./src/is-supported.js")
              , p = i("./src/utils/logger.js")
              , v = i("./src/config.js")
              , g = i("./src/events.js")
              , m = i("./src/observer.js")
              , y = function(e) {
                function t(i) {
                    void 0 === i && (i = {});
                    var r = e.call(this) || this
                      , s = t.DefaultConfig;
                    if ((i.liveSyncDurationCount || i.liveMaxLatencyDurationCount) && (i.liveSyncDuration || i.liveMaxLatencyDuration))
                        throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    for (var o in s)
                        o in i || (i[o] = s[o]);
                    if (i.liveMaxLatencyDurationCount !== undefined && i.liveMaxLatencyDurationCount <= i.liveSyncDurationCount)
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                    if (i.liveMaxLatencyDuration !== undefined && (i.liveMaxLatencyDuration <= i.liveSyncDuration || i.liveSyncDuration === undefined))
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                    p.enableLogs(i.debug),
                    r.config = i,
                    r._autoLevelCapping = -1;
                    var f = r.abrController = new i.abrController(r)
                      , v = new i.bufferController(r)
                      , g = new i.capLevelController(r)
                      , m = new i.fpsController(r)
                      , y = new a["default"](r)
                      , b = new n["default"](r)
                      , _ = new l["default"](r)
                      , E = new h["default"](r)
                      , w = r.levelController = new c["default"](r)
                      , k = new d.FragmentTracker(r)
                      , T = r.streamController = new u["default"](r,k)
                      , S = [w, T]
                      , A = i.audioStreamController;
                    A && S.push(new A(r,k)),
                    r.networkControllers = S;
                    var x = [y, b, _, f, v, g, m, E, k];
                    if (A = i.audioTrackController) {
                        var L = new A(r);
                        r.audioTrackController = L,
                        x.push(L)
                    }
                    if (A = i.subtitleTrackController) {
                        var P = new A(r);
                        r.subtitleTrackController = P,
                        x.push(P)
                    }
                    if (A = i.emeController) {
                        var R = new A(r);
                        r.emeController = R,
                        x.push(R)
                    }
                    return [i.subtitleStreamController, i.timelineController].forEach(function(e) {
                        e && x.push(new e(r))
                    }),
                    r.coreComponents = x,
                    r
                }
                return r(t, e),
                Object.defineProperty(t, "version", {
                    get: function() {
                        return "0.11.1-feature-accurate-seek-stall-handling-SNAPSHOT-189552e"
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.isSupported = function() {
                    return f.isSupported()
                }
                ,
                Object.defineProperty(t, "Events", {
                    get: function() {
                        return g["default"]
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t, "ErrorTypes", {
                    get: function() {
                        return o.ErrorTypes
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t, "ErrorDetails", {
                    get: function() {
                        return o.ErrorDetails
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t, "DefaultConfig", {
                    get: function() {
                        return t.defaultConfig ? t.defaultConfig : v.hlsDefaultConfig
                    },
                    set: function(e) {
                        t.defaultConfig = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.destroy = function() {
                    p.logger.log("destroy"),
                    this.trigger(g["default"].DESTROYING),
                    this.detachMedia(),
                    this.coreComponents.concat(this.networkControllers).forEach(function(e) {
                        e.destroy()
                    }),
                    this.url = null,
                    this.removeAllListeners(),
                    this._autoLevelCapping = -1
                }
                ,
                t.prototype.attachMedia = function(e) {
                    p.logger.log("attachMedia"),
                    this.media = e,
                    this.trigger(g["default"].MEDIA_ATTACHING, {
                        media: e
                    })
                }
                ,
                t.prototype.detachMedia = function() {
                    p.logger.log("detachMedia"),
                    this.trigger(g["default"].MEDIA_DETACHING),
                    this.media = null
                }
                ,
                t.prototype.loadSource = function(e) {
                    e = s.buildAbsoluteURL(window.location.href, e, {
                        alwaysNormalize: !0
                    }),
                    p.logger.log("loadSource:" + e),
                    this.url = e,
                    this.trigger(g["default"].MANIFEST_LOADING, {
                        url: e
                    })
                }
                ,
                t.prototype.startLoad = function(e) {
                    void 0 === e && (e = -1),
                    p.logger.log("startLoad(" + e + ")"),
                    this.networkControllers.forEach(function(t) {
                        t.startLoad(e)
                    })
                }
                ,
                t.prototype.stopLoad = function() {
                    p.logger.log("stopLoad"),
                    this.networkControllers.forEach(function(e) {
                        e.stopLoad()
                    })
                }
                ,
                t.prototype.swapAudioCodec = function() {
                    p.logger.log("swapAudioCodec"),
                    this.streamController.swapAudioCodec()
                }
                ,
                t.prototype.recoverMediaError = function() {
                    p.logger.log("recoverMediaError");
                    var e = this.media;
                    this.detachMedia(),
                    this.attachMedia(e)
                }
                ,
                Object.defineProperty(t.prototype, "levels", {
                    get: function() {
                        return this.levelController.levels
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "currentLevel", {
                    get: function() {
                        return this.streamController.currentLevel
                    },
                    set: function(e) {
                        p.logger.log("set currentLevel:" + e),
                        this.loadLevel = e,
                        this.streamController.immediateLevelSwitch()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "nextLevel", {
                    get: function() {
                        return this.streamController.nextLevel
                    },
                    set: function(e) {
                        p.logger.log("set nextLevel:" + e),
                        this.levelController.manualLevel = e,
                        this.streamController.nextLevelSwitch()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "loadLevel", {
                    get: function() {
                        return this.levelController.level
                    },
                    set: function(e) {
                        p.logger.log("set loadLevel:" + e),
                        this.levelController.manualLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "nextLoadLevel", {
                    get: function() {
                        return this.levelController.nextLoadLevel
                    },
                    set: function(e) {
                        this.levelController.nextLoadLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "firstLevel", {
                    get: function() {
                        return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                    },
                    set: function(e) {
                        p.logger.log("set firstLevel:" + e),
                        this.levelController.firstLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "startLevel", {
                    get: function() {
                        return this.levelController.startLevel
                    },
                    set: function(e) {
                        p.logger.log("set startLevel:" + e);
                        var t = this;
                        -1 !== e && (e = Math.max(e, t.minAutoLevel)),
                        t.levelController.startLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "autoLevelCapping", {
                    get: function() {
                        return this._autoLevelCapping
                    },
                    set: function(e) {
                        p.logger.log("set autoLevelCapping:" + e),
                        this._autoLevelCapping = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "autoLevelEnabled", {
                    get: function() {
                        return -1 === this.levelController.manualLevel
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "manualLevel", {
                    get: function() {
                        return this.levelController.manualLevel
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "minAutoLevel", {
                    get: function() {
                        for (var e = this, t = e.levels, i = e.config.minAutoBitrate, r = t ? t.length : 0, s = 0; s < r; s++) {
                            if ((t[s].realBitrate ? Math.max(t[s].realBitrate, t[s].bitrate) : t[s].bitrate) > i)
                                return s
                        }
                        return 0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "maxAutoLevel", {
                    get: function() {
                        var e = this
                          , t = e.levels
                          , i = e.autoLevelCapping;
                        return -1 === i && t && t.length ? t.length - 1 : i
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "nextAutoLevel", {
                    get: function() {
                        var e = this;
                        return Math.min(Math.max(e.abrController.nextAutoLevel, e.minAutoLevel), e.maxAutoLevel)
                    },
                    set: function(e) {
                        var t = this;
                        t.abrController.nextAutoLevel = Math.max(t.minAutoLevel, e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "audioTracks", {
                    get: function() {
                        var e = this.audioTrackController;
                        return e ? e.audioTracks : []
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "audioTrack", {
                    get: function() {
                        var e = this.audioTrackController;
                        return e ? e.audioTrack : -1
                    },
                    set: function(e) {
                        var t = this.audioTrackController;
                        t && (t.audioTrack = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "liveSyncPosition", {
                    get: function() {
                        return this.streamController.liveSyncPosition
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "subtitleTracks", {
                    get: function() {
                        var e = this.subtitleTrackController;
                        return e ? e.subtitleTracks : []
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "subtitleTrack", {
                    get: function() {
                        var e = this.subtitleTrackController;
                        return e ? e.subtitleTrack : -1
                    },
                    set: function(e) {
                        var t = this.subtitleTrackController;
                        t && (t.subtitleTrack = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "subtitleDisplay", {
                    get: function() {
                        var e = this.subtitleTrackController;
                        return !!e && e.subtitleDisplay
                    },
                    set: function(e) {
                        var t = this.subtitleTrackController;
                        t && (t.subtitleDisplay = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
            }(m.Observer);
            t["default"] = y
        },
        "./src/is-supported.js": function(e, t, i) {
            "use strict";
            function r() {
                var e = s.getMediaSource()
                  , t = window.SourceBuffer || window.WebKitSourceBuffer
                  , i = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                  , r = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                return !!i && !!r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/utils/mediasource-helper.js");
            t.isSupported = r
        },
        "./src/loader/fragment-loader.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                        new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , a = i("./src/errors.js")
                  , n = i("./src/utils/logger.js")
                  , l = function(t) {
                    function i(e) {
                        var i = t.call(this, e, s["default"].FRAG_LOADING) || this;
                        return i.loaders = {},
                        i
                    }
                    return r(i, t),
                    i.prototype.destroy = function() {
                        var e = this.loaders;
                        for (var i in e) {
                            var r = e[i];
                            r && r.destroy()
                        }
                        this.loaders = {},
                        t.prototype.destroy.call(this)
                    }
                    ,
                    i.prototype.onFragLoading = function(t) {
                        var i = t.frag
                          , r = i.type
                          , s = this.loaders
                          , o = this.hls.config
                          , a = o.fLoader
                          , l = o.loader;
                        i.loaded = 0;
                        var d = s[r];
                        d && (n.logger.warn("abort previous fragment loader for type: " + r),
                        d.abort()),
                        d = s[r] = i.loader = o.fLoader ? new a(o) : new l(o);
                        var u, c, h;
                        u = {
                            url: i.url,
                            frag: i,
                            responseType: "arraybuffer",
                            progressData: !1
                        };
                        var f = i.byteRangeStartOffset
                          , p = i.byteRangeEndOffset;
                        e.isFinite(f) && e.isFinite(p) && (u.rangeStart = f,
                        u.rangeEnd = p),
                        c = {
                            timeout: o.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: 0,
                            maxRetryDelay: o.fragLoadingMaxRetryTimeout
                        },
                        h = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this),
                            onProgress: this.loadprogress.bind(this)
                        },
                        d.load(u, c, h)
                    }
                    ,
                    i.prototype.loadsuccess = function(e, t, i, r) {
                        void 0 === r && (r = null);
                        var o = e.data
                          , a = i.frag;
                        a.loader = undefined,
                        this.loaders[a.type] = undefined,
                        this.hls.trigger(s["default"].FRAG_LOADED, {
                            payload: o,
                            frag: a,
                            stats: t,
                            networkDetails: r
                        })
                    }
                    ,
                    i.prototype.loaderror = function(e, t, i) {
                        void 0 === i && (i = null);
                        var r = t.frag
                          , o = r.loader;
                        o && o.abort(),
                        this.loaders[r.type] = undefined,
                        this.hls.trigger(s["default"].ERROR, {
                            type: a.ErrorTypes.NETWORK_ERROR,
                            details: a.ErrorDetails.FRAG_LOAD_ERROR,
                            fatal: !1,
                            frag: t.frag,
                            response: e,
                            networkDetails: i
                        })
                    }
                    ,
                    i.prototype.loadtimeout = function(e, t, i) {
                        void 0 === i && (i = null);
                        var r = t.frag
                          , o = r.loader;
                        o && o.abort(),
                        this.loaders[r.type] = undefined,
                        this.hls.trigger(s["default"].ERROR, {
                            type: a.ErrorTypes.NETWORK_ERROR,
                            details: a.ErrorDetails.FRAG_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: t.frag,
                            networkDetails: i
                        })
                    }
                    ,
                    i.prototype.loadprogress = function(e, t, i, r) {
                        void 0 === r && (r = null);
                        var o = t.frag;
                        o.loaded = e.loaded,
                        this.hls.trigger(s["default"].FRAG_LOAD_PROGRESS, {
                            frag: o,
                            stats: e,
                            networkDetails: r
                        })
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = l
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/loader/fragment.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./node_modules/url-toolkit/src/url-toolkit.js")
                  , s = i("./src/loader/level-key.js")
                  , o = function() {
                    function t() {
                        var e;
                        this._url = null,
                        this._byteRange = null,
                        this._decryptdata = null,
                        this.tagList = [],
                        this.programDateTime = null,
                        this.rawProgramDateTime = null,
                        this._elementaryStreams = (e = {},
                        e[t.ElementaryStreamTypes.AUDIO] = !1,
                        e[t.ElementaryStreamTypes.VIDEO] = !1,
                        e)
                    }
                    return Object.defineProperty(t, "ElementaryStreamTypes", {
                        get: function() {
                            return {
                                AUDIO: "audio",
                                VIDEO: "video"
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "url", {
                        get: function() {
                            return !this._url && this.relurl && (this._url = r.buildAbsoluteURL(this.baseurl, this.relurl, {
                                alwaysNormalize: !0
                            })),
                            this._url
                        },
                        set: function(e) {
                            this._url = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "byteRange", {
                        get: function() {
                            if (!this._byteRange && !this.rawByteRange)
                                return [];
                            if (this._byteRange)
                                return this._byteRange;
                            var e = [];
                            if (this.rawByteRange) {
                                var t = this.rawByteRange.split("@", 2);
                                if (1 === t.length) {
                                    var i = this.lastByteRangeEndOffset;
                                    e[0] = i || 0
                                } else
                                    e[0] = parseInt(t[1]);
                                e[1] = parseInt(t[0]) + e[0],
                                this._byteRange = e
                            }
                            return e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "byteRangeStartOffset", {
                        get: function() {
                            return this.byteRange[0]
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "byteRangeEndOffset", {
                        get: function() {
                            return this.byteRange[1]
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "decryptdata", {
                        get: function() {
                            return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)),
                            this._decryptdata
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "endProgramDateTime", {
                        get: function() {
                            if (!e.isFinite(this.programDateTime))
                                return null;
                            var t = e.isFinite(this.duration) ? this.duration : 0;
                            return this.programDateTime + 1e3 * t
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "encrypted", {
                        get: function() {
                            return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "end", {
                        get: function() {
                            return this.start + this.duration
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.compareTimeInterval = function(e) {
                        return e < this.start ? e - this.start : e > this.end ? this.end + e : 0
                    }
                    ,
                    t.prototype.addElementaryStream = function(e) {
                        this._elementaryStreams[e] = !0
                    }
                    ,
                    t.prototype.hasElementaryStream = function(e) {
                        return !0 === this._elementaryStreams[e]
                    }
                    ,
                    t.prototype.createInitializationVector = function(e) {
                        for (var t = new Uint8Array(16), i = 12; i < 16; i++)
                            t[i] = e >> 8 * (15 - i) & 255;
                        return t
                    }
                    ,
                    t.prototype.fragmentDecryptdataFromLevelkey = function(e, t) {
                        var i = e;
                        return e && e.method && e.uri && !e.iv && (i = new s["default"],
                        i.method = e.method,
                        i.baseuri = e.baseuri,
                        i.reluri = e.reluri,
                        i.iv = this.createInitializationVector(t)),
                        i
                    }
                    ,
                    t
                }();
                t["default"] = o
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/loader/key-loader.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/events.js")
              , o = i("./src/event-handler.js")
              , a = i("./src/errors.js")
              , n = i("./src/utils/logger.js")
              , l = function(e) {
                function t(t) {
                    var i = e.call(this, t, s["default"].KEY_LOADING) || this;
                    return i.loaders = {},
                    i.decryptkey = null,
                    i.decrypturl = null,
                    i
                }
                return r(t, e),
                t.prototype.destroy = function() {
                    for (var e in this.loaders) {
                        var t = this.loaders[e];
                        t && t.destroy()
                    }
                    this.loaders = {},
                    o["default"].prototype.destroy.call(this)
                }
                ,
                t.prototype.onKeyLoading = function(e) {
                    var t = e.frag
                      , i = t.type
                      , r = this.loaders[i]
                      , o = t.decryptdata
                      , a = o.uri;
                    if (a !== this.decrypturl || null === this.decryptkey) {
                        var l = this.hls.config;
                        r && (n.logger.warn("abort previous key loader for type:" + i),
                        r.abort()),
                        t.loader = this.loaders[i] = new l.loader(l),
                        this.decrypturl = a,
                        this.decryptkey = null;
                        var d = void 0
                          , u = void 0
                          , c = void 0;
                        d = {
                            url: a,
                            frag: t,
                            responseType: "arraybuffer"
                        },
                        u = {
                            timeout: l.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: l.fragLoadingRetryDelay,
                            maxRetryDelay: l.fragLoadingMaxRetryTimeout
                        },
                        c = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        },
                        t.loader.load(d, u, c)
                    } else
                        this.decryptkey && (o.key = this.decryptkey,
                        this.hls.trigger(s["default"].KEY_LOADED, {
                            frag: t
                        }))
                }
                ,
                t.prototype.loadsuccess = function(e, t, i) {
                    var r = i.frag;
                    this.decryptkey = r.decryptdata.key = new Uint8Array(e.data),
                    r.loader = undefined,
                    this.loaders[r.type] = undefined,
                    this.hls.trigger(s["default"].KEY_LOADED, {
                        frag: r
                    })
                }
                ,
                t.prototype.loaderror = function(e, t) {
                    var i = t.frag
                      , r = i.loader;
                    r && r.abort(),
                    this.loaders[t.type] = undefined,
                    this.hls.trigger(s["default"].ERROR, {
                        type: a.ErrorTypes.NETWORK_ERROR,
                        details: a.ErrorDetails.KEY_LOAD_ERROR,
                        fatal: !1,
                        frag: i,
                        response: e
                    })
                }
                ,
                t.prototype.loadtimeout = function(e, t) {
                    var i = t.frag
                      , r = i.loader;
                    r && r.abort(),
                    this.loaders[t.type] = undefined,
                    this.hls.trigger(s["default"].ERROR, {
                        type: a.ErrorTypes.NETWORK_ERROR,
                        details: a.ErrorDetails.KEY_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: i
                    })
                }
                ,
                t
            }(o["default"]);
            t["default"] = l
        },
        "./src/loader/level-key.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./node_modules/url-toolkit/src/url-toolkit.js")
              , s = function() {
                function e() {
                    this.method = null,
                    this.key = null,
                    this.iv = null,
                    this._uri = null
                }
                return Object.defineProperty(e.prototype, "uri", {
                    get: function() {
                        return !this._uri && this.reluri && (this._uri = r.buildAbsoluteURL(this.baseuri, this.reluri, {
                            alwaysNormalize: !0
                        })),
                        this._uri
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e
            }();
            t["default"] = s
        },
        "./src/loader/level.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                    function t(e) {
                        this.endCC = 0,
                        this.endSN = 0,
                        this.fragments = [],
                        this.initSegment = null,
                        this.live = !0,
                        this.needSidxRanges = !1,
                        this.startCC = 0,
                        this.startSN = 0,
                        this.startTimeOffset = null,
                        this.targetduration = 0,
                        this.totalduration = 0,
                        this.type = null,
                        this.url = e,
                        this.version = null
                    }
                    return Object.defineProperty(t.prototype, "hasProgramDateTime", {
                        get: function() {
                            return !(!this.fragments[0] || !e.isFinite(this.fragments[0].programDateTime))
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t
                }();
                t["default"] = i
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/loader/m3u8-parser.js": function(e, t, i) {
            "use strict";
            (function(e) {
                function r(e, t) {
                    for (var i = e[t], r = t - 1; r >= 0; r--) {
                        var s = e[r];
                        s.programDateTime = i.programDateTime - 1e3 * s.duration,
                        i = s
                    }
                }
                function s(t, i) {
                    t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : i && i.programDateTime && (t.programDateTime = i.endProgramDateTime),
                    e.isFinite(t.programDateTime) || (t.programDateTime = null,
                    t.rawProgramDateTime = null)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = i("./node_modules/url-toolkit/src/url-toolkit.js")
                  , a = i("./src/loader/fragment.js")
                  , n = i("./src/loader/level.js")
                  , l = i("./src/loader/level-key.js")
                  , d = i("./src/utils/attr-list.js")
                  , u = i("./src/utils/logger.js")
                  , c = i("./src/utils/codecs.js")
                  , h = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g
                  , f = /#EXT-X-MEDIA:(.*)/g
                  , p = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""),"g")
                  , v = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/
                  , g = /\.(mp4|m4s|m4v|m4a)$/i
                  , m = function() {
                    function t() {}
                    return t.findGroup = function(e, t) {
                        if (!e)
                            return null;
                        for (var i = null, r = 0; r < e.length; r++) {
                            var s = e[r];
                            s.id === t && (i = s)
                        }
                        return i
                    }
                    ,
                    t.convertAVC1ToAVCOTI = function(e) {
                        var t, i = e.split(".");
                        return i.length > 2 ? (t = i.shift() + ".",
                        t += parseInt(i.shift()).toString(16),
                        t += ("000" + parseInt(i.shift()).toString(16)).substr(-4)) : t = e,
                        t
                    }
                    ,
                    t.resolve = function(e, t) {
                        return o.buildAbsoluteURL(t, e, {
                            alwaysNormalize: !0
                        })
                    }
                    ,
                    t.parseMasterPlaylist = function(e, i) {
                        var r, s = [];
                        for (h.lastIndex = 0; null != (r = h.exec(e)); ) {
                            var o = {}
                              , a = o.attrs = new d["default"](r[1]);
                            o.url = t.resolve(r[2], i);
                            var n = a.decimalResolution("RESOLUTION");
                            n && (o.width = n.width,
                            o.height = n.height),
                            o.bitrate = a.decimalInteger("AVERAGE-BANDWIDTH") || a.decimalInteger("BANDWIDTH"),
                            o.name = a.NAME,
                            function(e, t) {
                                ["video", "audio"].forEach(function(i) {
                                    var r = e.filter(function(e) {
                                        return c.isCodecType(e, i)
                                    });
                                    if (r.length) {
                                        var s = r.filter(function(e) {
                                            return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
                                        });
                                        t[i + "Codec"] = s.length > 0 ? s[0] : r[0],
                                        e = e.filter(function(e) {
                                            return -1 === r.indexOf(e)
                                        })
                                    }
                                }),
                                t.unknownCodecs = e
                            }([].concat((a.CODECS || "").split(/[ ,]+/)), o),
                            o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = t.convertAVC1ToAVCOTI(o.videoCodec)),
                            s.push(o)
                        }
                        return s
                    }
                    ,
                    t.parseMasterPlaylistMedia = function(e, i, r, s) {
                        void 0 === s && (s = []);
                        var o, a = [], n = 0;
                        for (f.lastIndex = 0; null !== (o = f.exec(e)); ) {
                            var l = {}
                              , u = new d["default"](o[1]);
                            if (u.TYPE === r) {
                                if (l.groupId = u["GROUP-ID"],
                                l.name = u.NAME,
                                l.type = r,
                                l["default"] = "YES" === u.DEFAULT,
                                l.autoselect = "YES" === u.AUTOSELECT,
                                l.forced = "YES" === u.FORCED,
                                u.URI && (l.url = t.resolve(u.URI, i)),
                                l.lang = u.LANGUAGE,
                                l.name || (l.name = l.lang),
                                s.length) {
                                    var c = t.findGroup(s, l.groupId);
                                    l.audioCodec = c ? c.codec : s[0].codec
                                }
                                l.id = n++,
                                a.push(l)
                            }
                        }
                        return a
                    }
                    ,
                    t.parseLevelPlaylist = function(t, i, o, c, h) {
                        var f, m, y = 0, b = 0, _ = new n["default"](i), E = new l["default"], w = 0, k = null, T = new a["default"], S = null;
                        for (p.lastIndex = 0; null !== (f = p.exec(t)); ) {
                            var A = f[1];
                            if (A) {
                                T.duration = parseFloat(A);
                                var x = (" " + f[2]).slice(1);
                                T.title = x || null,
                                T.tagList.push(x ? ["INF", A, x] : ["INF", A])
                            } else if (f[3]) {
                                if (e.isFinite(T.duration)) {
                                    var L = y++;
                                    T.type = c,
                                    T.start = b,
                                    T.levelkey = E,
                                    T.sn = L,
                                    T.level = o,
                                    T.cc = w,
                                    T.urlId = h,
                                    T.baseurl = i,
                                    T.relurl = (" " + f[3]).slice(1),
                                    s(T, k),
                                    _.fragments.push(T),
                                    k = T,
                                    b += T.duration,
                                    T = new a["default"]
                                }
                            } else if (f[4]) {
                                if (T.rawByteRange = (" " + f[4]).slice(1),
                                k) {
                                    var P = k.byteRangeEndOffset;
                                    P && (T.lastByteRangeEndOffset = P)
                                }
                            } else if (f[5])
                                T.rawProgramDateTime = (" " + f[5]).slice(1),
                                T.tagList.push(["PROGRAM-DATE-TIME", T.rawProgramDateTime]),
                                null === S && (S = _.fragments.length);
                            else {
                                for (f = f[0].match(v),
                                m = 1; m < f.length && f[m] === undefined; m++)
                                    ;
                                var R = (" " + f[m + 1]).slice(1)
                                  , C = (" " + f[m + 2]).slice(1);
                                switch (f[m]) {
                                case "#":
                                    T.tagList.push(C ? [R, C] : [R]);
                                    break;
                                case "PLAYLIST-TYPE":
                                    _.type = R.toUpperCase();
                                    break;
                                case "MEDIA-SEQUENCE":
                                    y = _.startSN = parseInt(R);
                                    break;
                                case "TARGETDURATION":
                                    _.targetduration = parseFloat(R);
                                    break;
                                case "VERSION":
                                    _.version = parseInt(R);
                                    break;
                                case "EXTM3U":
                                    break;
                                case "ENDLIST":
                                    _.live = !1;
                                    break;
                                case "DIS":
                                    w++,
                                    T.tagList.push(["DIS"]);
                                    break;
                                case "DISCONTINUITY-SEQ":
                                    w = parseInt(R);
                                    break;
                                case "KEY":
                                    var D = R
                                      , I = new d["default"](D)
                                      , O = I.enumeratedString("METHOD")
                                      , M = I.URI
                                      , F = I.hexadecimalInteger("IV");
                                    O && (E = new l["default"],
                                    M && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(O) >= 0 && (E.method = O,
                                    E.baseuri = i,
                                    E.reluri = M,
                                    E.key = null,
                                    E.iv = F));
                                    break;
                                case "START":
                                    var N = R
                                      , B = new d["default"](N)
                                      , j = B.decimalFloatingPoint("TIME-OFFSET");
                                    e.isFinite(j) && (_.startTimeOffset = j);
                                    break;
                                case "MAP":
                                    var U = new d["default"](R);
                                    T.relurl = U.URI,
                                    T.rawByteRange = U.BYTERANGE,
                                    T.baseurl = i,
                                    T.level = o,
                                    T.type = c,
                                    T.sn = "initSegment",
                                    _.initSegment = T,
                                    T = new a["default"],
                                    T.rawProgramDateTime = _.initSegment.rawProgramDateTime;
                                    break;
                                default:
                                    u.logger.warn("line parsed but not handled: " + f)
                                }
                            }
                        }
                        return T = k,
                        T && !T.relurl && (_.fragments.pop(),
                        b -= T.duration),
                        _.totalduration = b,
                        _.averagetargetduration = b / _.fragments.length,
                        _.endSN = y - 1,
                        _.startCC = _.fragments[0] ? _.fragments[0].cc : 0,
                        _.endCC = w,
                        !_.initSegment && _.fragments.length && _.fragments.every(function(e) {
                            return g.test(e.relurl)
                        }) && (u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),
                        T = new a["default"],
                        T.relurl = _.fragments[0].relurl,
                        T.baseurl = i,
                        T.level = o,
                        T.type = c,
                        T.sn = "initSegment",
                        _.initSegment = T,
                        _.needSidxRanges = !0),
                        S && r(_.fragments, S),
                        _
                    }
                    ,
                    t
                }();
                t["default"] = m
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/loader/playlist-loader.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                        new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , a = i("./src/errors.js")
                  , n = i("./src/utils/logger.js")
                  , l = i("./src/demux/mp4demuxer.js")
                  , d = i("./src/loader/m3u8-parser.js")
                  , u = window.performance
                  , c = {
                    MANIFEST: "manifest",
                    LEVEL: "level",
                    AUDIO_TRACK: "audioTrack",
                    SUBTITLE_TRACK: "subtitleTrack"
                }
                  , h = {
                    MAIN: "main",
                    AUDIO: "audio",
                    SUBTITLE: "subtitle"
                }
                  , f = function(t) {
                    function i(e) {
                        var i = t.call(this, e, s["default"].MANIFEST_LOADING, s["default"].LEVEL_LOADING, s["default"].AUDIO_TRACK_LOADING, s["default"].SUBTITLE_TRACK_LOADING) || this;
                        return i.loaders = {},
                        i
                    }
                    return r(i, t),
                    Object.defineProperty(i, "ContextType", {
                        get: function() {
                            return c
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(i, "LevelType", {
                        get: function() {
                            return h
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    i.canHaveQualityLevels = function(e) {
                        return e !== c.AUDIO_TRACK && e !== c.SUBTITLE_TRACK
                    }
                    ,
                    i.mapContextToLevelType = function(e) {
                        switch (e.type) {
                        case c.AUDIO_TRACK:
                            return h.AUDIO;
                        case c.SUBTITLE_TRACK:
                            return h.SUBTITLE;
                        default:
                            return h.MAIN
                        }
                    }
                    ,
                    i.getResponseUrl = function(e, t) {
                        var i = e.url;
                        return i !== undefined && 0 !== i.indexOf("data:") || (i = t.url),
                        i
                    }
                    ,
                    i.prototype.createInternalLoader = function(e) {
                        var t = this.hls.config
                          , i = t.pLoader
                          , r = t.loader
                          , s = i || r
                          , o = new s(t);
                        return e.loader = o,
                        this.loaders[e.type] = o,
                        o
                    }
                    ,
                    i.prototype.getInternalLoader = function(e) {
                        return this.loaders[e.type]
                    }
                    ,
                    i.prototype.resetInternalLoader = function(e) {
                        this.loaders[e] && delete this.loaders[e]
                    }
                    ,
                    i.prototype.destroyInternalLoaders = function() {
                        for (var e in this.loaders) {
                            var t = this.loaders[e];
                            t && t.destroy(),
                            this.resetInternalLoader(e)
                        }
                    }
                    ,
                    i.prototype.destroy = function() {
                        this.destroyInternalLoaders(),
                        t.prototype.destroy.call(this)
                    }
                    ,
                    i.prototype.onManifestLoading = function(e) {
                        this.load(e.url, {
                            type: c.MANIFEST,
                            level: 0,
                            id: null
                        })
                    }
                    ,
                    i.prototype.onLevelLoading = function(e) {
                        this.load(e.url, {
                            type: c.LEVEL,
                            level: e.level,
                            id: e.id
                        })
                    }
                    ,
                    i.prototype.onAudioTrackLoading = function(e) {
                        this.load(e.url, {
                            type: c.AUDIO_TRACK,
                            level: null,
                            id: e.id
                        })
                    }
                    ,
                    i.prototype.onSubtitleTrackLoading = function(e) {
                        this.load(e.url, {
                            type: c.SUBTITLE_TRACK,
                            level: null,
                            id: e.id
                        })
                    }
                    ,
                    i.prototype.load = function(e, t) {
                        var i = this.hls.config;
                        n.logger.debug("Loading playlist of type " + t.type + ", level: " + t.level + ", id: " + t.id);
                        var r = this.getInternalLoader(t);
                        if (r) {
                            var s = r.context;
                            if (s && s.url === e)
                                return n.logger.trace("playlist request ongoing"),
                                !1;
                            n.logger.warn("aborting previous loader for type: " + t.type),
                            r.abort()
                        }
                        var o, a, l, d;
                        switch (t.type) {
                        case c.MANIFEST:
                            o = i.manifestLoadingMaxRetry,
                            a = i.manifestLoadingTimeOut,
                            l = i.manifestLoadingRetryDelay,
                            d = i.manifestLoadingMaxRetryTimeout;
                            break;
                        case c.LEVEL:
                            o = 0,
                            a = i.levelLoadingTimeOut;
                            break;
                        default:
                            o = i.levelLoadingMaxRetry,
                            a = i.levelLoadingTimeOut,
                            l = i.levelLoadingRetryDelay,
                            d = i.levelLoadingMaxRetryTimeout
                        }
                        r = this.createInternalLoader(t),
                        t.url = e,
                        t.responseType = t.responseType || "";
                        var u = {
                            timeout: a,
                            maxRetry: o,
                            retryDelay: l,
                            maxRetryDelay: d
                        }
                          , h = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        };
                        return n.logger.debug("Calling internal loader delegate for URL: " + e),
                        r.load(t, u, h),
                        !0
                    }
                    ,
                    i.prototype.loadsuccess = function(e, t, i, r) {
                        if (void 0 === r && (r = null),
                        i.isSidxRequest)
                            return this._handleSidxRequest(e, i),
                            void this._handlePlaylistLoaded(e, t, i, r);
                        this.resetInternalLoader(i.type);
                        var s = e.data;
                        if (t.tload = u.now(),
                        0 !== s.indexOf("#EXTM3U"))
                            return void this._handleManifestParsingError(e, i, "no EXTM3U delimiter", r);
                        s.indexOf("#EXTINF:") > 0 || s.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, i, r) : this._handleMasterPlaylist(e, t, i, r)
                    }
                    ,
                    i.prototype.loaderror = function(e, t, i) {
                        void 0 === i && (i = null),
                        this._handleNetworkError(t, i)
                    }
                    ,
                    i.prototype.loadtimeout = function(e, t, i) {
                        void 0 === i && (i = null),
                        this._handleNetworkError(t, i, !0)
                    }
                    ,
                    i.prototype._handleMasterPlaylist = function(e, t, r, o) {
                        var a = this.hls
                          , l = e.data
                          , u = i.getResponseUrl(e, r)
                          , c = d["default"].parseMasterPlaylist(l, u);
                        if (!c.length)
                            return void this._handleManifestParsingError(e, r, "no level found in manifest", o);
                        var h = c.map(function(e) {
                            return {
                                id: e.attrs.AUDIO,
                                codec: e.audioCodec
                            }
                        })
                          , f = d["default"].parseMasterPlaylistMedia(l, u, "AUDIO", h)
                          , p = d["default"].parseMasterPlaylistMedia(l, u, "SUBTITLES");
                        if (f.length) {
                            var v = !1;
                            f.forEach(function(e) {
                                e.url || (v = !0)
                            }),
                            !1 === v && c[0].audioCodec && !c[0].attrs.AUDIO && (n.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),
                            f.unshift({
                                type: "main",
                                name: "main"
                            }))
                        }
                        a.trigger(s["default"].MANIFEST_LOADED, {
                            levels: c,
                            audioTracks: f,
                            subtitles: p,
                            url: u,
                            stats: t,
                            networkDetails: o
                        })
                    }
                    ,
                    i.prototype._handleTrackOrLevelPlaylist = function(t, r, o, a) {
                        var n = this.hls
                          , l = o.id
                          , h = o.level
                          , f = o.type
                          , p = i.getResponseUrl(t, o)
                          , v = e.isFinite(l) ? l : 0
                          , g = e.isFinite(h) ? h : v
                          , m = i.mapContextToLevelType(o)
                          , y = d["default"].parseLevelPlaylist(t.data, p, g, m, v);
                        if (y.tload = r.tload,
                        f === c.MANIFEST) {
                            var b = {
                                url: p,
                                details: y
                            };
                            n.trigger(s["default"].MANIFEST_LOADED, {
                                levels: [b],
                                audioTracks: [],
                                url: p,
                                stats: r,
                                networkDetails: a
                            })
                        }
                        if (r.tparsed = u.now(),
                        y.needSidxRanges) {
                            var _ = y.initSegment.url;
                            return void this.load(_, {
                                isSidxRequest: !0,
                                type: f,
                                level: h,
                                levelDetails: y,
                                id: l,
                                rangeStart: 0,
                                rangeEnd: 2048,
                                responseType: "arraybuffer"
                            })
                        }
                        o.levelDetails = y,
                        this._handlePlaylistLoaded(t, r, o, a)
                    }
                    ,
                    i.prototype._handleSidxRequest = function(e, t) {
                        var i = l["default"].parseSegmentIndex(new Uint8Array(e.data));
                        i.references.forEach(function(e, i) {
                            var r = e.info
                              , s = t.levelDetails.fragments[i];
                            0 === s.byteRange.length && (s.rawByteRange = String(1 + r.end - r.start) + "@" + String(r.start))
                        }),
                        t.levelDetails.initSegment.rawByteRange = String(i.moovEndOffset) + "@0"
                    }
                    ,
                    i.prototype._handleManifestParsingError = function(e, t, i, r) {
                        this.hls.trigger(s["default"].ERROR, {
                            type: a.ErrorTypes.NETWORK_ERROR,
                            details: a.ErrorDetails.MANIFEST_PARSING_ERROR,
                            fatal: !0,
                            url: e.url,
                            reason: i,
                            networkDetails: r
                        })
                    }
                    ,
                    i.prototype._handleNetworkError = function(e, t, i) {
                        void 0 === i && (i = !1),
                        n.logger.info("A network error occured while loading a " + e.type + "-type playlist");
                        var r, o, l = this.getInternalLoader(e);
                        switch (e.type) {
                        case c.MANIFEST:
                            r = i ? a.ErrorDetails.MANIFEST_LOAD_TIMEOUT : a.ErrorDetails.MANIFEST_LOAD_ERROR,
                            o = !0;
                            break;
                        case c.LEVEL:
                            r = i ? a.ErrorDetails.LEVEL_LOAD_TIMEOUT : a.ErrorDetails.LEVEL_LOAD_ERROR,
                            o = !1;
                            break;
                        case c.AUDIO_TRACK:
                            r = i ? a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                            o = !1;
                            break;
                        default:
                            o = !1
                        }
                        l && (l.abort(),
                        this.resetInternalLoader(e.type)),
                        this.hls.trigger(s["default"].ERROR, {
                            type: a.ErrorTypes.NETWORK_ERROR,
                            details: r,
                            fatal: o,
                            url: l.url,
                            loader: l,
                            context: e,
                            networkDetails: t
                        })
                    }
                    ,
                    i.prototype._handlePlaylistLoaded = function(e, t, r, o) {
                        var a = r.type
                          , n = r.level
                          , l = r.id
                          , d = r.levelDetails;
                        if (!d.targetduration)
                            return void this._handleManifestParsingError(e, r, "invalid target duration", o);
                        if (i.canHaveQualityLevels(r.type))
                            this.hls.trigger(s["default"].LEVEL_LOADED, {
                                details: d,
                                level: n || 0,
                                id: l || 0,
                                stats: t,
                                networkDetails: o
                            });
                        else
                            switch (a) {
                            case c.AUDIO_TRACK:
                                this.hls.trigger(s["default"].AUDIO_TRACK_LOADED, {
                                    details: d,
                                    id: l,
                                    stats: t,
                                    networkDetails: o
                                });
                                break;
                            case c.SUBTITLE_TRACK:
                                this.hls.trigger(s["default"].SUBTITLE_TRACK_LOADED, {
                                    details: d,
                                    id: l,
                                    stats: t,
                                    networkDetails: o
                                })
                            }
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = f
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/observer.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./node_modules/eventemitter3/index.js")
              , o = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e),
                t.prototype.trigger = function(e) {
                    for (var t = [], i = 1; i < arguments.length; i++)
                        t[i - 1] = arguments[i];
                    this.emit.apply(this, [e, e].concat(t))
                }
                ,
                t
            }(s.EventEmitter);
            t.Observer = o
        },
        "./src/polyfills/number.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/utils/get-self-scope.js")
              , s = r.getSelfScope()
              , o = s.Number;
            t.Number = o,
            o.isFinite = o.isFinite || function(e) {
                return "number" == typeof e && isFinite(e)
            }
        },
        "./src/remux/aac-helper.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e() {}
                return e.getSilentFrame = function(e, t) {
                    switch (e) {
                    case "mp4a.40.2":
                        if (1 === t)
                            return new Uint8Array([0, 200, 0, 128, 35, 128]);
                        if (2 === t)
                            return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                        if (3 === t)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                        if (4 === t)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                        if (5 === t)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                        if (6 === t)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                        break;
                    default:
                        if (1 === t)
                            return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (2 === t)
                            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (3 === t)
                            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                    }
                    return null
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/remux/mp4-generator.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Math.pow(2, 32) - 1
              , s = function() {
                function e() {}
                return e.init = function() {
                    e.types = {
                        avc1: [],
                        avcC: [],
                        btrt: [],
                        dinf: [],
                        dref: [],
                        esds: [],
                        ftyp: [],
                        hdlr: [],
                        mdat: [],
                        mdhd: [],
                        mdia: [],
                        mfhd: [],
                        minf: [],
                        moof: [],
                        moov: [],
                        mp4a: [],
                        ".mp3": [],
                        mvex: [],
                        mvhd: [],
                        pasp: [],
                        sdtp: [],
                        stbl: [],
                        stco: [],
                        stsc: [],
                        stsd: [],
                        stsz: [],
                        stts: [],
                        tfdt: [],
                        tfhd: [],
                        traf: [],
                        trak: [],
                        trun: [],
                        trex: [],
                        tkhd: [],
                        vmhd: [],
                        smhd: []
                    };
                    var t;
                    for (t in e.types)
                        e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                    var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0])
                      , r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                    e.HDLR_TYPES = {
                        video: i,
                        audio: r
                    };
                    var s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])
                      , o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    e.STTS = e.STSC = e.STCO = o,
                    e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
                    e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                    e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                    var a = new Uint8Array([105, 115, 111, 109])
                      , n = new Uint8Array([97, 118, 99, 49])
                      , l = new Uint8Array([0, 0, 0, 1]);
                    e.FTYP = e.box(e.types.ftyp, a, l, a, n),
                    e.DINF = e.box(e.types.dinf, e.box(e.types.dref, s))
                }
                ,
                e.box = function(e) {
                    for (var t, i = Array.prototype.slice.call(arguments, 1), r = 8, s = i.length, o = s; s--; )
                        r += i[s].byteLength;
                    for (t = new Uint8Array(r),
                    t[0] = r >> 24 & 255,
                    t[1] = r >> 16 & 255,
                    t[2] = r >> 8 & 255,
                    t[3] = 255 & r,
                    t.set(e, 4),
                    s = 0,
                    r = 8; s < o; s++)
                        t.set(i[s], r),
                        r += i[s].byteLength;
                    return t
                }
                ,
                e.hdlr = function(t) {
                    return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                }
                ,
                e.mdat = function(t) {
                    return e.box(e.types.mdat, t)
                }
                ,
                e.mdhd = function(t, i) {
                    i *= t;
                    var s = Math.floor(i / (r + 1))
                      , o = Math.floor(i % (r + 1));
                    return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 85, 196, 0, 0]))
                }
                ,
                e.mdia = function(t) {
                    return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                }
                ,
                e.mfhd = function(t) {
                    return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                }
                ,
                e.minf = function(t) {
                    return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
                }
                ,
                e.moof = function(t, i, r) {
                    return e.box(e.types.moof, e.mfhd(t), e.traf(r, i))
                }
                ,
                e.moov = function(t) {
                    for (var i = t.length, r = []; i--; )
                        r[i] = e.trak(t[i]);
                    return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(r).concat(e.mvex(t)))
                }
                ,
                e.mvex = function(t) {
                    for (var i = t.length, r = []; i--; )
                        r[i] = e.trex(t[i]);
                    return e.box.apply(null, [e.types.mvex].concat(r))
                }
                ,
                e.mvhd = function(t, i) {
                    i *= t;
                    var s = Math.floor(i / (r + 1))
                      , o = Math.floor(i % (r + 1))
                      , a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return e.box(e.types.mvhd, a)
                }
                ,
                e.sdtp = function(t) {
                    var i, r, s = t.samples || [], o = new Uint8Array(4 + s.length);
                    for (r = 0; r < s.length; r++)
                        i = s[r].flags,
                        o[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                    return e.box(e.types.sdtp, o)
                }
                ,
                e.stbl = function(t) {
                    return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
                }
                ,
                e.avc1 = function(t) {
                    var i, r, s, o = [], a = [];
                    for (i = 0; i < t.sps.length; i++)
                        r = t.sps[i],
                        s = r.byteLength,
                        o.push(s >>> 8 & 255),
                        o.push(255 & s),
                        o = o.concat(Array.prototype.slice.call(r));
                    for (i = 0; i < t.pps.length; i++)
                        r = t.pps[i],
                        s = r.byteLength,
                        a.push(s >>> 8 & 255),
                        a.push(255 & s),
                        a = a.concat(Array.prototype.slice.call(r));
                    var n = e.box(e.types.avcC, new Uint8Array([1, o[3], o[4], o[5], 255, 224 | t.sps.length].concat(o).concat([t.pps.length]).concat(a)))
                      , l = t.width
                      , d = t.height
                      , u = t.pixelRatio[0]
                      , c = t.pixelRatio[1];
                    return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, d >> 8 & 255, 255 & d, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), n, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
                }
                ,
                e.esds = function(e) {
                    var t = e.config.length;
                    return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
                }
                ,
                e.mp4a = function(t) {
                    var i = t.samplerate;
                    return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]), e.box(e.types.esds, e.esds(t)))
                }
                ,
                e.mp3 = function(t) {
                    var i = t.samplerate;
                    return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]))
                }
                ,
                e.stsd = function(t) {
                    return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
                }
                ,
                e.tkhd = function(t) {
                    var i = t.id
                      , s = t.duration * t.timescale
                      , o = t.width
                      , a = t.height
                      , n = Math.floor(s / (r + 1))
                      , l = Math.floor(s % (r + 1));
                    return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, o >> 8 & 255, 255 & o, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
                }
                ,
                e.traf = function(t, i) {
                    var s = e.sdtp(t)
                      , o = t.id
                      , a = Math.floor(i / (r + 1))
                      , n = Math.floor(i % (r + 1));
                    return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), e.trun(t, s.length + 16 + 20 + 8 + 16 + 8 + 8), s)
                }
                ,
                e.trak = function(t) {
                    return t.duration = t.duration || 4294967295,
                    e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                }
                ,
                e.trex = function(t) {
                    var i = t.id;
                    return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                }
                ,
                e.trun = function(t, i) {
                    var r, s, o, a, n, l, d = t.samples || [], u = d.length, c = 12 + 16 * u, h = new Uint8Array(c);
                    for (i += 8 + c,
                    h.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i], 0),
                    r = 0; r < u; r++)
                        s = d[r],
                        o = s.duration,
                        a = s.size,
                        n = s.flags,
                        l = s.cts,
                        h.set([o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, n.isLeading << 2 | n.dependsOn, n.isDependedOn << 6 | n.hasRedundancy << 4 | n.paddingValue << 1 | n.isNonSync, 61440 & n.degradPrio, 15 & n.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * r);
                    return e.box(e.types.trun, h)
                }
                ,
                e.initSegment = function(t) {
                    e.types || e.init();
                    var i, r = e.moov(t);
                    return i = new Uint8Array(e.FTYP.byteLength + r.byteLength),
                    i.set(e.FTYP),
                    i.set(r, e.FTYP.byteLength),
                    i
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/remux/mp4-remuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/remux/aac-helper.js")
              , s = i("./src/remux/mp4-generator.js")
              , o = i("./src/events.js")
              , a = i("./src/errors.js")
              , n = i("./src/utils/logger.js")
              , l = function() {
                function e(e, t, i, r) {
                    this.observer = e,
                    this.config = t,
                    this.typeSupported = i;
                    var s = navigator.userAgent;
                    this.isSafari = r && r.indexOf("Apple") > -1 && s && !s.match("CriOS"),
                    this.ISGenerated = !1
                }
                return e.prototype.destroy = function() {}
                ,
                e.prototype.resetTimeStamp = function(e) {
                    this._initPTS = this._initDTS = e
                }
                ,
                e.prototype.resetInitSegment = function() {
                    this.ISGenerated = !1
                }
                ,
                e.prototype.remux = function(e, t, i, r, s, a, l) {
                    if (this.ISGenerated || this.generateIS(e, t, s),
                    this.ISGenerated) {
                        var d = e.samples.length
                          , u = t.samples.length
                          , c = s
                          , h = s;
                        if (d && u) {
                            var f = (e.samples[0].dts - t.samples[0].dts) / t.inputTimeScale;
                            c += Math.max(0, f),
                            h += Math.max(0, -f)
                        }
                        if (d) {
                            e.timescale || (n.logger.warn("regenerate InitSegment as audio detected"),
                            this.generateIS(e, t, s));
                            var p = this.remuxAudio(e, c, a, l);
                            if (u) {
                                var v = void 0;
                                p && (v = p.endPTS - p.startPTS),
                                t.timescale || (n.logger.warn("regenerate InitSegment as video detected"),
                                this.generateIS(e, t, s)),
                                this.remuxVideo(t, h, a, v, l)
                            }
                        } else if (u) {
                            var g = this.remuxVideo(t, h, a, 0, l);
                            g && e.codec && this.remuxEmptyAudio(e, c, a, g)
                        }
                    }
                    i.samples.length && this.remuxID3(i, s),
                    r.samples.length && this.remuxText(r, s),
                    this.observer.trigger(o["default"].FRAG_PARSED)
                }
                ,
                e.prototype.generateIS = function(e, t, i) {
                    var r, l, d = this.observer, u = e.samples, c = t.samples, h = this.typeSupported, f = "audio/mp4", p = {}, v = {
                        tracks: p
                    }, g = this._initPTS === undefined;
                    if (g && (r = l = Infinity),
                    e.config && u.length && (e.timescale = e.samplerate,
                    n.logger.log("audio sampling rate : " + e.samplerate),
                    e.isAAC || (h.mpeg ? (f = "audio/mpeg",
                    e.codec = "") : h.mp3 && (e.codec = "mp3")),
                    p.audio = {
                        container: f,
                        codec: e.codec,
                        initSegment: !e.isAAC && h.mpeg ? new Uint8Array : s["default"].initSegment([e]),
                        metadata: {
                            channelCount: e.channelCount
                        }
                    },
                    g && (r = l = u[0].pts - e.inputTimeScale * i)),
                    t.sps && t.pps && c.length) {
                        var m = t.inputTimeScale;
                        t.timescale = m,
                        p.video = {
                            container: "video/mp4",
                            codec: t.codec,
                            initSegment: s["default"].initSegment([t]),
                            metadata: {
                                width: t.width,
                                height: t.height
                            }
                        },
                        g && (r = Math.min(r, c[0].pts - m * i),
                        l = Math.min(l, c[0].dts - m * i),
                        this.observer.trigger(o["default"].INIT_PTS_FOUND, {
                            initPTS: r
                        }))
                    }
                    Object.keys(p).length ? (d.trigger(o["default"].FRAG_PARSING_INIT_SEGMENT, v),
                    this.ISGenerated = !0,
                    g && (this._initPTS = r,
                    this._initDTS = l)) : d.trigger(o["default"].ERROR, {
                        type: a.ErrorTypes.MEDIA_ERROR,
                        details: a.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !1,
                        reason: "no audio/video samples found"
                    })
                }
                ,
                e.prototype.remuxVideo = function(e, t, i, r, l) {
                    var d, u, c, h, f, p, v, g = 8, m = e.timescale, y = e.samples, b = [], _ = y.length, E = this._PTSNormalize, w = this._initDTS, k = this.nextAvcDts, T = this.isSafari;
                    if (0 !== _) {
                        T && (i |= y.length && k && (l && Math.abs(t - k / m) < .1 || Math.abs(y[0].pts - k - w) < m / 5)),
                        i || (k = t * m),
                        y.forEach(function(e) {
                            e.pts = E(e.pts - w, k),
                            e.dts = E(e.dts - w, k)
                        }),
                        y.sort(function(e, t) {
                            var i = e.dts - t.dts
                              , r = e.pts - t.pts;
                            return i || r || e.id - t.id
                        });
                        var S = y.reduce(function(e, t) {
                            return Math.max(Math.min(e, t.pts - t.dts), -18e3)
                        }, 0);
                        if (S < 0) {
                            n.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(S / 90) + " ms to overcome this issue");
                            for (var A = 0; A < y.length; A++)
                                y[A].dts += S
                        }
                        var x = y[0];
                        f = Math.max(x.dts, 0),
                        h = Math.max(x.pts, 0);
                        var L = Math.round((f - k) / 90);
                        i && L && (L > 1 ? n.logger.log("AVC:" + L + " ms hole between fragments detected,filling it") : L < -1 && n.logger.log("AVC:" + -L + " ms overlapping between fragments detected"),
                        f = k,
                        y[0].dts = f,
                        h = Math.max(h - L, k),
                        y[0].pts = h,
                        n.logger.log("Video/PTS/DTS adjusted: " + Math.round(h / 90) + "/" + Math.round(f / 90) + ",delta:" + L + " ms")),
                        f,
                        x = y[y.length - 1],
                        v = Math.max(x.dts, 0),
                        p = Math.max(x.pts, 0, v),
                        T && (d = Math.round((v - f) / (y.length - 1)));
                        for (var P = 0, R = 0, A = 0; A < _; A++) {
                            for (var C = y[A], D = C.units, I = D.length, O = 0, M = 0; M < I; M++)
                                O += D[M].data.length;
                            R += O,
                            P += I,
                            C.length = O,
                            C.dts = T ? f + A * d : Math.max(C.dts, f),
                            C.pts = Math.max(C.pts, C.dts)
                        }
                        var F = R + 4 * P + 8;
                        try {
                            u = new Uint8Array(F)
                        } catch (Z) {
                            return void this.observer.trigger(o["default"].ERROR, {
                                type: a.ErrorTypes.MUX_ERROR,
                                details: a.ErrorDetails.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: F,
                                reason: "fail allocating video mdat " + F
                            })
                        }
                        var N = new DataView(u.buffer);
                        N.setUint32(0, F),
                        u.set(s["default"].types.mdat, 4);
                        for (var A = 0; A < _; A++) {
                            for (var B = y[A], j = B.units, U = 0, H = void 0, M = 0, I = j.length; M < I; M++) {
                                var G = j[M]
                                  , V = G.data
                                  , q = G.data.byteLength;
                                N.setUint32(g, q),
                                g += 4,
                                u.set(V, g),
                                g += q,
                                U += 4 + q
                            }
                            if (T)
                                H = Math.max(0, d * Math.round((B.pts - B.dts) / d));
                            else {
                                if (A < _ - 1)
                                    d = y[A + 1].dts - B.dts;
                                else {
                                    var K = this.config
                                      , W = B.dts - y[A > 0 ? A - 1 : A].dts;
                                    if (K.stretchShortVideoTrack) {
                                        var Y = K.maxBufferHole
                                          , z = Math.floor(Y * m)
                                          , X = (r ? h + r * m : this.nextAudioPts) - B.pts;
                                        X > z ? (d = X - W,
                                        d < 0 && (d = W),
                                        n.logger.log("It is approximately " + X / 90 + " ms to the next segment; using duration " + d / 90 + " ms for the last video frame.")) : d = W
                                    } else
                                        d = W
                                }
                                H = Math.round(B.pts - B.dts)
                            }
                            b.push({
                                size: U,
                                duration: d,
                                cts: H,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: B.key ? 2 : 1,
                                    isNonSync: B.key ? 0 : 1
                                }
                            })
                        }
                        this.nextAvcDts = v + d;
                        var Q = e.dropped;
                        if (e.len = 0,
                        e.nbNalu = 0,
                        e.dropped = 0,
                        b.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var J = b[0].flags;
                            J.dependsOn = 2,
                            J.isNonSync = 0
                        }
                        e.samples = b,
                        c = s["default"].moof(e.sequenceNumber++, f, e),
                        e.samples = [];
                        var $ = {
                            data1: c,
                            data2: u,
                            startPTS: h / m,
                            endPTS: (p + d) / m,
                            startDTS: f / m,
                            endDTS: this.nextAvcDts / m,
                            type: "video",
                            hasAudio: !1,
                            hasVideo: !0,
                            nb: b.length,
                            dropped: Q
                        };
                        return this.observer.trigger(o["default"].FRAG_PARSING_DATA, $),
                        $
                    }
                }
                ,
                e.prototype.remuxAudio = function(e, t, i, l) {
                    var d, u, c, h, f, p, v, g = e.inputTimeScale, m = e.timescale, y = g / m, b = e.isAAC ? 1024 : 1152, _ = b * y, E = this._PTSNormalize, w = this._initDTS, k = !e.isAAC && this.typeSupported.mpeg, T = e.samples, S = [], A = this.nextAudioPts;
                    if (i |= T.length && A && (l && Math.abs(t - A / g) < .1 || Math.abs(T[0].pts - A - w) < 20 * _),
                    T.forEach(function(e) {
                        e.pts = e.dts = E(e.pts - w, t * g)
                    }),
                    T = T.filter(function(e) {
                        return e.pts >= 0
                    }),
                    0 !== T.length) {
                        if (i || (A = l ? t * g : T[0].pts),
                        e.isAAC)
                            for (var x = this.config.maxAudioFramesDrift, L = 0, P = A; L < T.length; ) {
                                var R, C = T[L], D = C.pts;
                                R = D - P;
                                var I = Math.abs(1e3 * R / g);
                                if (R <= -x * _)
                                    n.logger.warn("Dropping 1 audio frame @ " + (P / g).toFixed(3) + "s due to " + Math.round(I) + " ms overlap."),
                                    T.splice(L, 1),
                                    e.len -= C.unit.length;
                                else if (R >= x * _ && I < 1e4 && P) {
                                    var O = Math.round(R / _);
                                    n.logger.warn("Injecting " + O + " audio frame @ " + (P / g).toFixed(3) + "s due to " + Math.round(1e3 * R / g) + " ms gap.");
                                    for (var M = 0; M < O; M++) {
                                        var F = Math.max(P, 0);
                                        c = r["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount),
                                        c || (n.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),
                                        c = C.unit.subarray()),
                                        T.splice(L, 0, {
                                            unit: c,
                                            pts: F,
                                            dts: F
                                        }),
                                        e.len += c.length,
                                        P += _,
                                        L++
                                    }
                                    C.pts = C.dts = P,
                                    P += _,
                                    L++
                                } else
                                    Math.abs(R),
                                    C.pts = C.dts = P,
                                    P += _,
                                    L++
                            }
                        for (var M = 0, N = T.length; M < N; M++) {
                            var B = T[M]
                              , j = B.unit
                              , D = B.pts;
                            if (v !== undefined)
                                u.duration = Math.round((D - v) / y);
                            else {
                                var U = Math.round(1e3 * (D - A) / g)
                                  , H = 0;
                                if (i && e.isAAC && U) {
                                    if (U > 0 && U < 1e4)
                                        H = Math.round((D - A) / _),
                                        n.logger.log(U + " ms hole between AAC samples detected,filling it"),
                                        H > 0 && (c = r["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount),
                                        c || (c = j.subarray()),
                                        e.len += H * c.length);
                                    else if (U < -12) {
                                        n.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (A / g).toFixed(3) + "s/" + (D / g).toFixed(3) + "s/" + -U + "ms"),
                                        e.len -= j.byteLength;
                                        continue
                                    }
                                    D = A
                                }
                                if (p = D,
                                !(e.len > 0))
                                    return;
                                var G = k ? e.len : e.len + 8;
                                d = k ? 0 : 8;
                                try {
                                    h = new Uint8Array(G)
                                } catch (X) {
                                    return void this.observer.trigger(o["default"].ERROR, {
                                        type: a.ErrorTypes.MUX_ERROR,
                                        details: a.ErrorDetails.REMUX_ALLOC_ERROR,
                                        fatal: !1,
                                        bytes: G,
                                        reason: "fail allocating audio mdat " + G
                                    })
                                }
                                if (!k) {
                                    new DataView(h.buffer).setUint32(0, G),
                                    h.set(s["default"].types.mdat, 4)
                                }
                                for (var L = 0; L < H; L++)
                                    c = r["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount),
                                    c || (n.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),
                                    c = j.subarray()),
                                    h.set(c, d),
                                    d += c.byteLength,
                                    u = {
                                        size: c.byteLength,
                                        cts: 0,
                                        duration: 1024,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: 1
                                        }
                                    },
                                    S.push(u)
                            }
                            h.set(j, d);
                            var V = j.byteLength;
                            d += V,
                            u = {
                                size: V,
                                cts: 0,
                                duration: 0,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: 1
                                }
                            },
                            S.push(u),
                            v = D
                        }
                        var q = 0
                          , K = S.length;
                        if (K >= 2 && (q = S[K - 2].duration,
                        u.duration = q),
                        K) {
                            this.nextAudioPts = A = v + y * q,
                            e.len = 0,
                            e.samples = S,
                            f = k ? new Uint8Array : s["default"].moof(e.sequenceNumber++, p / y, e),
                            e.samples = [];
                            var W = p / g
                              , Y = A / g
                              , z = {
                                data1: f,
                                data2: h,
                                startPTS: W,
                                endPTS: Y,
                                startDTS: W,
                                endDTS: Y,
                                type: "audio",
                                hasAudio: !0,
                                hasVideo: !1,
                                nb: K
                            };
                            return this.observer.trigger(o["default"].FRAG_PARSING_DATA, z),
                            z
                        }
                        return null
                    }
                }
                ,
                e.prototype.remuxEmptyAudio = function(e, t, i, s) {
                    var o = e.inputTimeScale
                      , a = e.samplerate ? e.samplerate : o
                      , l = o / a
                      , d = this.nextAudioPts
                      , u = (d !== undefined ? d : s.startDTS * o) + this._initDTS
                      , c = s.endDTS * o + this._initDTS
                      , h = 1024 * l
                      , f = Math.ceil((c - u) / h)
                      , p = r["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                    if (n.logger.warn("remux empty Audio"),
                    !p)
                        return void n.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                    for (var v = [], g = 0; g < f; g++) {
                        var m = u + g * h;
                        v.push({
                            unit: p,
                            pts: m,
                            dts: m
                        }),
                        e.len += p.length
                    }
                    e.samples = v,
                    this.remuxAudio(e, t, i)
                }
                ,
                e.prototype.remuxID3 = function(e, t) {
                    var i, r = e.samples.length, s = e.inputTimeScale, a = this._initPTS, n = this._initDTS;
                    if (r) {
                        for (var l = 0; l < r; l++)
                            i = e.samples[l],
                            i.pts = (i.pts - a) / s,
                            i.dts = (i.dts - n) / s;
                        this.observer.trigger(o["default"].FRAG_PARSING_METADATA, {
                            samples: e.samples
                        })
                    }
                    e.samples = [],
                    t = t
                }
                ,
                e.prototype.remuxText = function(e, t) {
                    e.samples.sort(function(e, t) {
                        return e.pts - t.pts
                    });
                    var i, r = e.samples.length, s = e.inputTimeScale, a = this._initPTS;
                    if (r) {
                        for (var n = 0; n < r; n++)
                            i = e.samples[n],
                            i.pts = (i.pts - a) / s;
                        this.observer.trigger(o["default"].FRAG_PARSING_USERDATA, {
                            samples: e.samples
                        })
                    }
                    e.samples = [],
                    t = t
                }
                ,
                e.prototype._PTSNormalize = function(e, t) {
                    var i;
                    if (t === undefined)
                        return e;
                    for (i = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296; )
                        e += i;
                    return e
                }
                ,
                e
            }();
            t["default"] = l
        },
        "./src/remux/passthrough-remuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/events.js")
              , s = function() {
                function e(e) {
                    this.observer = e
                }
                return e.prototype.destroy = function() {}
                ,
                e.prototype.resetTimeStamp = function() {}
                ,
                e.prototype.resetInitSegment = function() {}
                ,
                e.prototype.remux = function(e, t, i, s, o, a, n, l) {
                    var d = this.observer
                      , u = "";
                    e && (u += "audio"),
                    t && (u += "video"),
                    d.trigger(r["default"].FRAG_PARSING_DATA, {
                        data1: l,
                        startPTS: o,
                        startDTS: o,
                        type: u,
                        hasAudio: !!e,
                        hasVideo: !!t,
                        nb: 1,
                        dropped: 0
                    }),
                    d.trigger(r["default"].FRAG_PARSED)
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/task-loop.js": function(e, t, i) {
            "use strict";
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype,
                    new r)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/event-handler.js")
              , o = function(e) {
                function t(t) {
                    for (var i = [], r = 1; r < arguments.length; r++)
                        i[r - 1] = arguments[r];
                    var s = e.apply(this, [t].concat(i)) || this;
                    return s._tickInterval = null,
                    s._tickTimer = null,
                    s._tickCallCount = 0,
                    s._boundTick = s.tick.bind(s),
                    s
                }
                return r(t, e),
                t.prototype.onHandlerDestroying = function() {
                    this.clearNextTick(),
                    this.clearInterval()
                }
                ,
                t.prototype.hasInterval = function() {
                    return !!this._tickInterval
                }
                ,
                t.prototype.hasNextTick = function() {
                    return !!this._tickTimer
                }
                ,
                t.prototype.setInterval = function(e) {
                    return !this._tickInterval && (this._tickInterval = setInterval(this._boundTick, e),
                    !0)
                }
                ,
                t.prototype.clearInterval = function() {
                    return !!this._tickInterval && (clearInterval(this._tickInterval),
                    this._tickInterval = null,
                    !0)
                }
                ,
                t.prototype.clearNextTick = function() {
                    return !!this._tickTimer && (clearTimeout(this._tickTimer),
                    this._tickTimer = null,
                    !0)
                }
                ,
                t.prototype.tick = function() {
                    1 === ++this._tickCallCount && (this.doTick(),
                    this._tickCallCount > 1 && (this.clearNextTick(),
                    this._tickTimer = setTimeout(this._boundTick, 0)),
                    this._tickCallCount = 0)
                }
                ,
                t.prototype.doTick = function() {}
                ,
                t
            }(s["default"]);
            t["default"] = o
        },
        "./src/utils/attr-list.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = /^(\d+)x(\d+)$/
                  , r = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g
                  , s = function() {
                    function t(e) {
                        "string" == typeof e && (e = t.parseAttrList(e));
                        for (var i in e)
                            e.hasOwnProperty(i) && (this[i] = e[i])
                    }
                    return t.prototype.decimalInteger = function(t) {
                        var i = parseInt(this[t], 10);
                        return i > e.MAX_SAFE_INTEGER ? Infinity : i
                    }
                    ,
                    t.prototype.hexadecimalInteger = function(e) {
                        if (this[e]) {
                            var t = (this[e] || "0x").slice(2);
                            t = (1 & t.length ? "0" : "") + t;
                            for (var i = new Uint8Array(t.length / 2), r = 0; r < t.length / 2; r++)
                                i[r] = parseInt(t.slice(2 * r, 2 * r + 2), 16);
                            return i
                        }
                        return null
                    }
                    ,
                    t.prototype.hexadecimalIntegerAsNumber = function(t) {
                        var i = parseInt(this[t], 16);
                        return i > e.MAX_SAFE_INTEGER ? Infinity : i
                    }
                    ,
                    t.prototype.decimalFloatingPoint = function(e) {
                        return parseFloat(this[e])
                    }
                    ,
                    t.prototype.enumeratedString = function(e) {
                        return this[e]
                    }
                    ,
                    t.prototype.decimalResolution = function(e) {
                        var t = i.exec(this[e]);
                        return null === t ? undefined : {
                            width: parseInt(t[1], 10),
                            height: parseInt(t[2], 10)
                        }
                    }
                    ,
                    t.parseAttrList = function(e) {
                        var t, i = {};
                        for (r.lastIndex = 0; null !== (t = r.exec(e)); ) {
                            var s = t[2];
                            0 === s.indexOf('"') && s.lastIndexOf('"') === s.length - 1 && (s = s.slice(1, -1)),
                            i[t[1]] = s
                        }
                        return i
                    }
                    ,
                    t
                }();
                t["default"] = s
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/utils/binary-search.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                search: function(e, t) {
                    for (var i = 0, r = e.length - 1, s = null, o = null; i <= r; ) {
                        s = (i + r) / 2 | 0,
                        o = e[s];
                        var a = t(o);
                        if (a > 0)
                            i = s + 1;
                        else {
                            if (!(a < 0))
                                return o;
                            r = s - 1
                        }
                    }
                    return null
                }
            };
            t["default"] = r
        },
        "./src/utils/buffer-helper.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e() {}
                return e.isBuffered = function(e, t) {
                    try {
                        if (e)
                            for (var i = e.buffered, r = 0; r < i.length; r++)
                                if (t >= i.start(r) && t <= i.end(r))
                                    return !0
                    } catch (s) {}
                    return !1
                }
                ,
                e.bufferInfo = function(t, i, r) {
                    try {
                        if (t) {
                            var s = t.buffered
                              , o = []
                              , a = void 0;
                            for (a = 0; a < s.length; a++)
                                o.push({
                                    start: s.start(a),
                                    end: s.end(a)
                                });
                            return e.bufferedInfo(o, i, r)
                        }
                    } catch (n) {}
                    return {
                        len: 0,
                        start: i,
                        end: i,
                        nextStart: undefined
                    }
                }
                ,
                e.bufferedInfo = function(e, t, i) {
                    var r, s, o, a, n, l = [];
                    for (e.sort(function(e, t) {
                        var i = e.start - t.start;
                        return i || t.end - e.end
                    }),
                    n = 0; n < e.length; n++) {
                        var d = l.length;
                        if (d) {
                            var u = l[d - 1].end;
                            e[n].start - u < i ? e[n].end > u && (l[d - 1].end = e[n].end) : l.push(e[n])
                        } else
                            l.push(e[n])
                    }
                    for (n = 0,
                    r = 0,
                    s = o = t; n < l.length; n++) {
                        var c = l[n].start
                          , h = l[n].end;
                        if (t + i >= c && t < h)
                            s = c,
                            o = h,
                            r = o - t;
                        else if (t + i < c) {
                            a = c;
                            break
                        }
                    }
                    return {
                        len: r,
                        start: s,
                        end: o,
                        nextStart: a
                    }
                }
                ,
                e
            }();
            t.BufferHelper = r
        },
        "./src/utils/cea-608-parser.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            }
              , s = function(e) {
                var t = e;
                return r.hasOwnProperty(e) && (t = r[e]),
                String.fromCharCode(t)
            }
              , o = 15
              , a = 100
              , n = {
                17: 1,
                18: 3,
                21: 5,
                22: 7,
                23: 9,
                16: 11,
                19: 12,
                20: 14
            }
              , l = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            }
              , d = {
                25: 1,
                26: 3,
                29: 5,
                30: 7,
                31: 9,
                24: 11,
                27: 12,
                28: 14
            }
              , u = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            }
              , c = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"]
              , h = {
                verboseFilter: {
                    DATA: 3,
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 2,
                    TEXT: 1,
                    ERROR: 0
                },
                time: null,
                verboseLevel: 0,
                setTime: function(e) {
                    this.time = e
                },
                log: function(e, t) {
                    this.verboseFilter[e];
                    this.verboseLevel
                }
            }
              , f = function(e) {
                for (var t = [], i = 0; i < e.length; i++)
                    t.push(e[i].toString(16));
                return t
            }
              , p = function() {
                function e(e, t, i, r, s) {
                    this.foreground = e || "white",
                    this.underline = t || !1,
                    this.italics = i || !1,
                    this.background = r || "black",
                    this.flash = s || !1
                }
                return e.prototype.reset = function() {
                    this.foreground = "white",
                    this.underline = !1,
                    this.italics = !1,
                    this.background = "black",
                    this.flash = !1
                }
                ,
                e.prototype.setStyles = function(e) {
                    for (var t = ["foreground", "underline", "italics", "background", "flash"], i = 0; i < t.length; i++) {
                        var r = t[i];
                        e.hasOwnProperty(r) && (this[r] = e[r])
                    }
                }
                ,
                e.prototype.isDefault = function() {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }
                ,
                e.prototype.equals = function(e) {
                    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                }
                ,
                e.prototype.copy = function(e) {
                    this.foreground = e.foreground,
                    this.underline = e.underline,
                    this.italics = e.italics,
                    this.background = e.background,
                    this.flash = e.flash
                }
                ,
                e.prototype.toString = function() {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }
                ,
                e
            }()
              , v = function() {
                function e(e, t, i, r, s, o) {
                    this.uchar = e || " ",
                    this.penState = new p(t,i,r,s,o)
                }
                return e.prototype.reset = function() {
                    this.uchar = " ",
                    this.penState.reset()
                }
                ,
                e.prototype.setChar = function(e, t) {
                    this.uchar = e,
                    this.penState.copy(t)
                }
                ,
                e.prototype.setPenState = function(e) {
                    this.penState.copy(e)
                }
                ,
                e.prototype.equals = function(e) {
                    return this.uchar === e.uchar && this.penState.equals(e.penState)
                }
                ,
                e.prototype.copy = function(e) {
                    this.uchar = e.uchar,
                    this.penState.copy(e.penState)
                }
                ,
                e.prototype.isEmpty = function() {
                    return " " === this.uchar && this.penState.isDefault()
                }
                ,
                e
            }()
              , g = function() {
                function e() {
                    this.chars = [];
                    for (var e = 0; e < a; e++)
                        this.chars.push(new v);
                    this.pos = 0,
                    this.currPenState = new p
                }
                return e.prototype.equals = function(e) {
                    for (var t = !0, i = 0; i < a; i++)
                        if (!this.chars[i].equals(e.chars[i])) {
                            t = !1;
                            break
                        }
                    return t
                }
                ,
                e.prototype.copy = function(e) {
                    for (var t = 0; t < a; t++)
                        this.chars[t].copy(e.chars[t])
                }
                ,
                e.prototype.isEmpty = function() {
                    for (var e = !0, t = 0; t < a; t++)
                        if (!this.chars[t].isEmpty()) {
                            e = !1;
                            break
                        }
                    return e
                }
                ,
                e.prototype.setCursor = function(e) {
                    this.pos !== e && (this.pos = e),
                    this.pos < 0 ? (h.log("ERROR", "Negative cursor position " + this.pos),
                    this.pos = 0) : this.pos > a && (h.log("ERROR", "Too large cursor position " + this.pos),
                    this.pos = a)
                }
                ,
                e.prototype.moveCursor = function(e) {
                    var t = this.pos + e;
                    if (e > 1)
                        for (var i = this.pos + 1; i < t + 1; i++)
                            this.chars[i].setPenState(this.currPenState);
                    this.setCursor(t)
                }
                ,
                e.prototype.backSpace = function() {
                    this.moveCursor(-1),
                    this.chars[this.pos].setChar(" ", this.currPenState)
                }
                ,
                e.prototype.insertChar = function(e) {
                    e >= 144 && this.backSpace();
                    var t = s(e);
                    if (this.pos >= a)
                        return void h.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
                    this.chars[this.pos].setChar(t, this.currPenState),
                    this.moveCursor(1)
                }
                ,
                e.prototype.clearFromPos = function(e) {
                    var t;
                    for (t = e; t < a; t++)
                        this.chars[t].reset()
                }
                ,
                e.prototype.clear = function() {
                    this.clearFromPos(0),
                    this.pos = 0,
                    this.currPenState.reset()
                }
                ,
                e.prototype.clearToEndOfRow = function() {
                    this.clearFromPos(this.pos)
                }
                ,
                e.prototype.getTextString = function() {
                    for (var e = [], t = !0, i = 0; i < a; i++) {
                        var r = this.chars[i].uchar;
                        " " !== r && (t = !1),
                        e.push(r)
                    }
                    return t ? "" : e.join("")
                }
                ,
                e.prototype.setPenStyles = function(e) {
                    this.currPenState.setStyles(e),
                    this.chars[this.pos].setPenState(this.currPenState)
                }
                ,
                e
            }()
              , m = function() {
                function e() {
                    this.rows = [];
                    for (var e = 0; e < o; e++)
                        this.rows.push(new g);
                    this.currRow = o - 1,
                    this.nrRollUpRows = null,
                    this.reset()
                }
                return e.prototype.reset = function() {
                    for (var e = 0; e < o; e++)
                        this.rows[e].clear();
                    this.currRow = o - 1
                }
                ,
                e.prototype.equals = function(e) {
                    for (var t = !0, i = 0; i < o; i++)
                        if (!this.rows[i].equals(e.rows[i])) {
                            t = !1;
                            break
                        }
                    return t
                }
                ,
                e.prototype.copy = function(e) {
                    for (var t = 0; t < o; t++)
                        this.rows[t].copy(e.rows[t])
                }
                ,
                e.prototype.isEmpty = function() {
                    for (var e = !0, t = 0; t < o; t++)
                        if (!this.rows[t].isEmpty()) {
                            e = !1;
                            break
                        }
                    return e
                }
                ,
                e.prototype.backSpace = function() {
                    this.rows[this.currRow].backSpace()
                }
                ,
                e.prototype.clearToEndOfRow = function() {
                    this.rows[this.currRow].clearToEndOfRow()
                }
                ,
                e.prototype.insertChar = function(e) {
                    this.rows[this.currRow].insertChar(e)
                }
                ,
                e.prototype.setPen = function(e) {
                    this.rows[this.currRow].setPenStyles(e)
                }
                ,
                e.prototype.moveCursor = function(e) {
                    this.rows[this.currRow].moveCursor(e)
                }
                ,
                e.prototype.setCursor = function(e) {
                    h.log("INFO", "setCursor: " + e),
                    this.rows[this.currRow].setCursor(e)
                }
                ,
                e.prototype.setPAC = function(e) {
                    h.log("INFO", "pacData = " + JSON.stringify(e));
                    var t = e.row - 1;
                    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1),
                    this.nrRollUpRows && this.currRow !== t) {
                        for (var i = 0; i < o; i++)
                            this.rows[i].clear();
                        var r = this.currRow + 1 - this.nrRollUpRows
                          , s = this.lastOutputScreen;
                        if (s) {
                            var a = s.rows[r].cueStartTime;
                            if (a && a < h.time)
                                for (var i = 0; i < this.nrRollUpRows; i++)
                                    this.rows[t - this.nrRollUpRows + i + 1].copy(s.rows[r + i])
                        }
                    }
                    this.currRow = t;
                    var n = this.rows[this.currRow];
                    if (null !== e.indent) {
                        var l = e.indent
                          , d = Math.max(l - 1, 0);
                        n.setCursor(e.indent),
                        e.color = n.chars[d].penState.foreground
                    }
                    var u = {
                        foreground: e.color,
                        underline: e.underline,
                        italics: e.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(u)
                }
                ,
                e.prototype.setBkgData = function(e) {
                    h.log("INFO", "bkgData = " + JSON.stringify(e)),
                    this.backSpace(),
                    this.setPen(e),
                    this.insertChar(32)
                }
                ,
                e.prototype.setRollUpRows = function(e) {
                    this.nrRollUpRows = e
                }
                ,
                e.prototype.rollUp = function() {
                    if (null === this.nrRollUpRows)
                        return void h.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                    h.log("TEXT", this.getDisplayText());
                    var e = this.currRow + 1 - this.nrRollUpRows
                      , t = this.rows.splice(e, 1)[0];
                    t.clear(),
                    this.rows.splice(this.currRow, 0, t),
                    h.log("INFO", "Rolling up")
                }
                ,
                e.prototype.getDisplayText = function(e) {
                    e = e || !1;
                    for (var t = [], i = "", r = -1, s = 0; s < o; s++) {
                        var a = this.rows[s].getTextString();
                        a && (r = s + 1,
                        e ? t.push("Row " + r + ": '" + a + "'") : t.push(a.trim()))
                    }
                    return t.length > 0 && (i = e ? "[" + t.join(" | ") + "]" : t.join("\n")),
                    i
                }
                ,
                e.prototype.getTextAndFormat = function() {
                    return this.rows
                }
                ,
                e
            }()
              , y = function() {
                function e(e, t) {
                    this.chNr = e,
                    this.outputFilter = t,
                    this.mode = null,
                    this.verbose = 0,
                    this.displayedMemory = new m,
                    this.nonDisplayedMemory = new m,
                    this.lastOutputScreen = new m,
                    this.currRollUpRow = this.displayedMemory.rows[o - 1],
                    this.writeScreen = this.displayedMemory,
                    this.mode = null,
                    this.cueStartTime = null
                }
                return e.prototype.reset = function() {
                    this.mode = null,
                    this.displayedMemory.reset(),
                    this.nonDisplayedMemory.reset(),
                    this.lastOutputScreen.reset(),
                    this.currRollUpRow = this.displayedMemory.rows[o - 1],
                    this.writeScreen = this.displayedMemory,
                    this.mode = null,
                    this.cueStartTime = null,
                    this.lastCueEndTime = null
                }
                ,
                e.prototype.getHandler = function() {
                    return this.outputFilter
                }
                ,
                e.prototype.setHandler = function(e) {
                    this.outputFilter = e
                }
                ,
                e.prototype.setPAC = function(e) {
                    this.writeScreen.setPAC(e)
                }
                ,
                e.prototype.setBkgData = function(e) {
                    this.writeScreen.setBkgData(e)
                }
                ,
                e.prototype.setMode = function(e) {
                    e !== this.mode && (this.mode = e,
                    h.log("INFO", "MODE=" + e),
                    "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory,
                    this.writeScreen.reset()),
                    "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null,
                    this.nonDisplayedMemory.nrRollUpRows = null),
                    this.mode = e)
                }
                ,
                e.prototype.insertChars = function(e) {
                    for (var t = 0; t < e.length; t++)
                        this.writeScreen.insertChar(e[t]);
                    var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    h.log("INFO", i + ": " + this.writeScreen.getDisplayText(!0)),
                    "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (h.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)),
                    this.outputDataUpdate())
                }
                ,
                e.prototype.ccRCL = function() {
                    h.log("INFO", "RCL - Resume Caption Loading"),
                    this.setMode("MODE_POP-ON")
                }
                ,
                e.prototype.ccBS = function() {
                    h.log("INFO", "BS - BackSpace"),
                    "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(),
                    this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }
                ,
                e.prototype.ccAOF = function() {}
                ,
                e.prototype.ccAON = function() {}
                ,
                e.prototype.ccDER = function() {
                    h.log("INFO", "DER- Delete to End of Row"),
                    this.writeScreen.clearToEndOfRow(),
                    this.outputDataUpdate()
                }
                ,
                e.prototype.ccRU = function(e) {
                    h.log("INFO", "RU(" + e + ") - Roll Up"),
                    this.writeScreen = this.displayedMemory,
                    this.setMode("MODE_ROLL-UP"),
                    this.writeScreen.setRollUpRows(e)
                }
                ,
                e.prototype.ccFON = function() {
                    h.log("INFO", "FON - Flash On"),
                    this.writeScreen.setPen({
                        flash: !0
                    })
                }
                ,
                e.prototype.ccRDC = function() {
                    h.log("INFO", "RDC - Resume Direct Captioning"),
                    this.setMode("MODE_PAINT-ON")
                }
                ,
                e.prototype.ccTR = function() {
                    h.log("INFO", "TR"),
                    this.setMode("MODE_TEXT")
                }
                ,
                e.prototype.ccRTD = function() {
                    h.log("INFO", "RTD"),
                    this.setMode("MODE_TEXT")
                }
                ,
                e.prototype.ccEDM = function() {
                    h.log("INFO", "EDM - Erase Displayed Memory"),
                    this.displayedMemory.reset(),
                    this.outputDataUpdate(!0)
                }
                ,
                e.prototype.ccCR = function() {
                    h.log("CR - Carriage Return"),
                    this.writeScreen.rollUp(),
                    this.outputDataUpdate(!0)
                }
                ,
                e.prototype.ccENM = function() {
                    h.log("INFO", "ENM - Erase Non-displayed Memory"),
                    this.nonDisplayedMemory.reset()
                }
                ,
                e.prototype.ccEOC = function() {
                    if (h.log("INFO", "EOC - End Of Caption"),
                    "MODE_POP-ON" === this.mode) {
                        var e = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory,
                        this.nonDisplayedMemory = e,
                        this.writeScreen = this.nonDisplayedMemory,
                        h.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate(!0)
                }
                ,
                e.prototype.ccTO = function(e) {
                    h.log("INFO", "TO(" + e + ") - Tab Offset"),
                    this.writeScreen.moveCursor(e)
                }
                ,
                e.prototype.ccMIDROW = function(e) {
                    var t = {
                        flash: !1
                    };
                    if (t.underline = e % 2 == 1,
                    t.italics = e >= 46,
                    t.italics)
                        t.foreground = "white";
                    else {
                        var i = Math.floor(e / 2) - 16
                          , r = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                        t.foreground = r[i]
                    }
                    h.log("INFO", "MIDROW: " + JSON.stringify(t)),
                    this.writeScreen.setPen(t)
                }
                ,
                e.prototype.outputDataUpdate = function(e) {
                    void 0 === e && (e = !1);
                    var t = h.time;
                    null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen),
                    !0 === e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()),
                    this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t,
                    this.lastOutputScreen.copy(this.displayedMemory))
                }
                ,
                e.prototype.cueSplitAtTime = function(e) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory),
                    this.cueStartTime = e))
                }
                ,
                e
            }()
              , b = function() {
                function e(e, t, i) {
                    this.field = e || 1,
                    this.outputs = [t, i],
                    this.channels = [new y(1,t), new y(2,i)],
                    this.currChNr = -1,
                    this.lastCmdA = null,
                    this.lastCmdB = null,
                    this.bufferedData = [],
                    this.startTime = null,
                    this.lastTime = null,
                    this.dataCounters = {
                        padding: 0,
                        "char": 0,
                        cmd: 0,
                        other: 0
                    }
                }
                return e.prototype.getHandler = function(e) {
                    return this.channels[e].getHandler()
                }
                ,
                e.prototype.setHandler = function(e, t) {
                    this.channels[e].setHandler(t)
                }
                ,
                e.prototype.addData = function(e, t) {
                    var i, r, s, o = !1;
                    this.lastTime = e,
                    h.setTime(e);
                    for (var a = 0; a < t.length; a += 2)
                        if (r = 127 & t[a],
                        s = 127 & t[a + 1],
                        0 !== r || 0 !== s) {
                            if (h.log("DATA", "[" + f([t[a], t[a + 1]]) + "] -> (" + f([r, s]) + ")"),
                            i = this.parseCmd(r, s),
                            i || (i = this.parseMidrow(r, s)),
                            i || (i = this.parsePAC(r, s)),
                            i || (i = this.parseBackgroundAttributes(r, s)),
                            !i && (o = this.parseChars(r, s)))
                                if (this.currChNr && this.currChNr >= 0) {
                                    var n = this.channels[this.currChNr - 1];
                                    n.insertChars(o)
                                } else
                                    h.log("WARNING", "No channel found yet. TEXT-MODE?");
                            i ? this.dataCounters.cmd += 2 : o ? this.dataCounters["char"] += 2 : (this.dataCounters.other += 2,
                            h.log("WARNING", "Couldn't parse cleaned data " + f([r, s]) + " orig: " + f([t[a], t[a + 1]])))
                        } else
                            this.dataCounters.padding += 2
                }
                ,
                e.prototype.parseCmd = function(e, t) {
                    var i = null
                      , r = (20 === e || 28 === e) && t >= 32 && t <= 47
                      , s = (23 === e || 31 === e) && t >= 33 && t <= 35;
                    if (!r && !s)
                        return !1;
                    if (e === this.lastCmdA && t === this.lastCmdB)
                        return this.lastCmdA = null,
                        this.lastCmdB = null,
                        h.log("DEBUG", "Repeated command (" + f([e, t]) + ") is dropped"),
                        !0;
                    i = 20 === e || 23 === e ? 1 : 2;
                    var o = this.channels[i - 1];
                    return 20 === e || 28 === e ? 32 === t ? o.ccRCL() : 33 === t ? o.ccBS() : 34 === t ? o.ccAOF() : 35 === t ? o.ccAON() : 36 === t ? o.ccDER() : 37 === t ? o.ccRU(2) : 38 === t ? o.ccRU(3) : 39 === t ? o.ccRU(4) : 40 === t ? o.ccFON() : 41 === t ? o.ccRDC() : 42 === t ? o.ccTR() : 43 === t ? o.ccRTD() : 44 === t ? o.ccEDM() : 45 === t ? o.ccCR() : 46 === t ? o.ccENM() : 47 === t && o.ccEOC() : o.ccTO(t - 32),
                    this.lastCmdA = e,
                    this.lastCmdB = t,
                    this.currChNr = i,
                    !0
                }
                ,
                e.prototype.parseMidrow = function(e, t) {
                    var i = null;
                    if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
                        if ((i = 17 === e ? 1 : 2) !== this.currChNr)
                            return h.log("ERROR", "Mismatch channel in midrow parsing"),
                            !1;
                        return this.channels[i - 1].ccMIDROW(t),
                        h.log("DEBUG", "MIDROW (" + f([e, t]) + ")"),
                        !0
                    }
                    return !1
                }
                ,
                e.prototype.parsePAC = function(e, t) {
                    var i = null
                      , r = null
                      , s = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127
                      , o = (16 === e || 24 === e) && t >= 64 && t <= 95;
                    if (!s && !o)
                        return !1;
                    if (e === this.lastCmdA && t === this.lastCmdB)
                        return this.lastCmdA = null,
                        this.lastCmdB = null,
                        !0;
                    i = e <= 23 ? 1 : 2,
                    r = t >= 64 && t <= 95 ? 1 === i ? n[e] : d[e] : 1 === i ? l[e] : u[e];
                    var a = this.interpretPAC(r, t);
                    return this.channels[i - 1].setPAC(a),
                    this.lastCmdA = e,
                    this.lastCmdB = t,
                    this.currChNr = i,
                    !0
                }
                ,
                e.prototype.interpretPAC = function(e, t) {
                    var i = t
                      , r = {
                        color: null,
                        italics: !1,
                        indent: null,
                        underline: !1,
                        row: e
                    };
                    return i = t > 95 ? t - 96 : t - 64,
                    r.underline = 1 == (1 & i),
                    i <= 13 ? r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (r.italics = !0,
                    r.color = "white") : r.indent = 4 * Math.floor((i - 16) / 2),
                    r
                }
                ,
                e.prototype.parseChars = function(e, t) {
                    var i = null
                      , r = null
                      , o = null;
                    if (e >= 25 ? (i = 2,
                    o = e - 8) : (i = 1,
                    o = e),
                    o >= 17 && o <= 19) {
                        var a = t;
                        a = 17 === o ? t + 80 : 18 === o ? t + 112 : t + 144,
                        h.log("INFO", "Special char '" + s(a) + "' in channel " + i),
                        r = [a]
                    } else
                        e >= 32 && e <= 127 && (r = 0 === t ? [e] : [e, t]);
                    if (r) {
                        var n = f(r);
                        h.log("DEBUG", "Char codes =  " + n.join(",")),
                        this.lastCmdA = null,
                        this.lastCmdB = null
                    }
                    return r
                }
                ,
                e.prototype.parseBackgroundAttributes = function(e, t) {
                    var i, r, s, o, a = (16 === e || 24 === e) && t >= 32 && t <= 47, n = (23 === e || 31 === e) && t >= 45 && t <= 47;
                    return !(!a && !n) && (i = {},
                    16 === e || 24 === e ? (r = Math.floor((t - 32) / 2),
                    i.background = c[r],
                    t % 2 == 1 && (i.background = i.background + "_semi")) : 45 === t ? i.background = "transparent" : (i.foreground = "black",
                    47 === t && (i.underline = !0)),
                    s = e < 24 ? 1 : 2,
                    o = this.channels[s - 1],
                    o.setBkgData(i),
                    this.lastCmdA = null,
                    this.lastCmdB = null,
                    !0)
                }
                ,
                e.prototype.reset = function() {
                    for (var e = 0; e < this.channels.length; e++)
                        this.channels[e] && this.channels[e].reset();
                    this.lastCmdA = null,
                    this.lastCmdB = null
                }
                ,
                e.prototype.cueSplitAtTime = function(e) {
                    for (var t = 0; t < this.channels.length; t++)
                        this.channels[t] && this.channels[t].cueSplitAtTime(e)
                }
                ,
                e
            }();
            t["default"] = b
        },
        "./src/utils/codecs.js": function(e, t, i) {
            "use strict";
            function r(e, t) {
                var i = o[t];
                return !!i && !0 === i[e.slice(0, 4)]
            }
            function s(e, t) {
                return window.MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = {
                audio: {
                    a3ds: !0,
                    "ac-3": !0,
                    "ac-4": !0,
                    alac: !0,
                    alaw: !0,
                    dra1: !0,
                    "dts+": !0,
                    "dts-": !0,
                    dtsc: !0,
                    dtse: !0,
                    dtsh: !0,
                    "ec-3": !0,
                    enca: !0,
                    g719: !0,
                    g726: !0,
                    m4ae: !0,
                    mha1: !0,
                    mha2: !0,
                    mhm1: !0,
                    mhm2: !0,
                    mlpa: !0,
                    mp4a: !0,
                    "raw ": !0,
                    Opus: !0,
                    samr: !0,
                    sawb: !0,
                    sawp: !0,
                    sevc: !0,
                    sqcp: !0,
                    ssmv: !0,
                    twos: !0,
                    ulaw: !0
                },
                video: {
                    avc1: !0,
                    avc2: !0,
                    avc3: !0,
                    avc4: !0,
                    avcp: !0,
                    drac: !0,
                    dvav: !0,
                    dvhe: !0,
                    encv: !0,
                    hev1: !0,
                    hvc1: !0,
                    mjp2: !0,
                    mp4v: !0,
                    mvc1: !0,
                    mvc2: !0,
                    mvc3: !0,
                    mvc4: !0,
                    resv: !0,
                    rv60: !0,
                    s263: !0,
                    svc1: !0,
                    svc2: !0,
                    "vc-1": !0,
                    vp08: !0,
                    vp09: !0
                }
            };
            t.isCodecType = r,
            t.isCodecSupportedInMp4 = s
        },
        "./src/utils/cues.js": function(e, t, i) {
            "use strict";
            function r(e, t, i, r) {
                for (var o, a, n, l, d, u = window.VTTCue || window.TextTrackCue, c = 0; c < r.rows.length; c++)
                    if (o = r.rows[c],
                    n = !0,
                    l = 0,
                    d = "",
                    !o.isEmpty()) {
                        for (var h = 0; h < o.chars.length; h++)
                            o.chars[h].uchar.match(/\s/) && n ? l++ : (d += o.chars[h].uchar,
                            n = !1);
                        o.cueStartTime = t,
                        t === i && (i += 1e-4),
                        a = new u(t,i,s.fixLineBreaks(d.trim())),
                        l >= 16 ? l-- : l++,
                        navigator.userAgent.match(/Firefox\//) ? a.line = c + 1 : a.line = c > 7 ? c - 2 : c + 1,
                        a.align = "left",
                        a.position = Math.max(0, Math.min(100, l / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))),
                        e.addCue(a)
                    }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/utils/vttparser.js");
            t.newCue = r
        },
        "./src/utils/discontinuities.js": function(e, t, i) {
            "use strict";
            (function(e) {
                function r(e, t) {
                    for (var i = null, r = 0; r < e.length; r += 1) {
                        var s = e[r];
                        if (s && s.cc === t) {
                            i = s;
                            break
                        }
                    }
                    return i
                }
                function s(e, t) {
                    return c["default"].search(e, function(e) {
                        return e.cc < t ? 1 : e.cc > t ? -1 : 0
                    })
                }
                function o(e, t, i) {
                    var r = !1;
                    return t && t.details && i && (i.endCC > i.startCC || e && e.cc < i.startCC) && (r = !0),
                    r
                }
                function a(e, t) {
                    var i = e.fragments
                      , s = t.fragments;
                    if (!s.length || !i.length)
                        return void h.logger.log("No fragments to align");
                    var o = r(i, s[0].cc);
                    return !o || o && !o.startPTS ? void h.logger.log("No frag in previous level to align on") : o
                }
                function n(e, t) {
                    t.fragments.forEach(function(t) {
                        if (t) {
                            var i = t.start + e;
                            t.start = t.startPTS = i,
                            t.endPTS = i + t.duration
                        }
                    }),
                    t.PTSKnown = !0
                }
                function l(e, t, i) {
                    d(e, i, t),
                    !i.PTSKnown && t && u(i, t.details)
                }
                function d(e, t, i) {
                    if (o(e, i, t)) {
                        var r = a(i.details, t);
                        r && (h.logger.log("Adjusting PTS using last level due to CC increase within current level"),
                        n(r.start, t))
                    }
                }
                function u(t, i) {
                    if (i && i.fragments.length) {
                        if (!t.hasProgramDateTime || !i.hasProgramDateTime)
                            return;
                        var r = i.fragments[0].programDateTime
                          , s = t.fragments[0].programDateTime
                          , o = (s - r) / 1e3 + i.fragments[0].start;
                        e.isFinite(o) && (h.logger.log("adjusting PTS using programDateTime delta, sliding:" + o.toFixed(3)),
                        n(o, t))
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var c = i("./src/utils/binary-search.js")
                  , h = i("./src/utils/logger.js");
                t.findFirstFragWithCC = r,
                t.findFragWithCC = s,
                t.shouldAlignOnDiscontinuities = o,
                t.findDiscontinuousReferenceFrag = a,
                t.adjustPts = n,
                t.alignStream = l,
                t.alignDiscontinuities = d,
                t.alignPDT = u
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/utils/ewma-bandwidth-estimator.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/utils/ewma.js")
              , s = function() {
                function e(e, t, i, s) {
                    this.hls = e,
                    this.defaultEstimate_ = s,
                    this.minWeight_ = .001,
                    this.minDelayMs_ = 50,
                    this.slow_ = new r["default"](t),
                    this.fast_ = new r["default"](i)
                }
                return e.prototype.sample = function(e, t) {
                    e = Math.max(e, this.minDelayMs_);
                    var i = 8e3 * t / e
                      , r = e / 1e3;
                    this.fast_.sample(r, i),
                    this.slow_.sample(r, i)
                }
                ,
                e.prototype.canEstimate = function() {
                    var e = this.fast_;
                    return e && e.getTotalWeight() >= this.minWeight_
                }
                ,
                e.prototype.getEstimate = function() {
                    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                }
                ,
                e.prototype.destroy = function() {}
                ,
                e
            }();
            t["default"] = s
        },
        "./src/utils/ewma.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e) {
                    this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0,
                    this.estimate_ = 0,
                    this.totalWeight_ = 0
                }
                return e.prototype.sample = function(e, t) {
                    var i = Math.pow(this.alpha_, e);
                    this.estimate_ = t * (1 - i) + i * this.estimate_,
                    this.totalWeight_ += e
                }
                ,
                e.prototype.getTotalWeight = function() {
                    return this.totalWeight_
                }
                ,
                e.prototype.getEstimate = function() {
                    if (this.alpha_) {
                        var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                        return this.estimate_ / e
                    }
                    return this.estimate_
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/utils/get-self-scope.js": function(e, t, i) {
            "use strict";
            function r() {
                return "undefined" == typeof window ? self : window
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getSelfScope = r
        },
        "./src/utils/logger.js": function(e, t, i) {
            "use strict";
            function r() {}
            function s(e, t) {
                return t = "[" + e + "] > " + t
            }
            function o(e) {
                var t = u.console[e];
                return t ? function() {
                    for (var i = [], r = 0; r < arguments.length; r++)
                        i[r] = arguments[r];
                    i[0] && (i[0] = s(e, i[0])),
                    t.apply(u.console, i)
                }
                : r
            }
            function a(e) {
                for (var t = [], i = 1; i < arguments.length; i++)
                    t[i - 1] = arguments[i];
                t.forEach(function(t) {
                    d[t] = e[t] ? e[t].bind(e) : o(t)
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i("./src/utils/get-self-scope.js")
              , l = {
                trace: r,
                debug: r,
                log: r,
                warn: r,
                info: r,
                error: r
            }
              , d = l
              , u = n.getSelfScope();
            t.enableLogs = function(e) {
                if (!0 === e || "object" == typeof e) {
                    a(e, "debug", "log", "info", "warn", "error");
                    try {
                        d.log()
                    } catch (t) {
                        d = l
                    }
                } else
                    d = l
            }
            ,
            t.logger = d
        },
        "./src/utils/mediakeys-helper.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                return "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null
            }();
            t.requestMediaKeySystemAccess = r
        },
        "./src/utils/mediasource-helper.js": function(e, t, i) {
            "use strict";
            function r() {
                if ("undefined" != typeof window)
                    return window.MediaSource || window.WebKitMediaSource
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getMediaSource = r
        },
        "./src/utils/output-filter.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    this.timelineController = e,
                    this.trackName = t,
                    this.startTime = null,
                    this.endTime = null,
                    this.screen = null
                }
                return e.prototype.dispatchCue = function() {
                    null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen),
                    this.startTime = null)
                }
                ,
                e.prototype.newCue = function(e, t, i) {
                    (null === this.startTime || this.startTime > e) && (this.startTime = e),
                    this.endTime = t,
                    this.screen = i,
                    this.timelineController.createCaptionsTrack(this.trackName)
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/utils/texttrack-utils.js": function(e, t, i) {
            "use strict";
            function r(e, t) {
                var i = null;
                try {
                    i = new window.Event("addtrack")
                } catch (r) {
                    i = document.createEvent("Event"),
                    i.initEvent("addtrack", !1, !1)
                }
                i.track = e,
                t.dispatchEvent(i)
            }
            function s(e) {
                if (e && e.cues)
                    for (; e.cues.length > 0; )
                        e.removeCue(e.cues[0])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.sendAddTrackEvent = r,
            t.clearCurrentCues = s
        },
        "./src/utils/time-ranges.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                toString: function(e) {
                    for (var t = "", i = e.length, r = 0; r < i; r++)
                        t += "[" + e.start(r).toFixed(3) + "," + e.end(r).toFixed(3) + "]";
                    return t
                }
            };
            t["default"] = r
        },
        "./src/utils/vttcue.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t["default"] = function() {
                function e(e) {
                    return "string" == typeof e && (!!o[e.toLowerCase()] && e.toLowerCase())
                }
                function t(e) {
                    return "string" == typeof e && (!!a[e.toLowerCase()] && e.toLowerCase())
                }
                function i(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var r in i)
                            e[r] = i[r]
                    }
                    return e
                }
                function r(r, o, a) {
                    var n = this
                      , l = function() {
                        if ("undefined" != typeof navigator)
                            return /MSIE\s8\.0/.test(navigator.userAgent)
                    }()
                      , d = {};
                    l ? n = document.createElement("custom") : d.enumerable = !0,
                    n.hasBeenReset = !1;
                    var u = ""
                      , c = !1
                      , h = r
                      , f = o
                      , p = a
                      , v = null
                      , g = ""
                      , m = !0
                      , y = "auto"
                      , b = "start"
                      , _ = 50
                      , E = "middle"
                      , w = 50
                      , k = "middle";
                    if (Object.defineProperty(n, "id", i({}, d, {
                        get: function() {
                            return u
                        },
                        set: function(e) {
                            u = "" + e
                        }
                    })),
                    Object.defineProperty(n, "pauseOnExit", i({}, d, {
                        get: function() {
                            return c
                        },
                        set: function(e) {
                            c = !!e
                        }
                    })),
                    Object.defineProperty(n, "startTime", i({}, d, {
                        get: function() {
                            return h
                        },
                        set: function(e) {
                            if ("number" != typeof e)
                                throw new TypeError("Start time must be set to a number.");
                            h = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "endTime", i({}, d, {
                        get: function() {
                            return f
                        },
                        set: function(e) {
                            if ("number" != typeof e)
                                throw new TypeError("End time must be set to a number.");
                            f = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "text", i({}, d, {
                        get: function() {
                            return p
                        },
                        set: function(e) {
                            p = "" + e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "region", i({}, d, {
                        get: function() {
                            return v
                        },
                        set: function(e) {
                            v = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "vertical", i({}, d, {
                        get: function() {
                            return g
                        },
                        set: function(t) {
                            var i = e(t);
                            if (!1 === i)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            g = i,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "snapToLines", i({}, d, {
                        get: function() {
                            return m
                        },
                        set: function(e) {
                            m = !!e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "line", i({}, d, {
                        get: function() {
                            return y
                        },
                        set: function(e) {
                            if ("number" != typeof e && e !== s)
                                throw new SyntaxError("An invalid number or illegal string was specified.");
                            y = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "lineAlign", i({}, d, {
                        get: function() {
                            return b
                        },
                        set: function(e) {
                            var i = t(e);
                            if (!i)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            b = i,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "position", i({}, d, {
                        get: function() {
                            return _
                        },
                        set: function(e) {
                            if (e < 0 || e > 100)
                                throw new Error("Position must be between 0 and 100.");
                            _ = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "positionAlign", i({}, d, {
                        get: function() {
                            return E
                        },
                        set: function(e) {
                            var i = t(e);
                            if (!i)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            E = i,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "size", i({}, d, {
                        get: function() {
                            return w
                        },
                        set: function(e) {
                            if (e < 0 || e > 100)
                                throw new Error("Size must be between 0 and 100.");
                            w = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(n, "align", i({}, d, {
                        get: function() {
                            return k
                        },
                        set: function(e) {
                            var i = t(e);
                            if (!i)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            k = i,
                            this.hasBeenReset = !0
                        }
                    })),
                    n.displayState = undefined,
                    l)
                        return n
                }
                if ("undefined" != typeof window && window.VTTCue)
                    return window.VTTCue;
                var s = "auto"
                  , o = {
                    "": !0,
                    lr: !0,
                    rl: !0
                }
                  , a = {
                    start: !0,
                    middle: !0,
                    end: !0,
                    left: !0,
                    right: !0
                };
                return r.prototype.getCueAsHTML = function() {
                    return window.WebVTT.convertCueToDOMTree(window, this.text)
                }
                ,
                r
            }()
        },
        "./src/utils/vttparser.js": function(e, t, i) {
            "use strict";
            function r() {
                this.window = window,
                this.state = "INITIAL",
                this.buffer = "",
                this.decoder = new u,
                this.regionList = []
            }
            function s(e) {
                function t(e, t, i, r) {
                    return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | r) / 1e3
                }
                var i = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
            }
            function o() {
                this.values = Object.create(null)
            }
            function a(e, t, i, r) {
                var s = r ? e.split(r) : [e];
                for (var o in s)
                    if ("string" == typeof s[o]) {
                        var a = s[o].split(i);
                        if (2 === a.length) {
                            var n = a[0]
                              , l = a[1];
                            t(n, l)
                        }
                    }
            }
            function n(e, t, i) {
                function r() {
                    var t = s(e);
                    if (null === t)
                        throw new Error("Malformed timestamp: " + l);
                    return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
                    t
                }
                function n() {
                    e = e.replace(/^\s+/, "")
                }
                var l = e;
                if (n(),
                t.startTime = r(),
                n(),
                "--\x3e" !== e.substr(0, 3))
                    throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + l);
                e = e.substr(3),
                n(),
                t.endTime = r(),
                n(),
                function(e, t) {
                    var r = new o;
                    a(e, function(e, t) {
                        switch (e) {
                        case "region":
                            for (var s = i.length - 1; s >= 0; s--)
                                if (i[s].id === t) {
                                    r.set(e, i[s].region);
                                    break
                                }
                            break;
                        case "vertical":
                            r.alt(e, t, ["rl", "lr"]);
                            break;
                        case "line":
                            var o = t.split(",")
                              , a = o[0];
                            r.integer(e, a),
                            r.percent(e, a) && r.set("snapToLines", !1),
                            r.alt(e, a, ["auto"]),
                            2 === o.length && r.alt("lineAlign", o[1], ["start", h, "end"]);
                            break;
                        case "position":
                            o = t.split(","),
                            r.percent(e, o[0]),
                            2 === o.length && r.alt("positionAlign", o[1], ["start", h, "end", "line-left", "line-right", "auto"]);
                            break;
                        case "size":
                            r.percent(e, t);
                            break;
                        case "align":
                            r.alt(e, t, ["start", h, "end", "left", "right"])
                        }
                    }, /:/, /\s/),
                    t.region = r.get("region", null),
                    t.vertical = r.get("vertical", "");
                    var s = r.get("line", "auto");
                    "auto" === s && -1 === c.line && (s = -1),
                    t.line = s,
                    t.lineAlign = r.get("lineAlign", "start"),
                    t.snapToLines = r.get("snapToLines", !0),
                    t.size = r.get("size", 100),
                    t.align = r.get("align", h);
                    var n = r.get("position", "auto");
                    "auto" === n && 50 === c.position && (n = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50),
                    t.position = n
                }(e, t)
            }
            function l(e) {
                return e.replace(/<br(?: \/)?>/gi, "\n")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = i("./src/utils/vttcue.js")
              , u = function() {
                return {
                    decode: function(e) {
                        if (!e)
                            return "";
                        if ("string" != typeof e)
                            throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(e))
                    }
                }
            };
            o.prototype = {
                set: function(e, t) {
                    this.get(e) || "" === t || (this.values[e] = t)
                },
                get: function(e, t, i) {
                    return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
                },
                has: function(e) {
                    return e in this.values
                },
                alt: function(e, t, i) {
                    for (var r = 0; r < i.length; ++r)
                        if (t === i[r]) {
                            this.set(e, t);
                            break
                        }
                },
                integer: function(e, t) {
                    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                },
                percent: function(e, t) {
                    return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t),
                    !0)
                }
            };
            var c = new d["default"](0,0,0)
              , h = "middle" === c.align ? "middle" : "center";
            t.fixLineBreaks = l,
            r.prototype = {
                parse: function(e) {
                    function t() {
                        var e = i.buffer
                          , t = 0;
                        for (e = l(e); t < e.length && "\r" !== e[t] && "\n" !== e[t]; )
                            ++t;
                        var r = e.substr(0, t);
                        return "\r" === e[t] && ++t,
                        "\n" === e[t] && ++t,
                        i.buffer = e.substr(t),
                        r
                    }
                    var i = this;
                    e && (i.buffer += i.decoder.decode(e, {
                        stream: !0
                    }));
                    try {
                        var r = void 0;
                        if ("INITIAL" === i.state) {
                            if (!/\r\n|\n/.test(i.buffer))
                                return this;
                            r = t();
                            var s = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                            if (!s || !s[0])
                                throw new Error("Malformed WebVTT signature.");
                            i.state = "HEADER"
                        }
                        for (var o = !1; i.buffer; ) {
                            if (!/\r\n|\n/.test(i.buffer))
                                return this;
                            switch (o ? o = !1 : r = t(),
                            i.state) {
                            case "HEADER":
                                /:/.test(r) ? function(e) {
                                    a(e, function(e, t) {}, /:/)
                                }(r) : r || (i.state = "ID");
                                continue;
                            case "NOTE":
                                r || (i.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(r)) {
                                    i.state = "NOTE";
                                    break
                                }
                                if (!r)
                                    continue;
                                if (i.cue = new d["default"](0,0,""),
                                i.state = "CUE",
                                -1 === r.indexOf("--\x3e")) {
                                    i.cue.id = r;
                                    continue
                                }
                            case "CUE":
                                try {
                                    n(r, i.cue, i.regionList)
                                } catch (c) {
                                    i.cue = null,
                                    i.state = "BADCUE";
                                    continue
                                }
                                i.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var u = -1 !== r.indexOf("--\x3e");
                                if (!r || u && (o = !0)) {
                                    i.oncue && i.oncue(i.cue),
                                    i.cue = null,
                                    i.state = "ID";
                                    continue
                                }
                                i.cue.text && (i.cue.text += "\n"),
                                i.cue.text += r;
                                continue;
                            case "BADCUE":
                                r || (i.state = "ID");
                                continue
                            }
                        }
                    } catch (c) {
                        "CUETEXT" === i.state && i.cue && i.oncue && i.oncue(i.cue),
                        i.cue = null,
                        i.state = "INITIAL" === i.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                },
                flush: function() {
                    var e = this;
                    try {
                        if (e.buffer += e.decoder.decode(),
                        (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n",
                        e.parse()),
                        "INITIAL" === e.state)
                            throw new Error("Malformed WebVTT signature.")
                    } catch (t) {
                        throw t
                    }
                    return e.onflush && e.onflush(),
                    this
                }
            },
            t["default"] = r
        },
        "./src/utils/webvtt-parser.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/vttparser.js")
                  , s = i("./src/demux/id3.js")
                  , o = function(e, t, i) {
                    return e.substr(i || 0, t.length) === t
                }
                  , a = function(t) {
                    var i = parseInt(t.substr(-3))
                      , r = parseInt(t.substr(-6, 2))
                      , s = parseInt(t.substr(-9, 2))
                      , o = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                    return e.isFinite(i) && e.isFinite(r) && e.isFinite(s) && e.isFinite(o) ? (i += 1e3 * r,
                    i += 6e4 * s,
                    i += 36e5 * o) : -1
                }
                  , n = function(e) {
                    for (var t = 5381, i = e.length; i; )
                        t = 33 * t ^ e.charCodeAt(--i);
                    return (t >>> 0).toString()
                }
                  , l = function(e, t, i) {
                    var r = e[t]
                      , s = e[r.prevCC];
                    if (!s || !s["new"] && r["new"])
                        return e.ccOffset = e.presentationOffset = r.start,
                        void (r["new"] = !1);
                    for (; s && s["new"]; )
                        e.ccOffset += r.start - s.start,
                        r["new"] = !1,
                        r = s,
                        s = e[r.prevCC];
                    e.presentationOffset = i
                }
                  , d = {
                    parse: function(e, t, i, d, u, c) {
                        var h, f = /\r\n|\n\r|\n|\r/g, p = s.utf8ArrayToStr(new Uint8Array(e)).trim().replace(f, "\n").split("\n"), v = "00:00.000", g = 0, m = 0, y = 0, b = [], _ = !0, E = new r["default"];
                        E.oncue = function(e) {
                            var t = i[d]
                              , r = i.ccOffset;
                            t && t["new"] && (m !== undefined ? r = i.ccOffset = t.start : l(i, d, y)),
                            y && (r = y + i.ccOffset - i.presentationOffset),
                            e.startTime += r - m,
                            e.endTime += r - m,
                            e.id = n(e.startTime.toString()) + n(e.endTime.toString()) + n(e.text),
                            e.text = decodeURIComponent(encodeURIComponent(e.text)),
                            e.endTime > 0 && b.push(e)
                        }
                        ,
                        E.onparsingerror = function(e) {
                            h = e
                        }
                        ,
                        E.onflush = function() {
                            if (h && c)
                                return void c(h);
                            u(b)
                        }
                        ,
                        p.forEach(function(e) {
                            if (_) {
                                if (o(e, "X-TIMESTAMP-MAP=")) {
                                    _ = !1,
                                    e.substr(16).split(",").forEach(function(e) {
                                        o(e, "LOCAL:") ? v = e.substr(6) : o(e, "MPEGTS:") && (g = parseInt(e.substr(7)))
                                    });
                                    try {
                                        t = t < 0 ? t + 8589934592 : t,
                                        g -= t,
                                        m = a(v) / 1e3,
                                        y = g / 9e4,
                                        -1 === m && (h = new Error("Malformed X-TIMESTAMP-MAP: " + e))
                                    } catch (i) {
                                        h = new Error("Malformed X-TIMESTAMP-MAP: " + e)
                                    }
                                    return
                                }
                                "" === e && (_ = !1)
                            }
                            E.parse(e + "\n")
                        }),
                        E.flush()
                    }
                };
                t["default"] = d
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/utils/xhr-loader.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/utils/logger.js")
              , s = window.performance
              , o = window.XMLHttpRequest
              , a = function() {
                function e(e) {
                    e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                }
                return e.prototype.destroy = function() {
                    this.abort(),
                    this.loader = null
                }
                ,
                e.prototype.abort = function() {
                    var e = this.loader;
                    e && 4 !== e.readyState && (this.stats.aborted = !0,
                    e.abort()),
                    window.clearTimeout(this.requestTimeout),
                    this.requestTimeout = null,
                    window.clearTimeout(this.retryTimeout),
                    this.retryTimeout = null
                }
                ,
                e.prototype.load = function(e, t, i) {
                    this.context = e,
                    this.config = t,
                    this.callbacks = i,
                    this.stats = {
                        trequest: s.now(),
                        retry: 0
                    },
                    this.retryDelay = t.retryDelay,
                    this.loadInternal()
                }
                ,
                e.prototype.loadInternal = function() {
                    var e, t = this.context;
                    e = this.loader = new o;
                    var i = this.stats;
                    i.tfirst = 0,
                    i.loaded = 0;
                    var r = this.xhrSetup;
                    try {
                        if (r)
                            try {
                                r(e, t.url)
                            } catch (s) {
                                e.open("GET", t.url, !0),
                                r(e, t.url)
                            }
                        e.readyState || e.open("GET", t.url, !0)
                    } catch (s) {
                        return void this.callbacks.onError({
                            code: e.status,
                            text: s.message
                        }, t, e)
                    }
                    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
                    e.onreadystatechange = this.readystatechange.bind(this),
                    e.onprogress = this.loadprogress.bind(this),
                    e.responseType = t.responseType,
                    this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
                    e.send()
                }
                ,
                e.prototype.readystatechange = function(e) {
                    var t = e.currentTarget
                      , i = t.readyState
                      , o = this.stats
                      , a = this.context
                      , n = this.config;
                    if (!o.aborted && i >= 2)
                        if (window.clearTimeout(this.requestTimeout),
                        0 === o.tfirst && (o.tfirst = Math.max(s.now(), o.trequest)),
                        4 === i) {
                            var l = t.status;
                            if (l >= 200 && l < 300) {
                                o.tload = Math.max(o.tfirst, s.now());
                                var d = void 0
                                  , u = void 0;
                                "arraybuffer" === a.responseType ? (d = t.response,
                                u = d.byteLength) : (d = t.responseText,
                                u = d.length),
                                o.loaded = o.total = u;
                                var c = {
                                    url: t.responseURL,
                                    data: d
                                };
                                this.callbacks.onSuccess(c, o, a, t)
                            } else
                                o.retry >= n.maxRetry || l >= 400 && l < 499 ? (r.logger.error(l + " while loading " + a.url),
                                this.callbacks.onError({
                                    code: l,
                                    text: t.statusText
                                }, a, t)) : (r.logger.warn(l + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."),
                                this.destroy(),
                                this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay),
                                this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay),
                                o.retry++)
                        } else
                            this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), n.timeout)
                }
                ,
                e.prototype.loadtimeout = function() {
                    r.logger.warn("timeout while loading " + this.context.url),
                    this.callbacks.onTimeout(this.stats, this.context, null)
                }
                ,
                e.prototype.loadprogress = function(e) {
                    var t = e.currentTarget
                      , i = this.stats;
                    i.loaded = e.loaded,
                    e.lengthComputable && (i.total = e.total);
                    var r = this.callbacks.onProgress;
                    r && r(i, this.context, null, t)
                }
                ,
                e
            }();
            t["default"] = a
        }
    })["default"]
}),
function() {
    var e = function() {
        this.http_protocol = !1,
        this.static_path = !1,
        this.i18n = !1,
        this.presetvisibility = {},
        this.curvisibility = {}
    };
    e.prototype = {
        setHttpProtocol: function(e) {
            this.http_protocol = e
        },
        setStaticPath: function(e) {
            this.static_path = e
        },
        setI18n: function(e) {
            this.i18n = e
        },
        createElt: function(e, t, i, r) {
            var s = document.createElement(e);
            return t && (s.className = t),
            i && (s.id = i),
            r && (s.innerHTML = r),
            s
        },
        createInput: function(e, t, i, r, s) {
            var o = this.createElt("input", r, s);
            return o.name = t,
            o.type = e,
            i && (o.placeholder = i),
            o
        },
        hideElt: function(e) {
            e.style.display = "none"
        },
        showElt: function(e, t) {
            e.style.display = t || ""
        },
        presetHide: function(e) {
            if ("object" != typeof e)
                this.presetvisibility[e] = !1;
            else
                for (var t in e)
                    this.presetvisibility[e[t]] = !1
        },
        presetShow: function(e) {
            if ("object" != typeof e)
                this.presetvisibility[e] = !0;
            else
                for (var t in e)
                    this.presetvisibility[e[t]] = !0
        },
        applyVisibitlity: function() {
            for (var e in this.presetvisibility)
                this.presetvisibility.hasOwnProperty(e) && "undefined" == typeof this[e] || "undefined" != typeof this.curvisibility[e] && this.curvisibility[e] === this.presetvisibility[e] || (this.curvisibility[e] = this.presetvisibility[e],
                this.curvisibility[e] ? (this.showElt(this[e]),
                "pausebt" === e && this.addClass(this.video_div, "paused")) : (this.hideElt(this[e]),
                "pausebt" === e && this.removeClass(this.video_div, "paused")));
            this.presetvisibility = {}
        },
        createImgBtn: function(e, t, i) {
            var r = document.createElement("img");
            return r.src = this.static_path + "img/player/" + e,
            t && (r.title = this.unescape(this.i18n.__(t, i))),
            r
        },
        unescape: function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e,
            0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
        },
        addClass: function(e, t) {
            if (-1 === (" " + e.className + " ").indexOf(" " + t + " "))
                return e.className = e.className + " " + t,
                e
        },
        removeClass: function(e, t) {
            if (void 0 === t || 0 === t.length)
                return e.className = "",
                e;
            for (var i = e.className.split(" "), r = t.split(" "), s = 0; s < r.length; s++)
                if (t = r[s],
                0 !== t.length)
                    for (var o = 0; o < i.length; o++)
                        i[o] === t && (i.splice(o, 1),
                        o--);
            return i = i.join(" "),
            e.className !== i ? (e.className = i,
            e) : void 0
        }
    },
    window.player = {},
    window.player.uibase = e
}(),
function() {
    var e = function(e, t, i, r, s, o, a) {
        player.uibase.apply(this),
        this.skip_time = 5,
        console.log("new VideoAds", e, t, i, r, s, o, a),
        this.view_callback = e,
        this.stats_callback = t,
        this.video_url = i,
        this.click_url = r,
        this.title = s,
        this.domain = o,
        this.instant_skip = a,
        this.is_ios = !1,
        this.is_ios_desktop_mode = !1,
        this.use_ios_fake_play = !1,
        this.playing = !1,
        this.interval_update = !1,
        this.start_muted = !0,
        this.can_skip = !1,
        this.desktop_view = !1,
        this.vast_view_callback = [],
        this.vast_error_callback = [],
        this.vast_click_url = !1,
        this.vast_start_stats_callback = [],
        this.vast_firstQuartile_stats_callback = [],
        this.vast_midpoint_stats_callback = [],
        this.vast_thirdQuartile_stats_callback = [],
        this.vast_complete_stats_callback = [],
        this.vast_pause_stats_callback = [],
        this.vast_mute_stats_callback = [],
        this.vast_fullscreen_stats_callback = [],
        this.vast_skip_stats_callback = [],
        this.vast_progress_stats_callback = [],
        this.vast_click_tracking = [],
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? (this.is_ios = !0,
        /OS [1-9]_/.test(navigator.userAgent) && (this.use_ios_fake_play = !0)) : /Mac OS X/.test(navigator.userAgent) && navigator.maxTouchPoints > 2 && !window.MSStream && (this.is_ios = !0,
        this.is_ios_desktop_mode = !0)
    };
    e.prototype = new player.uibase,
    e.prototype.onClose = null,
    e.prototype.onFullscreen = null,
    e.prototype.startWithSound = function() {
        this.start_muted = !1
    }
    ,
    e.prototype.setDesktopView = function(e) {
        this.desktop_view = e
    }
    ,
    e.prototype.getTitle = function() {
        return this.title ? this.title : this.domain
    }
    ,
    e.prototype.getClickUrl = function() {
        var e = this.click_url;
        return this.vast_click_url && this.vast_click_url.length > 10 && (e = e + "/" + btoa(this.vast_click_url).replace(/\//g, "_").replace(/\+/g, "-")),
        e
    }
    ,
    e.prototype.setVideoUrl = function(e) {
        this.video_url = e
    }
    ,
    e.prototype.getVideoUrl = function() {
        return this.video_url
    }
    ,
    e.prototype.addVastViewCallback = function(e) {
        this.vast_view_callback.push(e)
    }
    ,
    e.prototype.addVastErrorCallback = function(e) {
        this.vast_error_callback.push(e)
    }
    ,
    e.prototype.setVastClickUrl = function(e) {
        this.vast_click_url = e
    }
    ,
    e.prototype.setTitle = function(e) {
        this.title = e
    }
    ,
    e.prototype.addVastClickTrackingCallback = function(e) {
        this.vast_click_tracking.push(e)
    }
    ,
    e.prototype.addVastStartStatsCallback = function(e) {
        this.vast_start_stats_callback.push(e)
    }
    ,
    e.prototype.addVastFirstQuartileStatsCallback = function(e) {
        this.vast_firstQuartile_stats_callback.push(e)
    }
    ,
    e.prototype.addVastMidpointStatsCallback = function(e) {
        this.vast_midpoint_stats_callback.push(e)
    }
    ,
    e.prototype.addVastThirdQuartileStatsCallback = function(e) {
        this.vast_thirdQuartile_stats_callback.push(e)
    }
    ,
    e.prototype.addVastCompleteStatsCallback = function(e) {
        this.vast_complete_stats_callback.push(e)
    }
    ,
    e.prototype.addVastPauseStatsCallback = function(e) {
        this.vast_pause_stats_callback.push(e)
    }
    ,
    e.prototype.addVastMuteStatsCallback = function(e) {
        this.vast_mute_stats_callback.push(e)
    }
    ,
    e.prototype.addVastFullScreenStatsCallback = function(e) {
        this.vast_fullscreen_stats_callback.push(e)
    }
    ,
    e.prototype.addVastSkipStatsCallback = function(e) {
        this.vast_skip_stats_callback.push(e)
    }
    ,
    e.prototype.addVastProgressCallback = function(e, t) {
        var i = t.match(/^([0-9]+):([0-9]+):([0-9]+).([0-9]+)$/);
        if (5 == i.length) {
            var r = 3600 * parseInt(i[1]) + 60 * parseInt(i[2]) + parseInt(i[3]) + parseFloat("0." + i[4]);
            console.log("OffsetSec", r);
            var s = {};
            s.url = e,
            s.offset = r,
            this.vast_progress_stats_callback.push(s)
        }
    }
    ,
    e.prototype.getAdDiv = function() {
        if (!this.video_url)
            return console.log("VideoAds : No video url to display. Skipping video ads"),
            !1;
        var e = this;
        this.video_ad_div = this.createElt("div", "videoad-base"),
        this.video_ad_div.addEventListener("dblclick", function(e) {
            e.stopPropagation(),
            console.log("DblClick catched")
        }),
        this.video_ad_div.addEventListener("click", function(e) {
            e.stopPropagation(),
            console.log("Click catched")
        }),
        this.video = this.createElt("video", "videoad-video"),
        this.is_ios ? this.use_ios_fake_play ? this.addClass(this.video, "videoad-nocontrol-ios") : this.video.setAttribute("playsinline", "") : this.video.controls = !1,
        this.start_muted ? (console.log("VideoAds: Start the video muted"),
        this.video.muted = "muted") : console.log("VideoAds: Start the video with sound"),
        this.video.autoplay = "autoplay",
        this.video.src = this.video_url,
        this.video_ad_div.appendChild(this.video),
        this.video.addEventListener("click", function() {
            console.log("Click video ads")
        }),
        this.video.addEventListener("playing", function() {
            xv.console.log("VideoAdEvent: Playing at " + e.video.currentTime + " / " + e.video.duration, "Player"),
            e.playing || (e.playing = !0,
            e.makeViewCallback()),
            e.redraw()
        }),
        this.video.addEventListener("error", function() {
            var t = "No details";
            this.error && (t = "error.code = '" + this.error.code + "', error.message = '" + this.error.message + "'"),
            xv.console.log("VideoAdEvent: error at " + e.video.currentTime + " / " + e.video.duration + " , " + t, "Player"),
            e.makeErrorCallBack(401, "HTML5Video error event at " + e.video.currentTime + " secs of " + e.video.duration + " sec total duration (" + t + ")"),
            e.closeAd()
        }),
        this.video.addEventListener("ended", function() {
            xv.console.log("VideoAdEvent: Ended at " + e.video.currentTime + " / " + e.video.duration, "Player"),
            e.makeStatsCallback("full"),
            e.makeVastCallback("vast_complete_stats_callback", 0),
            e.closeAd()
        }),
        this.video.addEventListener("timeupdate", function() {
            if (e.video) {
                var t = Math.round(e.video.duration - e.video.currentTime);
                if (t < 0 && (t = 0),
                t === NaN && (t = 0),
                e.video_status.innerHTML = t + " sec",
                e.redraw(),
                e.video.duration && !(e.video.duration < 1)) {
                    for (var i = 0; i < e.vast_progress_stats_callback.length; i++) {
                        var r = e.vast_progress_stats_callback[i];
                        if (!(e.video.currentTime < r.offset)) {
                            var s = createRequestObject();
                            s.open("GET", r.url, !0);
                            try {
                                s.send()
                            } catch (a) {}
                            e.vast_progress_stats_callback.splice(i, 1)
                        }
                    }
                    var o = e.video.currentTime / e.video.duration * 100;
                    o > 25 && e.vast_firstQuartile_stats_callback && e.makeVastCallback("vast_firstQuartile_stats_callback", 0),
                    o > 50 && e.vast_midpoint_stats_callback && e.makeVastCallback("vast_midpoint_stats_callback", 0),
                    o > 50 && e.vast_thirdQuartile_stats_callback && e.makeVastCallback("vast_thirdQuartile_stats_callback", 0)
                }
            }
        }),
        this.video_click_div = this.createElt("div", "videoad-click"),
        this.video_click_div.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.video.paused ? e.video.play() : (e.video.pause(),
            e.makeVastCallback("vast_pause_stats_callback", 0))
        }),
        this.video_ad_div.appendChild(this.video_click_div),
        this.use_ios_fake_play || (this.progressbarbg = this.createElt("div", "progress-bar-bg"),
        this.video_ad_div.appendChild(this.progressbarbg),
        this.progressbar = this.createElt("div", "progress-bar"),
        this.progressbar.style.width = "100%",
        this.video_ad_div.appendChild(this.progressbar),
        this.progressbarcursor = this.createElt("div", "progress-bar-cursor"),
        this.progressbar.appendChild(this.progressbarcursor),
        this.leftbuttonsbar = this.createElt("div", "buttons-bar left"),
        this.leftbuttonsbar.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }),
        this.video_ad_div.appendChild(this.leftbuttonsbar),
        this.topleftbuttonsbar = this.createElt("div", "buttons-bar topleft"),
        this.topleftbuttonsbar.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }),
        this.video_ad_div.appendChild(this.topleftbuttonsbar),
        this.soundonbarbt = this.createImgBtn("icon-volume-full.svg", "player.mute"),
        this.soundonbarbt.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.video.muted = "muted",
            e.makeVastCallback("vast_mute_stats_callback", 0),
            e.redraw()
        }),
        this.topleftbuttonsbar.appendChild(this.soundonbarbt),
        this.soundoffbarbt = this.createImgBtn("icon-volume-mute-bold.svg", "player.unmute"),
        this.soundoffbarbt.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.video.muted = !1,
            e.redraw()
        }),
        this.topleftbuttonsbar.appendChild(this.soundoffbarbt),
        this.video_status = this.createElt("div", "videoad-status"),
        this.video_status.style.width = "100px",
        this.leftbuttonsbar.appendChild(this.video_status),
        this.rightbuttonsbar = this.createElt("div", "buttons-bar right"),
        this.video_ad_div.appendChild(this.rightbuttonsbar)),
        this.title_div = this.createElt("div", "videoad-title videoad-title-beforevideo noselect"),
        this.title_div.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.openAdClick()
        }),
        this.title_txt = this.createElt("div", "videoad-title-txt"),
        "exosrv.com" === this.domain || "realsrv.com" === this.domain ? this.title_txt.innerHTML = "Learn more" : "adglare.net" === this.domain || "claring-loccelkin.com" === this.domain ? this.title_txt.innerHTML = "Live Now" : this.title ? this.title_txt.innerHTML = this.title : this.title_txt.innerHTML = this.domain,
        this.title_div.appendChild(this.title_txt),
        this.title_icon = this.createImgBtn("icon-stream.svg", this.label),
        this.title_icon.className = "videoad-title-icon",
        this.title_div.appendChild(this.title_icon),
        this.video_ad_div.appendChild(this.title_div),
        this.centerlink_superdiv = this.createElt("div", "videoad-centerlink-superdiv noselect"),
        this.centerlink_div = this.createElt("div", "videoad-centerlink noselect"),
        this.centerlink_div.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.openAdClick()
        }),
        this.centerlink_txt = this.createElt("div", "videoad-centerlink-txt"),
        this.centerlink_txt.innerHTML = this.i18n.__("player.visit_site", null, "Visit site"),
        this.centerlink_div.appendChild(this.centerlink_txt),
        this.centerlink_icon = this.createImgBtn("icon-stream.svg", this.label),
        this.centerlink_icon.className = "videoad-centerlink-icon",
        this.centerlink_div.appendChild(this.centerlink_icon),
        this.centerlink_superdiv.appendChild(this.centerlink_div),
        this.video_ad_div.appendChild(this.centerlink_superdiv),
        this.skip_button = this.createElt("div", "videoad-skip"),
        this.video_ad_div.appendChild(this.skip_button),
        this.skip_button_txt = this.createElt("div", "videoad-skip-txt"),
        this.skip_button.appendChild(this.skip_button_txt),
        this.interval_update = setInterval(function() {
            return e.playing ? !e.instant_skip && e.video.currentTime < e.skip_time ? void (e.skip_button_txt.innerHTML = e.i18n.__("player.can_skip_in_sec", {
                "%nb_secs%": Math.floor(e.skip_time - e.video.currentTime + 1).toString()
            }, "Can skip in %nb_secs% sec")) : (clearInterval(e.interval_update),
            e.skip_button_txt.innerHTML = e.i18n.__("player.skip_ad", null, "Skip ad") + " <span class='icon-f icf-play-square-o'></span>",
            e.skip_button.addEventListener("click", function(t) {
                t.stopPropagation(),
                e.makeStatsCallback("skip"),
                e.makeVastCallback("vast_skip_stats_callback", 0),
                e.closeAd()
            }),
            e.addClass(e.skip_button, "skippable"),
            void (e.can_skip = !0)) : void (e.skip_button_txt.innerHTML = e.i18n.__("player.loading", null, "Loading..."))
        }, 200),
        this.use_ios_fake_play ? this.ios_interval = setInterval(function() {
            if (e.video.duration) {
                if (e.video.currentTime - .1 >= e.video.duration)
                    return e.makeStatsCallback("full"),
                    void e.closeAd();
                e.playing = !0,
                e.video.currentTime = e.video.currentTime + .033
            }
        }, 33) : this.video.play(),
        this.skip_timeout = setTimeout(function() {
            console.log("Skip timeout"),
            e.playing || (e.makeStatsCallback("error"),
            e.closeAd()),
            e.can_skip || (console.log("Wahou .. skip can't skip after 15 sec"),
            e.makeStatsCallback("error"),
            e.closeAd())
        }, 15e3),
        this.redraw(),
        this.redraw_internal = setInterval(function() {
            e.redraw()
        }, 300);
        for (var t = 0; t < this.vast_view_callback.length; t++) {
            var i = createRequestObject()
              , r = this.vast_view_callback[t];
            i.open("GET", r, !0);
            try {
                i.send()
            } catch (s) {}
        }
        return xv.console.log("VideoAds : div loaded", "Player"),
        this.video_ad_div
    }
    ,
    e.prototype.openAdClick = function() {
        this.makeVastCallback("vast_click_tracking", 0),
        this.video.pause();
        var e = this.getClickUrl();
        window.open(e, "_blank")
    }
    ,
    e.prototype.redraw = function() {
        var e = (this.video_ad_div.offsetWidth,
        this.video_ad_div.offsetHeight,
        this.getDrawResizeCoef())
          , t = 1.4;
        this.desktop_view && (t = .9);
        var i = function(t, i, r) {
            t.style.width = Math.floor(i * e) + "px",
            r && (t.style.height = Math.floor(r * e) + "px")
        }
          , r = function(t) {
            for (var i = [], r = 1; r < arguments.length; r++)
                i.push(Math.floor(arguments[r] * e) + "px");
            t.style.padding = i.join(" ")
        }
          , s = function(e, t, s) {
            i(e, t, s);
            for (var o = [e], a = 3; a < arguments.length; a++)
                o.push(arguments[a]);
            r.apply(this, o)
        }
          , o = 2.5;
        this.desktop_view && (o = 3.5),
        this.progressbarbg.style.height = Math.max(this.leftbuttonsbar.offsetHeight, this.rightbuttonsbar.offsetHeight) * o + "px",
        this.fullscreenbarbt && s(this.fullscreenbarbt, 28 * t, 28 * t, 5 * t, 7 * t),
        this.playbarbt && (s(this.playbarbt, 23 * t, 23 * t, 5 * t, 7 * t),
        this.video.paused ? this.playbarbt.style.display = "inline" : this.playbarbt.style.display = "none"),
        this.pausebarbt && (s(this.pausebarbt, 23 * t, 23 * t, 5 * t, 7 * t),
        this.video.paused ? this.pausebarbt.style.display = "none" : this.pausebarbt.style.display = "inline"),
        this.soundonbarbt && (s(this.soundonbarbt, 28 * t, 28 * t, 5 * t, 7 * t),
        this.video.muted ? this.soundonbarbt.style.display = "none" : this.soundonbarbt.style.display = "inline"),
        this.soundoffbarbt && (s(this.soundoffbarbt, 28 * t, 28 * t, 5 * t, 7 * t),
        this.video.muted ? this.soundoffbarbt.style.display = "inline" : this.soundoffbarbt.style.display = "none"),
        this.progressbar && (this.progressbar.style.bottom = this.leftbuttonsbar.offsetHeight + "px",
        this.progressbar.style.height = "0px"),
        this.leftbuttonsbar && (this.leftbuttonsbar.style.margin = .01 * this.video.offsetHeight + "px",
        this.skip_button.style.bottom = .1 * (this.leftbuttonsbar.offsetHeight + this.progressbar.offsetHeight) + "px",
        this.video_status.style.height = this.leftbuttonsbar.offsetHeight / 1.5 + "px",
        this.centerlink_superdiv.style.bottom = this.progressbar.offsetHeight + this.skip_button.offsetHeight + "px")
    }
    ,
    e.prototype.closeAd = function() {
        clearInterval(this.interval_update),
        this.ios_interval && clearInterval(this.ios_interval),
        this.redraw_internal && clearInterval(this.redraw_internal),
        this.video.pause(),
        delete this.video,
        this.onClose()
    }
    ,
    e.prototype.makeViewCallback = function() {
        if (this.view_callback) {
            var e = createRequestObject();
            e.open("GET", this.view_callback, !0),
            e.withCredentials = !0,
            e.onreadystatechange = function() {
                4 === e.readyState && 200 === e.status && console.log("View callback done")
            }
            ;
            try {
                e.send()
            } catch (t) {
                return
            }
            this.makeVastCallback("vast_start_stats_callback", 0)
        }
    }
    ,
    e.prototype.makeErrorCallBack = function(e, t) {
        t || (t = ""),
        this.makeStatsCallback("error"),
        this.makeVastCallback("vast_error_callback", e, t)
    }
    ,
    e.prototype.makeVastCallback = function(e, t, i) {
        if ("undefined" == typeof this[e])
            return void console.log("VideoAds : Vast " + e + " doesn't exist");
        if (this[e]) {
            for (var r = 0; r < this[e].length; r++) {
                var s = this[e][r];
                t && (s = s.replace(/\[ERRORCODE\]/, t + "&errortxt=" + encodeURI(i)));
                var o = createRequestObject();
                o.open("GET", s, !0),
                o.withCredentials = !0;
                try {
                    o.send()
                } catch (a) {
                    return
                }
            }
            this[e] = !1
        }
    }
    ,
    e.prototype.makeStatsCallback = function(e) {
        if (this.stats_callback) {
            var t = 0
              , i = 0;
            this.video && (t = this.video.currentTime,
            i = this.video.duration);
            var r = this.stats_callback + e + "-" + t + "-" + i
              , s = createRequestObject();
            s.open("GET", r, !0),
            s.onreadystatechange = function() {
                4 === s.readyState && 200 === s.status && console.log("Stats callback done")
            }
            ;
            try {
                s.send()
            } catch (o) {
                return
            }
        }
    }
    ,
    e.prototype.formatDuration = function(e) {
        var t = Math.floor(e / 60)
          , i = Math.floor(e - 60 * t);
        return i < 10 && (i = "0" + i),
        t < 10 && (t = "0" + t),
        t + ":" + i
    }
    ,
    e.prototype.getDrawMinSize = function() {
        var e = this.video_ad_div.offsetHeight;
        return this.video_ad_div.offsetWidth < e && (e = this.video_ad_div.offsetWidth),
        e
    }
    ,
    e.prototype.getDrawButtonMargin = function() {
        var e = this.getDrawMinSize();
        return this.isFullScreen ? Math.floor(.04 * e) : Math.floor(.06 * e)
    }
    ,
    e.prototype.getDrawResizeCoef = function() {
        return this.desktop_view ? .8 : this.getDrawMinSize() / 400
    }
    ,
    window.player.videoads = e
}(),
HTML5Player.prototype = {
    createElt: function(e, t, i, r) {
        var s = document.createElement(e);
        return t && (s.className = t),
        i && (s.id = i),
        r && (s.innerHTML = r),
        s
    },
    createInput: function(e, t, i, r, s) {
        var o = this.createElt("input", r, s);
        return o.name = t,
        o.type = e,
        i && (o.placeholder = i),
        o
    },
    hideElt: function(e) {
        e.style.display = "none"
    },
    showElt: function(e, t) {
        e.style.display = t || ""
    },
    presetHide: function(e) {
        if ("object" != typeof e)
            this.presetvisibility[e] = !1;
        else
            for (var t in e)
                this.presetvisibility[e[t]] = !1
    },
    presetShow: function(e) {
        if ("object" != typeof e)
            this.presetvisibility[e] = !0;
        else
            for (var t in e)
                this.presetvisibility[e[t]] = !0
    },
    applyVisibitlity: function() {
        for (var e in this.presetvisibility)
            this.presetvisibility.hasOwnProperty(e) && "undefined" != typeof this[e] && ("undefined" != typeof this.curvisibility[e] && this.curvisibility[e] === this.presetvisibility[e] || (this.curvisibility[e] = this.presetvisibility[e],
            this.curvisibility[e] ? (this.showElt(this[e]),
            "pausebt" === e && this.addClass(this.video_div, "paused")) : (this.hideElt(this[e]),
            "pausebt" === e && this.removeClass(this.video_div, "paused"))));
        this.presetvisibility = {}
    },
    createImgBtn: function(e, t, i) {
        var r = document.createElement("img");
        return r.src = this.static_path + "img/player/" + e,
        t && (r.title = this.unescape(this.i18n.__(t, i))),
        r
    },
    unescape: function(e) {
        var t = document.createElement("div");
        return t.innerHTML = e,
        0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
    },
    addClass: function(e, t) {
        if (-1 === (" " + e.className + " ").indexOf(" " + t + " "))
            return e.className = e.className + " " + t,
            e
    },
    removeClass: function(e, t) {
        if (void 0 === t || 0 === t.length)
            return e.className = "",
            e;
        for (var i = e.className.split(" "), r = t.split(" "), s = 0; s < r.length; s++)
            if (t = r[s],
            0 !== t.length)
                for (var o = 0; o < i.length; o++)
                    i[o] === t && (i.splice(o, 1),
                    o--);
        return i = i.join(" "),
        e.className !== i ? (e.className = i,
        e) : void 0
    },
    appendToVideoDiv: function(e) {
        this.video_div.appendChild(e),
        e.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        })
    },
    setVideoTitle: function(e) {
        this.video_title = e
    },
    setSponsors: function(e) {
        this.sponsors = e
    },
    setVideoUrlLow: function(e) {
        this.url_low = e
    },
    setVideoUrlHigh: function(e) {
        this.url_high = e
    },
    setVideoHLS: function(e) {
        this.url_hls = e
    },
    setThumbUrl: function(e) {
        this.url_thumb = e
    },
    setRelated: function(e) {
        this.related_array = e
    },
    setThumbSlide: function(e) {
        this.thumb_slide = e
    },
    setThumbSlideBig: function(e) {
        this.thumb_slide_big = e
    },
    setThumbSlideMinute: function(e) {
        this.thumb_slide_min = e
    },
    setThumbUrl169: function(e) {
        this.url_thumb169 = e
    },
    setIdCDN: function(e) {
        this.id_cdn = e
    },
    setIdCdnHLS: function(e) {
        this.id_cdn_hls = e
    },
    setFakePlayer: function(e) {
        this.fake_player = e
    },
    setDesktopiew: function(e) {
        this.desktop_view = e
    },
    setIsSmartTv: function(e) {
        this.is_smarttv = e
    },
    forceNativeHls: function(e) {
        this.forcenativehls = e
    },
    setUploaderName: function(e) {
        this.uploader_name = e
    },
    forceDoubleClickAd: function(e) {
        this.need_doubleclick_ad = e
    },
    setIsEmbed: function() {
        this.is_embed = !0
    },
    setDisplayInPlayerSquare: function() {
        this.display_inplayersquare = !0
    },
    setVideoURL: function(e) {
        this.video_url = e
    },
    setSendDeviceSpeed: function(e) {
        this.send_device_speed = e
    },
    setActivateFithteenPercentBorder: function() {
        this.ads_active_fithteenpercentborder = !0
    },
    setSendAdClickDebug: function() {
        this.send_adclick_debug = !0
    },
    setHttps: function() {
        this.http_protocol = "https"
    },
    setCanUseHttps: function() {
        this.https_protocol = "https"
    },
    setStaticPath: function(e) {
        e && (this.static_path = e)
    },
    setSeekBarColor: function(e) {
        console.log("setSeekBarColor : " + e),
        this.seek_bar_color = e
    },
    setPageReferer: function(e) {
        this.page_referer = e
    },
    setIsPremiumSite: function() {
        this.is_premium_site = !0
    },
    setIsPremiumVideo: function() {
        this.is_premium_video = !0
    },
    setFlashCodeAvailable: function() {
        this.flashcode_available = !0
    },
    activateExtraDebug: function() {
        this.extra_debug = !0
    },
    setPlaylist: function(e, t, i, r, s) {
        if (this.plprevbt && !(i.length <= 1)) {
            this.playlist = {
                current: !1,
                prev: !1,
                next: !1,
                idx: 0,
                length: r || i.length
            };
            var o;
            for (o in i)
                if (i[o].id == this.id_video) {
                    "string" == typeof o && (o = parseInt(o)),
                    this.playlist.current = i[o],
                    o > 0 && (this.playlist.prev = i[o - 1]),
                    o < i.length - 1 && (this.playlist.next = i[o + 1]);
                    break
                }
            if (!this.playlist.current)
                return void (this.playlist = !1);
            this.plprevbt && this.playlist.prev && (this.plprevbt.style.visibility = "visible",
            this.plprevbtimg.title = this.unescape(this.i18n.__("player.previous_pl_video", {
                "%name%": '"' + this.playlist.prev.title_full + '"'
            }))),
            this.plnextbt && this.playlist.next && (this.plnextbt.style.visibility = "visible",
            this.plnextbtimg.title = this.unescape(this.i18n.__("player.next_pl_video", {
                "%name%": '"' + this.playlist.next.title_full + '"'
            }))),
            this.videotitlediv.innerHTML += '<br><span class="playlist"><span class="label">' + this.i18n.__("player.playlist") + ":</span> " + e + " (" + this.i18n.__("player.video_pos_in_nb", {
                "%current_video_index%": ((s || o) + 1).toString(),
                "%nb_videos%": this.playlist.length.toString()
            }) + ")</span>",
            this.updateBtVisibity(),
            this.redraw()
        }
    },
    initPlayer: function() {
        if (!this.player_init) {
            this.player_init = !0;
            var e = this;
            console.log("Useragent:" + navigator.userAgent.toLowerCase()),
            /Mac OS X/.test(navigator.userAgent) && navigator.maxTouchPoints > 2 && !window.MSStream && (this.is_ios_desktop_mode = !0,
            xv.console.log("iPad in Desktop mode detected", "Player")),
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? (/iPad/.test(navigator.userAgent) && !window.MSStream ? (this.is_ipad = !0,
            console.log("is iPad")) : (this.is_ios = !0,
            console.log("is iOS")),
            /OS [1-9]_/.test(navigator.userAgent) ? (this.is_old_ios = !0,
            this.use_browser_controls = !0) : (this.use_browser_controls = !0,
            !this.is_ipad && /OS 1[1-3]_/.test(navigator.userAgent) && (console.log("iPhone iOS 11"),
            this.allow_touchseek = !0,
            this.force_play_fullscreen = !0,
            this.use_browser_controls = !1),
            this.is_new_iphone = !0)) : !/android 4.[2-9]/.test(navigator.userAgent.toLowerCase()) || /chrome\/[4-9]/.test(navigator.userAgent.toLowerCase()) || /firefox/.test(navigator.userAgent.toLowerCase()) || /ubuntu /.test(navigator.userAgent.toLowerCase()) ? this.fullscreenSupported() || (xv.console.log("Fullscreen not supported, use browser controls", "Player"),
            this.use_browser_controls = !0) : (xv.console.log("Old browser detected", "Player"),
            this.use_browser_controls = !0),
            (/android 4.4/.test(navigator.userAgent.toLowerCase()) || /android [5-9]/.test(navigator.userAgent.toLowerCase()) || /android [1-2][0-9]/.test(navigator.userAgent.toLowerCase())) && (/chrome\/[4-9][0-9]/.test(navigator.userAgent.toLowerCase()) || /chrome\/[1-2][0-9][0-9]/.test(navigator.userAgent.toLowerCase()) || /firefox/.test(navigator.userAgent.toLowerCase())) ? (this.allow_touchseek = !0,
            console.log("allow TouchSeek")) : this.desktop_view && (console.log("Is a desktop"),
            this.allow_touchseek = !0),
            this.support_hlsjs = this.supportHLSjs(),
            (this.is_ios || this.is_ipad) && (this.support_hlsjs = !1,
            this.use_parameter_menu = !1);
            var t = document.createElement("video");
            if ("undefined" != typeof t.canPlayType && "" !== t.canPlayType("application/vnd.apple.mpegURL") && (xv.console.log("Support Native HLS", "Player"),
            this.support_native_hls = !0),
            this.desktop_view && -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && (this.support_native_hls && (this.is_safari = !0,
            this.support_hlsjs = !1,
            xv.console.log("Safari do not support HLS.js", "Player")),
            !this.fullscreenSupported()))
                return xv.console.log("Old safari browser, switch to Flash", "Player"),
                void this.drawFakePlayer();
            if (this.fake_player || "undefined" == typeof window.addEventListener)
                return xv.console.log("Seems to be a very old browser", "Player"),
                void this.drawFakePlayer();
            if ("undefined" != typeof t.canPlayType && "" === t.canPlayType('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'))
                return xv.console.log("This browser do not support MP4", "Player"),
                void this.drawFakePlayer();
            if (this.loadPreference(),
            /XXXAndroidApp/.test(navigator.userAgent) && (console.log("Android App"),
            this.is_android_app = !0),
            /playstation 4 /.test(navigator.userAgent.toLowerCase()) && (xv.console.log("Playstation 4 detected", "Player"),
            this.is_ps4 = !0),
            "" !== this.url_hls && (this.support_native_hls && (this.is_ios || this.is_ipad || this.is_safari || this.is_ps4 || this.forcenativehls) ? this.use_native_hls = !0 : this.support_hlsjs && (this.support_native_hls && this.forcenativehls ? this.use_native_hls = !0 : this.use_hls = !0)),
            this.desktop_view)
                if (this.is_smarttv) {
                    if (!this.supportDefaultHlsjs()) {
                        if (this.hasFlash())
                            return this.is_flashplayer_displayed = !0,
                            void console.log("SmartTV with flash. Displaying Flash");
                        if (!this.support_native_hls && !/tizen /.test(navigator.userAgent.toLowerCase()))
                            return xv.console.log("Tizen SmartTV", "Player"),
                            void this.drawFakePlayer();
                        this.support_native_hls && "" !== this.url_hls && (this.use_native_hls = !0)
                    }
                } else if (!this.use_hls && !this.use_native_hls && this.hasFlash())
                    return xv.console.log("Old Desktop without HLS or native HLS. Displaying Flash", "Player"),
                    void (this.is_flashplayer_displayed = !0);
            this.draw(),
            this.loadPreference(),
            this.loadVideoSrc(),
            this.setBuffering(!0),
            this.video.addEventListener("loadstart", function() {
                console.log("VideoEvent: loadstart"),
                e.hlsobj && e.use_hls && e.forcenoautobuffer && e.hlsobj.startLoad(),
                e.canPlay = !1,
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("timeupdate", function() {
                1 !== e.video.networkState && 2 !== e.video.networkState || (e.detectPlaying(),
                e.updateDuration())
            }),
            this.video.addEventListener("progress", function() {
                1 !== e.video.networkState && 2 !== e.video.networkState || (e.detectPlaying(),
                e.updateDuration())
            }),
            this.video.addEventListener("play", function() {
                var t = "VideoEvent: play at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                e.use_hls && !e.playClicked && (console.log("VideoEvent play: play not clicked, force pause"),
                e.pause()),
                e.detectPlaying(),
                e.updateBtVisibity(),
                e.is_ps4 && !e.PS4FirstSeekDone && (e.PS4FirstSeekDone = !0,
                e.seek(.5))
            }),
            this.video.addEventListener("seeking", function() {
                var t = "VideoEvent: seeking at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                e.canPlay = !1,
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("waiting", function() {
                xv.console.log("VideoEvent: Waiting", "Player"),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("suspend", function() {
                var t = "VideoEvent: Suspend at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                e.canPlay = !0,
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("canplaythrough", function() {
                var t = "VideoEvent: Can Play Throught at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                e.canPlay = !0,
                e.checkNeedSeek(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("canplay", function() {
                var t = "VideoEvent: Can Play at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                e.canPlay = !0,
                e.checkNeedSeek(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("playing", function() {
                var t = "VideoEvent: Playing at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                e.preloaded = !0,
                e.errortimer && (clearTimeout(e.errortimer),
                delete e.errortimer),
                e.detectPlaying(),
                e.updateBtVisibity(),
                e.send_debug_event("playing")
            }),
            this.video.addEventListener("pause", function() {
                var t = "VideoEvent: Pause at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                e.forcenoautobuffer && e.playClicked && !e.forcenobuffer_playafterpause && (e.play(),
                e.forcenobuffer_playafterpause = !0),
                e.detectPlaying(),
                e.updateBtVisibity(),
                e.redraw()
            }),
            this.video.addEventListener("error", function() {
                var t = "VideoEvent: error at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                3 === e.video.networkState && e.recoverError(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("ended", function() {
                console.log("VideoEvent: Ended at " + e.video.currentTime + " / " + e.video.duration),
                !e.video.loop && e.isFullScreen && e.fullscreen(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("abort", function() {
                var t = "VideoEvent: abort at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("durationchange", function() {
                var t = "VideoEvent: Duration Change at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("loadeddata", function() {
                xv.console.log("VideoEvent: Loaded Data", "Player"),
                console.log("VideoEvent: Loaded Data"),
                e.canPlay = !0,
                e.checkNeedSeek(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("loadedmetadata", function() {
                var t = "VideoEvent: Loadedmetadata";
                xv.console.log(t, "Player"),
                console.log(t),
                e.canPlay = !0,
                e.detectPlaying(),
                e.updateBtVisibity(),
                e.videoRatio = e.video.videoWidth / e.video.videoHeight,
                console.log("Video ratio", e.videoRatio),
                e.video.duration > 0 && e.video.duration <= 90 && e.loopbtn && (e.force_no_loop || (e.video.loop = "true",
                e.loopbtn.setChecked(!0))),
                console.log("self.thumb_slide_type ", e.thumb_slide_type),
                e.thumb_slide_type === HTML5Player.TYPE_MINUTE && e.preloadMozaiqueMinThumbOnStart()
            }),
            this.video.addEventListener("seeked", function() {
                var t = "VideoEvent: Seeked at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"),
                console.log(t);
                var i = !e.canPlay;
                e.canPlay = !0,
                e.detectPlaying(),
                e.updateBtVisibity(),
                i && e.redraw()
            }),
            document.addEventListener("webkitfullscreenchange", function() {
                console.log("webkitfullscreenchange"),
                e.toggleFullscreen()
            }),
            document.addEventListener("mozfullscreenchange", function() {
                console.log("mozfullscreenchange"),
                e.toggleFullscreen()
            }),
            document.addEventListener("fullscreenchange", function() {
                console.log("fullscreenchange"),
                e.toggleFullscreen()
            }),
            document.addEventListener("MSFullscreenChange", function() {
                console.log("MSFullscreenChange"),
                e.toggleFullscreen()
            })
        }
    },
    showPlayer: function() {
        this.global_div && (console.log("HTML5: Show player"),
        this.showElt(this.global_div))
    },
    drawFakePlayer: function() {
        if (this.desktop_view && this.hasFlash())
            return this.is_flashplayer_displayed = !0,
            console.log("Desktop with flash. Displaying Flash"),
            void xv.console.log("Use flash player for desktop", "Player");
        this.is_fakeplayer_displayed = !0,
        this.global_div.innerHTML = "",
        this.video_div = this.createElt("div", "", "fakeplayer"),
        this.video_div.style.position = "relative",
        this.video_div.style.width = "100%",
        this.video_div.style.height = "100%",
        this.video_div.style.textAlign = "center",
        this.video_div.style.backgroundColor = "#000",
        this.global_div.appendChild(this.video_div);
        var e = this;
        if ("undefined" != typeof setInterval) {
            var t = 0
              , i = 0;
            this.interval_updated = setInterval(function() {
                e.video_div.offsetWidth === t && e.video_div.offsetHeight === i || (t = e.video_div.offsetWidth,
                i = e.video_div.offsetHeight,
                e.redrawFakePlayer())
            }, 100)
        }
        this.globallink = this.createElt("a", "global-link"),
        this.globallink.style.display = "block",
        this.globallink.style.width = "100%",
        this.video_div.appendChild(this.globallink),
        this.videopicture = this.createElt("img", "video-bg-pic"),
        this.videopicture.style.width = "320px",
        this.videopicture.style.height = "450px",
        this.videopicture.src = this.url_thumb169,
        this.videopicture.border = "0",
        this.globallink.appendChild(this.videopicture),
        this.playbt = this.createElt("img", "play-btn"),
        this.playbt.src = this.static_path + "img/player/fakeplayer-icon-play.png",
        this.playbt.style.position = "absolute",
        this.playbt.style.width = "128px",
        this.playbt.style.height = "128px",
        this.playbt.border = "0",
        this.globallink.appendChild(this.playbt),
        this.playlinks = this.createElt("div", "play-links"),
        this.playlinks.style.width = "100%",
        this.playlinks.style.visibility = "hidden",
        this.video_div.appendChild(this.playlinks),
        this.lowquallink = this.createElt("div", "play-link"),
        this.playlinks.appendChild(this.lowquallink);
        var r = document.createElement("a");
        if (r.style.display = "block",
        r.style.textAlign = "center",
        r.style.border = "2px solid #333",
        r.style.margin = "2px",
        r.style.background = "#aaa",
        r.style.fontWeight = "bold",
        r.style.lineHeight = "1.5",
        this.lowquallink.appendChild(r),
        this.is_embed ? (r.href = this.http_protocol + "://www.xvideos.com" + this.video_url,
        r.target = "_blank",
        r.innerHTML = this.i18n.__("player.more_on_site", {
            "%site%": "XVideos.com"
        })) : (r.href = this.url_low,
        r.innerHTML = this.i18n.__("player.view_low_qual")),
        this.url_high.length > 0) {
            this.lowquallink.style.width = "50%",
            this.lowquallink.style["float"] = "left",
            this.highquallink = this.createElt("div", "play-link"),
            this.playlinks.appendChild(this.highquallink),
            this.highquallink.style.width = "50%",
            this.highquallink.style["float"] = "right";
            var s = document.createElement("a");
            s.style.display = "block",
            s.style.textAlign = "center",
            s.style.border = "2px solid #333",
            s.style.margin = "2px",
            s.style.background = "#aaa",
            s.style.fontWeight = "bold",
            s.style.lineHeight = "1.5",
            this.highquallink.appendChild(s),
            s.href = this.url_high,
            s.innerHTML = this.i18n.__("player.view_high_qual");
            var o = document.createElement("div");
            o.style.clear = "both",
            this.playlinks.appendChild(o)
        }
        if (this.display_inplayersquare) {
            var a = document.getElementById("player");
            a && (a.style.width = "100%"),
            this.advertdivcontainer = document.createElement("div"),
            this.advertdivcontainer.style.position = "absolute",
            this.advertdivcontainer.style.height = "235px",
            this.advertdivcontainer.style.width = "338px",
            this.advertdivcontainer.style.border = "4px solid #000",
            this.advertdivcontainer.style.padding = "4px",
            this.advertdivcontainer.style.backgroundColor = "#FFF",
            this.advertdivcontainer.style.zIndex = "100",
            this.advertdiv = document.createElement("div"),
            this.advertdiv.style.position = "absolute",
            this.advertdiv.style.top = "4px",
            this.advertdiv.style.left = "4px",
            this.advertdiv.style.bottom = "4px",
            this.advertdiv.style.right = "4px",
            this.advertdivcontainer.appendChild(this.advertdiv),
            this.advertclickdiv = document.createElement("div"),
            this.advertclickdiv.style.position = "absolute";
            var n = "10%";
            this.ads_active_fithteenpercentborder && (n = "15%"),
            this.advertclickdiv.style.top = n,
            this.advertclickdiv.style.left = n,
            this.advertclickdiv.style.bottom = n,
            this.advertclickdiv.style.right = n,
            this.advertclickdiv.style.visibility = "hidden",
            this.advertdivcontainer.appendChild(this.advertclickdiv),
            this.advertclosebut = document.createElement("img"),
            this.advertclosebut.src = this.static_path + "img/player/icon-close.png",
            this.advertclosebut.title = this.unescape(this.i18n.__("player.close_ad")),
            this.advertclosebut.style.position = "absolute",
            this.advertclosebut.style.width = "65px",
            this.advertclosebut.style.height = "65px",
            this.advertclosebut.style.top = "-4px",
            this.advertdivcontainer.appendChild(this.advertclosebut),
            this.advertdoubleclick = document.createElement("img"),
            this.advertdoubleclick.src = this.static_path + "img/player/sda-doubleclickad.png",
            this.advertdoubleclick.style.position = "absolute",
            this.advertdoubleclick.style.top = "0px",
            this.advertdoubleclick.style.left = "0px",
            this.advertdoubleclick.style.bottom = "0px",
            this.advertdoubleclick.style.right = "0px",
            this.advertdoubleclick.style.width = "100%",
            this.advertdoubleclick.style.height = "100%",
            this.advertdoubleclick.style.visibility = "hidden",
            this.advertdivcontainer.appendChild(this.advertdoubleclick),
            "undefined" != typeof this.advertclickdiv.addEventListener ? (this.advertclosebut.addEventListener("click", function(t) {
                console.log("Close ad 1"),
                e.closeFakePlayerAd()
            }, !1),
            this.advertclickdiv.addEventListener("click", function(t) {
                e.fakeplayerAdvertClick(t, !1)
            }, !1),
            this.advertdiv.addEventListener("click", function(t) {
                e.fakeplayerAdvertClick(t, !0)
            }, !1),
            this.advertdoubleclick.addEventListener("click", function(t) {
                e.fakeplayerAdvertClick(t, !0)
            }, !1)) : (this.advertclosebut.onclick = function() {
                e.closeFakePlayerAd()
            }
            ,
            this.advertdoubleclick.onclick = function(t) {
                e.fakeplayerAdvertClick(t, !0)
            }
            ),
            this.video_div.appendChild(this.advertdivcontainer),
            this.redrawFakePlayer()
        } else
            this.closeFakePlayerAd();
        this.send_debug_event("fakeplayerloaded"),
        xv.console.log("Fake player drawed", "Player")
    },
    redrawFakePlayer: function() {
        this.global_div.style.height = Math.round(this.video_div.offsetWidth / 1.7777 + 40) + "px";
        var e = this.video_div.offsetHeight;
        this.video_div.offsetWidth < e && (e = this.video_div.offsetWidth),
        e || (e = 300);
        var t = e / 400;
        if (this.lowquallink.style.fontSize = Math.floor(30 * t) + "px",
        "undefined" != typeof this.highquallink && (this.highquallink.style.fontSize = Math.floor(30 * t) + "px"),
        this.videopicture.style.width = Math.floor(this.video_div.offsetWidth) + "px",
        this.videopicture.style.height = Math.floor(this.video_div.offsetWidth / 1.7777) + "px",
        "undefined" != typeof this.videoplayer && (this.videoplayer.style.width = Math.floor(this.video_div.offsetWidth) + "px",
        this.videoplayer.style.height = Math.round(this.video_div.offsetWidth / 1.7777) + "px",
        this.videoplayer.style.marginBottom = "10px"),
        this.playbt.style.width = Math.floor(150 * t) + "px",
        this.playbt.style.height = Math.floor(150 * t) + "px",
        this.playbt.style.top = Math.floor(this.videopicture.offsetHeight / 2 - 75 * t) + "px",
        this.playbt.style.left = Math.floor(this.video_div.offsetWidth / 2 - 75 * t) + "px",
        this.display_inplayersquare && (this.advertclosebut.style.height = Math.floor(85 * t) + "px",
        this.advertclosebut.style.width = Math.floor(85 * t) + "px",
        this.advertclosebut.style.right = "-" + Math.floor(this.advertclosebut.offsetWidth + 35 * t) + "px",
        this.advertdivcontainer.style.height = Math.floor(235 * t * 1.2 + 4) + "px",
        this.advertdivcontainer.style.width = Math.floor(338 * t * 1.2 + 4) + "px",
        this.advertdivcontainer.style.top = Math.floor(45 * t) + "px",
        this.advertdivcontainer.style.left = Math.floor(this.video_div.offsetWidth / 2 - this.advertdivcontainer.offsetWidth / 2 - this.advertclosebut.offsetWidth / 2 - 25 * t) + "px",
        "undefined" != typeof this.advertdiv.getElementsByTagName))
            for (var i = this.advertdiv.getElementsByTagName("img"), r = 0; r < i.length; r++)
                i[r].style.width = "100%",
                i[r].style.height = "100%"
    },
    fakeplayerAdvertClick: function(e, t) {
        if ("undefined" == typeof this.adlink)
            return void console.log("Ad: No link found");
        if (!this.adsquare_picture_loaded)
            return void console.log("Ad picture not loaded");
        var i = this;
        if ((t || this.need_doubleclick_ad) && "hidden" === this.advertdoubleclick.style.visibility)
            return this.advertdoubleclick.style.visibility = "visible",
            setTimeout(function() {
                i.advertdoubleclick.style.visibility = "hidden",
                i.doubleclick_debug("dbclicktimeout", !1)
            }, 3e3),
            void this.doubleclick_debug("firstdbclick", e);
        window.open(this.adlink, "_blank"),
        this.closeFakePlayerAd(),
        t || this.need_doubleclick_ad ? this.doubleclick_debug("secdbclick", e) : this.doubleclick_debug("firstclick", e)
    },
    closeFakePlayerAd: function() {
        var e = this.url_low;
        this.url_high.length > 0 && (e = this.url_high),
        this.globallink.href = e,
        this.advertdivcontainer && (this.advertdivcontainer.style.visibility = "hidden",
        this.advertdiv.style.visibility = "hidden",
        this.advertclosebut.style.visibility = "hidden",
        this.advertdoubleclick.style.visibility = "hidden"),
        this.playlinks.style.visibility = "visible",
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || /Symbian.3. Series60.5.[3-5]/.test(navigator.userAgent) || /UCBrowser/.test(navigator.userAgent) || this.is_smarttv) && (this.videoplayer = document.createElement("video"),
        this.videoplayer.controls = "controls",
        this.videoplayer.style.width = "100%",
        this.videoplayer.style.backgroundColor = "#000",
        this.videoplayer.src = this.globallink.href,
        this.videoplayer.poster = this.url_thumb,
        this.is_smarttv && (this.videoplayer.autoplay = "true"),
        this.video_div.replaceChild(this.videoplayer, this.globallink),
        this.hideElt(this.globallink)),
        this.redrawFakePlayer()
    },
    draw: function() {
        var e = this;
        if (this.send_debug_event("loaded"),
        this.load_start = (new Date).getTime(),
        this.global_div.innerHTML = "",
        this.global_div.className = "embed-responsive",
        this.desktop_view && (this.global_div.className += " desktop"),
        this.video_div = this.createElt("div", "embed-responsive-item", "hlsplayer"),
        this.global_div.appendChild(this.video_div),
        this.setupEvents(),
        this.drawVideoDiv(),
        this.use_browser_controls ? (this.drawBrowserControlsButtons(),
        this.drawSubscribeButton(),
        this.uploader_name && (this.appendToVideoDiv(this.subscribebarbt),
        this.subscribebarbt.style.position = "absolute",
        this.subscribebarbt.style.left = "0",
        this.subscribebarbt.style.bottom = "0")) : (this.drawFastForward(),
        this.drawProgressBarBg(),
        this.drawButtonsBars(),
        this.drawProgressBar()),
        this.drawBigButtons(),
        this.use_parameter_menu || this.drawQualityButtons(),
        this.is_embed && this.drawEmbedElements(),
        this.display_inplayersquare ? this.drawAdvertisement() : this.closeAd(),
        this.displaySponsorlink(),
        this.redraw(),
        console.log("Video initial draw done"),
        this.use_hls ? xv.console.log("HTML5 Player drawed with Hls.js : " + this.url_hls, "Player") : this.use_native_hls ? xv.console.log("HTML5 Player drawed with native Hls : " + this.url_hls, "Player") : xv.console.log("HTML5 Player drawed with MP4 support : " + this.url_high, "Player"),
        this.send_device_speed) {
            var t = (new Date).getTime() - this.load_start;
            this.send_debug_event("devicespeed", t),
            xv.console.log("HTML5 Player device speed " + t + "ms", "Player")
        }
        if (this.desktop_view) {
            if ("undefined" == typeof window.xv || "undefined" == typeof window.xv.conf || "undefined" == typeof window.xv.conf.dyn || "boolean" != typeof window.xv.conf.dyn.premium || !window.xv.conf.dyn.premium) {
                !function() {
                    if (!e.is_premium_site) {
                        var t = navigator.userAgent.match(/(chrome|crios)\/(\d+)\./i);
                        if (t && t[2] >= 64)
                            return void console.log("Chrome >= 64 do not display popunder");
                        if (!(window.xv.conf.dyn.spu || window.xv.conf.dyn.pjs && window[xv.conf.dyn.pjs] || e.block_popup)) {
                            if (e.is_embed && !window.jQuery) {
                                var i = document.createElement("script");
                                i.type = "text/javascript",
                                i.async = !0,
                                i.src = e.static_path + "js/libs/jquery-1.7.2.min.js";
                                var r = document.getElementsByTagName("body")[0];
                                r.parentNode.insertBefore(i, r)
                            }
                            deferUntiljQuery && deferUntiljQuery(loadPopup)
                        }
                    }
                }()
            }
        } else {
            var i = document.getElementById("video-sponsor-links");
            i && this.hideElt(i),
            "object" == typeof xv && "object" == typeof xv.conf && (xv.conf.data.hide_sponsors = !0)
        }
        return this.storageAvailable() ? (console.log("Storage available"),
        window.addEventListener("beforeunload", function(t) {
            e.saveForDurationReport()
        }),
        setInterval(function() {
            e.saveForDurationReport()
        }, 2e3),
        setInterval(this.sendPendingDuration, 1e4),
        setTimeout(this.sendPendingDuration, 1e3 * (Math.floor(2 * Math.random()) + 2))) : console.log("Storage not available"),
        this.video
    },
    saveForDurationReport: function() {
        if (this.video.duration) {
            var e = "videoreport_" + this.id_video
              , t = localStorage.getItem(e);
            try {
                if (JSON.parse(t).sended)
                    return
            } catch (a) {}
            var r = new Object;
            if (r.video_id = this.id_video,
            r.cdn_id = this.id_cdn,
            (this.use_hls || this.use_native_hls) && (r.cdn_id = this.id_cdn_hls),
            r.duration = this.total_video_played,
            r.referer = this.page_referer,
            r.transfer = this.total_video_transfer,
            this.use_native_hls ? r.type = "nativehls" : this.use_hls ? r.type = "hls" : r.type = "html5",
            this.use_hls && (r.quality = this.hlsobj.currentLevel + 1),
            r.buffer_sec = 0,
            this.video) {
                for (i = 0; i < this.video.buffered.length; i++) {
                    var s = this.video.buffered.start(i)
                      , o = this.video.buffered.end(i);
                    r.buffer_sec += o - s
                }
                r.buffer_sec > this.video.duration && (r.buffer_sec = this.video.duration),
                r.duration > this.video.duration && (r.duration = this.video.duration)
            }
            r.lasthit = (new Date).getTime(),
            localStorage.setItem(e, JSON.stringify(r))
        }
    },
    setupEvents: function() {
        var e = this;
        window.addEventListener("resize", function() {
            e.redraw()
        });
        var t = 0
          , i = 0;
        this.interval_updated = setInterval(function() {
            if (e.detectPlaying(),
            e.use_hls && e.hlsobj)
                if (e.isBuffering && "100%" === e.loaderpictxt.innerHTML)
                    if (e.bufferBlocked_lastvalue) {
                        if ((new Date).getTime() - e.bufferBlocked_timestamp > 2500) {
                            var r = "Video obj: ";
                            e.canPlay ? r += "canPlay " : r += "not canPlay ",
                            r += ", currentTime " + e.video.currentTime,
                            e.video.seeking ? r += ", seeking " : r += ", not seeking ",
                            e.video.paused ? r += ", paused " : r += ", not paused ",
                            r += ", networkState = " + e.video.networkState,
                            r += ", readyState = " + e.video.readyState,
                            e.bufferBlocked_nbtime++,
                            e.bufferBlocked_lastvalue = !1,
                            console.log(r),
                            console.log("Buffer blocked detected " + ((new Date).getTime() - e.bufferBlocked_timestamp) + " old (" + e.bufferBlocked_nbtime + " times)"),
                            xv.console.log("Buffer blocked detected", "Player"),
                            2 === e.bufferBlocked_nbtime && e.send_debug_event("buffer_blocked")
                        }
                    } else
                        e.bufferBlocked_lastvalue = e.loaderpictxt.innerHTML,
                        e.bufferBlocked_timestamp = (new Date).getTime(),
                        console.log("Buffering " + e.loaderpictxt.innerHTML + " detected");
                else
                    e.bufferBlocked_lastvalue = !1;
            e.video_div.offsetWidth === t && e.video_div.offsetHeight === i || (t = e.video_div.offsetWidth,
            i = e.video_div.offsetHeight,
            e.redraw())
        }, 100),
        this.video_event = function(t) {
            if (console.log("this.video_event", t),
            e.showad && (e.closeAd(),
            e.redraw()),
            e.desktop_view) {
                if (e.playClicked && !e.video.ended)
                    if (e.video.paused)
                        e.play();
                    else if (e.pause(),
                    e.is_embed && e.playClicked)
                        return void window.open(e.https_protocol + "://www.xvideos.com" + e.video_url, "_blank");
                e.showInfos()
            } else if (e.allow_showInfos) {
                if (e.hideInfos(),
                e.is_embed && e.playClicked)
                    return e.pause(),
                    void window.open(e.https_protocol + "://www.xvideos.com" + e.video_url, "_blank")
            } else
                t && e.showPause(),
                e.showInfos(!1)
        }
        ,
        this.video_event_click = function(t) {
            console.log("video_event_click(event) ", t);
            var i = -1;
            if ("boolean" == typeof t.target.paused) {
                i = 0;
                var r = t.offsetY;
                e.video_div.offsetHeight > 0 && (i = r / e.video_div.offsetHeight)
            }
            console.log("video_event_click Click percent", i);
            var s = !1;
            if (e.desktop_view) {
                if (i > .85)
                    return
            } else
                i < .75 && (s = !0);
            e.video_event(s)
        }
        ;
        var r = 0;
        this.video_div.addEventListener("touchstart", function(t) {
            e.is_ios || e.is_ios_desktop_mode || (console.log('this.video_div.addEventListener("touchstart", '),
            r = (new Date).getTime(),
            setTimeout(function() {
                r && (console.log("No click event, generate video event"),
                e.video_event(!0))
            }, 200))
        }),
        this.video_div.addEventListener("click", function(t) {
            r = 0,
            e.video_event_click(t)
        }),
        this.desktop_view && !this.is_ios_desktop_mode && (this.video_div.addEventListener("mouseover", function(t) {
            e.cursoroverplayer = !0
        }),
        this.video_div.addEventListener("mouseleave", function(t) {
            e.cursoroverplayer = !1
        }),
        this.video_div.addEventListener("mousemove", function(t) {
            e.video_div.style.cursor = "auto",
            e.showInfos()
        }),
        this.video_div.addEventListener("dblclick", function(t) {
            var i = t.offsetY;
            e.video_div.offsetHeight > 0 && i / e.video_div.offsetHeight > .85 || e.fullscreen()
        }),
        window.addEventListener("keydown", function(t) {
            if (!e.is_smarttv && e.cursoroverplayer && t.target == document.body) {
                if (t.altKey || t.ctrlKey || t.shiftKey)
                    return;
                if (32 != t.keyCode && 75 != t.keyCode || (t.preventDefault(),
                e.playClicked && (e.video.paused ? e.play() : e.pause())),
                38 == t.keyCode) {
                    if (t.preventDefault(),
                    1 == e.video.volume)
                        return !1;
                    var i = e.video.volume + .1;
                    i > 1 && (i = 1),
                    e.setVolume(i),
                    e.showsoundcontrol = !0,
                    e.cursorOverProgressBar(),
                    e.cursorLeaveProgressBar(),
                    e.showInfos()
                }
                if (40 == t.keyCode) {
                    if (t.preventDefault(),
                    0 == e.video.volume)
                        return !1;
                    var i = e.video.volume - .1;
                    i < 0 && (i = 0),
                    e.setVolume(i),
                    e.showsoundcontrol = !0,
                    e.cursorOverProgressBar(),
                    e.cursorLeaveProgressBar(),
                    e.showInfos()
                }
                if (37 == t.keyCode || 81 == t.keyCode || 65 == t.keyCode) {
                    if (t.preventDefault(),
                    !e.canPlay)
                        return !1;
                    e.seek(e.video.currentTime - 10),
                    e.showInfos()
                }
                if (39 == t.keyCode || 68 == t.keyCode) {
                    if (t.preventDefault(),
                    !e.canPlay)
                        return !1;
                    e.seek(e.video.currentTime + 10),
                    e.showInfos()
                }
                return 70 == t.keyCode && (t.preventDefault(),
                e.fullscreen()),
                !1
            }
        }))
    },
    drawVideoDiv: function() {
        var e = this;
        this.video = document.createElement("video"),
        this.video.preload = "auto",
        /firefox/.test(navigator.userAgent.toLowerCase()) && (this.video.preload = "metadata"),
        this.use_browser_controls ? this.is_ios ? (this.hideVideoControls(),
        this.video.setAttribute("playsinline", "")) : this.video.controls = "controls" : this.is_ios && !this.is_old_ios && (this.hideVideoControls(),
        this.video.setAttribute("playsinline", ""));
        var t = this.createElt("div", "video-bg-pic");
        if (t.appendChild(this.video),
        !this.use_browser_controls) {
            this.video_click_handler = this.createElt("div", "video-click-handler"),
            t.appendChild(this.video_click_handler),
            window.__onGCastApiAvailable = function(t, i) {
                if (t) {
                    if (chrome.cast.isAvailable) {
                        var r = function() {
                            console.log("ChromeCast: sessionListener")
                        }
                          , s = function(t) {
                            console.log("ChromeCast: receiverListener", t),
                            e.loadPreference(),
                            t === chrome.cast.ReceiverAvailability.AVAILABLE ? (e.chromecastdetected = !0,
                            e.use_hls || e.hideElt(e.video_click_handler)) : (e.chromecastdetected = !1,
                            e.showElt(e.video_click_handler)),
                            e.savePreference(),
                            e.updateBtVisibity(),
                            e.redraw()
                        }
                          , o = function() {
                            console.log("ChromeCast: onInitSuccess")
                        }
                          , a = function() {
                            console.log("ChromeCast: onError")
                        }
                          , n = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID)
                          , l = new chrome.cast.ApiConfig(n,r,s);
                        chrome.cast.initialize(l, o, a)
                    }
                } else
                    console.log("Google Chrome Cast loading error")
            }
            ;
            var i = document.createElement("script");
            i.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js",
            i.async = !0,
            this.global_div.appendChild(i)
        }
        this.picture_div = this.createElt("div", "video-pic");
        var r = document.createElement("img");
        this.url_thumb169 ? r.src = this.url_thumb169 : r.src = this.url_thumb,
        this.picture_div.appendChild(r),
        t.appendChild(this.picture_div),
        this.video_div.appendChild(t),
        this.topleftdiv = this.createElt("div", "top-left"),
        this.video_div.appendChild(this.topleftdiv);
        var s = "";
        this.is_premium_video && ("default" === xv.conf.sitename ? s = '<span class="icon-f icf-ticket-red icf-white-fill prefix"></span> ' : "xnxx" === xv.conf.sitename && (s = '<span class="gold-plate prefix">GOLD</span> ')),
        this.videotitlediv = this.createElt("p", "video-title", "", s + this.video_title),
        this.topleftdiv.appendChild(this.videotitlediv)
    },
    drawProgressBarBg: function() {
        var e = this;
        this.progressbarbg = this.createElt("div", "progress-bar-bg"),
        this.video_div.appendChild(this.progressbarbg),
        this.progressbarbg.addEventListener("click", function(e) {
            console.log("Progress Bar Click"),
            e.stopPropagation()
        }),
        this.desktop_view && (this.progressbarbg.addEventListener("mouseenter", function() {
            e.cursorOverProgressBar()
        }),
        this.progressbarbg.addEventListener("mouseleave", function() {
            e.cursorLeaveProgressBar()
        })),
        this.progressbarbg.addEventListener("dblclick", function(e) {
            console.log("Progress bar dblclick"),
            e.stopPropagation()
        })
    },
    drawProgressBar: function() {
        var e = this;
        if (this.progressbarcontainer = this.createElt("div", "progress-bar-container"),
        this.appendToVideoDiv(this.progressbarcontainer),
        this.progressbar = this.createElt("div", "progress-bar"),
        this.progressbar.addEventListener("dblclick", function(e) {
            e.stopPropagation()
        }),
        this.progressbarcontainer.appendChild(this.progressbar),
        this.progressbarcontainer.addEventListener("click", function(t) {
            if (console.log("progressbar seeking click"),
            t.stopPropagation(),
            e.touchseek_block_click)
                return void console.log("Seek click blocked");
            var i = e.compute_seekpercent(t)
              , r = e.video.duration * i;
            e.chromecastmedia && (r = e.chromecastmedia.media.duration * i),
            i < .01 && r < 4 && (r = 0),
            e.seek(r)
        }, !1),
        this.desktop_view && (this.progressbarcontainer.addEventListener("mouseenter", function() {
            e.cursorOverProgressBar()
        }),
        this.progressbarcontainer.addEventListener("mouseleave", function() {
            e.cursorLeaveProgressBar()
        })),
        this.progressbarcontainer.addEventListener("dblclick", function(e) {
            console.log("Progress bar dblclick"),
            e.stopPropagation()
        }),
        this.progressbarbufferdiv = this.createElt("div", "bufferdiv"),
        this.desktop_view && this.progressbarbufferdiv.addEventListener("dblclick", function(e) {
            console.log("progressbarbufferdiv dblclick"),
            e.stopPropagation()
        }),
        this.progressbar.appendChild(this.progressbarbufferdiv),
        this.desktop_view ? this.progressbarcursor = this.createElt("div", "cursor") : (this.progressbarcursor = this.createElt("div", "roundcursor"),
        this.progressbarcursor.style.backgroundColor = this.seek_bar_color,
        this.progressbarcursor.style.borderColor = this.seek_bar_color),
        this.progressbar.appendChild(this.progressbarcursor),
        this.desktop_view || (this.progressbartext = this.createElt("div", "progress-text-mobile noselect"),
        this.progressbarcontainer.appendChild(this.progressbartext)),
        this.allow_touchseek) {
            if (this.computeThumbSlideType(),
            console.log("Thumb Slide : " + this.thumb_slide_type),
            this.progressbarseekcursor = this.createElt("div", "seek-cursor"),
            this.hideElt(this.progressbarseekcursor),
            this.progressbar.appendChild(this.progressbarseekcursor),
            this.progressbarseekthumb = this.createElt("div", "seek-thumb"),
            this.progressbarseekcursor.appendChild(this.progressbarseekthumb),
            this.thumb_slide_type == HTML5Player.TYPE_FULL) {
                this.progressbarseekthumb.style.backgroundImage = "url('" + this.thumb_slide_big + "')";
                var t = new Image;
                t.onerror = function() {
                    console.log("Thumb slide full don't seems to be available"),
                    e.thumb_slide_type = HTML5Player.TYPE_SMALL,
                    e.progressbarseekthumb.style.background = "url('" + e.thumb_slide + "')"
                }
                ,
                t.src = this.thumb_slide_big
            } else
                this.thumb_slide_type == HTML5Player.TYPE_MINUTE ? this.progressbarseekthumb.style.backgroundImage = "url('" + this.thumb_slide_min + "0.jpg')" : this.progressbarseekthumb.style.backgroundImage = "url('" + this.thumb_slide + "')";
            if (this.desktop_view && this.progressbarseekthumb.addEventListener("mousemove", function(t) {
                if (t && t.target && "function" == typeof t.target.getBoundingClientRect && "seek-thumb" === t.target.className) {
                    var i = t.target.getBoundingClientRect();
                    if (!i)
                        return void console.log("Unable to get rect");
                    if (!i.left || !i.top)
                        return void console.log("Unable to get rect (2)");
                    return Math.round(100 / t.target.offsetHeight * (e.touch_getPositionY(t) - i.top)) < 20 ? (e.touchSeekHide(),
                    void t.stopPropagation()) : void 0
                }
            }),
            this.progressbarseekcursortext = this.createElt("div", "seek-text", "", "00:00"),
            this.progressbarseekthumb.appendChild(this.progressbarseekcursortext),
            this.desktop_view) {
                this.progressbarseekfakecursordesktop = this.createElt("div", "fake-cursor-desktop-container");
                var i = this.createElt("div", "fake-cursor-desktop");
                this.progressbarseekfakecursordesktop.appendChild(i),
                this.hideElt(this.progressbarseekfakecursordesktop),
                this.progressbar.appendChild(this.progressbarseekfakecursordesktop)
            } else {
                var r = this.createElt("div", "hide-cursor");
                this.progressbarseekcursor.appendChild(r)
            }
            ("ontouchstart"in window || navigator.msMaxTouchPoints) && (console.log("is a touch screen"),
            this.progressbarcontainer.addEventListener("touchstart", function(t) {
                e.touchseek_last_positions = [],
                e.forcenopreviewimg || (console.log("touchstart"),
                e.showElt(e.progressbarseekcursor),
                e.desktop_view && e.showElt(e.progressbarseekfakecursordesktop),
                e.touchSeekShow(t))
            }, !1),
            this.progressbarcontainer.addEventListener("touchend", function(t) {
                console.log("touchend");
                var i = -1;
                if (-1 !== e.lastTouchSeekPosition && (i = e.lastTouchSeekPosition,
                console.log("self.lastTouchSeekPosition", e.lastTouchSeekPosition)),
                e.touchseek_last_positions.length > 1 && (i = e.touchseek_last_positions[e.touchseek_last_positions.length - 2],
                console.log("self.touchseek_last_positions", i)),
                -1 !== i) {
                    var r = e.video.duration * i;
                    e.chromecastmedia && (r = e.chromecastmedia.media.duration * i),
                    i < .01 && r < 4 && (r = 0),
                    console.log("Seek End " + r),
                    e.touchseek_block_click = !0,
                    setTimeout(function() {
                        e.touchseek_block_click = !1
                    }, 500),
                    e.seek(r)
                }
                e.touchSeekHide()
            }, !1),
            this.progressbarcontainer.addEventListener("touchcancel", function(t) {
                console.log("touchcancel"),
                e.touchSeekHide()
            }, !1),
            this.progressbarcontainer.addEventListener("touchleave", function(t) {
                console.log("touchleave"),
                e.touchSeekHide()
            }, !1),
            this.progressbarcontainer.addEventListener("touchmove", function(t) {
                e.touchSeekShow(t)
            }, !0)),
            this.desktop_view && (this.progressbarcontainer.addEventListener("mouseenter", function() {
                e.cursorOverProgressBar()
            }),
            this.progressbarcontainer.addEventListener("mouseleave", function() {
                e.cursorLeaveProgressBar()
            }),
            this.progressbarcontainer.addEventListener("mouseover", function(t) {
                e.forcenopreviewimg || (e.showElt(e.progressbarseekcursor),
                e.desktop_view && e.showElt(e.progressbarseekfakecursordesktop),
                e.touchSeekShow(t))
            }, !0),
            this.progressbarcontainer.addEventListener("mousemove", function(t) {
                e.forcenopreviewimg || (e.showElt(e.progressbarseekcursor),
                e.desktop_view && e.showElt(e.progressbarseekfakecursordesktop),
                e.touchSeekShow(t))
            }, !1),
            this.progressbarcontainer.addEventListener("mouseleave", function(t) {
                e.touchSeekHide()
            }, !0)),
            this.desktop_view && (this.progressbardetectcursor = this.createElt("div", "pgbar-cursor-detect"),
            this.progressbar.appendChild(this.progressbardetectcursor))
        }
    },
    drawFastForward: function() {
        if (this.desktop_view)
            return void console.log("FastForward : Do not display because is desktop view");
        console.log("FastForward : DRAWING");
        var e = this;
        this.fastforward_left = this.createElt("div", "fastforward-left"),
        this.fastforward_left.appendChild(this.createElt("span", "icon-f icf-angle-double-left")),
        this.fastforward_left_txt = this.createElt("div", "fastforward-txt"),
        this.fastforward_left.appendChild(this.fastforward_left_txt),
        this.appendToVideoDiv(this.fastforward_left);
        var t = function(t) {
            e.removeClass(e.fastforward_left, "content-visible"),
            window.clearTimeout(t.timer),
            window.clearTimeout(t.timer2),
            t.timer = window.setTimeout(function() {
                console.log("Fastbackward timeout done"),
                t.activate_fastforward = !1,
                t.current_fastforward = 0,
                e.removeClass(e.fastforward_left, "content-visible")
            }, 1e3),
            e.video.currentTime < 10 || (t.current_fastforward += 10,
            e.fastforward_left_txt.innerHTML = t.current_fastforward + " sec",
            e.seek(e.video.currentTime - 10),
            t.timer2 = window.setTimeout(function() {
                e.addClass(e.fastforward_left, "content-visible")
            }, 50))
        };
        this.fastforward_left.addEventListener("dblclick", function(i) {
            if (!e.video.duration)
                return void console.log("Fastforward : no video duration");
            this.activate_fastforward || (this.activate_fastforward = !0,
            this.current_fastforward = 0),
            i.stopPropagation(),
            t(this)
        }),
        this.fastforward_left.addEventListener("click", function(e) {
            this.activate_fastforward && (e.stopPropagation(),
            t(this))
        }),
        this.fastforward_right = this.createElt("div", "fastforward-right"),
        this.fastforward_right.appendChild(this.createElt("span", "icon-f icf-angle-double-right")),
        this.fastforward_right_txt = this.createElt("div", "fastforward-txt"),
        this.fastforward_right.appendChild(this.fastforward_right_txt),
        this.appendToVideoDiv(this.fastforward_right);
        var i = function(t) {
            e.removeClass(e.fastforward_right, "content-visible"),
            window.clearTimeout(t.timer),
            window.clearTimeout(t.timer2),
            t.timer = window.setTimeout(function() {
                console.log("Fastfoward timeout done"),
                t.activate_fastforward = !1,
                t.current_fastforward = 0,
                e.removeClass(e.fastforward_right, "content-visible")
            }, 1e3),
            e.video.currentTime + 10 > e.video.duration || (t.current_fastforward += 10,
            e.fastforward_right_txt.innerHTML = t.current_fastforward + " sec",
            e.seek(e.video.currentTime + 10),
            t.timer2 = window.setTimeout(function() {
                e.addClass(e.fastforward_right, "content-visible")
            }, 50))
        };
        this.fastforward_right.addEventListener("dblclick", function(t) {
            if (!e.video.duration)
                return void console.log("Fastforward : no video duration");
            this.activate_fastforward || (this.activate_fastforward = !0,
            this.current_fastforward = 0),
            t.stopPropagation(),
            i(this)
        }),
        this.fastforward_right.addEventListener("click", function(e) {
            this.activate_fastforward && (e.stopPropagation(),
            i(this))
        })
    },
    drawAdvertisement: function() {
        var e = this;
        this.advertdivcontainer = this.createElt("div", "sdabox"),
        this.video_div.appendChild(this.advertdivcontainer),
        this.advertdiv = this.createElt("div", "sdacontainer"),
        this.advertdivcontainer.appendChild(this.advertdiv),
        this.advertclosebut = this.createImgBtn("icon-close.svg", "player.close_ad"),
        this.advertclosebut.className = "dlg-close-btn",
        this.advertclosebut.addEventListener("click", function(t) {
            console.log("Close Ad"),
            t.stopPropagation(),
            e.closeAd(),
            e.redraw()
        }, !1),
        this.advertdivcontainer.appendChild(this.advertclosebut);
        var t = "sda10pc";
        this.ads_active_fithteenpercentborder && (t = "sda15pc"),
        this.advertclickdiv = this.createElt("div", "sdaclick " + t),
        this.hideElt(this.advertclickdiv),
        this.advertdivcontainer.appendChild(this.advertclickdiv),
        this.advertdoubleclick = this.createElt("img", "sdadblclick"),
        this.advertdoubleclick.src = this.static_path + "img/player/sda-doubleclickad.png",
        this.hideElt(this.advertdoubleclick),
        this.advertdivcontainer.appendChild(this.advertdoubleclick),
        this.advertdiv.addEventListener("click", function(t) {
            console.log("Advert div click"),
            t.stopPropagation(),
            e.advertClick(t, !0)
        }),
        this.advertdiv.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }),
        this.advertclickdiv.addEventListener("click", function(t) {
            t.stopPropagation(),
            console.log("this.advertdiv.addEventListener(" + t.type),
            e.advertClick(t, !1)
        }, !1),
        this.advertclickdiv.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }, !1),
        this.advertdoubleclick.addEventListener("touchstart", function(t) {
            t.stopPropagation(),
            console.log("this.advertdoubleclick.addEventListener(" + t.type),
            e.doubleclick_ad_allowclick = !0,
            setTimeout(function() {
                e.doubleclick_ad_allowclick = !1
            }, 500)
        }, !1),
        this.advertdoubleclick.addEventListener("click", function(t) {
            console.log("this.advertdoubleclick.click(" + t.type),
            t.stopPropagation(),
            e.advertClick(t, !0)
        }, !1)
    },
    drawBigButtons: function() {
        var e = this;
        this.bigbuttons = this.createElt("div", "big-buttons"),
        this.appendToVideoDiv(this.bigbuttons),
        this.bigbuttons_sub = this.createElt("div", "big-buttons-sub"),
        this.plprevbt = this.createElt("div", "big-button pl-btn"),
        this.plprevbt.style.visibility = "hidden",
        this.bigbuttons.appendChild(this.plprevbt),
        this.plprevbt.addEventListener("click", function(t) {
            console.log("Playlist Backward Butt click"),
            t.stopPropagation(),
            e.playlist && e.playlist.prev && (e.write_cookie("html5_plfullscreen", e.isFullScreen ? "1" : "0"),
            window.location.href = e.playlist.prev.uri)
        }, !1),
        this.plprevbtimg = this.createImgBtn("icon-step-backward.svg", "player.previous_pl_video", {
            "%name%": ""
        }),
        this.plprevbt.appendChild(this.plprevbtimg),
        this.playbt = this.createElt("div", "big-button play"),
        this.bigbuttons.appendChild(this.playbt),
        this.playbt.addEventListener("click", function(t) {
            console.log("Play click addEventListener"),
            t.stopPropagation(),
            !e.playClicked && e.use_hls && e.forcenoautobuffer && e.hlsobj.startLoad(),
            !e.playClicked && e.desktop_view && (e.cursorOverProgressBar(),
            e.cursorLeaveProgressBar(),
            e.redraw()),
            e.playClicked && e.showPause(),
            e.playClicked = !0,
            e.addClass(e.video_div, "play-clicked"),
            e.displayVideosAds() || (e.use_browser_controls && e.showVideoControls(),
            e.play(),
            e.force_play_fullscreen && e.fullscreen(),
            e.updateBtVisibity(),
            e.redraw(),
            e.desktop_view && "function" == typeof window.openpop && window.openpop())
        }),
        this.playbtimg = this.createImgBtn("icon-play.svg", "player.play"),
        this.playbt.appendChild(this.playbtimg),
        this.playbt.appendChild(this.createElt("br")),
        this.playbttxt = this.createElt("span"),
        this.playbttxt.innerHTML = this.i18n.__("player.play"),
        this.hideElt(this.playbttxt),
        this.desktop_view || (this.pausebt = this.createElt("div", "big-button pause"),
        this.bigbuttons.appendChild(this.pausebt),
        this.pausebt.addEventListener("click", function(t) {
            console.log("Pause click addEventListener"),
            t.stopPropagation(),
            e.pause()
        }),
        this.pausebtimg = this.createImgBtn("icon-pause.svg", "player.pause"),
        this.pausebt.appendChild(this.pausebtimg),
        this.use_browser_controls && (this.replaybt = this.createElt("div", "big-button replay"),
        this.bigbuttons.appendChild(this.replaybt),
        this.replaybt.addEventListener("click", function(t) {
            console.log("Replay click addEventListener"),
            t.stopPropagation(),
            e.replay()
        }),
        this.replaybtimg = this.createImgBtn("icon-repeat.svg", "player.replay"),
        this.replaybt.appendChild(this.replaybtimg))),
        this.is_ios || this.is_ipad || this.use_browser_controls || (this.chromecastbt = this.createElt("div", "big-button"),
        this.topleftdiv.insertBefore(this.chromecastbt, this.videotitlediv),
        this.chromecastbt.addEventListener("click", function(t) {
            console.log("Chromecast click addEventListener"),
            t.stopPropagation(),
            e.chromecastVideo()
        }),
        this.chromecastbtimg = this.createImgBtn("icon-chromecast.svg", "player.chromecast"),
        this.chromecastbt.appendChild(this.chromecastbtimg),
        this.chromecastbt.appendChild(this.createElt("br")),
        this.chromecastbttxt = this.createElt("span"),
        this.chromecastbttxt.innerHTML = this.i18n.__("player.chromecast"),
        this.chromecastbt.appendChild(this.chromecastbttxt)),
        this.plnextbt = this.createElt("div", "big-button pl-btn"),
        this.plnextbt.style.visibility = "hidden",
        this.bigbuttons.appendChild(this.plnextbt),
        this.plnextbt.addEventListener("click", function(t) {
            console.log("Playlist Forward Butt click"),
            t.stopPropagation(),
            e.playlist && e.playlist.next && (e.write_cookie("html5_plfullscreen", e.isFullScreen ? "1" : "0"),
            window.location.href = e.playlist.next.uri)
        }, !1),
        this.plnextbt.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }),
        this.plnextbtimg = this.createImgBtn("icon-step-forward.svg", "player.next_pl_video", {
            "%name%": ""
        }),
        this.plnextbt.appendChild(this.plnextbtimg),
        this.bigbuttons.appendChild(this.bigbuttons_sub),
        this.loaderpic = this.createElt("div", "video-loader"),
        this.video_div.appendChild(this.loaderpic),
        this.loaderpicbuffer = this.createElt("div", "buffer"),
        this.loaderpic.appendChild(this.loaderpicbuffer),
        this.loaderpictxt = this.createElt("div", "label", this.i18n.__("player.buffering")),
        this.loaderpic.appendChild(this.loaderpictxt)
    },
    setupButtonBarEvents: function(e, t, i) {
        if (this.desktop_view) {
            var r = this;
            t && (e.addEventListener("mouseenter", function() {
                r.cursorOverProgressBar()
            }),
            e.addEventListener("mouseleave", function() {
                r.cursorLeaveProgressBar()
            })),
            i && e.addEventListener("dblclick", function(e) {
                e.stopPropagation()
            })
        }
    },
    drawButtonsBars: function() {
        var e = this;
        if (this.leftbuttonsbar = this.createElt("div", "buttons-bar left"),
        this.leftbuttonsbar.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }),
        this.leftbuttonsbar.addEventListener("click", function(e) {
            e.stopPropagation()
        }),
        this.appendToVideoDiv(this.leftbuttonsbar),
        this.replaybarbt = this.createImgBtn("icon-repeat.svg", "player.replay"),
        this.replaybarbt.addEventListener("click", function(t) {
            console.log("Replay click addEventListener"),
            t.stopPropagation(),
            e.replay(),
            e.bIsPlNextAllowed = !0
        }),
        this.leftbuttonsbar.appendChild(this.replaybarbt),
        this.playbarbt = this.createImgBtn("icon-play.svg", "player.play"),
        this.playbarbt.addEventListener("click", function(t) {
            console.log("Small Play Butt click"),
            t.stopPropagation(),
            !e.playClicked && e.use_hls && e.forcenoautobuffer && e.hlsobj.startLoad(),
            e.playClicked = !0,
            e.addClass(e.video_div, "play-clicked"),
            e.showPause(),
            e.displayVideosAds() || (e.use_browser_controls && e.showVideoControls(),
            e.play(),
            e.desktop_view && "function" == typeof window.openpop && window.openpop())
        }, !1),
        this.setupButtonBarEvents(this.playbarbt, !0),
        this.leftbuttonsbar.appendChild(this.playbarbt),
        this.pausebarbt = this.createImgBtn("icon-pause.svg", "player.pause"),
        this.pausebarbt.addEventListener("click", function(t) {
            console.log("Small Pause Btt click"),
            t.stopPropagation(),
            e.pause()
        }, !1),
        this.setupButtonBarEvents(this.pausebarbt, !0),
        this.leftbuttonsbar.appendChild(this.pausebarbt),
        this.soundonbarbt = this.createImgBtn("icon-volume-full.svg", "player.mute"),
        this.soundonbarbt.addEventListener("click", function(t) {
            console.log("Sound on click addEventListener"),
            t.stopPropagation(),
            e.mute(),
            e.showInfos(!1),
            e.updateBtVisibity()
        }),
        this.setupButtonBarEvents(this.soundonbarbt, !1, !0),
        this.leftbuttonsbar.appendChild(this.soundonbarbt),
        this.soundoffbarbt = this.createImgBtn("icon-volume-mute-bold.svg", "player.unmute"),
        this.soundoffbarbt.addEventListener("click", function(t) {
            console.log("Sound off click addEventListener"),
            t.stopPropagation(),
            e.unmute(),
            e.showInfos(!1),
            e.updateBtVisibity()
        }),
        this.setupButtonBarEvents(this.soundoffbarbt, !1, !0),
        this.leftbuttonsbar.appendChild(this.soundoffbarbt),
        this.desktop_view && !this.is_ios_desktop_mode && (this.soundvolglobal = this.createElt("div", "volume-bar"),
        this.soundvolglobal.style.backgroundImage = "url('" + this.static_path + "img/player/volume-bar-empty.svg')",
        this.soundvolglobal.addEventListener("click", function(t) {
            console.log("Sound vol global click"),
            t.stopPropagation();
            var i = e.touch_getPosition(t)
              , r = this.getBoundingClientRect();
            i -= r ? r.left : this.offsetLeft;
            var s = i / this.offsetWidth * 100;
            s > 90 ? s = 100 : s < 10 && (s = 0),
            e.setVolume(s / 100)
        }),
        this.soundvolglobalvolume = this.createElt("div", "volume-bar-fill"),
        this.soundvolglobalvolume.style.backgroundImage = "url('" + this.static_path + "img/player/volume-bar.svg')",
        this.setupButtonBarEvents(this.soundvolglobal, !1, !0),
        this.soundvolglobal.appendChild(this.soundvolglobalvolume),
        this.leftbuttonsbar.appendChild(this.soundvolglobal)),
        this.desktop_view && (this.progressbartext = this.createElt("div", "progress-text noselect"),
        this.progressbartext.addEventListener("click", function(e) {
            console.log("Progress bar text click"),
            e.stopPropagation()
        }),
        this.setupButtonBarEvents(this.progressbartext, !1, !0),
        this.leftbuttonsbar.appendChild(this.progressbartext)),
        this.desktop_view && (this.plprevbarbt = this.createImgBtn("icon-step-backward.svg", "player.previous_pl_video", {
            "%name%": ""
        }),
        this.plprevbarbt.addEventListener("click", function(t) {
            console.log("Small Playlist Backward Butt click"),
            t.stopPropagation(),
            e.playlist && e.playlist.prev && (e.write_cookie("html5_plfullscreen", e.isFullScreen ? "1" : "0"),
            window.location.href = e.playlist.prev.uri)
        }, !1),
        this.setupButtonBarEvents(this.plprevbarbt, !0),
        this.leftbuttonsbar.appendChild(this.plprevbarbt),
        this.plnextbarbt = this.createImgBtn("icon-step-forward.svg", "player.next_pl_video", {
            "%name%": ""
        }),
        this.plnextbarbt.addEventListener("click", function(t) {
            console.log("Small Playlist Forward Butt click"),
            t.stopPropagation(),
            e.playlist && e.playlist.next && (e.write_cookie("html5_plfullscreen", e.isFullScreen ? "1" : "0"),
            window.location.href = e.playlist.next.uri)
        }, !1),
        this.setupButtonBarEvents(this.plnextbarbt, !0),
        this.leftbuttonsbar.appendChild(this.plnextbarbt)),
        this.drawSubscribeButton(),
        this.uploader_name && this.leftbuttonsbar.appendChild(this.subscribebarbt),
        this.rightbuttonsbar = this.createElt("div", "buttons-bar right"),
        this.appendToVideoDiv(this.rightbuttonsbar),
        this.use_parameter_menu) {
            this.paramsbarbt = this.createElt("div", "settings-btn"),
            this.rightbuttonsbar.appendChild(this.paramsbarbt);
            var t = this.createImgBtn("player-gear.svg", "player.settings");
            this.paramsbarbt.appendChild(t),
            this.parameterbthd = this.createElt("span", "video-hd-mark", "", "HD"),
            this.paramsbarbt.appendChild(this.parameterbthd),
            this.paramsbarbt.addEventListener("click", function(t) {
                console.log("parametersbt click"),
                t.stopPropagation(),
                e.showparametersmenu = !e.showparametersmenu,
                e.showparametersmenu || (e.showqualitiesmenu = !1,
                e.showadvancedmenu = !1,
                e.showspeedmenu = !1),
                e.showInfos(!0)
            }, !1),
            this.setupButtonBarEvents(this.paramsbarbt, !0, !0),
            this.drawParameters()
        }
        this.downloadbarbt = this.createImgBtn("icon-download.svg", "download.title"),
        this.downloadbarbt.addEventListener("click", function(t) {
            console.log("Download bar btt click"),
            t.stopPropagation(),
            e.pause(),
            e.is_embed ? window.open(e.http_protocol + "://www.xvideos.com" + e.video_url, "_blank") : window.xv && window.xvideos.player && window.xvideos.player.openDownload && window.xvideos.player.openDownload()
        }, !1),
        this.setupButtonBarEvents(this.downloadbarbt, !0),
        this.rightbuttonsbar.appendChild(this.downloadbarbt),
        this.desktop_view && (this.is_premium_site && (this.loadPreference(),
        this.forceExpanded && this.toggleExpand()),
        this.expandbarbt = this.createImgBtn("icon-screen-expand.svg", "player.double_player_size"),
        this.expandbarbt.addEventListener("click", function(t) {
            t.stopPropagation(),
            console.log("Expand click addEventListener"),
            e.toggleExpand()
        }, !1),
        this.setupButtonBarEvents(this.expandbarbt, !0),
        this.rightbuttonsbar.appendChild(this.expandbarbt)),
        this.fullscreenbarbt = this.createImgBtn("icon-screen-fullscreen.svg", "player.fullscreen"),
        this.fullscreenbarbt.addEventListener("click", function(t) {
            console.log("Fullscreen click addEventListener"),
            t.stopPropagation(),
            e.fullscreen()
        }),
        this.setupButtonBarEvents(this.fullscreenbarbt, !0),
        this.rightbuttonsbar.appendChild(this.fullscreenbarbt)
    },
    drawSubscribeButton: function() {
        if (this.uploader_name) {
            var e = this;
            this.subscribebarbt = this.createElt("div", "subscribe");
            var t = document.createElement("a");
            t.className = "video-subscribe",
            t.style.paddingRight = "2px";
            var i = document.createElement("span");
            i.className = "sub-btn",
            i.style.padding = "0px";
            var r = document.createElement("img");
            r.src = this.static_path + "img/skins/default/feed.png",
            r.style.height = "9px",
            r.style.margin = "2px",
            i.appendChild(r);
            var s = document.createElement("span");
            s.className = "label",
            s.innerHTML = this.i18n.__("player.subscribe"),
            s.style.verticalAlign = "middle",
            t.appendChild(i),
            t.appendChild(s),
            this.subscribebarbt.appendChild(t),
            this.subscribebarbt.updateLabel = function() {
                if (!e.is_embed && e.uploader_name) {
                    var t = createRequestObject();
                    t.open("POST", "/profiles/" + e.uploader_name + "/followers/check", !0),
                    t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    t.onreadystatechange = function() {
                        if (4 === t.readyState && 200 === t.status) {
                            try {
                                var i = JSON.parse(t.responseText)
                            } catch (a) {
                                return void console.error(a)
                            }
                            if (i.result && i.is_logged && !i.is_owner && !i.is_follower) {
                                var r = i.csrf || ""
                                  , o = !1;
                                e.subscribebarbt.addEventListener("click", function(t) {
                                    if (t.stopPropagation(),
                                    !o) {
                                        o = !0,
                                        console.log("subscribebarbt click"),
                                        s.innerHTML = e.unescape(e.i18n.__("player.in_progress"));
                                        var i = createRequestObject();
                                        i.open("POST", "/profiles/" + e.uploader_name + "/followers/subscribe", !0),
                                        i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                                        i.onreadystatechange = function() {
                                            if (4 === i.readyState && 200 === i.status) {
                                                try {
                                                    var r = JSON.parse(i.responseText)
                                                } catch (t) {
                                                    return console.error(t),
                                                    s.innerHTML = e.unescape(e.i18n.__("player.error_please_retry")),
                                                    void (o = !1)
                                                }
                                                if (r.result)
                                                    return void (s.innerHTML = e.unescape(e.i18n.__("player.subscribed")) + ' <a href="/my-subs/videos">' + e.unescape(e.i18n.__("player.view_activities")) + "</a>");
                                                s.innerHTML = e.unescape(e.i18n.__("player.error_please_retry")),
                                                o = !1,
                                                r.message && window.alert(r.message)
                                            }
                                        }
                                        ,
                                        i.send("csrf=" + r)
                                    }
                                }),
                                e.showsubscribebt = !0,
                                e.updateBtVisibity()
                            }
                        }
                    }
                    ,
                    t.send()
                }
            }
            ,
            this.subscribebarbt.addEventListener("dblclick", function(e) {
                e.stopPropagation()
            })
        }
    },
    drawParameters: function() {
        var e = this;
        this.parametersmenu = this.createElt("ul", "settings-menu noselect"),
        this.hideElt(this.parametersmenu),
        this.appendToVideoDiv(this.parametersmenu),
        this.parametersmenu.addEventListener("click", function(t) {
            console.log("parametersmenu click"),
            t.stopPropagation(),
            e.showInfos(!0)
        }),
        this.parametersmenu.addEventListener("dblclick", function(e) {
            e.stopPropagation()
        }),
        this.setupButtonBarEvents(this.parametersmenu, !0),
        this.paramscheckboxes = [],
        this.addParameterElement(this.parametersmenu, -1, "loop", this.i18n.__("player.loop"), !0, function(e) {}, function(t) {
            console.log("Loop click click"),
            t.isChecked ? (t.setChecked(!1),
            e.video.loop = !1,
            e.video.duration > 0 && e.video.duration <= 90 && e.setForceNoLoop(!0)) : (t.setChecked(!0),
            e.video.loop = "true",
            e.setForceNoLoop(!1)),
            e.savePreference()
        }, function(t) {
            e.loopbtn = t,
            "undefined" != typeof e.video.duration && e.video.duration > 0 && e.video.duration <= 90 && (t.setChecked(!0),
            e.video.loop = "true")
        }),
        e.desktop_view && this.addParameterElement(this.parametersmenu, -1, "chromecast", this.i18n.__("player.chromecast"), !1, function(t) {
            e.chromecastdetected && chrome.cast ? t.show() : t.hide()
        }, function(t) {
            e.chromecastVideo()
        }, function(e) {}),
        e.advancedmenu = e.createElt("ul", "settings-menu secondary-menu noselect"),
        e.hideElt(e.advancedmenu),
        e.appendToVideoDiv(e.advancedmenu),
        e.advancedmenu.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.showInfos(!0)
        }),
        e.advancedmenu.addEventListener("dblclick", function(e) {
            e.stopPropagation()
        }),
        e.setupButtonBarEvents(e.advancedmenu, !0),
        e.addParameterElement(e.parametersmenu, -1, "advanced", e.i18n.__("player.advanced"), !1, function(t) {
            e.showadvancedmenu ? t.styleSetForced() : t.styleSetNeutral()
        }, function(t) {
            console.log("Click on speed button"),
            e.showadvancedmenu = !e.showadvancedmenu,
            e.showqualitiesmenu = !1,
            e.showspeedmenu = !1,
            e.updateBtVisibity(),
            e.redrawParamers(),
            e.redraw()
        }, function(e) {
            e.styleSetNeutral()
        }),
        e.speedmenu = e.createElt("ul", "settings-menu secondary-menu noselect"),
        e.hideElt(e.speedmenu),
        e.appendToVideoDiv(e.speedmenu),
        e.speedmenu.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.showInfos(!0)
        }),
        e.speedmenu.addEventListener("dblclick", function(e) {
            e.stopPropagation()
        }),
        e.setupButtonBarEvents(e.speedmenu, !0),
        e.addParameterElement(e.parametersmenu, 0, "speed", e.i18n.__("player.speed") + ": " + e.speed.toFixed(1) + " X", !1, function(t) {
            t.setTitle(e.i18n.__("player.speed") + ": " + e.speed.toFixed(1) + " X"),
            e.showspeedmenu ? t.styleSetForced() : t.styleSetNeutral()
        }, function(t) {
            console.log("Click on speed button"),
            e.showspeedmenu = !e.showspeedmenu,
            e.showqualitiesmenu = !1,
            e.showadvancedmenu = !1,
            e.updateBtVisibity(),
            e.redrawParamers(),
            e.redraw()
        }, function(e) {
            e.styleSetNeutral()
        });
        for (var t = [.5, .8, 1, 1.5, 2], i = 0; i < t.length; i++)
            e.addParameterElement(e.speedmenu, -1, "speed" + i, t[i].toFixed(1) + " X", !1, function(t) {
                e.speed === t.speed ? t.styleSetForced() : t.styleSetNeutral()
            }, function(t) {
                console.log("Click on speed " + t.speed),
                e.speed = t.speed,
                e.video.playbackRate = t.speed,
                e.redrawParamers()
            }, function(r) {
                r.speed = t[i],
                e.speed === r.speed ? r.styleSetForced() : r.styleSetNeutral()
            });
        this.use_hls ? this.addParameterElement(this.advancedmenu, -1, "autobuffer", this.i18n.__("player.auto_buffer"), !0, function(e) {}, function(t) {
            console.log("Auto buffer click"),
            e.loadPreference(),
            t.isChecked ? (t.setChecked(!1),
            e.forcenoautobuffer = !0) : (t.setChecked(!0),
            e.forcenoautobuffer = !1),
            e.savePreference()
        }, function(t) {
            e.forcenoautobuffer ? console.log("Init no auto buffer") : t.setChecked(!0)
        }) : !this.use_native_hls && this.url_high && this.url_low && (this.addParameterElement(this.parametersmenu, -1, "quality_hq", "360p", !1, function(t) {
            e.force_lq ? t.styleSetNeutral() : t.styleSetForced()
        }, function(t) {
            console.log("360p quality click"),
            e.setHQ(),
            e.redraw()
        }, function(t) {
            e.force_lq ? t.styleSetNeutral() : t.styleSetForced()
        }),
        this.addParameterElement(this.parametersmenu, -1, "quality_lq", "250p", !1, function(t) {
            e.force_lq ? t.styleSetForced() : t.styleSetNeutral()
        }, function(t) {
            console.log("250p quality redraw click"),
            e.setLQ(),
            e.redraw()
        }, function(t) {
            e.force_lq ? t.styleSetForced() : t.styleSetNeutral()
        })),
        this.desktop_view || this.addParameterElement(this.parametersmenu, -1, "externalplayer", this.i18n.__("player.external_player"), !1, function(e) {}, function(t) {
            console.log("External player click"),
            e.is_embed ? window.open(e.http_protocol + "://www.xvideos.com" + e.video_url, "_blank") : e.streamVideo()
        }, function(e) {}),
        this.support_native_hls && this.support_hlsjs && (this.use_hls || this.use_native_hls) && this.addParameterElement(this.advancedmenu, -1, "buildinplayer", this.i18n.__("player.builtin_player"), !0, function(e) {}, function(t) {
            console.log("Buildin player click"),
            e.loadPreference(),
            t.isChecked ? (t.setChecked(!1),
            e.forcenativehls = !1) : (t.setChecked(!0),
            e.forcenativehls = !0),
            e.savePreference(),
            alert("You need to reload the page to see the change")
        }, function(t) {
            e.forcenativehls && (console.log("Init force native HLS"),
            t.setChecked(!0))
        }),
        this.addParameterElement(this.advancedmenu, -1, "ratio", this.i18n.__("player.ratio_auto"), !1, function(t) {
            var i = e.video_div.offsetWidth / e.video_div.offsetHeight;
            if (e.videoRatio = e.video.videoWidth / e.video.videoHeight,
            -1 === e.videoRatio || -1 === t.ratio)
                e.video.style.transform = "scaleX(1)";
            else {
                var r = t.ratio / e.videoRatio
                  , s = 1;
                i < 1 && (s = 1 / r),
                e.video.style.transform = "scale(" + r * s + "," + 1 * s + ")"
            }
        }, function(t) {
            -1 !== e.videoRatio && e.videoRatio !== NaN && (-1 === t.ratio ? (t.ratio = 1.3333,
            t.setTitle("4/3")) : 1.3333 === t.ratio ? (t.ratio = 1.7777,
            t.setTitle("16/9")) : 1.7777 === t.ratio ? (t.ratio = .5625,
            t.setTitle(e.i18n.__("player.vertical"))) : (t.setTitle(e.i18n.__("player.ratio_auto")),
            t.ratio = -1),
            e.redrawParamers())
        }, function(e) {
            e.ratio = -1
        }),
        this.allow_touchseek && this.addParameterElement(this.advancedmenu, -1, "previewimg", this.i18n.__("player.preview_img"), !0, function(e) {}, function(t) {
            console.log("Buildin preview img"),
            e.loadPreference(),
            t.isChecked ? (t.setChecked(!1),
            e.forcenopreviewimg = !0) : (t.setChecked(!0),
            e.forcenopreviewimg = !1),
            e.savePreference()
        }, function(t) {
            e.forcenopreviewimg ? console.log("Init no preview img") : t.setChecked(!0)
        })
    },
    addParameterElement: function(e, t, i, r, s, o, a, n) {
        var l = this
          , d = this.createElt("li", "setting", i);
        s && (d.checkbox = this.createElt("img", "setting-checkbox"),
        d.checkbox.src = this.static_path + "img/player/thick-0.svg",
        d.appendChild(d.checkbox),
        d.isChecked = !1,
        d.setChecked = function(e) {
            this.isChecked = e,
            this.checkbox.src = e ? l.static_path + "img/player/thick-1.svg" : l.static_path + "img/player/thick-0.svg"
        }
        ,
        this.paramscheckboxes.push(d.checkbox));
        var u = this.createElt("span", "", "", r);
        if (d.appendChild(u),
        d.styleSetActive = function() {
            this.className = "setting active"
        }
        ,
        d.styleSetNeutral = function() {
            this.className = "setting"
        }
        ,
        d.styleSetForced = function() {
            this.className = "setting forced"
        }
        ,
        d.setTitle = function(e) {
            u.innerHTML = e
        }
        ,
        d.addEventListener("click", function() {
            a(this)
        }),
        d.onRedraw = function() {
            o(this)
        }
        ,
        d.hide = function() {
            this.style.display = "none"
        }
        ,
        d.show = function() {
            this.style.display = ""
        }
        ,
        n(d),
        -1 === t)
            return void e.appendChild(d);
        var c = e.children;
        if (0 === c.length || t >= c.length)
            return void e.appendChild(d);
        e.insertBefore(d, c[t])
    },
    redrawParamers: function() {
        var e;
        if (this.qualitymenu) {
            e = this.qualitymenu.children;
            for (var t = 0; t < e.length; t++)
                e[t].onRedraw()
        }
        if (this.advancedmenu && this.showadvancedmenu) {
            e = this.advancedmenu.children;
            for (var t = 0; t < e.length; t++)
                e[t].onRedraw()
        }
        if (this.speedmenu && this.showspeedmenu) {
            e = this.speedmenu.children;
            for (var t = 0; t < e.length; t++)
                e[t].onRedraw()
        }
        e = this.parametersmenu.children;
        for (var t = 0; t < e.length; t++)
            e[t].onRedraw()
    },
    drawBrowserControlsButtons: function() {
        var e = this;
        this.browserctrlsdlbt = this.createImgBtn("icon-download.svg", "player.download_video"),
        this.browserctrlsdlbt.className = "browser-controls-dl-btn",
        this.video_div.appendChild(this.browserctrlsdlbt),
        this.browserctrlsdlbt.addEventListener("click", function(t) {
            console.log("Download click addEventListener"),
            t.stopPropagation(),
            window.xv && window.xvideos.player && window.xvideos.player.openDownload && (e.pause(),
            window.xvideos.player.openDownload())
        })
    },
    drawEmbedElements: function() {
        this.logoxvideos = this.createElt("div", "xv-logo"),
        this.desktop_view ? this.logoxvideos.style.width = "120px" : this.logoxvideos.style.width = "25%",
        this.appendToVideoDiv(this.logoxvideos);
        var e = document.createElement("a");
        e.href = this.http_protocol + "://www.xvideos.com" + this.video_url,
        e.target = "_blank",
        this.logoxvideos.appendChild(e);
        var t = document.createElement("img");
        t.src = this.static_path + "img/player/logo_xvideos.png",
        t.style.width = "100%",
        e.appendChild(t)
    },
    drawQualityButtons: function() {
        var e = this;
        this.lowqualitybt = this.createElt("div", "quality-btn quality-default", "", "250p"),
        this.video_div.appendChild(this.lowqualitybt),
        this.lowqualitybt.addEventListener("click", function(t) {
            console.log("LQ click addEventListener"),
            t.stopPropagation(),
            e.setLQ()
        }),
        this.highqualitybt = this.createElt("div", "quality-btn quality-default", "", "360p"),
        this.appendToVideoDiv(this.highqualitybt),
        this.highqualitybt.addEventListener("click", function(t) {
            console.log("HQ click addEventListener"),
            t.stopPropagation(),
            e.setHQ()
        })
    },
    displaySponsorlink: function() {
        if (this.sponsors && 0 !== this.sponsors.length && !this.sponsorpopup) {
            var e = this;
            this.sponsorpopup = this.createElt("div", "videoad-title videoad-title-invideo noselect"),
            this.setupButtonBarEvents(this.sponsorpopup, !0),
            this.appendToVideoDiv(this.sponsorpopup);
            var t = Math.floor(Math.random() * this.sponsors.length)
              , i = this.sponsors[t]
              , r = "<strong>" + i.name + "</strong>"
              , s = this.createElt("p", "", "", r);
            s.className = "videoad-title-txt",
            this.sponsorpopup.appendChild(s),
            this.sponsorpopup_icon = this.createImgBtn("icon-stream.svg", "Link"),
            this.sponsorpopup_icon.className = "videoad-title-icon",
            this.sponsorpopup.appendChild(this.sponsorpopup_icon),
            this.sponsorpopup.addEventListener("click", function(t) {
                window.open(i.link, "_blank"),
                console.log("Sponsor popup click : '" + i.link + "'"),
                e.pause(),
                t.stopPropagation()
            }, !1)
        }
    },
    displayLoadError: function() {
        if (this.errordlg)
            return this.presetShow("errordlg"),
            void this.video_div.appendChild(this.errordlg);
        var e = this;
        this.errordlg = this.createElt("div", "error-dialog"),
        this.appendToVideoDiv(this.errordlg);
        var t = this.createElt("div", "error-content");
        this.errordlg.appendChild(t);
        var i = this.createElt("p", "", "", "<b>" + this.i18n.__("player.loading_error") + "</b>");
        t.appendChild(i);
        var r = this.createElt("button", "", "", this.i18n.__("player.retry"));
        r.type = "button",
        t.appendChild(r),
        r.addEventListener("click", function(t) {
            console.log("Error button retry click addEventListener"),
            t.stopPropagation(),
            e.recoverError(!0)
        })
    },
    chromecastVideo: function() {
        if (!chrome.cast)
            return alert("Error: Chrome cast don't seems to be supported"),
            this.chromecastdetected = !1,
            this.updateBtVisibity(),
            void this.redraw();
        if (!this.url_hls)
            return void alert("Sorry. Chromecast is not available for this video");
        var e = this;
        chrome.cast.requestSession(function(t) {
            function i(t, i) {
                e.chromecastmedia = i,
                e.closeAd(),
                i.addUpdateListener(function() {
                    e.updateBtVisibity(),
                    e.redraw()
                }),
                e.chromecasttimer = setInterval(function() {
                    e.chromecastmedia.getStatus()
                }, 1e3),
                e.updateBtVisibity(),
                e.redraw()
            }
            e.chromecastsession = t;
            var r = new chrome.cast.media.MediaInfo(e.url_hls)
              , s = new chrome.cast.media.LoadRequest(r);
            e.chromecastsession.loadMedia(s, i.bind(this, "loadMedia"), function() {
                alert("Unable to start ChromeCast")
            })
        }, function(t) {
            console.log("Chrome Cast issue", t),
            e.chromecastmedia = !1,
            e.chromecastsession = !1,
            clearInterval(e.chromecasttimer),
            e.updateBtVisibity(),
            e.redraw()
        })
    },
    openMessageBox: function() {
        var e = this;
        if (this.messagediv)
            return void this.presetShow("messagediv");
        this.messagediv = this.createElt("div", "message-dialog"),
        this.appendToVideoDiv(this.messagediv),
        this.messagediv.addEventListener("click", function(e) {
            console.log("Message Div Click"),
            e.stopPropagation()
        }),
        this.messagetxtdiv = this.createElt("div", "message-content"),
        this.messagediv.appendChild(this.messagetxtdiv),
        this.messagedivclose = this.createImgBtn("icon-close.svg", "player.close"),
        this.messagedivclose.className = "dlg-close-btn",
        this.messagedivclose.addEventListener("click", function(t) {
            console.log("Close message"),
            e.showInfos(!1),
            e.showmessage = !1,
            e.updateBtVisibity(),
            e.redraw()
        }, !1),
        this.messagediv.appendChild(this.messagedivclose)
    },
    advertClick: function(e, t) {
        if ("undefined" == typeof this.adlink)
            return void console.log("Ad: No link found");
        if (!this.adsquare_picture_loaded)
            return void console.log("Ad picture not loaded");
        var i = this;
        if ((t || this.need_doubleclick_ad) && !this.showdoubleclick)
            return this.showdoubleclick = !0,
            setTimeout(function() {
                i.showdoubleclick = !1,
                i.updateBtVisibity(),
                i.doubleclick_debug("dbclicktimeout", !1)
            }, 3e3),
            this.updateBtVisibity(),
            void this.doubleclick_debug("firstdbclick", e);
        "click" === e.type && (this.need_doubleclick_ad && !this.doubleclick_ad_allowclick || (window.open(this.adlink, "_blank"),
        this.closeAd(),
        this.redraw(),
        t || this.need_doubleclick_ad ? this.doubleclick_debug("secdbclick", e) : this.doubleclick_debug("firstclick", e)))
    },
    touchSeekShow: function(e) {
        e.stopPropagation(),
        this.lastTouchSeekPosition = this.compute_seekpercent(e),
        this.touchseek_last_positions.length > 3 && (this.touchseek_last_positions = this.touchseek_last_positions.slice(1)),
        this.touchseek_last_positions.push(this.lastTouchSeekPosition);
        var t = this.lastTouchSeekPosition;
        if (t < 0 && (t = 0),
        t > 1 && (t = 1),
        this.desktop_view) {
            var i = this.progressbardetectcursor.offsetWidth * t - this.progressbarseekthumb.offsetWidth / 2;
            i < 0 && (i = 0),
            i > this.progressbardetectcursor.offsetWidth - this.progressbarseekthumb.offsetWidth && (i = this.progressbardetectcursor.offsetWidth - this.progressbarseekthumb.offsetWidth),
            this.progressbarseekcursor.style.left = i + "px",
            this.progressbarseekfakecursordesktop.style.left = this.progressbardetectcursor.offsetWidth * t - this.progressbarseekfakecursordesktop.offsetWidth / 2 + "px"
        } else
            this.progressbarseekcursor.style.left = this.progressbar.offsetWidth * t - this.progressbarseekthumb.offsetWidth / 2 + "px",
            this.progressbarcursor.style.left = this.progressbar.offsetWidth * t - this.progressbarcursor.offsetWidth / 2 + "px",
            this.progressbarcursor.touchseek = !0;
        this.progressbarseekcursortext.innerHTML = this.formatSeconds(this.video.duration * t);
        var r = Math.floor(30 * this.lastTouchSeekPosition + 1);
        r < 1 && (r = 1),
        r > 30 && (r = 30);
        var s = Math.floor((r - 1) / 6)
          , o = r - 1 - 6 * s
          , a = Math.floor(this.video.duration * this.lastTouchSeekPosition);
        if (this.is_premium_video && (a -= 4),
        a < 0 && (a = 0),
        this.thumb_slide_type == HTML5Player.TYPE_FULL) {
            var t = a / this.video.duration * 100;
            r = Math.floor(t + 1),
            r < 1 && (r = 1),
            r > 100 && (r = 100),
            s = Math.floor((r - 1) / 10),
            o = r - 1 - 10 * s
        } else if (this.thumb_slide_type == HTML5Player.TYPE_MINUTE) {
            var n = Math.floor(a / 60);
            this.progressbarseekthumb.style.backgroundImage = "url('" + this.thumb_slide_min + n + ".jpg')",
            n > 1 && this.preloadMozaiqueMinThumb(n - 1),
            a < this.video.duration - 60 && this.preloadMozaiqueMinThumb(n + 1);
            var r = Math.floor(a - 60 * n);
            s = Math.floor(r / 10),
            o = r - 10 * s
        }
        this.progressbarseekthumb.style.backgroundPosition = "-" + o * this.progressbarseekthumb.clientWidth + "px -" + s * this.progressbarseekthumb.clientHeight + "px",
        this.showInfos(!0)
    },
    touchSeekHide: function() {
        this.allow_touchseek && (this.hideElt(this.progressbarseekcursor),
        this.desktop_view && this.hideElt(this.progressbarseekfakecursordesktop),
        this.progressbarcursor.touchseek = !1,
        this.lastTouchSeekPosition = -1)
    },
    loadingAdError: function() {
        this.ad_loading_error = !0
    },
    setPlayerAd: function(e) {
        var t = this;
        if ("NOAD" === e)
            return void (this.is_fakeplayer_displayed ? this.closeFakePlayerAd() : (this.closeAd(),
            this.redraw()));
        if (this.display_inplayersquare && e.url && e.img) {
            if (!this.advertdiv)
                return void console.log("Fatal: No advert div found");
            this.adlink = e.url;
            var i = document.createElement("img");
            i.src = e.img,
            i.style.width = "100%",
            i.style.height = "100%",
            this.need_doubleclick_ad || (i.onload = function() {
                console.log("Ad loaded"),
                t.adsquare_picture_loaded = !0,
                t.showElt(t.advertclickdiv),
                t.advertclickdiv.style.visibility = ""
            }
            ),
            this.advertdiv.appendChild(i),
            this.is_fakeplayer_displayed || (this.showad = !0,
            this.updateBtVisibity(),
            this.redraw())
        }
    },
    setNoSquareAd: function() {
        window.xvideos.player.toggleSize(!0)
    },
    nbView_getNbView: function() {
        var e = xv.cookies.get("xv_nbview");
        return e ? parseInt(e) : 0
    },
    nbView_increment: function() {
        var e = this.nbView_getNbView();
        -1 != e && (e >= 5 || (e++,
        xv.cookies.setLocal("xv_nbview", e, 576e5, "/")))
    },
    nbView_setviewed: function() {
        xv.cookies.setLocal("xv_nbview", "-1", 576e5, "/")
    },
    displayVideosAds: function() {
        var e = this;
        if (!this.videoads_checked) {
            this.videoads_checked = !0,
            this.nbView_increment();
            var t = this.nbView_getNbView();
            if (-1 == t)
                return console.log("displayVideosAds: Video ads already displayed"),
                this.videoads = null,
                this.closeAd(),
                !1;
            if (t > 1 && t < 5)
                return console.log("displayVideosAds: Only first and 5th play (or more). Bypass videosads display"),
                this.videoads = null,
                this.closeAd(),
                !1;
            if (!this.videoads) {
                if (console.log("displayVideosAds: No videoads to display"),
                1 == t && this.videoads_miss) {
                    console.log("displayVideosAds: 2nd play and no ads. Missed");
                    var i = createRequestObject();
                    i.open("GET", this.videoads_miss, !0),
                    i.onreadystatechange = function() {
                        4 === i.readyState && i.status
                    }
                    ,
                    i.send()
                }
                return !1
            }
            return this.videoads.onFullscreen = function() {
                e.fullscreen()
            }
            ,
            (this.videoads.onClose = function() {
                e.video_div.removeChild(e.videoads_div),
                e.videoads = null,
                e.use_browser_controls && e.showVideoControls(),
                e.play()
            }
            ,
            this.video.muted || (console.log("VideoAds: Video not muted. Starting with sound"),
            this.videoads.startWithSound()),
            this.videoads_div = this.videoads.getAdDiv(),
            this.videoads_div) ? (this.video_div.appendChild(this.videoads_div),
            this.videoads.redraw(),
            console.log("displayVideosAds: Starting the video ad"),
            t > 4 && this.nbView_setviewed(),
            !0) : !1
        }
    },
    createDebugVideoAds: function() {
        this.closeAd(),
        this.videoads = new player.videoads("https://test.com/view/","https://test.com/stats/","https://media.trafficfactory.biz/banners/64/e7/be/2c6d115727eefef5fa0bc88cf371db60.mp4","http://www.google.com","Label","test.com"),
        this.videoads.setHttpProtocol(this.http_protocol),
        this.videoads.setStaticPath(this.static_path),
        this.videoads.setI18n(this.i18n),
        this.videoads.setDesktopView(this.desktop_view)
    },
    checkVideoAds: function() {
        var e = this;
        return this.use_browser_controls && !this.is_new_iphone ? void console.log("VideoAds not compatible with browser control") : this.is_fakeplayer_displayed || this.is_flashplayer_displayed ? void console.log("VideoAds not compatible with fake player") : -1 === this.nbView_getNbView() ? (console.log("checkVideoAds() Video ads already viewed"),
        this.block_popup = !0,
        void this.closeAd()) : void document.addEventListener("DOMContentLoaded", function() {
            if ("object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.ads)
                var t = 0
                  , i = setInterval(function() {
                    t++,
                    (xv.cookies.get("wpn_ad_cookie") || t > 10) && (clearInterval(i),
                    e.callForVideoAds(xv.conf.dyn.ads.tracker))
                }, 200)
        })
    },
    callForVideoAds: function(e) {
        var t = this;
        console.log("checkVideoAds() Trying to load videos ads");
        var i = xv.cookies.get("wpn_ad_cookie");
        i || (i = "");
        var r = "";
        "object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && "string" == typeof xv.conf.dyn.forcedcountry && xv.conf.dyn.forcedcountry.length > 0 && (r = xv.conf.dyn.forcedcountry);
        var s = "0";
        "number" != typeof xv.conf.dyn.ads.is_channel || 0 !== xv.conf.dyn.ads.is_channel && 1 !== xv.conf.dyn.ads.is_channel || (s = xv.conf.dyn.ads.is_channel.toFixed(0));
        var o = createRequestObject();
        o.open("GET", "https://rpc-php.trafficfactory.biz/videosadsselect/video-1/" + i + "/" + this.getPageCategories() + "/xvideos/" + e + "//" + r + "/" + encodeURIComponent(this.getPageTags()) + "/" + s + "/content.json?v=" + Math.random(), !0),
        o.withCredentials = !0,
        o.onreadystatechange = function() {
            if (4 === o.readyState) {
                if (200 !== o.status)
                    return void console.log("checkVideoAds() WPN Call failed");
                try {
                    var e = JSON.parse(o.responseText)
                } catch (s) {
                    return void console.log("Video Ads bac JSON")
                }
                if (e.tracker_id && xv.cookies.setLocal("wpn_ad_cookie", e.tracker_id, 6048e5, "/"),
                !t.playClicked)
                    if (e.banners) {
                        "undefined" != typeof e.miss[0] && (t.videoads_miss = e.miss[0]);
                        for (var i = 0; i < e.banners[0].length; i++) {
                            var r = e.banners[0][i];
                            if (t.block_popup = !0,
                            t.closeAd(),
                            t.videoads = new player.videoads(r.view_callback,r.stats_callback,r.banner,r.url,r.label,r.domain,r.instant_skip),
                            t.videoads.setHttpProtocol(t.http_protocol),
                            t.videoads.setStaticPath(t.static_path),
                            t.videoads.setI18n(t.i18n),
                            t.videoads.setDesktopView(t.desktop_view),
                            r.type && "vast" == r.type)
                                return t.videoads.setVideoUrl(!1),
                                void t.makeVastCall(r.vast_url);
                            return
                        }
                    } else
                        ;
            }
        }
        ;
        try {
            o.send()
        } catch (a) {
            return void console.log("checkVideoAds() WPN Call failed (2)")
        }
    },
    makeVastCall: function(e) {
        var t = this
          , i = createRequestObject();
        i.open("GET", e, !0),
        i.withCredentials = !0,
        i.onreadystatechange = function() {
            if (4 === i.readyState) {
                if (200 !== i.status)
                    return console.log("checkVideoAds() VAST Call failed (" + i.status + ")"),
                    t.videoads.makeErrorCallBack(100, "Url " + e + " call failed : " + i.status),
                    void (t.videoads = !1);
                console.log("VAST Call done");
                try {
                    var r = !0
                      , s = i.responseXML
                      , o = s.getElementsByTagName("InLine");
                    if (void 0 === o || 1 !== o.length) {
                        if (void 0 === (o = s.getElementsByTagName("Wrapper")) || 1 !== o.length)
                            return console.log("Vast: Node InLine or Wrapper not found"),
                            t.videoads.makeErrorCallBack(101, "Vast XML Node InLine or Wrapper not found"),
                            void (t.videoads = !1);
                        r = !1
                    }
                    for (var a = o[0].children, n = 0; n < a.length; n++) {
                        var l = a[n];
                        if ("VASTAdTagURI" === l.nodeName && (console.log("VASTAdTagURI", l.textContent),
                        t.makeVastCall(l.textContent)),
                        "Impression" === l.nodeName && (console.log("Impression", l.textContent),
                        t.videoads.addVastViewCallback(l.textContent)),
                        "Error" === l.nodeName && (console.log("Error", l.textContent),
                        t.videoads.addVastErrorCallback(l.textContent)),
                        "Creatives" === l.nodeName) {
                            if (r) {
                                var d = l.getElementsByTagName("MediaFile");
                                if (0 === d.length)
                                    return console.log("VAST No media file to display"),
                                    t.videoads.makeErrorCallBack(101, "VAST No media file to display"),
                                    void (t.videoads = !1);
                                var u = Math.floor(Math.random() * d.length)
                                  , c = d[u].textContent;
                                console.log("Vast Video", u, "url", c),
                                c = t.videoads.setVideoUrl(c)
                            }
                            for (var h = l.getElementsByTagName("Tracking"), f = 0; f < h.length; f++) {
                                var p = h[f]
                                  , v = p.getAttribute("event");
                                if ("start" === v && (console.log("Vast event start", p.textContent),
                                t.videoads.addVastStartStatsCallback(p.textContent)),
                                "firstQuartile" === v && (console.log("Vast event firstQuartile", p.textContent),
                                t.videoads.addVastFirstQuartileStatsCallback(p.textContent)),
                                "midpoint" === v && (console.log("Vast event midpoint", p.textContent),
                                t.videoads.addVastMidpointStatsCallback(p.textContent)),
                                "thirdQuartile" === v && (console.log("Vast event thirdQuartile", p.textContent),
                                t.videoads.addVastThirdQuartileStatsCallback(p.textContent)),
                                "complete" === v && (console.log("Vast event complete", p.textContent),
                                t.videoads.addVastCompleteStatsCallback(p.textContent)),
                                "pause" === v && (console.log("Vast event pause", p.textContent),
                                t.videoads.addVastPauseStatsCallback(p.textContent)),
                                "fullscreen" === v && (console.log("Vast event fullscreen", p.textContent),
                                t.videoads.addVastFullScreenStatsCallback(p.textContent)),
                                "mute" === v && (console.log("Vast event mute", p.textContent),
                                t.videoads.addVastMuteStatsCallback(p.textContent)),
                                "skip" === v && (console.log("Vast event skip", p.textContent),
                                t.videoads.addVastSkipStatsCallback(p.textContent)),
                                "progress" === v) {
                                    var g = p.getAttribute("offset");
                                    console.log("Vast event progress", g, "-", p.textContent),
                                    t.videoads.addVastProgressCallback(p.textContent, g)
                                }
                            }
                            if (r) {
                                var m = l.getElementsByTagName("ClickThrough");
                                if (0 === m.length)
                                    return console.log("VAST No click url"),
                                    t.videoads.makeErrorCallBack(101, "VAST No click url"),
                                    void (t.videoads = !1);
                                var u = Math.floor(Math.random() * m.length);
                                console.log("Vast click", u, "url", m[u].textContent),
                                t.videoads.setVastClickUrl(m[u].textContent);
                                var y = l.getElementsByTagName("IconClickThrough");
                                if (y.length) {
                                    var u = Math.floor(Math.random() * y.length);
                                    console.log("Vast iconClickThrough", u, "url", y[u].textContent),
                                    t.videoads.setTitle(y[u].textContent)
                                }
                            }
                            for (var b = l.getElementsByTagName("ClickTracking"), f = 0; f < b.length; f++) {
                                var _ = b[f];
                                console.log("Vast event click", _.textContent),
                                t.videoads.addVastClickTrackingCallback(_.textContent)
                            }
                        }
                    }
                    return
                } catch (E) {
                    return t.videoads.makeErrorCallBack(100, "VAST Parsing failed : " + E.message),
                    t.videoads = !1,
                    void console.log("VAST ERROR", E)
                }
            }
        }
        ;
        try {
            i.send()
        } catch (r) {
            return console.log("checkVideoAds() VAST Call failed (2)"),
            void t.videoads.makeErrorCallBack(100, "VAST Call failed : " + r.message)
        }
    },
    xmlGetNodes: function(e, t) {
        var r = []
          , s = e.childNodes;
        for (i = 0; i < s.length; i++)
            s[i].nodeName == t && r.push(s[i]);
        return 0 != r.length && r
    },
    initHls: function() {
        if ("" === this.url_hls)
            return this.use_hls = !1,
            !1;
        var e = this;
        console.log("Init HLS"),
        this.use_hls = !0;
        var t = 25e6;
        this.desktop_view && (t = 5e7);
        var i = !0;
        this.forcenoautobuffer && (i = !1);
        var r = {
            debug: !1,
            autoStartLoad: i,
            capLevelToPlayerSize: !1,
            maxBufferLength: 30,
            maxMaxBufferLength: 30,
            maxBufferSize: t,
            maxBufferHole: .3,
            maxSeekHole: 3,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 10,
            enableWorker: !0,
            enableSoftwareAES: !0,
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 3,
            manifestLoadingRetryDelay: 500,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 3,
            levelLoadingRetryDelay: 500,
            fragLoadingTimeOut: 3e4,
            fragLoadingMaxRetry: 3,
            fragLoadingRetryDelay: 500,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: .2,
            appendErrorMaxRetry: 3,
            abrBandWidthFactor: .6,
            abrBandWidthUpFactor: .5
        };
        return this.hlsobj && this.hlsobj.destroy(),
        this.hlsobj = new Hls(r),
        this.hlsobj.attachMedia(this.video),
        this.hlsobj.on(Hls.Events.MEDIA_ATTACHED, function() {
            console.log("Hls.Events.MEDIA_ATTACHED")
        }),
        this.hlsobj.on(Hls.Events.MEDIA_DETACHED, function() {
            console.log("Hls.Events.MEDIA_DETACHED")
        }),
        this.hlsobj.on(Hls.Events.FRAG_PARSING_INIT_SEGMENT, function(t, i) {
            console.log("Hls.Events.FRAG_PARSING_INIT_SEGMENT " + t + " id = " + i.id + " level = " + i.level),
            e.redrawParamers()
        }),
        this.hlsobj.on(Hls.Events.FRAG_PARSING_METADATA, function(e, t) {
            console.log("Hls.Events.FRAG_PARSING_METADATA", e, t)
        }),
        this.hlsobj.on(Hls.Events.LEVEL_SWITCH, function(t, i) {
            console.log("Hls.Events.LEVEL_SWITCH", t, i.level),
            e.redrawParamers()
        }),
        this.hlsobj.on(Hls.Events.MANIFEST_LOADING, function(e, t) {
            console.log("Hls.Events.MANIFEST_LOADING", e, t.url)
        }),
        this.hlsobj.on(Hls.Events.MANIFEST_LOADED, function(t, i) {
            if (console.log("Hls.Events.MANIFEST_LOADED " + t + " nb levels " + e.hlsobj.levels.length),
            !this.hlsLevelAutoForced) {
                this.hlsLevelAutoForced = !0;
                var r = e.getLocalStorage("forcequality");
                if (!1 !== r)
                    return r >= e.hlsobj.levels.length && (r = e.hlsobj.levels.length - 1),
                    e.hlsobj.startLevel = r,
                    e.hlsobj.nextLevel = r,
                    e.hlsobj.recoverMediaError(),
                    void e.redrawParamers();
                if (!e.desktop_view) {
                    var s = 2;
                    e.hlsobj.levels.length < 3 && (s = e.hlsobj.levels.length - 1),
                    e.hlsobj.autoLevelCapping = s
                }
                var o = 0
                  , a = e.get_networkspeed();
                if (a) {
                    for (var n = 0; n < e.hlsobj.levels.length; n++)
                        1.8 * e.hlsobj.levels[n].bitrate / 1e3 < a && (o = n);
                    console.log("Best level", o, "for speed", a, "Kb/s"),
                    xv.console.log("Hls.Events.LEVEL_LOADED Best level " + o + " for speed " + a + " Kb/s", "Player")
                } else
                    o = 1,
                    console.log("No network speed history, using", o);
                e.hlsobj.startLevel = o,
                e.hlsobj.nextLoadLevel = o,
                e.hlsobj.currentLevel = o,
                e.hlsobj.currentLevel = -1,
                e.hlsobj.recoverMediaError()
            }
            e.redrawParamers()
        }),
        this.hlsobj.on(Hls.Events.MANIFEST_PARSED, function(t, i) {
            if (console.log("Hls.Events.MANIFEST_PARSED", t, i),
            "undefined" == typeof i.levels)
                return void console.log("Hls levels do not exist");
            if (!e.hlsjsLevelParsed) {
                e.hlsjsLevelParsed = !0,
                e.qualitymenu = e.createElt("ul", "settings-menu secondary-menu noselect"),
                e.hideElt(e.qualitymenu),
                e.appendToVideoDiv(e.qualitymenu),
                e.qualitymenu.addEventListener("click", function(t) {
                    t.stopPropagation(),
                    e.showInfos(!0)
                }),
                e.qualitymenu.addEventListener("dblclick", function(e) {
                    e.stopPropagation()
                }),
                e.setupButtonBarEvents(e.qualitymenu, !0),
                e.addParameterElement(e.parametersmenu, 0, "quality", e.i18n.__("player.quality"), !1, function(t) {
                    t.setTitle(e.i18n.__("player.quality") + ": " + e.qualitiesmenubuttonlabel),
                    e.showqualitiesmenu ? t.styleSetForced() : t.styleSetNeutral()
                }, function(t) {
                    console.log("Click on quality button"),
                    e.showqualitiesmenu = !e.showqualitiesmenu,
                    e.showspeedmenu = !1,
                    e.showadvancedmenu = !1,
                    e.updateBtVisibity(),
                    e.redrawParamers(),
                    e.redraw()
                }, function(e) {
                    e.styleSetNeutral()
                }),
                e.addParameterElement(e.qualitymenu, 0, "levelauto", e.i18n.__("player.auto"), !1, function(t) {
                    e.hlsobj.autoLevelEnabled ? (t.styleSetForced(),
                    e.qualitiesmenubuttonlabel = e.i18n.__("player.auto")) : t.styleSetNeutral()
                }, function(t) {
                    console.log("Click on level auto"),
                    e.setLocalStorage("forcequality", -1, 1),
                    e.hlsobj.nextLevel = -1,
                    e.hlsobj.autoLevelCapping = -1,
                    e.redrawParamers()
                }, function(e) {
                    e.styleSetForced()
                });
                for (var r = 0; r < i.levels.length; r++)
                    e.addParameterElement(e.qualitymenu, 1, "level" + r, i.levels[r].name, !1, function(t) {
                        var i = e.hlsobj.nextLevel;
                        -1 === i && (i = e.hlsobj.loadLevel),
                        -1 === i && (i = e.hlsobj.currentLevel),
                        e.hlsobj.autoLevelEnabled ? i === t.hlslevel ? (t.styleSetActive(),
                        e.qualitiesmenubuttonlabel = e.i18n.__("player.auto") + " (" + t.hlslevelname + ")",
                        6 == t.hlslevel ? e.parameterbthd.innerHTML = "4K" : e.parameterbthd.innerHTML = "HD") : t.styleSetNeutral() : i === t.hlslevel ? (t.styleSetForced(),
                        e.qualitiesmenubuttonlabel = t.hlslevelname,
                        6 == t.hlslevel ? e.parameterbthd.innerHTML = "4K" : e.parameterbthd.innerHTML = "HD") : t.styleSetNeutral()
                    }, function(t) {
                        console.log("Click on level " + t.hlslevel),
                        e.setLocalStorage("forcequality", t.hlslevel, 86400),
                        e.hlsobj.nextLevel = t.hlslevel,
                        e.hlsobj.autoLevelCapping = -1,
                        e.redrawParamers()
                    }, function(e) {
                        e.hlslevel = r,
                        e.hlslevelname = i.levels[r].name,
                        e.styleSetNeutral()
                    });
                e.redraw()
            }
        }),
        this.hlsobj.on(Hls.Events.LEVEL_LOADED, function(e, t) {
            console.log("Hls.Events.LEVEL_LOADED", e, t.level)
        }),
        this.hlsobj.on(Hls.Events.FRAG_BUFFERED, function(t, i) {
            console.log("Hls.Events.FRAG_BUFFERED " + t + " url = " + i.frag.url),
            e.redrawParamers()
        }),
        this.hlsobj.on(Hls.Events.FRAG_CHANGED, function(t, i) {
            console.log("Hls.Events.FRAG_CHANGED", t, "Level", i.frag.level, "Url", i.frag.url),
            e.redrawParamers(),
            e.updateBtVisibity()
        }),
        this.hlsobj.on(Hls.Events.FRAG_LOADING, function(t, i) {
            console.log("Hls.Events.FRAG_LOADING", t),
            e.updateBuffering(0)
        }),
        this.hlsobj.on(Hls.Events.ERROR, function(t, i) {
            switch (console.log("Hls.Events.ERROR", t, i.type, i.details, i.fatal),
            xv.console.log("Hls.Events.ERROR " + i.type + " " + i.url, "Player"),
            e.hlsNbError++,
            e.hlsNbError > 20 && e.send_debug_event("many_errors"),
            i.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
                i.fatal && e.recoverError();
                break;
            case Hls.ErrorTypes.MEDIA_ERROR:
                i.details === Hls.ErrorDetails.BUFFER_NUDGE_ON_STALL ? (xv.console.log("Error BUFFER_NUDGE_ON_STALL (" + (i.fatal ? "fatal" : "not fatal") + ")", "Player"),
                i.fatal && (console.log("recoverMediaError at " + new Date),
                e.hlsobj.recoverMediaError())) : i.fatal && e.recoverError();
                break;
            default:
                i.fatal && e.recoverError()
            }
        }),
        this.hlsobj.on(Hls.Events.FPS_DROP, function(e, t) {
            console.log("Hls.Events.FPS_DROP", e, t)
        }),
        this.hlsobj.on(Hls.Events.FRAG_LOAD_PROGRESS, function(t, i) {
            if ("object" != typeof i.stats || "undefined" == typeof i.stats.loaded)
                return void console.log("Not an XMLProgress event");
            if (!e.fragStatsSended) {
                var r = i.frag.level + "-" + i.frag.sn;
                if ("undefined" == typeof e.fragStats[r]) {
                    var s = [];
                    s[0] = (new Date).getTime(),
                    s[1] = i.stats.loaded,
                    s[2] = -1,
                    e.fragStats[r] = s
                } else if (i.stats.total === i.stats.loaded && -1 === e.fragStats[r][2]) {
                    var o = ((new Date).getTime() - e.fragStats[r][0]) / 1e3
                      , a = (i.stats.total - e.fragStats[r][1]) / o / 1024 * 8;
                    e.fragStats[r][2] = a,
                    e.check_speed_stats()
                }
            }
            var n = 100 / i.stats.total * i.stats.loaded;
            (n < 5 || n > 95) && console.log("Progress " + i.frag.url + " " + i.stats.loaded + " / " + i.stats.total + " : " + n + " % (Paused : " + e.video.paused + ", Seeking : " + e.video.seeking + ", ReadyState : " + e.video.readyState + ", CurrentTime " + Math.round(100 * e.video.currentTime) / 100 + "/" + Math.round(100 * e.video.duration) / 100 + ")"),
            i.stats.total === i.stats.loaded && (e.total_video_transfer += i.stats.total),
            e.updateBuffering(n)
        }),
        this.hlsobj.loadSource(this.url_hls),
        this.hlsobj.startLevel = 0,
        !0
    },
    streamVideo: function() {
        this.closeAd(),
        this.pause(),
        this.drawnDownloadLinks(this.i18n.__("download.use_external_app"), this.url_high, this.url_low)
    },
    drawnDownloadLinks: function(e, t, i) {
        var r = this.createElt("div", "pl-dl-box pl-msg-box");
        r.appendChild(this.createElt("h2", "", "", e));
        var s = !0;
        i || (i = t,
        t = "",
        s = !1);
        var o = this.createElt("div", "pl-dl-btns " + (s ? "two-btns" : "single-btn"));
        r.appendChild(o);
        var a = this.createElt("a", "low-qual", "", this.i18n.__("download.low_qual"));
        a.href = i,
        o.appendChild(a),
        s && (a = this.createElt("a", "high-qual", "", this.i18n.__("download.high_qual")),
        a.href = t,
        o.appendChild(a)),
        this.openMessageBox(),
        this.messagetxtdiv.innerHTML = "",
        this.messagetxtdiv.appendChild(r),
        this.showmessage = !0,
        this.updateBtVisibity(),
        this.redraw()
    },
    drawRelated: function() {
        if (this.relatedloaded)
            return void this.redraw();
        var e = this;
        if (this.relateddivcontainer = this.createElt("div", "related-vids"),
        this.appendToVideoDiv(this.relateddivcontainer),
        this.relateddiv = this.createElt("div", "related", "embed-related-vids"),
        this.relateddivcontainer.appendChild(this.relateddiv),
        xv && "object" == typeof xv.sda && "object" == typeof xv.sda.pp && "function" == typeof xv.sda.pp.bind) {
            var t = "3";
            "default" === xv.conf.sitename ? t = "1" : "xnxx" === xv.conf.sitename && (t = "2"),
            xv.sda.pp.bind("#embed-related-vids", t + "00011", !0, !1)
        }
        this.relatedloaded = !0,
        this.uploader_name && this.subscribebarbt.updateLabel();
        var i = -1
          , r = function(t) {
            var r = e.touch_getPosition(t);
            console.log("start moving at " + r),
            i = r
        }
          , s = function(t) {
            var r = e.touch_getPosition(t);
            if (-1 === i)
                return void (i = r);
            var s = i - r;
            i = r,
            console.log("self.relateddiv.offsetLeft " + e.relateddiv.offsetLeft + " self.relateddiv.offsetWidth " + e.relateddiv.offsetWidth);
            var o = e.relateddiv.offsetLeft - s;
            console.log("newposition " + o),
            o > 0 && (o = 0),
            o < e.video_div.offsetWidth - e.relateddiv.offsetWidth && (o = e.video_div.offsetWidth - e.relateddiv.offsetWidth),
            e.relateddiv.style.left = o + "px",
            console.log("moving at " + r + " diff = " + s + " new position " + o)
        }
          , o = function(e) {
            i = -1
        };
        this.relateddivcontainer.addEventListener("touchstart", r),
        this.relateddivcontainer.addEventListener("touchmove", s),
        this.relateddivcontainer.addEventListener("touchend", o),
        this.relateddivcontainer.addEventListener("touchcancel", o),
        this.relateddivcontainer.addEventListener("touchleave", o);
        var a = 0
          , n = createRequestObject();
        n.open("GET", "/video-suggest/" + this.id_video, !0),
        n.withCredentials = !0,
        n.onreadystatechange = function() {
            if (4 === n.readyState) {
                if (200 !== n.status)
                    return void console.log("SUGGEST LOADING ERROR ready stats " + n.status);
                try {
                    var t = JSON.parse(n.responseText)
                } catch (f) {
                    return void console.log("SUGGEST LOADING ERROR JSON", f)
                }
                for (var i in t.v) {
                    a++;
                    var r = t.v[i]
                      , s = e.createElt("div", "related-video thumb-block", "video_" + r.id + "_playerrelated");
                    s.style["float"] = "left";
                    var o = e.createElt("span", "thumb");
                    s.appendChild(o);
                    var l = document.createElement("a");
                    e.is_embed ? l.href = "/embedframe/" + r.id : l.href = r.uri,
                    o.appendChild(l);
                    var d = e.createElt("span", "duration", "", r.duration)
                      , u = document.createElement("img");
                    u.src = r.thumburl,
                    l.appendChild(u),
                    l.appendChild(d);
                    var c = e.createElt("span", "title", "", r.title_full);
                    if (l.appendChild(c),
                    e.relateddiv.appendChild(s),
                    e.desktop_view && a >= 27)
                        break
                }
                var h = document.createElement("div");
                h.style.clear = "both",
                e.relateddiv.appendChild(h),
                e.is_embed && "function" == typeof window.display_embed_related_native && window.display_embed_related_native("embed-related-vids"),
                xv.thumb_block_initiator ? xv.thumb_block_initiator.init_listing(e.relateddiv) : require && require(["lib/helpers/thumbs_rotator"], function(t) {
                    t(e.relateddiv)
                }),
                e.redraw()
            }
        }
        ;
        try {
            n.send()
        } catch (l) {
            console.log("urlRPC Call error")
        }
    },
    drawNextPlaylist: function() {
        if (this.plnextloaded)
            return this.plnexttimer || this.plnextclosed || this.hasPlaylistAutoNext() && this.startPlaylistCountdown(),
            void this.redraw();
        var e = this;
        this.plnextcontainer = this.createElt("div", "pl-next"),
        this.plnextcontainer.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.stopPlaylistCountdown(),
            e.loadNextVideoPlaylist()
        }),
        this.video_div.appendChild(this.plnextcontainer),
        this.plnextthumb = this.createElt("img"),
        this.plnextthumb.className = "thumb";
        var t, i = this.playlist.next.thumburl.replace("THUMBNUM", 15), r = this.video_div.offsetWidth;
        if (t = r > 480 ? .5 * r : .8 * r,
        "number" == typeof window.devicePixelRatio && (t = window.devicePixelRatio * t),
        t > 352 ? i = i.replace("thumbs/", "thumbslll/").replace("thumbs169/", "thumbs169lll/").replace("thumbs169xnxx/", "thumbs169xnxxlll/") : t > 272 ? i = i.replace("thumbs/", "thumbsll/").replace("thumbs169/", "thumbs169ll/").replace("thumbs169xnxx/", "thumbs169xnxxll/") : t > 208 && (i = i.replace("thumbs/", "thumbsl/").replace("thumbs169/", "thumbs169l/").replace("thumbs169xnxx/", "thumbs169xnxxl/")),
        this.plnextthumb.src = i,
        this.plnextcontainer.appendChild(this.plnextthumb),
        this.plnexttitle = this.createElt("p"),
        this.plnextcontainer.appendChild(this.plnexttitle),
        this.plnextclosebut = this.createImgBtn("icon-close.svg", "player.close_ad"),
        this.plnextclosebut.className = "dlg-close-btn",
        this.plnextclosebut.addEventListener("click", function(t) {
            e.bIsPlNextAllowed = !1,
            t.stopPropagation(),
            e.plnextclosed = !0,
            e.stopPlaylistCountdown(),
            e.drawRelated(),
            e.updateBtVisibity(),
            e.redraw()
        }, !1),
        this.plnextcontainer.appendChild(this.plnextclosebut),
        !this.hasPlaylistAutoNext())
            return this.plnextloaded = !0,
            this.plnexttitle.innerHTML = this.unescape(this.i18n.__("player.next_pl_video", {
                "%name%": '"' + this.playlist.next.title_full + '"'
            })),
            void this.redraw();
        this.plnextloader = this.createImgBtn("ring.svg"),
        this.plnextloader.className = "loader",
        this.plnextcontainer.appendChild(this.plnextloader),
        this.plnextloadertime = this.createElt("div", "pl-timer", "", "5"),
        this.plnextcontainer.appendChild(this.plnextloadertime),
        this.startPlaylistCountdown(),
        this.plnextloaded = !0,
        this.redraw()
    },
    startPlaylistCountdown: function() {
        this.stopPlaylistCountdown(),
        this.plnexttime = 6,
        this.updatePlaylistCountdown();
        var e = this;
        this.plnexttimer = setInterval(function() {
            e.updatePlaylistCountdown()
        }, 1e3)
    },
    updatePlaylistCountdown: function() {
        if (this.plnextloadertime) {
            this.plnexttime = Math.max(0, this.plnexttime - 1),
            this.plnextloadertime.innerHTML = this.plnexttime;
            var e = {
                "%nbsecs%": this.plnexttime.toString(),
                "%name%": '"' + this.playlist.next.title_full + '"'
            }
              , t = "player.loading_next_secs";
            if (0 === this.plnexttime)
                return void this.loadNextVideoPlaylist();
            1 === this.plnexttime && (t = "player.loading_next_sec"),
            this.plnexttitle.innerHTML = this.unescape(this.i18n.__(t, e))
        }
    },
    loadNextVideoPlaylist: function() {
        this.plnexttitle.innerHTML = this.unescape(this.i18n.__("player.loading_next")),
        this.write_cookie("html5_plfullscreen", this.isFullScreen ? "1" : "0"),
        window.location.href = this.playlist.next.uri
    },
    stopPlaylistCountdown: function() {
        this.plnexttime && (clearInterval(this.plnexttimer),
        this.plnexttimer = !1,
        this.plnextloaded = !1,
        this.bIsPlNextAllowed = !1,
        this.redraw())
    },
    updateDuration: function() {
        if (this.chromecastmedia) {
            if (this.chromecastmedia.currentTime) {
                this.progressbartext.innerHTML = this.formatSeconds(this.chromecastmedia.currentTime) + " / " + this.formatSeconds(this.chromecastmedia.media.duration);
                var e = 100 / this.chromecastmedia.media.duration * this.chromecastmedia.currentTime;
                this.progressbarcursor && (this.progressbarcursor.style.left = e + "%")
            }
            for (i = 0; i < this.buffered_div_list.length; i++)
                this.hideElt(this.buffered_div_list[i])
        } else {
            if ("undefined" == typeof this.video.duration)
                return void (this.progressbartext && (this.progressbartext.innerHTML = ""));
            var e = 100 / this.video.duration * this.video.currentTime
              , t = this.video.currentTime
              , r = 0;
            for (this.progressbarcursor && (this.desktop_view ? this.progressbarcursor.style.left = e + "%" : this.progressbarcursor.touchseek || (this.progressbarcursor.style.left = .98 * (e - 2) + "%")),
            i = this.video.buffered.length; i < this.buffered_div_list.length; i++)
                this.hideElt(this.buffered_div_list[i]);
            for (i = 0; i < this.video.buffered.length; i++) {
                var s = 100 / this.video.duration * this.video.buffered.start(i)
                  , o = this.video.buffered.end(i);
                o <= t && o > r ? r = o : this.video.buffered.start(i) <= t && o >= t && (r = o);
                var a = 100 / this.video.duration * o - s;
                if ("undefined" == typeof this.buffered_div_list[i]) {
                    var n = this.createElt("div", "buffer-elt");
                    n.style.backgroundColor = this.seek_bar_color,
                    this.buffered_div_list[i] = n,
                    this.progressbarbufferdiv && this.progressbarbufferdiv.appendChild(n)
                } else
                    n = this.buffered_div_list[i];
                this.showElt(n),
                n.style.left = s + "%",
                n.style.width = a + "%"
            }
            if (this.progressbartext && (this.progressbartext.innerHTML = this.formatSeconds(this.video.currentTime) + " / " + this.formatSeconds(this.video.duration)),
            !this.use_hls) {
                var e = 0;
                r > t + 3 ? e = 100 : t + 3 - r < 6 && (e = 100 / 6 * (6 - (t + 3 - r))),
                this.updateBuffering(e)
            }
        }
    },
    updateBuffering: function(e) {
        e || (e = 0),
        this.loaderpicbuffer.style.height = Math.floor(e) + "%",
        this.loaderpictxt.innerHTML = Math.floor(e) + "%"
    },
    formatSeconds: function(e) {
        if (e == Infinity)
            return "00:00";
        if (!e)
            return "00:00";
        if (e < 0)
            return "00:00";
        var t = Math.floor(e / 60);
        t < 10 && (t = "0" + t);
        var i = Math.floor(e % 60);
        return i < 10 && (i = "0" + i),
        t + ":" + i
    },
    setBuffering: function(e) {
        if (this.isBuffering !== e) {
            if (this.isBuffering = e,
            e) {
                console.log("setBuffering: is Buffering");
                var t = this;
                this.lastBufferTimestamp = (new Date).getTime(),
                setTimeout(function() {
                    t.updateBtVisibity(),
                    t.redraw()
                }, 600),
                this.bufferingTimeoutTimer && clearTimeout(this.bufferingTimeoutTimer),
                this.bufferingTimeoutTimer = setTimeout(function() {
                    t.isBuffering && (console.log("Buffer timeout"),
                    t.send_debug_event("buffer_timeout"))
                }, 1e4)
            } else {
                clearTimeout(this.bufferingTimeoutTimer),
                this.bufferingTimeoutTimer = !1;
                var i = (new Date).getTime() - this.lastBufferTimestamp;
                this.video.duration && (this.firstTimeBuffered = !0,
                console.log("setBuffering: is not Buffering in " + i + " ms"),
                this.send_debug_event("buffer_duration", i))
            }
            this.updateBtVisibity(),
            this.positionBigButtons()
        }
    },
    detectPlaying: function() {
        if (this.use_hls && !this.playClicked && this.forcenoautobuffer)
            return this.isPlaying = !1,
            this.canPlay = !0,
            void this.setBuffering(!1);
        if (this.video.seeking)
            return this.isPlaying = !1,
            void this.setBuffering(!0);
        if (3 === this.video.networkState)
            return this.isPlaying = !1,
            void this.setBuffering(!1);
        if (this.video.ended)
            return this.playlist && this.playlist.next && this.bIsPlNextAllowed ? this.drawNextPlaylist() : this.drawRelated(),
            this.isPlaying = !1,
            void this.setBuffering(!1);
        if (this.lastKnownCurrentTime !== this.video.currentTime)
            this.isPlaying = !0,
            this.setBuffering(!1);
        else if (this.canPlay)
            if (this.video.paused)
                this.isPlaying = !1,
                this.setBuffering(!1);
            else {
                if ((new Date).getTime() - this.lastCurrentTimeCheck < 500)
                    return;
                this.isPlaying = !1,
                this.setBuffering(!0)
            }
        else
            this.isPlaying = !1,
            this.setBuffering(!0);
        var e = this.lastKnownCurrentTime;
        this.lastCurrentTimeCheck = (new Date).getTime(),
        this.lastKnownCurrentTime = this.video.currentTime;
        var t = this.lastKnownCurrentTime - e;
        t > 0 && t < 1 && (this.total_video_played += t,
        (this.total_video_played > 10 && this.total_video_played < 10.5 || this.total_video_played > 70 && this.total_video_played < 70.5) && this.updateBtVisibity(),
        this.report_video_played_sent || this.total_video_played > 10 && "function" == typeof require && (this.report_video_played_sent = !0,
        require(["skins/common/video/tracking"], function(e) {
            e.declareLink()
        })))
    },
    getDrawMinSize: function() {
        var e = this.video_div.offsetHeight;
        return this.video_div.offsetWidth < e && (e = this.video_div.offsetWidth),
        e
    },
    getDrawButtonMargin: function() {
        var e = this.getDrawMinSize();
        return this.isFullScreen ? Math.floor(.04 * e) : Math.floor(.06 * e)
    },
    getDrawResizeCoef: function() {
        return "object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.disfeats && "function" == typeof xv.conf.dyn.disfeats.indexOf && (this.bBigUiCoef = -1 === xv.conf.dyn.disfeats.indexOf("ui") ? 1 : this.desktop_view ? 1.5 : 1.25),
        this.desktop_view ? .8 * this.bBigUiCoef : this.is_new_iphone ? this.is_ipad ? this.getDrawMinSize() / 500 * this.bBigUiCoef : this.getDrawMinSize() / 300 * this.bBigUiCoef : this.getDrawMinSize() / 400 * this.bBigUiCoef
    },
    redraw: function() {
        var e = this.video_div.offsetWidth
          , t = this.video_div.offsetHeight
          , i = this.getDrawResizeCoef()
          , r = 1.4;
        this.desktop_view && (r = .9),
        this.is_new_iphone && (r = 1.5);
        var s = this.getDrawButtonMargin()
          , o = function(e, t, r) {
            e.style.width = Math.floor(t * i) + "px",
            r && (e.style.height = Math.floor(r * i) + "px")
        }
          , a = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t.push(Math.floor(arguments[r] * i) + "px");
            e.style.padding = t.join(" ")
        }
          , n = function(e, t, i) {
            o(e, t, i);
            for (var r = [e], s = 3; s < arguments.length; s++)
                r.push(arguments[s]);
            a.apply(this, r)
        }
          , l = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t.push(Math.floor(arguments[r] * i) + "px");
            e.style.margin = t.join(" ")
        }
          , d = 20
          , u = 1;
        if (this.showintro ? (u = 2 / 3,
        d = 15) : this.desktop_view ? (u = .75,
        d = 17) : this.use_browser_controls && !this.is_new_iphone ? u = .5 : this.playClicked ? d = 15 : this.playlist && (u = .75,
        d = 17),
        !this.use_browser_controls && this.chromecastdetected && !this.is_ios && !this.is_ipad) {
            a(this.chromecastbt, 0, 10, 0, 0),
            n(this.chromecastbtimg, 45 * u, 45 * u, 7.5 * u),
            this.chromecastbttxt.style.fontSize = Math.floor(15 * i) + "px"
        }
        if (this.playlist) {
            var c = 5 + 20 * u;
            a(this.plprevbt, c, 10),
            n(this.plprevbtimg, 60 * u, 60 * u, 10 * u),
            a(this.plnextbt, c, 10),
            n(this.plnextbtimg, 60 * u, 60 * u, 10 * u)
        }
        if (a(this.playbt, 5, 10),
        n(this.playbtimg, 90 * u, 90 * u, 15 * u),
        this.playbttxt.style.fontSize = Math.floor(d * i) + "px",
        this.desktop_view || (a(this.pausebt, 5, 10),
        n(this.pausebtimg, 90 * u, 90 * u, 15 * u),
        this.use_browser_controls && (a(this.replaybt, 5, 10),
        n(this.replaybtimg, 40, 40, 5))),
        this.positionBigButtons(),
        this.use_browser_controls && (o(this.browserctrlsdlbt, 25, 25),
        a(this.browserctrlsdlbt, 5),
        this.browserctrlsdlbt.style.right = s + "px",
        this.browserctrlsdlbt.style.top = Math.floor(s / 2) + "px",
        this.uploader_name && l(this.subscribebarbt, 5, 7)),
        !this.use_browser_controls) {
            n(this.playbarbt, 23 * r, 23 * r, 5 * r, 7 * r),
            n(this.pausebarbt, 23 * r, 23 * r, 5 * r, 7 * r),
            n(this.soundonbarbt, 28 * r, 28 * r, 5 * r, 7 * r),
            n(this.soundoffbarbt, 28 * r, 28 * r, 5 * r, 7 * r),
            this.desktop_view && (this.is_ios_desktop_mode || o(this.soundvolglobal, 75 * r, 23 * r),
            n(this.plnextbarbt, 23 * r, 23 * r, 5 * r, 7 * r),
            n(this.plprevbarbt, 23 * r, 23 * r, 5 * r, 7 * r)),
            n(this.replaybarbt, 25 * r, 25 * r, 5 * r, 7 * r),
            this.uploader_name && l(this.subscribebarbt, 5 * r, 7 * r),
            this.desktop_view && l(this.progressbartext, 5 * r, 7 * r),
            this.use_parameter_menu && (o(this.paramsbarbt, 30 * r, 30 * r),
            l(this.paramsbarbt, 2.5, 4),
            this.parameterbthd.style.fontSize = Math.floor(12 * i * r) + "px"),
            n(this.downloadbarbt, 25 * r, 25 * r, 5 * r, 7 * r),
            this.desktop_view && n(this.expandbarbt, 26, 26, 5 * r, 7 * r),
            n(this.fullscreenbarbt, 28 * r, 28 * r, 5 * r, 7 * r);
            var h = 2.5;
            if (this.desktop_view && (h = 3.5),
            this.progressbarbg.style.height = Math.max(this.leftbuttonsbar.offsetHeight, this.rightbuttonsbar.offsetHeight) * h + "px",
            this.desktop_view ? (this.showBigProgressBar() ? this.progressbarbg.style.height = Math.floor(35 * i * h) + "px" : this.progressbarbg.style.height = Math.floor(2 * i) + "px",
            this.cursoroverprogressbar ? this.progressbarcontainer.style.height = Math.floor(10 * i) + "px" : this.progressbarcontainer.style.height = Math.floor(5 * i) + "px",
            this.progressbar.style.height = "100%",
            this.progressbardetectcursor && (this.progressbardetectcursor.style.height = Math.floor(70 * i) + "px")) : (this.progressbarcontainer.style.height = Math.floor(34 * r * i) + "px",
            this.progressbar.style.height = "2px",
            this.progressbar.style.top = "50%"),
            this.desktop_view ? this.progressbarcursor.style.height = "100%" : (this.progressbarcursor.style.width = Math.floor(22 * i) + "px",
            this.progressbarcursor.style.height = Math.floor(22 * i) + "px",
            this.progressbarcursor.style.top = "-" + 11 * i + "px"),
            this.allow_touchseek) {
                this.progressbarseekcursortext.style.fontHeight = Math.floor(20 * i) + "px";
                var f = 208 * i
                  , p = 117 * i;
                this.desktop_view && (f /= 1.2,
                p /= 1.2),
                this.progressbarseekthumb.style.width = Math.floor(f) + "px",
                this.progressbarseekthumb.style.height = Math.floor(p) + "px",
                this.thumb_slide_type == HTML5Player.TYPE_FULL ? this.progressbarseekthumb.style.backgroundSize = 10 * Math.floor(f) + "px " + 10 * Math.floor(p) + "px" : this.thumb_slide_type == HTML5Player.TYPE_MINUTE ? this.progressbarseekthumb.style.backgroundSize = 10 * Math.floor(f) + "px " + 6 * Math.floor(p) + "px" : this.progressbarseekthumb.style.backgroundSize = 6 * Math.floor(f) + "px " + 5 * Math.floor(p) + "px"
            }
            if (!this.use_browser_controls)
                if (this.desktop_view)
                    this.progressbarcontainer.style.left = "2px",
                    this.progressbarcontainer.style.right = "2px",
                    this.showBigProgressBar() ? this.progressbarcontainer.style.bottom = this.progressbarbg.offsetHeight / h + "px" : this.progressbarcontainer.style.bottom = "0px";
                else {
                    this.progressbarcontainer.style.bottom = "0px",
                    this.progressbarcontainer.style.left = this.leftbuttonsbar.offsetWidth + 10 * i + "px",
                    this.progressbarcontainer.style.right = this.rightbuttonsbar.offsetWidth + 10 * i + "px";
                    var v = Math.min(this.progressbarcontainer.offsetHeight, 44);
                    this.progressbartext.style.lineHeight = v / 1.5 + "px",
                    this.progressbartext.style.fontSize = Math.floor(v / 1.7) + "px",
                    e < 300 && (this.progressbartext.style.fontSize = "12px"),
                    this.progressbartext.style.top = "-" + this.progressbarcontainer.offsetHeight / 1.4 + "px",
                    this.progressbartext.style.left = "0px",
                    this.allow_touchseek && (this.progressbarseekthumb.style.bottom = this.progressbarcontainer.offsetHeight / 4 + "px")
                }
        }
        if (this.messagediv && (o(this.messagedivclose, 55),
        a(this.messagedivclose, 5),
        this.messagedivclose.style.top = "-" + Math.floor(this.messagedivclose.offsetHeight / 2) + "px",
        this.messagedivclose.style.right = "-" + this.messagedivclose.offsetWidth / 2 + "px",
        this.messagediv.style.top = s + "px",
        this.messagediv.style.fontSize = Math.floor(20 * i) + "px",
        this.messagetxtdiv.style.maxHeight = Math.floor(t - 2 * s) + "px"),
        this.display_inplayersquare && (this.advertdivcontainer.style.width = Math.floor(338 * i + 4) + "px",
        this.advertdivcontainer.style.height = Math.floor(235 * i + 4) + "px",
        this.advertdivcontainer.style.top = Math.floor(10 * i) + "px",
        this.advertdivcontainer.style.left = Math.floor(e / 2 - (this.advertdivcontainer.offsetWidth + this.advertclosebut.offsetWidth) / 2) + "px",
        o(this.advertclosebut, 60),
        a(this.advertclosebut, 7.5),
        this.advertclosebut.style.right = "-" + Math.floor(60 * i + 8 + 7.5 * i * 3) + "px"),
        o(this.loaderpic, 90, 90),
        this.loaderpic.offsetWidth > 0 && (this.loaderpic.style.left = Math.floor(e / 2 - this.loaderpic.offsetWidth / 2) + "px",
        this.loaderpic.style.bottom = Math.floor(t / 2 - this.loaderpic.offsetHeight / 1.8) + "px"),
        this.loaderpictxt.style.lineHeight = Math.floor(90 * i) + "px",
        this.loaderpictxt.style.fontSize = Math.floor(15 * i) + "px",
        this.topleftdiv.style.left = s / 2 + "px",
        this.topleftdiv.style.top = s / 3 + "px",
        this.is_ipad && (this.topleftdiv.style.top = s / 2 + 20 + "px"),
        this.videotitlediv.style.maxWidth = Math.round(e - 3 * s) + "px",
        this.videotitlediv.style.fontSize = Math.round(15 * i) + "px",
        this.videotitlediv.style.lineHeight = Math.round(20 * i) + "px",
        this.videotitlediv.style.padding = Math.round(6 * i) + "px",
        this.sponsorpopup && (this.sponsorpopup.style.fontSize = Math.floor(15 * i) + "px",
        this.sponsorpopup.style.top = s / 3 + "px",
        this.use_browser_controls && (this.sponsorpopup.style.top = s / 2 + 20 + "px")),
        !this.showintro && this.video.ended) {
            if (this.relateddiv) {
                var g = Math.floor(t - this.videotitlediv.offsetHeight - s / 2 - (this.progressbarbg ? this.progressbarbg.offsetHeight / h : this.bigbuttons.offsetHeight) - 10)
                  , m = Math.min(Math.floor(e / 250), 4)
                  , y = Math.floor(e / m)
                  , b = Math.floor(9 * y / 16)
                  , _ = this.relateddiv.getElementsByClassName("related-video")
                  , E = Math.min(Math.floor(g / b), Math.ceil(_.length / m));
                if (1 === E && (b = Math.floor(11 * y / 16)),
                this.desktop_view)
                    this.addClass(this.relateddivcontainer, "desktop-view");
                else {
                    y = 1,
                    E = Math.min(Math.max(Math.floor(g / 130), 1), g < e ? 3 : 5) + 1;
                    do {
                        E--,
                        b = Math.min(Math.floor(g / E), .8 * g),
                        y = Math.floor(16 * b / (1 === E ? 11 : 9)),
                        m = Math.floor(_.length / E)
                    } while (E > 1 && m * y < e)
                }
                this.relateddivcontainer.style.top = Math.floor(s / 2 + this.videotitlediv.offsetHeight) + "px",
                this.relateddivcontainer.style.height = g + "px",
                this.relateddiv.style.height = g + "px";
                for (var w = (E - 1) * m, k = 0; k < _.length; k++)
                    this.desktop_view ? (_[k].style.width = Math.floor(1e4 / m) / 100 + "%",
                    _[k].style.height = Math.floor(1e4 / E) / 100 + "%") : (_[k].style.width = y + "px",
                    _[k].style.height = b + "px"),
                    E < 2 ? (this.addClass(_[k], "one-line"),
                    this.removeClass(_[k], "bottom-line"),
                    this.removeClass(_[k], "top-line")) : (this.removeClass(_[k], "one-line"),
                    k < w ? this.removeClass(_[k], "bottom-line") : this.addClass(_[k], "bottom-line"),
                    k < m ? this.addClass(_[k], "top-line") : this.removeClass(_[k], "top-line"));
                var T = Math.ceil(b * E);
                this.relateddiv.style.height = T + "px",
                this.relateddiv.style.marginTop = Math.floor((g - T) / 2) + "px",
                this.desktop_view ? (this.relateddiv.style.width = e + "px",
                this.relateddivcontainer.style.top = Math.floor(s / 2 + this.videotitlediv.offsetHeight) + "px") : this.relateddiv.style.width = Math.ceil(m * y) + "px"
            }
            if (this.plnextcontainer) {
                var S = this.plnextcontainer.offsetWidth
                  , A = this.plnextcontainer.offsetHeight;
                o(this.plnextclosebut, 60),
                a(this.plnextclosebut, 7.5),
                this.plnextclosebut.style.top = "-" + Math.floor(37.5 * i) + "px",
                this.plnextclosebut.style.right = "-" + Math.floor(37.5 * i) + "px",
                this.hasPlaylistAutoNext() && (o(this.plnextloader, 200),
                this.plnextloader.style.top = Math.floor(A / 2 - 100 * i) + "px",
                this.plnextloader.style.left = Math.floor(S / 2 - 100 * i) + "px",
                this.plnextloadertime.style.fontSize = Math.round(60 * i) + "px",
                this.plnextloadertime.style.top = Math.floor(A / 2 - this.plnextloadertime.offsetHeight / 2) + "px",
                this.plnextloadertime.style.left = Math.floor(S / 2 - this.plnextloadertime.offsetWidth / 2) + "px"),
                this.plnexttitle.style.left = Math.floor(s / 3) + "px",
                this.plnexttitle.style.top = Math.floor(s / 3) + "px",
                this.plnexttitle.style.maxWidth = Math.round(S - s) + "px",
                this.plnexttitle.style.fontSize = Math.round(15 * i) + "px",
                this.plnexttitle.style.lineHeight = Math.round(20 * i) + "px",
                this.plnexttitle.style.padding = Math.round(6 * i) + "px"
            }
        }
        if (this.use_parameter_menu) {
            var x = [];
            if (this.qualitymenu && this.showqualitiesmenu && x.push(this.qualitymenu),
            this.advancedmenu && this.showadvancedmenu && x.push(this.advancedmenu),
            this.speedmenu && this.showspeedmenu && x.push(this.speedmenu),
            this.desktop_view) {
                var L = this.progressbarbg.offsetHeight / h
                  , P = this.fullscreenbarbt.offsetWidth
                  , R = Math.floor(200 * i)
                  , C = Math.floor(15 * i);
                this.parametersmenu.style.bottom = L + "px",
                this.parametersmenu.style.right = P + "px",
                this.parametersmenu.style.minWidth = R + "px",
                this.parametersmenu.style.fontSize = C + "px";
                for (var D in x)
                    x[D].style.right = P + R + Math.floor(5 * i) + "px",
                    x[D].style.minWidth = R + "px",
                    x[D].style.fontSize = C + "px",
                    x[D].style.top = Math.min(this.video_div.offsetHeight - L - this.parametersmenu.offsetHeight, this.video_div.offsetHeight - L - x[D].offsetHeight) + "px";
                for (var k in this.paramscheckboxes)
                    o(this.paramscheckboxes[k], 15)
            } else {
                var I = this.parametersmenu.children.length
                  , O = this.progressbarbg.offsetHeight / h
                  , M = 5 * r
                  , F = this.video_div.offsetWidth / 2 - 1.5 * M
                  , N = Math.floor(24 * i)
                  , B = 8 * r
                  , j = 8 * r
                  , U = Math.round((this.video_div.offsetHeight - O - M - (I + 1) * B * i - I * N) / (2 * I));
                this.parametersmenu.style.bottom = O + "px",
                this.parametersmenu.style.right = M + "px",
                this.parametersmenu.style.top = M + "px",
                this.parametersmenu.style.width = F + "px",
                this.parametersmenu.style.fontSize = N + "px",
                this.parametersmenu.style.lineHeight = N + "px";
                for (var k = 0; k < I; k++) {
                    var H = this.parametersmenu.children[k];
                    a(H, U / i, j),
                    l(H, B)
                }
                for (var D in x) {
                    I = Math.max(I, x[D].children.length),
                    U = Math.round((this.video_div.offsetHeight - O - M - (I + 1) * B * i - I * N) / (2 * I)),
                    x[D].style.bottom = O + "px",
                    x[D].style.left = M + "px",
                    x[D].style.top = M + "px",
                    x[D].style.width = F + "px",
                    x[D].style.fontSize = N + "px",
                    x[D].style.lineHeight = N + "px";
                    for (var k = 0; k < x[D].children.length; k++) {
                        var H = x[D].children[k];
                        a(H, U / i, j),
                        l(H, B)
                    }
                }
                for (var k in this.paramscheckboxes)
                    o(this.paramscheckboxes[k], 24)
            }
            this.redrawParamers()
        } else {
            var G = [this.lowqualitybt, this.highqualitybt];
            for (var k in G)
                n(G[k], 100, null, 7),
                G[k].style.fontSize = Math.floor(17 * i) + "px",
                G[k].style.right = s + "px";
            this.lowqualitybt.style.bottom = Math.max(25 * i, this.highqualitybt.offsetHeight) + 5.3 * s + 7 + "px",
            this.highqualitybt.style.bottom = 5 * s + 7 + "px"
        }
        this.is_embed && (this.desktop_view ? (this.logoxvideos.style.top = Math.floor(s / 3) + "px",
        this.logoxvideos.style.left = Math.floor(s / 3) + "px") : (this.logoxvideos.style.bottom = "22%",
        this.logoxvideos.style.left = "5%")),
        this.updateDuration(),
        e <= 340 || t <= 260 ? (this.addClass(this.video_div, "pl-mobile"),
        this.addClass(this.video_div, "pl-mobile-small")) : e <= 480 ? (this.addClass(this.video_div, "pl-mobile"),
        this.removeClass(this.video_div, "pl-mobile-small")) : (this.removeClass(this.video_div, "pl-mobile"),
        this.removeClass(this.video_div, "pl-mobile-small"))
    },
    positionBigButtons: function() {
        0 == this.bigbuttons.offsetWidth && 0 == this.bigbuttons.offsetHeight || (this.bigbuttons.style.left = Math.floor(this.video_div.offsetWidth / 2 - this.bigbuttons.offsetWidth / 2) + "px",
        this.use_browser_controls && !this.is_new_iphone ? this.bigbuttons.style.bottom = Math.floor(this.video_div.offsetHeight / 2 - 1.5 * this.bigbuttons.offsetHeight) + "px" : this.is_new_iphone ? this.bigbuttons.style.bottom = Math.floor(this.video_div.offsetHeight / 2 - this.bigbuttons.offsetHeight / 2.2) + "px" : this.bigbuttons.style.bottom = Math.floor(this.video_div.offsetHeight / 2 - this.bigbuttons.offsetHeight / 1.8) + "px")
    },
    updateBtVisibity: function() {
        return this.updateDuration(),
        this.presetHide(["logoxvideos", "videotitlediv", "loaderpic", "picture_div", "playbt", "pausebt", "chromecastbt", "plprevbt", "plnextbt", "replaybt", "downloadbt", "streambt", "browserctrlsdlbt", "highqualitybt", "lowqualitybt", "playbarbt", "pausebarbt", "replaybarbt", "soundonbarbt", "soundoffbarbt", "soundvolglobal", "downloadbarbt", "expandbarbt", "fullscreenbarbt", "paramsbarbt", "subscribebarbt", "plnextbarbt", "plprevbarbt", "parametersmenu", "qualitymenu", "advancedmenu", "speedmenu", "parameterbthd", "progressbarcontainer", "progressbarbg", "progressbartext", "advertdivcontainer", "advertdoubleclick", "sponsorpopup", "messagediv", "errordlg", "relateddivcontainer", "plnextcontainer", "videoads_title_div"]),
        this.isPlayError ? (this.displayLoadError(),
        void this.applyVisibitlity()) : this.chromecastdetected && this.chromecastmedia ? (this.presetShow(["chromecastbt", "picture_div"]),
        this.presetShow(["progressbarbg", "soundvolglobal"]),
        this.presetShow(["progressbarcontainer", "progressbartext"]),
        "PLAYING" !== this.chromecastmedia.playerState ? this.presetShow("playbarbt") : this.presetShow("pausebarbt"),
        void this.applyVisibitlity()) : ((this.showbigthumb || this.video.ended) && (this.presetShow("picture_div"),
        this.video.ended && (this.picture_div.className = "video-pic picture-related")),
        this.showintro ? (this.presetShow(["playbt", "plprevbt", "plnextbt"]),
        this.is_ios || this.is_ipad || this.desktop_view || !this.url_hls || !this.chromecastdetected || this.presetShow(["chromecastbt"]),
        this.display_inplayersquare && this.showad ? (this.presetShow("advertdivcontainer"),
        this.showdoubleclick && this.presetShow("advertdoubleclick")) : this.desktop_view && !this.is_embed && this.presetShow("videotitlediv"),
        void this.applyVisibitlity()) : this.showmessage ? (this.presetShow("messagediv"),
        void this.applyVisibitlity()) : (this.is_embed && (this.presetShow("logoxvideos"),
        this.presetHide("videotitlediv")),
        this.use_browser_controls && this.is_new_iphone && !this.playClicked ? (this.presetShow("playbt"),
        void this.applyVisibitlity()) : (this.showBigProgressBar() ? (this.presetShow(["progressbarbg", "soundvolglobal"]),
        this.video.muted || 0 === this.video.volume ? this.presetShow("soundoffbarbt") : this.presetShow("soundonbarbt"),
        this.is_embed && !this.fullscreenAllowed() || (this.is_new_iphone ? this.is_new_iphone && this.playClicked && this.presetShow("fullscreenbarbt") : this.presetShow("fullscreenbarbt")),
        this.is_embed || this.isFullScreen || this.presetShow("expandbarbt"),
        this.desktop_view && (this.video.paused ? this.presetShow("playbarbt") : this.presetShow("pausebarbt")),
        this.desktop_view && this.presetShow("downloadbarbt"),
        this.use_parameter_menu && (this.presetShow("paramsbarbt"),
        this.use_hls && this.hlsobj && this.hlsobj.currentLevel > 2 && this.presetShow("parameterbthd"),
        this.showparametersmenu && (this.presetShow("parametersmenu"),
        this.showqualitiesmenu && this.presetShow("qualitymenu"),
        this.showspeedmenu && this.presetShow("speedmenu"),
        this.showadvancedmenu && this.presetShow("advancedmenu"))),
        this.video.duration && (this.is_new_iphone ? this.playClicked && this.presetShow(["progressbarcontainer", "progressbartext"]) : this.presetShow(["progressbarcontainer", "progressbartext"])),
        this.showpausebt && this.presetShow(["pausebt", "plprevbt", "plnextbt"]),
        this.playlist && (this.playlist.prev && this.presetShow("plprevbarbt"),
        this.playlist.next && this.presetShow("plnextbarbt"))) : this.desktop_view && !this.completHideSeekBar && this.presetShow(["progressbarbg", "progressbarcontainer"]),
        (this.allow_showInfos || this.video.paused || !this.canPlay || this.isBuffering) && (this.desktop_view && !this.is_embed && this.presetShow(["videotitlediv"]),
        this.playClicked && (this.videoads_title_div ? this.presetShow(["videoads_title_div"]) : this.presetShow(["sponsorpopup"])),
        this.use_browser_controls && (this.is_ios || this.is_ipad || this.presetShow(["browserctrlsdlbt", "plprevbt", "plnextbt"]),
        (this.is_ios || this.is_old_ios) && !this.use_native_hls && this.url_high && (this.presetShow(["highqualitybt", "lowqualitybt"]),
        this.force_lq ? (this.lowqualitybt.className = "quality-btn quality-forced",
        this.highqualitybt.className = "quality-btn quality-default") : (this.lowqualitybt.className = "quality-btn quality-default",
        this.highqualitybt.className = "quality-btn quality-forced")))),
        !this.canPlay || this.isBuffering ? (this.presetHide(["highqualitybt", "lowqualitybt", "pausebt"]),
        this.use_browser_controls || (this.isBuffering ? this.presetHide(["plprevbt", "plnextbt"]) : this.presetShow(["plprevbt", "plnextbt"])),
        this.is_ios || this.is_ipad || (this.use_hls || this.playClicked || "none" != this.video.preload ? (new Date).getTime() - this.lastBufferTimestamp > 500 ? this.presetShow("loaderpic") : this.firstTimeBuffered && !this.playClicked && this.presetShow(["playbt"]) : this.presetShow(["playbt"])),
        void this.applyVisibitlity()) : this.video.ended ? (this.plnextloaded ? this.presetShow("plnextcontainer") : this.presetShow("relateddivcontainer"),
        this.presetShow(["replaybt", "replaybarbt", "progressbarbg"]),
        this.desktop_view && !this.is_embed && this.presetShow(["videotitlediv"]),
        this.use_browser_controls || this.presetShow("progressbarcontainer", "progressbartext"),
        this.presetHide(["logoxvideos", "playbarbt", "pausebarbt", "downloadbarbt", "soundonbarbt", "soundoffbarbt", "soundvolglobal", "paramsbarbt", "highqualitybt", "lowqualitybt", "playbt", "pausebt", "plprevbt", "plnextbt", "browserctrlsdlbt"]),
        this.is_embed && !this.fullscreenAllowed() || this.presetShow("fullscreenbarbt"),
        this.is_embed || this.isFullScreen || this.presetShow("expandbarbt"),
        this.playlist && (this.playlist.prev && this.presetShow("plprevbarbt"),
        this.playlist.next && this.presetShow("plnextbarbt")),
        void this.applyVisibitlity()) : this.video.paused ? (this.presetHide(["pausebt"]),
        this.presetShow(["plprevbt", "plnextbt"]),
        this.playClicked || this.use_browser_controls ? (this.is_ios || this.is_ipad || this.presetShow("browserctrlsdlbt"),
        this.desktop_view && !this.is_embed && this.presetShow(["videotitlediv"]),
        this.hideElt(this.playbttxt)) : this.desktop_view || this.chromecastdetected && this.presetShow(["chromecastbt"]),
        this.use_browser_controls || (this.playClicked && !this.allow_showInfos ? this.presetHide(["logoxvideos", "progressbarbg", "fullscreenbarbt", "expandbarbt", "videotitlediv", "progressbarcontainer", "playbarbt", "pausebarbt", "downloadbarbt", "soundonbarbt", "soundoffbarbt", "soundvolglobal", "paramsbarbt", "highqualitybt", "lowqualitybt", "progressbartext", "playbt", "pausebt", "plprevbt", "plnextbt", "browserctrlsdlbt", "videoads_title_div", "sponsorpopup"]) : this.presetShow(["playbt"])),
        void this.applyVisibitlity()) : void this.applyVisibitlity())))
    },
    showPause: function() {
        if (!this.desktop_view) {
            console.info("show pause"),
            this.showpausebt = !0,
            this.showpausebt_timer && clearTimeout(this.showpausebt_timer);
            var e = this;
            this.showpausebt_timer = setTimeout(function() {
                console.log("Show pausebt end"),
                e.showpausebt = !1,
                e.updateBtVisibity()
            }, 3e3),
            this.updateBtVisibity(),
            this.positionBigButtons()
        }
    },
    showInfos: function(e) {
        this.allow_showInfos = !0,
        this.allow_showInfosTimer && clearTimeout(this.allow_showInfosTimer);
        var t = this;
        this.allow_completHideSeekBar && (clearTimeout(this.allow_completHideSeekBar),
        delete this.allow_completHideSeekBar),
        this.completHideSeekBar = !1,
        this.allow_showInfosTimer = setTimeout(function() {
            console.log("Show Info end"),
            t.allow_showInfos = !1,
            t.allow_showInfosTimer = !1,
            t.showpausebt = !1,
            t.showsoundcontrol = !1,
            t.video.paused || t.desktop_view || (t.showparametersmenu = !1,
            t.showqualitiesmenu = !1,
            t.showspeedmenu = !1,
            t.showadvancedmenu = !1),
            t.touchSeekHide(),
            t.updateBtVisibity(),
            t.redraw(),
            t.desktop_view && (t.video_div.style.cursor = "none",
            t.allow_completHideSeekBar = setTimeout(function() {
                t.completHideSeekBar = !0,
                t.updateBtVisibity()
            }, 5e3))
        }, 3e3),
        this.updateBtVisibity(),
        e ? this.positionBigButtons() : this.redraw()
    },
    hideInfos: function() {
        this.allow_showInfos = !1,
        this.allow_showInfosTimer && clearTimeout(this.allow_showInfosTimer),
        this.allow_showInfosTimer = !1,
        this.showpausebt = !1,
        this.showsoundcontrol = !1,
        this.touchSeekHide(),
        this.updateBtVisibity()
    },
    seek: function(e) {
        if (this.chromecastmedia) {
            console.log("html5player.seek(" + e.toFixed(2) + ") Chromecast");
            var t = new chrome.cast.media.SeekRequest;
            return t.currentTime = e,
            void this.chromecastmedia.seek(t, function() {
                console.log("Chromecast Seek ok")
            })
        }
        if (this.video.duration) {
            if (e == NaN || e == Infinity)
                return void console.log("html5player.seek : Invalid value", e);
            if (e < 0 || e > 1e4)
                return void console.log("html5player.seek : Invalid value", e);
            this.use_hls,
            console.log("html5player.seek(" + e.toFixed(2) + ")"),
            this.video.currentTime = e.toFixed(2),
            this.showbigthumb = !1
        }
    },
    play: function() {
        console.log("html5player.play()"),
        this.closeAd(),
        this.showbigthumb = !1,
        this.video.poster = "",
        this.chromecastmedia ? this.chromecastmedia.play() : this.video.play()
    },
    replay: function() {
        this.plnextclosed = !1,
        this.stopPlaylistCountdown(),
        this.endReached = !1,
        this.video.currentTime = 0,
        this.play()
    },
    pause: function() {
        console.log("html5player.pause()"),
        this.chromecastmedia ? this.chromecastmedia.pause() : this.video.pause()
    },
    mute: function() {
        this.loadPreference(),
        this.video.muted = !0,
        this.desktop_view && !this.is_ios_desktop_mode && (this.soundvolglobalvolume.style.width = "0%"),
        this.savePreference()
    },
    unmute: function() {
        this.loadPreference(),
        this.video.muted = !1,
        this.desktop_view && !this.is_ios_desktop_mode && (this.soundvolglobalvolume.style.width = Math.round(100 * this.video.volume) + "%"),
        this.savePreference()
    },
    setVolume: function(e) {
        this.loadPreference(),
        this.video.muted = !1,
        this.video.volume = e,
        this.desktop_view && !this.is_ios_desktop_mode && (this.soundvolglobalvolume.style.width = Math.round(100 * e) + "%"),
        this.savePreference()
    },
    setLQ: function() {
        this.force_lq || (this.loadPreference(),
        this.force_lq = !0,
        this.savePreference(),
        this.loadVideoSrc())
    },
    setHQ: function() {
        this.force_lq && (this.loadPreference(),
        this.force_lq = !1,
        this.savePreference(),
        this.loadVideoSrc())
    },
    setForceNoLoop: function(e) {
        this.loadPreference(),
        this.force_no_loop = e,
        this.savePreference()
    },
    fullscreen: function() {
        if (console.log("this.isFullScreen: " + this.isFullScreen),
        this.fullscreenSupported())
            document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : this.video_div.requestFullscreen ? this.video_div.requestFullscreen() : this.video_div.mozRequestFullScreen ? this.video_div.mozRequestFullScreen() : this.video_div.webkitRequestFullscreen ? this.video_div.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : this.video_div.msRequestFullscreen ? this.video_div.msRequestFullscreen() : alert("Not supported"),
            this.toggleFullscreen();
        else {
            if (this.is_android_app)
                return this.isFakeFullScreen ? (this.removeClass(this.global_div, "fakefullscreen"),
                this.isFakeFullScreen = !1,
                this.global_div_OriginalParentNode.appendChild(this.global_div)) : (this.addClass(this.global_div, "fakefullscreen"),
                this.isFakeFullScreen = !0,
                document.body.appendChild(this.global_div)),
                this.isPlaying && this.play(),
                void this.toggleFullscreen();
            if (this.fullscreeniOSSupported())
                return void this.video.webkitEnterFullscreen()
        }
    },
    hasFullscreenElement: function() {
        return !!this.isFakeFullScreen || !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
    },
    toggleFullscreen: function() {
        var e = this.hasFullscreenElement();
        if (e !== this.isFullScreen) {
            if (e && !this.isFullScreen)
                if (this.fullscreen_asked = (new Date).getTime(),
                this.video_div.style.height = "100%",
                this.fullscreenbarbt.src = this.static_path + "img/player/icon-screen-fullscreen-back.svg",
                this.use_hls && !this.desktop_view && this.video.videoHeight && window.screen.orientation) {
                    var t = this.video.videoWidth / this.video.videoHeight;
                    console.log("Video ratio", t),
                    t > 1.3 && (window.screen.orientation.lock("landscape"),
                    this.is_android_app && (console.log("AndroidInterface.message('HORIZ')"),
                    "undefined" != typeof AndroidInterface && AndroidInterface.message("HORIZ"))),
                    t < .9 && (window.screen.orientation.lock("portrait"),
                    this.is_android_app && (console.log("AndroidInterface.message('VERT')"),
                    "undefined" != typeof AndroidInterface && AndroidInterface.message("VERT")))
                } else
                    this.is_android_app && (console.log("AndroidInterface.message('UNKOWN')"),
                    "undefined" != typeof AndroidInterface && AndroidInterface.message("UNKOWN"));
            else
                this.video_div.style.height = "",
                this.fullscreenbarbt.src = this.static_path + "img/player/icon-screen-fullscreen.svg",
                this.is_android_app && (console.log("AndroidInterface.message('OFF')"),
                "undefined" != typeof AndroidInterface && AndroidInterface.message("OFF"));
            this.isFullScreen = e,
            this.updateBtVisibity(),
            this.redraw(),
            this.send_debug_event("fullscreen"),
            this.redrawtimer && clearTimeout(this.redrawtimer);
            var i = this;
            this.redrawtimer = setTimeout(function() {
                i.redrawtimer = !1,
                i.redraw()
            }, 100)
        }
    },
    fullscreeniOSSupported: function() {
        return !!document.createElement("video").webkitEnterFullscreen
    },
    fullscreenSupported: function() {
        if (this.is_android_app)
            return !1;
        var e = document.createElement("div");
        return !!e.requestFullscreen || (!!e.mozRequestFullScreen || (!!e.webkitRequestFullscreen || !!e.msRequestFullscreen))
    },
    fullscreenAllowed: function() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
    },
    closeAd: function() {
        if (!this.showintro && !this.showad)
            return void console.log("closeAd() : Ad already closed");
        console.log("closeAd() : Closing ad"),
        this.showintro = !1,
        this.showad = !1,
        this.use_browser_controls && !this.is_new_iphone && this.showVideoControls(),
        this.showInfos(!0),
        this.updateBtVisibity()
    },
    hideSponsor: function(e) {
        if (this.showsponsor)
            return e ? (this.showsponsor = !1,
            void this.updateBtVisibity()) : void (this.video.duration && (this.video.currentTime < .1 * this.video.duration || (this.showsponsor = !1,
            this.updateBtVisibity())))
    },
    showVideoControls: function() {
        console.log("showVideoContols() : Showing controls"),
        this.video.className = "",
        this.video.controls = "controls",
        this.showbigthumb = !1
    },
    hideVideoControls: function() {
        console.log("hideVideoControls() : Hide controls"),
        this.video.className = "ios_player",
        this.video.controls = !1
    },
    loadVideoSrc: function() {
        if (this.saveNeedSeek(),
        this.use_hls)
            return void this.initHls();
        if (this.use_native_hls)
            return console.log("Use native HLS", this.url_hls),
            void (this.video.src = this.url_hls);
        var e = this.url_high;
        e || (e = this.url_low),
        this.force_lq && (e = this.url_low),
        console.log("Use HTML5 MP4", e),
        this.video.src = e
    },
    saveNeedSeek: function() {
        this.video.currentTime && (this.pending_seek = this.video.currentTime,
        this.isPlaying || this.isBuffering && !this.video.paused ? this.seek_was_playing = !0 : this.seek_was_playing = !1,
        console.log("saveNeedSeek at " + this.pending_seek + " (was playing " + this.seek_was_playing + ")"))
    },
    checkNeedSeek: function() {
        this.pending_seek && (this.seek_was_playing ? (this.video.play(),
        console.log("seekNeed detected to ", this.pending_seek, " and play needed")) : (this.video.pause(),
        console.log("seekNeed detected to ", this.pending_seek)),
        this.video.currentTime = this.pending_seek.toFixed(2),
        this.pending_seek = 0)
    },
    cursorOverProgressBar: function() {
        this.cursoroverprogressbartimer && (clearTimeout(this.cursoroverprogressbartimer),
        this.cursoroverprogressbartimer = !1),
        this.cursoroverprogressbar = !0,
        this.redraw()
    },
    cursorLeaveProgressBar: function() {
        var e = this;
        this.cursoroverprogressbartimer || (this.cursoroverprogressbartimer = setTimeout(function() {
            e.showparametersmenu = !1,
            e.showqualitiesmenu = !1,
            e.showspeedmenu = !1,
            e.showadvancedmenu = !1,
            e.cursoroverprogressbar = !1,
            e.updateBtVisibity(),
            e.redraw()
        }, 2e3))
    },
    showBigProgressBar: function() {
        if (this.use_browser_controls)
            return !1;
        if (this.cursoroverprogressbar)
            return !0;
        if (this.video.ended)
            return !0;
        if (this.desktop_view) {
            if (this.allow_showInfos || this.video.paused || !this.canPlay || this.isBuffering)
                return !0;
            if (!this.playClicked)
                return !0
        } else if (this.allow_showInfos || this.video.paused || !this.canPlay || this.isBuffering)
            return !0;
        return !1
    },
    computeThumbSlideType: function() {
        if (!this.thumb_slide_big)
            return void (this.thumb_slide_type = HTML5Player.TYPE_SMALL);
        if (this.use_native_hls)
            return this.thumb_slide_min && this.desktop_view ? void (this.thumb_slide_type = HTML5Player.TYPE_MINUTE) : void (this.thumb_slide_type = HTML5Player.TYPE_FULL);
        if (!this.use_hls)
            return void (this.thumb_slide ? this.thumb_slide_type = HTML5Player.TYPE_SMALL : this.thumb_slide_type = HTML5Player.TYPE_FULL);
        if (!this.desktop_view)
            return void (this.thumb_slide_type = HTML5Player.TYPE_FULL);
        if (!this.thumb_slide_min)
            return void (this.thumb_slide_type = HTML5Player.TYPE_FULL);
        var e = this.get_networkspeed();
        return e ? e < 6e3 ? void (this.thumb_slide_type = HTML5Player.TYPE_FULL) : void (this.thumb_slide_type = HTML5Player.TYPE_MINUTE) : void (this.thumb_slide ? this.thumb_slide_type = HTML5Player.TYPE_SMALL : this.thumb_slide_type = HTML5Player.TYPE_FULL)
    },
    recoverError: function(e) {
        if (console.log("Error recovery", (new Date).getTime(), this.lastErrorRecovery),
        !this.pendingUrlRPCUpdate) {
            if (this.send_debug_event("playerror"),
            this.use_hls && 7 == this.id_cdn_hls && this.sendDebugLogs(),
            !e && (new Date).getTime() - this.lastErrorRecovery < 18e5)
                return console.log("Error recovery. Too fast."),
                this.isPlayError = !0,
                void this.updateBtVisibity();
            this.lastErrorRecovery = (new Date).getTime(),
            this.updateUrlRPC()
        }
    },
    updateUrlRPC: function() {
        var e = this;
        this.pendingUrlRPCUpdate = !0;
        var t = this.id_cdn;
        (this.use_hls || this.use_native_hls) && (t = this.id_cdn_hls),
        xv.console.log("updateUrlRPC try to update URL after a fatal error", "Player");
        var i = createRequestObject();
        i.open("GET", "/html5player/getvideo/" + this.id_video + "/" + t, !0),
        i.onreadystatechange = function() {
            if (4 === i.readyState) {
                if (e.pendingUrlRPCUpdate = !1,
                e.isPlayError = !1,
                e.updateBtVisibity(),
                200 !== i.status)
                    return e.isPlayError = !0,
                    e.updateBtVisibity(),
                    void console.log("updateUrlRPC error status", i.status);
                try {
                    var t = JSON.parse(i.responseText)
                } catch (r) {
                    return e.isPlayError = !0,
                    e.updateBtVisibity(),
                    void console.log("Url RPC Call bad json")
                }
                e.url_hls && t.hls && (e.url_hls = t.hls,
                e.id_cdn_hls = t.hls_idcdn,
                xv.console.log("updateUrlRPC update hls " + t.hls, "Player")),
                e.url_low && t.mp4_low && (e.url_low = t.mp4_low,
                e.id_cdn = t.mp4_idcdn,
                xv.console.log("updateUrlRPC mp4 low " + t.mp4_low, "Player")),
                e.url_high && t.mp4_high && (e.url_high = t.mp4_high,
                e.id_cdn = t.mp4_idcdn,
                xv.console.log("updateUrlRPC mp4 high " + t.mp4_high, "Player")),
                e.loadVideoSrc()
            }
        }
        ;
        try {
            i.send()
        } catch (r) {
            console.log("urlRPC Call error")
        }
    },
    toggleExpand: function() {
        this.isExpanded ? this.isExpanded = !1 : this.isExpanded = !0,
        this.is_premium_site && (this.loadPreference(),
        this.forceExpanded = this.isExpanded,
        this.savePreference()),
        window.xvideos.player.toggleSize()
    },
    loadPreference: function() {
        var e = this.get_cookie("html5_pref");
        if (null !== e) {
            var t = JSON.parse(e);
            void 0 !== t && (!0 === t.SQ && (this.force_lq = !0),
            this.desktop_view && !this.is_ios_desktop_mode && "undefined" != typeof t.VOLUME && this.video && (this.video.volume = t.VOLUME,
            this.soundvolglobalvolume && (this.soundvolglobalvolume.style.width = Math.round(100 * t.VOLUME) + "%")),
            !0 === t.MUTE && this.video && (this.video.muted = !0),
            !0 === t.FORCENOPICTURE && (this.forcenopreviewimg = !0),
            !0 === t.FORCENOAUTOBUFFER && (this.forcenoautobuffer = !0),
            !0 === t.FORCENATIVEHLS && (this.forcenativehls = !0),
            !0 === t.CHROMECAST && (this.chromecastdetected = !0),
            "boolean" != typeof t.PLAUTOPLAY || t.PLAUTOPLAY || (this.enableplautoplay = !1),
            !0 === t.EXPANDED && (this.forceExpanded = !0),
            !0 === t.FORCENOLOOP && (this.force_no_loop = !0))
        }
    },
    savePreference: function() {
        arr = {},
        arr.SQ = this.force_lq,
        arr.MUTE = this.video.muted,
        arr.VOLUME = this.video.volume,
        arr.FORCENOPICTURE = this.forcenopreviewimg,
        arr.FORCENOAUTOBUFFER = this.forcenoautobuffer,
        arr.FORCENATIVEHLS = this.forcenativehls,
        arr.PLAUTOPLAY = this.enableplautoplay,
        arr.CHROMECAST = this.chromecastdetected,
        arr.EXPANDED = this.forceExpanded,
        arr.FORCENOLOOP = this.force_no_loop;
        var e = JSON.stringify(arr);
        this.write_cookie("html5_pref", e)
    },
    save_networkspeed: function(e) {
        this.write_cookie("html5_networkspeed", e)
    },
    get_networkspeed: function() {
        var e = this.get_cookie("html5_networkspeed");
        return e || !1
    },
    write_cookie: function(e, t) {
        var i = new Date;
        i.setTime(i.getTime());
        var r = new Date(i.getTime() + 2592e6);
        document.cookie = e + "=" + escape(t) + ";expires=" + r.toGMTString() + ";path=/"
    },
    get_cookie: function(e) {
        var t, i, r, s = document.cookie.split(";");
        for (t = 0; t < s.length; t++)
            if (i = s[t].substr(0, s[t].indexOf("=")),
            r = s[t].substr(s[t].indexOf("=") + 1),
            (i = i.replace(/^\s+|\s+$/g, "")) == e)
                return unescape(r);
        return null
    },
    doubleclick_debug: function(e, t) {
        if (this.send_adclick_debug && !this.doubleclick_stats_send) {
            var i = -1
              , r = -1;
            if (t && t.target) {
                var s = t.target.getBoundingClientRect();
                if (!s)
                    return void console.log("Unable to get rect");
                if (!s.left || !s.top)
                    return void console.log("Unable to get rect (2)");
                i = Math.round(100 / t.target.offsetWidth * (this.touch_getPosition(t) - s.left)),
                r = Math.round(100 / t.target.offsetHeight * (this.touch_getPositionY(t) - s.top)),
                i < 0 && (i = 0),
                i > 100 && (i = 100),
                r < 0 && (r = 0),
                r > 100 && (r = 100)
            }
            if (console.log("doubleclick_debug , type = " + e + " , pos x = " + i + ", pox y = " + r),
            ("firstdbclick" !== e && "firstclick" !== e || (this.dbclick_first_x = i,
            this.dbclick_first_y = r,
            this.dbclick_start_date = (new Date).getTime(),
            this.dbclick_sec_x = -1,
            this.dbclick_sec_y = -1,
            "firstdbclick" !== e)) && -1 !== this.dbclick_first_x && -1 !== this.dbclick_first_y) {
                var o = 0;
                "secdbclick" === e && (this.dbclick_sec_x = i,
                this.dbclick_sec_y = r,
                o = (new Date).getTime() - this.dbclick_start_date);
                var a = 1;
                -1 !== this.dbclick_sec_x && (a = 2);
                var n = "d";
                "firstclick" === e && (n = "s");
                var l = "/dbckstats/" + n + "/" + a + "/" + this.dbclick_first_x + "/" + this.dbclick_first_y;
                a > 1 && (l += "/" + this.dbclick_sec_x + "/" + this.dbclick_sec_y + "/" + o),
                console.log("Calling", l),
                this.doubleclick_stats_send = !0;
                var d = createRequestObject();
                d.open("GET", l, !0),
                d.onreadystatechange = function() {
                    4 === d.readyState && d.status
                }
                ,
                d.send()
            }
        }
    },
    check_speed_stats: function() {
        if (!this.fragStatsSended) {
            var e = 0
              , t = 0;
            for (var i in this.fragStats)
                -1 !== this.fragStats[i][2] && (e++,
                t += this.fragStats[i][2]);
            if (e < 5)
                return void console.log("Not enought stats");
            var r = Math.floor(t / e);
            xv.console.log("check_speed_stats Network speed " + r + " Kb/s", "Player"),
            this.save_networkspeed(r),
            this.send_debug_event("network_speed", r),
            this.fragStatsSended = !0
        }
    },
    preloadMozaiqueMinThumbOnStart: function() {
        if (console.log("preloadMozaiqueMinThumbOnStart"),
        !this.video.duration)
            return void console.log("preloadMozaiqueMinThumbOnStart No duration");
        console.log("preloadMozaiqueMinThumbOnStart start preloading");
        var e = Math.floor(this.video.duration / 60) - 1;
        e < 1 && (e = 1),
        e > 10 && (e = 10);
        for (var t = 0; t < e; t++)
            this.preloadMozaiqueMinThumb(t)
    },
    preloadMozaiqueMinThumb: function(e) {
        if ("undefined" == typeof this.thumb_slide_min_preload[e]) {
            this.thumb_slide_min_preload[e] = 1,
            console.log("start preloading thumb min " + e);
            var t = createRequestObject();
            t.open("GET", this.thumb_slide_min + e + ".jpg", !0),
            t.onreadystatechange = function() {
                4 === t.readyState && t.status
            }
            ,
            t.send()
        }
    },
    send_debug_event: function(e, t) {
        if (!this.is_embed) {
            if ("loaded" === e) {
                if (this.debug_events.loaded)
                    return;
                this.debug_events.loaded = !0
            } else if ("playing" === e) {
                if (this.debug_events.playing)
                    return;
                this.debug_events.playing = !0
            } else if ("fullscreen" === e) {
                if (this.debug_events.fullscreen)
                    return;
                this.debug_events.fullscreen = !0
            } else if ("playerror" === e) {
                if (this.debug_events.playerror)
                    return;
                this.debug_events.playerror = !0
            } else if ("devicespeed" === e) {
                if (this.debug_events.devicespeed)
                    return;
                if (this.debug_events.devicespeed = !0,
                Math.random() < .8)
                    return
            } else if ("network_speed" === e) {
                if (this.debug_events.network_speed)
                    return;
                this.debug_events.network_speed = !0
            } else if ("many_errors" === e) {
                if (this.debug_events.many_errors)
                    return;
                this.debug_events.many_errors = !0
            } else if ("fakeplayerloaded" === e) {
                if (this.debug_events.fakeplayerloaded)
                    return;
                this.debug_events.fakeplayerloaded = !0
            } else if ("buffer_blocked" === e) {
                if (this.debug_events.buffer_blocked)
                    return;
                this.debug_events.buffer_blocked = !0,
                this.sendJsDebug()
            } else if ("buffer_timeout" === e) {
                if (this.debug_events.buffer_timeout)
                    return;
                this.debug_events.buffer_timeout = !0
            } else if ("buffer_duration" === e) {
                if (this.debug_events.buffer_duration)
                    return;
                this.debug_events.buffer_duration = !0
            }
            "loaded" !== e && "fakeplayerloaded" !== e || !this.is_premium_video || (t = "p");
            var i = this.id_cdn;
            if (this.use_hls && (e = "hls_" + e,
            i = this.id_cdn_hls),
            this.use_native_hls && (e = "hlsnative_" + e,
            i = this.id_cdn_hls),
            "hls_devicespeed" === e && (e = "devicespeed"),
            "hls_fullscreen" !== e) {
                console.log("Send debug event '" + e + "'");
                var r = createRequestObject();
                r.open("GET", "/html5player/" + e + "/" + this.id_video + "/" + i + "/" + (t || ""), !0),
                r.onreadystatechange = function() {
                    4 === r.readyState && r.status
                }
                ,
                r.send()
            }
        }
    },
    sendJsDebug: function() {
        var e = createRequestObject();
        e.open("POST", "/html5player/jsdebug/" + this.id_video + "/0", !0),
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        e.onreadystatechange = function() {
            4 === e.readyState && e.status
        }
        ,
        e.send("logs=" + encodeURIComponent(this.consolelog))
    },
    storageAvailable: function() {
        try {
            var e = window.localStorage
              , t = "__storage_test__";
            return e.setItem(t, t),
            e.removeItem(t),
            !0
        } catch (i) {
            return !1
        }
    },
    setLocalStorage: function(e, t, i) {
        if (!this.storageAvailable())
            return !1;
        var r = {
            value: t,
            expire: (new Date).getTime() / 1e3 + i
        };
        return console.log("setLocalStorage", e, r),
        localStorage.setItem(e, JSON.stringify(r))
    },
    getLocalStorage: function(e) {
        if (!this.storageAvailable())
            return !1;
        var t = localStorage.getItem(e);
        if (console.log("getLocalStorage", e, t),
        !t)
            return console.log("Key", e, "doesn't exist"),
            !1;
        var i = JSON.parse(t);
        return !!i && (i.expire < (new Date).getTime() / 1e3 ? (console.log("Key", e, "expire"),
        localStorage.removeItem(e),
        !1) : i.value)
    },
    sendPendingDuration: function() {
        var e = (new Date).getTime()
          , t = localStorage.getItem("durationsend_lock");
        if (t && e - t < 1e4)
            return void console.log("Duration send locked", t, e);
        localStorage.setItem("durationsend_lock", e);
        for (var i = 0; i < localStorage.length; i++) {
            var r = localStorage.key(i);
            if ("videoduration_" != r.substr(0, 14)) {
                if ("videoreport_" == r.substr(0, 12)) {
                    var s = {};
                    s.video_id = r.substr(14);
                    var o = localStorage.getItem(r);
                    s.cdn_id = 0,
                    s.duration = 0,
                    s.referer = "",
                    s.type = "unknown",
                    s.quality = -1,
                    s.transfer = -1,
                    s.buffer_sec = 0;
                    try {
                        var a = JSON.parse(o);
                        if (a.sended) {
                            (new Date).getTime() - a.timestamp > 36e5 && (localStorage.removeItem(r),
                            i--);
                            continue
                        }
                        if (!a.cdn_id || a.duration == undefined) {
                            console.log("Duration send: Bad JSON for " + r + " '" + o + "'"),
                            localStorage.setItem(r, JSON.stringify({
                                sended: !0,
                                timestamp: (new Date).getTime()
                            }));
                            continue
                        }
                        if ((new Date).getTime() - a.lasthit < 5e3)
                            continue;
                        if (!a.video_id) {
                            console.log("Duration send: Bad JSON for " + r + " '" + o + "'"),
                            localStorage.setItem(r, JSON.stringify({
                                sended: !0,
                                timestamp: (new Date).getTime()
                            }));
                            continue
                        }
                        s.video_id = a.video_id,
                        s.cdn_id = a.cdn_id,
                        s.duration = Math.round(a.duration),
                        a.referer && (s.referer = a.referer),
                        a.type && (s.type = a.type),
                        a.quality && (s.quality = Math.round(a.quality)),
                        a.transfer && (s.transfer = Math.round(a.transfer)),
                        a.buffer_sec && (s.buffer_sec = Math.round(a.buffer_sec))
                    } catch (d) {
                        console.log("Duration send: Unable to unjson " + r + " '" + o + "'"),
                        localStorage.setItem(r, JSON.stringify({
                            sended: !0,
                            timestamp: (new Date).getTime()
                        }));
                        continue
                    }
                    localStorage.setItem(r, JSON.stringify({
                        sended: !0,
                        timestamp: (new Date).getTime()
                    })),
                    console.log("Sending duration " + s.duration + " for video " + s.video_id);
                    var n = btoa(JSON.stringify(s))
                      , l = createRequestObject();
                    l.open("GET", "/html5player/play_duration/" + n, !0),
                    l.onreadystatechange = function() {
                        4 === l.readyState && l.status
                    }
                    ,
                    l.send()
                }
            } else
                localStorage.removeItem(r),
                i--
        }
        localStorage.removeItem("durationsend_lock")
    },
    compute_seekpercent: function(e) {
        var t = this.touch_getPosition(e)
          , i = this.progressbar.getBoundingClientRect();
        return t -= i ? i.left : this.progressbar.offsetLeft,
        1 / this.progressbar.offsetWidth * t
    },
    touch_getPosition: function(e) {
        return "undefined" != typeof e.touches && "undefined" != typeof e.touches[0] && e.touches[0].clientX ? e.touches[0].clientX : "undefined" != typeof e.targetTouches && "undefined" != typeof e.targetTouches[0] && e.targetTouches[0].clientX ? e.targetTouches[0].clientX : e.clientX ? e.clientX : e.pageX ? e.pageX : e.x
    },
    touch_getPositionY: function(e) {
        return "undefined" != typeof e.touches && "undefined" != typeof e.touches[0] && e.touches[0].clientY ? e.touches[0].clientY : "undefined" != typeof e.targetTouches && "undefined" != typeof e.targetTouches[0] && e.targetTouches[0].clientY ? e.targetTouches[0].clientY : e.clientY ? e.clientY : e.pageY ? e.pageY : e.y
    },
    getViewportHeight: function() {
        return "undefined" != typeof window.innerWidth ? window.innerHeight : "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? document.documentElement.clientHeight : document.getElementsByTagName("body")[0].clientHeight
    },
    hasFlash: function() {
        if (!this.flashcode_available)
            return !1;
        try {
            if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                return !0
        } catch (e) {
            if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] != undefined && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
                return !0
        }
        return !1
    },
    supportHLSjs: function() {
        if (!this.supportDefaultHlsjs())
            return console.log("supportDefaultHlsjs : false"),
            !1;
        if (/android 4.4./.test(navigator.userAgent.toLowerCase()))
            return console.log("supportHLSjs : false : Android 4.4 detected"),
            !1;
        var e = /chrome\/([0-9]+)\./.exec(navigator.userAgent.toLowerCase());
        return e && parseInt(e[1]) < 46 ? (console.log("supportHLSjs : false : Chrome < 46"),
        !1) : /windows phone 8.0/.test(navigator.userAgent.toLowerCase()) ? (console.log("supportHLSjs : false : Windows Phone 8.0"),
        !1) : (console.log("supportHLSjs : true"),
        !0)
    },
    supportDefaultHlsjs: function() {
        return "undefined" != typeof window.MediaSource && "undefined" != typeof window.MediaSource.isTypeSupported && ("undefined" != typeof Hls && !!Hls.isSupported())
    },
    sendDebugLogs: function() {
        this.consolelog
    },
    getPageCategories: function() {
        return "string" == typeof window.wpn_categories ? window.wpn_categories : "object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.ads && "string" == typeof xv.conf.ads.categories ? xv.conf.ads.categories : ""
    },
    getPageTags: function() {
        return "string" == typeof window.wpn_keywords ? window.wpn_keywords : "object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.ads && "string" == typeof xv.conf.ads.keywords ? xv.conf.ads.keywords : ""
    },
    initAutoPlaylistNextState: function() {
        localStorage.getItem("sLocalStorageAutoNext") ? this.sLocalStorageAutoNext = localStorage.getItem("sLocalStorageAutoNext") : (localStorage.setItem("sLocalStorageAutoNext", this.hasPlaylistAutoNext()),
        this.sLocalStorageAutoNext = localStorage.getItem("sLocalStorageAutoNext")),
        this.bPlautonext = "true" === this.sLocalStorageAutoNext
    },
    enablePlaylistAutoNext: function() {
        this.bPlautonext = !0,
        localStorage.setItem("sLocalStorageAutoNext", this.hasPlaylistAutoNext())
    },
    disablePlaylistAutoNext: function() {
        this.bPlautonext = !1,
        localStorage.setItem("sLocalStorageAutoNext", this.hasPlaylistAutoNext())
    },
    hasPlaylistAutoNext: function() {
        return this.bPlautonext
    },
    togglePlaylistAutoNext: function() {
        this.hasPlaylistAutoNext() ? this.disablePlaylistAutoNext() : this.enablePlaylistAutoNext()
    }
},
HTML5Player.TYPE_SMALL = "SMALL",
HTML5Player.TYPE_FULL = "FULL",
HTML5Player.TYPE_MINUTE = "MIN";
var loadPopup = function() {
    !function(e, t, i, r, s) {
        "use strict";
        e.popunder = function(i, r, s, o) {
            var a = e.popunder.helper;
            if (0 === arguments.length && (i = t.aPopunder),
            s || r)
                a.bindEvents(i, r, s);
            else if (i = "function" == typeof i ? i(o) : i,
            !0 !== a.ua.ie && !0 !== a.ua.g || (i = a.handleTargetBlank(i, o)),
            a.reset(),
            void 0 !== i) {
                do {
                    a.queue(i)
                } while (i.length > 0);
                a.queue(i)
            }
            return e
        }
        ,
        e.popunder.helper = {
            _top: t.self,
            lastWin: null,
            lastTarget: null,
            f: !1,
            last: !1,
            b: "about:blank",
            o: null,
            du: "__jqpu",
            ua: {
                ie: !!/msie|trident/i.test(r.userAgent),
                oldIE: !!/msie/i.test(r.userAgent),
                ff: !!/firefox/i.test(r.userAgent),
                o: !!/opera/i.test(r.userAgent),
                g: !!/chrome/i.test(r.userAgent),
                w: !!/webkit/i.test(r.userAgent),
                fl: !!r.mimeTypes["application/x-shockwave-flash"]
            },
            m: {
                g: "tab"
            },
            hs: [],
            def: {
                window: {
                    toolbar: 0,
                    scrollbars: 1,
                    location: 1,
                    statusbar: 1,
                    menubar: 0,
                    resizable: 1,
                    width: (i.availWidth - 122).toString(),
                    height: (i.availHeight - 122).toString(),
                    screenX: 0,
                    screenY: 0,
                    left: 0,
                    top: 0
                },
                name: "__pu",
                cookie: "__puc",
                blocktime: !1,
                skip: {
                    opera: !0,
                    ipad: !0
                },
                cb: null,
                fs: !1,
                popup: !1
            },
            setMethod: function(e, t) {
                var i = this;
                return i.m[e] = t,
                i
            },
            uaTest: function(e) {
                return !!new RegExp(e,"i").test(r.userAgent.toString())
            },
            queue: function(e) {
                var t = !1
                  , i = this;
                if (e.length > 0)
                    for (; !1 === t; ) {
                        var r = e.shift();
                        t = !r || i.open(r[0], r[1] || {}, e.length)
                    }
                else
                    !1 === i.last ? (i.last = !0,
                    i.bg().href(!0)) : i.f || i.ua.g || i.ua.ie || i.bg();
                return i
            },
            handler: function(e, t) {
                var i = this;
                "function" == typeof i.hs[e] && i.hs[e](t)
            },
            getTrigger: function(t) {
                return e("#" + t).parents(".jq-pu").children().eq(0)
            },
            trigger: function(e) {
                this.getTrigger(e).trigger("click")
            },
            bindEvents: function(t, i, r) {
                var s = this
                  , o = "string"
                  , a = s.hs.length
                  , n = function(e) {
                    return function(t) {
                        s.handler(e, t)
                    }
                }(a);
                return s.hs[a] = function(t) {
                    return function(i) {
                        return i && !i.target && (i = {
                            target: s.getTrigger(i)
                        }),
                        e.popunder(t, !1, !1, i),
                        !0
                    }
                }(t),
                i && !s.ua.g && (i = typeof i === o ? e(i) : i,
                i.on("submit", n)),
                r && (r = typeof r === o ? e(r) : r,
                r.on("click", n),
                s.ua.g && s.def.fs && s.ua.fl && s.overlay(r, a)),
                s
            },
            overlay: function(t, i) {
                var r = this;
                return t.each(function() {
                    var t = e(this)
                      , s = "absolute"
                      , o = t.css("position") === s ? "" : "position:relative;"
                      , a = r.rand("pub")
                      , n = t.wrap('<div class="jq-pu" style="display:inline-block; ' + o + '" />').parent()
                      , l = e('<object id="' + a + '" type="application/x-shockwave-flash" data="' + r.def.fs + '" />').css(e.extend(!0, {}, {
                        position: s,
                        cursor: "pointer",
                        top: o ? 0 : t.css("top"),
                        left: o ? 0 : t.css("left"),
                        padding: t.css("padding"),
                        margin: t.css("margin"),
                        width: t.width(),
                        height: t.height()
                    }));
                    l.append('<param name="wmode" value="transparent" />'),
                    l.append('<param name="menu" value="false" />'),
                    l.append('<param name="flashvars" value="id=' + a + "&hs=" + i + '" /">'),
                    n.append(l)
                }),
                r
            },
            cookieCheck: function(t, i) {
                var r = this
                  , s = r.rand(i.cookie, !1)
                  , o = e.cookie(s)
                  , a = !1;
                return o ? -1 === o.indexOf(t) ? o += t : a = !0 : o = t,
                e.cookie(s, o, {
                    expires: new Date((new Date).getTime() + 6e4 * i.blocktime)
                }),
                a
            },
            rand: function(e, t) {
                var i = this;
                return (e || i.du) + (!1 === t ? "" : Math.floor(89999999 * Math.random() + 1e7).toString()).replace(".", "")
            },
            open: function(i, r, s) {
                var o, a, n, l = this, d = "function";
                if (a = e.extend(!0, {}, l.def, r),
                n = a.skip,
                l.o = i,
                top !== t.self)
                    try {
                        top.document.location.toString() && (l._top = top)
                    } catch (u) {}
                for (o in n)
                    if (n.hasOwnProperty(o) && !0 === n[o] && l.uaTest(o))
                        return !1;
                return (!a.blocktime || typeof e.cookie !== d || !l.cookieCheck(i, a)) && (!0 === l.ua.g && "simple" !== l.ua.g && t.open("javascript:window.focus()", "_self", ""),
                i !== l.du && (l.lastTarget = i,
                !0 === l.ua.g && "tab" === l.m.g ? l.switcher.tab(l, l.o) : l.lastWin = l._top.window.open(l.o, l.rand(a.name, !r.name), l.getOptions(a.window)) || l.lastWin,
                !0 === l.ua.ff && l.bg(),
                l.href(s),
                typeof a.cb === d && a.cb()),
                !0)
            },
            bg: function(e) {
                var t = this;
                return t.lastWin && t.lastTarget && !e ? !0 === t.ua.ie ? t.switcher.simple(t) : t.ua.g || t.switcher.pop(t) : "oc" === e && t.switcher.pop(t),
                t
            },
            switcher: {
                simple: function(e) {
                    try {
                        e.lastWin.blur()
                    } catch (i) {}
                    t.focus()
                },
                pop: function(e) {
                    !function(t) {
                        try {
                            e.f = t.window.open("about:blank"),
                            e.f && e.f.close()
                        } catch (i) {}
                        try {
                            t.opener.window.focus()
                        } catch (i) {}
                    }(e.lastWin)
                },
                tab: function(i, r) {
                    var o = r || "data:text/html,<script>window.close();<\/script>;"
                      , a = !r
                      , n = e("<a/>", {
                        href: o
                    }).appendTo(s.body)
                      , l = s.createEvent("MouseEvents");
                    return a = "tab" === i.m.g ? !a : a,
                    l.initMouseEvent("click", !0, !0, t, 0, 0, 0, 0, 0, a, !1, !a, a, 0, null),
                    n[0].dispatchEvent(l),
                    n[0].parentNode.removeChild(n[0]),
                    i
                }
            },
            href: function(e) {
                var t, i = this;
                return e && i.lastTarget && i.lastWin && i.lastTarget !== i.b && i.lastTarget !== i.o && (!0 === i.ua.g && "simple" !== i.m.g ? (t = i.lastWin.document,
                t.open(),
                t.write("<html><head><title>" + s.title + '</title><script type="text/javascript">window.location="' + i.lastTarget + '";<\/script></head><body></body></html>'),
                t.close()) : i.lastWin.document.location.href = i.lastTarget),
                i
            },
            handleTargetBlank: function(t, i) {
                if (i && "undefined" != typeof i.target) {
                    var r, s = this, o = null, a = e(i.target);
                    !0 === a.is('input[type="submit"]') && (o = i.target.form),
                    o && "_blank" === o.target && (r = s.du,
                    s.ua.ie && (r = o.action + "/?" + e(o).serialize()),
                    t.unshift([r, {
                        popup: !0
                    }]))
                }
                return t
            },
            reset: function() {
                var e = this;
                return e.f = e.last = !1,
                e.lastTarget = e.lastWin = null,
                e
            },
            getOptions: function(e) {
                var t, i = [];
                for (t in e)
                    e.hasOwnProperty(t) && i.push(t + "=" + e[t]);
                return i.join(",")
            }
        }
    }(jQuery, window, screen, navigator, document);
    var e = function(e, t) {
        var i = new Date;
        i.setDate(i.getDate() + t);
        var r = escape(e) + (null == t ? "" : "; expires=" + i.toUTCString() + "; path=/");
        document.cookie = "wpn-popupunder=" + r
    }
      , t = function() {
        var e, t, i, r = document.cookie.split(";");
        for (e = 0; e < r.length; e++)
            if (t = r[e].substr(0, r[e].indexOf("=")),
            i = r[e].substr(r[e].indexOf("=") + 1),
            "wpn-popupunder" == (t = t.replace(/^\s+|\s+$/g, "")))
                return unescape(i)
    };
    window.openpop = function() {
        if (window.openpop_url) {
            t() || (e("1", 1),
            $.popunder([[window.openpop_url, {
                window: {
                    height: 768,
                    width: 1024
                },
                blocktime: 1
            }]]))
        }
    }
    ;
    var i = function() {
        return "string" == typeof window.wpn_categories ? window.wpn_categories : window.xv && window.xv.conf && window.xv.conf.dyn && window.xv.conf.dyn.ads && "string" == typeof window.xv.conf.dyn.ads.categories ? window.xv.conf.dyn.ads.categories : ""
    }
      , r = function() {
        return "string" == typeof window.wpn_keywords ? window.wpn_keywords : window.xv && window.xv.conf && window.xv.conf.dyn && window.xv.conf.dyn.ads && "string" == typeof window.xv.conf.dyn.ads.keywords ? window.xv.conf.dyn.ads.keywords : ""
    }
      , s = function() {
        var t = createRequestObject();
        t.open("POST", window.location.href, !0),
        t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        t.onreadystatechange = function() {
            if (4 === t.readyState) {
                if (200 !== t.status)
                    return void console.log("Unable to load ads");
                try {
                    var i = JSON.parse(t.responseText)
                } catch (s) {
                    return void console.log("Popunder (2) bad json")
                }
                if (i.url) {
                    var r = !1;
                    window.openpop_url = i.url,
                    $(document).click(function(e) {
                        if (!r) {
                            var t = $(e.target);
                            t.is("a,.btn,button,input,textarea,select") || 0 === t.parent().length || t.parents("a,.btn,button,input,textarea,select").length > 0 || (r = !0,
                            window.openpop())
                        }
                    })
                } else
                    e("1", 1)
            }
        }
        ,
        t.send("wpn_rpccall%5Bpop_categories%5D=" + encodeURI(i()))
    };
    t() || function() {
        if (window.xv && window.xv.conf && window.xv.conf.dyn) {
            if (window.xv.conf.dyn.spu || window.xv.conf.dyn.pjs && window[xv.conf.dyn.pjs])
                return;
            if (window.xv.conf.dyn.is_robot)
                return
        }
        var t = ""
          , o = ""
          , a = 0;
        window.xv && window.xv.conf && (o = "popupplayer",
        "xnxx" === window.xv.conf.sitename ? o = "znzzpopupplayer" : "pornorama" === window.xv.conf.sitename && (o = "pramapopupplayer"),
        window.xv.conf.dyn && window.xv.conf.dyn.ads && ("string" == typeof xv.conf.dyn.ads.tracker && (t = xv.conf.dyn.ads.tracker),
        "number" != typeof xv.conf.dyn.ads.is_channel || 0 !== xv.conf.dyn.ads.is_channel && 1 !== xv.conf.dyn.ads.is_channel || (a = xv.conf.dyn.ads.is_channel)));
        var n = createRequestObject();
        n.open("GET", window.location.protocol + "//www.iwanttodeliver.com/popupjson/xvideos/" + i() + "//" + t + "/" + o + "/" + encodeURIComponent(r()) + "/" + a.toFixed(0), !0),
        n.onreadystatechange = function() {
            if (4 === n.readyState) {
                if (200 !== n.status)
                    return void s();
                try {
                    var t = JSON.parse(n.responseText)
                } catch (r) {
                    return void console.log("Popunder (1) bad json")
                }
                if (t.url) {
                    var i = !1;
                    window.openpop_url = t.url,
                    $(document).click(function(e) {
                        if (!i) {
                            var t = $(e.target);
                            t.is("a,.btn,button,input,textarea,select") || 0 === t.parent().length || t.parents("a,.btn,button,input,textarea,select").length > 0 || (i = !0,
                            window.openpop())
                        }
                    })
                } else
                    e("1", 1)
            }
        }
        ;
        try {
            n.send()
        } catch (l) {
            return void s()
        }
    }()
};
