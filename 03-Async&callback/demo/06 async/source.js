'use strict'

function getTime(){
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            var now = Date.now();

            if(now % 2 === 0){
                resolve(now);
            }else{
                reject(now);
            }
        }, 500);
    });

    return promise;
}

async function print(){
    console.log(Date.now());

    var t = await getTime().catch(function(err){
        console.log(`Error: ${err}`);
        return false;
    });

    console.log(`Done: ${t}`);
}

print();
