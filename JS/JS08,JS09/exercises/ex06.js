let library = [
    { author: 'Marija Jurić Zagorka', title: 'The Wich Of Grich', borrowed: true},
    { author: 'Antun Gustav Matoš', title: 'Tired Tale', borrowed: false},
    { author: 'Mousy Blacksmith', title: 'Blacksmith Of His Own Luck', borrowed: false}
    ];

let ul = document.createElement('ul');
document.body.appendChild(ul);

library.forEach((book) => {
    let li = document.createElement('li');
    li.style.color = book.borrowed ? 'red' : 'green';
    li.innerText = `Author: ${book.author}, Title: ${book.title}`;
    ul.appendChild(li);
});

