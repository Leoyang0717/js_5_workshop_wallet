window.addEventListener('DOMContentLoaded',function(){

// console.log(document.querySelectorAll('.form-control'))
  let form = document.forms[1]
  let oldItem = JSON.parse(localStorage.getItem('records')) || []
  const panel = document.querySelector('#records-panel')
  const template = document.querySelector("#records-group")
  const th = template.content.querySelector('th')
  const td = template.content.querySelectorAll('td')

  form.addEventListener('submit',function(e){
    e.preventDefault()
    const text = { 
      date: form.date.value,
      category: form.category.value,
      description: form.description.value,
      amount: form.amount.value 
    }
      th.textContent = form.date.value
      td[0].textContent = form.category.value
      td[1].textContent = form.description.value
      td[2].textContent = form.amount.value 
      const clone = document.importNode(template.content, true);
      panel.prepend(clone)
    //塞資料進去
    oldItem.push(text)
    localStorage.setItem('records', JSON.stringify(oldItem))
    //清空表單資料
    form.reset()
  })

  oldItem.forEach(function(e){
      th.textContent = e.date
      td[0].textContent = e.category
      td[1].textContent = e.description
      td[2].textContent = e.amount
      const clone = document.importNode(template.content, true);
      panel.appendChild(clone)
    })
})