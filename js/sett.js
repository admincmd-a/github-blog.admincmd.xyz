// 史山一坨

const DEFAULT_FONT = "HYTMR";
const DEFAULT_THEME = "pink";
const DEFAULT_BLOG_THEME = "simple";
const config_MAIN_HTML = `
<a href="javascript:configWin.font()" class="config-bottom" id="config-dir">
    <i class="fa-brands fa-itunes-note"></i>
    <span>字体</span>
</a>
<span>    </span>
<!--<a href="javascript:configWin.aplayer()" class="config-bottom" id="config-dir-aplayer">
    <i class="fa-brands fa-itunes-note"></i>
    <span>APlayer</span>
</a>-->
<span>    </span>
<a href="javascript:configWin.user()" class="config-bottom" id="config-dir-user">
    <i class="fa-solid fa-user"></i>
    <span>自定义</span>
</a>
<span>    </span>
<a href="javascript:configWin.about()" class="config-bottom" id="config-dir">
    <i class="fa-solid fa-circle-info"></i>
    <span>关于</span>
</a>
<span>    </span>
`;
const config_FONT_HTML = `
                 <a class="config-font-butt" href="javascript:setFont(\'DDJB\');"        style="font-family:\'DDJB\';!important;color:#000000"                                                       >  钉钉进步体 </a>
<span>    </span><a class="config-font-butt" href="javascript:setFont(\'BWKS\');"        style="font-family:\'BWKS\';!important;color:#000000"                                                       > 方正北魏楷书_GBK </a>
<span>    </span><a class="config-font-butt" href="javascript:setFont(\'HMBO\');"        style="font-family:\'HMBO\';!important;color:#000000"                                                       > 鸿蒙黑体 </a>
<span>    </span><a class="config-font-butt" href="javascript:setFont(\'SHBO\');"        style="font-family:\'SHBO\';!important;color:#000000"                                                       > 思源黑体 </a>
<span>    </span><a class="config-font-butt" href="javascript:setFont(\'FZXS\');"        style="font-family:\'FZXS\';!important;color:#000000"                                                       > 方正像素体 </a>
<span>    </span><a class="config-font-butt" href="javascript:setFont(\'HMLI\');"        style="font-family:\'HMLI\';!important;color:#000000"                                                       > HarmonyOS Sans SC Light </a>
<span>    </span><a class="config-font-butt" href="javascript:setFont(\'HMME\');"        style="font-family:\'HMME\';!important;color:#000000"                                                       > HarmonyOS Sans SC Medium </a>
<span>    </span><a class="config-font-butt" href='javascript:setFont(\'Source Sans\');' style="font-family:\'Source Sans\';!important;color:#000000"                                                > 网站默认 </a>
<span>    </span><a class="config-font-butt" href='javascript:setFont(\'main\');'        style='font-family:-apple-system, IBM Plex Mono ,monosapce,\'微软雅黑\';!important;color:#000000'>系统默认 </a>

<div>
    <p>
    ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
    </p>
</div>
`;
const config_ABOUT_HTML = `
Hexo - Butterfly

网页控制面板
<a href="/about/">关于</a>
`;
const config_USER_HTML = `
<span class="h2">Cookis 与 localStorage</span>
<br />
<a id="config-bottom" href="javascript:clearCookies();">清除所有 Cookie 和 localStorage</a>
<div class="note warning modern">
    <p>按下此按钮将清除您的自定义设置，并标记为新访客，并刷新页面。</p>
</div>
`;
const config_APLAYER_HTML = `
<label class="checkbox-container">
        <input type="checkbox" id="customCheckbox">
        <span class="checkmark" id="checkmark"></span>
        自定义复选框
    </label>
`

let DIV_HTML = ``;
// 样式常量提取
const BLUR_STYLE = "filter: blur(100px); pointer-events: none; opacity: 0.7;";
const RESET_STYLE = "filter: none; pointer-events: auto; opacity: 1;";



// 从localStorage中获取字体参数，若无则使用默认字体
document.getElementById("sett").style.display = "none";
document.getElementById("sett").innerHTML = `
                <div class="configtitle" id="configtitle">
                    <span id="config-title" class="config-title">控制面板</span>
                    <span id="config-2title" class="config-2title">调整网页的设置</span>
                    <a class="exit" href="javascript:configWin.exit();">   X   </a>
                    <a class="top" href="javascript:configWin.topWin();">  ←  <!--🔙--></a>
                </div>
                <div class="config-div" id="config-div">

                </div>
                `;
