var value1 = document.querySelector('#cel>input');
var value2 = document.querySelector('#fer>input');
var value3 = document.querySelector('#kal>input');
let btn =  document.querySelector('button');
function round(number) {
    return Math.round(number * 100) / 100;

}
value1.addEventListener('input', function () {
  
    let a = parseFloat(value1.value);
    let b = (a * (9 / 5)) + 32;
    let c = (a + 273.15);
    value2.value = round(b);
    value3.value = round(c);
    if(value1.value===""){
    value2.value ="";
    value3.value ="";
        
    }
})
value2.addEventListener('input', function () {

    let b = parseFloat(value2.value);
    let a = (b - 32) * (5 / 9);
    let c = (a + 273.15);
    value1.value = round(a);
    value3.value = round(c);
    if(value2.value===""){
        value1.value ="";
        value3.value ="";
            
        }
})
value3.addEventListener('input', function () {
    let c = parseFloat(value3.value);
    let a = (c - 273);
    let b = (9 / 5) * c + 32;
    value1.value = round(a);
    value2.value = round(b);
    if(value3.value===""){
        value1.value ="";
        value2.value ="";
            
        }

})

btn.addEventListener('click',function(){
    value1.value = "";
    value2.value = "";
    value3.value = "";

})