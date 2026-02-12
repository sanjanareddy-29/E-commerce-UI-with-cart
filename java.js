let count=0;
function add()
{
   let number=document.getElementById('number')
   count=count+1
   number.innerText=count
}
function sub()
{
   let number=document.getElementById('number')
   if(count>0)
   {
      count=count-1
   number.innerText=count
   }
   
}

