function updateColorSelectors() {
    const colorNumber = document.getElementById('color-number').value;
    const fourthColorSelector = document.getElementById('4th-color');

    if (colorNumber === "5") {

        fourthColorSelector.style.display = 'block';
    } else {

        fourthColorSelector.style.display = 'none';
    }
}
function calculate(){
const firstColor = document.getElementById('1st-color').value;
const secondColor = document.getElementById('2nd-color').value;
const thirdColor = document.getElementById('3rd-color').value;
const fourthColor = document.getElementById('4th-color').value;
const Tolerance = document.getElementById('tolarence').value;
const colorList={
        "Black": 0,
        "Brown": 1,
        "Red": 2,
        "Orange": 3,
        "Yellow": 4,
        "Green": 5,
        "Blue": 6,
        "Violet": 7,
        "Grey": 8,
        "White": 9,
};
const tolaranceList={
    "Brown": 1,
    "Red": 2,
    "Green": 0.5,
    "Blue": 0.25,
    "Violet": 0.1,
    "Grey": 0.05,
    "Gold": 5,
    "Silver": 10,
    "No color": 20,
};

    const colorCounter = document.getElementById('color-number').value;
  let result;
  if(colorCounter ==="5"){
    result=((colorList[firstColor]*100)+(colorList[secondColor]*10)+(colorList[thirdColor]*1))*Math.pow(10,colorList[fourthColor]);
  }
  else{
    result=((colorList[firstColor]*10)+(colorList[secondColor]*1))*Math.pow(10,colorList[thirdColor]);
  }
  const toleranceValue = tolaranceList[Tolerance];
  const value= `${result} Ω ± ${toleranceValue}%`;
  document.getElementById('result').value = value;
}


