(function() {

    /**
     * Install plugin
     * @param Vue
     */

    function plugin(Vue) {

        if (plugin.installed) {
            return;
        }

        const API_CODE = 'xxx';
        const apiUrl = 'https://tiny-url.info/api/v1/create';

        Vue.tinyurl = {
            apiKey: '',
            getShortUrl: function(longUrl, successCallback) {

                const params = 'apikey=' + API_CODE + '&format=json&url=' + longUrl;
                var xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            successCallback(this.response);
                        }
                    }
                };

                xhr.open('POST', apiUrl);
                xhr.send(params);

            }
        }

    }

    if (typeof exports == "object") {
        module.exports = plugin;
    } else if (typeof define == "function" && define.amd) {
        define([], function() {
            return plugin
        });
    } else if (window.Vue) {
        Vue.use(plugin);
    }

})();