if (localStorage.getItem('font') !== null) {
    setFont(localStorage.getItem('font'));
}

function setFont(font) {
    if (typeof font !== 'string' || font.trim() === '') {
        console.error('无效的字体参数: ', font); // 错误处理
        return;
    }
    document.body.style.fontFamily = font; // 根据传入的font参数，动态修改body的字体样式
    localStorage.setItem('font', font); // 将字体参数保存到localStorage
    // Snackbar.show({
    //     text: '已为您切换字体！',
    //     pos: 'top-right',
    //     showAction: false
    // });
}



var configWin = {
    // 属性定义
    currentDir: "",  // 修复非法 this:dir 语法
    title: "",
    subtitle: "",

    
    // 主路由方法
    topWin() {  // 更符合驼峰命名规范
        if (this.currentDir === config_MAIN_HTML) {
            this.exit();
        } else {
            // 若后续有
            switch (this.currentDir) {
                default:
                    this.main();
                    break;
            }
        }
    },

    // 退出逻辑
    exit() {
        document.getElementById("sett").style.display = "none";
        document.getElementById("web").style = RESET_STYLE;  // 明确样式重置
    },

    // 主面板
    main() {
        this.setDiv(config_MAIN_HTML);
        this.setTitle("控制面板", "调整网页的设置");
    },

    // 字体设置
    font() {
        this.setDiv(config_FONT_HTML);  // 统一使用this调用
        this.setTitle("字体", "该设置即时生效，设置针对所有显示文本(代码块等特殊位置除外)。");
    },
    // APlayer设置
    aplayer() {
        this.setDiv(config_APLAYER_HTML);
        this.setTitle("APlayer", "");

    },

    user() {
        this.setDiv(config_USER_HTML);
        this.setTitle("隐私设置管理", "管理您的 Cookie 和 localStorage。")
    },

    // 关于页面
    about() {
        this.setDiv(config_ABOUT_HTML);  // 修复 this.this 错误
        this.setTitle("关于", "");
    },

    // 动态加载设置内容
    setDiv(divHtml) {
        if (isMobile()) {
            Snackbar.show({
                text: '移动端暂不支持此功能。',
                pos: 'top-right',
                action: 2000,
            });
        } else {
            const container = document.getElementById("config-div");
                container.innerHTML = divHtml;
                
                document.getElementById("sett").style.display = "block";
                document.getElementById("web").style = BLUR_STYLE;
                
                this.currentDir = divHtml;  // 属性名同步修改
        }
        
    },

    // 设置标题
    setTitle(title, subtitle) {
        const titleEl = document.getElementById("config-title");
        const subtitleEl = document.getElementById("config-2title");
        
        titleEl.textContent = title;        // 修复错误的赋值方式
        subtitleEl.textContent = subtitle;  // 使用textContent代替直接赋值

        this.title = title;
        this.subtitle = subtitle;
    },
};

function clearCookies() {
    var r = confirm("确定要清除所有 Cookie 和 localStorage 吗？\n\n 确定=清除 取消=取消");
    if (r == true) {
        localStorage.clear();
        location.reload();
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for(var i = keys.length; i--;) {
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
            }
        }
    } else {
        Snackbar.show({
            text: '操作已取消。',
            pos: 'top-right',
            action: 2000,
        });
    }
}



