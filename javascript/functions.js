function convertToFahrenheit(tempCelcius){
    const tempFahrenheit=tempCelcius*9/5+32;
    return tempFahrenheit;
}

function headerArt(){
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")

}

function convertFeetToInches(feet){
    const inches=feet*12
    return inches
}

function addThreeNumbers(n1, n2, n3){
    return n1+n2+n3;
}

function pr(str){
    console.log(str)
}

function cls(){
    console.clear()
}

function prn(...str){
    let string="";
    for (i=0; i<str.length; i++){
        string += str[i] + " "
    }
    console.log(string)

}