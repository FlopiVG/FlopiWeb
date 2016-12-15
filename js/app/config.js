requirejs.config({
    baseUrl: 'js/app',

    paths: {
        "react": "../../node_modules/react/dist/react",
        "reactDOM": "../../node_modules/react-dom/dist/react-dom",
        
        "backbone": "../thirdParty/backbone/backbone",
        "underscore": "../thirdParty/underscore/underscore",
        "marionette": "../thirdParty/marionette/backbone.marionette",
        "backbone.radio": "../thirdParty/marionette/backbone.radio",

        "jquery": "../thirdParty/jquery/jquery-3.1.1"
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        "backbone": {
            exports: 'backbone',
            deps: ['underscore']
        },
        'marionette': {
            deps: ['backbone']
        }
    }
});
require(['main']);
