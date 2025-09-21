// ==UserScript==
// @name           AdsBypasser
// @namespace      AdsBypasser
// @description    Bypass Ads
// @copyright      2012+, Wei-Cheng Pan, https://adsbypasser.github.io/
// @version        8.0.0
// @license        BSD
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL      https://adsbypasser.github.io/releases/adsbypasser.full.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasser.full.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v8.0.0/static/img/logo.png
// @grant          GM_deleteValue
// @grant          GM_getResourceURL
// @grant          GM_getValue
// @grant          GM_info
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_xmlhttpRequest
// @grant          GM.deleteValue
// @grant          GM.getResourceUrl
// @grant          GM.getValue
// @grant          GM.info
// @grant          GM.openInTab
// @grant          GM.setValue
// @grant          GM.xmlHttpRequest
// @grant          unsafeWindow
// @resource       alignCenter https://raw.githubusercontent.com/adsbypasser/adsbypasser/v8.0.0/static/css/align_center.css
// @resource       scaleImage https://raw.githubusercontent.com/adsbypasser/adsbypasser/v8.0.0/static/css/scale_image.css
// @resource       bgImage https://raw.githubusercontent.com/adsbypasser/adsbypasser/v8.0.0/static/img/imagedoc-darknoise.png
// @noframes
// @run-at         document-start
// @connect        *
// @match          *://adsbypasser.github.io/*
// @match          *://13xpics.space/*
// @match          *://*.13xpics.space/*
// @match          *://14xpics.space/*
// @match          *://*.14xpics.space/*
// @match          *://1ink.cc/*
// @match          *://*.1ink.cc/*
// @match          *://1link.club/*
// @match          *://*.1link.club/*
// @match          *://22pixx.xyz/*
// @match          *://*.22pixx.xyz/*
// @match          *://2i.cz/*
// @match          *://*.2i.cz/*
// @match          *://2i.sk/*
// @match          *://*.2i.sk/*
// @match          *://37xpics.space/*
// @match          *://*.37xpics.space/*
// @match          *://3minx.com/*
// @match          *://*.3minx.com/*
// @match          *://3xplanet.com/*
// @match          *://*.3xplanet.com/*
// @match          *://3xplanet.net/*
// @match          *://*.3xplanet.net/*
// @match          *://47xpics.space/*
// @match          *://*.47xpics.space/*
// @match          *://4fuk.me/*
// @match          *://*.4fuk.me/*
// @match          *://555fap.com/*
// @match          *://*.555fap.com/*
// @match          *://a2zapk.io/*
// @match          *://*.a2zapk.io/*
// @match          *://acidimg.cc/*
// @match          *://*.acidimg.cc/*
// @match          *://adfoc.us/*
// @match          *://*.adfoc.us/*
// @match          *://adsafelink.com/*
// @match          *://*.adsafelink.com/*
// @match          *://adshnk.com/*
// @match          *://*.adshnk.com/*
// @match          *://adz7short.space/*
// @match          *://*.adz7short.space/*
// @match          *://ai18.pics/*
// @match          *://*.ai18.pics/*
// @match          *://ak.sv/*
// @match          *://*.ak.sv/*
// @match          *://anime-jav.com/*
// @match          *://*.anime-jav.com/*
// @match          *://apunkasoftware.net/*
// @match          *://*.apunkasoftware.net/*
// @match          *://aylink.co/*
// @match          *://*.aylink.co/*
// @match          *://bayimg.com/*
// @match          *://*.bayimg.com/*
// @match          *://bc.vc/*
// @match          *://*.bc.vc/*
// @match          *://bcvc.ink/*
// @match          *://*.bcvc.ink/*
// @match          *://beeimg.com/*
// @match          *://*.beeimg.com/*
// @match          *://biglistofwebsites.com/*
// @match          *://*.biglistofwebsites.com/*
// @match          *://binbox.io/*
// @match          *://*.binbox.io/*
// @match          *://bioskopkeren.boo/*
// @match          *://*.bioskopkeren.boo/*
// @match          *://birdurls.com/*
// @match          *://*.birdurls.com/*
// @match          *://bitcosite.com/*
// @match          *://*.bitcosite.com/*
// @match          *://blackwidof.org/*
// @match          *://*.blackwidof.org/*
// @match          *://blogbux.net/*
// @match          *://*.blogbux.net/*
// @match          *://boost.ink/*
// @match          *://*.boost.ink/*
// @match          *://casimages.com/*
// @match          *://*.casimages.com/*
// @match          *://ceesty.com/*
// @match          *://*.ceesty.com/*
// @match          *://chinese-pics.com/*
// @match          *://*.chinese-pics.com/*
// @match          *://clik.pw/*
// @match          *://*.clik.pw/*
// @match          *://clk.sh/*
// @match          *://*.clk.sh/*
// @match          *://clkmein.com/*
// @match          *://*.clkmein.com/*
// @match          *://cllkme.com/*
// @match          *://*.cllkme.com/*
// @match          *://cloudgallery.net/*
// @match          *://*.cloudgallery.net/*
// @match          *://cn-av.com/*
// @match          *://*.cn-av.com/*
// @match          *://cnpics.org/*
// @match          *://*.cnpics.org/*
// @match          *://cnxx.me/*
// @match          *://*.cnxx.me/*
// @match          *://cocoleech.com/*
// @match          *://*.cocoleech.com/*
// @match          *://corneey.com/*
// @match          *://*.corneey.com/*
// @match          *://cosplay-xxx.com/*
// @match          *://*.cosplay-xxx.com/*
// @match          *://cosplay18.pics/*
// @match          *://*.cosplay18.pics/*
// @match          *://cpmlink.net/*
// @match          *://*.cpmlink.net/*
// @match          *://cpmlink.pro/*
// @match          *://*.cpmlink.pro/*
// @match          *://croea.com/*
// @match          *://*.croea.com/*
// @match          *://cubeupload.com/*
// @match          *://*.cubeupload.com/*
// @match          *://cutpaid.com/*
// @match          *://*.cutpaid.com/*
// @match          *://depic.me/*
// @match          *://*.depic.me/*
// @match          *://destyy.com/*
// @match          *://*.destyy.com/*
// @match          *://detonating.com/*
// @match          *://*.detonating.com/*
// @match          *://dewimg.com/*
// @match          *://*.dewimg.com/*
// @match          *://directupload.eu/*
// @match          *://*.directupload.eu/*
// @match          *://dlink3.com/*
// @match          *://*.dlink3.com/*
// @match          *://dlupload.com/*
// @match          *://*.dlupload.com/*
// @match          *://dpic.me/*
// @match          *://*.dpic.me/*
// @match          *://dz4link.com/*
// @match          *://*.dz4link.com/*
// @match          *://earnlink.io/*
// @match          *://*.earnlink.io/*
// @match          *://exe-links.com/*
// @match          *://*.exe-links.com/*
// @match          *://exeo.app/*
// @match          *://*.exeo.app/*
// @match          *://fappic.com/*
// @match          *://*.fappic.com/*
// @match          *://fastpic.org/*
// @match          *://*.fastpic.org/*
// @match          *://fc-lc.com/*
// @match          *://*.fc-lc.com/*
// @match          *://fc-lc.xyz/*
// @match          *://*.fc-lc.xyz/*
// @match          *://fc2ppv.stream/*
// @match          *://*.fc2ppv.stream/*
// @match          *://fcd.su/*
// @match          *://*.fcd.su/*
// @match          *://festyy.com/*
// @match          *://*.festyy.com/*
// @match          *://fikfok.net/*
// @match          *://*.fikfok.net/*
// @match          *://fir3.net/*
// @match          *://*.fir3.net/*
// @match          *://forex-trnd.com/*
// @match          *://*.forex-trnd.com/*
// @match          *://fotosik.pl/*
// @match          *://*.fotosik.pl/*
// @match          *://gestyy.com/*
// @match          *://*.gestyy.com/*
// @match          *://get-click2.blogspot.com/*
// @match          *://*.get-click2.blogspot.com/*
// @match          *://getthot.com/*
// @match          *://*.getthot.com/*
// @match          *://gitlink.pro/*
// @match          *://*.gitlink.pro/*
// @match          *://gofile.download/*
// @match          *://*.gofile.download/*
// @match          *://gplinks.co/*
// @match          *://*.gplinks.co/*
// @match          *://hen-tay.net/*
// @match          *://*.hen-tay.net/*
// @match          *://hentai-sub.com/*
// @match          *://*.hentai-sub.com/*
// @match          *://hentai4f.com/*
// @match          *://*.hentai4f.com/*
// @match          *://hentaicovid.com/*
// @match          *://*.hentaicovid.com/*
// @match          *://hentaicovid.org/*
// @match          *://*.hentaicovid.org/*
// @match          *://hentaipig.com/*
// @match          *://*.hentaipig.com/*
// @match          *://hentaixnx.com/*
// @match          *://*.hentaixnx.com/*
// @match          *://hostpic.org/*
// @match          *://*.hostpic.org/*
// @match          *://hotshorturl.com/*
// @match          *://*.hotshorturl.com/*
// @match          *://ibb.co/*
// @match          *://*.ibb.co/*
// @match          *://icerik.site/*
// @match          *://*.icerik.site/*
// @match          *://icutlink.com/*
// @match          *://*.icutlink.com/*
// @match          *://idol69.net/*
// @match          *://*.idol69.net/*
// @match          *://im.ge/*
// @match          *://*.im.ge/*
// @match          *://imagebam.com/*
// @match          *://*.imagebam.com/*
// @match          *://imageban.ru/*
// @match          *://*.imageban.ru/*
// @match          *://imagehaha.com/*
// @match          *://*.imagehaha.com/*
// @match          *://imagehost.at/*
// @match          *://*.imagehost.at/*
// @match          *://imagenetz.de/*
// @match          *://*.imagenetz.de/*
// @match          *://imagenpic.com/*
// @match          *://*.imagenpic.com/*
// @match          *://imageshack.com/*
// @match          *://*.imageshack.com/*
// @match          *://imageshimage.com/*
// @match          *://*.imageshimage.com/*
// @match          *://imagetwist.com/*
// @match          *://*.imagetwist.com/*
// @match          *://imagetwist.netlify.app/*
// @match          *://*.imagetwist.netlify.app/*
// @match          *://imageup.ru/*
// @match          *://*.imageup.ru/*
// @match          *://imageupper.com/*
// @match          *://*.imageupper.com/*
// @match          *://imagevenue.com/*
// @match          *://*.imagevenue.com/*
// @match          *://imagexport.com/*
// @match          *://*.imagexport.com/*
// @match          *://imgadult.com/*
// @match          *://*.imgadult.com/*
// @match          *://imgair.net/*
// @match          *://*.imgair.net/*
// @match          *://imgbaron.com/*
// @match          *://*.imgbaron.com/*
// @match          *://imgbase.ru/*
// @match          *://*.imgbase.ru/*
// @match          *://imgbb.com/*
// @match          *://*.imgbb.com/*
// @match          *://imgblaze.net/*
// @match          *://*.imgblaze.net/*
// @match          *://imgbox.com/*
// @match          *://*.imgbox.com/*
// @match          *://imgcloud.pw/*
// @match          *://*.imgcloud.pw/*
// @match          *://imgdawgknuttz.com/*
// @match          *://*.imgdawgknuttz.com/*
// @match          *://imgdrive.net/*
// @match          *://*.imgdrive.net/*
// @match          *://imgfira.cc/*
// @match          *://*.imgfira.cc/*
// @match          *://imgflip.com/*
// @match          *://*.imgflip.com/*
// @match          *://imgfrost.net/*
// @match          *://*.imgfrost.net/*
// @match          *://imghit.com/*
// @match          *://*.imghit.com/*
// @match          *://imgspice.com/*
// @match          *://*.imgspice.com/*
// @match          *://imgsto.com/*
// @match          *://*.imgsto.com/*
// @match          *://imgtaxi.com/*
// @match          *://*.imgtaxi.com/*
// @match          *://imgtraffic.com/*
// @match          *://*.imgtraffic.com/*
// @match          *://imgwallet.com/*
// @match          *://*.imgwallet.com/*
// @match          *://imx.to/*
// @match          *://*.imx.to/*
// @match          *://indishare.org/*
// @match          *://*.indishare.org/*
// @match          *://infidrive.net/*
// @match          *://*.infidrive.net/*
// @match          *://jav-load.com/*
// @match          *://*.jav-load.com/*
// @match          *://javball.com/*
// @match          *://*.javball.com/*
// @match          *://javbee.vip/*
// @match          *://*.javbee.vip/*
// @match          *://javlibrary.com/*
// @match          *://*.javlibrary.com/*
// @match          *://javring.com/*
// @match          *://*.javring.com/*
// @match          *://javstore.net/*
// @match          *://*.javstore.net/*
// @match          *://javsunday.com/*
// @match          *://*.javsunday.com/*
// @match          *://javtele.net/*
// @match          *://*.javtele.net/*
// @match          *://javtenshi.com/*
// @match          *://*.javtenshi.com/*
// @match          *://k2s.cc/*
// @match          *://*.k2s.cc/*
// @match          *://katfile.com/*
// @match          *://*.katfile.com/*
// @match          *://keeplinks.org/*
// @match          *://*.keeplinks.org/*
// @match          *://keptarolo.hu/*
// @match          *://*.keptarolo.hu/*
// @match          *://kimochi.info/*
// @match          *://*.kimochi.info/*
// @match          *://kin8-av.com/*
// @match          *://*.kin8-av.com/*
// @match          *://kin8-jav.com/*
// @match          *://*.kin8-jav.com/*
// @match          *://kingofshrink.com/*
// @match          *://*.kingofshrink.com/*
// @match          *://kr-av.com/*
// @match          *://*.kr-av.com/*
// @match          *://linegee.net/*
// @match          *://*.linegee.net/*
// @match          *://link1s.com/*
// @match          *://*.link1s.com/*
// @match          *://linkmoni.com/*
// @match          *://*.linkmoni.com/*
// @match          *://linkpoi.me/*
// @match          *://*.linkpoi.me/*
// @match          *://linkshrink.net/*
// @match          *://*.linkshrink.net/*
// @match          *://linksly.co/*
// @match          *://*.linksly.co/*
// @match          *://lnk2.cc/*
// @match          *://*.lnk2.cc/*
// @match          *://loaninsurehub.com/*
// @match          *://*.loaninsurehub.com/*
// @match          *://lolinez.com/*
// @match          *://*.lolinez.com/*
// @match          *://looble.net/*
// @match          *://*.looble.net/*
// @match          *://lookmyimg.com/*
// @match          *://*.lookmyimg.com/*
// @match          *://mangalist.org/*
// @match          *://*.mangalist.org/*
// @match          *://megalink.pro/*
// @match          *://*.megalink.pro/*
// @match          *://met.bz/*
// @match          *://*.met.bz/*
// @match          *://miniurl.pw/*
// @match          *://*.miniurl.pw/*
// @match          *://miragepics.com/*
// @match          *://*.miragepics.com/*
// @match          *://mirrored.to/*
// @match          *://*.mirrored.to/*
// @match          *://mitly.us/*
// @match          *://*.mitly.us/*
// @match          *://multiup.io/*
// @match          *://*.multiup.io/*
// @match          *://nmac.to/*
// @match          *://*.nmac.to/*
// @match          *://noelshack.com/*
// @match          *://*.noelshack.com/*
// @match          *://noweconomy.live/*
// @match          *://*.noweconomy.live/*
// @match          *://oke.io/*
// @match          *://*.oke.io/*
// @match          *://oko.sh/*
// @match          *://*.oko.sh/*
// @match          *://oni.vn/*
// @match          *://*.oni.vn/*
// @match          *://onlinefreecourse.net/*
// @match          *://*.onlinefreecourse.net/*
// @match          *://otomi-games.com/*
// @match          *://*.otomi-games.com/*
// @match          *://ouo.io/*
// @match          *://*.ouo.io/*
// @match          *://ouo.press/*
// @match          *://*.ouo.press/*
// @match          *://outletpic.com/*
// @match          *://*.outletpic.com/*
// @match          *://ovabee.com/*
// @match          *://*.ovabee.com/*
// @match          *://pahe.plus/*
// @match          *://*.pahe.plus/*
// @match          *://payskip.org/*
// @match          *://*.payskip.org/*
// @match          *://pic-upload.de/*
// @match          *://*.pic-upload.de/*
// @match          *://picforall.ru/*
// @match          *://*.picforall.ru/*
// @match          *://picstate.com/*
// @match          *://*.picstate.com/*
// @match          *://picturedent.org/*
// @match          *://*.picturedent.org/*
// @match          *://pictwn.com/*
// @match          *://*.pictwn.com/*
// @match          *://picyield.com/*
// @match          *://*.picyield.com/*
// @match          *://pig69.com/*
// @match          *://*.pig69.com/*
// @match          *://pilot007.org/*
// @match          *://*.pilot007.org/*
// @match          *://pimpandhost.com/*
// @match          *://*.pimpandhost.com/*
// @match          *://pingit.im/*
// @match          *://*.pingit.im/*
// @match          *://pixhost.to/*
// @match          *://*.pixhost.to/*
// @match          *://pixroute.com/*
// @match          *://*.pixroute.com/*
// @match          *://pixxxels.cc/*
// @match          *://*.pixxxels.cc/*
// @match          *://porn-pig.com/*
// @match          *://*.porn-pig.com/*
// @match          *://porn4f.com/*
// @match          *://*.porn4f.com/*
// @match          *://porn4f.org/*
// @match          *://*.porn4f.org/*
// @match          *://pornyhost.com/*
// @match          *://*.pornyhost.com/*
// @match          *://postimg.cc/*
// @match          *://*.postimg.cc/*
// @match          *://postlmg.cc/*
// @match          *://*.postlmg.cc/*
// @match          *://prnt.sc/*
// @match          *://*.prnt.sc/*
// @match          *://realsht.mobi/*
// @match          *://*.realsht.mobi/*
// @match          *://rintor.space/*
// @match          *://*.rintor.space/*
// @match          *://rlu.ru/*
// @match          *://*.rlu.ru/*
// @match          *://ryuugames.com/*
// @match          *://*.ryuugames.com/*
// @match          *://segmentnext.com/*
// @match          *://*.segmentnext.com/*
// @match          *://sfile.mobi/*
// @match          *://*.sfile.mobi/*
// @match          *://sh.st/*
// @match          *://*.sh.st/*
// @match          *://short.am/*
// @match          *://*.short.am/*
// @match          *://shortlinkto.biz/*
// @match          *://*.shortlinkto.biz/*
// @match          *://shortmoz.link/*
// @match          *://*.shortmoz.link/*
// @match          *://shotcan.com/*
// @match          *://*.shotcan.com/*
// @match          *://shrinkcash.com/*
// @match          *://*.shrinkcash.com/*
// @match          *://shrt10.com/*
// @match          *://*.shrt10.com/*
// @match          *://silverpic.com/*
// @match          *://*.silverpic.com/*
// @match          *://similarsites.com/*
// @match          *://*.similarsites.com/*
// @match          *://smilinglinks.com/*
// @match          *://*.smilinglinks.com/*
// @match          *://spacetica.com/*
// @match          *://*.spacetica.com/*
// @match          *://spaste.com/*
// @match          *://*.spaste.com/*
// @match          *://srt.am/*
// @match          *://*.srt.am/*
// @match          *://starimage.club/*
// @match          *://*.starimage.club/*
// @match          *://stfly.me/*
// @match          *://*.stfly.me/*
// @match          *://stfly.xyz/*
// @match          *://*.stfly.xyz/*
// @match          *://supercheats.com/*
// @match          *://*.supercheats.com/*
// @match          *://sweetie-fox.com/*
// @match          *://*.sweetie-fox.com/*
// @match          *://swzz.xyz/*
// @match          *://*.swzz.xyz/*
// @match          *://techgeek.digital/*
// @match          *://*.techgeek.digital/*
// @match          *://techstudify.com/*
// @match          *://*.techstudify.com/*
// @match          *://techtrendmakers.com/*
// @match          *://*.techtrendmakers.com/*
// @match          *://tezzpic.com/*
// @match          *://*.tezzpic.com/*
// @match          *://thefileslocker.net/*
// @match          *://*.thefileslocker.net/*
// @match          *://thinfi.com/*
// @match          *://*.thinfi.com/*
// @match          *://thotpacks.xyz/*
// @match          *://*.thotpacks.xyz/*
// @match          *://tmearn.net/*
// @match          *://*.tmearn.net/*
// @match          *://tnshort.net/*
// @match          *://*.tnshort.net/*
// @match          *://trafficimage.club/*
// @match          *://*.trafficimage.club/*
// @match          *://tribuntekno.com/*
// @match          *://*.tribuntekno.com/*
// @match          *://turboimagehost.com/*
// @match          *://*.turboimagehost.com/*
// @match          *://turkdown.com/*
// @match          *://*.turkdown.com/*
// @match          *://tutwuri.id/*
// @match          *://*.tutwuri.id/*
// @match          *://uncenav.com/*
// @match          *://*.uncenav.com/*
// @match          *://uplinkto.hair/*
// @match          *://*.uplinkto.hair/*
// @match          *://uploadhaven.com/*
// @match          *://*.uploadhaven.com/*
// @match          *://uploadrar.com/*
// @match          *://*.uploadrar.com/*
// @match          *://urlbluemedia.shop/*
// @match          *://*.urlbluemedia.shop/*
// @match          *://urlcash.com/*
// @match          *://*.urlcash.com/*
// @match          *://urlcash.org/*
// @match          *://*.urlcash.org/*
// @match          *://urlgalleries.com/*
// @match          *://*.urlgalleries.com/*
// @match          *://usersdrive.com/*
// @match          *://*.usersdrive.com/*
// @match          *://vinaurl.net/*
// @match          *://*.vinaurl.net/*
// @match          *://vipr.im/*
// @match          *://*.vipr.im/*
// @match          *://vzturl.com/*
// @match          *://*.vzturl.com/*
// @match          *://xcamcovid.com/*
// @match          *://*.xcamcovid.com/*
// @match          *://xpshort.com/*
// @match          *://*.xpshort.com/*
// @match          *://xxpics.org/*
// @match          *://*.xxpics.org/*
// @match          *://xxxs.org/*
// @match          *://*.xxxs.org/*
// @match          *://xxxwebdlxxx.org/*
// @match          *://*.xxxwebdlxxx.org/*
// @match          *://xxxwebdlxxx.top/*
// @match          *://*.xxxwebdlxxx.top/*
// @match          *://zegtrends.com/*
// @match          *://*.zegtrends.com/*
// ==/UserScript==

 (() => { 
 	"use strict";
 	var __webpack_modules__ = ([
,
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   AdsBypasserError: () => ( AdsBypasserError),
   every: () => ( every),
   find: () => ( find),
   forEach: () => ( forEach),
   isString: () => ( isString),
   map: () => ( map),
   none: () => ( none),
   nop: () => ( nop),
   partial: () => ( partial),
   tryEvery: () => ( tryEvery),
   wait: () => ( wait)
 });
class AdsBypasserError extends Error {
  constructor(message) {
    super(message);
  }
  get name() {
    return "AdsBypasserError";
  }
}
function forEach(collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.forEach.call(collection, fn);
  }
  return Object.keys(collection).forEach((k) =>
    fn(collection[k], k, collection),
  );
}
function every(collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.every.call(collection, fn);
  }
  return Object.keys(collection).every((k) => fn(collection[k], k, collection));
}
function map(collection, fn) {
  if (isArrayLike(collection)) {
    return Array.prototype.map.call(collection, fn);
  }
  const mapped = Object.assign({}, collection);
  Object.getOwnPropertyNames(mapped).forEach((k) => {
    mapped[k] = fn(collection[k], k, collection);
  });
  return mapped;
}
function find(collection, fn) {
  for (const [k, v] of enumerate(collection)) {
    const r = fn(v, k, collection);
    if (r !== none) return [k, v, r];
  }
  return [none, none, none];
}
function* enumerate(collection) {
  if (isArrayLike(collection)) {
    yield* Array.prototype.entries.call(collection);
    return;
  }
  const keys = Object.getOwnPropertyNames(collection);
  for (const k of keys) yield [k, collection[k]];
}
function isArrayLike(collection) {
  return Array.isArray(collection) || isNodeList(collection);
}
function isNodeList(collection) {
  return collection.constructor.name === "NodeList";
}
function partial(fn, ...args) {
  if (typeof fn !== "function")
    throw new AdsBypasserError("must give a function");
  return (...innerArgs) => fn(...args.concat(innerArgs));
}
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
function nop() {}
const none = nop;
function wait(msDelay) {
  return new Promise((resolve) => setTimeout(resolve, msDelay));
}
function tryEvery(msInterval, fn) {
  return new Promise((resolve) => {
    const handle = setInterval(() => {
      const result = fn();
      if (result !== none) {
        clearInterval(handle);
        resolve(result);
      }
    }, msInterval);
  });
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   findHandler: () => ( findHandler),
   register: () => ( register)
 });
 var util_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const patterns = [];
