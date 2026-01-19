function checkResult() {
  let totalMarks =
    Number(document.getElementById("Sub1").value) +
    Number(document.getElementById("Sub2").value) +
    Number(document.getElementById("Sub3").value) +
    Number(document.getElementById("Sub4").value) +
    Number(document.getElementById("Sub5").value) +
    Number(document.getElementById("Sub6").value) +
    Number(document.getElementById("Sub7").value) +
    Number(document.getElementById("Sub8").value);

  let totalBox = document.getElementById("total");
  totalBox.innerHTML = "Total Marks: " + totalMarks + " / 800";

  let resultBox = document.getElementById("result");

  if (totalMarks > 700) {
    resultBox.innerHTML = "Distinction";
    resultBox.style.color = "green";
  } 
  else if (totalMarks >= 600) {
    resultBox.innerHTML = "First Division";
    resultBox.style.color = "yellow";
  
  } 
  else if (totalMarks >= 500) {
    resultBox.innerHTML = "Second Division";
    resultBox.style.color = "yellow";
    
  } 
  else if (totalMarks >= 400) {
    resultBox.innerHTML = "Third Division";
    resultBox.style.color = "yellow";

  } 
  else {
    resultBox.innerHTML = "Fail";
    resultBox.style.color = "red";
  }
}