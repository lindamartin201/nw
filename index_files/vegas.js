"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
  return typeof t }
: function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
function _defineProperty(t, s, i) {
  return s in t ? Object.defineProperty(t, s, {
                                         value: i, enumerable: !0, configurable: !0, writable: !0 }
                                        ) : t[s] = i, t }
!function (w) {
  var e = {
  slide: 0, delay: 5e3, loop: !0, preload: !1, preloadImage: !1, preloadVideo: !1, timer: !0, overlay: !1, autoplay: !0, shuffle: !1, cover: !0, color: null, align: "center", valign: "center", firstTransition: null, firstTransitionDuration: null, transition: "fade", transitionDuration: 1e3, transitionRegister: [], animation: null, animationDuration: "auto", animationRegister: [], slidesToKeep: 1, init: function () {
  }
   , play: function () {
   }
   , pause: function () {
   }
   , walk: function () {
   }
   , slides: [] }
              , n = {
              }
              , t = function (t, s) {
                this.elmt = t, this.settings = w.extend({
                  }
                  , e, w.vegas.defaults, s), this.slide = this.settings.slide, this.total = this.settings.slides.length, this.noshow = this.total < 2, this.paused = !this.settings.autoplay || this.noshow, this.ended = !1, this.$elmt = w(t), this.$timer = null, this.$overlay = null, this.$slide = null, this.timeout = null, this.first = !0, this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"], this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"], this.settings.transitionRegister instanceof Array == 0 && (this.settings.transitionRegister = [this.settings.transitionRegister]), this.settings.animationRegister instanceof Array == 0 && (this.settings.animationRegister = [this.settings.animationRegister]), this.transitions = this.transitions.concat(this.settings.transitionRegister), this.animations = this.animations.concat(this.settings.animationRegister), this.support = {
                objectFit: "objectFit" in document.body.style, transition: "transition" in document.body.style || "WebkitTransition" in document.body.style, video: w.vegas.isVideoCompatible() }
                , !0 === this.settings.shuffle && this.shuffle(), this._init() };
              t.prototype = {
              _init: function () {
              var t, s, i, e = "BODY" === this.elmt.tagName, n = this.settings.timer, o = this.settings.overlay, a = this;
              this._preload(), e || (this.$elmt.css("height", this.$elmt.css("height")), t = w('<div class="vegas-wrapper">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")), this.$elmt.css("padding") || t.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")), this.$elmt.clone(!0).children().appendTo(t), this.elmt.innerHTML = ""), n && this.support.transition && (i = w('<div class="vegas-timer"><div class="vegas-timer-progress">'), this.$timer = i, this.$elmt.prepend(i)), o && (s = w('<div class="vegas-overlay">'), "string" == typeof o && s.css("background-image", "url(" + o + ")"), this.$overlay = s, this.$elmt.prepend(s)), this.$elmt.addClass("vegas-container"), e || this.$elmt.append(t), setTimeout(function () {
              a.trigger("init"), a._goto(a.slide), a.settings.autoplay && a.trigger("play") }
              , 1) }
              , _preload: function () {
              var t;
              for (t = 0;
              t < this.settings.slides.length;
              t++)(this.settings.preload || this.settings.preloadImages) && this.settings.slides[t].src && ((new Image).src = this.settings.slides[t].src), (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[t].video && (this.settings.slides[t].video instanceof Array ? this._video(this.settings.slides[t].video) : this._video(this.settings.slides[t].video.src)) }
  , _random: function (t) {
    return t[Math.floor(Math.random() * t.length)] }
  , _slideShow: function () {
    var t = this;
    1 < this.total && !this.ended && !this.paused && !this.noshow && (this.timeout = setTimeout(function () {
      t.next() }
                                                                                                 , this._options("delay"))) }
  , _timer: function (t) {
    var s = this;
    clearTimeout(this.timeout), this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"), this.ended || this.paused || this.noshow || t && setTimeout(function () {
      s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", s._options("delay") - 100 + "ms") }
                                                                                                                                                                                                           , 100)) }
  , _video: function (t) {
    var s, i, e = t.toString();
    return n[e] ? n[e] : (t instanceof Array == 0 && (t = [t]), (s = document.createElement("video")).preload = !0, t.forEach(function (t) {
      (i = document.createElement("source")).src = t, s.appendChild(i) }
                                                                                                                              ), n[e] = s) }
  , _fadeOutSound: function (t, s) {
    var i = this, e = s / 10, n = t.volume - .09;
    0 < n ? (t.volume = n, setTimeout(function () {
      i._fadeOutSound(t, s) }
                                       , e)) : t.pause() }
  , _fadeInSound: function (t, s) {
    var i = this, e = s / 10, n = t.volume + .09;
    n < 1 && (t.volume = n, setTimeout(function () {
      i._fadeInSound(t, s) }
                                        , e)) }
  , _options: function (t, s) {
    return void 0 === s && (s = this.slide), void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t] }
  , _goto: function (t) {
    function s() {
      m._timer(!0), setTimeout(function () {
        v && (m.support.transition ? (r.css("transition", "all " + y + "ms").addClass("vegas-transition-" + v + "-out"), r.each(function () {
          var t = r.find("video").get(0);
          t && (t.volume = 1, m._fadeOutSound(t, y)) }
                                                                                                                                ), i.css("transition", "all " + y + "ms").addClass("vegas-transition-" + v + "-in")) : i.fadeIn(y));
        for (var t = 0; t < r.length - m.settings.slidesToKeep; t++)r.eq(t).remove();
        m.trigger("walk"), m._slideShow() }
                                , 100) }
    void 0 === this.settings.slides[t] && (t = 0), this.slide = t;
    var i, e, n, o, a, r = this.$elmt.children(".vegas-slide"), d = this.settings.slides[t].src, l = this.settings.slides[t].video, h = this._options("delay"), c = this._options("align"), g = this._options("valign"), u = this._options("cover"), p = this._options("color") || this.$elmt.css("background-color"), m = this, f = r.length, v = this._options("transition"), y = this._options("transitionDuration"), b = this._options("animation"), _ = this._options("animationDuration");
    this.settings.firstTransition && this.first && (v = this.settings.firstTransition || v), this.settings.firstTransitionDuration && this.first && (y = this.settings.firstTransitionDuration || y), this.first && (this.first = !1), "repeat" !== u && (!0 === u ? u = "cover" : !1 === u && (u = "contain")), ("random" === v || v instanceof Array) && (v = v instanceof Array ? this._random(v) : this._random(this.transitions)), ("random" === b || b instanceof Array) && (b = b instanceof Array ? this._random(b) : this._random(this.animations)), ("auto" === y || h < y) && (y = h), "auto" === _ && (_ = h), i = w('<div class="vegas-slide"></div>'), this.support.transition && v && i.addClass("vegas-transition-" + v), this.support.video && l ? ((o = l instanceof Array ? this._video(l) : this._video(l.src)).loop = void 0 === l.loop || l.loop, o.muted = void 0 === l.mute || l.mute, !1 === o.muted ? (o.volume = 0, this._fadeInSound(o, y)) : o.pause(), n = w(o).addClass("vegas-video").css("background-color", p), this.support.objectFit ? n.css("object-position", c + " " + g).css("object-fit", u).css("width", "100%").css("height", "100%") : "contain" === u && n.css("width", "100%").css("height", "100%"), i.append(n)) : (a = new Image, e = w('<div class="vegas-slide-inner"></div>').css("background-image", "url("+d+")").css("background-color", p).css("background-position", c + " " + g), "repeat" === u ? e.css("background-repeat", "repeat") : e.css("background-size", u), this.support.transition && b && e.addClass("vegas-animation-" + b).css("animation-duration", _ + "ms"), i.append(e)), this.support.transition || i.css("display", "none"), f ? r.eq(f - 1).after(i) : this.$elmt.prepend(i), r.css("transition", "all 0ms").each(function () {
      this.className = "vegas-slide", "VIDEO" === this.tagName && (this.className += " vegas-video"), v && (this.className += " vegas-transition-" + v, this.className += " vegas-transition-" + v + "-in") }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ), m._timer(!1), o ? (4 === o.readyState && (o.currentTime = 0), o.play(), s()) : (a.src = d, a.complete ? s() : a.onload = s) }
  , _end: function () {
    this.ended = !0, this._timer(!1), this.trigger("end") }
  , shuffle: function () {
    for (var t, s, i = this.total - 1; 0 < i; i--)s = Math.floor(Math.random() * (i + 1)), t = this.settings.slides[i], this.settings.slides[i] = this.settings.slides[s], this.settings.slides[s] = t }
  , play: function () {
    this.paused && (this.paused = !1, this.next(), this.trigger("play")) }
  , pause: function () {
    this._timer(!1), this.paused = !0, this.trigger("pause") }
  , toggle: function () {
    this.paused ? this.play() : this.pause() }
  , playing: function () {
    return !this.paused && !this.noshow }
  , current: function (t) {
    return t ? {
    slide: this.slide, data: this.settings.slides[this.slide] }
    : this.slide }
  , jump: function (t) {
    t < 0 || t > this.total - 1 || t === this.slide || (this.slide = t, this._goto(this.slide)) }
  , next: function () {
    if (this.slide++ , this.slide >= this.total) {
      if (!this.settings.loop) return this._end();
      this.slide = 0 }
    this._goto(this.slide) }
  , previous: function () {
    if (this.slide-- , this.slide < 0) {
      if (!this.settings.loop) return void this.slide++;
      this.slide = this.total - 1 }
    this._goto(this.slide) }
  , trigger: function (t) {
    var s;
    s = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]], this.$elmt.trigger("vegas" + t, s), "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s) }
  , options: function (t, s) {
    var i = this.settings.slides.slice();
    if ("object" == (void 0 === t ? "undefined" : _typeof(t))) this.settings = w.extend({
      }
      , e, w.vegas.defaults, t);
    else {
      if ("string" != typeof t) return this.settings;
      if (void 0 === s) return this.settings[t];
      this.settings[t] = s }
    this.settings.slides !== i && (this.total = this.settings.slides.length, this.noshow = this.total < 2, this._preload()) }
  , destroy: function () {
    clearTimeout(this.timeout), this.$elmt.removeClass("vegas-container"), this.$elmt.find("> .vegas-slide").remove(), this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt), this.$elmt.find("> .vegas-wrapper").remove(), this.settings.timer && this.$timer.remove(), this.settings.overlay && this.$overlay.remove(), this.elmt._vegas = null }
}
, w.fn.vegas = function (s) {
  var i, e = arguments, n = !1;
  if (void 0 === s || "object" == (void 0 === s ? "undefined" : _typeof(s))) return this.each(function () {
    this._vegas || (this._vegas = new t(this, s)) }
                                                                                              );
  if ("string" == typeof s) {
    if (this.each(function () {
      var t = this._vegas;
      if (!t) throw new Error("No Vegas applied to this element.");
      "function" == typeof t[s] && "_" !== s[0] ? i = t[s].apply(t, [].slice.call(e, 1)) : n = !0 }
                                                                     ), n) throw new Error('No method "' + s + '" in Vegas.');
                                                                     return void 0 !== i ? i : this }
                                                                     }
                                                                     , w.vegas = {
                                                                     }
                                                                     , w.vegas.defaults = e, w.vegas.isVideoCompatible = function () {
                                                                     return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent) }
                                                                     }
                                                                     (window.jQuery || window.Zepto)
                                                                     