function getQuery(url) {
    var theRequest = new Object(); // eslint-disable-line
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        str = str.split("&");
        for(var i = 0; i < str.length; i ++) {
            theRequest[str[i].split("=")[0]] = unescape(str[i].split("=")[1]);
        }
    }
    return theRequest;
}

export default getQuery