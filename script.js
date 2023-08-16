var json='{"name":"john", "age":30,"city":"New York"}';
var obj=JSON.parse(json);
console.log(obj);
var response=[obj];
console.log(response);
for(var i=0; i<response.length; i++)
{
    console.log(response[i]);
}
console.log("  ");
console.log("  ");
console.log("************for of*****************");

for(var val of response)
{
    console.log(val);
}
console.log("  ");
console.log("  ");
console.log("************for in*****************");

for(var res in response)
{
    console.log(val);
}
console.log("  ");
console.log("  ");
console.log("************forEach*****************");

response.forEach((person)=>{
    console.log(person);
})
