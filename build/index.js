(()=>{"use strict";var e,a={259:()=>{const e=window.wp.blocks,a=window.wp.element,l=window.wp.i18n,t=window.wp.blockEditor,o=window.wp.components,n=JSON.parse('{"u2":"create-block/uncommon-audio-player"}');(0,e.registerBlockType)(n.u2,{edit:function(e){let{attributes:n,setAttributes:r}=e;const[c,i]=(0,a.useState)(n.description);return(0,a.createElement)("div",(0,t.useBlockProps)({className:"uncommon-audio-player"}),(0,a.createElement)("div",{className:"uncommon-audio-player__controls"},(0,a.createElement)("div",{className:"uncommon-audio-player__icons"},(0,a.createElement)("svg",{className:"speaker-playing",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24.681 5.566a1.227 1.227 0 0 1 1.657-.516c4.761 2.497 8.02 7.375 8.02 12.95 0 5.575-3.259 10.453-8.02 12.95a1.227 1.227 0 0 1-1.14-2.173c4.022-2.11 6.706-6.19 6.706-10.777 0-4.587-2.684-8.667-6.706-10.777a1.227 1.227 0 0 1-.517-1.657Zm-7.4 1.09c.438.2.72.636.72 1.117v20.455a1.227 1.227 0 0 1-2.034.925l-6.493-5.658a.41.41 0 0 0-.268-.1H4.5a2.864 2.864 0 0 1-2.863-2.864V15.47A2.864 2.864 0 0 1 4.5 12.606h4.706a.41.41 0 0 0 .268-.1l6.493-5.658a1.227 1.227 0 0 1 1.314-.192Zm-1.735 3.814-4.459 3.886a2.864 2.864 0 0 1-1.881.705H4.5a.41.41 0 0 0-.409.409v5.06c0 .226.183.41.41.41h4.705c.691 0 1.36.25 1.881.704l4.459 3.886V10.47Zm7.103-.019a1.227 1.227 0 0 1 1.668-.48 9.185 9.185 0 0 1 0 16.057 1.227 1.227 0 1 1-1.189-2.147 6.73 6.73 0 0 0 0-11.762 1.227 1.227 0 0 1-.48-1.668Zm-2.05 4.918a1.227 1.227 0 0 1 1.663-.493A3.561 3.561 0 0 1 24.132 18a3.561 3.561 0 0 1-1.87 3.124 1.227 1.227 0 0 1-1.17-2.157c.356-.194.585-.563.585-.967 0-.403-.229-.773-.585-.967a1.227 1.227 0 0 1-.494-1.664Z",fill:"#FFC2A9"})),(0,a.createElement)("svg",{className:"speaker-muted",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("path",{d:"M28.995 30.731a1.227 1.227 0 0 0 1.736-1.735L7.003 5.269a1.227 1.227 0 0 0-1.735 1.735l23.727 23.727ZM26.18 7.773V22.71l-2.454-2.455V10.47l-3.996 3.483c-.431.376-.926.663-1.457.85l-2.197-2.197h.697c.494 0 .972-.179 1.344-.503l6.03-5.256a1.227 1.227 0 0 1 2.034.926ZM12.272 20.53v-4.786l-1.929-1.929a2.85 2.85 0 0 0-.526 1.655v5.06a2.864 2.864 0 0 0 2.864 2.864h4.092c.494 0 .972.179 1.344.503l6.03 5.256a1.227 1.227 0 0 0 1.57.036l-8.185-8.185a4.509 4.509 0 0 0-.759-.065h-4.092a.41.41 0 0 1-.41-.409Z",fill:"#FFC2A9"}))),(0,a.createElement)("div",{className:"uncommon-audio-player__description"},(0,a.createElement)(o.TextControl,{label:(0,l.__)("Description"),value:n.description,onChange:e=>{i(e),r({description:e})}}))),(0,a.createElement)(t.InnerBlocks,{allowedBlocks:["core/audio"],template:[["core/audio",{}]],templateLock:"all"}))},save:function(e){let{attributes:l}=e;return(0,a.createElement)("div",t.useBlockProps.save({className:"uncommon-audio-player"}),(0,a.createElement)("div",{className:"uncommon-audio-player__controls"},(0,a.createElement)("div",{className:"uncommon-audio-player__icons"},(0,a.createElement)("svg",{className:"speaker-playing",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24.681 5.566a1.227 1.227 0 0 1 1.657-.516c4.761 2.497 8.02 7.375 8.02 12.95 0 5.575-3.259 10.453-8.02 12.95a1.227 1.227 0 0 1-1.14-2.173c4.022-2.11 6.706-6.19 6.706-10.777 0-4.587-2.684-8.667-6.706-10.777a1.227 1.227 0 0 1-.517-1.657Zm-7.4 1.09c.438.2.72.636.72 1.117v20.455a1.227 1.227 0 0 1-2.034.925l-6.493-5.658a.41.41 0 0 0-.268-.1H4.5a2.864 2.864 0 0 1-2.863-2.864V15.47A2.864 2.864 0 0 1 4.5 12.606h4.706a.41.41 0 0 0 .268-.1l6.493-5.658a1.227 1.227 0 0 1 1.314-.192Zm-1.735 3.814-4.459 3.886a2.864 2.864 0 0 1-1.881.705H4.5a.41.41 0 0 0-.409.409v5.06c0 .226.183.41.41.41h4.705c.691 0 1.36.25 1.881.704l4.459 3.886V10.47Zm7.103-.019a1.227 1.227 0 0 1 1.668-.48 9.185 9.185 0 0 1 0 16.057 1.227 1.227 0 1 1-1.189-2.147 6.73 6.73 0 0 0 0-11.762 1.227 1.227 0 0 1-.48-1.668Zm-2.05 4.918a1.227 1.227 0 0 1 1.663-.493A3.561 3.561 0 0 1 24.132 18a3.561 3.561 0 0 1-1.87 3.124 1.227 1.227 0 0 1-1.17-2.157c.356-.194.585-.563.585-.967 0-.403-.229-.773-.585-.967a1.227 1.227 0 0 1-.494-1.664Z",fill:"#FFC2A9"})),(0,a.createElement)("svg",{className:"speaker-muted",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("path",{d:"M28.995 30.731a1.227 1.227 0 0 0 1.736-1.735L7.003 5.269a1.227 1.227 0 0 0-1.735 1.735l23.727 23.727ZM26.18 7.773V22.71l-2.454-2.455V10.47l-3.996 3.483c-.431.376-.926.663-1.457.85l-2.197-2.197h.697c.494 0 .972-.179 1.344-.503l6.03-5.256a1.227 1.227 0 0 1 2.034.926ZM12.272 20.53v-4.786l-1.929-1.929a2.85 2.85 0 0 0-.526 1.655v5.06a2.864 2.864 0 0 0 2.864 2.864h4.092c.494 0 .972.179 1.344.503l6.03 5.256a1.227 1.227 0 0 0 1.57.036l-8.185-8.185a4.509 4.509 0 0 0-.759-.065h-4.092a.41.41 0 0 1-.41-.409Z",fill:"#FFC2A9"}))),(0,a.createElement)("div",{className:"uncommon-audio-player__description"},l.description)),(0,a.createElement)(t.InnerBlocks.Content,null))}})}},l={};function t(e){var o=l[e];if(void 0!==o)return o.exports;var n=l[e]={exports:{}};return a[e](n,n.exports,t),n.exports}t.m=a,e=[],t.O=(a,l,o,n)=>{if(!l){var r=1/0;for(m=0;m<e.length;m++){for(var[l,o,n]=e[m],c=!0,i=0;i<l.length;i++)(!1&n||r>=n)&&Object.keys(t.O).every((e=>t.O[e](l[i])))?l.splice(i--,1):(c=!1,n<r&&(r=n));if(c){e.splice(m--,1);var s=o();void 0!==s&&(a=s)}}return a}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[l,o,n]},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={826:0,431:0};t.O.j=a=>0===e[a];var a=(a,l)=>{var o,n,[r,c,i]=l,s=0;if(r.some((a=>0!==e[a]))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(i)var m=i(t)}for(a&&a(l);s<r.length;s++)n=r[s],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(m)},l=globalThis.webpackChunkuncommon_audio_player=globalThis.webpackChunkuncommon_audio_player||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))})();var o=t.O(void 0,[431],(()=>t(259)));o=t.O(o)})();