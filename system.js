function solveSystemEq(){
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    let x=document.getElementById('x').value;
    a=+a;
    b=+b;
    x=+x;
    console.log('a',a,'b',b,'x',x);
    if(a==NaN||b==NaN||x==NaN){
        alert('ОШИБКА!');
    }
    else if(x>=7.3){
        y=x/b-a*x;
        alert('y='+y);
    }
    else if(x<7.3){
        y=x/a-b*x;
        alert('y='+y);
    }
}