// find the height phone form the array 
function costlyPhones() {
    let costly = phones[0];
    for (const phone of phones) {

        if (phone.price > costly.price) {
            costly = phone;
        }

    }
    return costly;

}

const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, ram: 8, rom: 64 },
    { name: 'wlatone m32', price: 15000, camera: 6, ram: 4, rom: 16 },
    { name: 'Oppo', price: 12000, camera: 6, ram: 4, rom: 32 },
    { name: 'realme', price: 17000, camera: 6, ram: 4, rom: 16 },
    { name: 'xiomi', price: 8000, camera: 6, ram: 4, rom: 64 },
    { name: 'Nokia', price: 25000, camera: 6, ram: 4, rom: 6 },
]
let cost = costlyPhones(phones);
console.log(cost);
