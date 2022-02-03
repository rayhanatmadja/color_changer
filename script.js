// tombol ubah warna(statis 1 warna)
const tUbahWarna = document.getElementById('btnChangeColor');
tUbahWarna.addEventListener('click', function(){
    document.body.classList.toggle('lightBlue');
})

// tombol acak warna
const parentTAcakWarna = document.body;
const tAcakWarna = document.createElement('button');
const isi = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(isi);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);
tAcakWarna.addEventListener('click', function() {
    // method acak warna
    const randomRed = Math.round(Math.random() * 255 + 1);
    const randomGreen = Math.round(Math.random() * 255 + 1);
    const randomBlue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ randomRed +', '+ randomGreen +' , '+ randomBlue +')';
})


// MERAH
// slider value(merah)
document.getElementById('red_box').oninput = function(){
    changeValueRed();
};
function changeValueRed(){
    const sliderValue  = document.getElementById('red_box').value
    document.getElementById('sliderValueRed').innerHTML = sliderValue;
}
// mengubah warna / nilai lewat slider (merah)
const sliderMerah = document.getElementById('red_box');
sliderMerah.addEventListener('change' , function(){
    const randomRed = sliderMerah.value;
    document.body.style.backgroundColor = 'rgb('+randomRed+',100,100)';
})


// HIJAU
// slider value(hijau)
document.getElementById('green_box').oninput = function(){
    changeValueGreen();
};
function changeValueGreen(){
    const sliderValue  = document.getElementById('green_box').value
    document.getElementById('sliderValueGreen').innerHTML = sliderValue;
}
// mengubah warna / nilai lewat slider (hijau)
const sliderHijau = document.getElementById('green_box');
sliderHijau.addEventListener('change' , function(){
    const randomGreen = sliderHijau.value;
    document.body.style.backgroundColor = 'rgb(100,'+randomGreen+',100)';
})


// BIRU
// slider value(biru)
document.getElementById('blue_box').oninput = function(){
    changeValueBlue();
};
function changeValueBlue(){
    const sliderValue  = document.getElementById('blue_box').value
    document.getElementById('sliderValueBlue').innerHTML = sliderValue;
}
// mengubah warna / nilai lewat slider (biru)
const sliderBiru = document.getElementById('blue_box');
sliderBiru.addEventListener('change' , function(){
    const randomBlue = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb(100,100,'+randomBlue+')';
})


// mengubah warna sesuai posisi mouse
document.body.addEventListener('mousemove' , function(event){
    // mendapatkan posisi X
    const xPosition = Math.round((event.clientX / window.innerWidth) * 255);
    // mendapatkan posisi Y
    const yPosition = Math.round((event.clientY / window.innerHeight) * 255);
    // mengubah warna body
    document.body.style.backgroundColor = 'rgb('+ xPosition +','+ yPosition +',100)'
})




