
function perfectFriend() {

    let perfect = names[0].length;
    for (let i = 0; i < names.length; i++) {
        if (names[i] === '' || names[i] == number) {
            return 'null or integer value is not accepted';
        }
        if (names[i].length == 5) {
            return names[i];
        }
    }
}
// error case-1:

// let names = ['', 'dom', 'bapi', 'bappa', 'dhiman', 'montey'];
// error case-2:
let number = [23, 34];
// let names = [number, 'dom', 'bapi', 'bappa', 'dhiman', 'montey'];

// valid input 
let names = ['tom', 'dom', 'bapi', 'bappa', 'dhiman', 'montey'];
const friendName = perfectFriend(names);
console.log(friendName);
