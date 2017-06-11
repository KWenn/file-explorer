var data = dataJSON[0];
var html = "";
var stack = [];
//console.log(data);
populateExplorer(data);

function populateExplorer(obj){
   for (var key in obj){
      if (typeof obj[key] == "object" && obj[key] !== null){
         if(!Array.isArray(obj[key])){
                                     
            console.log("begin->", stack); 
            
            if( obj[key].hasOwnProperty('children') ){ 
            }                                               
                        
            if(obj[key].hasOwnProperty('private')){var isPrivate = "private";}else{var isPrivate = "";}
            //console.log("length=", stack.length)
            
            //root with children
            if(stack[(stack.length - 1)] == 0 && obj[key].hasOwnProperty('children')){
               html+='<li><a href="#"><div class="container' + (stack.length -1) + '">1<div class="closed"></div><div class="' + obj[key].type + " " + isPrivate + '"></div>' + obj[key].name + '</div></a><ul>';
            }
            
            //root without children
            if(stack.length <= 0 && !obj[key].hasOwnProperty('children') && stack[(stack.length - 1)] <= 0 ){
               html+='<li><a href="#"><div class="container' + (stack.length -1) + '">2<div class="' + obj[key].type + " " + isPrivate + '"></div> ' + obj[key].name + '</div></a></li>';
            }
            
            //internal with children
            if(stack.length > 1 && obj[key].hasOwnProperty('children')){
               html+='<li><a href="#"><div class="container' + (stack.length -1) + '">3<div class="closed"></div><div class="' + obj[key].type + " " + isPrivate + '"></div> ' + obj[key].name + '</div></a><ul>';
            }
            
            //regular leaf
            if(!obj[key].hasOwnProperty('children') && stack[(stack.length - 1)] > 0 ){
               html+='<li><a href="#"><div class="container' + (stack.length -1) + '">4<div class="' + obj[key].type + " " + isPrivate + '"></div>' + obj[key].name + '</div></a></li>';
            }
            
            //last leaf
            if(!obj[key].hasOwnProperty('children') && stack[(stack.length - 1)] <= 0 ){
               //console.log(stack.length + 1);
               html+='<li><a href="#"><div class="container' + (stack.length -1) + '">5<div class="' + obj[key].type + " " + isPrivate + '"></div>' + obj[key].name + '</div></a></li></ul>';
               stack.pop(); //pop zeros from stack
            }
            
            //current objects children length array added to stack
            if( obj[key].hasOwnProperty('children') ){ 
               stack.push( obj[key].children.length );
            }
            
            if( stack[(stack.length - 1)] > 0 ){
               stack[(stack.length - 1)] = stack[(stack.length - 1)] - 1; //decrement last value in stack
               
            }  
                        
            console.log("end->", stack); 
            console.log(" ");                                  
            
         }
      populateExplorer(obj[key]);
      }
   }
}

$('#explorer-inner > ul').append(html);

/*

$('.open').click(function(){
   this.removeClass();
})


      }
      
      if(obj[key].hasOwnProperty('private')){
         var isPrivate = obj[key].private;
      }
      
      if(obj[key].hasOwnProperty('children')){
         //has children
      }
*/
