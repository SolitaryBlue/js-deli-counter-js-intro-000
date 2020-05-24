function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};


function nowServing(katzDeliLine) {
  if (katzDeliLine.length == []) {
    return "There is nobody waiting to be served!"
  } else {
    let beingServed = katzDeliLine.shift();
    return `Currently serving ${beingServed}.`
  }
};

function currentLine(katzDeli) {
  if (katzDeli.length == []) {
    return "The line is currently empty."
  }
}
