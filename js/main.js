function gId(n) {
    return document.getElementById(n);
}

var _txt_id = gId("txt_id"); /* 获取txt_id标签 */
var _btn_id = gId("btn_id"); /* 获取btn_id标签 */
var _msg_id = gId("msg_id"); /* 获取msg_id标签 */
function msgPop() {
    if (!gId('msgPopId')) {
        var _div = document.createElement('div');
        _div.setAttribute('id', 'msgPopId');
        document.body.appendChild(_div);
    }
    gId('msgPopId').setAttribute('class', 'msgPop_sty msgPop_animation');
    gId('msgPopId').innerHTML = '留言内容不能为空';

    setTimeout(function () {
        gId('msgPopId').setAttribute('class', 'msgPop_sty');
    }, 1200);
}

_btn_id.onclick = function () {
    var _v = txt_id.value;
    if (_v === '') {
        /* alert("请输入留言内容"); */
        msgPop();
        return false;
    }
    var _li = document.createElement("li"); /* 创建div标签 */
    _li.innerHTML = _v; /* 设置div标签内容 */
    _msg_id.appendChild(_li); /* 把div标签放入msg_id标签 */
}