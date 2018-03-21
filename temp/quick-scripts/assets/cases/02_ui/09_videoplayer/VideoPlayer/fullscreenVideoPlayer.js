(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/09_videoplayer/VideoPlayer/fullscreenVideoPlayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9df59JrUQBON5MdA5XnLTjl', 'fullscreenVideoPlayer', __filename);
// cases/02_ui/09_videoplayer/VideoPlayer/fullscreenVideoPlayer.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        videoPlayer: cc.VideoPlayer,
        title: cc.Label
    },

    // use this for initialization
    onLoad: function onLoad() {},

    videoPlayerEvent: function videoPlayerEvent(sender, event) {
        if (event === cc.VideoPlayer.EventType.READY_TO_PLAY) {
            this.videoPlayer.play();
        } else if (event === cc.VideoPlayer.EventType.CLICKED) {
            this.videoPlayer.node.removeFromParent();
            this.title.enabled = true;
        }
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
        //# sourceMappingURL=fullscreenVideoPlayer.js.map
        