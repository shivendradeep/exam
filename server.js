var express=require("express");
var app = express();

app.get("/",(req,resp)=>{
    resp.send(
        "<h1>contoso</h1>"
        +"<hr/>"
        +"<h3>Smart devices for sales</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>laptops</li>"
        +"<li>mobile</li>"
        +"<li>hollow lens</li>"
        +"<li>smart watches</li>"
        +"<li>gaming consoles</li>"

    );
    
});

var server=app.listen(9000);
console.log("contoso running on port 9000");