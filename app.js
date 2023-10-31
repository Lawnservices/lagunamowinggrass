const laguna = document.getElementById('nav');
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 260) {
        nav.style.backgroundColor = 'green';
        
    } else {
        nav.style.backgroundColor = '#154256';
    }
});
/* cookie*/
function setCookie(nombre, valor, diasExpiracion) {
            var fecha = new Date();
            fecha.setTime(fecha.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
            var expiracion = "expires=" + fecha.toUTCString();
            document.cookie = nombre + "=" + valor + "; " + expiracion;
        }

     
        function usuarioAceptoCookies() {
            return document.cookie.indexOf("aceptoCookies=true") !== -1;
        }

       
        function mostrarMensajeCookies() {
            if (!usuarioAceptoCookies()) {
                var mensaje = "This website uses cookies to improve your experience. Do you accept our cookies?";
                if (confirm(mensaje)) {
                    
                    setCookie("aceptoCookies", "true", 365);  
                }
            }
        }
