(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/04_audio/AudioEngineControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '251cfXAScNHQqBfLlu2ffSn', 'AudioEngineControl', __filename);
// cases/04_audio/AudioEngineControl.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            url: cc.AudioClip,
            default: null
        },

        label: {
            type: cc.Label,
            default: null
        }
    },

    onLoad: function onLoad() {
        this.maxNum = cc.audioEngine.getMaxAudioInstance();
        this.audioPool = [];

        // check deprecated
        ['playMusic', 'playEffect'].forEach(function (name) {
            if (!cc.audioEngine[name]) {
                cc.warn('.' + name + ' is not found!');
            }
        });
    },

    update: function update() {
        if (!this.label) return;
        for (var i = 0; i < this.audioPool.length; i++) {
            var id = this.audioPool[i];
            var state = cc.audioEngine.getState(id);
            if (state < 0) {
                this.audioPool.splice(i, 1);
                i--;
            }
        }
        this.label.string = 'Instance: ' + this.audioPool.length + ' / ' + this.maxNum;
    },

    play: function play() {
        if (!this.audio) return;
        var id = cc.audioEngine.play(this.audio, false, 1);
        this.audioPool.push(id);
    },

    stopAll: function stopAll() {
        if (!this.audio) return;
        cc.audioEngine.stopAll();
    },

    pauseAll: function pauseAll() {
        if (!this.audio) return;
        cc.audioEngine.pauseAll();
    },

    resumeAll: function resumeAll() {
        if (!this.audio) return;
        cc.audioEngine.resumeAll();
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
        //# sourceMappingURL=AudioEngineControl.js.map
        