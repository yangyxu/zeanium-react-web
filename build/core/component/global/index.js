zn.react.global = zn.Class({
    static: true,
    methods: {
        init: function init() {
            this._jumpHandlers = [];
        },
        onJump: function onJump(handler, context) {
            this._jumpHandlers.push({
                handler: handler,
                context: context
            });

            return this;
        },
        fireJump: function fireJump() {
            this._jumpHandlers.map(function (item) {
                if (item.handler) {
                    item.handler.call(item.context);
                }
            });

            return this;
        }
    }
});

module.exports = zn.arrayValueToObject(['Ripple', 'Alert', 'Modal', 'Notify', 'Notification', 'Popover', 'Popup', 'Preloader', 'Toast', 'Tooltip'], function (value, index) {
    return require('./' + value + '.js');
});