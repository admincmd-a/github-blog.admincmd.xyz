// 主 JS 文件
/*
*/


// 往控制台里写点东西
console.log('Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,');
// 十分的胜景，害的我笑了一下
console.log(`
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
.....................@@@@..................@@@..........................@@@@..............................@@@@@..................................@@@...............
.....................@@@@..................@@@..........................@@@@............................@@@@@@@@@................................@@@...............
.....................@@@@..................@@@..........................@@@@...........................@@@@@@@@@@@...............................@@@...............
....................@@@@@@.................@@@..........................@@@@...........................@@@@@.@@@@@...............................@@@...............
....................@@@@@@.................@@@..........................@@@@..........................@@@@.....@@@@..............................@@@...............
....................@@@@@@.................@@@........................................................@@@@.....@@@@..............................@@@...............
...................@@@@@@@@................@@@........................................................@@@@.....@@@@..............................@@@...............
...................@@@@@@@@.........@@@@@@.@@@...@@@@@@@@@.@@@@.........@@@@.........@@@.@@@@@@......@@@@......@@@@..@@@@@@@@@.@@@@.......@@@@@@.@@@...............
...................@@@@.@@@........@@@@@@@@@@@...@@@@@@@@@@@@@@@........@@@@.........@@@@@@@@@@@.....@@@@......@@@@..@@@@@@@@@@@@@@@.....@@@@@@@@@@@...............
...................@@@..@@@.......@@@@@@@@@@@@...@@@@@@@@@@@@@@@........@@@@.........@@@@@@@@@@@@....@@@@............@@@@@@@@@@@@@@@....@@@@@@@@@@@@...............
..................@@@@..@@@@......@@@@...@@@@@...@@@@@.@@@@@.@@@@.......@@@@.........@@@@@...@@@@....@@@@............@@@@@.@@@@@.@@@@...@@@@...@@@@@...............
..................@@@@..@@@@.....@@@@.....@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@@.....@@@....@@@@............@@@@..@@@@..@@@@..@@@@.....@@@@...............
..................@@@@@@@@@@.....@@@@.....@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@@.....@@@....@@@@......@@@@..@@@@..@@@@..@@@@..@@@@.....@@@@...............
.................@@@@@@@@@@@@....@@@@......@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@....@@@@......@@@@..@@@@..@@@@..@@@@..@@@@......@@@...............
.................@@@@@@@@@@@@....@@@@......@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@....@@@@......@@@@..@@@@..@@@@..@@@@..@@@@......@@@...............
.................@@@@....@@@@....@@@@.....@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@....@@@@@.....@@@@..@@@@..@@@@..@@@@..@@@@.....@@@@...............
.................@@@@....@@@@....@@@@.....@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@.....@@@@.....@@@@..@@@@..@@@@..@@@@..@@@@.....@@@@...............
................@@@@......@@@@....@@@@...@@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@.....@@@@@...@@@@...@@@@..@@@@..@@@@...@@@@...@@@@@...............
................@@@@......@@@@....@@@@@@@@@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@......@@@@@@@@@@@...@@@@..@@@@..@@@@...@@@@@@@@@@@@...............
................@@@@......@@@@.....@@@@@@@@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@......@@@@@@@@@@....@@@@..@@@@..@@@@....@@@@@@@@@@@...............
...............@@@@@.......@@@@.....@@@@@@@@@@...@@@@..@@@@..@@@@.......@@@@.........@@@......@@@........@@@@@@@.....@@@@..@@@@..@@@@.....@@@@@@@@@@...............
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
...................................................................................................................................................................
`)
   
document.getElementById("sett").style.display = "none";
// ----------------------
// HTTP透明端口转发：80 8080 8880 2052 2082 2086 2095
// HTTPS隧道端口转发：443 2053 2083 2087 2096 8443
// HTTP/HTTPS端口隧道转发，但以下端口禁用CDN缓存：2052 2053 2082 2083 2086 2087 2095 2096 8880 8443

// 找到所有具有 "post" 的 ID 的链接
// const links = document.querySelectorAll('a[id^="post"]');

// 遍历每一个链接并修改其 href
// links.forEach(link => {
//     link.href = "https://blog.admincmd.xyz/url.html?url=" + encodeURIComponent(link.href);
// });


// document.getElementById("sett").style.display="none";//隐藏元素
// document.getElementById("font-sett").style.display="none";//隐藏元素

// 用户跳过来弄过去改下标题
// 修改标题
document.addEventListener('DOMContentLoaded', (event) => {
    originalTitle = document.title; // 记录初始标题
    lostFocusTitle = `这都跑去干啥了？ 让我康康 | ${originalTitle}`; // 页面失去焦点时的标题
    gainedFocusTitle = `干啥去了，现在才回来……  | ${originalTitle}`; // 页面获得焦点时的标题

    // 监听页面失去焦点和获得焦点事件
    document.addEventListener('visibilitychange', () => {
        try {
            //if (shouldExclude) return; // 如果 URL 在排除列表中，则直接返回
            
            if (document.hidden) {
                // 页面失去焦点
                if (document.title !== '页面没有找到 | 管理员 - 命令提示符') {
                    document.title = lostFocusTitle; // 更改标题
                }
            } else {
                // 页面获得焦点
                document.title = gainedFocusTitle; // 更改标题
                setTimeout(() => {
                    if (!document.hidden) {
                        document.title = originalTitle; // 改回来
                    }
                }, 2000); // 等待2秒
            }
        } catch (error) {
            console.error('标题更改过程中出错:', error);
        }
    });
});


