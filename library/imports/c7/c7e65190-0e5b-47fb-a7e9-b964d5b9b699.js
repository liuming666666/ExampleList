"use strict";
cc._RF.push(module, 'c7e65GQDltH+6fpuWTVubaZ', 'ellipse');
// cases/graphics/example/ellipse.js

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

        g.circle(150, 0, 100);

        g.ellipse(-150, 0, 100, 70);

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