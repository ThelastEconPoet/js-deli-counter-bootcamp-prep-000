function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + position + " in line.")
}

function nowServing(deliLine) {
  var name;
  if(deliLine.length === 0) {
    return ("There is nobody waiting to be served!")
  }
  
  name = deliLine.shift()
  return ("Currently serving " + name + ".")
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  }

  for(let i = 0; i < katzDeliLine.length; i++) {
    `The line is currently: $[katzDeliLine]`
  }
  return (currentLine())
}

function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}