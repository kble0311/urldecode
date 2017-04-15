function urldecode(str) {
    return decodeURIComponent(str.replace(/\+/g, '%20'));
}

var uriText;
const decodeButton = document.getElementById('decode');
const copyButton = document.getElementById('copy');
const openButton = document.getElementById('open');
const uriDiv = document.getElementById('uri-div');
const noti = document.querySelector('.mdl-js-snackbar');

decodeButton.addEventListener('click', function() {
    var str = document.getElementById('encoded-uri').value;
    if (str.trim() != '') {
        var uri = urldecode(str);

        uriText = document.getElementById('decoded-uri');
        uriDiv.classList.add('is-dirty');
        uriText.value = uri;
        uriText.select();
        copyButton.classList.remove('hide');
        openButton.classList.remove('hide');
    } else {
        noti.MaterialSnackbar.showSnackbar({message: 'Enter Encoded URL First', timeout: 2000});
    }
});

copyButton.addEventListener('click', function() {
    uriText.select();
    document.execCommand('copy');
    noti.MaterialSnackbar.showSnackbar({message: 'URL Copied to Clipboard'});
});

openButton.addEventListener('click', function() {
    window.open(uriText.value);
});
