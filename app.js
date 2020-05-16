
function equal()
{ 
   let nums=[];
   let znaki=[];
 var stroka = document.form.textview.value;

 for ( let i = 0; i < stroka.length; i++)
 {
   
  var act = SuperMetod(stroka,i,nums,znaki);
  if(act ==0)
  {
   var prior = Priority(stroka[i]);
        if (znaki.length == 0)
         {
          znaki.push(stroka[i]);
        
         }
         else if(prior>2&&Priority(stroka[i-1])>2){
           znaki.pop();
           znaki.push(stroka[i]);

         }
        
        else{
          if (prior != Priority(znaki[znaki.length-1])){
            if(prior>Priority(znaki[znaki.length-1])){
              znaki.push(stroka[i]);
              
            }
            else{
              if(prior==2){
                if(znaki[znaki.length-1]=="("){
                  znaki.pop();
                }
                else{
                  while (znaki[znaki.length-1] != "(")
                                             {                                             
                                              colya(znaki, nums);                                               
                                             }
                                             znaki.pop();
              }
            }
            else{
              if(prior==1){
                znaki.push(stroka[i]);
              }
              else{
                while (znaki.length != 0 && znaki[znaki.length-1] != "("){
                  console.log('test2');                  
                  colya(znaki, nums);
                  }
                 znaki.push(stroka[i]);
               }
             }

            
            }
          
          }
          else{
            while (znaki.length != 0 && prior == Priority(znaki[znaki.length-1])&&Priority(stroka[i+1])<2){
              console.log('test3');
              colya(znaki, nums);            
            }
            znaki.push(stroka[i]);
        }
     }

     } 
      else{
       nums.push(stroka.substring(i, i+act))
        console.log(act);
        i += act - 1;
        console.log(nums);
      }    
  }
  while (znaki.length != 0) 
    
                {                 
                  colya(znaki, nums);
                } 
                if(nums.length==2&&znaki.length==0){
                  document.form.textview.value =nums[0]+nums[1];
                }
                else{
                  document.form.textview.value =nums;
                }
                
}

function colya(znaki, nums){
  switch (znaki.pop())
                  {
                      case "*": nums.push(nums.pop() * nums.pop()); break;
                      case "/":
                          var a = nums.pop();
                          var b = nums.pop();
                          nums.push(b / a);
                          break;
                      case "+": nums.push(Number(nums.pop()) + Number(nums.pop())); break;
                      case "-":
                          var c = nums.pop();
                          var d = nums.pop();
                          nums.push(d - c); break;
                  }
}
function SuperMetod(stroka,idx,nums,znaki)
        {
            var count = 0;
            
            if (idx <= stroka.length - 1)
            {
                
                if ((!isNaN(stroka[idx]))||stroka[idx]=='.'||(stroka[idx]=='-'&& idx==0 ) ||stroka[idx]=='-'&&stroka[idx-1]==znaki[znaki.length-1] )
                {
                    count++;
                    count = count + SuperMetod(stroka, idx + 1, nums,znaki);
                }
            }
            return count;
        }
function Priority(a)
        {
            switch (a)
            {
                case '(':
                    return 1;
                case ')':
                    return 2;
                case '+':
                case '-':
                    return 3;

                case '*':
                case '/':
                    return 4;

                default: return 0;
            }
        }        
function back()
{
  fly.play();

  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length-1);
}
function clean()
{
  fly.play();
  document.form.textview.value ="";
}
function insert(elem)
{
  var exp = document.form.textview.value;

  if(isNaN(exp[0])&&Priority(elem.textContent)>2&&exp.length==1)
  {

  }
  else if(Priority(elem.textContent)>2 && Priority (exp[exp.length-1])>2&& elem.textContent !='-')
  {
      back();
      document.form.textview.value = document.form.textview.value + elem.textContent;
      onclick="insert('')"
  }
  else if(exp.length<1&&Priority(elem.textContent)>2&&elem.textContent !='-')
  {
    
  }
else
  {
 document.form.textview.value = document.form.textview.value + elem.textContent;
 onclick="insert('')"
  }

  fly.play();
  

}        

        var fly = new Audio();
        var boom = new Audio();
        fly.src = "audio/clack.mp3"
        boom.src = "audio/boom.mp3"


