var _fbonetti$benchmark$Native_Benchmark = function() {

function measure(tag, fn)
{
  var startTime = +(new Date());
  var value = fn();
  var endTime = +(new Date());
  var msg = tag + ': ' + (endTime - startTime);
  var process = process || {};
  if (process.stdout)
  {
    process.stdout.write(msg);
  }
  else
  {
    console.log(msg);
  }
  return value;
}

return {
  measure: F2(measure)
};

}();