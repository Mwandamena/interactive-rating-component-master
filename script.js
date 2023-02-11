const ratings = document.querySelectorAll('.rating')
const button = document.querySelector('button')
const card = document.querySelector('.card')
const card2 = document.querySelector('.card2')
const selectedNumber = document.querySelector('.selected-number')



for(let i=0; i < ratings.length; i++){
  ratings[i].addEventListener('click', ()=> {
    let rating = ratings[i].innerHTML


    for(let i = 0; i < ratings.length; i++){
      ratings[i].classList.contains('selected-rating')
      ratings[i].classList.remove('selected-rating')
      console.log('clicked')
    }


    ratings[i].classList.add('selected-rating')

    button.addEventListener('click', () => {
      card.style.display = 'none'
      card2.style.display = 'block'
      selectedNumber.innerHTML = rating
    })
  })
}



