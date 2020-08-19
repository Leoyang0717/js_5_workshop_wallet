window.addEventListener('DOMContentLoaded',function(){

// console.log(document.querySelectorAll('.form-control'))
let form = document.forms[1]
var group=[]
form.addEventListener('submit',function(e){
  e.preventDefault()
  const text = { 
    date: form.date.value,
    category: form.category.value,
    description: form.description.value,
    amount: form.amount.value 
  }
  group.push(text)
  localStorage.setItem('records', JSON.stringify(group))
  console.log(JSON.parse(localStorage.getItem('records'))) 
  form.reset()
 
})

})