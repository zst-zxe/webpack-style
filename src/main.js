//1. 导入jq
//从node——modules导入jQuery包
import $ from 'jquery'
import './css/style.css'/*webpack只能识别js文件，匹配到其他文件时，先到module找相应的匹配规则（rules）如果匹配到（test）就使用相应的加载器(use[**-loader])*/
/*import  myImage from './images/jump.jpg'*/


$(function () {
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function () {
        return '#' + 'D97634'
    })

})
