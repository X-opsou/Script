function insertStr(soure, start, newStr){   
    return soure.slice(0, start) + " " + newStr + " " + soure.slice(start);
 }

let obj = $response.body
let newStr = 'style="display:none"'
var null_string = ""
var start = obj.search(/class="mobileAds"/i)
var obj1 = insertStr(obj,start,newStr)
var start1 = obj1.search(/class="ads-leaderboard text-center"/i)
var obj4 = insertStr(obj1,start1,newStr).replace(/<div class="ads text-center"[\s\S]*?<\/div>/g,null_string).replace(/<div class="footer_keywords container text-center">[\s\S]*?<\/div>/g,null_string).replace(/<div class="col-md-1 col-xs-3">[\s\S]*?<\/div>/g,null_string).replace(/<div class="footer_partners container text-center">[\s\S]*?<\/div>/g,null_string).replace(/<div class="container">[\s\S]*?<\/div>/g,null_string).replace(/<div id="footer">[\s\S]*?<\/div>/g,null_string).replace(/<div class="pop_bot">[\s\S]*?<\/div>/g,null_string)
console.log(obj4)
$done({body:obj4});
