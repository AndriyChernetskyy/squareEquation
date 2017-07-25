let a = Number(prompt('Enter koef near x^2'));
let b = Number(prompt('Enter koef near x'));
let c = Number(prompt('Enter free member'));
function diskriminant(a,b,c) {
    let d = Math.pow(b,2) - (4*(a*c));
    return d;
}
let r = diskriminant(a,b,c);
if(r < 0) {
     document.write('There is no result');
}
else {
    if(r === 0) {
    let result = 0 - (b/(2*a));
    document.write('The result is only one, so x= '+result);
    }
    else {
        let result1 = (-b - Math.sqrt(r))/(2*a);
        let result2 = (-b + Math.sqrt(r))/(2*a);
        document.write('The result is x1= '+result1+"<br>");
        document.write('x2= '+result2);
    }
    
}
