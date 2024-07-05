/*  Crea / Elimina set  */

var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        /*
        if(this.value.length >= 1) {
            this.nextElementSibling.classList.add('set');
        } 
        else{
            this.nextElementSibling.classList.remove('set');
        }
        */

       this.value.length >= 1 ? this.nextElementSibling.classList.add('set') : 
       this.nextElementSibling.classList.remove('set');
    });
}
