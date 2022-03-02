const http=require('http');
const fs=require('fs');
const hostname = '127.0.0.1';
const port=3007;
let selectedtitle={
    singh:'singh',
    kumar:'kumar',
    gupta:'gupta',
}
const server=http.createServer((request,Response)=>
{
   //Dynamic Url Matching ****-----

const pathname=request.url;
const parsepath=pathname.split('/');
const[_,infotype,title]=parsepath;
if(infotype==='nitish')
{
    Response.end(fs.readFileSync('index.html',"ascii"));
if(selectedtitle[title])
    {
        Response.end(`This information related to selected ${title}`)
        
    }
    else
{
    Response.statusCode=404;
   Response.end("Not Found");
    
}
}
// FOR ALL TYPE OF TITLE
// {
//     Response.end(`this is information relatrd to ${title}`);
// }
else if(infotype==="patel")
{
    Response.end(`this is information related to patel with name like as ${title}`);
}


//***-----Fixed Url Matching ----- ****/
    // if(pathname==="/raj")
    // {
    //     Response.end("This is information related to Raj");
    // }
    // else if(pathname==="/ravi")
    // {
    //     Response.end("This is information related to Ravi");
    // }
    // else{
    //     Response.end("this is information related to all thing")
    // }
    
})

 server.listen(port, hostname, () => {     console.log(`Server running at http://${hostname}:${port}/`);
 });