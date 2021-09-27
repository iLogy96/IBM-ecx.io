class Ikea {
  constructor() {
    this.id = 0;
    this.product = [];
  }

  handlebars() {}

  renderPosts() {
    // let self = this; koristi se za funkciju unutar funkcije zbog scopea

    fetchData(id)
      .then((data) => {
        return data.moreProducts.productWindow;
      })
      .then((data) => {
        this.handlebars(data);
        //if needed change this to self
        this.nextData(data);
      })
      .then(() => {
        this.saveToLocalStorage();
      });
  }
}

new Ikea();
