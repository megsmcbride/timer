let input = process.argv.slice(2)
const timer = (input => {
  for(let time of input) {
    if(!Number(time) || time < 0) {
      continue
    }
    setTimeout (() => {
      process.stdout.write('\x07');
    }, time * 100)
  }
})

timer(input)