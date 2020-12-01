const args = process.argv.slice(2);

const alarm = time => {
  if(time < 0 || isNaN(time) || time.length < 1) {
    console.log('Please enter a valid time');
  } else {
    setTimeout(() => {
      console.log('******** BEEP *********');
    }, time * 1000);
  }
  
};

alarm(args);