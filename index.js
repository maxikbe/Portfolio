const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});
