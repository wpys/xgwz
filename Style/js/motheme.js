function cookie_encode(a) {
    var b = encodeURIComponent(a),
    c = b.replace(/(%7B|%7D|%3A|%22|%23|%5B|%5D)/g,
    function(a) {
        return decodeURIComponent(a)
    });
    return c
}
function thmoon() {
    document.getElementById("readbg").className = "gd theme-moon active",
    $.cookie("thmoon", "1", {
        expires: 365,
        path: "/"
    })
}
function clsize(a) {
    15 == a ? document.getElementById("TextContent").className = "read-content fz14": 16 == a ? document.getElementById("TextContent").className = "read-content fz16": 17 == a ? document.getElementById("TextContent").className = "read-content fz18": 18 == a ? document.getElementById("TextContent").className = "read-content fz20": 19 == a ? document.getElementById("TextContent").className = "read-content fz22": 20 == a && (document.getElementById("TextContent").className = "read-content fz24"),
    $.cookie("fontsize", a, {
        expires: 365,
        path: "/"
    })
}
function cltheme(a) {
    1 == a ? document.getElementById("readbg").className = "hui": 2 == a ? document.getElementById("readbg").className = "ls": 3 == a ? document.getElementById("readbg").className = "fs": 4 == a ? document.getElementById("readbg").className = "nuan": 5 == a ? document.getElementById("readbg").className = "huang": 6 == a ? document.getElementById("readbg").className = "lan": 7 == a && (document.getElementById("readbg").className = ""),
    $.cookie("theme", a, {
        expires: 365,
        path: "/"
    })
}
function login() {
    function k(a) {
        var b = a + "=",
        c = "";
        return document.cookie.length > 0 && (offset = document.cookie.indexOf(b), -1 != offset && (offset += b.length, end = document.cookie.indexOf(";", offset), -1 == end && (end = document.cookie.length), c = unescape(document.cookie.substring(offset, end)))),
        c
    }
    var j, a = 0,
    b = "",
    c = "",
    d = 0,
    e = 0,
    f = 0,
    g = "",
    h = "";
    if (document.cookie.indexOf("jieqiUserInfo") >= 0) for (j = k("jieqiUserInfo"), start = 0, offset = j.indexOf(",", start); offset > 0;) tmpval = j.substring(start, offset),
    tmpidx = tmpval.indexOf("="),
    tmpidx > 0 && (tmpname = tmpval.substring(0, tmpidx), tmpval = tmpval.substring(tmpidx + 1, tmpval.length), "jieqiUserId" == tmpname ? a = tmpval: "jieqiUserName_un" == tmpname ? b = tmpval: "jieqiUserPassword" == tmpname ? c = tmpval: "jieqiUserGroup" == tmpname ? d = tmpval: "jieqiNewMessage" == tmpname ? e = tmpval: "jieqiUserVip" == tmpname ? f = tmpval: "jieqiUserHonor_un" == tmpname ? g = tmpval: "jieqiUserGroupName_un" == tmpname && (h = tmpval)),
    start = offset + 1,
    offset < j.length ? (offset = j.indexOf(",", start), -1 == offset && (offset = j.length)) : offset = -1;
    0 == a || "" == b || -1 == document.cookie.indexOf("PHPSESSID") && "" == c ? (document.write('<form action="/login.php"  name="frmlogin" method="post">'), document.write('<div class="unloginl">'), document.write('<input type="text" name="username" placeholder="帐号" class="putk">'), document.write(' <input type="password" name="password" placeholder="密码" class="putk">'), document.write(' <input type="hidden" class="login_box" checked="checked" name="usecookie" value="315360000"> '), document.write(' <input class="loginbtn" type="hidden" name="action" value="login">'), document.write(' <input type="submit" name="submit" class="logint" value="登录">&nbsp;&nbsp;<a href="/register.php">注册</a>'), document.write("</form>")) : (document.write("<b>Hi " + b + ' </b>，<a href="/user.php">个人中心</a> | <a href="/bookcase.php">我的书架</a>'), e > 0 ? document.write(' | <a href="/message.php?box=inbox" style="color:#f00">您有短信</a>') : document.write(' | <a href="/message.php?box=inbox">收件箱</a>'), document.write(' | <a href="/logout.php" target="_self">退出</a>'))
}
function sq(a, b) {
    e = "/modules/article/addbookcase.php?bid=" + a + "&cid=" + b + "&ajax_request=1",
    $.get(e,
    function(a) {
		if(userlogin==0){
			alert("请先完成登录后，再将本书添加到书签吧！");
		}else{
			alert(a.replace("<br />", "").replace(/(\<br \/\>)/g, "\r\n"))
		}
    })
}
function tjp(a) {
    e = "/modules/article/uservote.php?id=" + a + "&ajax_request=1",
    $.get(e,
    function(a) {
		if(userlogin==0){
			alert("请先完成登录后，再执行此操作吧！");
		}else{
			alert(a.replace("<br />", "").replace(/(\<br \/\>)/g, "\r\n"));
		}
        
    })
}
function toolbar000(){
document.writeln("<div class=\'tb-toolbar-container theme\' data-spm=\'toolbar\'>");
document.writeln("<a href=\'/\' class=\'tab\'><span class=\'tb-toolbar-iconfont tb-toolbar-icon-home\'></span><p class=\'text\'>首页</p></a>");
document.writeln("<a href=\'/book/\' class=\'tab\'><span class=\'tb-toolbar-iconfont tb-toolbar-icon-library\'></span><p class=\'text\'>书库</p></a>");
document.writeln("<a href=\'/bookcase.php\' class=\'tab\'><span class=\'tb-toolbar-iconfont tb-toolbar-icon-bookcase\'></span><p class=\'text\'>书架</p></a>");
document.writeln("<a href=\'/history\' class=\'tab\'><span class=\'tb-toolbar-iconfont tb-toolbar-icon-history\'></span><p class=\'text\'>记录</p></a>");
document.writeln("<a href=\'/user.php\' class=\'tab\'><span class=\'tb-toolbar-iconfont tb-toolbar-icon-my\'></span><p class=\'text\'>账户</p></a>");
document.writeln("<a href=\'#\' class=\'tab redapp\'><span class=\'tb-toolbar-iconfont tb-toolbar-icon-app\'></span><p class=\'text redapp\'>下载</p></a>");
document.writeln("</div>");
}
function tj() { !
    function() {
        // var b, a = document.createElement("script");
        // a.src = "https://hm.baidu.com/hm.js?d6c21518da630dd4f86d47c04de176de",
        // b = document.getElementsByTagName("script")[0],
        // b.parentNode.insertBefore(a, b)
    } ()
}
function theme() {
    document.writeln('<div class="toolbar"><div class="theme" style="float: left;width: auto;height: auto;"><span><a onclick="sq(' + bid + "," + cid + ');">添加书签</a><a href="/newmessage.php?tosys=1&amp;title=' + name + '有错误&content='+ chapter_url +'存在问题，请及时修复！">报错求书</a><a href="/history.html">阅读记录</a></span></div><a href="javascript:;" class="aminus font_dec" id="font_dec"></a><a href="javascript:;" class="aadd font_inc" id="font_inc"></a><a href="javascript:;" class="pattern menu-moon" id="mode"></a><div class="option theme"><div class="theme-area theme-pink" id="theme2"></div></div><div class="cr"></div></div>')
}

