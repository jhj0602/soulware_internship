var line = "hello";
var len = line.length-1;
console.log(len);
var ss ="";
for(var i=len;i>=0; i--){
    ss +=line.charAt(i);
}
console.log(ss);