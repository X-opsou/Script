function insertStr(soure, start, newStr){   
    return soure.slice(0, start) + newStr + soure.slice(start);
 }
let obj = $response.body
//var obj1 = obj.replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Code-Dramatist/ss/main/math_css/math.css" type="text/css">')
let newStr = 'style="display:none"'
var start = obj.search(/div id="index-pop" class="ads"/)
console.log(start)
var obj1 = insertStr(obj,start,newStr)
$done({body:obj1});
