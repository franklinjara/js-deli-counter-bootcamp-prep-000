function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 2;
  
  katzDeliLine.push(name);
  
  return "Welcome, " + name + ". You are number " + position + " in line."
}