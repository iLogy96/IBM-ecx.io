// let str = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'
// let str2 = '';
// function songDecoder(song){
//     str2 = song.trim().split('WUB');
//     for(let i = 0; i<str2.length;i++){
//         if(str2[i] === ""){
//             str2.splice(i,1);
//         }
//     }
//     return str2.join(' ')
    
// }
// console.log(songDecoder(str));
// console.log(songDecoder('AWUBBWUBC'));
// console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));

let str = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'
let str2 = '';
function songDecoder(song){
    // str2 = song.trim().split('WUB');
    str2= song.replace(/WUB/g,' ')
    return str2
}
console.log(songDecoder(str));
console.log(songDecoder('AWUBBWUBC'));
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
