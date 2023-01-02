const eixo = { x: "", y: "" };

function GetScreenCordinates(obj: any) {
  eixo.x = obj.offsetLeft;
  eixo.y = obj.offsetTop;
  while (obj.offsetParent) {
    eixo.x = eixo.x + obj.offsetParent.offsetLeft;
    eixo.y = eixo.y + obj.offsetParent.offsetTop;
    if (obj == document.getElementsByTagName("body")[0]) {
      break;
    }
    else {
      obj = obj.offsetParent;
    }
  }
  return eixo;
}

export function GetTextboxCordinates() {
  var txt = document.getElementById("socialId");
  var p = GetScreenCordinates(txt);
  console.log("X:" + p.x + " Y:" + p.y);
}