function triangle(n) {
  var start = arguments.length > 1 ? arguments[1] : ' '
    ,symbol   = arguments.length > 2 ? arguments[2] : '*'
    ,end  = arguments.length > 3 ? arguments[3] : ' '
    ,line    = n
    ,result  = []
  ;
  
  while(line-- > 0) {
    result.push(
      Array(line + 1).join(start)
      +
      Array((n - line) * 2).join(symbol)
      +
      Array(line + 1).join(end)
    );
  }
  return result;
}

// вывод в консоль
triangle(5).map( function(el){ console.log(el)});