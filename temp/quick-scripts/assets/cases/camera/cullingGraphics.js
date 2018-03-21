(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/camera/cullingGraphics.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3081auq1etNe7L63zfmGbi5', 'cullingGraphics', __filename);
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
        //# sourceMappingURL=cullingGraphics.js.map
        