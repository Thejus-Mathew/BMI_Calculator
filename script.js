
function femaleClick() {
    // genderImage.innerHTML = `<img src="./images/gender indicator use.png" style="transform: rotate(-45deg);" alt="">`
    document.getElementById("genderImage").style.transform ="rotate(-45deg)"
    document.getElementById("neutralIcon").style.color="grey"
    document.getElementById("maleIcon").style.color="grey"
    document.getElementById("femaleIcon").style.color="white"
}
function maleClick(params) {
    // genderImage.innerHTML = `<img src="./images/gender indicator use.png" style="transform: rotate(45deg);" alt="">`
    document.getElementById("genderImage").style.transform ="rotate(45deg)"
    document.getElementById("neutralIcon").style.color="grey"
    document.getElementById("maleIcon").style.color="white"
    document.getElementById("femaleIcon").style.color="grey"
}

function weightInput() {
    input = document.getElementById("weightInput").value
    input = Math.round(input)
    weightMiddle.innerHTML = `<label class="weightMiddle">${input}</label>`
    weightStart.innerHTML = `<label class="weightStart">${input - 1}</label>`
    weightEnd.innerHTML = `<label class="weightEnd">${(input*1) + 1}</label>`
}

function heightInput() {
    input = document.getElementById("heightInput").value
    if (document.getElementById("heightSelect").value == 1) {
        let height
        height = -5-((65/211.28)*input)
        if (height<-70){
            height= -70
        }
        else if (height > -7.5) {
            height = -7.5
        }
        document.getElementById("heightScale").style.top = `${height}%`
    }
    else if (document.getElementById("heightSelect").value == 2) {
        let height
        height = -5-((65/6.93175853)*input)
        if (height<-70){
            height= -70
        }
        else if (height > -7.5) {
            height = -7.5
        }
        document.getElementById("heightScale").style.top = `${height}%`
    }
}

function check() {
    inputHeight = document.getElementById("heightInput").value
    inputWeight = document.getElementById("weightInput").value
    if (document.getElementById("heightSelect").value == 2) {
        inputHeight = inputHeight * 30.48;
    }
    if (document.getElementById("weightSelect").value == 2) {
        inputWeight = inputWeight * 0.453592;
    }
    let bmi
    bmi = (inputWeight*100*100)/(inputHeight**2)
    if (bmi<0) {
        document.getElementById("bmiArrow").style.transform = `rotate(${-90}deg)`
        document.getElementById("bmiCircle").style.transform = `rotate(${0}deg)`
    }
    else if (bmi >= 0 && bmi < 18.5) {
        let angle;
        angle = (45/18.5)*bmi;
        document.getElementById("bmiArrow").style.transform = `rotate(${angle-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `yellow`
        document.getElementById("bmiCircle").style.transform = `rotate(${angle}deg)`
    }
    else if (bmi >= 18.5 && bmi < 25) {
        let angle;
        angle = 45 + ((45/(25-18.5))*(bmi-18.5));
        document.getElementById("bmiArrow").style.transform = `rotate(${angle-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `green`
        document.getElementById("bmiCircle").style.transform = `rotate(${angle}deg)`
    }
    else if (bmi >= 25 && bmi < 30) {
        let angle;
        angle = 90 + ((45/(30-25))*(bmi-25));
        document.getElementById("bmiArrow").style.transform = `rotate(${angle-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `orange`
        document.getElementById("bmiCircle").style.transform = `rotate(${angle}deg)`

    }
    else if (bmi >=30 && bmi <40) {
        let angle;
        angle = 135 + ((45/(40-30))*(bmi-30));
        document.getElementById("bmiArrow").style.transform = `rotate(${angle-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `red`
        document.getElementById("bmiCircle").style.transform = `rotate(${angle}deg)`
    }
    else if (bmi >= 40){
        document.getElementById("bmiArrow").style.transform = `rotate(${180-90}deg)`
        document.getElementById("bmiCircle").style.backgroundColor = `red`
        document.getElementById("bmiCircle").style.transform = `rotate(${180}deg)`
    }
    // document.getElementById("bmiArrow").style.transform = `rotate(${inputHeight-90}deg)`
    // document.getElementById("bmiCircle").style.transform = `rotate(${inputHeight}deg)`
}