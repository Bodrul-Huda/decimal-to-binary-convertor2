const submit = document.getElementById('submit')
const result = document.getElementById("result");

function convertor(e){
  e.preventDefault();
  const num = document.getElementById('number').value;
  if(num<0){
    alert('Please enter a Positive number');
  }
  else if(num===""){
    alert ('Please enter a number')
  }
  else{
    result.style.visibility = "visible";
  }
  const toDecimel = Number(num).toString(2);
  result.innerHTML=toDecimel;
}
submit.addEventListener('click', convertor)