function register(pattern) {
  patterns.push(pattern);
}
function dispatchByObject(rule, urlObj) {
  const matched = (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.map)(rule, (pattern, part) => {
    if (pattern instanceof RegExp) return urlObj[part].match(pattern);
    if (Array.isArray(pattern)) {
      const [, , r] = (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.find)(pattern, (sp) => {
        const m = urlObj[part].match(sp);
        return m || util_core_js__WEBPACK_IMPORTED_MODULE_0__.none;
      });
      return r !== util_core_js__WEBPACK_IMPORTED_MODULE_0__.none ? r : null;
    }
    throw new util_core_js__WEBPACK_IMPORTED_MODULE_0__.AdsBypasserError("invalid rule");
  });
  const passed = (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.every)(matched, (v) => !!v);
  return passed ? matched : null;
}
function dispatchByRegExp(rule, url) {
  return url.match(rule);
}
function dispatchByArray(rules, url1, url3, url6) {
  const [, , r] = (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.find)(rules, (rule) => {
    const m = dispatch(rule, url1, url3, url6);
    return m ? m : util_core_js__WEBPACK_IMPORTED_MODULE_0__.none;
  });
  return r !== util_core_js__WEBPACK_IMPORTED_MODULE_0__.none ? r : null;
}
function dispatchByString(rule, urlObj) {
  const schemeRegex = /\*|https?|file|ftp|chrome-extension/;
  const hostRegex = /\*|(\*\.)?([^/*]+)/;
  const pathRegex = /\/.*/;
  const tmp = `^(${schemeRegex.source})://(${hostRegex.source})?(${pathRegex.source})$`;
  const up = new RegExp(tmp);
  const matched = rule.match(up);
  if (!matched) return null;
  const [, scheme, host, wc, sd, path] = matched;
  if (
    (scheme === "*" && !/https?/.test(urlObj.scheme)) ||
    scheme !== urlObj.scheme
  )
    return null;
  if (scheme !== "file" && host !== "*") {
    if (wc) {
      const idx = urlObj.host.indexOf(sd);
      if (idx < 0 || idx + sd.length !== urlObj.host.length) return null;
    } else if (host !== urlObj.host) return null;
  }
  const pathRegexFinal = new RegExp(
    `^${path.replace(/[*.[\]?+#]/g, (c) => (c === "*" ? ".*" : "\\" + c))}$`,
  );
  if (!pathRegexFinal.test(urlObj.path)) return null;
  return urlObj;
}
function dispatchByFunction(rule, url1, url3, url6) {
  return rule(url1, url3, url6);
}
function dispatch(rule, url1, url3, url6) {
  if (Array.isArray(rule)) return dispatchByArray(rule, url1, url3, url6);
  if (typeof rule === "function")
    return dispatchByFunction(rule, url1, url3, url6);
  if (rule instanceof RegExp) return dispatchByRegExp(rule, url1);
  if ((0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.isString)(rule)) return dispatchByString(rule, url3);
  return dispatchByObject(rule, url6);
}
function findHandler() {
  const url1 = window.location.toString();
  const url3 = {
    scheme: window.location.protocol.slice(0, -1),
    host: window.location.host,
    path:
      window.location.pathname + window.location.search + window.location.hash,
  };
  const url6 = {
    scheme: window.location.protocol,
    host: window.location.hostname,
    port: window.location.port,
    path: window.location.pathname,
    query: window.location.search,
    hash: window.location.hash,
  };
  const [i, pattern, matched] = (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.find)(patterns, (pattern) => {
    const m = dispatch(pattern.rule, url1, url3, url6);
    return m ? m : util_core_js__WEBPACK_IMPORTED_MODULE_0__.none;
  });
  if (i === util_core_js__WEBPACK_IMPORTED_MODULE_0__.none) return null;
  if (!pattern.start && !pattern.ready) return null;
  return {
    start: pattern.start ? (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.partial)(pattern.start, matched) : util_core_js__WEBPACK_IMPORTED_MODULE_0__.nop,
    ready: pattern.ready ? (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.partial)(pattern.ready, matched) : util_core_js__WEBPACK_IMPORTED_MODULE_0__.nop,
  };
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   GMAPI: () => ( GMAPI),
   rawUSW: () => ( rawUSW),
   usw: () => ( usw)
 });
 var util_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const rawUSW = getUnsafeWindow();
const usw = getUnsafeWindowProxy();
const GMAPI = getGreaseMonkeyAPI();
function getUnsafeWindow() {
  let w = null;
  try {
    w = unsafeWindow;
  } catch {
    try {
      w = (0, eval)("this").global;
    } catch {
    }
  }
  return w ? w : (0, eval)("this").window;
}
function getGreaseMonkeyAPI() {
  if (rawUSW.global) return null;
  const gm = {};
  gm.openInTab =
    typeof GM_openInTab === "function" ? GM_openInTab : GM.openInTab;
  gm.getValue =
    typeof GM_getValue === "function"
      ? (name, default_) => Promise.resolve(GM_getValue(name, default_))
      : GM.getValue;
  gm.setValue =
    typeof GM_setValue === "function"
      ? (name, value) => Promise.resolve(GM_setValue(name, value))
      : GM.setValue;
  gm.deleteValue =
    typeof GM_deleteValue === "function"
      ? (name) => Promise.resolve(GM_deleteValue(name))
      : GM.deleteValue;
  gm.xmlHttpRequest =
    typeof GM_xmlhttpRequest === "function"
      ? GM_xmlhttpRequest
      : GM.xmlHttpRequest;
  gm.registerMenuCommand =
    typeof GM_registerMenuCommand === "function" ? GM_registerMenuCommand : util_core_js__WEBPACK_IMPORTED_MODULE_0__.nop;
  if (typeof GM_getResourceURL === "function") {
    gm.getResourceUrl = (resourceName) =>
      Promise.resolve(GM_getResourceURL(resourceName));
  } else if (typeof GM === "object" && GM && GM.getResourceUrl) {
    gm.getResourceUrl = GM.getResourceUrl;
  }
  return gm;
}
function getGMInfo() {
  if (typeof GM_info === "object" && GM_info) return GM_info;
  if (typeof GM === "object" && GM && GM.info) return GM.info;
  return {};
}
const MAGIC_KEY = "__adsbypasser_reverse_proxy__";
function getUnsafeWindowProxy() {
  const isGreaseMonkey = getGMInfo().scriptHandler === "Greasemonkey";
  if (!isGreaseMonkey) return rawUSW;
  const decorator = {
    set(target, key, value) {
      if (key === MAGIC_KEY) return false;
      target[key] = clone(value);
      return true;
    },
    get(target, key) {
      if (key === MAGIC_KEY) return target;
      const value = target[key];
      const type = typeof value;
      if (value === null || (type !== "function" && type !== "object"))
        return value;
      return new Proxy(value, decorator);
    },
    apply(target, self, args) {
      args = Array.prototype.slice.call(args);
      if (target === unsafeWindow.Object.defineProperty)
        args[0] = args[0][MAGIC_KEY];
      if (target === unsafeWindow.Function.apply) {
        self = self[MAGIC_KEY];
        args[1] = Array.prototype.slice.call(args[1]);
      }
      if (target === unsafeWindow.document.querySelector)
        self = self[MAGIC_KEY];
      if (target === unsafeWindow.document.write) self = self[MAGIC_KEY];
      const usargs = clone(args);
      return target.apply(self, usargs);
    },
    construct(target, args) {
      args = Array.prototype.slice.call(args);
      args.unshift(undefined);
      const usargs = clone(args);
      const bind = unsafeWindow.Function.prototype.bind;
      return new (bind.apply(target, usargs))();
    },
  };
  return new Proxy(unsafeWindow, decorator);
}
function clone(safe) {
  if (safe === null || !(safe instanceof Object)) return safe;
  if (safe === unsafeWindow) return safe;
  if (safe instanceof String) return safe.toString();
  if (safe instanceof Function)
    return exportFunction(safe, unsafeWindow, {
      allowCrossOriginArguments: true,
    });
  if (safe instanceof Array) {
    const unsafe = new unsafeWindow.Array();
    for (let i = 0; i < safe.length; i++) unsafe.push(clone(safe[i]));
    return unsafe;
  }
  const unsafe = new unsafeWindow.Object();
  (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(safe, (v, k) => {
    unsafe[k] = clone(v);
  });
  return unsafe;
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   dumpConfig: () => ( dumpConfig),
   loadConfig: () => ( loadConfig)
 });
 var util_dispatcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
 var util_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
const MANIFEST = [
  {
    key: "version",
    default_: 0,
    verify: (v) => typeof v === "number" && v >= 0,
    normalize: parseInt,
  },
  {
    key: "align_center",
    default_: true,
    verify: (v) => typeof v === "boolean",
    normalize: Boolean,
    label: "Align Center",
    help: "Align image to the center if possible.",
    type: "checkbox",
  },
  {
    key: "change_background",
    default_: true,
    verify: (v) => typeof v === "boolean",
    normalize: Boolean,
    label: "Change Background",
    help: "Use Firefox-like image background.",
    type: "checkbox",
  },
  {
    key: "redirect_image",
    default_: true,
    verify: (v) => typeof v === "boolean",
    normalize: Boolean,
    label: "Redirect Image",
    help: "Directly open image link if possible.",
    type: "checkbox",
  },
  {
    key: "scale_image",
    default_: true,
    verify: (v) => typeof v === "boolean",
    normalize: Boolean,
    label: "Scale Image",
    help: "Scale image to fit window.",
    type: "checkbox",
  },
  {
    key: "log_level",
    default_: 1,
    verify: (v) => typeof v === "number" && v >= 0 && v <= 2,
    normalize: parseInt,
    label: "Log Level",
    help: "0: quiet, 1: default, 2: verbose",
    type: "select",
    menu: [
      [0, "0 (quiet)"],
      [1, "1 (default)"],
      [2, "2 (verbose)"],
    ],
  },
];
async function sanityCheck() {
  const values = await Promise.all(MANIFEST.map((d) => util_platform_js__WEBPACK_IMPORTED_MODULE_1__.GMAPI.getValue(d.key)));
  const updates = {};
  MANIFEST.forEach((d, i) => {
    let val = values[i];
    if (!d.verify(val)) val = d.default_;
    updates[d.key] = val;
  });
  await Promise.all(
    Object.entries(updates).map(([k, v]) => util_platform_js__WEBPACK_IMPORTED_MODULE_1__.GMAPI.setValue(k, v)),
  );
}
function waitForPage() {
  return new Promise((resolve) => {
    if (document.readyState === "complete" && util_platform_js__WEBPACK_IMPORTED_MODULE_1__.usw.render) return resolve();
    const check = () => {
      if (document.readyState === "complete" && util_platform_js__WEBPACK_IMPORTED_MODULE_1__.usw.render) {
        clearInterval(interval);
        resolve();
      }
    };
    const interval = setInterval(check, 50);
    document.addEventListener("DOMContentLoaded", check);
  });
}
async function dumpConfig() {
  const values = await Promise.all(MANIFEST.map((d) => util_platform_js__WEBPACK_IMPORTED_MODULE_1__.GMAPI.getValue(d.key)));
  const o = {};
  MANIFEST.forEach((d, i) => (o[d.key] = values[i]));
  return o;
}
async function loadConfig() {
  await sanityCheck();
  (0,util_dispatcher_js__WEBPACK_IMPORTED_MODULE_0__.register)({
    rule: { host: /^adsbypasser\.github\.io$/, path: /^\/configure\.html$/ },
    async ready() {
      await waitForPage();
      util_platform_js__WEBPACK_IMPORTED_MODULE_1__.usw.commit = async (data) => {
        for (const [k, v] of Object.entries(data)) await util_platform_js__WEBPACK_IMPORTED_MODULE_1__.GMAPI.setValue(k, v);
      };
      const config = await dumpConfig();
      const options = MANIFEST.reduce((acc, d) => {
        if (!d.type || d.key === "version") return acc;
        acc[d.key] = {
          type: d.type,
          value: config[d.key],
          label: d.label,
          help: d.help,
        };
        if (d.type === "select") acc[d.key].menu = d.menu;
        return acc;
      }, {});
      util_platform_js__WEBPACK_IMPORTED_MODULE_1__.usw.render({ version: config.version, options });
    },
  });
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   debug: () => ( debug),
   info: () => ( info),
   warn: () => ( warn)
 });
 var util_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const quiet = false;
