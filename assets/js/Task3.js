const span = document.querySelectorAll(".span-position");
const scollImg = document.querySelectorAll(".scoller-img");
const vector = document.querySelector(".vector");
const list = document.querySelector(".list");
const nav = document.querySelector(".nav-center");

const show = (filter) => {
  span.forEach((span) => {
    scollImg.forEach((item) => {
      if (span.dataset.filter === filter) {
        if (item.classList.contains(filter)) {
          item.classList.add("special-img");
          if (filter === "center") {
            vector.style.display = "block";
          } else {
            vector.style.display = "none";
          }
        } else {
          item.classList.remove("special-img");
        }
      }
    });
  });
};
const clickHandler = (event) => {
  const filter = event.target.dataset.filter;
  show(filter);
};
const menu = () => {
  nav.classList.add("new-nav-center");
};
const back=()=>{
  nav.classList.remove("new-nav-center");

}

span.forEach((item) => {
  item.addEventListener("click", clickHandler);
});
list.addEventListener("click", menu);
nav.addEventListener("click" , back)
