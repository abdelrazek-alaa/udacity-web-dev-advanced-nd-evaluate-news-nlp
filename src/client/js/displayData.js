const displayData = (lists) => {
  const results = document.getElementById("results");

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  for (const list in lists) {
    const el = document.createElement("li");
    el.textContent = `${list} : ${lists[list]}`;
    results.appendChild(el);
  }
  console.log(lists);
};
export { displayData };
