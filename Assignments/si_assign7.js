function si(p,r,t){
    let output= (p*r*t)/100;
    return output;
}

function total(si_a,si_b){
    let sum= si_a + si_b;
    return sum;
}


let si_a= si(200,2,1);
let si_b= si(300,2,2);

console.log('Sum of SI is: '+total(si_a,si_b));