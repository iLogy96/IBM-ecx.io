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

const ractive = new Ractive ({
    template: '#productsTemplate',
    target: '#products tbody',
    data: {
        products: products
    }
});

let name="John Smith"
const twoWay=new Ractive({
    template:"#twoWayTemplate",
    target:".two-way-target",
    data:{
        name:name
    }
})