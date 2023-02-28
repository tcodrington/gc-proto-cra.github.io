/*!
 * Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)
 * Version 4.0.44 - 2021-12-07
 *
 */
var wet;void 0===(wet=void 0===wet?{}:wet).builder&&(wet.builder={}),wet.builder.environment=function(n){var e;if("esdcqat"===n)e="https://cdn-canada.services.gc.qat/app/cls/WET";else if("esdcnonprod"===n)e="https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET";else if("esdcprod"===n)e="https://ssl-templates.services.gc.ca/app/cls/WET";else if("localhost"===n)e="../../../..";else{if(null!=n&&n.startsWith("http"))return n;e="/etc/designs/canada/cdts"}return e+"/gcweb/v4_0_44/"},wet.builder.appFooter=function(n,e,a,i){e=e||function(n){var e={"<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};return null==n?"":String(n).replace(/[<>'"]/g,function(n){return e[n]||n})};var t,l,s="";function r(n){null!=n&&(s+=n)}if(r('<footer id="wb-info">\n'),null!=n.footerSections){r('<div class="landscape">\n<nav class="container wb-navcurr">\n<h2 class="wb-inv">Related links</h2>\n<ul class="list-unstyled colcount-sm-2 colcount-md-3">\n');for(var c=0;c<n.footerSections.length;c++){var o=n.footerSections[c];r('<li><a href="'),r(o.href),r('"'),r(1==o.newWindow?' target="_blank"  rel="noopener"':""),r(">"),r(e(o.text)),1==o.newWindow&&r('<span class="wb-inv"> This link will open in a new window</span>'),r("</a></li>\n")}r("</ul>\n</nav>\n</div>\n")}return r('<div class="brand">\n<div class="container">\n<div class="row">\n<nav class="col-md-10 ftr-urlt-lnk" aria-labelledby="aboutWebApp">\n<h2 class="wb-inv" id="aboutWebApp">About this Web application</h2>\n<ul>\n'),null!=n.contactLink&&0<n.contactLink.length?(t=n.contactLink[0],r('<li><a href="'),r(null!=t.href?t.href:"/en/contact.html"),r('"'),r(1==t.newWindow?' target="_blank"  rel="noopener"':""),r(">Contact information"),1==t.newWindow&&r('<span class="wb-inv"> This link will open in a new window</span>'),r("</a></li>\n")):r('<li><a href="/en/contact.html">Contact information</a></li>\n'),null!=n.termsLink&&0<n.termsLink.length?(l=n.termsLink[0],r('<li><a href="'),r(null!=l.href?l.href:"/en/transparency/terms.html"),r('"'),r(1==l.newWindow?' target="_blank"  rel="noopener"':""),r(">Terms and conditions"),1==l.newWindow&&r('<span class="wb-inv"> This link will open in a new window</span>'),r("</a></li>\n")):r('<li><a href="/en/transparency/terms.html">Terms and conditions</a></li>\n'),null!=n.privacyLink&&0<n.privacyLink.length?(l=n.privacyLink[0],r('<li><a href="'),r(null!=l.href?l.href:"/en/transparency/privacy.html"),r('"'),r(1==l.newWindow?' target="_blank"  rel="noopener"':""),r(">Privacy"),1==l.newWindow&&r('<span class="wb-inv"> This link will open in a new window</span>'),r("</a></li>\n")):r('<li><a href="/en/transparency/privacy.html">Privacy</a></li>\n'),r('</ul>\n</nav>\n<div class="col-xs-6 visible-sm visible-xs tofpg">\n<a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a>\n</div>\n<div class="col-xs-6 col-md-3 col-lg-2 text-right">\n<img src="'),r(wet.builder.environment(n.cdnEnv)),r('wet-boew/assets/wmms-blk.svg" alt="Symbol of the Government of Canada">\n</div>\n</div>\n</div>\n</div>\n</footer>'),s},wet.builder.appTop=function(n,e,a,i){e=e||function(n){var e={"<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};return null==n?"":String(n).replace(/[<>'"]/g,function(n){return e[n]||n})};var t,l,s,r,c="";function o(n){null!=n&&(c+=n)}if(o('<script>\ndataLayer = [];\n<\/script>\n<nav aria-label="Skip Links">\n<ul id="wb-tphp">\n<li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li>\n<li class="wb-slc visible-xs visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to '),1==n.topCusMenu?o('"Related links"'):o('"About this Web application"'),o("</a></li>\n"),1==n.topSecMenu&&o('<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>\n'),o('</ul>\n</nav>\n<header>\n<div id="wb-bnr" class="container">\n<div class="row">\n'),null!=n.lngLinks){o('<section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">\n<h2 class="wb-inv">Language selection</h2>\n<ul class="list-inline mrgn-bttm-0">\n');for(var d=0;d<n.lngLinks.length;d++){var u=n.lngLinks[d];o('<li>\n<a lang="'),o(e(u.lang)),o('" href="'),o(u.href),o('">\n<span class="hidden-xs">'),o(e(u.text)),o('</span>\n<abbr title="'),o(e(u.text)),o('" class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">'),o(e(u.lang)),o("</abbr>\n</a>\n</li>\n")}o("</ul>\n</section>\n")}if(o('<div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">\n<img src="'),o(wet.builder.environment(n.cdnEnv)),o('wet-boew/assets/sig-blk-en.svg" alt="Government of Canada" property="logo">\n<span class="wb-inv"> / <span lang="fr">Gouvernement du Canada</span></span>\n<meta property="name" content="Government of Canada">\n<meta property="areaServed" typeof="Country" content="Canada">\n<link property="logo" href="'),o(wet.builder.environment(n.cdnEnv)),o('wet-boew/assets/wmms-blk.svg">\n</div>\n'),null!=n.customSearch&&0<n.customSearch.length){var h=n.customSearch[0];if(o('<section id="wb-srch" class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4 visible-md visible-lg">\n<h2>Search'),o(e(null!=h.placeholder?" "+h.placeholder:"")),o('</h2>\n<form action="'),o(e(h.action)),o('" method="'),o(e(h.method)),o('" name="cse-search-box" role="search">\n<div class="form-group wb-srch-qry">\n<label for="'),o(e(null!=h.id?h.id:"wb-srch-q")),o('" class="wb-inv">Search'),o(e(null!=h.placeholder?" "+h.placeholder:"")),o('</label>\n<input id="'),o(e(null!=h.id?h.id:"wb-srch-q")),o('" class="wb-srch-q form-control" name="'),o(e(null!=h.name?h.name:"q")),o('" type="search" value="" size="34" maxlength="170" placeholder="Search'),o(e(null!=h.placeholder?" "+h.placeholder:"")),o('">\n'),null!=h.hiddenInput)for(var p=0;p<h.hiddenInput.length;p++){var w=h.hiddenInput[p];o('<input type="hidden" name="'),o(e(w.name)),o('" value="'),o(e(w.value)),o('">\n')}o('</div>\n<div class="form-group submit">\n<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search'),o(e(null!=h.placeholder?" "+h.placeholder:"")),o("</span></button>\n</div>\n</form>\n</section>\n")}if(o('</div>\n</div>\n<div class="app-bar">\n<div class="container">\n<div class="row">\n'),null!=n.appSettings||null!=n.signOut||null!=n.signIn?o('<section class="col-xs-12 col-sm-7">\n'):o('<section class="col-xs-12">\n'),null!=n.appName&&0<n.appName.length&&(t=n.appName[0],o('<h2 class="wb-inv">Name of Web application</h2>\n<a class="app-name" href="'),o(t.href),o('">'),o(e(t.text)),o("</a>\n")),o("</section>\n"),null==n.appSettings&&null==n.signOut&&null==n.signIn||(o('<nav class="col-sm-5 hidden-xs hidden-print">\n<h2 class="wb-inv">Account menu</h2>\n<ul class="app-list-account list-unstyled">\n'),null!=n.appSettings&&0<n.appSettings.length&&(l=n.appSettings[0],o('<li><a href="'),o(l.href),o('" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;\n')),null!=n.signOut?0<n.signOut.length&&(l=n.signOut[0],o('<li><a href="'),o(l.href),o('" id="cdts-signout-btn" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>\n')):null!=n.signIn&&0<n.signIn.length&&(s=n.signIn[0],o('<li><a href="'),o(s.href),o('" id="cdts-signin-btn" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>\n')),o("</ul>\n</nav>\n")),o("</div>\n</div>\n</div>\n"),null!=n.customSearch||null!=n.menuPath||null!=n.menuLinks||1==n.topSecMenu||null!=n.appSettings||null!=n.signOut||null!=n.signIn){if(o('<div class="app-bar-mb container visible-xs-block hidden-print">\n'),null!=n.customSearch||null!=n.menuPath||null!=n.menuLinks||1==n.topSecMenu){if(o('<nav>\n<h2 class="wb-inv">'),null!=n.menuPath||null!=n.menuLinks||1==n.topSecMenu?(o("Menu"),o(e(null!=n.customSearch?" and search":""))):o("Search"),o('</h2>\n<ul class="app-list-main list-unstyled">\n'),null==n.menuPath&&null==n.menuLinks&&1!=n.topSecMenu||o('<li class="wb-mb-links" id="wb-glb-mn"><a href="#mb-pnl" aria-controls="mb-pnl" class="btn overlay-lnk" role="button">Menu</a><h2>Menu</h2></li>'),null!=n.customSearch&&o('<li><a href="#app-srch-mb" title="Search" aria-controls="app-srch-mb" class="btn overlay-lnk" role="button"><span class="glyphicon-search glyphicon" aria-hidden="true"></span><span class="wb-inv">Search</span></a></li>'),o('</ul>\n<div id="mb-pnl"></div>\n'),null!=n.customSearch&&0<n.customSearch.length){var m=n.customSearch[0];if(o('<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t">\n<div class="modal-header">\n<h3 class="modal-title">Search'),o(e(null!=m.placeholder?" "+m.placeholder:"")),o('</h3>\n</div>\n<div class="modal-body">\n<form action="'),o(e(m.action)),o('" method="'),o(e(m.method)),o('" name="cse-search-box" role="search" class="form-inline">\n<div class="input-group">\n<label for="'),o(e(null!=m.id?"app-"+m.id:"app-srch-q-mb")),o('" class="wb-inv">Search'),o(e(null!=m.placeholder?" "+m.placeholder:"")),o('</label>\n<input placeholder="Search'),o(e(null!=m.placeholder?" "+m.placeholder:"")),o('" id="'),o(e(null!=m.id?"app-"+m.id:"app-srch-q-mb")),o('" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">\n'),null!=m.hiddenInput)for(var b=0;b<m.hiddenInput.length;b++){var v=m.hiddenInput[b];o('<input type="hidden" name="'),o(e(v.name)),o('" value="'),o(e(v.value)),o('">\n')}o('<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search{if isNonnull($item.placeholder)} {$item.placeholder}{/if}</span></button></span>\n</div>\n</form>\n</div>\n</section>\n')}o("</nav>\n")}if(null==n.appSettings&&null==n.signOut&&null==n.signIn||(o('<nav>\n<h2 class="wb-inv">Account menu</h2>\n<ul class="app-list-account list-unstyled">\n'),null!=n.appSettings&&0<n.appSettings.length&&(s=n.appSettings[0],o('<li><a href="'),o(s.href),o('" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;\n')),null!=n.signOut?0<n.signOut.length&&(r=n.signOut[0],o('<li><a href="'),o(r.href),o('" id="cdts-signout-btn-mobile" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>\n')):null!=n.signIn&&0<n.signIn.length&&(r=n.signIn[0],o('<li><a href="'),o(r.href),o('" id="cdts-signin-btn-mobile" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>\n')),o("</ul>\n</nav>\n")),o("</div>\n"),null!=n.menuLinks){o('<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement" aria-labelledby="appNavMenu">\n<div class="pnl-strt container nvbar">\n<h2 class="wb-inv" id="appNavMenu">Main navigation menu</h2>\n<div class="row">\n<ul class="list-inline menu" role="menubar">\n');for(var f=0;f<n.menuLinks.length;f++){var g=n.menuLinks[f];if(null!=g.subLinks){o('<li role="none">\n<a href="#'),o(e(g.id)),o('" class="item"'),o(1==g.newWindow?' target="_blank"  rel="noopener"':""),o(">"),o(e(g.text)),1==g.newWindow&&o('<span class="wb-inv"> This link will open in a new window</span>'),o('</a>\n<ul class="sm list-unstyled"'),null!=g.id&&(o('id="'),o(e(g.id)),o('"')),o(' role="menu">\n');for(var y=0;y<g.subLinks.length;y++){var x=g.subLinks[y];y>=g.subLinks.length-1?o('<li class="slflnk" role="none"><a href="'):o('<li role="none"><a href="'),o(x.subhref),o('"'),o(1==x.newWindow?' target="_blank"  rel="noopener"':""),o(">"),o(e(x.subtext)),1==x.newWindow&&o('<span class="wb-inv"> This link will open in a new window</span>'),o("</a></li>\n")}o("</ul>\n</li>\n")}else o('<li role="none"><a href="'),o(g.href),o('" class="item"'),o(1==g.newWindow?' target="_blank"  rel="noopener"':""),o(">"),o(e(g.text)),1==g.newWindow&&o('<span class="wb-inv"> This link will open in a new window</span>'),o("</a></li>\n")}o("</ul>\n</div>\n</div>\n</nav>\n")}else null!=n.menuPath&&(o('<nav id="wb-sm" data-ajax-replace="'),o(e(n.menuPath)),o('" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>\n'))}if(null!=n.breadcrumbs){o('<nav id="wb-bc" property="breadcrumb">\n<h2>You are here:</h2>\n<div class="container">\n<div class="row">\n<ol class="breadcrumb">\n');for(var k=0;k<n.breadcrumbs.length;k++){var S=n.breadcrumbs[k];o("<li>\n"),null!=S.acronym&&(o('<abbr title="'),o(e(S.acronym)),o('">')),null!=S.href&&(o('<a href="'),o(S.href),o('">')),o(e(S.title)),o("\n"),null!=S.href&&o("</a>"),null!=S.acronym&&o("</abbr>"),o("</li>\n")}o("</ol>\n</div>\n</div>\n</nav>\n")}return o("</header>\n"),n.showPreContent,c},wet.builder.footer=function(n,e,a,i){var t,l,s="";function r(n){null!=n&&(s+=n)}return r('<footer id="wb-info">\n<div id="transactFooter" class="landscape">\n'),0!=n.showFooter&&(r('<nav class="container wb-navcurr" aria-labelledby="aboutGov">\n<h2 class="wb-inv" id="aboutGov">About government</h2>\n<ul class="list-unstyled colcount-sm-2 colcount-md-3">\n'),null!=n.contactLinks&&0<n.contactLinks.length?(t=n.contactLinks[0],r('<li><a href="'),r(t.href),r('">Contact us</a></li>\n')):r('<li><a href="/en/contact.html">Contact us</a></li>\n'),r('<li><a href="/en/government/dept.html">Departments and agencies</a></li>\n<li><a href="/en/government/publicservice.html">Public service and military</a></li>\n<li><a href="/en/news.html">News</a></li>\n<li><a href="/en/government/system/laws.html">Treaties, laws and regulations</a></li>\n<li><a href="/en/transparency/reporting.html">Government-wide reporting</a></li>\n<li><a href="https://pm.gc.ca/en">Prime Minister</a></li>\n<li><a href="/en/government/system.html">About government</a></li>\n<li><a href="https://open.canada.ca/en">Open government</a></li>\n</ul>\n</nav>\n')),r('</div>\n<div class="brand">\n<div class="container">\n<div class="row">\n<nav class="col-md-9 col-lg-10 ftr-urlt-lnk" aria-labelledby="aboutSite">\n<h2 class="wb-inv" id="aboutSite">About this site</h2>\n'),0!=n.showFooter?r('<ul>\n<li><a href="/en/social.html">Social media</a></li>\n<li><a href="/en/mobile.html">Mobile applications</a></li>\n<li><a href="/en/government/about.html">About Canada.ca</a></li>\n<li><a href="/en/transparency/terms.html">Terms and conditions</a></li>\n<li><a href="/en/transparency/privacy.html">Privacy</a></li>\n</ul>\n'):(r("<ul>\n"),null!=n.contactLinks&&0<n.contactLinks.length?(t=n.contactLinks[0],r('<li><a href="'),r(t.href||"/en/contact.html"),r('"'),r(1==t.newWindow?' target="_blank"  rel="noopener"':""),r(">Contact information"),1==t.newWindow&&r('<span class="wb-inv"> This link will open in a new window</span>'),r("</a></li>\n")):r('<li><a href="/en/contact.html">Contact information</a></li>\n'),null!=n.termsLink&&0<n.termsLink.length?(l=n.termsLink[0],r('<li><a href="'),r(l.href||"/en/transparency/terms.html"),r('"'),r(1==l.newWindow?' target="_blank"  rel="noopener"':""),r(">Terms and conditions"),1==l.newWindow&&r('<span class="wb-inv"> This link will open in a new window</span>'),r("</a></li>\n")):r('<li><a href="/en/transparency/terms.html">Terms and conditions</a></li>\n'),null!=n.privacyLink&&0<n.privacyLink.length?(l=n.privacyLink[0],r('<li><a href="'),r(l.href||"/en/transparency/privacy.html"),r('"'),r(1==l.newWindow?' target="_blank"  rel="noopener"':""),r(">Privacy"),1==l.newWindow&&r('<span class="wb-inv"> This link will open in a new window</span>'),r("</a></li>\n")):r('<li><a href="/en/transparency/privacy.html">Privacy</a></li>\n'),r("</ul>\n")),r('</nav>\n<div class="col-xs-6 visible-sm visible-xs tofpg">\n<a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a>\n</div>\n<div id="StdIssueWasHere2" class="col-xs-6 col-md-2 text-right">\n<img src="'),r(wet.builder.environment(n.cdnEnv)),r('wet-boew/assets/wmms-blk.svg" alt="Symbol of the Government of Canada">\n</div>\n</div>\n</div>\n</div>\n</footer>'),s},wet.builder.preFooter=function(n,e,a,i){e=e||function(n){var e={"<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};return null==n?"":String(n).replace(/[<>'"]/g,function(n){return e[n]||n})};var t="";function l(n){null!=n&&(t+=n)}return n.showPostContent,0!=n.pagedetails&&(l('<div class="pagedetails'),l(e(null!=n.isContainer?" container":"")),l('">\n'),0==n.showFeedback&&0==n.showShare||(l('<div class="row">\n'),0!=n.showFeedback&&(null!=n.showFeedback&&1!=n.showFeedback?(l('<div class="col-sm-6 col-md-5 col-lg-4">\n<a href="'),l(n.showFeedback),l('" class="btn btn-default btn-center">Report a problem on this page</a>\n</div>\n')):l('<div class="col-sm-6 col-md-5 col-lg-4">\n<a href="/en/report-problem.html" class="btn btn-default btn-center">Report a problem on this page</a>\n</div>\n')),0!=n.showShare&&(null!=n.showShare?(l('<div class="wb-share col-sm-4 col-md-3 col-sm-offset-'),l(0!=n.showFeedback?"2":"8"),l(" col-md-offset-"),l(0!=n.showFeedback?"4":"9"),l(0!=n.showFeedback?" col-lg-offset-5":""),l('" data-wb-share=\'{"filter": ['),l(n.showShare.map(function(n){return'"'+n+'"'}).join(", ")),l('], "lnkClass": "btn btn-default btn-block"}\'></div>\n')):(l('<div class="wb-share col-sm-4 col-md-3 col-sm-offset-'),l(0!=n.showFeedback?"2":"8"),l(" col-md-offset-"),l(0!=n.showFeedback?"4":"9"),l(0!=n.showFeedback?" col-lg-offset-5":""),l('" data-wb-share=\'{"lnkClass": "btn btn-default btn-block"}\'></div>\n'))),l("</div>\n")),l('<dl id="wb-dtmd">\n'),null!=n.screenIdentifier&&(l('<dt>Screen Identifier:&#32;</dt>\n<dd property="identifier">'),l(e(n.screenIdentifier)),l("</dd>\n")),null!=n.dateModified&&(l('<dt>Date modified:&#32;</dt>\n<dd><time property="dateModified">'),l(e(n.dateModified)),l("</time></dd>\n")),null!=n.versionIdentifier&&(l('<dt>Version:&#32;</dt>\n<dd property="version">'),l(e(n.versionIdentifier)),l("</dd>\n")),l("</dl>\n</div>\n")),t},wet.builder.refFooter=function(n,e,a,i){e=e||function(n){var e={"<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};return null==n?"":String(n).replace(/[<>'"]/g,function(n){return e[n]||n})};var t="";function l(n){null!=n&&(t+=n)}return l('\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e\n<script src="'),l("external"==n.jqueryEnv?"https://ajax.googleapis.com/ajax/libs/":wet.builder.environment(n.cdnEnv)+"wet-boew/js/"),l('jquery/2.2.4/jquery.min.js"><\/script>\n<script src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/js/wet-boew.min.js"><\/script>\n\x3c!--<![endif]--\x3e\n\x3c!--[if lt IE 9]>\n<script src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/js/ie8-wet-boew2.min.js"><\/script>\n<![endif]--\x3e\n<script src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/js/theme.min.js"><\/script>\n'),null!=n.exitSecureSite?1==n.exitSecureSite.exitScript&&(l('<a href="#" id="cdts-exitscript-placeholder-link" style="display: none" aria-hidden="true" class="wb-exitscript">Exit Link</a>\n<script data-id="exitScript">wet.utilities.cdtsApplyExitScriptToLinks("'),l(e(null!=n.exitSecureSite.displayModal?n.exitSecureSite.displayModal:"undefined")),l('", "'),l(null!=n.exitSecureSite.exitURL?n.exitSecureSite.exitURL:"undefined"),l('", "'),l(e(null!=n.exitSecureSite.exitDomains?n.exitSecureSite.exitDomains:"undefined")),l('", "'),l(e(null!=n.exitSecureSite.exitMsg?n.exitSecureSite.exitMsg:"undefined")),l('", "'),l(e(null!=n.exitSecureSite.yesMsg?n.exitSecureSite.yesMsg:"undefined")),l('", "'),l(e(null!=n.exitSecureSite.cancelMsg?n.exitSecureSite.cancelMsg:"undefined")),l('", "'),l(e(null!=n.exitSecureSite.msgBoxHeader?n.exitSecureSite.msgBoxHeader:"undefined")),l('", "'),l(e(null!=n.exitSecureSite.targetWarning?n.exitSecureSite.targetWarning:"undefined")),l('", "'),l(e(null!=n.exitSecureSite.displayModalForNewWindow?n.exitSecureSite.displayModalForNewWindow:"undefined")),l('");<\/script>\n')):1==n.exitScript&&(l('<a href="#" id="cdts-exitscript-placeholder-link" style="display: none" aria-hidden="true" class="wb-exitscript">Exit Link</a>\n<script data-id="exitScript">wet.utilities.cdtsApplyExitScriptToLinks("'),l(e(null!=n.displayModal?n.displayModal:"undefined")),l('", "'),l(null!=n.exitURL?n.exitURL:"undefined"),l('", "'),l(e(null!=n.exitDomains?n.exitDomains:"undefined")),l('", "'),l(e(null!=n.exitMsg?n.exitMsg:"undefined")),l('", "'),l(e(null!=n.yesMsg?n.yesMsg:"undefined")),l('", "'),l(e(null!=n.cancelMsg?n.cancelMsg:"undefined")),l('", "'),l(e(null!=n.msgBoxHeader?n.msgBoxHeader:"undefined")),l('", "'),l(e(null!=n.targetWarning?n.targetWarning:"undefined")),l('", "'),l(e(null!=n.displayModalForNewWindow?n.displayModalForNewWindow:"undefined")),l('");<\/script>\n')),1==n.isApplication&&(l('<script src="'),l(wet.builder.environment(n.cdnEnv)),l('cdts/cdtscustom.js"><\/script>\n')),null!=n.webAnalytics&&l("<script>_satellite.pageBottom();<\/script>\n"),t},wet.builder.refTop=function(n,e,a,i){var t="";function l(n){null!=n&&(t+=n)}if(null!=n.webAnalytics){if(l('\x3c!-- Adobe Analytics --\x3e\n<script id="cdts_AnalyticsId" src="//assets.adobedtm.com/'),0<n.webAnalytics.length)if(n.webAnalytics[0].custom)l(n.webAnalytics[0].custom);else if(1==n.webAnalytics[0].version||2==n.webAnalytics[0].version){switch(l("caacec67651710193d2331efef325107c23a0145/satelliteLib-"),n.webAnalytics[0].version){case 1:l("92fcbbc24eeebb654a3dfbe688ed2dfe10a53e24");break;case 2:l("c2082deaf69c358c641c5eb20f94b615dd606662")}"staging"==n.webAnalytics[0].environment&&l("-staging"),l(".js")}l('">'),l("<\/script>\n")}return l('\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e\n<link href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/favicon.ico" rel="icon" type="image/x-icon">\n<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/css/theme.min.css">\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('cdts/cdtsfixes.css">\n'),1==n.isApplication&&(l('\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('cdts/cdtsapps.css">\n')),l('\n\x3c!--<![endif]--\x3e\n\x3c!--[if lt IE 9]>\n<link href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/favicon.ico" rel="shortcut icon">\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/css/ie8-theme.min.css">\n<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script>\n<script src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/js/ie8-wet-boew.min.js"><\/script>\n<![endif]--\x3e\n\x3c!--[if lte IE 9]><![endif]--\x3e'),t},wet.builder.secmenu=function(n,e,a,i){e=e||function(n){var e={"<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};return null==n?"":String(n).replace(/[<>'"]/g,function(n){return e[n]||n})};var t="";function l(n){null!=n&&(t+=n)}l('\n<h2 id="wb-sec-h" class="wb-inv">Section menu</h2>\n');for(var s=0;s<n.sections.length;s++){var r=n.sections[s];l('<section class="list-group menu list-unstyled">\n<h3>'),null!=r.sectionLink&&(l('<a href="'),l(r.sectionLink),l('"'),l(1==r.newWindow?' target="_blank"  rel="noopener"':""),l(">")),l(e(r.sectionName)),1==r.newWindow&&l('<span class="wb-inv"> This link will open in a new window</span>'),null!=r.sectionLink&&l("</a>"),l('</h3>\n<ul class="list-group menu list-unstyled">\n');for(var c=0;c<r.menuLinks.length;c++){var o=r.menuLinks[c];if(l('<li>\n<a href="'),l(o.href),l('" class="list-group-item"'),l(1==o.newWindow?' target="_blank"  rel="noopener"':""),l(">"),l(e(o.text)),1==o.newWindow&&l('<span class="wb-inv"> This link will open in a new window</span>'),l("</a>\n"),null!=o.subLinks){l('<ul class="list-group menu list-unstyled">\n');for(var d=0;d<o.subLinks.length;d++){var u=o.subLinks[d];l('<li><a href="'),l(u.subhref),l('" class="list-group-item"'),l(1==u.newWindow?' target="_blank"  rel="noopener"':""),l(">"),l(e(u.subtext)),1==u.newWindow&&l('<span class="wb-inv"> This link will open in a new window</span>'),l("</a></li>\n")}l("</ul>\n")}l("</li>\n")}l("</ul>\n</section>\n")}return t},wet.builder.serverBottom=function(n,e,a,i){var t="";function l(n){null!=n&&(t+=n)}return l('<footer id="wb-info">\n<div class="brand">\n<div class="container">\n<div class="row">\n<div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div>\n<div class="col-xs-6 col-md-12 text-right">\n<img src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/wmms-blk.svg" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada">\n</div>\n</div>\n</div>\n</div>\n</footer>'),t},wet.builder.serverRefBottom=function(n,e,a,i){var t="";return t},wet.builder.serverRefTop=function(n,e,a,i){var t="";function l(n){null!=n&&(t+=n)}return l('\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e\n<link href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/favicon.ico" rel="icon" type="image/x-icon">\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/css/theme.min.css">\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('cdts/cdtsfixes.css">\n\x3c!--<![endif]--\x3e\n\x3c!--[if lt IE 9]>\n<link href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/favicon.ico" rel="shortcut icon">\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/css/ie8-theme-srv.min.css">\n<script src="'),l("external"==n.jqueryEnv?"https://ajax.googleapis.com/ajax/libs/":wet.builder.environment(n.cdnEnv)+"wet-boew/js/"),l('jquery/2.2.4/jquery.min.js"><\/script>\n<script src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/js/ie8-wet-boew.min.js"><\/script>\n<![endif]--\x3e'),t},wet.builder.serverTop=function(n,e,a,i){var t="";function l(n){null!=n&&(t+=n)}return l('<header>\n<div id="wb-bnr" class="container">\n<div class="row">\n<div class="brand col-xs-8 col-sm-9 col-md-6">\n<img src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/sig-blk-en.svg" alt="">\n<span class="wb-inv"> Government of Canada / Gouvernement du Canada</span>\n</div>\n</div>\n</div>\n</header>'),t},wet.builder.splash=function(n,e,a,i){e=e||function(n){var e={"<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};return null==n?"":String(n).replace(/[<>'"]/g,function(n){return e[n]||n})};var t="";function l(n){null!=n&&(t+=n)}l('<div id="bg">\n<img src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/img/splash/sp-bg-2.jpg" alt="">\n</div>\n<main>\n<div class="sp-hb">\n<div class="sp-bx col-xs-12">\n<h1 property="name" class="wb-inv">Canada.ca</h1>\n<div class="row">\n<div class="col-xs-11 col-md-8">\n<img src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/sig-spl.svg" alt="Government of Canada / Gouvernement du Canada">\n</div>\n</div>\n<div class="row cdts-splash">\n<section class="col-xs-6 text-right" lang="en">\n'),null!=n.nameEng?(l("<h2>"),l(e(n.nameEng)),l("</h2>\n")):l('<h2 class="wb-inv">Government of Canada</h2>\n'),l('</section>\n<section class="col-xs-6" lang="fr">\n'),null!=n.nameFra?(l("<h2>"),l(e(n.nameFra)),l("</h2>\n")):l('<h2 class="wb-inv">Gouvernement du Canada</h2>\n'),l('</section>\n</div>\n<div class="row text-center">\n');e=navigator.language;return l('<ul class="list-inline lst-spcd">\n<li>\n'),"fr-CA"==e?(l('<a href="'),l(n.indexEng),l('" class="btn btn-default" lang="en">English</a>\n')):(l('<a href="'),l(n.indexEng),l('" class="btn btn-primary" lang="en">English</a>\n')),l("</li>\n<li>\n"),"fr-CA"==e?(l('<a href="'),l(n.indexFra),l('" class="btn btn-primary" lang="fr">Français</a>\n')):(l('<a href="'),l(n.indexFra),l('" class="btn btn-default" lang="fr">Français</a>\n')),l('</li>\n</ul>\n</div>\n</div>\n<div class="sp-bx-bt col-xs-12">\n<div class="row">\n<div class="col-xs-7 col-md-8">\n<a href="'),l(n.termsEng),l('" class="sp-lk">Terms &amp; conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="'),l(n.termsFra),l('" class="sp-lk" lang="fr">Avis</a>\n</div>\n<div class="col-xs-5 col-md-4 text-right mrgn-bttm-md">\n<img src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/wmms-spl.svg" width="127" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada">\n</div>\n</div>\n</div>\n</div>\n</main>\n\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e\n<script src="'),l("external"==n.jqueryEnv?"https://ajax.googleapis.com/ajax/libs/":wet.builder.environment(n.cdnEnv)+"wet-boew/js/"),l('jquery/2.2.4/jquery.min.js"><\/script>\n<script src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/js/wet-boew.min.js"><\/script>\n\x3c!--<![endif]--\x3e\n\x3c!--[if lt IE 9]>\n<script src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/js/ie8-wet-boew2.min.js"><\/script>\n<![endif]--\x3e\n<script src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/js/theme.min.js"><\/script>\n'),null!=n.webAnalytics&&l("<script>_satellite.pageBottom();<\/script>\n"),l('<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('cdts/cdtsfixes.css">'),t},wet.builder.splashTop=function(n,e,a,i){var t="";function l(n){null!=n&&(t+=n)}return l('\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e\n<link href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/favicon.ico" rel="icon" type="image/x-icon">\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/css/theme.min.css">\n\x3c!--<![endif]--\x3e\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/css/messages.min.css">\n\x3c!--[if lt IE 9]>\n<link href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/favicon.ico" rel="shortcut icon">\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/css/messages-ie.min.css">\n<link rel="stylesheet" href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/css/ie8-theme.min.css">\n<script src="'),l("external"==n.jqueryEnv?"https://ajax.googleapis.com/ajax/libs/":wet.builder.environment(n.cdnEnv)+"wet-boew/js/"),l('jquery/2.2.4/jquery.min.js"><\/script>\n<script src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/js/ie8-wet-boew.min.js"><\/script>\n<![endif]--\x3e\n\x3c!--[if lte IE 9]><![endif]--\x3e'),t},wet.builder.top=function(n,e,a,i){e=e||function(n){var e={"<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};return null==n?"":String(n).replace(/[<>'"]/g,function(n){return e[n]||n})};var t="";function l(n){null!=n&&(t+=n)}if(l('<nav aria-label="Skip Links">\n<ul id="wb-tphp">\n<li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li>\n<li class="wb-slc visible-xs visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About government"</a></li>\n'),1==n.topSecMenu&&l('<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>\n'),l('</ul>\n</nav>\n<header>\n<div id="wb-bnr" class="container">\n<div class="row">\n'),null!=n.lngLinks){l('<section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">\n<h2 class="wb-inv">Language selection</h2>\n<ul class="list-inline mrgn-bttm-0">\n');for(var s=0;s<n.lngLinks.length;s++){var r=n.lngLinks[s];l('<li>\n<a hreflang="'),l(e(r.lang)),l('" lang="'),l(e(r.lang)),l('" href="'),l(r.href),l('">\n<span class="hidden-xs">'),l(e(r.text)),l('</span>\n<abbr title="'),l(e(r.text)),l('" class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">'),l(e(r.lang)),l("</abbr>\n</a>\n</li>\n")}l("</ul>\n</section>\n")}if(l('<div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">\n'),0!=n.siteMenu&&l('<a href="/en.html" property="url">'),l('<img src="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/sig-blk-en.svg" alt="Government of Canada" property="logo"><span class="wb-inv"> / <span lang="fr">Gouvernement du Canada</span></span>'),0!=n.siteMenu&&l("</a>"),l('<meta property="name" content="Government of Canada">\n<meta property="areaServed" typeof="Country" content="Canada">\n<link id="StdIssueWasHere1" property="logo" href="'),l(wet.builder.environment(n.cdnEnv)),l('wet-boew/assets/wmms-blk.svg">\n</div>\n'),0!=n.search)if(null!=n.customSearch&&0<n.customSearch.length){const u=n.customSearch[0];if(l('<section id="wb-srch" class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4 visible-md visible-lg">\n<h2>Search'),l(e(null!=u.placeholder?" "+u.placeholder:"")),l('</h2>\n<form action="'),l(u.action),l('" method="'),l(e(u.method)),l('" name="cse-search-box" role="search">\n<div class="form-group wb-srch-qry">\n<label for="'),l(e(null!=u.id?u.id:"wb-srch-q")),l('" class="wb-inv">Search'),l(e(null!=u.placeholder?" "+u.placeholder:"")),l('</label>\n<input id="'),l(e(null!=u.id?u.id:"wb-srch-q")),l('" class="wb-srch-q form-control" name="'),l(e(null!=u.name?u.name:"q")),l('" type="search" value="" size="34" maxlength="170" placeholder="Search'),l(e(null!=u.placeholder?" "+u.placeholder:"")),l('">\n'),null!=u.hiddenInput)for(var c=0;c<u.hiddenInput.length;c++){var o=u.hiddenInput[c];l('<input type="hidden" name="'),l(e(o.name)),l('" value="'),l(e(o.value)),l('">\n')}l('</div>\n<div class="form-group submit">\n<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search'),l(e(null!=u.placeholder?" "+u.placeholder:"")),l("</span></button>\n</div>\n</form>\n</section>\n")}else l('<section id="wb-srch" class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4">\n<h2>Search</h2>\n<form action="/en/sr/srb.html" method="get" name="cse-search-box" role="search">\n<div class="form-group wb-srch-qry">\n<label for="wb-srch-q" class="wb-inv">Search Canada.ca</label>\n<input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca">\n<input type="hidden" name="_charset_" value="UTF-8">\n<datalist id="wb-srch-q-ac">\n</datalist>\n</div>\n<div class="form-group submit">\n<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button>\n</div>\n</form>\n</section>\n');if(l("</div>\n</div>\n"),0!=n.siteMenu?l('<nav class="gcweb-menu" typeof="SiteNavigationElement" aria-labelledby="gcwebMenu">\n<div class="container">\n<h2 class="wb-inv" id="gcwebMenu">Menu</h2>\n<button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button>\n<ul role="menu" aria-orientation="vertical" data-ajax-replace="//www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html">\n<li role="presentation"><a role="menuitem" href="/en/services/jobs.html">Jobs and the workplace</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/immigration-citizenship.html">Immigration and citizenship</a></li>\n<li role="presentation"><a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/business.html">Business and industry</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/benefits.html">Benefits</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/health.html">Health</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/taxes.html">Taxes</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/environment.html">Environment and natural resources</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/defence.html">National security and defence</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/culture.html">Culture, history and sport</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/policing.html">Policing, justice and emergencies</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/transport.html">Transport and infrastructure</a></li>\n<li role="presentation"><a role="menuitem" href="https://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/finance.html">Money and finances</a></li>\n<li role="presentation"><a role="menuitem" href="/en/services/science.html">Science and innovation</a></li>\n</ul>\n</div>\n</nav>\n'):l('<div class="transactBar"></div>\n'),0!=n.breadcrumbs){if(l('<nav id="wb-bc" property="breadcrumb" aria-labelledby="breadcrumbPosition">\n<h2 id="breadcrumbPosition">You are here:</h2>\n<div class="container">\n<ol class="breadcrumb">\n'),null!=n.breadcrumbs)for(var d=0;d<n.breadcrumbs.length;d++){var u=n.breadcrumbs[d];0==d?"canada.ca"==u.title.toLowerCase()?l('<li>\n<a href="/en.html">Canada.ca</a>\n</li>\n'):(new RegExp("^http[s]{0,1}://www.canada.ca(/en.html|/fr.html|/index.html|/en/index.html|/fr/index.html|/home.html|/accueil.html){0,1}[/]{0,1}$","gi").test(u.href)?(l("<li>\n"),null!=u.acronym&&(l('<abbr title="'),l(e(u.acronym)),l('">')),null!=u.href&&(l('<a href="'),l(u.href),l('">')),l("Canada.ca")):(l('<li>\n<a href="/en.html">Canada.ca</a>\n</li>\n<li>\n'),null!=u.acronym&&(l('<abbr title="'),l(e(u.acronym)),l('">')),null!=u.href&&(l('<a href="'),l(u.href),l('">')),null!=u.title&&l(e(u.title))),null!=u.href&&l("</a>"),null!=u.acronym&&l("</abbr>"),l("</li>\n")):(l("<li>\n"),null!=u.acronym&&(l('<abbr title="'),l(e(u.acronym)),l('">')),null!=u.href&&(l('<a href="'),l(u.href),l('">')),null!=u.title&&l(e(u.title)),null!=u.href&&l("</a>"),null!=u.acronym&&l("</abbr>"),l("</li>\n"))}else l('<li>\n<a href="/en.html">Canada.ca</a>\n</li>\n');l("</ol>\n</div>\n</nav>\n")}return l("</header>\n"),n.showPreContent,t},void 0===(wet=void 0===wet?{}:wet).utilities&&(wet.utilities={}),wet.utilities.wetExitScript=function(n,e,a,i,t,l,s,r,c){var o=document.getElementsByTagName("a");a=a.toLowerCase().split(",").map(function(n){return n.trim()}),"undefined"===r&&(r=" ");var d=JSON.stringify({exitMsg:i,cancelBtn:l,yesBtn:t,msgboxHeader:s,targetWarning:r},function(n,e){if("undefined"!==e)return e});if(null!=o)for(var u=0;u<o.length;u++)o[u].hasAttribute("href")&&o[u].host!==window.location.host&&a.indexOf(o[u].host.toLowerCase().trim())<0&&("undefined"!==e&&(o[u].href=encodeURI(e+(e.indexOf("?")<0?"?":"&")+"targetUrl=")+encodeURIComponent(o[u].href)),"true"===n.toLowerCase()&&("_blank"===o[u].target&&"false"===c.toLowerCase()||(o[u].classList.add("wb-exitscript"),2<d.length&&o[u].setAttribute("data-wb-exitscript",'{"i18n": '+d+"}"))))},wet.utilities.cdtsApplyExitScriptToLinks=function(a,i,t,l,s,r,c,o,d){$(document).on("wb-ready.wb",function(n){wet.utilities.wetExitScript(a,i,t,l,s,r,c,o,d);var e=document.getElementById("cdts-exitscript-placeholder-link");e&&e.parentElement.removeChild(e)})};
//# sourceMappingURL=wet-en.js.map