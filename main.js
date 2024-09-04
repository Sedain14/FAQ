let qArr = Array.from(document.querySelectorAll("h4"));
let aArr = Array.from(document.querySelectorAll("span"));

qArr.forEach((ele) =>
  ele.addEventListener("click", function (e) {
    qArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    aArr.forEach((ele) => {
      ele.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
    firstSvgs.forEach((ele) => {
      ele.style.display = "none";
    });
  })
);
