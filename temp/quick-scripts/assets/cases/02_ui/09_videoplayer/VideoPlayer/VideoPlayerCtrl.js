(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/09_videoplayer/VideoPlayer/VideoPlayerCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '100b5UtyNJLNaih42ednEgN', 'VideoPlayerCtrl', __filename);
// cases/02_ui/09_videoplayer/VideoPlayer/VideoPlayerCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        videoPlayer: {
            default: null,
            type: cc.VideoPlayer
        },
        statusLabel: {
            default: null,
            type: cc.Label
        },
        currentTime: {
            default: null,
            type: cc.Label
        },
        totalTime: {
            default: null,
            type: cc.Label
        }
    },

    play: function play() {
        this.videoPlayer.play();
    },

    pause: function pause() {
        this.videoPlayer.pause();
    },

    toggleFullscreen: function toggleFullscreen() {
        if (cc.sys.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ && cc.sys.browserVersion <= 7.2 && /Nexus 6/.test(navigator.userAgent)) {
            return cc.log('May be crash, so prohibit full screen');
        }
        this.videoPlayer.isFullscreen = true;
    },

    stop: function stop() {
        this.videoPlayer.stop();
    },

    keepRatioSwitch: function keepRatioSwitch() {
        this.videoPlayer.keepAspectRatio = !this.videoPlayer.keepAspectRatio;
    },

    onVideoPlayerEvent: function onVideoPlayerEvent(sender, event) {
        this.statusLabel.string = event;
        if (event === cc.VideoPlayer.EventType.META_LOADED) {
            this.totalTime.string = this.videoPlayer.getDuration().toFixed(2);
        } else if (event === cc.VideoPlayer.EventType.CLICKED) {
            if (this.videoPlayer.isPlaying()) {
                this.videoPlayer.pause();
            } else {
                this.videoPlayer.play();
            }
        }
    },

    toggleVisibility: function toggleVisibility() {
        this.videoPlayer.enabled = !this.videoPlayer.enabled;
    },

    playOnlineVideo: function playOnlineVideo() {
        this.videoPlayer.resourceType = 0;
        this.videoPlayer.url = "http://benchmark.cocos2d-x.org/cocosvideo.mp4";
        this.videoPlayer.play();
    },

    update: function update() {
        if (this.currentTime) this.currentTime.string = parseFloat(this.videoPlayer.currentTime.toFixed(2));
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=VideoPlayerCtrl.js.map
        