function log(method, args) {
  if (quiet) return;
  args = Array.prototype.slice.call(args);
  if ((0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.isString)(args[0])) {
    args[0] = "AdsBypasser: " + args[0];
  } else {
    args.unshift("AdsBypasser:");
  }
  const fn = console[method];
  if (typeof fn === "function") {
    fn.apply(console, args);
  }
}
function debug() {
  log("debug", arguments);
}
function info() {
  log("info", arguments);
}
function warn() {
  log("warn", arguments);
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 var _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^ak\.sv$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
    const any = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("html");
    any.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(6000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="download_button"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?apunkasoftware\.net$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("div#proceed-now > a#dlink");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^thefileslocker\.net$/,
  },
  async ready() {
    const button = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#downloadbtn");
    button.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^(www\.)?indishare\.org$/, /^uploadrar\.com$/],
  },
  async ready() {
    const btn = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("button#downloadbtn.downloadbtn");
    btn.removeAttribute("disabled");
    btn.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^infidrive\.net$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(40000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("button.inline-flex:nth-child(2)");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^k2s\.cc$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(35000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("a.link-to-file");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^katfile\.com$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[id="dlink"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?keeplinks\.org$/,
  },
  async ready() {
    const button = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('[id="btnproceedsubmit"]');
    button.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: "https://www.mirrored.to/files/*",
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".col-sm.centered.extra-top a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^multiup\.io$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-info.btn-lg.btn-block");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.onlinefreecourse\.net$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="btn btn-success"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^sfile\.mobi$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(8000);
    const btn = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#download");
    btn.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^uploadhaven\.com$/,
    path: /^\/download\//,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(18000);
    const f = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-submit-free.btn-download-free");
    f.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^usersdrive\.com$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-download");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^1ink\.cc$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#countingbtn");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^1link\.club$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#download.btn");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^a2zapk\.io$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#dlbtn li a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^adfoc\.us$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".skip");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^adshnk\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(16000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(
      'button[class="ui right labeled icon button primary huge fluid"]',
    );
    b.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(18000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[id="final_redirect"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.adz7short\.space$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#continue");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(10000);
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^bcvc\.ink$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(5000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#getLink");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?biglistofwebsites\.com$/,
    path: /^\/go\/(\w+\.\w+)$/,
  },
  async start(m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink("http://" + m.path[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: [
    {
      host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
      path: /\/o\/([a-zA-Z0-9]+)/,
    },
  ],
  async start(m) {
    const direct_link = window.atob(m.path[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(direct_link);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^bioskopkeren\.boo$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
    const c = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".reklamgec");
    c.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^boost\.ink$/,
  },
  async start() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("body").getAttribute("result");
    if (b) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(atob(b));
    } else {
      return;
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^cocoleech\.com$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn.btn-block.btn-success");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^cpmlink\.net$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#btn-main");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^cutpaid\.com$/,
  },
  async ready() {
    let a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-primary");
    if (a) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(20000);
      a.click();
    }
    a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-success.btn-lg.get-link");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(9000);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.dlink3\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(12000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('[class="myButton"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^dlupload\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(3500);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(
      ".btn-block.btn-primary.text-white.shadow.m-1.position-relative.up-tooltip-container",
    );
    b.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(6000);
    const btn = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-block.continue-btn-bg");
    btn.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^earnlink\.io$/,
  },
  async ready() {
    const directUrl = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/"([^"]+)"\)\.html\("Continue"\)/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(directUrl[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^forex-trnd\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(10000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".get-link");
    a.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^exeo\.app$/, /^exe-links\.com$/],
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".link-button.button");
    a.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(2000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".link-button");
    b.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(6000);
    const c = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".link-button.get-link");
    c.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^fc-lc\.(com|xyz)$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(2000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-primary.btn-captcha.mb-4");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^loaninsurehub\.com$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#glink");
    if (b) {
      b.click();
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(12000);
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove("#overlay");
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#surl");
    if (a) {
      a.click();
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^fir3\.net$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(12000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn.btn-success.btn-lg.get-link");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^get-click2\.blogspot\.com$/,
  },
  async ready() {
    const clbt = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("button#gotolink");
    clbt.removeAttribute("disabled");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1);
    clbt.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^getthot\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(12000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".skip-btn");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^gplinks\.co$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(8000);
    const d = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".get-link");
    d.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^hen-tay\.net$/,
    path: /^\/go\//,
  },
  async ready() {
    const h = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#download_url div a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(h.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^hotshorturl\.com$/,
  },
  async ready() {
    const frame = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("frame[scrolling=yes]");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(frame.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^icutlink\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(10000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-success.btn-lg.get-link");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^zegtrends\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(12000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("div > button.bsub");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imagetwist\.netlify\.app$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn.btn-dark");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.javlibrary\.com$/,
    query: /url=([^&]+)/,
  },
  async start(m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(decodeURIComponent(m.query[1]));
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^kimochi\.info$/,
    path: /^\/inter$/,
  },
  async ready() {
    const ma = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("a#next");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(ma.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?kingofshrink\.com$/,
  },
  async ready() {
    const l = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#textresult > a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(l.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^linegee\.net$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("p.kecil a");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^link\.turkdown\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(5000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-success.btn-lg.get-link");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^link1s\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(10000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn.btn-success.btn-lg.get-link");
    b.click();
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: [
        /^adsafelink\.com$/,
        /^birdurls\.com$/,
        /^dz4link\.com$/,
        /^(linkmoni|shrinkcash)\.com$/,
        /^shrt10\.com$/,
        /^tmearn\.net$/,
        /^vinaurl\.net$/,
        /^payskip\.org$/,
        /^clik\.pw$/,
        /^miniurl\.pw$/,
        /^aylink\.co$/,
        /^(clk|oko)\.sh$/,
        /^cpmlink\.pro$/,
        /^gitlink\.pro$/,
        /^megalink\.pro$/,
        /^met\.bz/,
        /^mitly\.us$/,
        /^oke\.io$/,
        /^pahe\.plus$/,
        /^pingit\.im$/,
        /^thotpacks\.xyz$/,
      ],
    },
    async ready() {
      const handler = new RecaptchaHandler();
      await handler.call();
    },
  });
  class AbstractHandler {
    constructor() {
      this._overlaySelector = [
        '[class$="Overlay"]',
        "#__random_class_name__",
        "#headlineatas",
        "#myModal",
        ".opacity_wrapper",
        "#overlay",
      ].join(", ");
      this._formSelector = [
        "#go-link",
        ".go-link",
        "#originalLink.get-link",
        'form[action="/links/go"]',
      ].join(", ");
    }
    removeOverlay() {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove(this._overlaySelector);
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.block(this._overlaySelector, document.body);
      setInterval(() => {
        document.body.style.overflow = "initial";
      }, 500);
    }
    removeFrame() {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove("iframe");
    }
    async call() {
      const ok = await this.prepare();
      if (!ok) {
        return;
      }
      const mw = await this.getMiddleware();
      if (!mw) {
        this.withoutMiddleware();
        return;
      }
      const url = await this.getURL(mw);
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
    }
  }
  class RecaptchaHandler extends AbstractHandler {
    async prepare() {
      this.removeOverlay();
      const f = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("#captchaShortlink, div.g-recaptcha");
      if (!f) {
        return true;
      }
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.info("recaptcha detected, stop");
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.info("trying to listen submit button");
      const b = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("#invisibleCaptchaShortlink");
      if (!b) {
        return false;
      }
    }
    async submitListen(b) {
      const o = new MutationObserver(() => {
        if (!b.disabled) {
          b.click();
        }
      });
      o.observe(b, {
        attributes: true,
      });
    }
    async getMiddleware() {
      return await getJQueryForm(this._formSelector);
    }
    withoutMiddleware() {
      const f = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#link-view");
      f.submit();
    }
    async getURL(jForm) {
      while (true) {
        await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
        try {
          const url = await getURLFromJQueryForm(jForm);
          if (url) {
            return url;
          }
        } catch (e) {
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.warn(e);
        }
      }
    }
  }
  async function getJQueryForm(selector) {
    let jQuery = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.$;
    while (!jQuery) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(50);
      jQuery = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.$;
    }
    const f = jQuery(selector);
    if (f.length > 0) {
      return f;
    }
    return null;
  }
  function getURLFromJQueryForm(jForm) {
    return new Promise((resolve, reject) => {
      if (jForm.is("a") && jForm.attr("href")) {
        resolve(jForm.attr("href"));
      }
      const jQuery = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.$;
      jQuery.ajax({
        dataType: "json",
        type: "POST",
        url: jForm.attr("action"),
        data: jForm.serialize(),
        success: (result) => {
          if (result.url) {
            resolve(result.url);
          } else {
            reject(new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError(result.message));
          }
        },
        error: (xhr, status, error) => {
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.warn(xhr, status, error);
          reject(new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError("request error"));
        },
      });
    });
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^n\.fcd\.su$/,
  },
  async ready() {
    const btn = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("a.btn:nth-child(2)");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(btn.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^linkpoi\.me$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(6000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn.btn-primary.btn-block.redirect.get-link");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /^\/[a-zA-Z0-9]+$/,
  },
  async start() {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window._impspcabe = 0;
  },
  async ready() {
    let l = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/revC\("([^"]+)"\)/);
    l = atob(l[1]);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink("/" + l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^linksly\.co$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-primary");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^go\.linksly\.co$/, /^go\.bitcosite\.com$/],
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(8000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-success.btn-lg.get-link");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^lnk2\.cc$/,
    path: /^\/go\//,
  },
  async ready() {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove("iframe, .popupOverlay");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(18000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#getLink");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.lolinez\.com$/,
    query: /\?(.+)/,
  },
  async start(m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^mangalist\.org$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-primary.url.text-center");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^nmac\.to$/,
    path: /^\/dl\/(.+)/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-medium.btn-block");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^noweconomy\.live$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('[class="btn-main get-link"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.oni\.vn$/,
  },
  async ready() {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove("iframe");
    let data = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/data:"([^"]+)"/);
    if (!data) {
      throw new _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.AdsBypasserError("pattern changed");
    }
    data = data[1];
    const url = await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.get("/click.html", data);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^otomi-games\.com$/,
    path: /^\/go\//,
  },
  async ready() {
    const ma = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#wpsafe-link a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(ma.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?ouo\.(io|press)$/,
    path: /(^\/\w+$|^\/go\/\w+$)/,
  },
  async ready() {
    (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("form").submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^icerik\.site$/,
    path: /^\/go/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(500);
    const button = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#get_link_btn");
    button.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^realsht\.mobi$/],
  },
  async ready() {
    const n = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#download_link");
    n.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^preview\.rlu\.ru$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#content > .long_url > a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.ryuugames\.com$/,
    query: /^\?eroge=/,
  },
  async ready() {
    const ma = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#wpsafe-link a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(ma.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^segmentnext\.com$/,
    path: /^\/interstitial\.html$/,
    query: /return_url=([^&]+)/,
  },
  async start(m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(decodeURIComponent(m.query[1]));
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(short|srt)\.am$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(5000);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink("", {
      post: {
        _image: "Continue",
      },
    });
  },
});
(function () {
  const hostRules = [
    /^(cllkme|clkmein|corneey|ceesty)\.com$/,
    /^(destyy|festyy|gestyy)\.com$/,
    /^sh\.st$/,
  ];
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: hostRules,
      path: /^\/[\d\w]+/,
    },
    async ready() {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove("iframe");
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.removeAllTimer();
      const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/sessionId: "([\d\w]+)",/);
      if (m) {
        afterGotSessionId(m[1]);
        return;
      }
      const o = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          const m = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/sessionId: "([\d\w]+)",/);
          if (m) {
            o.disconnect();
            afterGotSessionId(m[1]);
          }
        });
      });
      o.observe(document.body, {
        childList: true,
      });
    },
  });
  function afterGotSessionId(sessionId) {
    const X_NewRelic_ID = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/xpid:"([^"]+)"/);
    const data = {
      adSessionId: sessionId,
    };
    const header = {
      Accept: "application/json, text/javascript",
    };
    if (X_NewRelic_ID) {
      header["X-NewRelic-ID"] = X_NewRelic_ID;
    }
    const i = setInterval(function () {
      _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.get("/shortest-url/end-adsession", data, header).then(function (text) {
        const r = JSON.parse(text);
        if (r.status == "ok" && r.destinationUrl) {
          clearInterval(i);
          _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.removeAllTimer();
          const url = decodeURIComponent(r.destinationUrl);
          return _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(url);
        }
      });
    }, 1000);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^shortlinkto\.biz$/, /^uplinkto\.hair$/],
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".view-well a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^shortmoz\.link$/,
  },
  async ready() {
    const button = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn.btn-primary.btn-block");
    button.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?similarsites\.com$/,
    path: /^\/goto\/([^?]+)/,
  },
  async start(m) {
    let l = m.path[1];
    if (!/^https?:\/\//.test(l)) {
      l = "http://" + l;
    }
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(l);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^spacetica\.com$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn.btn-primary.btn-xs");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.spaste\.com$/,
    path: /^\/site\//,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(15000);
    (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#template-contactform-submit").click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^stfly\.(me|xyz)$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-captcha.m-2.form-send");
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^blogbux\.net$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-captcha.m-2.form-send");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(12000);
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^techtrendmakers\.com$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-captcha.m-2.form-send.step_btn");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(6000);
    b.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?supercheats\.com$/,
    path: /^\/interstitial\.html$/,
    query: /(?:\?|&)oldurl=([^&]+)(?:$|&)/,
  },
  async start(m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^swzz\.xyz$/,
    path: /^\/link\//,
  },
  async ready() {
    const g = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("a.btn.btn-primary");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(g.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^techgeek\.digital$/,
  },
  async ready() {
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('[class="btn-main get-link"]');
    if (b) {
      b.click();
    }
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="btn-main get-link"]');
    if (a) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^techstudify\.com$/,
    path: /^\/elon.php/,
    query: /link=([^&]+)/,
  },
  async start(m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink("https://rplinks.in/" + m.query[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^thinfi\.com$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("div p a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^go\.tnshort\.net$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(3000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('a[class="btn btn-success btn-lg get-link"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^tribuntekno\.com$/,
  },
  async ready() {
    const b = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("#lite-human-verif-button");
    if (b) {
      b.click();
    }
    const c = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("#lite-start-sora-button");
    if (c) {
      c.click();
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^tutwuri\.id$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#btn-1");
    a.click();
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(12000);
    const b = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#btn-2");
    b.click();
    const c = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#btn-3");
    c.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^urlbluemedia\.shop$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(7000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("input#nut");
    a.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /(^|\.)urlcash\.(com|org)$/,
      /^(detonating|smilinglinks|pornyhost|urlgalleries)\.com$/,
      /^looble\.net$/,
      /^xxxs\.org$/,
    ],
  },
  async ready() {
    if (_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window && _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.linkDestUrl) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.window.linkDestUrl);
      return;
    }
    const matches = document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
    if (matches) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(matches[1]);
      return;
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?vzturl\.com$/,
  },
  async ready() {
    const frame = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("frame[scrolling=yes]");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(frame.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^xpshort\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(8000);
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".btn-success.btn-lg.get-link");
    a.click();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^22pixx\.xyz$/,
    path: /^\/ia-[aio]\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/ia-", "/").replace(".html", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^22pixx\.xyz$/,
    path: /^\/ib-[aior]\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/ib-", "/").replace(".html", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^22pixx\.xyz$/,
    path: /^\/i-[ai1]\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/i-", "/").replace(".html", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^22pixx\.xyz$/,
    path: /^\/x-[aor]\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/x-", "/").replace(".html", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^22pixx\.xyz$/,
    path: /^\/y-[ao1]\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/y-", "/").replace(".html", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^22pixx\.xyz$/,
    path: /^\/x-i\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/x", "/y");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^acidimg\.cc$/, /^imx\.to$/],
  },
  async ready() {
    let a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("#continuebutton, .button");
    if (a) {
      a.click();
    } else {
      a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("#imgContinue, .button");
      if (a) {
        a.click();
      }
    }
    a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".centred");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(a.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^bayimg\.com$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#mainImage");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^beeimg\.com$/,
  },
  async ready() {
    const img = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#beeimage");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.casimages\.com$/,
  },
  async ready() {
    const img = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("div.logo a img");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^cubeupload\.com$/,
  },
  async ready() {
    const img = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("img.galleryBigImg");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(depic|dpic)\.me$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#pic");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.directupload\.eu$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('meta[property="og:image"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.content);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^fastpic\.org$/,
  },
  async ready() {
    const a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("#imglink");
    if (a) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(a.href);
      return;
    }
    const directUrl = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/loading_img = '([^"]+)';/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(directUrl[1]);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.fotosik\.pl$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".simple-photo img");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.hostpic\.org$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#photo");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.imagebam\.com$/,
  },
  async ready() {
    let a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("#continue > a");
    if (a) {
      a.click();
    }
    a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".main-image");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(a.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imageban\.ru$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#img_main");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imagehaha\.com$/,
    path: /\/*\/.*/,
  },
  async ready() {
    const img = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("img.img-responsive");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: "https://www.imagehost.at/image/*",
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('meta[property="og:image"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.content);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.imagenetz\.de$/,
  },
  async ready() {
    const img = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".img-rounded.img-responsive");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imageshack\.com$/,
    path: /^\/i\//,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#lp-image");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^imagetwist\.com$/,
      /^imagenpic\.com$/,
      /^imagexport\.com$/,
      /^imageshimage\.com$/,
      /^croea\.com$/,
      /^vipr\.im$/,
    ],
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("img.pic");
    if (window.location.host === "vipr.im") {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src, { replace: true });
    } else {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
    }
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imageup\.ru$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#image");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imageupper\.com$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#img");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.imagevenue\.com$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#main-image");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^cloudgallery\.net$/,
      /^imgair\.net$/,
      /^imgblaze\.net$/,
      /^imgfrost\.net$/,
      /^imgfira\.cc$/,
      /^img[a-z]{2,10}\.(sbs|shop)$/,
      /^pic[a-z]{2,10}\.(sbs|shop)$/,
      /^pix[a-z]{2,10}\.sbs$/,
    ],
  },
  async ready() {
    const matches = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.searchFromScripts(/imgbg\.src = "([^"]+)";/);
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(matches[1], { referer: true });
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^imgbaron\.com$/,
      /^imgsto\.com$/,
      /^silverpic\.com$/,
      /^www\.fappic\.com$/,
    ],
  },
  async ready() {
    const i = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("img.pic");
    if (i) {
      await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
      return;
    }
    const f = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("form");
    f.submit();
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^(imgbase|picforall)\.ru$/],
  },
  async ready() {
    let i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#pay_thumb_img img, #d1 table tbody tr td img");
    i = i.getAttribute("onclick");
    i = i.match(/mshow\('(.+)'\)/);
    i = i[1];
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^imgbb\.com$/, /^ibb\.co$/],
  },
  async ready() {
    const img = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".image-viewer-container img");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imgbox\.com$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#img");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^2i\.(cz|sk)$/,
      /^rintor\.space$/,
      /^[0-9]{1,3}xpics\.space$/,
      /^imgcloud\.pw$/,
      /^pilot007\.org$/,
      /^img\.javstore\.net$/,
      /^(lookmyimg|shotcan)\.com$/,
      /^www\.imghit\.com$/,
    ],
    path: /^\/(image|i)\/.*/,
  },
  async ready() {
    const l = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('link[rel="image_src"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(l.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imgdawgknuttz\.com$/,
  },
  async ready() {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.wait(1000);
    let a = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$(".button");
    if (a) {
      a.click();
    }
    a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".centred");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(a.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^(www\.)?imgdrive\.net$/,
      /^(www\.)?(imgtaxi|imgwallet|imgadult)\.com$/,
    ],
  },
  async ready() {
    let m = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('meta[property="og:image"]');
    m = m.content.replace("small", "big");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(m);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imgflip\.com$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#im");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imgspice\.com$/,
  },
  async ready() {
    const o = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#imgpreview.pic");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(o.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imgtraffic\.com$/,
    path: /^\/a-1\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/a-", "/").replace(".html", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imgtraffic\.com$/,
    path: /^\/i-1\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/i-", "/").replace(".html", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imgtraffic\.com$/,
    path: /^\/n-1\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/n-", "/").replace(".html", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^imgtraffic\.com$/,
    path: /^\/z-1\/(.+)\.jpeg\.html/,
  },
  async start() {
    const path = window.location.href.replace("/z-", "/").replace(".html", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(path);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: [
    "https://3minx.com/upload/en/*",
    "https://4fuk.me/upload/en/*",
    "https://555fap.com/upload/en/*",
    "https://ai18.pics/upload/en/*",
    "https://anime-jav.com/upload/en/*",
    "https://blackwidof.org/upload/en/*",
    "https://chinese-pics.com/upload/en/*",
    "https://cn-av.com/upload/en/*",
    "https://cnpics.org/upload/en/*",
    "https://cnxx.me/upload/en/*",
    "https://cosplay-xxx.com/upload/en/*",
    "https://cosplay18.pics/upload/en/*",
    "https://fc2ppv.stream/upload/en/*",
    "https://fikfok.net/upload/en/*",
    "https://gofile.download/upload/en/*",
    "https://hentai-sub.com/upload/en/*",
    "https://hentai4f.com/upload/en/*",
    "https://hentaicovid.com/uploads/en/*",
    "https://hentaicovid.org/upload/en/*",
    "https://hentaipig.com/upload/en/*",
    "https://hentaixnx.com/upload/en/*",
    "https://idol69.net/upload/en/*",
    "https://javball.com/upload/en/*",
    "https://javring.com/upload/en/*",
    "https://javsunday.com/upload/en/*",
    "https://javtele.net/upload/en/*",
    "https://kin8-av.com/upload/en/*",
    "https://kin8-jav.com/upload/en/*",
    "https://kr-av.com/upload/en/*",
    "https://ovabee.com/upload/en/*",
    "https://pig69.com/upload/en/*",
    "https://porn-pig.com/upload/en/*",
    "https://porn4f.com/upload/en/*",
    "https://porn4f.org/upload/en/*",
    "https://sweetie-fox.com/upload/en/*",
    "https://xcamcovid.com/upload/en/*",
    "https://xxpics.org/upload/en/*",
  ],
  async ready() {
    const m = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('meta[property="og:image"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(m.content);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^image\.javbee\.vip$/,
    path: /^\/en\//,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('meta[property="og:image"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(i.content);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^image\.javbee\.vip$/,
    path: /^\/ib\//,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("a");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(a.href);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: "https://javbee.vip/upload/en/*",
  async ready() {
    const m = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('meta[property="og:image"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(m.content);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^keptarolo\.hu$/,
    path: /^(\/[^/]+\/[^/]+)$/,
  },
  async start(m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage("http://www.keptarolo.hu/kep" + m.path[1]);
  },
});
(function () {
  _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
    rule: {
      host: /^miragepics\.com$/,
      path: /^\/viewer\.php$/,
      query: /file=([^&]+)/,
    },
    start: helper,
  });
  async function helper(m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage("/images/" + m.query[1]);
  }
})();
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.noelshack\.com$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('meta[property="og:image"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.content);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^dewimg\.com$/,
      /^outletpic\.com$/,
      /^pictwn\.com$/,
      /^picyield\.com$/,
      /^tezzpic\.com$/,
    ],
  },
  async ready() {
    const img = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("center > img.picview");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.pic-upload\.de$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".preview_picture_2b");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^picstate\.com$/,
    path: /^\/view\/full\/.*/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#image_container a img");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [
      /^picturedent\.org$/,
      /^everest\.picturedent\.org$/,
      /^pacific\.picturedent\.org$/,
    ],
    path: /^\/image\//,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#full_img");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?pimpandhost\.com$/,
    path: /^\/image\/\d+/,
    query: /^\?size=original/,
  },
  async ready() {
    const img = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#overflow-wrapper img.original");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?pimpandhost\.com$/,
    path: /^\/image\/\d+/,
  },
  async start(m) {
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openLink(m.path + "?size=original");
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: [
    {
      host: /^(www\.)?pixhost\.to$/,
      path: /^\/show\//,
    },
    {
      host: [
        /^3xplanet\.(com|net)$/,
        /^javtenshi\.com$/,
        /^jav-load\.com$/,
        /^uncenav\.com$/,
      ],
      path: /^\/viewimage\//,
    },
  ],
  async ready() {
    _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.remove("iframe, #ad");
    let o = _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.$("#all");
    if (o) {
      o.style.display = "";
    }
    o = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#show_image, #image");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(o.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^(www\.)?pixroute\.com$/,
  },
  async ready() {
    const o = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#download_box img#imgpreview.pic");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(o.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^postimg\.cc$/, /^postlmg\.cc$/, /^pixxxels\.cc$/],
  },
  async ready() {
    const ele = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#download");
    const img = ele.href.replace("?dl=1", "");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^prnt\.sc$/],
    path: /\.html$/,
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: [/^prnt\.sc$/],
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#screenshot-image");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^starimage\.club$/,
    path: /^\/image\/.+$/,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("img.no-select.cursor-zoom-in");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: [
    {
      host: [/^img\.trafficimage\.club$/, /^trafficimage\.club$/],
      path: /^\/image\//,
    },
    {
      host: /^im\.ge$/,
      path: /^\/i\//,
    },
  ],
  async ready() {
    const img = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)('meta[property="og:image"]');
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(img.content);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^www\.turboimagehost\.com$/,
    path: /^\/p\//,
  },
  async ready() {
    const i = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)("#imageid");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(i.src);
  },
});
_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__._.register({
  rule: {
    host: /^xxxwebdlxxx\.(org|top)$/,
  },
  async ready() {
    const a = (0,_ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$)(".centred, .centred_resized");
    await _ADSBYPASSER_NAMESPACE___WEBPACK_IMPORTED_MODULE_0__.$.openImage(a.src);
  },
});
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   $: () => ( $),
   _: () => ( _)
 });
 var util_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
 var util_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
 var util_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
 var util_dispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
 var util_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
 var util_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
 var util_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
 var util_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
 var util_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
 var util_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
