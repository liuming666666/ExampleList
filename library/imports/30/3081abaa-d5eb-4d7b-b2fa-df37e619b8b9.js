"use strict";
cc._RF.push(module, '3081auq1etNe7L63zfmGbi5', 'cullingGraphics');
// cases/camera/cullingGraphics.js

'use strict';

cc.Class({
    extends: cc.Component,

    onLoad: function onLoad() {
        var g = this.getComponent(cc.Graphics);
        if (g) {
            g.lineWidth = 10;
            g.fillColor = cc.hexToColor('#ff0000');

            g.moveTo(-20, 0);
            g.lineTo(0, -100);
            g.lineTo(20, 0);
            g.lineTo(0, 100);
            g.close();

            g.stroke();
            g.fill();
        }
    }
});

cc._RF.pop();