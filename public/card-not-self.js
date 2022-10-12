function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function cardNotSelfTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\\component\\card-not-self.pug":".d-flex.justify-content-start\r\n    .card.card-custom-2\r\n        .card-body.d-flex.card-body-custom\r\n            p.mb-0.mr-4 #{value.text}\r\n            p.mb-0.mr-1 \r\n                - var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia\u002FSingapore'}))\r\n            p.mb-0.text-nowrap\r\n                span.small.mr-1  #{date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')} \r\n                span.small-custom #{date.getDate()+' '+date.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+date.getFullYear().toString().substr(-2)}   "};
;var locals_for_with = (locals || {});(function (Date, String, value) {;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-start\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-2\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-not-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp));
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + " \u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small-custom\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getDate()+' '+date.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+date.getFullYear().toString().substr(-2)) ? "" : pug_interp));
;pug_debug_line = 9;pug_debug_filename = "views\\component\\card-not-self.pug";
pug_html = pug_html + "   \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"String" in locals_for_with?locals_for_with.String:typeof String!=="undefined"?String:undefined,"value" in locals_for_with?locals_for_with.value:typeof value!=="undefined"?value:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}