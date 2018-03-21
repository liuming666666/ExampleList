"use strict";
cc._RF.push(module, 'cb585k+cxFKjohloTN1+FuU', 'ComeBackToAssetLoad');
// cases/05_scripting/07_asset_loading/AssetLoading/ComeBackToAssetLoad.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {},

    onComeBlack: function onComeBlack() {
        cc.director.loadScene("AssetLoading.fire");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();