var nativeShare=function(e,i){if(!document.getElementById(e))return!1;var t={lower:"//3gimg.qq.com/html5/js/qb.js",higher:"//jsapi.qq.com/get?api=app.share"},n={qq:{forbid:0,lower:1,higher:2},uc:{forbid:0,allow:1}},s=navigator.appVersion,a=s.split("MQQBrowser/").length>1?n.qq.higher:n.qq.forbid,r=s.split("UCBrowser/").length>1?n.uc.allow:n.uc.forbid,o={uc:"",qq:""},l=!1;i=i||{},this.elementNode=e,this.url=i.url||document.location.href||"",this.title=i.title||document.title||"",this.desc=i.desc||document.title||"",this.img=i.img||document.getElementsByTagName("img").length>0&&document.getElementsByTagName("img")[0].src||"",this.img_title=i.img_title||document.title||"",this.from=i.from||window.location.host||"",this.ucAppList={sinaWeibo:["kSinaWeibo","SinaWeibo",11,"新浪微博"],weixin:["kWeixin","WechatFriends",1,"微信好友"],weixinFriend:["kWeixinFriend","WechatTimeline","8","微信朋友圈"],QQ:["kQQ","QQ","4","QQ好友"],QZone:["kQZone","QZone","3","QQ空间"]},this.share=function(e){var i=this.title,t=this.url,s=this.desc,o=this.img,h=this.img_title,d=this.from;if(r)e=""==e?"":"iPhone"==platform_os?this.ucAppList[e][0]:this.ucAppList[e][1],"QZone"==e&&(B="mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url="+o+"&title="+i+"&description="+s+"&url="+t+"&app_name="+d,k=document.createElement("div"),k.style.visibility="hidden",k.innerHTML='<iframe src="'+B+'" scrolling="no" width="1" height="1"></iframe>',document.body.appendChild(k),setTimeout(function(){k&&k.parentNode&&k.parentNode.removeChild(k)},5e3)),"undefined"!=typeof ucweb?ucweb.startRequest("shell.page_share",[i,i,t,e,"","@"+d,""]):"undefined"!=typeof ucbrowser&&ucbrowser.web_share(i,i,t,e,"","@"+d,"");else if(a&&!l){e=""==e?"":this.ucAppList[e][2];var p={url:t,title:i,description:s,img_url:o,img_title:h,to_app:e,cus_txt:"请输入此时此刻想要分享的内容"};p=""==e?"":p,"undefined"!=typeof browser?"undefined"!=typeof browser.app&&a==n.qq.higher&&browser.app.share(p):"undefined"!=typeof window.qb&&a==n.qq.lower&&window.qb.share(p)}},this.html=function(){var e=document.getElementById(this.elementNode),i='<div class="label">分享到</div><div class="list clearfix"><span data-app="sinaWeibo" class="nativeShare weibo"><i></i>新浪微博</span><span data-app="weixin" class="nativeShare weixin"><i></i>微信好友</span><span data-app="weixinFriend" class="nativeShare weixin_timeline"><i></i>微信朋友圈</span><span data-app="QQ" class="nativeShare qq"><i></i>QQ好友</span><span data-app="QZone" class="nativeShare qzone"><i></i>QQ空间</span><span data-app="" class="nativeShare more"><i></i>更多</span></div>';e.innerHTML=i},this.isloadqqApi=function(){if(a){var e=o.qq<5.4?t.lower:t.higher,i=document.createElement("script"),n=document.getElementsByTagName("body")[0];i.setAttribute("src",e),n.appendChild(i)}},this.getPlantform=function(){return ua=navigator.userAgent,ua.indexOf("iPhone")>-1||ua.indexOf("iPod")>-1?"iPhone":"Android"},this.is_weixin=function(){var e=s.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)},this.getVersion=function(e){var i=e.split("."),t=parseFloat(i[0]+"."+i[1]);return t},this.init=function(){platform_os=this.getPlantform(),o.qq=a?this.getVersion(s.split("MQQBrowser/")[1]):0,o.uc=r?this.getVersion(s.split("UCBrowser/")[1]):0,l=this.is_weixin(),a&&o.qq<5.4&&"iPhone"==platform_os||a&&o.qq<5.3&&"Android"==platform_os?a=n.qq.forbid:a&&o.qq<5.4&&"Android"==platform_os?a=n.qq.lower:r&&(o.uc<10.2&&"iPhone"==platform_os||o.uc<9.7&&"Android"==platform_os)&&(r=n.uc.forbid),this.isloadqqApi(),a||r?this.html():document.write("目前该分享插件仅支持手机UC浏览器和QQ浏览器")},this.init();for(var h=this,d=document.getElementsByClassName("nativeShare"),p=0;p<d.length;p++)d[p].onclick=function(){h.share(this.getAttribute("data-app"))};return this};