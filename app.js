var buyPrice = document.querySelector('#buy-price');
var buyQty = document.querySelector('#qty');
var ltp = document.querySelector('#ltp');
var outputDisplay = document.querySelector('#show-output');
var btnCheck=document.querySelector('#btn-submit');

btnCheck.addEventListener('click',calculateValue);

function calculateValue()
{
    var bp =Number(buyPrice.value);
    var qty =Number(buyQty.value);
    var mp =Number(ltp.value);
    const investmentValue = bp*qty;
    const currentMarketValue = qty*mp;
    const profitAndLoss = currentMarketValue - investmentValue ;
    const percentageVal = profitAndLoss / bp * 100 ;
    if(bp<0 || qty <0 || mp<0)
    {
        alert('Invalid Input')
    }
  else{
    outputDisplay.innerText='Your Investment Profit / Loss is =' + profitAndLoss + ' In Percentage = ' + percentageVal +'%'
  }
    
    return profitAndLoss
}
