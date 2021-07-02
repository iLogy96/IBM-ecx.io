/* Napiši funkciju koja prima jedan parametar
 za string tipove
    - obriši white space
    - za duljinu stringa manju od 5 ispiši sve lowercase
    - za duljinu od 5 i više ispiši sve uppercase
 za number tipove
    - potenciraj na 10
    - od dobivenog broja ispiši znamenke od 2-5 mjesta (za broj 12345678 ispis bi bio: 2345)

 ako paramter nije definiran
    - ispiši današnji datum na ovaj način: 29.6.21.
*/
function resolveSomething(data) {
  //ako nije definiran:
  if (!data) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear().toString().slice(2);
    let b = [dd, mm, yyyy];
    console.log(b.join("."));
    //ako je definiran:
  } else if (typeof data === "string" || data.length < 5) {
    console.log(data.trim().toLowerCase());
  } else if (typeof data === "string" || data.length >= 5) {
    console.log(data.trim().toUpperCase());
  } else if (typeof data === "number") {
    console.log(Math.pow(data, 10), data.toString().substring(1, 5));
  }
}
resolveSomething("tekst");
resolveSomething("  tek st ");
resolveSomething(12345678);
resolveSomething();
