// Event Listener to make reactive amount sliders
const numSliders = document.querySelectorAll("input[type='range']");
numSliders.forEach(function(slider){
    slider.addEventListener("input",tipCalculation);
});

//initializing input box for bill that runs tip function
const billInput = document.getElementById("bill");
billInput.addEventListener("change", tipCalculation);


function tipCalculation(){
    //creates variables to pull input
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let numOfPeople = document.getElementById("num-of-people").value;
    
    billInput.value = bill.toFixed(2);

    //creates variables to calculate amounts
    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));

    let perPersonTip = (totalTip / numOfPeople).toFixed(2);
    let billTotalPerPerson = (total / numOfPeople).toFixed(2);

    //pulls the required "id" tag element from the html and displays updated int/float text
    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    document.getElementById("tip-percentage").textContent = `${tipPercent}%`;
    document.getElementById("split-number").textContent = numOfPeople;
    document.getElementById("tip-per-person").textContent = `\$ ${perPersonTip}`;
    document.getElementById("total-per-person").textContent = `\$ ${billTotalPerPerson}`;
}
//function call
tipCalculation();
