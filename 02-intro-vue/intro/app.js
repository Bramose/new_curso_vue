const { createApp, ref } = Vue;

const app = createApp({
    setup(){
        const message = ref(`I'm Batman`);
        const autor = ref(`Bruces Wayner`);
        
        const cambiar = () => {
            message.value = 'Soy goku'
            autor.value = 'Kakaroto'
        }

        return {
            message,
            autor,
            cambiar
        }
    }
});



app.mount('#myApp')