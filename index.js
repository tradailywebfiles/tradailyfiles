document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(".nav-item a").on("click", function() {
    $(".nav-item a").removeClass("active");
    $(this).addClass("active");
  });