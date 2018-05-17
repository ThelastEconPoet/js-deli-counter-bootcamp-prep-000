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
   let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` ` + [i+1] + `. ` + katzDeliLine[i])
    i++;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
  }
}