const _ = {
  AdsBypasserError: util_core__WEBPACK_IMPORTED_MODULE_2__.AdsBypasserError,
  evil: util_misc__WEBPACK_IMPORTED_MODULE_8__.evil,
  find: util_core__WEBPACK_IMPORTED_MODULE_2__.find,
  forEach: util_core__WEBPACK_IMPORTED_MODULE_2__.forEach,
  generateRandomIP: util_misc__WEBPACK_IMPORTED_MODULE_8__.generateRandomIP,
  info: util_logger__WEBPACK_IMPORTED_MODULE_7__.info,
  none: util_core__WEBPACK_IMPORTED_MODULE_2__.none,
  partial: util_core__WEBPACK_IMPORTED_MODULE_2__.partial,
  register: util_dispatcher__WEBPACK_IMPORTED_MODULE_3__.register,
  tryEvery: util_core__WEBPACK_IMPORTED_MODULE_2__.tryEvery,
  wait: util_core__WEBPACK_IMPORTED_MODULE_2__.wait,
  warn: util_logger__WEBPACK_IMPORTED_MODULE_7__.warn,
};
function $(selector, context) {
  return (0,util_dom__WEBPACK_IMPORTED_MODULE_4__.querySelector)(selector, context);
}
$.$ = util_dom__WEBPACK_IMPORTED_MODULE_4__.querySelectorOrNull;
$.$$ = util_dom__WEBPACK_IMPORTED_MODULE_4__.querySelectorAll;
$.block = util_dom__WEBPACK_IMPORTED_MODULE_4__.block;
$.get = util_ajax__WEBPACK_IMPORTED_MODULE_0__.get;
$.getCookie = util_cookie__WEBPACK_IMPORTED_MODULE_1__.getCookie;
$.nuke = util_misc__WEBPACK_IMPORTED_MODULE_8__.nuke;
$.openImage = util_image__WEBPACK_IMPORTED_MODULE_5__.openImage;
$.openLink = util_link__WEBPACK_IMPORTED_MODULE_6__.openLink;
$.post = util_ajax__WEBPACK_IMPORTED_MODULE_0__.post;
$.remove = util_dom__WEBPACK_IMPORTED_MODULE_4__.remove;
$.removeAllTimer = util_misc__WEBPACK_IMPORTED_MODULE_8__.removeAllTimer;
$.resetCookies = util_cookie__WEBPACK_IMPORTED_MODULE_1__.resetCookies;
$.searchFromScripts = util_dom__WEBPACK_IMPORTED_MODULE_4__.searchFromScripts;
$.setCookie = util_cookie__WEBPACK_IMPORTED_MODULE_1__.setCookie;
$.toDOM = util_dom__WEBPACK_IMPORTED_MODULE_4__.toDOM;
$.window = util_platform__WEBPACK_IMPORTED_MODULE_9__.usw;
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   get: () => ( get),
   post: () => ( post)
 });
 var util_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
 var util_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
