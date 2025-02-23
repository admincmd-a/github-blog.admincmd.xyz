// 史山一坨

const DEFAULT_FONT = "HYTMR";
const DEFAULT_THEME = "pink";
const DEFAULT_BLOG_THEME = "simple";

let DIV_HTML = ``;
//if (Storage.get('font')) {setFont(Storage.get('font') || DEFAULT_FONT);}
//else {setFont(DEFAULT_FONT);}

 // 从localStorage中获取字体参数，若无则使用默认字体
document.getElementById("sett").style.display = "none";
document.getElementById("sett").innerHTML = `
                <span class="setting-title">控制面板</span>
                <a class="exit" href="javascript:SettingWin.exit();">   X   </a>
                <a class="top" href="javascript:SettingWin.exit();">  ←  <!--🔙--></a>
                <span class="setting-2title">调整网页的设置</span>
                <div class="setting-div" id="setting-div">

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
    Snackbar.show({
        text: '已为您切换字体！',
        pos: 'top-right',
        showAction: false
    });
}


const SettingWin = {
    exit: function() {
        document.getElementById("sett").style.display = "none";// 隐藏设置面板
        document.body.classList.remove('blur-and-disable');
    },
    main: function() {
        SettingWin.setDiv(`
                <a href="javascript:SettingWin.font()" class="setting-dir" id="setting-dir">
                    <img src="/img/icon/pc.ico" alt="外观" height="50" width="50" class="setting-icon" />
                    <span>字体</span>
                </a>
                <a href="javascript:SettingWin.aplayer()" class="setting-dir" id="setting-dir-aplayer">
                    <i class="fa-brands fa-itunes-note"></i>
                    <span>APlayer</span>
                </a>
                <a href="javascript:SettingWin.user()" class="setting-dir" id="setting-dir-user">
                    <i class="fa-solid fa-user"></i>
                    <span>自定义</span>
                </a>
                <a href="javascript:SettingWin.font()" class="setting-dir" id="setting-dir">
                    <i class="fa-solid fa-circle-info"></i>
                    <span>关于</span>
                </a>
                `);
    },
    font: function() {
        SettingWin.setDiv(`
        <a href="javascript:setFont(\'DDJB\');" style="font-family:\'DDJB\'important;color:#000000"> 【 钉钉进步体】</a>
        <span> | </span> <a class="setting-font-butt" href="javascript:setFont(\'BWKS\');" style="font-family:\'BWKS\';important;color:#000000"> 【方正北魏楷书_GBK】</a>
        <span> | </span> <a class="setting-font-butt" href="javascript:setFont(\'HMBO\');" style="font-family:\'HMBO\';important;color:#000000"> 【鸿蒙黑体】</a>
        <span> | </span> <a class="setting-font-butt" href="javascript:setFont(\'SHBO\');" style="font-family:\'SHBO\';important;color:#000000"> 【思源黑体】</a>
        <span> | </span> <a class="setting-font-butt" href="javascript:setFont(\'FZXS\');" style="font-family:\'FZXS\';important;color:#000000"> 【方正像素体】</a>
        <span> | </span> <a class="setting-font-butt" href="javascript:setFont(\'HMLI\');" style="font-family:\'HMLI\';important;color:#000000"> 【HarmonyOS Sans SC Light】</a>
        <span> | </span> <a class="setting-font-butt" href="javascript:setFont(\'HMME\');" style="font-family:\'HMME\';important;color:#000000"> 【HarmonyOS Sans SC Medium】</a>
        <span> | </span> <a class="setting-font-butt" href='javascript:setFont(\'Source Sans\');' style="font-family:\'Source Sans\';important;color:#000000"> 【网站默认】</a>
        <span> | </span> <a class="setting-font-butt" href='javascript:setFont(\'main\');' style='font-family:-apple-system, IBM Plex Mono ,monosapce,\'微软雅黑\', sans-serif;'>【系统默认】</a>
        `)
    },
    

    setDiv: function(DIV_HTML) {
        document.getElementById("setting-div").innerHTML = DIV_HTML
        document.getElementById("sett").style.display = "";

        // 模糊其他
        document.body.classList.add('blur-and-disable');
        // 排除 #sett 元素自身
        sett.classList.remove('blur-and-disable');

        this.html = DIV_HTML;
    }
}


//     console.log("WindowsSetting");
//     document.getElementById("setting").style.display = `
//     <html>
//     <body>
//         <div id="settingWindow" class="js-pjax">
//             <span class="setting-title">
//                 <span id="stt">控制面板</span>
//                 <a id="close-console" onclick="toggleWinbox();">×</a>
//             </span>
//             调整网页的设置
//             <button id="backer" onclick="$('.asetting').hide();$('.settingx').show();$('#backer').hide()">
//                 <i class="fa fa-chevron-left"></i>
//                 <span>返回</span>
//             </button>
//             <div class="settings">
//                 <div id="setting-buttons">
//                     <button class="settingx" onclick="$('#theme-settings').show(); $('.settingx').hide(); $('#backer').show();">
//                         <i>
//                             <img src="/img/icon/pc.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>外观</span>
//                     </button>
//                     <button class="settingx" onclick="">
//                         <i>
//                             <img src="/img/icon/font.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>字体</span>
//                     </button>
//                     <!-- <button class="settingx" onclick="$('#background-settings').show();$('.settingx').hide();$('#backer').show();">
//                         <i class="far fa-image"></i>
//                         <span>背景</span>
//                     </button>
//                     <button class="settingx" onclick="$('#con-echarts').show();$('.settingx').hide();$('#backer').show();var evt = document.createEvent('HTMLEvents');evt.initEvent('resize', false, false);window.dispatchEvent(evt);">
//                         <i>
//                             <img src="/img/icon/g.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>统计</span>
//                     </button> -->
//                     <button class="settingx" onclick="$('#con-abouts').show();$('.settingx').hide();$('#backer').show();">
//                         <i>
//                             <img src="/img/icon/about.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>关于</span>
//                     </button>
//                     <button class="settingx" onclick="$('#xl-settings').show();$('.settingx').hide();$('#backer').show();">
//                         <i>
//                             <img src="/img/icon/net.ico" alt="外观" height="50" width="50">
//                         </i>
//                         <span>线路</span>
//                     </button>
//                 </div>
//                 <div id="xl-settings" class="asetting">
//                     <div id="xl-settings">
//                         <h2 class="content-head">线路设置</h2>
//                         <p></p>
//                         <a href="blog.admincmd.xyz">默认线路</a>
//                     </div>
//                 </div>
//                 <div id="setting-hides">
//                     <div id="theme-settings" class="asetting">
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

function WindowsSettingFont() {
     document.getElementById("setting").style.display = `<div id="setting-hides">
                    <div id="theme-settings" class="asetting">
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

document.addEventListener('pjax:complete', tosetting);
document.addEventListener('DOMContentLoaded', tosetting);

function tosetting() {
    $("#settingWindow").hide();
    const blur = localStorage.getItem("blur") !== "false";
    const yjjs = localStorage.getItem("yjjs") === "true";

    if (localStorage.getItem("fpson") === undefined) {
        localStorage.setItem("fpson", "1");
    }

    document.getElementById("settingStyle").innerText = blur ? '' : `
        *,*:not(.card-info)::before,*::after {
            -webkit-backdrop-filter: none!important;
            backdrop-filter: none!important;
            -webkit-filter: none!important;
            filter: none!important;
        }`;

    // Font setting related
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
    $(".asetting").hide();
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