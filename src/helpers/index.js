export function randomString(length=8){
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let randomString='';
    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*characters.length)
        randomString+=characters[randomIndex];
    }

    return randomString;
}