//     console.log("Windowsconfig");
//     document.getElementById("config").style.display = `
//     <html>
//     <body>
//         <div id="configWindow" class="js-pjax">
//             <span class="config-title">
//                 <span id="stt">控制面板</span>
//                 <a id="close-console" onclick="toggleWinbox();">×</a>
//             </span>
//             调整网页的设置
//             <button id="backer" onclick="$('.aconfig').hide();$('.configx').show();$('#backer').hide()">
//                 <i class="fa fa-chevron-left"></i>
//                 <span>返回</span>
//             </button>
//             <div class="configs">
//                 <div id="config-buttons">
//                     <button class="configx" onclick="$('#theme-configs').show(); $('.configx').hide(); $('#backer').show();">
//                         <i>
//                             <img src="/img/icon/pc.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>外观</span>
//                     </button>
//                     <button class="configx" onclick="">
//                         <i>
//                             <img src="/img/icon/font.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>字体</span>
//                     </button>
//                     <!-- <button class="configx" onclick="$('#background-configs').show();$('.configx').hide();$('#backer').show();">
//                         <i class="far fa-image"></i>
//                         <span>背景</span>
//                     </button>
//                     <button class="configx" onclick="$('#con-echarts').show();$('.configx').hide();$('#backer').show();var evt = document.createEvent('HTMLEvents');evt.initEvent('resize', false, false);window.dispatchEvent(evt);">
//                         <i>
//                             <img src="/img/icon/g.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>统计</span>
//                     </button> -->
//                     <button class="configx" onclick="$('#con-abouts').show();$('.configx').hide();$('#backer').show();">
//                         <i>
//                             <img src="/img/icon/about.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>关于</span>
//                     </button>
//                     <button class="configx" onclick="$('#xl-configs').show();$('.configx').hide();$('#backer').show();">
//                         <i>
//                             <img src="/img/icon/net.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>线路</span>
//                     </button>
//                 </div>
//                 <div id="xl-configs" class="aconfig">
//                     <div id="xl-configs">
//                         <h2 class="content-head">线路设置</h2>
//                         <p></p>
//                         <a href="blog.admincmd.xyz">默认线路</a>
//                     </div>
//                 </div>
//                 <div id="config-hides">
//                     <div id="theme-configs" class="aconfig">
//                         <h2 class="content-head">性能设置</h2>
//                         <p>
//                             <div class="content" style="display:flex">
//                                 <input id="blur" type="checkbox" onclick="setBlur()">
//                                 <div class="content-text">禁用模糊效果</div>
//                             </div>
//                         </p>
//                         <p>
//                             <h2 class="content-head">主题设置</h2>
//                             <div class="content" style="display:flex">
//                                 <input id="hideAside" type="checkbox" onclick="javascript:rmf.translate()">
//                                 <div class="content-text">繁/简体转换</div>
//                             </div>
//                             <p class="note warning modern">某些字体可能无法适配繁体，请注意。</p>
//                             <div class="content" style="display:flex">
//                                 <input id="hideAplayer" type="checkbox" onclick="toggleAplayer()">
//                                 <div class="content-text">显示 aplayer</div>
//                             </div>
//                             <p class="note warning modern">作者临时关闭了 aplayer 功能，请谅解。</p>
//                             <div class="content" style="display:flex">
//                                 <input id="hideSakura" type="checkbox" onclick="toggleAside()">
//                                 <div class="content-text">侧边栏是否显示</div>
//                             </div>
//                             <div class="content" style="display:flex">
//                                 <input id="autoTheme" type="checkbox" onclick="switchDarkMode()">
//                                 <div class="content-text">明暗模式切换</div>
//                             </div>
//                             <div class="content" style="display:flex">
//                                 <input id="autoColor" type="checkbox" onclick="rmf.switchReadMode()">
//                                 <div class="content-text">阅读模式切换</div>
//                             </div>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </body>
// </html>
// `;

