if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const s=e=>a(e,r),b={module:{uri:r},exports:c,require:s};i[r]=Promise.all(n.map((e=>b[e]||s(e)))).then((e=>(d(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/10/22/20220820/index.html",revision:"9f6ec61c3ad98aa8ca039fdfc3689a41"},{url:"2021/10/22/我的博客/index.html",revision:"3a8669494e6f0f1d1aa1212a7f09adb5"},{url:"2021/10/28/ip地址-dns初了解/index.html",revision:"4bbbd6951a953f7a6c5e83cbe3bf2c7c"},{url:"2021/10/31/基本的Dos命令/index.html",revision:"e138c6744ae94981768d79375fa55812"},{url:"2021/11/20/sql/index.html",revision:"972660b379b5c3e51c5c4d357d622901"},{url:"2021/11/28/c语言报错1/index.html",revision:"d430ed5a49e2500195737f68c32cf018"},{url:"2022/08/20/hello-world/index.html",revision:"6d6595c488e948d2dee70243d42b0381"},{url:"2022/08/23/VM16Pro下载/index.html",revision:"574ae7c672b363f99aa0a048f9ddde66"},{url:"2022/08/24/VMWARE部署/index.html",revision:"ed504feacb3cad174f9d36abf67d9d96"},{url:"2022/08/24/网关-路由器/index.html",revision:"1fbef7da5a8b94c3c924420694b25927"},{url:"2022/10/13/python/index.html",revision:"9f5afa48b3a57ee6cabbd5a6d48a485d"},{url:"2022/10/18/hexo搭配typora写博客上传图片/1.png",revision:"d5f11032150f370e8dfb41df40a9436b"},{url:"2022/10/18/hexo搭配typora写博客上传图片/2.png",revision:"0fd8f47904d84e0ea739b2674d7873e3"},{url:"2022/10/18/hexo搭配typora写博客上传图片/3.png",revision:"18b9f31924083d33a91f353d7e48405d"},{url:"2022/10/18/hexo搭配typora写博客上传图片/4.png",revision:"ef4ac659b2dd13bb896fd943e2dfd1c5"},{url:"2022/10/18/hexo搭配typora写博客上传图片/index.html",revision:"fbad4e025007db740263bcd61866bdbe"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/1.png",revision:"178df863a97a1caa819c28c9f5e0fa28"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/10.png",revision:"ea537dab95df9dc2c9d5c3762494a8c6"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221017233216137.png",revision:"65c7b5997b469234c468dd8e76c0e86b"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018000121409.png",revision:"6599254ea7fa3d95cfa47a8eedcd6417"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018000226095.png",revision:"5853144eb4bbf1a7f8dbc4335dbd78dd"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018000531116.png",revision:"fabd62351f8fc4376916192b6388c9cd"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018120406076.png",revision:"349b67028bf6d27511648174c2f47a21"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018120429057.png",revision:"c894146180065a1ca747a09bdc11bf8c"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018120442185.png",revision:"c894146180065a1ca747a09bdc11bf8c"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018120500858.png",revision:"38e5fccd329efcaf05feb80076ce5f26"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018120530502.png",revision:"12509890fb172cbb3f53e3e7d8269261"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018120613105.png",revision:"8952c42def3a31eb227060469071a195"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018120650601.png",revision:"4435c1ed51635d43b17ed0ffeed6a1d3"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018120746210.png",revision:"e1e1f4764d7c8868f68442842a475d67"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018121024504.png",revision:"07df9bd0a866e7c3eeba7e9364ac6467"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018121121578.png",revision:"e4f4bd33b0f067693aee7e1c64f6dfd8"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/image-20221018121156701.png",revision:"3f92b6075588e0978b635f958f88afd4"},{url:"2022/10/18/Linux-Ubuntu-乌班图-虚拟机安装教程/index.html",revision:"4bb0d166ab600d1a489146cc29f42c5f"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/index.html",revision:"ed8deae2485d6b4f82fae8bfb4e9181a"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/QQ截图20221019203412.png",revision:"244e09ccec6c10eb985ed0579d1385a3"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/QQ截图20221019203614.png",revision:"14029b2a7692f602e05e9677289dbce1"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/QQ截图20221019203821.png",revision:"1d951cf3a1e8e1d5c2be62dba1b8d6f9"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/QQ截图20221019203835.png",revision:"e6e549e3a62e29d04edad464dfb2a1f8"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/QQ截图20221019204129.png",revision:"02c3f79bc1e885f0dcc630740b481f14"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/QQ截图20221019204525.png",revision:"8c53c5f171c0d52b9d0f40440de90c83"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/QQ截图20221019204824.png",revision:"6a44f9d73eef5431673e2535124d2b6a"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/QQ截图20221019204907.png",revision:"8bf5364da06ba505e69d99f14de9057d"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/屏幕截图 2022-10-19 203105.png",revision:"eea55d1231e13211baa0095c8604d2ea"},{url:"2022/10/19/在Ubuntu系统中安装VMwaretools/屏幕截图 2022-10-19 205152.png",revision:"30b5e378fbcbb6c46015297a9bb09574"},{url:"2022/10/20/test/index.html",revision:"d7d2f059da3b355e6f579044542181a1"},{url:"archives/2021/10/index.html",revision:"39c75e06497b6d730708719c5a66e4c3"},{url:"archives/2021/11/index.html",revision:"89076897ef1353dac23727d8f5bd1eee"},{url:"archives/2021/index.html",revision:"8af780679a59a42c74b2cf7f8a83bec7"},{url:"archives/2022/08/index.html",revision:"1b5aa07600006569f7667b39a31f370f"},{url:"archives/2022/10/index.html",revision:"c8001ec0f39fe77a2990972e433e5782"},{url:"archives/2022/index.html",revision:"69182ec5a8afc52c5333dceae9a4b8f2"},{url:"archives/index.html",revision:"d96cf7f7773e7606ac0741bef5837b5a"},{url:"archives/page/2/index.html",revision:"50119dabaacaef61f21e6d53faa77be2"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"f93d89811ff7d6fb91df465321ec01cd"},{url:"categories/博客/index.html",revision:"e583ffc02bd94bd813c0bb0bcdb32cec"},{url:"css/background.css",revision:"3e73ed8c202352a26ad7471dacda1319"},{url:"css/css1.css",revision:"aa0b98e0bfa04616079791d5ac81fdc5"},{url:"css/index.css",revision:"0b82a701735c360d5bc819b4fe07383e"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/a1.png",revision:"aba5a94d3b3e128ff0842995453f5c5c"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/moon.png",revision:"1c6b7cb8ca569fb56a622883e6f4636e"},{url:"index.html",revision:"583072bfe537383ee2eca6e63c433ea8"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"messageboard/index.html",revision:"bf04de748d0c8ccee3900ab5d447e93a"},{url:"page/2/index.html",revision:"f2a40a95db2ef16cd15595deb57b9d53"},{url:"tags/hexo-博客/index.html",revision:"07639bf3226671a2fd5f9a585f29c2b0"},{url:"tags/index.html",revision:"d7cd48f3c514260fda26e30be6636972"},{url:"tags/python/index.html",revision:"e009b4234899d0c95db22d735fdf91e0"},{url:"tags/sql/index.html",revision:"5027d0c618212f128b506a0cf179fff9"},{url:"tags/Ubuntu-虚拟机-安装教程/index.html",revision:"d0b54cde9471754bc6fd8e947d150e66"},{url:"tags/虚拟机-Ubuntu/index.html",revision:"01aefe616c3e4a69452f43021130141e"},{url:"tags/虚拟机/index.html",revision:"9b83f441bb26da03cbf305acea0fe8bc"}],{})}));
//# sourceMappingURL=service-worker.js.map
