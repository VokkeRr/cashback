const all;
const regularP = 300000;
const RegPPersen = 0.01;
const caashReg = regularP * RegPPersen;

const incPur = 10000;
const incPurPer = 0.05;
const cashInc = incPur * incPurPer;


const spePur = 5000;
const spePurPer = 0.03;
const cashspe = spePur * spePurPer;

let all = caashReg + cashInc + cashspe;

const caashlimi = 3000;

if (all > caashlimi)
{
    all = caashlimi;
}

console.log (all);

