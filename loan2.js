var $ = function (id) 
{
    return document.getElementById(id);
};


/*
 *start
   declare floatCupcakesPayment, intCakeTerm, floatTotalCost
   get floatCupcakesPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/
 var calculate = function()
 {
   var floatCupcakesPayment, intCakeTerm, floatTotalCost;
   floatCupcakesPayment = parseFloat( $("cupcakes_payment").value);
   intCakeTerm = parseInt($("cake_length").value);
   floatTotalCost = parseFloat(floatCupcakesPayment * intCakeTerm);
   $("total_cost").value = floatTotalCost;
 };
 
 window.onload = function () 
{
    $("cake_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("cupcakes_payment").focus();
};