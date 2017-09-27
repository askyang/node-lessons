var name = 'mod1';

function print(str){
    console.log(`Hi ${str}!`);
}

exports.name = name;

exports.fn = print;
