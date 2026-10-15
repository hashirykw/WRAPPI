/* Wrappi — boot (runs first, in <head>). Reads the page's settings, flags JS + WebGL support,
   and makes clean links work when the site is opened from disk or a plain local server. */
(function () {
  var html = document.documentElement;
  html.classList.add('js', 'wr-pre');
  setTimeout(function () { html.classList.remove('wr-pre'); }, 2500);

  /* theme: the visitor's own choice (light / dark), set before anything is painted so there's no flash */
  var th = null; try { th = localStorage.getItem('wrappi-theme'); } catch (e) {}
  if (th !== 'light' && th !== 'dark') th = 'dark';
  html.setAttribute('data-theme', th);
  var mc = document.getElementById('themeColor'); if (mc) mc.setAttribute('content', th === 'light' ? '#f3f2ee' : '#0b0c0e');

  var cfg = document.getElementById('wr-data');
  try { window.WR = JSON.parse(cfg ? cfg.textContent : '{}'); } catch (e) { window.WR = { lang: 'no', routes: {} }; }

  /* language: Norwegian by default. Once the visitor has picked a language (header NO/EN or the cookie bar),
     any page opened fresh — a bookmark, a shared link, a search result, the bare address — opens in that language.
     Back/forward and reloads are left alone, and search engines (no saved pick) always get the page as it is. */
  (function () {
    var W = window.WR || {}, pref = null;
    try { pref = localStorage.getItem('wrappi-lang'); } catch (e) {}
    if ((pref !== 'no' && pref !== 'en') || !W.lang || pref === W.lang || !W.other) return;
    var nt = '';
    try { var en = performance.getEntriesByType && performance.getEntriesByType('navigation')[0]; nt = en ? en.type : ''; } catch (e) {}
    if (!nt && performance.navigation) nt = ['navigate', 'reload', 'back_forward'][performance.navigation.type] || '';
    if (nt === 'reload' || nt === 'back_forward') return;
    try { var last = +sessionStorage.getItem('wrappi-hop') || 0; if (Date.now() - last < 4000) return; sessionStorage.setItem('wrappi-hop', String(Date.now())); } catch (e) {}
    var to = W.other, loc = location;
    if (loc.protocol === 'file:' || /\.html$/.test(loc.pathname)) to = (to === './' || to === '.' || to === '/') ? 'index.html' : to + '.html';
    var u; try { u = new URL(to, loc.href); } catch (e) { return; }
    u.search = loc.search; u.hash = loc.hash;
    html.classList.add('wr-go');
    setTimeout(function () { html.classList.remove('wr-go'); }, 1500);
    loc.replace(u.href);
  })();

  try {
    var cv = document.createElement('canvas'), nc = navigator.connection;
    if ((cv.getContext('webgl2') || cv.getContext('webgl')) && !(nc && (nc.saveData || /2g/.test(nc.effectiveType || '')))) html.classList.add('can3d');
  } catch (e) {}

  /* links are written clean (ppf, en-ppf, ./). Hosts with clean URLs serve them as they are;
     from disk or a plain local server we add ".html" the moment a link is used. */
  var l = location, h = l.hostname;
  if (!(l.protocol === 'file:' || /\.html$/.test(l.pathname) || !h || /^(localhost|127\.|0\.0\.0\.0|10\.|192\.168\.)/.test(h))) return;
  function fx(e) {
    var a = e.target && e.target.closest && e.target.closest('a[href]');
    if (!a || a.hasAttribute('data-fx')) return;
    a.setAttribute('data-fx', '');
    var v = a.getAttribute('href');
    if (/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(v)) return;
    var m = v.match(/^([^?#]*)(.*)$/), p = m[1];
    if (!p || /\.[a-z0-9]{2,5}$/i.test(p)) return;
    p = (p === './' || p === '.' || p === '/') ? 'index.html' : p.replace(/\/$/, '') + '.html';
    a.setAttribute('href', p + m[2]);
  }
  ['pointerdown', 'click', 'auxclick', 'focusin', 'contextmenu'].forEach(function (t) { document.addEventListener(t, fx, true); });
})();
