(function() {
    var domain = window.location.hostname.split('.');

    if (domain[domain.length - 1] == 'localhost') {
        domain.pop();
    }
    domain = domain.slice(-2, -1).join('');
    domain = domain ? domain : 'elmundo';

    var head = document.getElementsByTagName('head')[0];

    if (domain === 'expobeta') {
        domain = 'elmundo';
    }

    var pathname = window.location.pathname.substring(0, 8);

    if (domain === 'elmundo') {
        if (pathname === '/yodona' || pathname === '/yodona/') {
            domain = 'yodona';
        }
    }

    if (domain === 'expansion') {
        if (pathname === '/fuerade') {
            domain = 'fueradeserie';
        }
    }

    var favicon = document.createElement('link');
    favicon.rel = 'shortcut icon';
    favicon.href = '/favicon-' + domain + '.ico';

    head.appendChild(favicon);

    document.body.classList.add(domain);
})();
