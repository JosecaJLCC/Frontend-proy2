<template>
    <div class="container-usuario">
        <h1 class="logo-usuario">REGISTRO DE <span>USUARIO</span></h1>

        <div class="contact-wrapper-usuario">
            <div class="contact-form-usuario">
                <h2 class="logo2-usuario">DATOS <span>ADICIONALES</span></h2>
                <form v-on:submit.prevent="registrarUsuario">
                    <p>
                        <label for="usuario">Usuario</label>
                        <input type="text" v-model="usuario" required>
                    </p>
                    
                    <p>
                        <label for="correo">Correo</label>
                        <input type="email" v-model="correo" required>
                    </p>

                    <p>
                        <label for="zona">Zona</label>
                        <input type="text" v-model="zona">
                    </p>

                    <p>
                        <label for="via">Calle/Avenida</label>
                        <input type="text" v-model="via">
                    </p>

                    <p>
                        <label>Contraseña</label>
                        <input type="password" v-model="contrasenia" pattern="[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*" title="Una contraseña válida consiste de una letra mayúscula, minúscula y un dígito. La contraseña debe empezar con una letra." required>
                    </p>

                    <p>
                        <label>Confirmar Contraseña</label>
                        <input type="password"  required>
                    </p>

                    <p>
                        <label>Nro de Puerta</label>
                        <input type="number" v-model="nroPuerta"  required>
                    </p>
                    
                    <p>
                        <label>CI</label>
                        <input type="text" v-model="ciPersona"  required>
                    </p>
                    
                    <p class="block-usuario">
                        <button type="submit">REGISTRAR</button>
                    </p>


                </form>
            </div>
        </div>
    </div>
</template>

<script>
    /*import ciPersona from './Persona.vue';*/
    export default{
        name:'Usuario',
        data() {
            return {
                ciPersona:"",
                zona:"",
                via:"",
                nroPuerta:"",

                usuario:"",
                correo:"",
                contrasenia:""

            }
        },
        methods:{
            registrarUsuario(){
                let jsn={
                    'zona':this.zona.toUpperCase(),
                    'via':this.via.toUpperCase(),
                    'nroPuerta':this.nroPuerta,
                    'ci':this.ciPersona.toUpperCase(),
                    'usuario':this.usuario,
                    'correo':this.correo,
                    'contrasenia':this.contrasenia
                };
                this.axios.post('/usuarios', jsn)
                .then(data =>{
                    if(data.status==200){
                        this.$router.push('Login');
                    }
                    else{
                        alert("Algo no salió bien en usuarios");
                    }
                })
                .catch(error =>{
                    alert("Algo no salió bien usuarios");
                })
            }
        }
    }
</script>
    
<style scoped>
    *{
        box-sizing: border-box;
    }

    .container-usuario{
        max-width: 1170px;
        background-color:#121615;
        margin: 30px auto;
        padding: 1.5em;
        border:2px solid #2222;
        
    }

    .logo-usuario{
        text-align: center;
        font-size: 3em;
        padding-bottom: 20px;
    }

    .logo-usuario span, .logo2-usuario span{
        color: #05da93;
    }

    .contact-wrapper-usuario{
        /*Con box-shadow le daremos un brillo al div contact-wrapper-usuario*/
        box-shadow: 0px 0px 15px 5px #05da93;
        border:2px solid rgb(91, 157, 34);
        
    }

    .contact-wrapper-usuario > *{
        padding: 2em;
    }

    .contact-form-usuario{
        background-color:#2222;
        
    }

    .contact-form-usuario form p{
        margin:0;
        padding: 1em;
    }

    .contact-form-usuario form{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        width: 1050px;
        border:2px solid #2222;
    }

    .contact-form-usuario form .block-usuario{
        grid-column: 2/4;
    }



    .contact-form-usuario form button,
    .contact-form-usuario form input
    {
        width: 100%;
        padding: 1em;
        border:none;
        background: none;
        outline:0;
        color:#ffff;
        border-bottom: 2px solid #05da93;
        
    }

    .contact-form-usuario form button{
        background: #05da93;
        text-transform: uppercase;
        padding: 1.5em;
        border-bottom: none;
        color:black;
    }

    .contact-form-usuario form button:hover,
    .contact-form-usuario form button:focus{
        background: rgb(91, 157, 34);
        color:#ffff;
        transition: background-color 1s ease-out;
        outline: 0;
    }

    .contact-form-usuario select{
        background-color: #05da93;
        outline:0;
        border:none;
    }

    /*Pantallas grandes*/
    @media(min-width:700px){
        body{
            padding: 0 4rem;
            
        }

        .contact-wrapper-usuario{
            display: grid;
            grid-template-columns: 2fr 1fr;
        }

        .contact-wrapper-usuario > *{
            padding: 2em;
        }

    
    }
</style>