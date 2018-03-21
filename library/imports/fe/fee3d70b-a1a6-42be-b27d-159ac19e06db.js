"use strict";
cc._RF.push(module, 'fee3dcLoaZCvrJ9FZrBngbb', 'loadResDir_example');
// cases/05_scripting/07_asset_loading/LoadResDir/loadResDir_example.js

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

cc.Class({
    extends: cc.Component,

    properties: {
        btnClearAll: cc.Node,
        label: cc.Prefab,
        scrollView: cc.ScrollView
    },

    _init: function _init() {
        this._assets = [];
        this._hasLoading = false;
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
    },

    onLoad: function onLoad() {
        this._init();
    },

    _createLabel: function _createLabel(text) {
        var node = cc.instantiate(this.label);
        var label = node.getComponent(cc.Label);
        label.textKey = text;
        this.scrollView.content.addChild(node);
    },

    _clear: function _clear() {
        this.scrollView.content.removeAllChildren(true);
        for (var i = 0; i < this._assets.length; ++i) {
            var asset = this._assets[i];
            // 目前载入 plist 后的 Object 资源没有包含 _uuid 所以无法 release（PS：1.5 版本会加 _uuid）
            // 暂时过滤 Object 并且没有 _uuid 类型的资源
            if ((typeof asset === "undefined" ? "undefined" : _typeof(asset)) === 'object' && !asset._uuid) {
                continue;
            }
            cc.loader.release(this._assets[i]);
        }
    },

    onClearAll: function onClearAll() {
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
        this._clear();
    },

    onLoadAll: function onLoadAll() {
        var _this = this;

        if (this._hasLoading) {
            return;
        }
        this._hasLoading = true;
        this._clear();
        this._createLabel("Load All Assets");
        this.scrollView.scrollToTop();
        cc.loader.loadResDir("test assets", function (err, assets) {
            if (!_this.isValid) {
                return;
            }

            _this._assets = assets;
            var text = "";
            for (var i = 0; i < assets.length; ++i) {
                if (typeof assets[i] === 'string') {
                    text = assets[i];
                } else {
                    text = assets[i].url || assets[i]._name || assets[i];
                }
                if (typeof text !== 'string') {
                    continue;
                }
                _this._createLabel(text);
            }
            _this._hasLoading = false;
            _this.btnClearAll.active = true;
        });
    },

    onLoadSpriteFrameAll: function onLoadSpriteFrameAll() {
        var _this2 = this;

        if (this._hasLoading) {
            return;
        }
        this._hasLoading = true;
        this._clear();
        this._createLabel("Load All Sprite Frame");
        this.scrollView.scrollToTop();
        cc.loader.loadResDir("test assets", cc.SpriteFrame, function (err, assets) {
            if (!_this2.isValid) {
                return;
            }
            _this2._assets = assets;
            var text = "";
            for (var i = 0; i < assets.length; ++i) {
                if (typeof assets[i] === 'string') {
                    text = assets[i];
                } else {
                    text = assets[i].url || assets[i]._name || assets[i];
                }
                _this2._createLabel(text);
            }
            _this2._hasLoading = false;
            _this2.btnClearAll.active = true;
        });
    }

});

cc._RF.pop();