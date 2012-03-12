/**
 * This Component was developed for Chapter 8 of Sencha Touch in Action.
 *
 * http://www.manning.com/garcia2/
 *
 * new Ext.Container({
 *     fullscreen : true,
 *     items      : [
 *         {
 *             xtype  : 'imageloader',
 *             height : 250,
 *             width  : 250,
 *             src    : 'http://www.sencha.com/files/blog/old/blog/wp-content/uploads/2010/06/sencha-logo.png'
 *         }
 *     ]
 * });
 */

Ext.define('Ux.ImageLoader', {
    extend : 'Ext.Img',
    xtype  : 'imageloader',

    config : {
        baseCls   : Ext.baseCSSPrefix + 'img imageloader',
        loaderSrc : 'data:image/gif;base64,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',
        errorSrc  : 'data:image/png;base64,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',
        actualSrc : null
    },

    constructor : function(config) {
        config.actualSrc = config.src;
        config.src = null;

        this.callParent([config]);
    },

    beforeInitialize: function() {
        var me = this;

        me.onActualLoad = Ext.Function.bind(me.onActualLoad, me);
        me.onActualError = Ext.Function.bind(me.onActualError, me);

        me.callParent();

        me.setSrc(me.getLoaderSrc());
    },

    applyActualSrc : function(src) {
        var me    = this,
            image;

        if (src) {
            image = me.actualImageObject = new Image();

            image.addEventListener('load', me.onActualLoad, false);
            image.addEventListener('error', me.onActualError, false);
            image.setAttribute('src', Ext.isString(src) ? src : '');
        } else {
            image = me.actualImageObject;

            image.removeEventListener('load', me.onActualLoad, false);
            image.removeEventListener('error', me.onActualError, false);
        }

        return src;
    },

    onActualLoad : function(e) {
        var src = this.getActualSrc();

        this.setActualSrc(false);

        this.setSrc(src);
    },

    onActualError : function() {
        this.setSrc(this.getErrorSrc());
    }
});