"use strict";
cc._RF.push(module, '49ade5wuu9ILKDuwPmdIALx', 'Hittest');
// cases/collider/Hittest/Hittest.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        collider: {
            default: null,
            type: cc.PolygonCollider
        },

        title: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var _this = this;

        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;

        this.title.string = 'normal';

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function onTouchBegan(touch, event) {
                var touchLoc = touch.getLocation();

                if (cc.Intersection.pointInPolygon(touchLoc, _this.collider.world.points)) {
                    _this.title.string = 'Hit';
                } else {
                    _this.title.string = 'Not hit';
                }

                return true;
            }
        }, this.node);
    },

    onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();