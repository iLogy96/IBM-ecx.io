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
const source = document.querySelector('#productsTemplate').innerHTML;
const tableBody = document.querySelector('#products tbody');

//compile handlebars template
const template = Handlebars.compile(source);
const output = template ({products: products});
//append to table body in html
tableBody.innerHTML = output;