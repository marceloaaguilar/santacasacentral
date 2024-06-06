window.addEventListener('load', ()=> {
    if (window.location.pathname == '/obrigado'){
        setTimeout(()=> {
            window.location. href = 'https://api.whatsapp.com/send?phone=5521975766577&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20funer%C3%A1ria%20Santa%20Casa'; 
        },1000)
    }
})



document.getElementById("btnModalWhatsapp").addEventListener('click', ()=> {
    if(document.getElementById("recipient-name").value == ''){
        Swal.fire({
            position: "top-end",
            title: 'Preencha o seu nome!',
            toast: true,
            icon: 'error',
            timer: 3500,
          });

        return false
    }

    if(document.getElementById("phoneNumber").value == ''){
        Swal.fire({
            title: 'Preencha o seu Telefone!',
            toast: true,
            icon: 'error',
            position: "top-end",
            timer: 3500,
          });
        return false
    }

    window.location.href = window.location.href + 'obrigado';


    
})