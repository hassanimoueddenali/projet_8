const display = document.querySelector('.display');
var buttons = document.querySelectorAll("button")
// Variables
let x,y,solution,operation;
let xString, yString;



// Métier
function Calculer(x,y,operation){
    let _solution = undefined;
    switch (operation) {
        case '+':
            _solution = x + y;
            break;
        case '-':
            _solution = x-y;
                break;
        default:
            break;
    }
    return _solution;
}


// Présentation
function AddingNombre(number){
    if(x == undefined){
        if(xString == undefined) xString = '';
        xString += number;
    } 
    else {
        if(yString == undefined) yString = '';
        yString += number;
    } 

    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("prg");
    afficheur.value = "";
    
    if(x != undefined && y != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(xString != undefined)
        afficheur.value += xString 
        if(operation != undefined)
            afficheur.value += operation     
        if(yString != undefined)
            afficheur.value += yString 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        x = parseFloat(xString);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}

function Egale(){
    x = parseFloat(xString);
    y = parseFloat(yString);
    solution = Calculer(x,y,operation);
    Afficher(solution);
}

function Init(){
    x = undefined;
    y = undefined;
    xString = undefined;
    yString = undefined;
    operation = undefined;
    let afficheur = document.getElementById("prg");
    
    afficheur.value = "";
}