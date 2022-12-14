function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function modalTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\\views\\component\u002Fmodal.pug":"each value in private\r\n    div(id='chat'+value._id tabindex='-1').modal.fade\r\n        .modal-dialog \r\n            .modal-content.modal-content-custom\r\n                .modal-header.modal-header-custom\r\n                    .profile-pic-modal.mr-3\r\n                        img(style='vertical-align:middle' src='public\u002Fprofile-pic'+value.profilePic).img-fluid\r\n                    \u002F\u002F-becareful in amending the following id #header-nickname, .text() needed in db operation under 'private message' \r\n                    h5.mb-0#header-nickname #{value.nickname}     \r\n                    button(type='button' data-dismiss='modal').close\r\n                        span.fa.fa-arrow-left.fa-arrow.left-custom\r\n                .modal-body.modal-body-custom\r\n                    - var chat=value.chat\r\n                    each value,index in chat\r\n                        - var currentLocalDate\r\n                        - var currentDate\r\n                        - var valueLocalDate = new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia\u002FSingapore'}))\r\n                        - var valueDate = new Date(valueLocalDate.getDate()+' '+valueLocalDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+valueLocalDate.getFullYear().toString().substr(-2))\r\n                        if index===0\r\n                            - currentLocalDate = valueLocalDate\r\n                            - currentDate = valueDate\r\n                            include card-date.pug\r\n                            if value.self\r\n                                include card-self.pug \r\n                            else \r\n                                include card-not-self.pug\r\n                        else if index !==0 && valueDate.getTime()===currentDate.getTime()\r\n                            if value.self\r\n                                include card-self.pug \r\n                            else \r\n                                include card-not-self.pug\r\n                        else if index !==0 && valueDate.getTime()\u003EcurrentDate.getTime()\r\n                            - currentLocalDate = valueLocalDate\r\n                            - currentDate = valueDate\r\n                                include card-date.pug\r\n                                if value.self\r\n                                    include card-self.pug \r\n                                else \r\n                                    include card-not-self.pug  \r\n                                       \r\n                .modal-footer.d-block.p-2\r\n                    form(onsubmit=\"formOnSubmit(event)\" id='form'+value._id)\r\n                        .form-row\r\n                            .col-2.col-sm-1\r\n                                button.btn.btn-light\r\n                                    span.fa.fa-plus\r\n                            .col-7.col-sm-8\r\n                                input(type='text' id='input'+value._id required).form-control\r\n                            .col-2.col-sm-1\r\n                                button(type='submit' onclick='formOnClick(event)' id='submit'+value._id data-socket=value.socketID).btn.btn-dark\r\n                                    span.fa.fa-arrow-right","views\\component\\card-date.pug":"\u002F\u002F .date class is for jquery .find()\r\n.d-flex.justify-content-center.date.my-2\r\n    .card.card-custom-3\r\n        .card-body.d-flex.card-body-custom\r\n            p.mb-0 #{currentDate.getDate()+' '+currentDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+currentDate.getFullYear().toString().substr(-2)}  ","views\\component\\card-self.pug":".d-flex.justify-content-end\r\n    .card.card-custom-1\r\n        .card-body.d-flex.card-body-custom\r\n            p.mb-0.mr-4 #{value.text}\r\n            p.mb-0.mr-1 \r\n                - var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia\u002FSingapore'}))\r\n            p.mb-0.text-nowrap\r\n                span.small.mr-1  #{date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')}\r\n                     ","views\\component\\card-not-self.pug":".d-flex.justify-content-start\r\n    .card.card-custom-2\r\n        .card-body.d-flex.card-body-custom\r\n            p.mb-0.mr-4 #{value.text}\r\n            p.mb-0.mr-1 \r\n                - var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia\u002FSingapore'}))\r\n            p.mb-0.text-nowrap\r\n                span.small.mr-1  #{date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')}    "};
;var locals_for_with = (locals || {});(function (Date, String, private) {;pug_debug_line = 1;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
// iterate private
;(function(){
  var $$obj = private;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var value = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"modal fade\""+pug_attr("id", 'chat'+value._id, true, false)+" tabindex=\"-1\"") + "\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + " ";
;pug_debug_line = 4;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content modal-content-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header modal-header-custom\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"profile-pic-modal mr-3\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"img-fluid\""+" style=\"vertical-align:middle\""+pug_attr("src", 'public/profile-pic'+value.profilePic, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Ch5 class=\"mb-0\" id=\"header-nickname\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.nickname) ? "" : pug_interp));
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "     \u003C\u002Fh5\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cspan class=\"fa fa-arrow-left fa-arrow left-custom\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body modal-body-custom\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var chat=value.chat
;pug_debug_line = 14;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
// iterate chat
;(function(){
  var $$obj = chat;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var value = $$obj[index];
;pug_debug_line = 15;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var currentLocalDate
;pug_debug_line = 16;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var currentDate
;pug_debug_line = 17;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var valueLocalDate = new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
;pug_debug_line = 18;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var valueDate = new Date(valueLocalDate.getDate()+' '+valueLocalDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+valueLocalDate.getFullYear().toString().substr(-2))
;pug_debug_line = 19;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (index===0) {
;pug_debug_line = 20;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentLocalDate = valueLocalDate
;pug_debug_line = 21;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentDate = valueDate
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003C!-- .date class is for jquery .find()--\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center date my-2\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentDate.getDate()+' '+currentDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+currentDate.getFullYear().toString().substr(-2)) ? "" : pug_interp));
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
else
if (index !==0 && valueDate.getTime()===currentDate.getTime()) {
;pug_debug_line = 28;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
else
if (index !==0 && valueDate.getTime()>currentDate.getTime()) {
;pug_debug_line = 33;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentLocalDate = valueLocalDate
;pug_debug_line = 34;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentDate = valueDate
{
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003C!-- .date class is for jquery .find()--\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center date my-2\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentDate.getDate()+' '+currentDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+currentDate.getFullYear().toString().substr(-2)) ? "" : pug_interp));
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
}
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var value = $$obj[index];
;pug_debug_line = 15;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var currentLocalDate
;pug_debug_line = 16;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var currentDate
;pug_debug_line = 17;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var valueLocalDate = new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
;pug_debug_line = 18;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var valueDate = new Date(valueLocalDate.getDate()+' '+valueLocalDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+valueLocalDate.getFullYear().toString().substr(-2))
;pug_debug_line = 19;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (index===0) {
;pug_debug_line = 20;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentLocalDate = valueLocalDate
;pug_debug_line = 21;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentDate = valueDate
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003C!-- .date class is for jquery .find()--\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center date my-2\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentDate.getDate()+' '+currentDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+currentDate.getFullYear().toString().substr(-2)) ? "" : pug_interp));
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
else
if (index !==0 && valueDate.getTime()===currentDate.getTime()) {
;pug_debug_line = 28;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
else
if (index !==0 && valueDate.getTime()>currentDate.getTime()) {
;pug_debug_line = 33;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentLocalDate = valueLocalDate
;pug_debug_line = 34;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentDate = valueDate
{
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003C!-- .date class is for jquery .find()--\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center date my-2\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentDate.getDate()+' '+currentDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+currentDate.getFullYear().toString().substr(-2)) ? "" : pug_interp));
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-footer d-block p-2\"\u003E";
;pug_debug_line = 42;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cform" + (" onsubmit=\"formOnSubmit(event)\""+pug_attr("id", 'form'+value._id, true, false)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-row\"\u003E";
;pug_debug_line = 44;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-2 col-sm-1\"\u003E";
;pug_debug_line = 45;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-light\"\u003E";
;pug_debug_line = 46;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cspan class=\"fa fa-plus\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-7 col-sm-8\"\u003E";
;pug_debug_line = 48;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control\""+" type=\"text\""+pug_attr("id", 'input'+value._id, true, false)+pug_attr("required", true, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-2 col-sm-1\"\u003E";
;pug_debug_line = 50;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"btn btn-dark\""+" type=\"submit\" onclick=\"formOnClick(event)\""+pug_attr("id", 'submit'+value._id, true, false)+pug_attr("data-socket", value.socketID, true, false)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cspan class=\"fa fa-arrow-right\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var value = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"modal fade\""+pug_attr("id", 'chat'+value._id, true, false)+" tabindex=\"-1\"") + "\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-dialog\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + " ";
;pug_debug_line = 4;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-content modal-content-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-header modal-header-custom\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"profile-pic-modal mr-3\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"img-fluid\""+" style=\"vertical-align:middle\""+pug_attr("src", 'public/profile-pic'+value.profilePic, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Ch5 class=\"mb-0\" id=\"header-nickname\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.nickname) ? "" : pug_interp));
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "     \u003C\u002Fh5\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cbutton class=\"close\" type=\"button\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cspan class=\"fa fa-arrow-left fa-arrow left-custom\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-body modal-body-custom\"\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var chat=value.chat
;pug_debug_line = 14;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
// iterate chat
;(function(){
  var $$obj = chat;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var value = $$obj[index];
;pug_debug_line = 15;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var currentLocalDate
;pug_debug_line = 16;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var currentDate
;pug_debug_line = 17;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var valueLocalDate = new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
;pug_debug_line = 18;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var valueDate = new Date(valueLocalDate.getDate()+' '+valueLocalDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+valueLocalDate.getFullYear().toString().substr(-2))
;pug_debug_line = 19;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (index===0) {
;pug_debug_line = 20;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentLocalDate = valueLocalDate
;pug_debug_line = 21;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentDate = valueDate
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003C!-- .date class is for jquery .find()--\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center date my-2\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentDate.getDate()+' '+currentDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+currentDate.getFullYear().toString().substr(-2)) ? "" : pug_interp));
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
else
if (index !==0 && valueDate.getTime()===currentDate.getTime()) {
;pug_debug_line = 28;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
else
if (index !==0 && valueDate.getTime()>currentDate.getTime()) {
;pug_debug_line = 33;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentLocalDate = valueLocalDate
;pug_debug_line = 34;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentDate = valueDate
{
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003C!-- .date class is for jquery .find()--\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center date my-2\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentDate.getDate()+' '+currentDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+currentDate.getFullYear().toString().substr(-2)) ? "" : pug_interp));
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
}
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var value = $$obj[index];
;pug_debug_line = 15;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var currentLocalDate
;pug_debug_line = 16;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var currentDate
;pug_debug_line = 17;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var valueLocalDate = new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
;pug_debug_line = 18;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
var valueDate = new Date(valueLocalDate.getDate()+' '+valueLocalDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+valueLocalDate.getFullYear().toString().substr(-2))
;pug_debug_line = 19;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (index===0) {
;pug_debug_line = 20;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentLocalDate = valueLocalDate
;pug_debug_line = 21;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentDate = valueDate
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003C!-- .date class is for jquery .find()--\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center date my-2\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentDate.getDate()+' '+currentDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+currentDate.getFullYear().toString().substr(-2)) ? "" : pug_interp));
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
else
if (index !==0 && valueDate.getTime()===currentDate.getTime()) {
;pug_debug_line = 28;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
else
if (index !==0 && valueDate.getTime()>currentDate.getTime()) {
;pug_debug_line = 33;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentLocalDate = valueLocalDate
;pug_debug_line = 34;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
currentDate = valueDate
{
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003C!-- .date class is for jquery .find()--\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center date my-2\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = currentDate.getDate()+' '+currentDate.toLocaleString('default', { month: 'long' }).substring(0,3)+' '+currentDate.getFullYear().toString().substr(-2)) ? "" : pug_interp));
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-date.pug";
pug_html = pug_html + "  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
if (value.self) {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card card-custom-1\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body d-flex card-body-custom\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-4\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 mr-1\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 6;pug_debug_filename = "views\\component\\card-self.pug";
var date= new Date(new Date(value.time).toLocaleString('en-US', { timeZone: 'Asia/Singapore'}))
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0 text-nowrap\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + "\u003Cspan class=\"small mr-1\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "views\\component\\card-self.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.getHours()+':'+String(date.getMinutes()).padStart(2, '0')) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 1;pug_debug_filename = "views\\component\\card-not-self.pug";
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
pug_html = pug_html + "    \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"modal-footer d-block p-2\"\u003E";
;pug_debug_line = 42;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cform" + (" onsubmit=\"formOnSubmit(event)\""+pug_attr("id", 'form'+value._id, true, false)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-row\"\u003E";
;pug_debug_line = 44;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-2 col-sm-1\"\u003E";
;pug_debug_line = 45;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn btn-light\"\u003E";
;pug_debug_line = 46;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cspan class=\"fa fa-plus\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-7 col-sm-8\"\u003E";
;pug_debug_line = 48;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control\""+" type=\"text\""+pug_attr("id", 'input'+value._id, true, false)+pug_attr("required", true, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-2 col-sm-1\"\u003E";
;pug_debug_line = 50;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"btn btn-dark\""+" type=\"submit\" onclick=\"formOnClick(event)\""+pug_attr("id", 'submit'+value._id, true, false)+pug_attr("data-socket", value.socketID, true, false)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = ".\\views\\component\u002Fmodal.pug";
pug_html = pug_html + "\u003Cspan class=\"fa fa-arrow-right\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);
}.call(this,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"String" in locals_for_with?locals_for_with.String:typeof String!=="undefined"?String:undefined,"private" in locals_for_with?locals_for_with.private:typeof private!=="undefined"?private:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}