document.getElementById('trigger').onclick = function (e) {
    document.getElementById('triggered').classList.toggle('visible');
}

document.getElementById('close').onclick = function(e) {
    document.getElementById('triggered').classList.remove('visible');
}

