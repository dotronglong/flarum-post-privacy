module.exports=function(t){var e={};function s(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=t,s.c=e,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=20)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Component},,function(t,e){t.exports=flarum.core.compat["components/Select"]},,,,,,,,,,,,,function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e,s){"use strict";s.r(e);var r=s(1),o=s(0),n=s.n(o),i=s(17),a=s.n(i),p=s(18),l=s.n(p),c=s(19),u=s.n(c),d=s(2),f=s.n(d);class h extends f.a{init(){this.key=this.props.key,this.cast=this.props.cast||(t=>t)}setting(){return app.modal.component.setting(this.key)}getValue(){return this.cast(this.setting()())}}class g extends h{view(){return u.a.component({state:!!Number(this.getValue()),children:this.props.label||this.props.children,onchange:this.setting()})}}class b extends h{view(){const t=Object.assign({},this.props),e=this.props.label||this.props.children;return t.className="FormControl "+(t.className||""),t.bidi=this.setting(),t.simple?m("input",t):m("div.Form-group",[m("label",e),m("input",t)])}}class y extends b{init(){b.prototype.init.call(this),this.cast=t=>Number(t),this.props.type="number"}}s(4);const v={boolean:g,string:b,integer:y,number:y};class x extends l.a{init(){this.props.items=Array.from(this.props.items||[]),this.settings={},this.setting=this.setting.bind(this),this.props.onsaved&&(this.onsaved=this.props.onsaved.bind(this))}className(){return[this.props.className,this.props.size&&`Modal--${this.props.size}`].filter(Boolean).join(" ")}title(){return this.props.title}form(){return this.props.form||[...this.props.items].map(t=>!t||"div"===t.tag||t.attrs&&t.attrs.className&&t.attrs.className.contains("Form-group")?t:m("div.Form-group",t))}static createItemsFromValidationRules(t,e,s){const r=[];for(const o in t){const n=e+o.toLowerCase(),i=t[o].split("|"),a=i.find(t=>v[t])||"string",p=a&&v[a]||b,l=i.includes("required"),c=s&&(app.translator.trans[`${s}${o.toLowerCase()}-label`]||o)||o,u=app.translator.translations[`${s}${o.toLowerCase()}-description`];r.push(m.prop(`div.Form-group${l?".required":""}`,["boolean"!==a&&m("label",c),p.component({type:a,key:n,required:l,children:c,simple:!0}),u&&m("span",u)]))}return r}}n.a.initializers.add("ld-post-privacy",(function(t){Object(r.extend)(a.a.prototype,"seeAuthor",(function(e){e.add("ld-post-privacy",{icon:"far fa-shield-alt",label:t.translator.trans("ld-post-privacy.admin.permissions.see_author"),permission:"ld.post-privacy.see_author",allowGuest:!1})})),t.extensionSettings["ld-post-privacy"]=function(){return t.modal.show(new x({title:t.translator.trans("ld-post-privacy.admin.settings.title"),size:"medium",items:[m(g,{key:"ld-post-privacy-ghost-mode"},t.translator.trans("ld-post-privacy.admin.settings.ghost_mode"))]}))}}))}]);
//# sourceMappingURL=admin.js.map