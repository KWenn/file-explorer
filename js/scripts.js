var data = dataJSON[0];
var html = "";
var stack = [];
var count = 1;
var first = true;
//console.log(data);
populateExplorer(data);

function populateExplorer(obj){
   for (var key in obj){
      if (typeof obj[key] == "object" && obj[key] !== null){
         if(!Array.isArray(obj[key])){
            
            if(obj[key].hasOwnProperty('private')){var isPrivate = "private";}else{var isPrivate = "";}
            console.log(count + " " + obj[key].name + " " + stack);
            //has children
            if(obj[key].hasOwnProperty('children')){
               stack.push( obj[key].children.length);
               if(stack[(stack.length - 1)] > 0){
                  stack[(stack.length - 1)] = stack[(stack.length - 1)] - 1;}
               html+='<li>';
               html+='<a href="#"><div class="container' + count + '">1<div class="closed"></div><div class="' + obj[key].type + " " + isPrivate + '"></div>' + obj[key].name + '</div></a>';
               html+='<ul>';
               count += 1;
            }
            
            //no children
            if(!obj[key].hasOwnProperty('children')){               
               //first
               if(first){
                  html+='</ul></li><li>';
                  html+='<a href="#"><div class="container' + count + '">2<div class="closed"></div><div class="' + obj[key].type + " " + isPrivate + '"></div>' + obj[key].name + '</div></a>';
                  first = false;
               }
                              
               html+='<li>';
               html+='<a href="#"><div class="container' + count + '">3<div class="' + obj[key].type + " " + isPrivate + '"></div>' + obj[key].name + '</div></a>';
               html+='</li>';
               
               if(stack[(stack.length - 1)] <= 0 ){ 
                  html+='</ul>';
                  stack.pop(); 
                  count = count - 1;
                  first = true;
               }
               
               if(stack[(stack.length - 1)] > 0 ){
                  stack[(stack.length - 1)] = stack[(stack.length - 1)] - 1;
               }
            }
                                    
            //console.log("after->", stack);
         }
      populateExplorer(obj[key]);
      }
   }
}

$('#explorer-inner > ul').append(html);
   
/*
   
               if(obj[key].hasOwnProperty('private')){var isPrivate = "private";}else{var isPrivate = "";}

            //root with children  // has children and 0 value on array
            if(obj[key].hasOwnProperty('children') && stack[(stack.length - 1)] <= 1){
               html+='<li><a href="#"><div class="container' + (stack.length -1) + '">1<div class="closed"></div><div class="' + obj[key].type + " " + isPrivate + '"></div>' + obj[key].name + '</div></a><ul>';
            }
            
            //root without children  //  has no children and value == 0 and array length <= 1
            if(!obj[key].hasOwnProperty('children') && stack[(stack.length - 1)] == 0 && stack.length <= 1){
               html+='<li><a href="#"><div class="container' + (stack.length -1) + '">2<div class="' + obj[key].type + " " + isPrivate + '"></div> ' + obj[key].name + '</div></a></li>';
            }
            
            //internal with children  // has children and value > 0 on array and stack.length > 1
            if(obj[key].hasOwnProperty('children') && stack[(stack.length - 1)] > 0 && stack.length > 1){
               html+='<li><a href="#"><div class="container' + (stack.length -1) + '">3<div class="closed"></div><div class="' + obj[key].type + " " + isPrivate + '"></div> ' + obj[key].name + '</div></a><ul>';
            }
            
            //regular leaf // has no children and value > 0 and stack.length > 1
            if(!obj[key].hasOwnProperty('children') && stack[(stack.length - 1)] > 0 && stack.length > 1 ){
               html+='<li><a href="#"><div class="container' + (stack.length -1) + '">4<div class="' + obj[key].type + " " + isPrivate + '"></div>' + obj[key].name + '</div></a></li>';
            }
            


*/
