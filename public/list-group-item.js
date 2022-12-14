function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function listGroupItemTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\\views\\component\u002Flist-group-item.pug":"each value in private\r\n    button(id='user'+value._id data-toggle='modal' data-target='#chat'+value._id).list-group-item.list-group-item-action.d-flex.pt-1.pb-1.align-items-center\r\n        .profile-pic-list.mr-3\r\n            img(src='public\u002Fprofile-pic'+value.profilePic).img-fluid\r\n            - var unread=0\r\n            if value.chat\r\n                each msg in value.chat\r\n                    if msg.unread\r\n                        -unread+=1\r\n        .d-flex.flex-column.mr-auto\r\n            p.mb-0 #{value.nickname}\r\n                span(id='badge'+value._id class='badge-'+status).badge-custom.d-inline-block.ml-3\r\n            p(class=unread\u003E0?'font-weight-bold':'' id='unreadMessage'+value._id).mb-0.small.text-truncate.text-truncate-custom #{value.chat?value.chat[value.chat.length-1].text:''}\r\n        if unread\u003E0\r\n            span(id='unreadBadge'+value._id).badge.badge-info.badge-pill #{unread}\r\n        else\r\n            span(id='unreadBadge'+value._id).badge.badge-info.badge-pill.d-none\r\n            "};
;var locals_for_with = (locals || {});(function (private, status) {;pug_debug_line = 1;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
// iterate private
;(function(){
  var $$obj = private;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var value = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"list-group-item list-group-item-action d-flex pt-1 pb-1 align-items-center\""+pug_attr("id", 'user'+value._id, true, false)+" data-toggle=\"modal\""+pug_attr("data-target", '#chat'+value._id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cdiv class=\"profile-pic-list mr-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"img-fluid\""+pug_attr("src", 'public/profile-pic'+value.profilePic, true, false)) + "\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
var unread=0
;pug_debug_line = 6;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
if (value.chat) {
;pug_debug_line = 7;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
// iterate value.chat
;(function(){
  var $$obj = value.chat;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var msg = $$obj[pug_index1];
;pug_debug_line = 8;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
if (msg.unread) {
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
unread+=1
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var msg = $$obj[pug_index1];
;pug_debug_line = 8;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
if (msg.unread) {
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
unread+=1
}
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-column mr-auto\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.nickname) ? "" : pug_interp));
;pug_debug_line = 12;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(['badge-'+status,"badge-custom","d-inline-block","ml-3"], [true,false,false,false]), false, false)+pug_attr("id", 'badge'+value._id, true, false)) + "\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cp" + (pug_attr("class", pug_classes([unread>0?'font-weight-bold':'',"mb-0","small","text-truncate","text-truncate-custom"], [true,false,false,false,false]), false, false)+pug_attr("id", 'unreadMessage'+value._id, true, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.chat?value.chat[value.chat.length-1].text:'') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
if (unread>0) {
;pug_debug_line = 15;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"badge badge-info badge-pill\""+pug_attr("id", 'unreadBadge'+value._id, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = unread) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 17;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"badge badge-info badge-pill d-none\""+pug_attr("id", 'unreadBadge'+value._id, true, false)) + "\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fbutton\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var value = $$obj[pug_index0];
;pug_debug_line = 2;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"list-group-item list-group-item-action d-flex pt-1 pb-1 align-items-center\""+pug_attr("id", 'user'+value._id, true, false)+" data-toggle=\"modal\""+pug_attr("data-target", '#chat'+value._id, true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cdiv class=\"profile-pic-list mr-3\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"img-fluid\""+pug_attr("src", 'public/profile-pic'+value.profilePic, true, false)) + "\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
var unread=0
;pug_debug_line = 6;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
if (value.chat) {
;pug_debug_line = 7;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
// iterate value.chat
;(function(){
  var $$obj = value.chat;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var msg = $$obj[pug_index2];
;pug_debug_line = 8;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
if (msg.unread) {
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
unread+=1
}
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var msg = $$obj[pug_index2];
;pug_debug_line = 8;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
if (msg.unread) {
;pug_debug_line = 9;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
unread+=1
}
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-column mr-auto\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cp class=\"mb-0\"\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.nickname) ? "" : pug_interp));
;pug_debug_line = 12;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(['badge-'+status,"badge-custom","d-inline-block","ml-3"], [true,false,false,false]), false, false)+pug_attr("id", 'badge'+value._id, true, false)) + "\u003E\u003C\u002Fspan\u003E\u003C\u002Fp\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cp" + (pug_attr("class", pug_classes([unread>0?'font-weight-bold':'',"mb-0","small","text-truncate","text-truncate-custom"], [true,false,false,false,false]), false, false)+pug_attr("id", 'unreadMessage'+value._id, true, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = value.chat?value.chat[value.chat.length-1].text:'') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
if (unread>0) {
;pug_debug_line = 15;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"badge badge-info badge-pill\""+pug_attr("id", 'unreadBadge'+value._id, true, false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = unread) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 17;pug_debug_filename = ".\\views\\component\u002Flist-group-item.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"badge badge-info badge-pill d-none\""+pug_attr("id", 'unreadBadge'+value._id, true, false)) + "\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fbutton\u003E";
    }
  }
}).call(this);
}.call(this,"private" in locals_for_with?locals_for_with.private:typeof private!=="undefined"?private:undefined,"status" in locals_for_with?locals_for_with.status:typeof status!=="undefined"?status:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}