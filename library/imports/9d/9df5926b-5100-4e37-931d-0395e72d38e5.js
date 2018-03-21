"use strict";
cc._RF.push(module, '9df59JrUQBON5MdA5XnLTjl', 'fullscreenVideoPlayer');
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