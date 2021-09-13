function RoleTemp(role){
    var randRoll = Math.round(Math.random() * role) + 1;
    reply = 'd' + role + ' role: ' + randRoll;

    document.getElementById('reply').innerHTML = reply;
}

/*
var role ,x;

function RoleTemp(role){
    role = Math.floor(Math.random() * x) + 1;
    reply = 'd' + x + ' role: ' + role;
    document.getElementById('reply').innerHTML = reply;console.log(reply);
}

function d100(){
    x = 100;RoleTemp(x);
};

function d20(){
    x = 20;RoleTemp(x);
};

function d10(){
    x = 10;RoleTemp(x);
};

function d8(){
    x = 8;RoleTemp(x);
};

function d6(){
    x = 6;RoleTemp(x);
};

function d4(){
    x = 4;RoleTemp(x);
};
*/