class AjaxError extends util_core_js__WEBPACK_IMPORTED_MODULE_0__.AdsBypasserError {
  constructor(method, url, data, headers, status, response) {
    super(`${method} ${url} got ${status}`);
    this._method = method;
    this._url = url;
    this._data = data;
    this._headers = headers;
    this._status = status;
    this._response = response;
  }
  get name() {
    return "AjaxError";
  }
  get method() {
    return this._method;
  }
  get url() {
    return this._url;
  }
  get data() {
    return this._data;
  }
  get headers() {
    return this._headers;
  }
  get status() {
    return this._status;
  }
  get response() {
    return this._response;
  }
}
function* flattenObject(object) {
  if (!object) return;
  for (const [k, v] of Object.entries(object)) {
    if (Array.isArray(v)) {
      for (const v_ of v) yield [[k, ""], v_];
    } else if (typeof v === "object") {
      for (const [k_, v_] of flattenObject(v)) yield [[k, ...k_], v_];
    } else {
      yield [[k], v];
    }
  }
}
function flattenKey(keyList) {
  const [head, ...rest] = keyList;
  return `${head}${rest.map((_) => `[${_}]`)}`;
}
function deepJoin(prefix, object) {
  const keys = Object.getOwnPropertyNames(object);
  const mapped = (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.map)(keys, (k) => {
    const v = object[k];
    const key = `${prefix}[${k}]`;
    if (typeof v === "object") return deepJoin(key, v);
    return [key, v].map(encodeURIComponent).join("=");
  });
  return mapped.join("&");
}
function toQuery(data) {
  const type = typeof data;
  if (data === null || (type !== "string" && type !== "object")) return "";
  if (type === "string") return data;
  if (data instanceof String) return data.toString();
  const keys = Object.getOwnPropertyNames(data);
  return (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.map)(keys, (k) => {
    const v = data[k];
    if (typeof v === "object") return deepJoin(k, v);
    return [k, v].map(encodeURIComponent).join("=");
  }).join("&");
}
function toForm(data) {
  const type = typeof data;
  if (data === null || (type !== "string" && type !== "object")) return "";
  if (type === "string") return data;
  if (data instanceof String) return data.toString();
  const form = new FormData();
  for (const [k, v] of flattenObject(data)) {
    form.append(flattenKey(k), v);
  }
  return form;
}
function ajax(method, url, data, headers) {
  (0,util_logger_js__WEBPACK_IMPORTED_MODULE_2__.debug)("ajax", method, url, data, headers);
  const l = document.createElement("a");
  l.href = url;
  const reqHost = l.hostname;
  const overrideHeaders = {
    Host: reqHost || window.location.host,
    Origin: window.location.origin,
    Referer: window.location.href,
    "X-Requested-With": "XMLHttpRequest",
  };
  (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(overrideHeaders, (v, k) => {
    if (headers[k] === util_core_js__WEBPACK_IMPORTED_MODULE_0__.none) {
      delete headers[k];
    } else {
      headers[k] = v;
    }
  });
  if (data) {
    if (headers["Content-Type"]?.indexOf("json") >= 0) {
      data = JSON.stringify(data);
    } else if (headers["Content-Type"]?.indexOf("multipart") >= 0) {
      data = toForm(data);
    } else {
      data = toQuery(data);
    }
    headers["Content-Length"] = data.length;
  }
  return new Promise((resolve, reject) => {
    util_platform_js__WEBPACK_IMPORTED_MODULE_1__.GMAPI.xmlHttpRequest({
      method,
      url,
      data,
      headers,
      onload(response) {
        response =
          typeof response.responseText !== "undefined" ? response : this;
        if (response.status !== 200) {
          reject(
            new AjaxError(
              method,
              url,
              data,
              headers,
              response.status,
              response.responseText,
            ),
          );
        } else {
          resolve(response.responseText);
        }
      },
      onerror(response) {
        response =
          typeof response.responseText !== "undefined" ? response : this;
        reject(
          new AjaxError(
            method,
            url,
            data,
            headers,
            response.status,
            response.responseText,
          ),
        );
      },
    });
  });
}
function get(url, data, headers) {
  data = toQuery(data);
  data = data ? `?${data}` : "";
  headers = headers || {};
  return ajax("GET", url + data, "", headers);
}
function post(url, data, headers) {
  const h = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  if (headers)
    (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(headers, (v, k) => {
      h[k] = v;
    });
  return ajax("POST", url, data, h);
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   getCookie: () => ( getCookie),
   resetCookies: () => ( resetCookies),
   setCookie: () => ( setCookie)
 });
 var util_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function setCookie(key, value) {
  document.cookie = `${key}=${value};path=${location.pathname};`;
}
function getCookie(key) {
  const [, c] = (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.find)(document.cookie.split(";"), (v) => {
    const k = v.replace(/^\s*([a-zA-Z0-9-_]+)=.+$/, "$1");
    if (k !== key) return util_core_js__WEBPACK_IMPORTED_MODULE_0__.none;
  });
  if (c === util_core_js__WEBPACK_IMPORTED_MODULE_0__.none) return null;
  const match = c.replace(/^\s*[a-zA-Z0-9-_]+=([^;]+).?$/, "$1");
  return match || null;
}
function resetCookies() {
  const domainFull = document.domain;
  const domainNoWWW = domainFull.replace(/^www\./, "");
  const domainRoot = domainFull.replace(/^(\w+\.)+?(\w+\.\w+)$/, "$2");
  const expired = new Date(1e3).toUTCString();
  (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(document.cookie.split(";"), (v) => {
    const k = v.replace(/^\s*(\w+)=.+$/, "$1");
    document.cookie = `${k}=;expires=${expired};`;
    document.cookie = `${k}=;path=/;expires=${expired};`;
    const cookieString = (key, dom, exp) =>
      `${key}=;path=/;domain=${dom};expires=${exp};`;
    document.cookie = cookieString(k, domainFull, expired);
    document.cookie = cookieString(k, domainNoWWW, expired);
    document.cookie = cookieString(k, domainRoot, expired);
  });
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   block: () => ( block),
   querySelector: () => ( querySelector),
   querySelectorAll: () => ( querySelectorAll),
   querySelectorOrNull: () => ( querySelectorOrNull),
   remove: () => ( remove),
   searchFromScripts: () => ( searchFromScripts),
   toDOM: () => ( toDOM)
 });
 var util_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
class DomNotFoundError extends util_core_js__WEBPACK_IMPORTED_MODULE_0__.AdsBypasserError {
  constructor(selector) {
    super(`\`${selector}\` not found`);
  }
  get name() {
    return "DomNotFoundError";
  }
}
function querySelector(selector, context) {
  if (!context || !context.querySelector) context = document;
  const node = context.querySelector(selector);
  if (!node) throw new DomNotFoundError(selector);
  return node;
}
function querySelectorOrNull(selector, context) {
  try {
    return querySelector(selector, context);
  } catch {
    return null;
  }
}
function querySelectorAll(selector, context) {
  if (!context || !context.querySelectorAll) context = document;
  return context.querySelectorAll(selector);
}
function toDOM(rawHTML) {
  try {
    const parser = new DOMParser();
    return parser.parseFromString(rawHTML, "text/html");
  } catch {
    throw new util_core_js__WEBPACK_IMPORTED_MODULE_0__.AdsBypasserError("could not parse HTML to DOM");
  }
}
function remove(selector, context) {
  const nodes = querySelectorAll(selector, context);
  (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(nodes, (el) => {
    (0,util_logger_js__WEBPACK_IMPORTED_MODULE_1__.debug)("removed", el);
    el.remove();
  });
}
function block(selector, context = document) {
  let fn;
  if ((0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.isString)(selector)) {
    fn = () => remove(selector, context);
  } else if (typeof selector === "function") {
    fn = (mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (selector(node)) node.parentNode.removeChild(node);
      });
    };
  } else {
    throw new TypeError("wrong selector");
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => fn(mutation));
  });
  observer.observe(context, {
    childList: true,
    subtree: true,
  });
}
function searchFromScriptsByRegExp(pattern, context) {
  const scripts = querySelectorAll("script", context);
  const [, , m] = (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.find)(scripts, (s) => {
    const match = s.textContent.match(pattern);
    return match || util_core_js__WEBPACK_IMPORTED_MODULE_0__.none;
  });
  return m === util_core_js__WEBPACK_IMPORTED_MODULE_0__.none ? null : m;
}
function searchFromScriptsByString(pattern, context) {
  const scripts = querySelectorAll("script", context);
  const [, m] = (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.find)(scripts, (s) => {
    const idx = s.textContent.indexOf(pattern);
    return idx < 0 ? util_core_js__WEBPACK_IMPORTED_MODULE_0__.none : idx;
  });
  return m === util_core_js__WEBPACK_IMPORTED_MODULE_0__.none ? null : m.textContent;
}
function searchFromScripts(pattern, context) {
  if (pattern instanceof RegExp)
    return searchFromScriptsByRegExp(pattern, context);
  if ((0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.isString)(pattern)) return searchFromScriptsByString(pattern, context);
  return null;
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   openImage: () => ( openImage)
 });
 var util_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
 var util_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
 var util_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
 var util_misc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
 var util_platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
