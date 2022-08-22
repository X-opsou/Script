let obj = $response.body
var null_string = ""
var obj4 = obj.replace(/<div class="ads text-center"[\s\S]*?<\/div>/g,null_string).replace(/<div class="footer_keywords container text-center">[\s\S]*?<\/div>/g,null_string).replace(/<div class="col-md-1 col-xs-3">[\s\S]*?<\/div>/g,null_string).replace(/<div class="footer_partners container text-center">[\s\S]*?<\/div>/g,null_string).replace(/<div class="container">[\s\S]*?<\/div>/g,null_string).replace(/<div id="footer">[\s\S]*?<\/div>/g,null_string).replace(/<div class="pop_bot">[\s\S]*?<\/div>/g,null_string)
console.log(obj4)
$done({body:obj4});
