// HTMLのDiv領域を取得
const addPicture = document.getElementById("add-picture");
const pictureDivided = document.getElementById('add-picture-area');

// 画像が追加された時の処理
addPicture.addEventListener("change", function(evt){
  const file = evt.target.files;
  const reader = new FileReader();
  
  //dataURL形式でファイルを読み込む
  reader.readAsDataURL(file[0]);
  
  //ファイルの読込が終了した時の処理
  reader.onload = function(){
  const dataUrl = reader.result;

  //読み込んだ画像とdataURLを書き出す
  pictureDivided.insertAdjacentHTML("beforebegin" ,"<div class='img-div'><img src='" + dataUrl + "'><br><textarea placeHolder='メモを入力' class='memo'></textarea></div>");
  console.log(dataUrl);
  }
},false);