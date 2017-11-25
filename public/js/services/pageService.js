const pageService = function () {
    let defaults = {
        title: 'Railium'
    };

    let properties = {};

    return {
        hasDefaultPropety: function (key) {
            return defaults.hasOwnProperty(key);
        },
        hasProperty: function (key) {
            return properties.hasOwnProperty(key);
        },
        getProperty: function (key) {
            return this.hasProperty(key) ? properties[key] : (defaults.hasOwnProperty(key) ? defaults[key] : undefined);
        },
        setProperty: function (key, value) {
            properties[key] = value;
        },
        pushState: function (url) {
            window.history.pushState({html: document.documentElement.outerHTML}, this.getProperty('title'), url);
        }
    };
};
