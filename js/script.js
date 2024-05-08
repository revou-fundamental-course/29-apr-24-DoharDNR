let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}

function validationForm(){
    const nama = document.forms['message-form']['name-input'].value
    const email = document.forms['message-form']['email-input'].value
    const choose = document.forms['message-form']['choose-input'].value

    if (nama == ''){
        document.getElementById("error-name").innerHTML = "Masukkan Nama !"
        return false
    } else {
        setName(nama)
    }
    
    if(email == ''){
        document.getElementById("error-email").innerHTML = "Masukkan Email !"
        return false
    } else {
        setName(email)
    }
    
    if(choose == ''){
        document.getElementById("error-choose").innerHTML = "Pilih Destinasi !"
        return false
    } else {
        setName(choose)
    }

    alert('Data anda telah masuk !!!')
}

function setName(){
    document.getElementById('error-name').innerHTML = ""
    document.getElementById('error-email').innerHTML = ""
    document.getElementById('error-choose').innerHTML = ""
}

document.getElementById('hubungi').addEventListener("click", function(){
    alert('Terima Kasih Sudah Menghubungi Kami !!!')
})