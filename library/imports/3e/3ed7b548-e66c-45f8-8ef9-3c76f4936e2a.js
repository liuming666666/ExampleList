"use strict";
cc._RF.push(module, '3ed7bVI5mxF+I75PHb0k24q', 'lineTo');
// cases/graphics/example/lineTo.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.WHITE);
        }

        var g = this.getComponent(cc.Graphics);

        g.lineWidth = 10;
        g.fillColor = cc.hexToColor('#ff0000');

        g.moveTo(-20, 0);
        g.lineTo(0, -100);
        g.lineTo(20, 0);
        g.lineTo(0, 100);
        g.close();

        g.stroke();
        g.fill();
    },

    onDisable: function onDisable() {
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.BLACK);
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();