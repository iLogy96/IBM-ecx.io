let name, surname, footballClub, favouritePlayer,fullName,print;

name = prompt('Enter your name: ', '');
surname = prompt('Enter your surname: ', '');
footballClub = prompt('Enter your football club: ', '');
favouritePlayerName = prompt('Enter your favourite player name: ', '');
favouritePlayerSurname = prompt('Enter your favourite player surname: ', '');
// ask the user to enter other data items as used for the 'name'

printData(name, surname, footballClub, favouritePlayerName, favouritePlayerSurname);

function printData(name, surname, footballClub, favouritePlayerName) {
    print = `${fullName1(name, surname)} favourite club is  ${footballClub} and favourite player is  ${fullName1(favouritePlayerName, favouritePlayerSurname)}.`;
    // create a string variable 'print' which will use the function 'fullName' (use it for users and pplayers name) to generate a string as seen in the example
    alert(print);
}

function fullName1(name, surname) {
    return name + ' '+ surname;
    // create logic to return fullname
}