/*

function WindowsconfigFont() {
     document.getElementById("config").style.display = `<div id="config-hides">
                    <div id="theme-configs" class="aconfig">
                        <h2 class="content-head">性能设置</h2>
                        <p>
                            <div class="content" style="display:flex">
                                <input id="blur" type="checkbox" onclick="setBlur()">
                                <div class="content-text">禁用模糊效果</div>
                            </div>
                        </p>
                        <p>
                            <h2 class="content-head">主题设置</h2>
                            <div class="content" style="display:flex">
                                <input id="hideAside" type="checkbox" onclick="javascript:rmf.translate()">
                                <div class="content-text">繁/简体转换</div>
                            </div>
                            <p class="note warning modern">某些字体可能无法适配繁体，请注意。</p>
                            <div class="content" style="display:flex">
                                <input id="hideAplayer" type="checkbox" onclick="toggleAplayer()">
                                <div class="content-text">显示 aplayer</div>
                            </div>
                            <p class="note warning modern">作者临时关闭了 aplayer 功能，请谅解。</p>
                            <div class="content" style="display:flex">
                                <input id="hideSakura" type="checkbox" onclick="toggleAside()">
                                <div class="content-text">侧边栏是否显示</div>
                            </div>
                            <div class="content" style="display:flex">
                                <input id="autoTheme" type="checkbox" onclick="switchDarkMode()">
                                <div class="content-text">明暗模式切换</div>
                            </div>
                            <div class="content" style="display:flex">
                                <input id="autoColor" type="checkbox" onclick="rmf.switchReadMode()">
                                <div class="content-text">阅读模式切换</div>
                            </div>
                        </p>
                    </div>
                </div>
     `
    
}

document.addEventListener('pjax:complete', toconfig);
document.addEventListener('DOMContentLoaded', toconfig);

function toconfig() {
    $("#configWindow").hide();
    const blur = localStorage.getItem("blur") !== "false";
    const yjjs = localStorage.getItem("yjjs") === "true";

    if (localStorage.getItem("fpson") === undefined) {
        localStorage.setItem("fpson", "1");
    }

    document.getElementById("configStyle").innerText = blur ? '' : `
        *,*:not(.card-info)::before,*::after {
            -webkit-backdrop-filter: none!important;
            backdrop-filter: none!important;
            -webkit-filter: none!important;
            filter: none!important;
        }`;

    // Font config related
    const setFontStyle = (font) => {
        document.querySelectorAll("body,.aplayer").forEach(el => {
            el.style.fontFamily = font;
        });
    };

    function setFont(n) {
        localStorage.setItem("font", n);
        switch (n) {
            case "main":
                setFontStyle("-apple-system, IBM Plex Mono ,monospace,'微软雅黑', sans-serif");
                break;
            case "HYPailou":
                setFontStyle("sans-serif");
                break;
            default:
                setFontStyle(`var(--global-font),KyoukashoProL,-apple-system, IBM Plex Mono ,monosapce,"微软雅黑", sans-serif`);
                document.body.style.fontFamily = `var(--global-font),KyoukashoProL,-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif`;
                document.documentElement.style.setProperty('--global-font', n);
        }
    }

    // 初始化主题和字体设置
    if (localStorage.getItem("themeColor") === undefined) {
        localStorage.setItem("themeColor", DEFAULT_THEME);
    }
    setColor(localStorage.getItem("themeColor"));

    if (localStorage.getItem("font") === undefined) {
        localStorage.setItem("font", DEFAULT_FONT);
    }
    setFont(localStorage.getItem("font"));

    // 处理右侧隐藏状态
    if (localStorage.getItem("hideRightside") === undefined) {
        localStorage.setItem("hideRightside", "0");
    }
    if (localStorage.getItem("hideRightside") === "1") {
        $("#rightside").toggle();
    }

    // Background change
    try {
        let data = loadData('blogbg', 1440);
        if (data) changeBg(data, 1);
        else localStorage.removeItem('blogbg');
    } catch (error) {
        console.error('读取背景异常:', error);
        localStorage.removeItem('blogbg');
    }

    // UI设置
    $(".aconfig").hide();
    $('#backer').hide();
}

function setColor(c) {
    document.getElementById("themeColor").innerText = `:root{--lyx-theme:var(--lyx-${c})!important}`;
    localStorage.setItem("themeColor", c);
}

function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }));
}

function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    if (d) {
        let t = Date.now() - d.time;
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

function changeBg(s, flag) {
    let bg = document.getElementById('web_bg');
    if (s.charAt(0) === '#') {
        bg.style.backgroundColor = s;
        bg.style.backgroundImage = 'none';
    } else {
        bg.style.backgroundImage = s;
    }
    if (!flag) saveData('blogbg', s);
}

// 切换主题功能
function toggleRightside() {
    $("#rightside").toggle();
    localStorage.setItem("hideRightside", Math.abs(Number(localStorage.getItem("hideRightside")) - 1));
}

// 初始化设置
try {
    document.getElementById("autoTheme").checked = localStorage.getItem("autoTheme") === "true";
} catch (error) {
    console.error('自动主题切换设置异常:', error);
}

// 事件绑定和其他逻辑代码...
*/