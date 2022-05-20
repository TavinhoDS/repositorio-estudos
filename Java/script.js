function getAdmins(map) {
    let admins = [];
    for([key, value]of map) {
        if(value === 'Admin') {
        admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios .set('Otavio', 'Admin');
usuarios .set('Stephany', 'Admin');
usuarios .set('Sabrina', 'User');
usuarios .set('Felipe','Admin');

console.log(getAdmins(usuarios))