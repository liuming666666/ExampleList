(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '189c1ckoZZHULnR52/pnCkv', 'DeviceMotionCtrl', __filename);
// cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 200,
        target: cc.Node,
        _time: 0,
        _range: cc.p(0, 0),
        _acc: cc.p(0, 0)
    },

    onLoad: function onLoad() {
        var screenSize = cc.view.getVisibleSize();
        this._range.x = screenSize.width / 2 - this.target.width / 2;
        this._range.y = screenSize.height / 2 - this.target.height / 2;
        cc.inputManager.setAccelerometerEnabled(true);
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    },
    onDestroy: function onDestroy() {
        cc.inputManager.setAccelerometerEnabled(false);
        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    },
    onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        this._acc.x = event.acc.x;
        this._acc.y = event.acc.y;
    },
    update: function update(dt) {
        var target = this.target,
            range = this._range;
        this._time += 5;
        target.x += this._acc.x * dt * (this.speed + this._time);
        target.x = cc.clampf(target.x, -range.x, range.x);
        target.y += this._acc.y * dt * (this.speed + this._time);
        target.y = cc.clampf(target.y, -range.y, range.y);

        if (target.x <= -range.x || target.x >= range.x || target.y <= -range.y || target.y >= range.y) {
            this._time = 0;
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
        //# sourceMappingURL=DeviceMotionCtrl.js.map
        