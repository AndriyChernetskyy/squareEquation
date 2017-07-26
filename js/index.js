 let a = Number(prompt('Enter koef near x^2'));
    let b = Number(prompt('Enter koef near x'));
    let c = Number(prompt('Enter free member'));
function diskriminant(a,b,c) {
    let r = Math.pow(b,2) - (4*(a*c));
    return r;
}
function solving(f,k,l) {
    let diskr = diskriminant(a,b,c);
    if(diskr < 0) {
        return 'There is no result';
    }
    else {
        if(diskr === 0) {
            let result = 0 - (b/(2*a));
            return('The result is only one, so x= '+result);
            }
    else {
        let result1 = (-b - Math.sqrt(diskr))/(2*a);
        let result2 = (-b + Math.sqrt(diskr))/(2*a);
        return('The result is x1= '+result1+"<br>"+'x2= '+result2);
    }
    
}
}
document.write(solving(a,b,c));