async function openImage(imgSrc, options = {}) {
  const replace = !!options.replace;
  const referer = !!options.referer;
  if (replace) {
    await replaceBody(imgSrc);
    return;
  }
  const redirectImage = await util_platform_js__WEBPACK_IMPORTED_MODULE_4__.GMAPI.getValue("redirect_image");
  if (redirectImage) {
    await (0,util_link_js__WEBPACK_IMPORTED_MODULE_0__.openLink)(imgSrc, { referer });
  }
}
function enableScrolling() {
  const el =
    document.compatMode === "CSS1Compat"
      ? document.documentElement
      : document.body;
  el.style.overflow = "";
}
function toggleShrinking() {
  this.classList.toggle("adsbypasser-shrinked");
}
function checkScaling() {
  const nw = this.naturalWidth;
  const nh = this.naturalHeight;
  const cw = document.documentElement.clientWidth;
  const ch = document.documentElement.clientHeight;
  if (
    (nw > cw || nh > ch) &&
    !this.classList.contains("adsbypasser-resizable")
  ) {
    this.classList.add("adsbypasser-resizable", "adsbypasser-shrinked");
    this.addEventListener("click", toggleShrinking);
  } else if (
    nw <= cw &&
    nh <= ch &&
    this.classList.contains("adsbypasser-resizable")
  ) {
    this.removeEventListener("click", toggleShrinking);
    this.classList.remove("adsbypasser-shrinked", "adsbypasser-resizable");
  }
}
async function scaleImage(img) {
  const siURL = await util_platform_js__WEBPACK_IMPORTED_MODULE_4__.GMAPI.getResourceUrl("scaleImage");
  appendStyleURL(siURL);
  if (img.naturalWidth && img.naturalHeight) {
    checkScaling.call(img);
  } else {
    img.addEventListener("load", checkScaling);
  }
  let h = 0;
  window.addEventListener("resize", () => {
    clearTimeout(h);
    h = setTimeout(checkScaling.bind(img), 100);
  });
}
async function changeBackground() {
  const bgImage = await util_platform_js__WEBPACK_IMPORTED_MODULE_4__.GMAPI.getResourceUrl("bgImage");
  document.body.style.backgroundColor = "#222222";
  document.body.style.backgroundImage = `url('${bgImage}')`;
}
async function alignCenter() {
  const acURL = await util_platform_js__WEBPACK_IMPORTED_MODULE_4__.GMAPI.getResourceUrl("alignCenter");
  appendStyleURL(acURL);
}
function injectStyle(wrapper, img) {
  (0,util_dom_js__WEBPACK_IMPORTED_MODULE_1__.remove)("style, link[rel=stylesheet]");
  wrapper.id = "adsbypasser-wrapper";
  img.id = "adsbypasser-image";
}
function appendStyleURL(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  document.head.appendChild(link);
}
async function replaceBody(imgSrc) {
  const redirectImage = await util_platform_js__WEBPACK_IMPORTED_MODULE_4__.GMAPI.getValue("redirect_image");
  if (!redirectImage || !imgSrc) {
    if (!imgSrc) (0,util_logger_js__WEBPACK_IMPORTED_MODULE_2__.warn)("false url");
    return;
  }
  (0,util_logger_js__WEBPACK_IMPORTED_MODULE_2__.info)(`replacing body with \`${imgSrc}\` ...`);
  (0,util_misc_js__WEBPACK_IMPORTED_MODULE_3__.removeAllTimer)();
  enableScrolling();
  document.body = document.createElement("body");
  const wrapper = document.createElement("div");
  document.body.appendChild(wrapper);
  const img = document.createElement("img");
  img.src = imgSrc;
  wrapper.appendChild(img);
  const ac = await util_platform_js__WEBPACK_IMPORTED_MODULE_4__.GMAPI.getValue("align_center");
  const si = await util_platform_js__WEBPACK_IMPORTED_MODULE_4__.GMAPI.getValue("scale_image");
  if (ac || si) injectStyle(wrapper, img);
  if (ac) await alignCenter();
  const cb = await util_platform_js__WEBPACK_IMPORTED_MODULE_4__.GMAPI.getValue("change_background");
  if (cb) await changeBackground();
  if (si) await scaleImage(img);
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   openLink: () => ( openLink)
 });
 var util_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
