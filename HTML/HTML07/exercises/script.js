// get the elements
const textbox = document.querySelector('#comboboxInput');
const listbox = document.querySelector('#comboboxListbox');
const combobox = document.querySelector('#combobox');
const items = listbox.querySelectorAll('.result');

const KEYCODES = {
    Tab: 9,
    Enter: 13,
    Escape: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40
};

const showListbox = () => {
    listbox.classList.remove('hidden');
    combobox.setAttribute('aria-expanded', 'true');
};


const hideListbox = () => {
    listbox.classList.add('hidden');
    combobox.setAttribute('aria-expanded', 'false');

    // remove highlighted class from each item
    items.forEach((item) => {
        item.classList.remove('highlighted');
    });

    // remove active descendant
    textbox.setAttribute('aria-activedescendant', '');
};

const checkToHide = (event) => {
    // console.log(event.target);
    // hide listbox if clicked in textbox or anywhere inside combobox
    if (event.target !== textbox && !combobox.contains(event.target)) {
        hideListbox();
    }
};

const selectItem = (item) => {
    // set the value to text field
    textbox.value = item.innerText;
    // hide the listbox
    hideListbox();
};

const clickItem = (event) => {
    // if clicked on real option, call selectItem method
    if (event.target && event.target.nodeName === 'LI') {
        selectItem(event.target);
    }
};

const checkKey = (event) => {
    const key = event.which || event.keyCode;

    // prevent search on control keys (enter, escape, arrows)
    // console.log(key);
    switch (key) {
        case KEYCODES.ArrowDown:
        case KEYCODES.ArrowUp:
        case KEYCODES.Escape:
        case KEYCODES.Enter:
            event.preventDefault();
        default:
            searchResults();
    }

};

const searchResults = () => {
    // get the value of text field
    const searchString = textbox.value.toLowerCase();

    // filter the list items
    for(let i = 0; i < items.length; i++) {

        const item = items[i];

        // check if the item value starts with entered search string
        if (item.textContent.toLowerCase().trim().startsWith(searchString)) {
            item.classList.remove('hidden');
        }
        else {
            item.classList.add('hidden');
        }
    }
};

const checkIfListboxVisible = () => {
    // if listbox hidden, show it
    if (listbox.classList.contains('hidden')) {
        showListbox();
    }
};

const handleKeyboardInput = (event) => {
    const key = event.which || event.keyCode;    
    const itemsArray = Array.from(listbox.querySelectorAll('.result:not(.hidden)'));
    const numOfResults = itemsArray.length;
    let newIndex = itemsArray.findIndex((item) => {
        return item.classList.contains('highlighted');
    });

    console.log('old value: ' + newIndex);

    // if ESC or Tab, hide listbox
    // if ArrowDown or ArrowUp, "navigate" through list
    // if Enter, set the value to input field

    switch (key) {
        case KEYCODES.Escape:
        case KEYCODES.Tab:
            hideListbox();
            return;
        case KEYCODES.ArrowDown:
            checkIfListboxVisible();
            // calculate the next item
            if (newIndex === numOfResults - 1) {
                newIndex = 0;
            }
            else {
                newIndex++;
            }
            break;
        case KEYCODES.ArrowUp:
            checkIfListboxVisible();
            // calculate the previous item
            if (newIndex <= 0) {
                newIndex = numOfResults - 1;
            }
            else {
                newIndex--;
            }
            break;
        case KEYCODES.Enter:
            // if listbox visible and hightlighted item exists
            if (newIndex !== -1) {
                event.preventDefault();
                selectItem(itemsArray[newIndex]);
            }
            return;
        default:
            return;
    }

    console.log('new value: ' + newIndex);

    // highlighting logic
    // remove "highlighted" class for all
    itemsArray.forEach((item) => {
        item.classList.remove('highlighted');
    });

    // highlight the new item
    itemsArray[newIndex].classList.add('highlighted');
    textbox.setAttribute('aria-activedescendant', itemsArray[newIndex].getAttribute('id'));
};

// bind events
textbox.addEventListener('focus', showListbox);
document.body.addEventListener('click', checkToHide); // there are better ways to do this :-)
listbox.addEventListener('click', clickItem);
textbox.addEventListener('keyup', checkKey);
textbox.addEventListener('keydown', handleKeyboardInput)