(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/graphics/example/arc.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a556aaUmwpNjJWPRek7CPtI', 'arc', __filename);
// cases/graphics/example/arc.js

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

        g.lineWidth = 5;
        g.fillColor = cc.hexToColor('#ff0000');

        g.arc(0, 0, 100, Math.PI / 2, Math.PI, false);
        g.lineTo(0, 0);
        g.close();

        g.stroke();
        g.fill();

        g.fillColor = cc.hexToColor('#00ff00');

        g.arc(-10, 10, 100, Math.PI / 2, Math.PI, true);
        g.lineTo(-10, 10);
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
        //# sourceMappingURL=arc.js.map
        