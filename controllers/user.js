let getDate = (req, res) => {
    let D = new Date();
    let H = D.getHours();
    let M = D.getMinutes();
    let S = D.getSeconds();
    let MS = D.getMilliseconds();
    res.render('index', { H: H, M: M, S: S, MS: MS });
};
module.exports = getDate;
