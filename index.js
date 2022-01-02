Swal.fire({
  title: 'HAPPY BIRTHDAY MR.MUKHERJEE!!!',
  text: 'Click on the text.',
  iconHtml: '<img src="images/icon.png">',
  confirmButtonText: 'Cool',
  confirmButtonColor: 'black',
})

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('html').animate({
    scrollTop: 0
  }, 1);
  $('body').animate({
    scrollTop: 0
  }, 1);
});


$(".hbd").click(function() {
  var audio = new Audio("sounds/track1.mp3");
  audio.play();
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      y: 0.6
    }
  });
});

$("#calculate").click(function() {
  var name1 = $("input[name='name1']").val().toUpperCase();
  var name2 = $("input[name='name2']").val().toUpperCase();
  var love = Math.floor(Math.random() * 100) + 1;
  if (name1 === 'ANWESHA' && name2 === 'HRISHIT' || name1 === 'HRISHIT' && name2 === 'ANWESHA') {
    Swal.fire({
      title: "You and I are perfect for each other",
      text: 'Never believe anything else.',
      iconHtml: '<img src="images/hug.png">',
      confirmButtonText: 'OK'
    })
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        y: 0.6
      }
    });
  } else if (name1 === 'HRISHIT' && name2 !== 'ANWESHA') {
    Swal.fire({
      title: "Who the fuck is this " + name2,
      text: '',
      iconHtml: '<img src="images/angry.png">',
      confirmButtonText: 'OK'
    })
  } else if (name1 !== 'ANWESHA' && name2 === 'HRISHIT') {
    Swal.fire({
      title: "Who the fuck is this " + name1,
      text: '',
      iconHtml: '<img src="images/angry.png">',
      confirmButtonText: 'OK'
    })
  }
  else if (name1 === '' || name2 ==='') {
    Swal.fire({
      title: "Enter a name !" ,
      confirmButtonText: 'OK'
    })
  }
  else {
    lovecalculator(name1,name2,love);
  }

})

function lovecalculator(name1, name2,number) {
  if (number===100) {
    Swal.fire({
      title: "Your love percent is "+number+"%",
      text: name1 + " and "+name2 +" are made for each other.",
      iconHtml: '<img src="images/100love.png">',
      confirmButtonText: 'OK'
    })
  }

  else if (number>80&&number<100) {
    Swal.fire({
      title: "Your love percent is "+number+"%",
      text: name1 + " and "+name2 +" have a real connection.",
      iconHtml: '<img src="images/80love.png">',
      confirmButtonText: 'OK'
    })
  }
  else if (number>50&&number<80) {
    Swal.fire({
      title: "Your love percent is "+number+"%",
      text: name1 + " and "+name2 +" MIGHT have something. No guarantees.",
      iconHtml: '<img src="images/50love.png">',
      confirmButtonText: 'OK'
    })
  }
  else {
    Swal.fire({
      title: "Your love percent is "+number+"%",
      text: name1 + " and "+name2 +" have no spark.NONE. NOPE. NADA. You can refresh if you want.",
      iconHtml: '<img src="images/0love.png">',
      confirmButtonText: 'OK'
    })
  }
}
