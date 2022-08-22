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
var start2 = obj2.search(/class="ads text-center"/i)
var obj3 = insertStr(obj2,start2,newStr).replace(/<div class="ads text-center"[\s\S]*?<\/div>/g,null_string).replace(/<div class="footer_keywords container text-center">[\s\S]*?<\/div>/g,null_string).replace(/<div class="col-md-1 col-xs-3">[\s\S]*?<\/div>/g,null_string).replace(/<div class="footer_partners container text-center">[\s\S]*?<\/div>/g,null_string).replace(/<div class="container">[\s\S]*?<\/div>/g,null_string)
console.log(obj2)
$done({body:obj2});
