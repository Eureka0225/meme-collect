function go()
{
   var req=new XMLHttpRequest();
   var res={};
   var i;
   var keyword=document.getElementById("search").value;
   req.open("GET",'resources/all.json',false);
   req.send();
   res=JSON.parse(req.responseText);
   document.getElementById("res").innerHTML="<br/>";
   for(i=0;i<res.length;i++)
   {
      if(res[i].name.indexOf(keyword)!=-1||res[i].tag.indexOf(keyword)!=-1||res[i].img.indexOf(keyword)!=-1)
      {
         document.getElementById("res").innerHTML+="<span style='position:relative;color:white;left:10%;font-size:125%'><a href='resources/"+res[i].img+"'>"+res[i].name+"</a></span></br>";
         document.getElementById("res").innerHTML+="<span style='position:relative;color:white;left:10%;'>表情Tag："+getTag(i)+"</span><br/>";
      }
   }

   function getTag(id) {
      var tags="";
      for(var i=0;i<res[id].tag.length;i++)
      {
         tags=tags+"<span style='line-height:200%;background:red;border-radius:2px;padding:0.1em 0.3em 0.1em 0.3em;'>"+res[id].tag[i]+"</span>&nbsp;";
      }
      return tags;
   }
}

//==以下代码来自Runoob.com/w3cnote/js-get-url-param.html==
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
