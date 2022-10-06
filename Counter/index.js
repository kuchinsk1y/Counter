let timer;
const s = document.getElementById("timer");
s.addEventListener("mouseover", () => {
  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    s.textContent = parseInt(s.textContent) + 1;
  }, 100);
});

s.addEventListener("mouseleave", () => {
  if (timer) {
    clearInterval(timer);
  }
});
