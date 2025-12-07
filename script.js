

class Budget {
    constructor() {

        this.income = [];
        this.expense = [];
    }




    addIncome(description, amount){
        const income = {
            description: description,
            amount: amount
        }
        this.income.push(income)
    }

    addExpense(description, amount) {
        const expense ={
            description: description,
            amount: amount
        }
        this.expense.push(expense)
    }


    totalIncome() {
        let total = 0;

        for (let i = 0; i < this.income.length; i++) {
            total += this.income[i].amount;
        }
        return total;
    }
    
    totalExpenses() {
        let total = 0;

        for(let e =0; e < this.expense.length; e++) {
            total += this.expense[e].amount;
        }
        return total;
    }

    getTotalBudget() {
        return this.totalIncome()-this.totalExpenses();
    }
}


const myTracker = new Budget();


// ASSIGNING FROM HTML AND BUDGET CLASS TO ENSURE WHAT TO DISPLAY AND TAKE

function updateDisplay() {

    //BUDGET CLASS  
    const totalIncome = myTracker.totalIncome();

    const totalExpenses = myTracker.totalExpenses();

    const totalBudget = myTracker.getTotalBudget();

    // HTML ASSIGNMENTS
    document.getElementById("income-summary").textContent = `${totalIncome.toFixed(2)}`

    document.getElementById("expense-summary").textContent = `${totalExpenses.toFixed(2)}`

    document.getElementById("budget-summary").textContent = `${totalBudget.toFixed(2)}`
}


// INCOME FUNCTION
function addIncome() {

    const description = document.getElementById("income-description").value

    const amount = document.getElementById("income-amount").value

    // parsefloat makes sure to convert it into a number once submitted so it doesnt pass through as a string 
    const amountInNum = parseFloat(amount)


    myTracker.addIncome(description,amountInNum);

    updateDisplay();

    // clearing the input once it's been submitted
    document.getElementById("income-description").value = "";

    document.getElementById("income-amount").value = "";
}

// EXPENSE FUNCTION
function addExpense(){

    const description = document.getElementById("expense-description").value

    const amount = document.getElementById("expense-amount").value

    const amountInNum = parseFloat(amount)

    myTracker.addExpense(description, amountInNum)

    updateDisplay()

    document.getElementById("expense-description").value = "";

    document.getElementById("expense-amount").value = "";
}

document.addEventListener('DOMContentLoaded', function() {updateDisplay();});

// ---------------------

// VALIDATIONS

function addInput() {

    const description = document.getElementById("income-description").value

    const amount = document.getElementById("income-amount").value


    // checking the description isnt being left empty
    if (description === "") {
        alert("Please Enter a Description")
        return;
    }

    //checking for the amount as well
    if (amount === "") {
        alert ("Please Enter an Amount")
        return;
    }


    const amountInNum = parseFloat(amount);



    myTracker.addIncome(description, amountInNum);
    updateDisplay();
    
    document.getElementById("income-description").value = "";
    document.getElementById("income-amount").value = "";
}


