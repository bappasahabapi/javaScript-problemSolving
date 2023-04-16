const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, ram: 8, rom: 64 },
    { name: 'wlatone m32', price: 15000, camera: 6, ram: 4, rom: 16 },
    { name: 'Oppo', price: 12000, camera: 6, ram: 4, rom: 32 },
    { name: 'realme', price: 17000, camera: 6, ram: 4, rom: 16 },
    { name: 'xiomi', price: 8000, camera: 6, ram: 4, rom: 64 },
    { name: 'Nokia', price: 25000, camera: 6, ram: 4, rom: 6 },
]

// find the cheapest phone form the array of object

let cheapest = phones[0];
for (const phone of phones) {
    console.log(phone);
    // compare price only 
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }

}
console.log(cheapest);


