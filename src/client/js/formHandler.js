function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.target.children;
  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].id === "article-url") {
      const urlValue = { url: formElements[i].value };
      console.log(urlValue);
      postData("http://localhost:8081/postData", urlValue).catch((error) => {
        console.error("Error:", error);
      });
      async function postData(url = "", data = {}) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        return response.json();
      }
    }
  }
}

export { handleSubmit };
