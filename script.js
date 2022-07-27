let begin = document.createElement('div');
begin.innerHTML = "<h1>Let's Begin the Countdown</h1>";
begin.setAttribute('id', 'header');
document.body.append(begin);
let begin1 = document.createElement('div');
begin1.setAttribute('id', 'timer');
document.body.append(begin1);
let count = document.getElementById('timer');
setTimeout(() => {
    count.innerText = 10;
    setTimeout(() => {
        count.innerText = 9;
        setTimeout(() => {
            count.innerText = 8;
            setTimeout(() => {
                count.innerText = 7;
                setTimeout(() => {
                    count.innerText = 6;
                    setTimeout(() => {
                        count.innerText = 5;
                        setTimeout(() => {
                            count.innerText = 4;
                            setTimeout(() => {
                                count.innerText = 3;
                                setTimeout(() => {
                                    count.innerText = 2;
                                    setTimeout(() => {
                                        count.innerText = 1;
                                        setTimeout(() => {
                                            count.innerHTML = "<h2>Happy Independence Day<h2>";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);