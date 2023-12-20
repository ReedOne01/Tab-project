const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".divContent");
const container = document.querySelector(".secDiv");

container.addEventListener("click", (e) => {
  let id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
      console.log(e.target);
      console.log(document.getElementById(id));
      const element = document.getElementById(id);
      element.classList.add("active");
    });
  }
});
