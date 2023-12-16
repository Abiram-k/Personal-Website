var element1,flag;
function btnclick(val) {
    document.getElementById("screen").value += val;//or document.getElementById("screen").value=document.getElementById("screen").value+val
}
function clear1() {
    document.getElementById("screen").value = ""
}
function btnclicko(val){
    
    element1=document.getElementById("screen").value
    document.getElementById("screen").value=""
    if(val=='+'){
        flag=1
                    }
                    if(val=='-'){
                        flag=2
                                    }
                                    if(val=='X'){
                                        flag=3
                                                    }
                                                    if(val=='/'){
                                                        flag=4
                                                                    }
    
    }
function equalclick(val){
   /*var text = document.getElementById("screen").value
    var result = eval(text)//eval()predefined ,automatically done operations
    document.getElementById("screen").value = result*/
    var element2=document.getElementById("screen").value
    
   /*if(flag==1){
    var num1 = parseFloat(element1, 10);
    var num2 = parseFloat(element2, 10);
    var result=num1+num2
    document.getElementById("screen").value=result
                }
              if(flag==2){
                    var num1 = parseFloat(element1, 10);
                    var num2 = parseFloat(element2, 10);
                    var result=num1-num2
                    document.getElementById("screen").value=result
                    
                                }
                                if(flag==3){
                                    console.log("hai")
                                    var num1 = parseFloat(element1, 10);
                                    var num2 = parseFloat(element2, 10);
                                    var result=num1*num2
                                    document.getElementById("screen").value=result
                                                }
                                                if(flag==4){
                                                    var num1 = parseFloat(element1, 10);
                                                    var num2 = parseFloat(element2, 10);
                                                    var result=num1/num2
                                                    document.getElementById("screen").value=result
                                                                }*/
                                                              switch(flag){
                                                                    case 1:
                                                                        var num1 = parseFloat(element1, 10);
                                                                        var num2 = parseFloat(element2, 10);
                                                                        document.getElementById("screen").value = ""
                                                                        var result=num1+num2
                                                                        console.log(result)
                                                                        document.getElementById("screen").value=result
                                                                        break;
                                                                
                                                                    case 2:
                                                                        var num1 = parseFloat(element1, 10);
                                                                        var num2 = parseFloat(element2, 10);
                                                                        document.getElementById("screen").value = ""
                                                                        
                                                                    var result=num1-num2
                                                                    console.log(result)
                                                                    document.getElementById("screen").value=result
                                                                    break;
                                                                     case 3:
                                                                        var num1 = parseFloat(element1, 10);
                                                                        var num2 = parseFloat(element2, 10);
                                                                        document.getElementById("screen").value = ""
                                                                     var result=num1*num2
                                                                     document.getElementById("screen").value=result
                                                                     break;
                                                                     case 4:
                                                                        var num1 = parseFloat(element1, 10);
                                                                        var num2 = parseFloat(element2, 10);
                                                                    var result=num1/num2
                                                                    document.getElementById("screen").value=result
                                                                    break;
                                                                }



                                                            }
