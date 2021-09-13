$(document).ready(() =>{
    $('.hint-box').on('click', () =>{
      $('.hint').slideToggle(637.1782)
    })
  
    $('.wrong-answer-one').on('click', () =>{
      $('.wrong-text-one').fadeOut(600.005)
      $('.frown').show()
    })
    
    $('.wrong-answer-two').on('click', () =>{
      $('.wrong-text-two').fadeOut(300.005)
      $('.frown').show()
    })
    
    $('.wrong-answer-three').on('click', () =>{
      $('.wrong-text-three').fadeOut(100.005)
      $('.frown').show()
    })
  
    $('.correct-answer').on('click', () =>{
      $('.smiley').show()
      $('.frown').hide()
      $('.wrong-text-one, .wrong-text-two, .wrong-text-three').fadeOut(100.005)
    })
  });