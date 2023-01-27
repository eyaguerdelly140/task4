
const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';


function FormatToArray(str1){
    let array=[];
    let list=str1.split('-');
    

    for(i=0; i<list.length;i++){
      let obj={}
      let newList=[]
         newList=list[i].split('&');
         
         obj.firstname=newList[0]; 
         obj.lastname=newList[1];
         array.push(obj);
    }
    return array;

}
console.log(FormatToArray(str1))

