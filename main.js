const storeData = {
    clothes : [
        {
            color : "pink",
            size : "small",
            part : 'shirt',
            sex : "man"
        },
        {
            color : "yellow",
            size : "small",
            part : 'pants',
           sex : "man"
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt'
            ,sex : "man"
        },
        {
            color : "blue",
            size : "large",
            part : 'skirt'
            ,sex : "man"
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt',sex : "woman"
        },
        {
            color : "pink",
            size : "large",
            part : 'pants',sex : "man"
        },
        {
            color : "blue",
            size : "large",
            part : 'pants',sex : "woman"
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt',sex : "woman"
        },
        {
            color : "blue",
            size : "large",
            part : 'skirt',sex : "woman"
        },
        {
            color : "blue",
            size : "large",
            part : 'pants',sex : "man"
        },
        {
            color : "pink",
            size : "large",
            part : 'pants',sex : "man"
        },
        {
            color : "blue",
            size : "large",
            part : 'skirt',sex : "man"
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt',sex : "woman"
        },
        {
            color : "yellow",
            size : "large",
            part : 'pants',sex : "woman"
        },
        {
            color : "yellow",
            size : "large",
            part : 'skirt',sex : "man"
        },
        {
            color : "yellow",
            size : "large",
            part : 'pants',sex : "woman"
        },
        {
            color : "yellow",
            size : "small",
            part : 'pants',sex : "man"
        },
        {
            color : "pink",
            size : "large",
            part : 'skirt',sex : "woman"
        },
        {
            color : "blue",
            size : "small",
            part : 'skirt',sex : "woman"
        },
        {
            color : "pink",
            size : "small",
            part : 'skirt',sex : "man"
        },
        {
            color : "pink",
            size : "small",
            part : 'skirt',sex : "woman"
        },
    ]
}

let colorPicker = null;
let typePicker = null;

const drawItemContainer = document.getElementsByClassName("item_container");
const storeList = document.getElementById('item_container-storeList');


function init()
{
    const shirtBtn = document.getElementById('typeShirt');
    const pantsBtn = document.getElementById('typePants');
    const skirtBtn = document.getElementById('typeSkirt');
    const blueBtn = document.getElementById('colorBlue');
    const yellowBtn = document.getElementById('colorYellow');
    const pinkBtn = document.getElementById('colorPink');

    shirtBtn.addEventListener('click',picker);
    shirtBtn.addEventListener('click',picker);
    pantsBtn.addEventListener('click',picker);
    skirtBtn.addEventListener('click',picker);
    blueBtn.addEventListener('click',picker);
    yellowBtn.addEventListener("click",picker);
    pinkBtn.addEventListener("click",picker);


    // console.log(storeData.clothes[0].color);
}
function picker(event){
    switch(event.target.id)
    {
        case 'typeShirt':
            typePicker = "t";
            break;
        case 'typePants':
            typePicker = "p";
            break;
        case 'typeSkirt':
            typePicker = "s";
            break;
        case 'colorBlue':
            colorPicker = "blue";
            break;
        case 'colorYellow':
            colorPicker = "yellow";
            break;
        case 'colorPink':
            colorPicker = "pink";
            break;
    }
    drawStore();
}

function drawStore(){
    //그리기전에 기존에 있던 html 요소들 삭제.
    const ul = document.getElementById("item_container-storeList");
    while ( ul.hasChildNodes() ) 
    { 
        ul.removeChild( ul.firstChild );
    }

    for (var prop in storeData.clothes) {
        const part = storeData.clothes[prop].part;
        const size =storeData.clothes[prop].size;
        const color = storeData.clothes[prop].color;
        const sex = storeData.clothes[prop].sex;
        paintStoreItem(part,size,color,sex);
    }
}

function paintStoreItem(part,size,color,sex)
{
    const li = document.createElement("li");
    // const delBtn = document.createElement("buttn");
    const img = document.createElement("img");
    const spanSex = document.createElement("span");
    const space = document.createElement("span");
    const spanSize = document.createElement("span");
    // const newId = toDos.length + 1;

    // delBtn.innerText = "❌";
    // // delBtn.addEventListener("click",deleteToDo);
    if(typePicker === null)
    {
        
    }
    img.src = `./imgs/${colorPicker}_${typePicker}.png`;
    spanSex.innerText = sex;
    space.innerText = ',';
    spanSize.innerHTML = size + ' size';
    // li.appendChild(delBtn);
    li.appendChild(img);
    li.appendChild(spanSex);
    li.appendChild(space);
    li.appendChild(spanSize);
    // li.id = newId;
    storeList.appendChild(li);
    // const toDoObj =
    // {
    //     text : text,
    //     id : newId,
    // }
    // toDos.push(toDoObj);
    // saveToDos();
    
}


init();

