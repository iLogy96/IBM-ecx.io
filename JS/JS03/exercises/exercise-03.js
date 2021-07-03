// Write a JavaScript function to hide email addresses to protect from unauthorized user.

// Test Data: console.log(protect_email("robin_scherbatskyh@example.com")); "robin_sch...@example.com"

function protectEmail(user_email){
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0,(part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
}

console.log(protectEmail("robin_scherbatskyh@example.com"));
