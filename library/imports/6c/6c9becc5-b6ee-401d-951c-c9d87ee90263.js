"use strict";
cc._RF.push(module, '6c9bezFtu5AHZUcydh+6QJj', 'TipsManager');
// scripts/Global/TipsManager.js

'use strict';

//
// 用于提示用户哪些范例不支持平台
//
var i18n = require('i18n');

// 平台检查
var PlatformType = cc.Enum({
    None: 0,
    Native: 1,
    Native_Desktop: 2,

    Mobile: 10,
    Mobile_Android: 11,

    Runtime: 20,

    WebGl: 30,
    Canvas: 31,

    Native_Browser_Chrome: 100
});

var canvas = null;

cc.Class({
    extends: cc.Component,

    properties: {
        support: false,
        // 需要检测的平台
        platform: {
            default: PlatformType.Node,
            type: PlatformType
        }
    },

    onLoad: function onLoad() {
        this._showTips();
    },
    _checkNonSupport: function _checkNonSupport() {
        var showed = false,
            textKey = '';
        switch (this.platform) {
            case PlatformType.Native_Desktop:
                showed = cc.sys.isNative && (cc.sys.platform === cc.sys.WIN32 || cc.sys.platform === cc.sys.MACOS);
                textKey = i18n.t("example_case_nonsupport_native_desktop_tips");
                break;
            case PlatformType.Mobile:
                showed = cc.sys.isMobile;
                textKey = i18n.t("example_case_nonsupport_mobile_tips");
                break;
            case PlatformType.Runtime:
                showed = cc.runtime;
                textKey = i18n.t("example_case_nonsupport_runtime_tips");
                break;
            case PlatformType.Canvas:
                showed = cc._renderType === cc.game.RENDER_TYPE_CANVAS;
                textKey = i18n.t("example_case_nonsupport_web_canvas_tips");
                break;
        }
        return {
            showed: showed,
            textKey: textKey
        };
    },
    _checkSupport: function _checkSupport() {
        var showed = false,
            textKey = '';
        switch (this.platform) {
            case PlatformType.Mobile:
                showed = !cc.sys.isMobile || cc.runtime;
                textKey = i18n.t("example_case_support_mobile_tips");
                break;
            case PlatformType.WebGl:
                showed = cc._renderType !== cc.game.RENDER_TYPE_WEBGL;
                textKey = i18n.t("example_case_support_webGl_tips");
                break;
            case PlatformType.Mobile_Android:
                showed = !(cc.sys.isMobile && cc.sys.platform === cc.sys.ANDROID) || cc.runtime;
                textKey = i18n.t("example_case_support_mobile_android_tips");
                break;
            case PlatformType.Native_Browser_Chrome:
                showed = !(!cc.sys.isMobile && cc.sys.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_CHROME);
                textKey = i18n.t("example_case_support_native_chrome_tips");
                break;
        }
        return {
            showed: showed,
            textKey: textKey
        };
    },
    _showTips: function _showTips() {
        if (this.platform === PlatformType.None) {
            return;
        }
        var info = this.support ? this._checkSupport() : this._checkNonSupport();
        var bg = this.node.getComponent(cc.Sprite);
        bg.enabled = info.showed;
        if (info.showed) {
            var content = this.node.getChildByName('Content').getComponent(cc.Label);
            content.textKey = info.textKey;
        }
    }
});

cc._RF.pop();