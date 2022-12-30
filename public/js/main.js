$(document).ready(() => {
    let H = $('#H').text();
    let M = $('#M').text();
    let S = parseInt($('#S').text());
    setInterval(() => {
        if (S < 59) {
            S++;
        } else if (S == 59 && M < 59) {
            S = 00;
            M++;
        } else if (S == 59 && M == 59 && H < 12) {
            M = 00;
            H++;
        }

        //setting the timers
        $('#S').text(S);
        $('#M').text(M);
        $('#H').text(H);
    }, 1000);
});
