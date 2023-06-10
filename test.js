
async function test(a){
    // setTimeout(() => {
    //     console.log("hello")
    // }, 2000);
try{

    if(a==5){
        return "good";
    }
}
catch(err){
    console.log(err);
}

return 'bad';


}

console.log(test(15))