function prepare(element) {
  if (!document.body) {
    document.body = document.createElement("body");
  }
  document.body.appendChild(element);
  return (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.wait)(0);
}
async function get(url) {
  const a = document.createElement("a");
  a.href = url;
  let clicked = false;
  a.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      clicked = true;
    },
    true,
  );
  await prepare(a);
  a.click();
  const tick = setInterval(() => {
    if (clicked) {
      (0,util_logger_js__WEBPACK_IMPORTED_MODULE_1__.info)("already clicked");
      clearInterval(tick);
      return;
    }
    (0,util_logger_js__WEBPACK_IMPORTED_MODULE_1__.info)("try again");
    a.click();
  }, 500);
}
async function post(path, params = {}) {
  const form = document.createElement("form");
  form.method = "post";
  form.action = path;
  (0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(params, (value, key) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });
  await prepare(form);
  form.submit();
}
async function openLink(to, options = {}) {
  if (!(0,util_core_js__WEBPACK_IMPORTED_MODULE_0__.isString)(to) || !to) {
    (0,util_logger_js__WEBPACK_IMPORTED_MODULE_1__.warn)("false URL");
    return;
  }
  const withReferer =
    typeof options.referer === "undefined" ? true : options.referer;
  const postData = options.post;
  const from = window.location.toString();
  (0,util_logger_js__WEBPACK_IMPORTED_MODULE_1__.info)(`${from} -> ${to}`);
  if (postData) {
    await post(to, postData);
    return;
  }
  if (withReferer) {
    await get(to);
    return;
  }
  window.top.location.replace(to);
}
 }),
 ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   evil: () => ( evil),
   generateRandomIP: () => ( generateRandomIP),
   nuke: () => ( nuke),
   removeAllTimer: () => ( removeAllTimer)
 });
 var util_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
 var util_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function removeAllTimer() {
  let handle = window.setInterval(util_core_js__WEBPACK_IMPORTED_MODULE_0__.nop, 10);
  while (handle > 0) {
    window.clearInterval(handle--);
  }
  handle = window.setTimeout(util_core_js__WEBPACK_IMPORTED_MODULE_0__.nop, 10);
  while (handle > 0) {
    window.clearTimeout(handle--);
  }
}
function nuke(url) {
  try {
    util_platform_js__WEBPACK_IMPORTED_MODULE_1__.usw.document.write("nuked by AdsBypasser, leading to ...<br/>");
  } catch (e) {
    (0,util_logger_js__WEBPACK_IMPORTED_MODULE_2__.warn)("nuke failed", e);
  }
  const a = document.createElement("a");
  a.href = url;
  a.textContent = url;
  document.body.appendChild(a);
}
function generateRandomIP() {
  return [0, 0, 0, 0].map(() => Math.floor(Math.random() * 256)).join(".");
}
function evil(script) {
  return ((
    GM,
    GM_deleteValue,
    GM_getResourceURL,
    GM_getValue,
    GM_openInTab,
    GM_registerMenuCommand,
    GM_setValue,
    GM_xmlhttpRequest,
    unsafeWindow,
    window,
  ) => {
    return eval(script);
  })();
}
 })
 	]);
 	var __webpack_module_cache__ = {};
 	function __webpack_require__(moduleId) {
 		var cachedModule = __webpack_module_cache__[moduleId];
 		if (cachedModule !== undefined) {
 			return cachedModule.exports;
 		}
 		var module = __webpack_module_cache__[moduleId] = {
 			exports: {}
 		};
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 		return module.exports;
 	}
 	(() => {
 		__webpack_require__.d = (exports, definition) => {
 			for(var key in definition) {
 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	(() => {
 		__webpack_require__.r = (exports) => {
 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 			}
 			Object.defineProperty(exports, '__esModule', { value: true });
 		};
 	})();
var __webpack_exports__ = {};
(() => {
__webpack_require__.r(__webpack_exports__);
 var util_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 var util_dispatcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
 var util_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
 var util_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
 var util_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
 var _ADSBYPASSER_HANDLERS___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
const isSafari =
  Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
function disableWindowOpen() {
  try {
    util_platform_js__WEBPACK_IMPORTED_MODULE_2__.usw.open = () => ({ closed: false });
  } catch {
    (0,util_logger_js__WEBPACK_IMPORTED_MODULE_4__.warn)("cannot mock window.open");
  }
  util_platform_js__WEBPACK_IMPORTED_MODULE_2__.usw.alert = util_core_js__WEBPACK_IMPORTED_MODULE_0__.nop;
  util_platform_js__WEBPACK_IMPORTED_MODULE_2__.usw.confirm = util_core_js__WEBPACK_IMPORTED_MODULE_0__.nop;
}
function disableLeavePrompt(element) {
  if (!element) return;
  const seal = {
    set: () => (0,util_logger_js__WEBPACK_IMPORTED_MODULE_4__.info)("blocked onbeforeunload"),
  };
  element.onbeforeunload = undefined;
  if (isSafari) {
    element.__defineSetter__("onbeforeunload", seal.set);
  } else {
    util_platform_js__WEBPACK_IMPORTED_MODULE_2__.usw.Object.defineProperty(element, "onbeforeunload", {
      configurable: true,
      enumerable: false,
      get: undefined,
      set: seal.set,
    });
  }
  const originalAddEventListener = element.addEventListener;
  element.addEventListener = function (type) {
    if (type === "beforeunload") {
      (0,util_logger_js__WEBPACK_IMPORTED_MODULE_4__.info)("blocked addEventListener onbeforeunload");
      return;
    }
    return originalAddEventListener.apply(this, arguments);
  };
}
function changeTitle() {
  document.title += " - AdsBypasser";
}
function waitDOM() {
  return new Promise((resolve) => {
    if (document.readyState !== "loading") {
      resolve();
      return;
    }
    document.addEventListener("DOMContentLoaded", () => resolve());
  });
}
async function beforeDOMReady(handler) {
  const config = await (0,util_config_js__WEBPACK_IMPORTED_MODULE_3__.dumpConfig)();
  (0,util_logger_js__WEBPACK_IMPORTED_MODULE_4__.info)(
    "working on\n%s \nwith\n%s",
    window.location.toString(),
    JSON.stringify(config),
  );
  disableLeavePrompt(util_platform_js__WEBPACK_IMPORTED_MODULE_2__.usw);
  disableWindowOpen();
  await handler.start();
}
async function afterDOMReady(handler) {
  disableLeavePrompt(util_platform_js__WEBPACK_IMPORTED_MODULE_2__.usw.document.body);
  changeTitle();
  await handler.ready();
}
async function main() {
  if (util_platform_js__WEBPACK_IMPORTED_MODULE_2__.rawUSW.top !== util_platform_js__WEBPACK_IMPORTED_MODULE_2__.rawUSW.self) return; 
  util_platform_js__WEBPACK_IMPORTED_MODULE_2__.GMAPI.registerMenuCommand("AdsBypasser - Configure", () => {
    util_platform_js__WEBPACK_IMPORTED_MODULE_2__.GMAPI.openInTab("https://adsbypasser.github.io/configure.html");
  });
  await (0,util_config_js__WEBPACK_IMPORTED_MODULE_3__.loadConfig)();
  const handler = (0,util_dispatcher_js__WEBPACK_IMPORTED_MODULE_1__.findHandler)();
  if (handler) {
    await beforeDOMReady(handler);
    await waitDOM();
    await afterDOMReady(handler);
  }
}
main().catch((_) => (0,util_logger_js__WEBPACK_IMPORTED_MODULE_4__.warn)(_));
})();
 })()
;