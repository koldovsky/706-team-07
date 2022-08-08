class bookTable{
  constructor() {
    if (!bookTable._instance) bookTable._instance = this;
    this.addEventListeners();
    return bookTable._instance;
  }
  addEventListeners() {
    document
      .querySelector(".order")
      .addEventListener("click", this.order.bind(this));
  }
  async order(ev) {

    const form = document.querySelector(".formBookTable");
    if (form.checkValidity()) {
      const data = new FormData();
      data.append("name", form.querySelector("input[name=name]").value);
      data.append("phone", form.querySelector("input[name=phone]").value);
      data.append("date", form.querySelector("input[name=date]").value);
      data.append("people", form.querySelector("input[name=people]").value);
      data.append("email", form.querySelector("input[name=email]").value);
      ev.preventDefault();

      fetch("https://formspree.io/f/xbjwvpyk", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data
      })
        .then((response) => {
          if (response.status === 200) {
            //return response.text();
          } else {
            throw new Error("Please try again");
          }
        })
        .then((responseText) => {
          form.reset();
          window.showAlert("Thank you!" /*+ " " + responseText*/);
          document.querySelector(".btn-close").click();
        })
        .catch((error) =>
          window.showAlert("There is an error: " + error, false)
        );
    } else {
      //window.showAlert("Please fill form correctly", false);
    }
  }

}

new bookTable();

