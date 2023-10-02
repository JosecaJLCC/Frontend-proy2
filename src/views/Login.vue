<template>
    <div class="container-login">
        <div class="content0-login">
            <H3>LA MEJOR AVENTURA QUE PUEDAS TENER, ES VIVIR LA VIDA DE TUS SUEÑOS</H3>
        </div>
        <div class="content1-login">
            <img src="@/assets/lema.png" >
        </div>

        <div class="content2-login">
            <header>
                <h1>¡BIENVENIDO!</h1>
                
            </header>
            <form v-on:submit-login.prevent="iniciarSesion">
                <div class="input-box-login">
                    <label  >USUARIO</label>
                    <input type="text" v-model="usuario" required>
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box-login">
                    <label >CONTRASEÑA</label>
                    <input type="password" v-model="contrasenia" required>
                    <i class='bx bxs-lock'></i>
                </div>
                <div class="check-login">
                    <input type="checkbox">Recuérdame
                </div>
                         
                <div class="submit-login">
                    <button type="submit">INGRESAR</button>
                </div>
                <div class="enlaces-login">
                    <a v-on:click="registrarUsuario">Registrarse</a>
                    <br>
                    <a href="#">¿Olvido su contraseña?</a>
                </div>
            </form>
        </div>

    </div>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</template>

<script>
    import axios from 'axios'
    

    export default{
        name:'Login',
        data() {
            return {                
                usuario:"",
                contrasenia:"",
                error:false,
                error_msg:""
            }

        },
        methods: {
            iniciarSesion(){
                console.log(this.usuario, this.contrasenia,"aaaavvvvv");
                let jsn={
                    "usuario":this.usuario,
                    "contrasenia":this.contrasenia
                };
                 axios.post('/login', jsn)
                .then(data => {
                    console.log("frontend", data);
                    if(data.status==200){
                        alert("Welcome to Date Fuerza")
                        this.$router.push('Lista');
                    }
                    else{
                        alert("Usuario no encontrado")
                    }
                }).catch(error => {
                    alert("Usuario no encontrado");
                    
                })
                
                /*
                await this.axios.post('/login', jsn)
                .then(response => {
                    console.log(response)
                })
                .catch(error =>{
                    var data = error.response.data
                })*/
            },

            registrarUsuario(){
                this.$router.push('Persona');
            }
        },
    }
</script>

<style scoped>

    /*La mayor aventura en la que te puedes embarcar consiste en vivir la vida de tus sueños*/
    .container-login{
    /*Tamaño total de nuestro div principal*/
    max-width:800px;
    
    /*Le damos un borde para crear la frontera*/
    border:2px solid rgb(91, 157, 34);
    /*borde de 20px en el eje Y  y 0 en el eje X*/
    margin:90px auto;
    /*Usamos grid para el ordenado dentro el div*/
    display:grid;
    /*dividimos nuestro div en 5 columnas*/
    grid-template-columns: repeat(2, 1fr);
    /*Para el brillo en nuestro div principal*/
    box-shadow:0px 0px 15px 5px #05da93; 
    }

    /*Para el lema ira de lado a lado*/
    .content0-login{
    grid-column: 1/-1;
    color:white;
    text-align: center;
    
    }

    /*el grid lo llevara hasta la mitad del div*/
    .content1-login{
    grid-column: 1/2;
    
    }

    /*el grid lo llevara hasta la mitad del div*/
    .content2-login{
    grid-column: 2/3;
    background-color:#121615
    }

    .content1-login, .content2-login{
    border: 0.5px solid black;
    }

    /*Titulo inicio de content2-login*/
    .content2-login h1{
    text-align: center;
    color:white;
    margin: 20px 0;
    font: oblique bold 120% cursive;
    }
    
    /*imagen de nuestra empresa en content1-login*/
    .content1-login img{
    width: 100%;
    height: 100%;
    }



    .input-box-login input{
    width: 85%;
    padding: 10px 10px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #05da93;
    margin:5px 5px;
    color:#ffff;
    outline: 0;
    
    }

    .input-box-login label{
    color:white;
    font: oblique bold 120% cursive;
    }


    .submit-login button{
    
    background: #05da93;
    width:100%;
    border-radius: 10px;
    height: 50px;
    color:white;
    font: oblique bold 120% cursive;
    border:none;
    }

    .submit-login{
    margin-top:10px
    }


    .submit-login button:hover{
    background-color: rgb(91, 157, 34);;
    transition: background-color 1s ease-out;
    }

    .check-login{
    text-align: end;
    padding: 5px;
    margin-right:25px;
    color: white
    }

    .enlaces-login{
    
    text-align: center;
    padding: 12px 0;
    color: aqua;
    }

    .enlaces-login a{ 
    color: aqua;
    }

    .enlaces-login a:hover{
    color:white;
    }

    .input-box-login i{
    position: absolute;
    font-size: 30px;
    }
</style>