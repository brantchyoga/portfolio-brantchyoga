$(document).ready(()=>{
  var about = $('#about');
  about.hide();
  var aboutCount = 0;
  $('#showAbout').click(()=>{
    console.log(aboutCount);
    if (aboutCount%2 === 0 || aboutCount===0){
      about.show()
      aboutCount++;
    } else {
      about.hide();
      aboutCount++;
    }

  })
})
