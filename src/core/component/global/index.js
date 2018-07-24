zn.react.global = zn.Class({
    static: true,
    methods: {
        init: function (){
            this._jumpHandlers = [];
        },
        onJump: function (handler, context){
            this._jumpHandlers.push({
                handler: handler,
                context: context
            });

            return this;
        },
        fireJump: function (){
            this._jumpHandlers.map(function (item){
                if(item.handler) {
                    item.handler.call(item.context);
                }
            });

            return this;
        }
    }
});

module.exports = zn.arrayValueToObject([
    'Ripple',
    'Alert',
    'Modal',
    'Modals',
    'Notify',
    'Notification',
    'Popover',
    'Popup',
    'Preloader',
    'Toast',
    'Tooltip'
], function (value, index){
    return require('./'+value+'.js');
});
