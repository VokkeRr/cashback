const regularP = 300000;
const RegP = 0.01
const caash = regularP * RegP;

const incPur = 10000
const incPurPer = 0.05


const spePur = 5000
const spePurPer = 0.03

let caash = regularP * RegP + incPur *incPurPer + 
spePur * spePurPer


const caashlimi = 3000
if (caash > caashlimi)
{
    caash = caashlimi;
}
else 
{
    const caash = regularP * RegP;
}
console.log (caash);
