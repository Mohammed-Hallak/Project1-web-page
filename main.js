let getToogleButton = document.querySelector(
  "header .container nav .toggle-menu"
);
getToogleButton.onclick = () => {
  getToogleButton.classList.toggle("open");
};

let changeBack = ["./Images/landing.jpg", "./Images/02.jpg", "./Images/03.jpg"];
let getLandBack = document.querySelector(".landing");

// If He Need It Random
let getRandom = Math.floor(Math.random() * changeBack.length);

let getChevronLeft = document.querySelector(".fa-angle-left");
let getChevronRight = document.querySelector(".fa-angle-right");

let i = 0;
getChevronRight.onclick = function () {
  i++;
  if (i >= changeBack.length) {
    i = 0;
  }
  if (i === 0) {
    getLandBack.style.backgroundImage = `url('${changeBack[i]}')`;
  }
  if (i === 1) {
    getLandBack.style.backgroundImage = `url('${changeBack[i]}')`;
  }
  if (i === 2) {
    getLandBack.style.backgroundImage = `url('${changeBack[i]}')`;
  }

  let getBullets = document.querySelectorAll(".landing .bullets li");
  getBullets.forEach((bl) => {
    bl.classList.remove("active");
    if (i === 0) {
      if (bl.classList.contains("zero")) {
        bl.classList.add("active");
      }
    }
    if (i === 1) {
      if (bl.classList.contains("one")) {
        bl.classList.add("active");
      }
    }
    if (i === 2) {
      if (bl.classList.contains("two")) {
        bl.classList.add("active");
      }
    }
  });
};
getChevronLeft.onclick = function () {
  if (i <= changeBack.length) {
    if (i <= 0) {
      i = changeBack.length;
    }
    i--;
    if (i === 0) {
      getLandBack.style.backgroundImage = `url('${changeBack[i]}')`;
    }
    if (i === 1) {
      getLandBack.style.backgroundImage = `url('${changeBack[i]}')`;
    }
    if (i === 2) {
      getLandBack.style.backgroundImage = `url('${changeBack[i]}')`;
    }
    let getBullets = document.querySelectorAll(".landing .bullets li");
    getBullets.forEach((bl) => {
      bl.classList.remove("active");
      if (i === 0) {
        if (bl.classList.contains("zero")) {
          bl.classList.add("active");
        }
      }
      if (i === 1) {
        if (bl.classList.contains("one")) {
          bl.classList.add("active");
        }
      }
      if (i === 2) {
        if (bl.classList.contains("two")) {
          bl.classList.add("active");
        }
      }
    });
  }
};

let pLink = document.querySelectorAll(".portfolio .shuffle li");
let getimg = document.querySelectorAll(".portfolio .imgs-container .box");

pLink.forEach((li) => {
  li.addEventListener("click", (e) => {
    for (let i = 0; i < li.parentElement.children.length; i++) {
      li.parentElement.children[i].classList.remove("active");
    }
    li.classList.add("active");

    if (li.classList.contains("app")) {
      getimg.forEach((box) => {
        box.style.display = "none";
        if (box.classList.contains("app")) {
          box.style.display = "block";
        }
      });
    } else if (li.classList.contains("photo")) {
      getimg.forEach((box) => {
        box.style.display = "none";
        if (box.classList.contains("photo")) {
          box.style.display = "block";
        }
      });
    } else if (li.classList.contains("web")) {
      getimg.forEach((box) => {
        box.style.display = "none";
        if (box.classList.contains("web")) {
          box.style.display = "block";
        }
      });
    } else if (li.classList.contains("print")) {
      getimg.forEach((box) => {
        box.style.display = "none";
        if (box.classList.contains("print")) {
          box.style.display = "block";
        }
      });
    } else if (li.classList.contains("all")) {
      getimg.forEach((box) => {
        box.style.display = "block";
      });
    }
  });
});

let getOurSkills = document.querySelector(".our-skills");
let getProgress = document.querySelectorAll(
  ".our-skills .skills .prog-holder span"
);

window.onscroll = function () {
  if (window.pageYOffset >= getOurSkills.offsetTop) {
    getProgress.forEach((prog) => {
      prog.style.width = prog.dataset.progress;
    });
  }
};

// ** It's Work ** //

// let getImg = document.querySelectorAll(".portfolio .imgs-container .box img");
// getImg.forEach((imgs) => {
//   imgs.addEventListener("click", (e) => {
//     let overlay = document.createElement("div");
//     overlay.classList.add("overlayTop");
//     document.body.appendChild(overlay);
//     let firstDiv = document.createElement("div");
//     document.body.appendChild(firstDiv);
//     firstDiv.classList.add("first");
//     let img = document.createElement("img");
//     img.src = imgs.src;
//     img.classList.add("imgo");
//     firstDiv.appendChild(img);
//   });
// });

let getOurTestimonials = document.querySelectorAll(
  ".our-skills .testimonials .content"
);
let getOurTestimonialsBullets = document.querySelectorAll(
  ".our-skills .testimonials .bullets li"
);

getOurTestimonials.forEach((cont) => {
  getOurTestimonialsBullets.forEach((bl) => {
    bl.addEventListener("click", (e) => {
      cont.style.display = "none";
      if (cont.classList.contains(e.target.className)) {
        cont.style.display = "block";
      }
    });
  });
});
