export namespace util
 {
 export function printDetails<Type>(object : Type): string
    {   
     let result="";
     for( let key in object)
     {
         
         //console.log(anjani1[key]);
         if(typeof object[key]==='object')
         {    
               result+=printDetails(object[key]);
               
         } 
         else
         {
         result+=key+": "+object[key]+", ";
         }
     }
     return result;
    }
 }