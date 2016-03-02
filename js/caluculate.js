(function() {
  function calculateSumInText(text) {
    var sum = 0;
    text.replace(/(\d+)/g, function(_, rawDigit) {
      sum += parseInt(rawDigit, 10);
      return rawDigit;
    });
    return sum;
  }

  document.getElementById("calculate").addEventListener("click", function() {
    var text = document.getElementById("text").value;
    var sum = calculateSumInText(text);
    document.getElementById("sum").value = sum;
  });
})();
