let userName = prompt('введите ваше  ФИО').trim().toLowerCase();
let newUserName = '';

function truUserName(){
    for(let str of userName.split(' ')){
        newUserName += str.replace(str[0],str[0].toUpperCase()) + ' ';
    }
}

truUserName();

alert(newUserName);

// for (let i = 0; i < userName.length; i++) {
//     if(userName[i] === ' ') {
//         userName = true;
//         newUserName += ' ';
//         continue;
//     }
//     if(userName) {
//         newUserName += userName[i].toUpperCase();
//         userName = false;
//     } else {
//         newUserName += userName.toLowerCase();
//     }
// }

// alert(newUserName);