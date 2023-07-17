function isFunciton(digit) {
    switch (digit) {
        case '+':
            return true;
        case '-':
            return true;
        case '*':
            return true;
        case '/':
            return true;
    }
    return false;
}

function addDigit(digit) {
    const func = document.getElementById("funcd");
    const output = document.getElementById("output");
    const LHS = document.getElementById("LHSoutput");

    if (isFunciton(digit)) {
        if (output.value == "") {
            func.value = digit;
            return 0;
        }
        if (LHS.value) {
            LHS.value += func.value + output.value;
            LHS.value = eval(LHS.value);
            output.value = "";
            func.value = digit;
            return 0;
        }
        LHS.value += func.value;
        func.value = digit;
        LHS.value += output.value;
        output.value = "";
        
        return 0;
    }

    output.value += digit;
}

function evaluateSum() {
    const output = document.getElementById("output");
    const LHS = document.getElementById("LHSoutput");
    const func = document.getElementById("funcd");

    LHS.value += func.value + output.value;
    func.value = "";
    output.value = "";
    LHS.value = eval(LHS.value + output.value);
}

function clearFunction () {
    const output = document.getElementById("output");
    const LHS = document.getElementById("LHSoutput");
    const func = document.getElementById("funcd");

    func.value = "";
    LHS.value = "";
    output.value = "";
}

function backspace () {
    const func = document.getElementById("funcd");
    const output = document.getElementById("output");
    if (output.value) {
        output.value = output.value.slice(0, -1);
    } else {
        func.value = "";
    }
}