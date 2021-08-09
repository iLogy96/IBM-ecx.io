const products = [
    {
        code: 1,
        name: 'Product 1',
        price:29.99
    },
    {
        code: 2,
        name: 'Product 2',
        price:450.00
    }
];

//get elements
const productRow = document.querySelector('#productRow');
const tableBody = document.querySelector('#products tbody');

// for each i dodajemo u body
products.forEach((product) => {

    //clone the template row
    const clone = productRow.content.cloneNode(true);

    //populate data in the clone row
    let code = clone.querySelector('.code');
    let name = clone.querySelector('.name');
    let price = clone.querySelector('.price');

    code.textContent = product.code;
    name.textContent = product.name;
    price.textContent = product.price;

    //append clone row to the table body
    tableBody.appendChild(clone);
});
