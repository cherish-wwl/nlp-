

var jump = 0
var distance = 0
var total = 0
var step = 0
export function scrollAnimation(className,scrollheight) {
    // 用 class 添加锚点
    jump = document.querySelectorAll(className)
    total = jump[0].offsetTop
    distance = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    // 平滑滚动，时长500ms，每10ms一跳，共50跳
    // console.log(distance)
    step = total / 50
 
    if (total > distance) {
        // 向下滑动
        if(scrollheight){
            if( distance > scrollheight){
                return 
            }
        }
        
        smoothDown()
    } else {
        let newTotal = distance - total
        step = newTotal / 50
        // 向上滑动
        smoothUp()
    }
function smoothDown () {
    if (distance < total) {
        distance += step
    　　document.body.scrollTop = distance
        document.documentElement.scrollTop = distance
        if(IEVersion() == -1){
            window.pageYOffset = total
        }
        setTimeout(smoothDown, 10)
    } else {
        document.body.scrollTop = total
        document.documentElement.scrollTop = total
        if(IEVersion() == -1){
            window.pageYOffset = total
        }
    }
}
function smoothUp () {
    if (distance > total) {
        distance -= step
　　　　 document.body.scrollTop = distance
        document.documentElement.scrollTop = distance
        if(IEVersion() == -1){
            window.pageYOffset = total
        }
        setTimeout(smoothUp, 10)
        } else {
        document.body.scrollTop = total
        document.documentElement.scrollTop = total
        if(IEVersion() == -1){
            window.pageYOffset = total
        }
        
        }
    } 
}

function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }   
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11  
    }else{
        return -1;//不是ie浏览器
    }
}