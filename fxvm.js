(function()
{
    if(getCookie('disable_tracking') !== '1')
    {
        const params = new Proxy(new URLSearchParams(window.location.search),{
            get: (searchParams, prop) => searchParams.get(prop),
        });

        if(params.thcdpid) setCookie('_thcdpid', params.thcdpid, 180);
        if(params.gclid) setCookie('_thgclid', params.gclid, 180);
        if(params.wbraid) setCookie('_thwbraid', params.wbraid, 180);
        if(params.fbclid) setCookie('_thfbclid', params.fbclid, 180);
        if(params.msclkid) setCookie('_thmsclkid', params.msclkid, 180);
        if(params.twclid) setCookie('_thtwclid', params.twclid, 180);
        if(params.utm_source) setCookie('_thutmsource', params.utm_source, 180);
        if(params.utm_medium) setCookie('_thutmmedium', params.utm_medium, 180);
        if(params.utm_campaign) setCookie('_thutmcampaign', params.utm_campaign, 180);
        if(params.utm_term) setCookie('_thutmterm', params.utm_term, 180);
        if(params.utm_content) setCookie('_thutmcontent', params.utm_content, 180);

        var THCDPID = getCookie('_thcdpid');

        if(!THCDPID)
        {
            setCookie('_thcdpid', createTHCDPID(), 400);
            THCDPID = getCookie('_thcdpid');
        }
        else
        {
            THCDPID = getCookie('_thcdpid');
        }

        setCookie('_thcdpid', THCDPID, 400);

        var myCookies = getCookies();

        var userHit = {
            "thcdpid": THCDPID || '',
            "cookies": myCookies || '',
            "location": window.location.href || '',
            "referrer": window.document.referrer || '',
            "title": document.title || '',
            "ua": window.navigator.userAgent || '',
            "screen_w": (window.screen.width * window.devicePixelRatio) || '',
            "screen_h": (window.screen.height * window.devicePixelRatio) || '',
        };

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "https://cdp.fxvm.net/fxvm");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(userHit));
    }

    function getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function createTHCDPID()
    {
        return 'THCDP.1.' + getRandomInt(100000000, 999999999) + '.' + Math.floor(Date.now() / 1000);
    }

    function setCookie(name, value, days)
    {
        var expires = "";

        if(days)
        {
            var date = new Date();
            date.setTime(date.getTime() + (days*86400000));
            expires = "; expires=" + date.toUTCString();
        }

        document.cookie = name + "=" + (value || "")  + expires + "; path=/; domain=.fxvm.net";
    }

    function getCookie(name)
    {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for(var i = 0;i < ca.length; i++)
        {
            var c = ca[i];
            while (c.charAt(0) ===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }

        return null;
    }

    function getCookies()
    {
        var pairs = document.cookie.split(";");
        var cookies = {};

        for (var i = 0; i < pairs.length; i++)
        {
            var pair = pairs[i].split("=");
            cookies[(pair[0]+'').trim()] = decodeURIComponent(pair.slice(1).join('='));
        }

        return cookies;
    }

})();
