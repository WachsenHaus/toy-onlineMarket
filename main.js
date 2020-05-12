const storeData = {
    clothes : [
        {
            color : "pink",
            size : "small",
            part : 'shirt'
        },
        {
            color : "yellow",
            size : "small",
            part : 'pants'
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt'
        },
        {
            color : "blue",
            size : "large",
            part : 'skirt'
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt'
        },
        {
            color : "pink",
            size : "large",
            part : 'pants'
        },
        {
            color : "blue",
            size : "large",
            part : 'pants'
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt'
        },
        {
            color : "blue",
            size : "large",
            part : 'skirt'
        },
        {
            color : "blue",
            size : "large",
            part : 'pants'
        },
        {
            color : "pink",
            size : "large",
            part : 'pants'
        },
        {
            color : "blue",
            size : "large",
            part : 'skirt'
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt'
        },
        {
            color : "yellow",
            size : "large",
            part : 'pants'
        },
        {
            color : "yellow",
            size : "large",
            part : 'skirt'
        },
        {
            color : "yellow",
            size : "large",
            part : 'pants'
        },
        {
            color : "yellow",
            size : "small",
            part : 'pants'
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt'
        },
        {
            color : "blue",
            size : "small",
            part : 'skirt'
        },
        {
            color : "pink",
            size : "small",
            part : 'skirt'
        },
        {
            color : "pink",
            size : "small",
            part : 'skirt'
        },
    ]
}

let colorPicker = null;
let typePicker = null;

const drawItemContainer = document.getElementsByClassName("item_container");


function init()
{
    const shirtBtn = document.getElementById('typeShirt');
    const pantsBtn = document.getElementById('typePants');
    const skirtBtn = document.getElementById('typeSkirt');
    const blueBtn = document.getElementById('colorBlue');
    const yellowBtn = document.getElementById('colorYellow');
    const pinkBtn = document.getElementById('colorPink');

    // shirtBtn.addEventListener('click',() => console.log('aa'));
    shirtBtn.addEventListener('click',picker('cloth','shirt'));
    pantsBtn.addEventListener('click',picker('cloth','pants'));
    skirtBtn.addEventListener('click',picker('cloth','skirt'));
    blueBtn.addEventListener('click',picker('color','blue'));
    yellowBtn.addEventListener('click',picker('color','yellow'));
    pinkBtn.addEventListener('click',picker('color','pink'));
}
function picker(type,value){
    if(type === 'cloth')
    {
        typePicker = value;
    }
    else{
        colorPicker = value;
    }
    return console.log(typePicker,colorPicker);
    console.log('asd');
}
function drawStore(){

}
init();