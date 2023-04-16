
let names = ['tom', 'dom', 'bapi', 'bappa', 'dhiman', 'montey'];
function perfectFriend() {
    let perfect = names[0].length;
    for (let i = 0; i < names.length; i++) {
        if (names[i].length == 5) {
            return names[i];
        }
    }
}

const friendName = perfectFriend(names);
console.log(friendName);
