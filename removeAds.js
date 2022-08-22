function insertStr(soure, start, newStr){   
    return soure.slice(0, start) + " " + newStr + " " + soure.slice(start);
 }
let obj = $response.body
let newStr = 'style="display:none"'
var start = obj.search(/div id="index-pop" class="ads"/i)
var obj1 = insertStr(obj,start,newStr)
console.log(obj1)
$done({body:obj1});
