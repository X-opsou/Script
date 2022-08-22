function insertStr(soure, start, newStr){   
    return soure.slice(0, start) + " " + newStr + " " + soure.slice(start);
 }

let obj = $response.body
let newStr = 'style="display:none"'
var null_string = ""
var start = obj.search(/class="mobileAds"/i)
var obj1 = insertStr(obj,start,newStr)
var start1 = obj1.search(/class="ads-leaderboard text-center"/i)
var obj2 = insertStr(obj1,start1,newStr)
var start2 = obj2.search(/class="text-center"><script/i)
var obj3 = insertStr(obj2,start2,newStr)
var start3 = obj3.lastIndexOf('class="text-center"><script')
var obj4 = insertStr(obj3,start3,newStr)
console.log(obj4)
console.log(obj4)
$done({body:obj4});
