// 1 to 50 porjonto sonkha dekhate hbe
// jodi 3 dara vag jay write --> divided by 3
// jodi 5 dara vag jay write --> divided by 5
// jodi 3,5 dara vag jay write --> divided by both 3,5
// jodi 3,5 dara vag  na jay write --> all the numbers


for (let i = 1; i <= 40; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, 'divided by both three and five');
    }
    else if (i % 3 == 0) {
        console.log(i, 'divided by three');

    }
    else if (i % 5 == 0) {

        console.log(i, 'divided by five');
    }
    else {
        console.log(i);

    }


}