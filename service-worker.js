if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const n=e=>d(e,f),a={module:{uri:f},exports:s,require:n};i[f]=Promise.all(r.map((e=>a[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/10/22/20220820/index.html",revision:"59146d3d7f1788e6f7c0ceade49c6695"},{url:"2021/10/22/我的博客/index.html",revision:"80b6c4d434b7bfe4d68f8f478c59daaf"},{url:"2021/10/28/ip地址-dns初了解/index.html",revision:"6950b5d78a91b62be638d8f31ee48575"},{url:"2021/10/31/基本的Dos命令/index.html",revision:"9a315111687f886df7e003ce338087f0"},{url:"2021/11/20/sql/index.html",revision:"5f99226170c9867c245948f51269369e"},{url:"2021/11/28/c语言报错1/index.html",revision:"9873d926a88769a236f4987eccfacce3"},{url:"2022/08/20/hello-world/index.html",revision:"1c735fa2f64cd54bca748da42a10359d"},{url:"2022/08/23/VM16Pro下载/index.html",revision:"6c113a7a6f1e0041496842df5683b959"},{url:"2022/08/24/tags/index.html",revision:"0d447fc8fe144deda9fd7e37fe489412"},{url:"2022/08/24/VMWARE部署/index.html",revision:"c88bb4688fc6586c54deb7c907b625a8"},{url:"2022/08/24/嵌入代码/index.html",revision:"24df830f042fa808b0cd140404262918"},{url:"2022/08/24/网关-路由器/index.html",revision:"d43a7736c419fc44043f836e7ffb2a59"},{url:"2022/10/13/python/index.html",revision:"2858fe3c3bee8b27aac0ac865195bddc"},{url:"archives/2021/10/index.html",revision:"62a140bf3adfcbe7c00e7202f384e8d3"},{url:"archives/2021/11/index.html",revision:"8bf653a2de91f7b649c04a709e4ae60b"},{url:"archives/2021/index.html",revision:"4a01278230a6b0fcea429dc2d464473d"},{url:"archives/2022/08/index.html",revision:"9169bab81671f8284763a00bb705e1dc"},{url:"archives/2022/10/index.html",revision:"310d6287dac48ea92af142b18a0c9f77"},{url:"archives/2022/index.html",revision:"166f5c3f33fb8105103fa5242a2f1407"},{url:"archives/index.html",revision:"2af8d8dd9f1c7a2ab4005be9fe9a307c"},{url:"archives/page/2/index.html",revision:"7c04b8cfdd137b116b24dc644723769c"},{url:"css/index.css",revision:"69e3a3540dc601a7bf35f34f0b3fde74"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/a1.png",revision:"aba5a94d3b3e128ff0842995453f5c5c"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"14e7697eff8fb137a9348e7ebce6f6b8"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"page/2/index.html",revision:"00831cf840aa04e6fc6841d4468e94a3"},{url:"tags/python/index.html",revision:"cac25e7b111a96b4ce28274dfbe19080"},{url:"tags/sql/index.html",revision:"3bc89960a574994e6fc21ff8875307b5"},{url:"tags/测试/index.html",revision:"ae7bce1c0828d4d33cc5686f62e355c3"},{url:"tags/虚拟机/index.html",revision:"92b05d3000787c79d668d3bee0fd6fe3"}],{})}));
//# sourceMappingURL=service-worker.js.map