// 欢迎语，cookie 提醒 --------------------------------------------
// 首次访问，弹出Cookie提醒
welcometxmap()
timeWindows()

// 以下是欢迎语
// ----------------------------------
// 2024.12.21 修正了无法获取 KEY 的问题，将欢迎语显示合并，如果在武汉，那就是UP的老乡
function welcometxmap() {
    //请求数据
    ipLoacation = window.saveToLocal.get('ipLocation');
    if (ipLoacation) {
        // 使用 ipLocation
    } else {
        // 数据已过期或不存在
        var txkey = 'ET6BZ-DDXEN-JRBFT-SZEUP-WBLXS-V7FGJ';
        // ttttttttttttttttttt
        var script = document.createElement('script');
        var url = `https://apis.map.qq.com/ws/location/v1/ip?key=${txkey}&output=jsonp`;
        script.src = url;
        window.QQmap = function (data) {
            ipLoacation = data;
            // 将数据保存到 localStorage，过期时间设置为 1 天
            window.saveToLocal.set('ipLocation', ipLoacation, 1);
            document.body.removeChild(script);
            delete window.QQmap;
        };
        document.body.appendChild(script);
    }
    showWelcome();
}
function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}

function showWelcome() {

    let dist = getDistance(114.305000, 30.592800, ipLoacation.result.location.lng, ipLoacation.result.location.lat);
    let pos = ipLoacation.result.ad_info.nation;
    let ip = ipLoacation.result.ip;
    let ipDZ;
    let posdesc;//要显示的信息
    let ass = "小伙伴";

    //根据国家、省份、城市信息自定义欢迎语
    //海外地区不支持省份及城市信息
    switch (ipLoacation.result.ad_info.nation) {
        case "日本":
            posdesc = "よろしく、一緒に桜を見に行きますか？";
            // 译文：你好，一起去看樱花吗？
            break;
        case "美国":
            posdesc = "Make America Great Again!";
            // 译文：让美国再次伟大！
            // ？？？？？？
            break;
        case "英国":
            posdesc = "I'd like to ride the London Eye with you at night.";
            // 译文：想同你一起夜乘伦敦眼。
            break;
        case "俄罗斯":
            posdesc = "До дна эту водку!";
            // 译文：干了这瓶伏特加！
            break;
        case "法国":
            posdesc = "这就是生活。";
            // 译文：C'est La Vie
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            // 译文：时间过得飞快。
            break;
        case "澳大利亚":
            posdesc = "Let's go to the Great Barrier Reef together!";
            // 译文：让我们一起去大堡礁吧！
            break;
        case "加拿大":
            posdesc = "Prenez une feuille de carte et vous la donnez.";
            // 译文：拾起一片枫叶赠予你。
            break;
        case "南极洲":
            posdesc = "南极洲的风很大，你一定记得要带伞！";
            // 译文：69
            break;
        case "巴西":
            posdesc = "巴西足球";
            break;
        case "中国":
            pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city;
            switch (ipLoacation.result.ad_info.province) {
                case "北京市":
                    pos = "北京市";
                    posdesc = "北——京——欢迎你~~~";
                    break;
                case "天津市":
                    pos = "天津市";
                    posdesc = "讲段相声吧。";
                    break;
                case "重庆市":
                    pos = "重庆市";
                    posdesc = "高德地图:已到达重庆，下面切换百度地图导航。百度地图：已到达重庆，下面切换高德地图导航。"
                    break;
                case "河北省":
                    posdesc = "山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";
                    break;
                case "山西省":
                    posdesc = "展开坐具长三尺，已占山河五百余。";
                    break;
                case "内蒙古自治区":
                    posdesc = "天苍苍，野茫茫，风吹草低见牛羊。";
                    break;
                case "辽宁省":
                    posdesc = "我想吃烤鸡架！";
                    break;
                case "吉林省":
                    posdesc = "状元阁就是东北烧烤之王。";
                    break;
                case "黑龙江省":
                    posdesc = "哈尔滨红肠,东北饺子";
                    break;
                case "上海市":
                    pos = "上海市";
                    posdesc = "众所周知，中国只有 3 个城市。";
                    break;
                case "江苏省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "南京市":
                            posdesc = "欢迎来自安徽省南京市的小伙伴。";
                            break;
                        case "苏州市":
                            posdesc = "上有天堂，下有苏杭。";
                            break;
                        default:
                            posdesc = "散装是必须要散装的。";
                            break;
                    }
                    break;
                case "浙江省":
                    posdesc = "东风渐绿西湖柳，雁已还人未南归。";
                    break;
                case "安徽省":
                    posdesc = "蚌埠住了，芜湖起飞。";
                    break;
                case "福建省":
                    posdesc = "井邑白云间，岩城远带山。";
                    break;
                case "江西省":
                    posdesc = "落霞与孤鹜齐飞，秋水共长天一色。";
                    break;
                case "山东省":
                    posdesc = "遥望齐州九点烟，一泓海水杯中泻。";
                break;
                case "湖北省":
                switch (ipLoacation.result.ad_info.city) {
                    case "武汉市":
                        posdesc = "哟，我也住在武汉市。大江大河大武汉，走，吃热干面去！";
                        ass = "老乡";
                        break;
                    case "咸宁市":
                        posdesc = "我老家在咸宁。";
                        break;
                    default:
                        posdesc = "老板，来碗热干面！";
                        break;
                }
                    break;
                case "湖南省":
                    posdesc = "74751，长沙斯塔克。";
                    break;
                case "广东省":
                    posdesc = "老板来两斤福建人。";
                    break;
                case "广西壮族自治区":
                    posdesc = "桂林山水甲天下。";
                    break;
                case "海南省":
                    posdesc = "朝观日出逐白浪，夕看云起收霞光。";
                    break;
                case "四川省":
                    posdesc = "康康川妹子。";
                    break;
                case "贵州省":
                    posdesc = "茅台，学生，再塞200。";
                    break;
                case "云南省":
                    posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天。";
                    break;
                case "西藏自治区":
                    posdesc = "躺在茫茫草原上，仰望蓝天。";
                    break;
                case "陕西省":
                    posdesc = "来份臊子面加馍。";
                    break;
                case "甘肃省":
                    posdesc = "羌笛何须怨杨柳，春风不度玉门关。";
                    break;
                case "青海省":
                    posdesc = "牛肉干和老酸奶都好好吃。";
                    break;
                case "宁夏回族自治区":
                    posdesc = "大漠孤烟直，长河落日圆。";
                    break;
                case "新疆维吾尔自治区":
                    posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风。";
                    break;
                case "台湾省":
                    posdesc = "我在这头，大陆在那头。";
                    break;
                case "香港特别行政区":
                    pos = "香港特别行政区";
                    posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉。";
                    break;
                case "澳门特别行政区":
                    pos = "澳门特别行政区";
                    posdesc = "性感荷官，在线发牌。";
                    break;
                default:
                    posdesc = "社会主义大法好。";
                    break;
            }
            break;
        default:
            posdesc = "带我去你的国家逛逛吧。";
            break;
    }

    //判断时间
    let timeChange;
    let date = new Date();
    if (date.getHours()>= 5 && date.getHours() < 11) timeChange = "<span>上午好</span>，一日之计在于晨";
    else if (date.getHours()>= 1 && date.getHours() < 13) timeChange = "<span>中午好</span>，开——饭——了——";
    else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>下午好</span>，懒懒地睡个午觉吧！";
    else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>下午三点了</span>，上课摸鱼 ING...";
    else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = "<span>夕阳无限好！</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>晚上好</span>，我要写作业了……";
    else timeChange = "都几点了，还在熬夜？";

    // 检查 welcome-info 是否存在
    const welcomeInfoElement = document.getElementById("welcome-info");
    if (!welcomeInfoElement) {
        return;
    }

    //自定义文本需要放的位置
    welcomeInfoElement.innerHTML = `欢迎来自<span>${pos}</span>的${ass}，${timeChange}<br>你距我约有<span>${dist}</span>公里，${posdesc}，您的 IP 地址是 ${ip}`;

    if (sessionStorage.getItem("popCookieWindow") != "0") {
        setTimeout(function () {
            Snackbar.show({
                text: 'INFO 本站使用 Cookie 和本地 会话存储 保证浏览体验和网站统计',
                pos: 'top-right',
                actionText: "查看博客声明",
                onActionClick: function (element) {
                    window.open("/license")
                },
            })
        }, 3500)
    }
    //不在弹出Cookie提醒
    sessionStorage.setItem("popCookieWindow", "0");
    
    
    let referrer = document.referrer || ' ? ? ? ';
    let domain = referrer ? referrer.split("://")[1] : ' ? ? ? ';
    domain = domain ? domain.split("/")[0] : ' ? ? ? ';

    setTimeout(function () { // 康康是不是来自其他网站
        if(domain=='blog.admincmd.xyz') {
            console.log('由本站主站站点访问')
        } else if(domain=='vercel-blog.admincmd.xyz') {
            console.log('由本站镜像站点访问') // 已弃用此域名
        } else if(domain=='netlify-blog.admincmd.xyz') {
            console.log('由本站镜像站点访问')
        } else if(domain=='cf-blog.admincmd.xyz') {
            console.log('由本站镜像站点访问')
        } else if(domain=='github-blog.admincmd.xyz') {
            console.log('由本站镜像站点访问')
        } else if (domain == 'www.travelling.cn') {
            // 康康是不是来自开往的
            Snackbar.show({
                text: '欢迎来自开往的穿梭者！',
                pos: 'top-center',
            })
        } else if (domain == 'admincmd.xyz') {
            Snackbar.show({
                text: 'Welcome',
                pos: 'top-center',
            })
        } else if (domain == ' ? ? ? ') { 
            console.log('由外部站点访问')
            if(domain==' ? ? ? ') {
                domain = pos;// 若来源为空，则使用定位信息
                Snackbar.show({
                    text: `欢迎从来自 ${domain} 的访客访问本站！`,
                    pos: 'top-center',
                    actionText: "",
                    onActionClick: function (element) {
                        window.open("")
                    },
                });
            } else {
                console.warn('');
                Snackbar.show({// 如果有
                    text: `欢迎从来自 ${domain} 的访客访问本站！`,
                    pos: 'top-center',
                    actionText: "",
                    onActionClick: function (element) {
                        window.open("")
                    },
                });
            }
        }
            
    },2500)
}


    // 如没有来源，则修改为？？？
    // if (document.referrer==undefined||document.referrer.indexOf("www.travellings.cn")!=-1||document.referrer.indexOf("www.travellings.cn")!=-1)
    //     { 
            
            
    //     } else {
        //     setTimeout(function () { // 康康是不是来自其他网站
        //         if(domain=='blog.admincmd.xyz') {
        //             console.log('由本站主站站点访问')
        //         } else if(domain=='vercel-blog.admincmd.xyz') {
        //             console.log('由本站镜像站点访问') // 已弃用此域名
        //         } else if(domain=='netlify-blog.admincmd.xyz') {
        //             console.log('由本站镜像站点访问')
        //         } else if(domain=='cf-blog.admincmd.xyz') {
        //             console.log('由本站镜像站点访问')
        //         } else if(domain=='github-blog.admincmd.xyz') {
        //             console.log('由本站镜像站点访问')
        //         } else if (domain == 'www.travelling.cn') {
        //             // 康康是不是来自开往的
        //             Snackbar.show({
        //                 text: '欢迎来自开往的穿梭者！',
        //                 pos: 'top-center',
        //             })
                
        //         } else if (domain == ' ? ? ? ') { 
        //             console.log('由外部站点访问')
        //             if(domain==' ? ? ? ') {
        //                 domain = pos;// 若来源为空，则使用定位信息
        //                 Snackbar.show({
        //                     text: `欢迎从来自 ${domain} 的访客访问本站！`,
        //                     pos: 'top-center',
        //                     actionText: "",
        //                     onActionClick: function (element) {
        //                         window.open("")
        //                     },
        //                 });
        //             } else {
        //                 console.warn('');
        //                 Snackbar.show({// 如果有
        //                     text: `欢迎从来自 ${domain} 的访客访问本站！`,
        //                     pos: 'top-center',
        //                     actionText: "",
        //                     onActionClick: function (element) {
        //                         window.open("")
        //                     },
        //                 });
        //             }
    
        //             }
                    
        //     },2500)
        // }
    
