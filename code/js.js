const namaDepan = document.querySelector("#NamaDepan")
const namaBelakang = document.querySelector("#NamaBelakang")




if (obj1.namaDepan === "" && namaBelakang === ""){
  namaDepan.addEventListener("change", function(event){
    let target1 = event.target.value
    let obj1 = 
  {
    namaLengkap : "",
    namaDepan : "",
    namaBelakang : "",
    alamat : ""
  }
    obj1.namaDepan = target1
  });

namaBelakang.addEventListener("change", function(event){
  let target2 = event.target.value
  obj1.namaBelakang = target2

  });
}





if (obj1.namaDepan !== '' && obj1.namaBelakang !== ''){
  console.log(namaDepan, namaBelakang)
}
