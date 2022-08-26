function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction(){
    return function me(){ console.log("hello") };
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log("hello")
    }
}

