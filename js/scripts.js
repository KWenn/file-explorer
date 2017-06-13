(function(){
   
var data = dataJSON[0];
var level = [];
var markup;
var count = 0;
var isClickable = [];

function toggle(){
   var e = document.getElementById(this.id);
   var c = e.parentNode;
   var eclass = e.className;
   if(eclass == "select"){
      c.children[1].className = "collapsed";
      e.className = "selected"
   }
   if(eclass == "selected"){
      c.children[1].className = "collapse";
      e.className = "select";
   }
}

function getData(obj){   
   for (var key in obj){
      if (typeof obj[key] == "object" && obj[key] !== null){
         if(!Array.isArray(obj[key])){
            buildElements(obj[key]);
         }
         getData(obj[key]);
      }
   }
}

function buildElements(obj) {
   //console.log(level.length + " " + level[level.length -1]);
   //document.getElementById('element').onclick = function(e){alert('click');}

   var length = 20;  
   var hasChildren = obj.hasOwnProperty('children');
   var fileName = obj.name;
   var isPrivate = "";
   
   if(fileName.length > 15){
     fileName = fileName.substring(0, length) + '...';
   }
   
   if(obj.private){
      isPrivate = "private";
   }
   
   //populate element
   if(hasChildren && level.length <= 0){
      markup += `
      <li>
      <div id="list${count}" class="select"><div class="container${level.length + 1}">
         <div class="open"></div><div class="${obj.type} ${isPrivate}"></div>${fileName}</div>
      </div>
      <ul>
      `;
   }
   if(hasChildren && level.length > 0){
      markup += `
      <li>
         <div id="list${count}" class="select">
            <div class="container${level.length + 1}"><div class="${obj.type} ${isPrivate}"></div>${fileName}</div>
         </div>
      </li>
      `;
   }
   if(!hasChildren){
      markup += `
      <li>
         <div id="list${count}" class="select"><div class="container${level.length + 1}"><div class="${obj.type} ${isPrivate}"></div>${fileName}</div></div>
      </li>
      
      </ul>
      </li>
      `;   
   }
   //decrement and remove zeros
   if(level[level.length -1] > 0){
      level[level.length -1] = level[level.length -1] -1 ;
   }
   var i = level.length;
   while(i>=0){
      if(level[i] <= 0 && level.length > 0){
         level.splice(i, 1);
      }
      i--;
   }

   //check for children level and add to array- levelcounter
   if(hasChildren){
      level.push(obj.children.length);
   }

   //render element when zero array length
   if(level.length === 0){
      document.getElementById('list').innerHTML += markup;
      //$('#explorer-inner > ul').append(markup);
      markup = '';
   }
   isClickable.push(count);
   count++;     
}

getData(data);

isClickable.forEach(function(i){
   document.getElementById("list" + i).addEventListener("click", toggle);
})

})()

/*
var linkText = document.createTextNode("my title text");
a.appendChild(linkText);
a.title = "my title text";
a.href = "http://example.com";
document.body.appendChild(a);
*/
