//Adiciona scroll suave ao clicar nos links
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });

//Destaca os links que foram clicados. Eu poderia ter feito também com jQuery, porém optei pelo Javascript puro só pra mostrar que não dependo de jQuery :D

let links = document.querySelectorAll("nav ul a");
console.log(links);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
        var x = 0;
        while(links[x]){
            links[x].classList.remove("active"); 
            x++;
        }
        links[i].classList.add("active"); 
    });
}