//&times çarpı işareti

//DOM seçimleri
const inputText = document.querySelector("#task");
const ulList = document.querySelector("#list");
const li = ulList.getElementsByTagName("li");
const close = document.querySelectorAll('.close')
const close2 = document.getElementsByClassName('close')



//İnputun value değerine göre listeye eleman ekleme
function newElement() {
  if (inputText.value.length > 0) {
    let li = document.createElement("li");
    ulList.appendChild(li);
    li.innerHTML = `<span id ='li' class="close">&times</span>${inputText.value}`;
    $(".success").toast('show')
    inputText.value = "";
    li.addEventListener("click", function () {
      li.className == "checked" ? li.classList.remove("checked") : li.classList.add("checked");
    });
    $("li").hover(function () {
      $(this)
        .find("span")
        .click(function () {
          this.parentElement.style.display = "none";
        });
    });
     
  } else {
     $(".error").toast('show')
  }}
  //Hazır li elemanları için checked kontrol
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
      li[i].className == "checked"
        ? li[i].classList.remove("checked")
        : li[i].classList.add("checked")
    });
    
  }

  //Sil butonu ile istenilen elemanı silme
  for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  })
}
  