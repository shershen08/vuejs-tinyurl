const API_CODE = 'xxx';
const apiUrl = 'https://tiny-url.info/api/v1/create';

/***
 * methods
 ***/
let shortenUrl = () => {
    var url = document.getElementById('url');
    if (url.value) {
        ajaxCallFunction(url.value, uiUpdateCallback);
    }
}
let uiUpdateCallback = (resulstUrl) => {
    var res = document.getElementById('result');
    res.innerHTML = resulstUrl;
}
let ajaxCallFunction = (url, callback) => {

    const params = 'apikey=' + API_CODE +
        '&format=json&url=' + url;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                callback(this.response);
            } else {
                //errorCallback(this.statusText, this.status);
            }
        }
    };

    xhr.open('POST', apiUrl);
    xhr.send(params);
}
var button = document.getElementById('sendajax');
button.addEventListener('click', shortenUrl);

/*
example html:

<input type="text" id="url" />
<div id="result">

</div>
<button type="button" id="sendajax">
send
</button>
*/
