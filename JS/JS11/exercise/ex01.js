let anchor = document.querySelector('a');
console.log(anchor)
function getAttributes () {
    // console.log(anchor.attributes);
    console.log(`ID:${anchor.id}, Type:${anchor.type}, Language:${anchor.hreflang}, Rel:${anchor.rel}, Target:${anchor.target}`)
}
//onclick mijenja event listener, ne moramo ni query selectat niti pokrenut funkciju.