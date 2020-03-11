const navSlide = () => {
  //select toggle button class
  const burgerToggle = document.querySelector(".toggle");
  //select sidepane frame
  const sidepane = document.querySelector(".sidepane");
  //select nav links in sidepane
  const sidepane__links = document.querySelectorAll(".sidepane li");

  burgerToggle.addEventListener("click", () => {
    //toggle class for burger transform
    burgerToggle.classList.toggle("toggle__on");

    //toggle sidepane
    sidepane.classList.toggle("nav-active");

    //toggle sidepane nav-links animation
    sidepane__links.forEach((link, index) => {
      if (link.style.animation) {
        //checks if sidepane is out
        link.style.animation = "";
      } else {
        interval = 0.5; // time for entire animation in css to complete
        no_of_items = 8; //increasing this value makes all items behave as one collection
        offset = 0.2; // ensures that the first item is animated

        link.style.animation = `navLinkFade ${interval}s ease forwards ${index /
          no_of_items +
          offset}s`;
      }
    });
  });
};

//init nav toggle

navSlide();
