function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  
  katzDeliLine.push(name);
  
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(line) {
  var name;
  
  if (line.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  
  name = line.shift();
  
  return ""
}