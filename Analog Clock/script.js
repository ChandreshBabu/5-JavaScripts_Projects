setInterval(() => {
    let t = new Date();
    let ht = t.getHours();
    let mt = t.getMinutes();
    let st = t.getSeconds();
    let hr = 30*ht + mt/2 + st/120;
    let mr = 6*mt + st/10;
    let sr = 6*st;
    document.getElementById('hour').style.transform = `rotate(${hr}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mr}deg)`;
    document.getElementById('second').style.transform = `rotate(${sr}deg)`;

}, 1000);