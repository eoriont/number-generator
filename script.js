var num = "#";
var lbar;

window.onload = function() {

  lbar = document.getElementById("lbar").ldBar;

  if (annyang) {
    var commands = {
      'please choose *num': (number) => {
        let newnum = WtoN.convert(number);
        num = ""+newnum;
        console.log(num)
      }
    }

    annyang.addCommands(commands);
    annyang.start({continuous: true});
  }

  document.getElementById('generate').addEventListener('click', () => {
    tick = 0;
    interval = setInterval(setLoadingBar, 1);
  })
}
var interval;

var loadingSeconds = .5;
var tick = 0;
function setLoadingBar() {
  if (tick > loadingSeconds * 1000) {

    var rand = num;
    if (num == "#") {
      let min = document.getElementById('min').value;
      let max = document.getElementById('max').value;

      rand = Math.floor(Math.random() * parseInt(max)) + parseInt(min);
    }

    document.getElementById('num').innerHTML = rand;


    clearInterval(interval)
    openModal()
  }
  lbar.set((tick/(loadingSeconds*1000))*100)
  tick++;
}

function openModal() {
  $('#numberDialogue').modal('show');
  num = "#";
}
