requirejs.config({
    baseUrl: 'js/app',

    paths: {
        "react": "../../node_modules/react/dist/react",
        "reactDOM": "../../node_modules/react-dom/dist/react-dom"
    }
});
require(['main']);
