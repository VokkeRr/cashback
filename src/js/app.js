const regularP = 300000;
const RegP = 0.01
const caash = regularP * RegP;
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
