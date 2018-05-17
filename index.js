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

var line = []

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  }
  let i = 0;
  while (i < katzDeliLine.length) {
    katzDeliLine.push(` ` + [i+1] + `. ` + katzDeliLine[i])
    i++;
  }
  return (`The line is currently:` + katzDeliLine)
}

