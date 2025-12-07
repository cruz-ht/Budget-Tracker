// a budget class with all income, expenses and calculates our summary
class Budget {
    constructor() {

        this.income = [];
        this.expense = [];
    }



    // assigning my incomes 
    addIncome(description, amount){
        const income = {
            description: description,
            amount: amount
        }
        this.income.push(income)
    }
    // assigning my expenses
    addExpense(description, amount) {
        const expense = {
            description: description,
            amount: amount
        }
        this.expense.push(expense)
    }

    // calculating total income
    totalIncome() {
        let total = 0;

        for (let i = 0; i < this.income.length; i++) {
            total += this.income[i].amount;
        }
        return total;
    }
    
    // calculating total expenses
    totalExpenses() {
        let total = 0;

        for(let e =0; e < this.expense.length; e++) {
            total += this.expense[e].amount;
        }
        return total;
    }

    // return total budget
    getTotalBudget() {
        return this.totalIncome() - this.totalExpenses();
    }

}


    const myTracker = new Budget();







// ASSIGNING FROM HTML AND BUDGET CLASS TO ENSURE WHAT TO DISPLAY AND TAKE

function updateDisplay() {

    //BUDGET CLASS VALUES
    const totalIncome = myTracker.totalIncome();

    const totalExpenses = myTracker.totalExpenses();

    const totalBudget = myTracker.getTotalBudget();

    // HTML ASSIGNMENTS AND MAKING SURE THE "$" SYMBOL CARRIES OVER
    document.getElementById("income-summary").textContent = `$ ${totalIncome.toFixed(2)}`

    document.getElementById("expense-summary").textContent = `$ ${totalExpenses.toFixed(2)}`

    document.getElementById("budget-summary").textContent = `$ ${totalBudget.toFixed(2)}`
}






// INCOME FUNCTION
function addIncome() {

    const description = document.getElementById("income-description").value

    const amount = document.getElementById("income-amount").value

    // parsefloat makes sure to convert it into a number once submitted so it doesnt pass through as a string 
    const amountInNum = parseFloat(amount)

    // going through the validation before being accepted into the budget class
    if (!addValidation(description, amountInNum)) return;

    // once validated, saves into the budget/mytracker and refreshes dipslay screen
    myTracker.addIncome(description,amountInNum);
    updateDisplay();


    // clearing the input once it's been submitted aka display refreshed
    document.getElementById("income-description").value = "";

    document.getElementById("income-amount").value = "";
}





// EXPENSE FUNCTION
function addExpense(){

    const description = document.getElementById("expense-description").value

    const amount = document.getElementById("expense-amount").value

    const amountInNum = parseFloat(amount)


    if (!addValidation(description, amountInNum)) return


    myTracker.addExpense(description, amountInNum)
    updateDisplay()


    document.getElementById("expense-description").value = "";

    document.getElementById("expense-amount").value = "";
}

document.addEventListener('DOMContentLoaded', function() {updateDisplay();});




// VALIDATIONS

function addValidation(description, amount) {

    // checking the description isnt being left empty
    if (description.trim()) {
        alert("Please Enter a Description.")
        return false;
    }

    //checks the amount as well, validating number
    if (isNaN(amount)) {
        alert ("Please Enter an Amount.")
        return false;
    }

    return true;
}
