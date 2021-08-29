function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.target.children;

  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].id === "article-url") {
      const inputValue = formElements[i].value;

      if (Client.validURL(inputValue)) {
        const urlValue = { url: formElements[i].value };
        console.log(urlValue);

        Client.postData("http://localhost:8081/postData", urlValue)
          .then((data) => Client.displayData(data))
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        alert("Please Enter a Valid Url");
      }
    }
  }
}

export { handleSubmit };