// }

//自带上文浏览器提示

function browserTC() {
    btf.snackbarShow("");
    Snackbar.show({
        text: '浏览器版本较低，网站样式可能错乱',
        actionText: 'OK',
        duration: '16000',
        pos: 'bottom-right'
    });
}
function browserVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //Edge浏览器
    var isFirefox = userAgent.indexOf("Firefox") > -1; //Firefox浏览器
    var isOpera = userAgent.indexOf("Opera")>-1 || userAgent.indexOf("OPR")>-1 ; //Opera浏览器
    var isChrome = userAgent.indexOf("Chrome")>-1 && userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Chrome浏览器
    var isSafari = userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Chrome")==-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Safari浏览器
    if(isEdge) {
        if(userAgent.split('Edge/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isFirefox) {
        if(userAgent.split('Firefox/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isOpera) {
        if(userAgent.split('OPR/')[1].split('.')[0]<80){
            browserTC()
        }
    } else if(isChrome) {
        if(userAgent.split('Chrome/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isSafari) {
        //不知道Safari哪个版本是该淘汰的老旧版本
    }
}
//2022-10-29修正了一个错误：过期时间应使用toGMTString()，而不是toUTCString()，否则实际过期时间在中国差了8小时
function setCookies(obj, limitTime) {
    let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toGMTString()
    for (let i in obj) {
        document.cookie = i + '=' + obj[i] + ';expires=' + data
    }
}
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
if(getCookie('browsertc')!=1){
    setCookies({
        browsertc: 1,
    }, 1);
    browserVersion();
}



// 右键菜单 
//--------------------------------------------------------------------------
//22.12.8 update：add mask
//22.12.9 update: add search in this page

// ------
function setMask(){//设置遮罩层
    if(document.getElementsByClassName("rmMask")[0]!=undefined){
        return document.getElementsByClassName("rmMask")[0];
    }
    mask = document.createElement('div');
    mask.className = "rmMask";
    mask.style.width = window.innerWidth + 'px';
    mask.style.height = window.innerHeight + 'px';
    mask.style.background = '#fff';
    mask.style.opacity = '.0';
    mask.style.position = 'fixed';
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.zIndex = 998;
    document.body.appendChild(mask);
    document.getElementById("rightMenu").style.zIndex=19198;
    return mask;
}

function insertAtCursor(myField, myValue) {

    //IE 浏览器
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
    }

    //FireFox、Chrome等
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;

        // 保存滚动条
        var restoreTop = myField.scrollTop;
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);

        if (restoreTop > 0) {
            myField.scrollTop = restoreTop;
        }

        myField.focus();
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
        myField.focus();
    }
}
let rmf = {};
rmf.showRightMenu = function (isTrue, x = 0, y = 0) {
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top', x + 'px').css('left', y + 'px');

    if (isTrue) {
        $rightMenu.show();
    } else {
        $rightMenu.hide();
    }
}
rmf.switchDarkMode = function () { // 切换暗黑模式，执行位置
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        SwichActivateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
        SwitchActivateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};
rmf.yinyong=function(){
    var e = document.getElementsByClassName("el-textarea__inner")[0],
        t = document.createEvent("HTMLEvents");
    t.initEvent("input", !0, !0), e.value = d.value = "> "+getSelection().toString()+"\n\n", e.dispatchEvent(t);
    console.log(getSelection().toString());
    document.getElementsByClassName("el-textarea__inner")[0].value="> "+getSelection().toString()+"\n\n";
    Snackbar.show({
        text: '为保证最佳评论阅读体验，建议不要删除空行',
        pos: 'top-center',
        showAction: false,
    })
}
rmf.copyWordsLink = function () {
    let url = window.location.href
    let txa = document.createElement("textarea");
    txa.value = url;
    document.body.appendChild(txa)
    txa.select();
    document.execCommand("Copy");
    document.body.removeChild(txa);
    Snackbar.show({
        text: '链接复制成功！',
        pos: 'top-right',
        showAction: false
    });
}
rmf.switchReadMode = function () {
    const $body = document.body
    $body.classList.add('read-mode')
    const newEle = document.createElement('button')
    newEle.type = 'button'
    newEle.className = 'fas fa-sign-out-alt exit-readmode'
    $body.appendChild(newEle)

    function clickFn() {
        $body.classList.remove('read-mode')
        newEle.remove()
        newEle.removeEventListener('click', clickFn)
    }

    newEle.addEventListener('click', clickFn)
}

//复制选中文字
rmf.copySelect = function () {
    document.execCommand('Copy', false, null);
    Snackbar.show({
        text: '已占领剪贴板！',
        pos: 'top-right',
        showAction: false
    });
}

//回到顶部
rmf.scrollToTop = function () {
    document.getElementsByClassName("menus_items")[1].setAttribute("style","");
    document.getElementById("name-container").setAttribute("style","display:none");
    btf.scrollToDest(0, 500);
}
rmf.translate = function () {
    document.getElementById("translateLink").click();
}
rmf.searchinThisPage=()=>{
    document.body.removeChild(mask);
    document.getElementsByClassName("local-search-box--input")[0].value=window.getSelection().toString()
    document.getElementsByClassName("search")[0].click()
    var evt = document.createEvent("HTMLEvents");evt.initEvent("input", false, false);document.getElementsByClassName("local-search-box--input")[0].dispatchEvent(evt);
}
document.body.addEventListener('touchmove', function(e){
    
}, { passive: false });
function popupMenu() {
    //window.oncontextmenu=function(){return false;}
    window.oncontextmenu = function (event) {
        if(event.ctrlKey||document.body.clientWidth<900) return true;
        $('.rightMenu-group.hide').hide();
        if (document.getSelection().toString()) {
            $('#menu-text').show();
        }
        if (document.getElementById('post')) {
            $('#menu-post').show();
        } else {
            if (document.getElementById('page')) {
                $('#menu-post').show();
            }
        }
        var el = window.document.body;
        el = event.target;
        var a=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
        if (a.test(window.getSelection().toString())&&el.tagName!="A"){
            $('#menu-too').show()
        }
        if (el.tagName == 'A') {
            $('#menu-to').show()
            rmf.open = function () {
                if(el.href.indexOf("http://")==-1&&el.href.indexOf("https://")==-1||el.href.indexOf("blog.admincmd.xyz")!=-1){
                    pjax.loadUrl(el.href)
                }
                else{
                    location.href = el.href
                }
            }
            rmf.openWithNewTab = function () {
                window.open(el.href);
                // window.location.reload();
            }
            rmf.copyLink = function () {
                let url = el.href
                let txa = document.createElement("textarea");
                txa.value = url;
                document.body.appendChild(txa)
                txa.select();
                document.execCommand("Copy");
                document.body.removeChild(txa);
            }
        }
        if (el.tagName == 'IMG') {
            $('#menu-img').show()
            rmf.openWithNewTab = function () {
                window.open(el.src);
                // window.location.reload();
            }
            rmf.click = function () {
                el.click()
            }
            rmf.copyLink = function () {
                let url = el.src
                let txa = document.createElement("textarea");
                txa.value = url;
                document.body.appendChild(txa)
                txa.select();
                document.execCommand("Copy");
                document.body.removeChild(txa);
            }
            rmf.saveAs=function(){
                var a = document.createElement('a');
                var url = el.src;
                var filename = url.split("/")[-1];
                a.href = url;
                a.download = filename;
                a.click();
                window.URL.revokeObjectURL(url);
            }
        } else if (el.tagName == "TEXTAREA" || el.tagName == "INPUT") {
            $('#menu-paste').show();
            // rmf.paste=function(){
            //     input.addEventListener('paste', async event => {
            //         event.preventDefault();
            //         const text = await navigator.clipboard.readText();
            //         el.value+=text;
            //       });
            // }
            rmf.paste = function () {
                navigator.permissions
                    .query({
                        name: 'clipboard-read'
                    })
                    .then(result => {
                        if (result.state == 'granted' || result.state == 'prompt') {
                            //读取剪贴板
                            navigator.clipboard.readText().then(text => {
                                console.log(text)
                                insertAtCursor(el, text)
                            })
                            Snackbar.show({
                                text: '粘贴成功！',
                                pos: 'top-right',
                                showAction: false
                            });
                        } else {
                            Snackbar.show({
                                text: 'ERROR: 读取剪贴板失败，请允许访问剪贴板！',
                                pos: 'top-center',
                                showAction: false,
                            })
                        }
                    })
            }
        }
        let pageX = event.clientX + 10;
        let pageY = event.clientY;
        let rmWidth = $('#rightMenu').width();
        let rmHeight = $('#rightMenu').height();
        if (pageX + rmWidth > window.innerWidth) {
            pageX -= rmWidth + 10;
        }
        if (pageY + rmHeight > window.innerHeight) {
            pageY -= pageY + rmHeight - window.innerHeight;
        }
        mask=setMask();
        window.onscroll=()=>{
            rmf.showRightMenu(false);
            window.onscroll=()=>{}
            document.body.removeChild(mask);
        }
        $(".rightMenu-item").click(()=>{
            document.body.removeChild(mask);
        })
        $(window).resize(()=>{
            rmf.showRightMenu(false);
            document.body.removeChild(mask);
        })
        mask.onclick=()=>{
            document.body.removeChild(mask);
        }
        rmf.showRightMenu(true, pageY, pageX);
        return false;
    };

    window.addEventListener('click', function () {
        rmf.showRightMenu(false);
    });
}
if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    popupMenu()
}
const box = document.documentElement

function addLongtabListener(target, callback) {
    let timer = 0 // 初始化timer

    target.ontouchstart = () => {
        timer = 0 // 重置timer
        timer = setTimeout(() => {
            callback();
            timer = 0
        }, 380) // 超时器能成功执行，说明是长按
    }

    target.ontouchmove = () => {
        clearTimeout(timer) // 如果来到这里，说明是滑动
        timer = 0
    }

    target.ontouchend = () => { // 到这里如果timer有值，说明此触摸时间不足380ms，是点击
        if (timer) {
            clearTimeout(timer)
        }
    }
}

addLongtabListener(box, popupMenu)


// 明亮/暗黑模式切换
// -------------------------------------------------------------------------
// 2024-12-28 解决了首次访问时,没有coockie时导致if执行失败,导致部分图片没有切换.
function SwitchActivateLightMode() {
    activateLightMode()//调用 （浏览器）可能是的把，将调整至明亮模式
    sessionStorage.setItem("ActivateMode", "0"); //写个Cook
    LigheMode();
}
function SwichActivateDarkMode() {
    activateDarkMode()
    sessionStorage.setItem("ActivateMode", "1");
    DarkMode();
    // 同上
    // 调整至暗黑模式
}

//页面加载后调用
//检查cook，并判断是否为暗黑模式
if (sessionStorage.getItem("ActivateMode") == "1") DarkMode(); else LigheMode();
if (sessionStorage.getItem("ActivateMode") == null&&sessionStorage.getItem("ActivateMode" == undefined)) {
    sessionStorage.getItem("ActivateMode") = "0"
    LigheMode();
}

// ---------------------

function LigheMode() {
    document.getElementById("travellings-logo").src = "/img/travelling_b.svg";
    // 暗黑模式
    // 将需要调整的元素修改代码扔在这里
}

function DarkMode() {
    // 将需要调整的元素修改代码扔在这里
    // 调整至明亮模式
    document.getElementById("travellings-logo").src = "/img/travelling_w.svg";
}

function justLookAround() { // 读取 sitemap.txt 并随机跳转到其中一个链接,用于随便转转模块
    // 解决了原有 HTML 无法后退的问题
    fetch('/sitemap.txt')
        .then(response => {
            if (!response.ok) {
                Snackbar.show({
                    text: '；；；；；；；；；；；；；；；；；；；；；；！',
                    pos: 'top-right',
                    showAction: false
                });
            }
            return response.text(); // 修正为 response
        })
        .then(data => {
            const lines = data.split('\n'); // 将文件内容按行拆分
            const randomIndex = Math.floor(Math.random() * lines.length); // 随机生成索引
            const randomLine = lines[randomIndex].trim(); // 获取随机行并去除多余空格

            if (randomLine) {
                window.location.href = randomLine; // 跳转到随机选择的链接
            } else {
                console.error('随机行为空，无法跳转。');
                Snackbar.show({
                    text: '跳转时出错: 1',
                    pos: 'top-right',
                    showAction: false
                });
            }
        })
        .catch(error => {
            console.error('读取 sitemap.txt 失败:', error);
            Snackbar.show({
                text: '跳转时出错: 2 \n' + error,
                pos: 'top-right',
                showAction: false
            });
        });
    
}


window.addEventListener("load", function() {
    console.log("页面及所有资源（如图片、样式表等）加载完毕");
    //document.getElementById("load").innerHTML="";
    // 这里可以执行相关的代码
});

// twikoo.init({}).then(function () {
//     console.log("\n %c Twikoo af84efb %c http://twikoo.js.org \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
// }).catch(function(error) {
//     console.error("初始化 Twikoo 发生错误:", error);
//     Snackbar.show({
//         text: '初始化 Twikoo 发生错误: ' + error,
//         pos: 'top-right',
//     })
// }).onCommentLoaded(function () {
//     console.log("评论已加载完毕");
// }).catch(function (error) {
//     console.error("评论加载失败:", error);
//     Snackbar.show({
//         text: '评论加载失败: ' + error,
//         pos: 'top-right',
//     })
// });

function closeWindows() {
    document.getElementById("win").style.display = "none";
    
}

function timeWindows() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月份从0开始，需加1
    const day = now.getDate(); // 使用getDate获取当前日期
    const md = `${month}-${day}`; // 使用模板字符串
    // 检查今日是否已经弹窗
    const todayKey = `${year}-${month}-${day}`;
    const hasShownToday = localStorage.getItem(todayKey);
    const today = new Date();

    // 获取今天的农历日期
    const lunarDate = LunarCalendar.solarToLunar(today.getFullYear(), today.getMonth() + 1, today.getDate());
    const nowZhData = `${today.getMonth() + 1}-${today.getDate()}`// 换为农历
    // 格式化农历日期为中文
    const lunarDateChinese = `${lunarDate.lunarYear}年${lunarDate.lunarMonthName}${lunarDate.lunarDayName}`;
    const lunarDateChineseNY = `${lunarDate.lunarMonthName}${lunarDate.lunarDayName}`;

    let DText = "0";
    let Text = "欢迎使用我们的应用！";

    // 定义一个文本型数组——用于湖人
    const phrases = [
        "<span>！！！Minecraft 免费了 ！！！</span><br /><br /><img scr=\"/img/mcmfl.jpeg\" clsss=\"img-fluid\" alt=\"Minecraft 免费了\"></img>",
        // "最新消息：美国灭国了。",
        // "突发新闻：日本岛沉没了！",
        // "非常抱歉，因为不可控原因，博客将于明天停止运营，感谢您的陪伴，再见",
        
    ];
    console.log(`农历年份: ${lunarDate.lunarYear}`);
    console.log(`农历月份: ${lunarDate.lunarMonth}`);
    console.log(`农历日期: ${lunarDate.lunarDay}`);
    console.log("农历日期:", lunarDateChinese);


    try {
        switch (md) { // 公历判断
            // 纪念日 --------------
            case "7-7":      
                DText = `今天是 1937 年 7 月 7 日卢沟桥事变 ${year - 1937} 周年纪念日！`
                Text = "勿忘国耻，振兴中华。"
                break;
            case "9-18":
                DText = `今天是 1931 年 9 月 18 日九一八事变 ${year - 1931} 周年纪念日！`
                Text = "勿忘国耻，振兴中华。"
                break;
            case "12-13":
                document.getElementsByTagName("html")[0].setAttribute("style","filter: grayscale(100%);");
                DText = "请起立默哀 30 秒";
                Text = "勿忘国耻，振兴中华！\n <br /> 今天是南京大屠杀" + (year - 1937) + " 年纪念日、国家公祭日 \n <br /> 为在南京大屠杀中被杀害的平民默哀，铭记历史，珍视和平，绝不让这样的悲剧再次发生。";
                break;

            // 节假日 --------------
            case "1-1":
                DText = "元旦快乐";
                Text = `新年快乐！\n <br /> ${year} 年的进度条开始了！`;
                break;
            case "12-31":
                DText = "元旦快乐";
                Text = `新年快乐！\n <br /> ${year + 1} 年的进度条马上就要开始了！<br />
                <audio controls>
                  <source src="file:///H:/%E5%9B%BD%E6%A0%87/img/%E5%9B%BE%E6%81%92%E5%AE%87%E6%95%B0%E5%AD%97%E7%94%9F%E5%91%BD%E5%A4%87%E4%BB%BD.mp3" type="audio/mpeg">
                </audio>`;
                break;
            case "3-8":
                DText = "妇女节";
                Text = "各位女神们，妇女节快乐！";
                break;
            case "5-1":
                DText = "劳动节快乐！"
                Text = "为各行各业的辛勤工作劳动人民致敬！"
                break;
            case "5-4":
                DText = "五四青年节";
                Text = "为百年前那些有思想政治觉悟，拥护中国共产党，追求无产阶级、共产主义、马克思主义的青年们致敬！";
                break;
            case "6-1":
                DText = "各位小朋友们，儿童节快乐！";
                Text = "";
                break;
            case "7-1":
                DText = `中国共产党 ${year - 1921} 岁生日快乐`;
                Text = "今天时建党节。"
                break;
            case ["10-1","10-2","10-3","10-4","10-5","10-6","10-7"]:
                DText = `中华人民共和国 ${year - 1949} 岁生日快乐！`
                Text = ``
                break;
            case "8-15"://81-5
                DText = `日本鬼子已宣布无条件投降 ${year - 1945} 年了！`
                Text = "历史老师：标志着二战结束。"
                break;
            case "12-29":
                // 随机抽取一句
                const randomIndex = Math.floor(Math.random() * phrases.length);
                DText = phrases[randomIndex];
                Text = "祝祝祝祝祝 UP 生日快乐！";
                break;
            case "4-5":// 清明节靠北斗方向定义,一般在4月5日,
                DText = "清明安康"
                Text = ""
                break;
        
            default:
                break;
        }
        switch (lunarDateChineseNY) { // 农历判断
            /*
            闰月特指农历每二至三年增加的一个月。
            sou,三月往后
            */
            case ["腊月廿九","腊月三十"]:
                DText = `${lunarDate.getYear() + 1} 年新年快乐！`
                Text = ``
                break;
            case ["正月初一","正月初二","正月初三","正月初四","正月初五","正月初六"]:
                DText = `${lunarDate.getYear()} 新年快乐！`
                Text = ``
                break;
            case "正月十五":
                DText = `元宵节快乐！`
                Text = `您吃汤圆了吗？`
                break;
            case "五月初五":
                DText = `端午节快乐！`
                Text = `您吃粽子了吗？`
                break;
            case "八月十五":
                DText = `中秋节快乐！`
                Text = `您吃月饼了吗？<br /><del>这是啥怪味月饼那......难吃</del>`
                break;
            case "九月初五":
                DText = `重阳节快乐！`
                Text = ``
                break;

            default:
                break;
        } // 农历判断
        if (DText == "0") return; // 如果没有匹配的节日，直接返回

        console.log(DText);
        console.log(Text);

       
            // 如果是移动端
        if (hasShownToday) //return; // 如果今天已经弹过窗，直接返回
         // 其他不弹窗的情况放在这里
        if (isMobile()) { // 判断是否是移动端,弹消息框,若为PC端则弹窗
            Snackbar.show({
                text: DText,
                actionText: ""
            })
            return;
        } else {
        document.getElementById("timeWin").innerHTML = 
        `
            <div class="win" id="win">
                <p style="font-size:30px;color:#2F7AA1;text-align: center;">${DText}</p>
                <p style="font-size:16px;color:#003152;text-align: center;">${Text}</p>
                <br />
                <a class="closeWinbox" href="javascript:closeWindows()" id="closeWin">关闭</a>
                
                <style>
                    a.winbox-btn {
                        background-color: #10A7E8;
                        bottom:30px;
                        left:44%;
                    }
                    a.winbox-btn {
                      padding-top: 2%;
                      padding-bottom: 2%;
                      padding-right:  4%;
                      padding-left:  4%;
                    }
                    div.win {
                        position:fixed;
                        top:35%;
                        right:25%;
                        z-index:25;
                        border-width:2px;
                        border-color:#7F7E84;
                        border-style:solid;
                        background-color:#F8F3ED; /*背景色*/
                        width:50%;

                        border-radius: 25px; /*圆角*/
                    }
                    a.closeWinbox {
                        font-size:16px;
                        height:60px;
                        width:90px;
                        color:#FFFFFF;
                        background-color:#2F7AA1;
                        border-radius:10px;
                        text-align:center;
                        line-height:30px;
                        display:block;
                        margin:0 auto;
                        margin-top:20px;
                        line-height: 58px;
                    }
                </style>
                <br />
            </div>
        `;
        }
        // 设置今天已显示
        localStorage.setItem(todayKey, 'shown');

    } catch (error) {
        console.error('创建节日窗口时出错:', error);
    }
}
function isMobile() {// 判断是否是移动端
    if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return true; // 移动端
    } else {
    return false; // PC端
    }
}