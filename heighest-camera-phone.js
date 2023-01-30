//Find the heighest camera phone form an array object

const phones = [
    {name: 'iPhone', price: 88000, camera: 48,  storage: 128},
    {name: 'Google Pixel 7', price: 80000, camera: 48,  storage: 128},
    {name: 'Samsung Galaxy S22 ultra', price: 100000, camera: 100,  storage: 256},
    {name: 'Onplus 10 pro', price: 68000, camera: 50,  storage: 128},
    {name: 'Xiomi Note 11 pro', price: 38000, camera: 108,  storage: 64},
    {name: 'Oppo A11', price: 48000, camera: 13,  storage: 64}
]

function heighestCameraPhone(camera) {
    let cameraPhone = phones[0]
    for (const phone of phones){
        if(phone.camera > cameraPhone.camera){
            cameraPhone = phone;
        }
    }
    return cameraPhone;
}
console.log(heighestCameraPhone(phones));
function maxStoragePhone(storage){
    let storagePhone = phones[0];
    for(const phone of phones){
        if (phone.storage > storagePhone.storage){
            storagePhone = phone;
        }
    }
    return storagePhone;
}
console.log("Max stoage phone is:", maxStoragePhone(phones));