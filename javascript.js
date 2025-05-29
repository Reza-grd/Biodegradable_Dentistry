$(document).ready(function() {
    // Toggle menu on mobile
    $('.tombol-menu').click(function() {
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
    });
  
    // Set animation delay for menu items
    $('.menu ul li').each(function(index) {
      $(this).css('--index', index);
    });
  
    // GSAP Animations
    // Animate About Us section
    gsap.from("#tentang h3", {
      scrollTrigger: {
        trigger: "#tentang",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  
    gsap.from("#tentang .ringkasan", {
      scrollTrigger: {
        trigger: "#tentang",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
      ease: "power2.out"
    });
  
    gsap.from("#tentang .konten-isi", {
      scrollTrigger: {
        trigger: "#tentang",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.4,
      ease: "power2.out"
    });
  
    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: ".stats-container",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
  
    // Counter animation for stats
    $('.stat-number').each(function() {
      const $this = $(this);
      const countTo = $this.attr('data-count');
      $({ countNum: 0 }).animate(
        {
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        }
      );
    });
  
    // Testimonial slider
    let currentTestimonial = 0;
    const testimonials = $('.testimonial');
    const dots = $('.nav-dot');
  
    function showTestimonial(index) {
      testimonials.removeClass('active');
      dots.removeClass('active');
      testimonials.eq(index).addClass('active');
      dots.eq(index).addClass('active');
    }
  
    dots.click(function() {
      currentTestimonial = $(this).index();
      showTestimonial(currentTestimonial);
    });
  
    setInterval(function() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  });
