


function getStorage() {

    var artistName = localStorage.getItem("artistName");
}



function search() {
    'use strict';

    for (var i = 0; i < Database.length; i++) {
        if (localStorage.artistName === Database[i].artist) {
            document.write(Database[i].artist + ' , ' + Database[i].title);

        }
    }
}

function init () {
    getStorage();
    search();
}
window.onload =init;
