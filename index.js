
function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0)
  
 return "There is nobody waiting to be served!" 
 
 else(katzDeliLine.length !== 0)
 const first = katzDeliLine.shift()

 return "Currently serving " + first + "."
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0)
  
 return "The line is currently empty."
 
 else(katzDeliLine.length !== 0)
  var line = []
    var len = katzDeliLine.length
    for (let i = 0; i < len; i++)
  {line.push(&#96;[i + 1].katzDeliLine[i]&#96;)}
  line.join(' , ')
  return "The line is currently:" + line
}