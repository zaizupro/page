window.addEventListener('click', function (evt) {
    if (evt.detail === 3) {
//        alert('triple click!');
        window.location.href = 'https://github.com/zaizupro/zaizupro.github.io'
    }
});

function opendat()
{
    var search_input = document.getElementById("search_input").value;
    window.open('https://www.youtube.com/results?search_query='+search_input);
}

document.getElementById('search_input').onkeypress = function(e)
{
    if (!e) e = window.event;
    if (e.keyCode == '13'){
        opendat();
        return false;
    }
}

/*                                                                                                */
function opendat_musicbrainz_search()
{
    var search_musicbrainz_input = document.getElementById("search_musicbrainz_input").value;
    window.open('https://musicbrainz.org/search?query='+search_musicbrainz_input+'&type=artist&method=indexed');
}

document.getElementById('search_musicbrainz_input').onkeypress = function(e)
{
    if (!e) e = window.event;
    if (e.keyCode == '13'){
        opendat_musicbrainz_search();
        return false;
    }
}

/*                                                                                                */
function opendat_lastfm()
{
    var search_lastfm_input = document.getElementById("search_lastfm_input").value;
    window.open('https://www.last.fm/search?q='+search_lastfm_input);
}

function opendat_lastfm_history()
{
    var user = document.getElementById("user_lastfm_input").value;
    var search_lastfm_input = document.getElementById("search_lastfm_input").value;
    window.open('https://www.last.fm/user/'+user+'/library/music/'+search_lastfm_input);
}

document.getElementById('search_lastfm_input').onkeypress = function(e)
{
    if (!e) e = window.event;
    if (e.keyCode == '13'){
        opendat_lastfm();
        return false;
    }
}

document.getElementById('user_lastfm_input').onkeypress = function(e)
{
    if (!e) e = window.event;
    if (e.keyCode == '13'){
        opendat_lastfm_history();
        return false;
    }
}