jQuery.cookie = function(a, b, c) {
    var d, e, f, g;
    return arguments.length > 1 && "[object Object]" !== String(b) ? (c = jQuery.extend({},
    c), (null === b || void 0 === b) && (c.expires = -1), "number" == typeof c.expires && (d = c.expires, e = c.expires = new Date, e.setDate(e.getDate() + d)), b = String(b), document.cookie = [encodeURIComponent(a), "=", c.raw ? b: cookie_encode(b), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path: "", c.domain ? "; domain=" + c.domain: "", c.secure ? "; secure": ""].join("")) : (c = b || {},
    g = c.raw ?
    function(a) {
        return a
    }: decodeURIComponent, (f = new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)").exec(document.cookie)) ? g(f[1]) : null)
},
$(function() {
    var c, a = $.cookie("fontsize"),
    b = $.cookie("theme");
    void 0 == a ? (clsize(18), a = 18) : clsize(a),
    void 0 == b ? (cltheme(1), b = 1) : cltheme(b),
    $("#font_inc").click(function() {
        19 >= a && "" != a ? (a++, clsize(a)) : clsize("20")
    }),
    $("#font_dec").click(function() {
        a >= 16 && "" != a ? (a--, clsize(a)) : clsize("15")
    }),
    $("#theme2").click(function() {
        6 >= b ? (b++, cltheme(b)) : (b -= 6, cltheme(b))
    }),
    c = $.cookie("thmoon"),
    1 == c && thmoon(),
    $("#mode").click(function() {
        var a = document.getElementById("readbg").getAttribute("class");
        "gd theme-moon active" != a ? thmoon() : (cltheme(b), $.cookie("thmoon", null, {
            expires: 365,
            path: "/"
        }))
    })
});