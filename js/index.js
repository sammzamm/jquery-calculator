// $(document).ready(function() {
//             let screen = $('#screen')
//             var clicked = ''
//             var total = ''
//             var operator = ''
//             $('span').click(function(event) {
//                 screen.text(clicked);
//                 if (!$(event.target).hasClass('operator')) {
//                     clicked += $(event.target).text();
//                     screen.text(clicked);
//                 }
//                 if ($(event.target).hasClass('operator') && !$(event.target).attr('id') === 'clear' || !$(event.target).attr('id') === 'equals') {
//                     screen.text(operator)
//                 }
//             })
//
//         })

//-----------------------------------------------------------

$(document).ready(function() {
    var screen = $('#screen')
    var clickedNum = '';
    var operator = '';
    var result = '';
    var space = ' ';
    var clearedArr= [];
    var numArr = [];
    var noRepeat= false;
    // console.log("SCREEN", $(screen));

    $('span').click(function(event) {
        let operand = $(event.target).text()
        // console.log("Array Num 1", numArr);

        //if class doesn't include an operator class
        if (!$(this).hasClass("operator")) {
          noRepeat= true;
            //if 0 is on the scree, then clear screen
            if (screen.text() == 0) {
                screen.text("");
            }

            clickedNum += operand;
            // console.log("clickedNum", clickedNum);
            screen.append(operand);
            // console.log(clickedNum);
        } else if ($(this).hasClass("operator") && clickedNum) {
            // console.log("I'm here....");

            // if (numArr.length === 0) {
            //   screen.text("Error!")
            // }

            //if clickedNum has value (is not empty) then push clickedNum to numArr
            if (clickedNum != "") {
                numArr.push(clickedNum);
                // console.log("ArrNum", numArr);
            }
            // console.log(numArr);
            if (this.innerText !== '=') {
                // console.log("TYPE OF OPERATOR", operator);
                // console.log("THIS HTML typeof length", this.innerText.length);

                operator = this.innerHTML;
            }


            screen.append(space + operator + space);
            clickedNum = '';

            if ($(event.target).attr("id") === "clear") {
                numArr = [];
                clickedNum = "";
                screen.text("");
            }

            if ($(event.target).attr("id") === "equals") {
                // console.log("I clicked equals");
                // console.log("O", operator);

                // let operator =
                switch (operator) {
                    case '+':
                        result = +(numArr[0]) + +(numArr[1])
                        screen.text(result)
                        console.log("RESULT +", result);
                        // numArr = [];
                        numArr.push(result)
                        break;
                    case '-':
                        result = +(numArr[0]) - +(numArr[1])
                        screen.text(result)
                        // console.log("RESULT -", result);
                        // numArr = [];
                        numArr.push(result)
                        break;
                    case 'x':
                        result = +(numArr[0]) * +(numArr[1])
                        screen.text(result)
                        // console.log("RESULT *", result);
                        // numArr = [];
                        numArr.push(result)
                        break;
                    case '÷':
                        result = +(numArr[0]) / +(numArr[1])
                        screen.text(result)
                        // console.log("RESULT ÷", result);
                        // numArr = [];
                        numArr.push(result)
                        break;
                    default:
                        return "whoops";
                }
            }
            // console.log("MY EVENT TARGET", $(event.target).text());

        }
    })
    if ($(event.target).attr("id") === "clear") {
        numArr = [];
        clickedNum = "";
        screen.text("");
    }
})
