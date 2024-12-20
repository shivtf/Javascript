const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

// events

button.forEach( (button) => {
  console.log(button)
  button.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'green'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
    // const color = e.target.id
    // body.style.backgroundColor = color
  })
} );