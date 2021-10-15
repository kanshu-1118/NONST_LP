const btns = document.querySelectorAll(".select button");
const contents = document.querySelectorAll(".step");
// console.log(contents)
// console.log(btns);
// console.log(btns[1]);
// btns.addEventListener("click", function() {
    //     console.log("クリック");
    // })
    // console.log(btns.length);
    
    // const names = ["小林","高木","下河","あきた", "岡崎"]
    // console.log(names);
    // console.log(names[3]);
    
    
let selectedBtnNumber = 0;
for(let i = 0; i < btns.length; i = i + 1 ){
    // console.log(btns[i]);
    btns[i].addEventListener("click", function () {
        btns[selectedBtnNumber].classList.remove("selected")
        contents[selectedBtnNumber].classList.remove("selected")

        btns[i].classList.add("selected");
        contents[i].classList.add("selected");
        selectedBtnNumber = i;
        // console.log("btn[0]にクラスがついた",selectedBtnNumber);
        // console.log(i +"番目のボタンがクリックされた");
    })
}
// btns[0].addEventListener("click", function () {
//     btns[selectedBtnNumber].classList.remove("selected")
//     contents[selectedBtnNumber].classList.remove("selected")

//     btns[0].classList.add("selected");
//     contents[0].classList.add("selected");
//     selectedBtnNumber = 0;
// })
// btns[1].addEventListener("click", function () {
//     btns[selectedBtnNumber].classList.remove("selected")
//     contents[selectedBtnNumber].classList.remove("selected")

//     btns[1].classList.add("selected");
//     contents[1].classList.add("selected");
//     selectedBtnNumber = 1;
// })



// console.log(10 === 10)
// console.log(1000 + 3);
// console.log("1000" + 3);
// console.log("1000" + "aaaa");
// console.log(1000 === "1000");
// true false Boolean
