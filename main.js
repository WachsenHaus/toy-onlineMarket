"use strict";

const storeData = {
  clothes: [
    {
      color: "pink",
      size: "small",
      part: "t",
      sex: "man",
    },
    {
      color: "yellow",
      size: "large",
      part: "t",
      sex: "man",
    },
    {
      color: "pink",
      size: "small",
      part: "t",
      sex: "woman",
    },
    {
      color: "pink",
      size: "small",
      part: "t",
      sex: "woman",
    },
    {
      color: "pink",
      size: "small",
      part: "t",
      sex: "man",
    },
    {
      color: "yellow",
      size: "small",
      part: "p",
      sex: "man",
    },
    {
      color: "pink",
      size: "large",
      part: "s",
      sex: "man",
    },
    {
      color: "blue",
      size: "large",
      part: "s",
      sex: "man",
    },
    {
      color: "pink",
      size: "large",
      part: "s",
      sex: "woman",
    },
    {
      color: "pink",
      size: "large",
      part: "p",
      sex: "man",
    },
    {
      color: "blue",
      size: "large",
      part: "p",
      sex: "woman",
    },
    {
      color: "pink",
      size: "large",
      part: "s",
      sex: "woman",
    },
    {
      color: "blue",
      size: "large",
      part: "s",
      sex: "woman",
    },
    {
      color: "blue",
      size: "large",
      part: "p",
      sex: "man",
    },
    {
      color: "pink",
      size: "large",
      part: "p",
      sex: "man",
    },
    {
      color: "blue",
      size: "large",
      part: "s",
      sex: "man",
    },
    {
      color: "pink",
      size: "large",
      part: "s",
      sex: "woman",
    },
    {
      color: "yellow",
      size: "large",
      part: "p",
      sex: "woman",
    },
    {
      color: "yellow",
      size: "large",
      part: "s",
      sex: "man",
    },
    {
      color: "yellow",
      size: "large",
      part: "p",
      sex: "woman",
    },
    {
      color: "yellow",
      size: "small",
      part: "p",
      sex: "man",
    },
    {
      color: "pink",
      size: "large",
      part: "s",
      sex: "woman",
    },
    {
      color: "blue",
      size: "small",
      part: "s",
      sex: "woman",
    },
    {
      color: "pink",
      size: "small",
      part: "s",
      sex: "man",
    },
    {
      color: "pink",
      size: "small",
      part: "s",
      sex: "woman",
    },
  ],
};

let colorPicker = null;
let typePicker = null;

const drawItemContainer = document.getElementsByClassName("item_container");
const storeList = document.getElementById("item_container-storeList");

function init() {
  const tBtn = document.getElementById("typeTop");
  const pBtn = document.getElementById("typePants");
  const sBtn = document.getElementById("typeSkirt");
  const blueBtn = document.getElementById("colorBlue");
  const yellowBtn = document.getElementById("colorYellow");
  const pinkBtn = document.getElementById("colorPink");

  tBtn.addEventListener("click", picker);
  pBtn.addEventListener("click", picker);
  sBtn.addEventListener("click", picker);
  blueBtn.addEventListener("click", picker);
  yellowBtn.addEventListener("click", picker);
  pinkBtn.addEventListener("click", picker);

  drawStore();
  // console.log(storeData.clothes[0].color);
}
function picker(event) {
  switch (event.target.id) {
    case "typeTop":
      typePicker = "t";
      break;
    case "typePants":
      typePicker = "p";
      break;
    case "typeSkirt":
      typePicker = "s";
      break;
    case "colorBlue":
      colorPicker = "blue";
      break;
    case "colorYellow":
      colorPicker = "yellow";
      break;
    case "colorPink":
      colorPicker = "pink";
      break;
  }
  drawStore();
}

function drawStore() {
  //그리기전에 기존에 있던 html 요소들 삭제.
  const ul = document.getElementById("item_container-storeList");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }

  for (let prop in storeData.clothes) {
    const part = storeData.clothes[prop].part;
    const size = storeData.clothes[prop].size;
    const color = storeData.clothes[prop].color;
    const sex = storeData.clothes[prop].sex;
    paintStoreItem(part, size, color, sex);
  }
}

function paintStoreItem(part, size, color, sex) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const spanSex = document.createElement("span");
  const Separator = document.createElement("span");
  const spanSize = document.createElement("span");

  img.src = `./imgs/${color}_${part}.png`;
  spanSex.innerText = sex;
  Separator.innerText = ",";
  spanSize.innerHTML = size + " size";
  li.appendChild(img);
  li.appendChild(spanSex);
  li.appendChild(Separator);
  li.appendChild(spanSize);
  //모두 null인 초기 상태일때는 조건없이 모든 상점 데이터를 출력한다.
  if (typePicker === null && colorPicker === null) {
    storeList.appendChild(li);
  }
  // 옷의 종류나 색상이 선택될경우 해당 조건의 상점 데이터만 출력한다.
  if (typePicker === null || colorPicker === null) {
    if (typePicker === part) {
      storeList.appendChild(li);
    }
    if (colorPicker === color) {
      storeList.appendChild(li);
    }
  }
  //선택된 조건의 상점 데이터만 출력한다.
  else if (typePicker === part && colorPicker === color) {
    storeList.appendChild(li);
  }
}

init();
