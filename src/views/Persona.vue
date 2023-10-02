<template>
    <div class="container-persona">
        <h1 class="logo-persona">REGISTRO DE <span>USUARIO</span></h1>

        <div class="contact-wrapper-persona">
            <div class="contact-form-persona">
                <h2 class="logo2-persona">DATOS <span>PERSONALES</span></h2>
                <form v-on:submit.prevent="registrarPersona">
                    <p>
                        <label for="ci">C.I</label>
                        <input type="number" v-model="ci" required>
                    </p>
                    <p>
                        <label for="ci">Expedito</label>
                        <select v-model="expedito">
                            <option disabled >Seleccionar</option>
                            <option value="LP">LP</option>
                            <option value="CB">CB</option>
                            <option value="SC">SC</option>
                            <option value="OR">OR</option>
                            <option value="PT">PT</option>
                            <option value="CH">CH</option>
                            <option value="BE">BE</option>
                            <option value="PD">PD</option>
                            <option value="TJ">TJ</option>
                        </select>
                    </p>
                    <p>
                        <label for="Nombres">Nombres</label>
                        <input type="text" v-model="nombre" required>
                    </p>

                    <p>
                        <label for="paterno">Ap. Paterno</label>
                        <input type="text" v-model="paterno">
                    </p>

                    <p>
                        <label for="materno">Ap. Materno</label>
                        <input type="text" v-model="materno">
                    </p>

                    <p>
                        <label for="date">F. Nacimiento</label>
                        <input type="date" v-model="fecnac" required>
                    </p>

                    <p>
                        <label for="sexo">Sexo</label>

                        <select v-model="sexo">
                            <option disabled >Seleccionar</option>
                            <option value="MASCULINO">Masculino</option>
                            <option value="FEMENINO">Femenino</option>
                            <option value="OTRO">Otro</option>
                        </select>
                    </p>

                    <p>
                        <label for="civil">Estado Civil</label>

                        <select v-model="civil">
                            <option disabled >Seleccionar</option>
                            <option value="SOLTERO">Soltero</option>
                            <option value="CASADO">Casado</option>
                            <option value="DIVORCIADO">Divorciado</option>
                            <option value="VIUDO">Viudo</option>
                        </select>
                    </p>

                    <p>
                        <label>Telf</label>
                        <input type="number" v-model="telf" required>
                    </p>

                    <p>
                        <label>Ocupación</label>
                        <input type="text" v-model="ocupacion" required>
                    </p>

                    <p>
                        <label>Nacionalidad</label>
                        <input type="text" v-model="nacionalidad"  required>
                    </p>
                    <p>
                        <label>Apodo</label>
                        <input type="text" v-model="apodo" required>
                    </p>


                    <p class="block-persona">
                        <button type="submit">SIGUIENTE</button>
                    </p>


                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Persona',
        data() {
            return {
                ci:"",
                expedito:"",              
                nombre:"",
                paterno:"",
                materno:"",
                fecnac:"",
                sexo:"",
                civil:"",
                telf:"",
                nacionalidad:"",
                ocupacion:"",
                apodo:""
            }
        },
        methods:{
            registrarPersona(){
                let jsn={
                    "ci":this.ci+"-"+this.expedito.toUpperCase(),              
                    "nombre":this.nombre.toUpperCase(),
                    "paterno":this.paterno.toUpperCase(),
                    "materno":this.materno.toUpperCase(),
                    "fecnac":this.fecnac,
                    "sexo":this.sexo.toUpperCase(),
                    "civil":this.civil.toUpperCase(),
                    "telf":this.telf,
                    "nacionalidad":this.nacionalidad.toUpperCase(),
                    "ocupacion":this.ocupacion.toUpperCase(),
                    "apodo":this.apodo.toUpperCase()
                };
                this.axios.post('/personas', jsn)
                .then(data =>{
                    if(data.status==200){
                        this.$router.push('Usuario');
                    }
                    else{
                        alert("Algo no salió bien");
                    }
                })
                .catch(error =>{
                    alert("Algo no salió bien");
                })
            }
        }
    }
</script>
    
<style scoped>
    /**{
        box-sizing: border-box;
    }*/
    .container-persona{
        max-width: 1170px;
        margin: 30px auto;
        padding: 1.5em;
        border:2px solid #2222;
        background-color:#121615;
    }

    .logo-persona{
        text-align: center;
        font-size: 3em;
        padding-bottom: 20px;
    }

    .logo-persona span, .logo2-persona span{
        color: #05da93;
    }

    .contact-wrapper-persona{
        /*Con box-shadow le daremos un brillo al div contact-wrapper-persona*/
        box-shadow: 0px 0px 15px 5px #05da93;
        border:2px solid rgb(91, 157, 34);
        
        
    }

    .contact-wrapper-persona > *{
        padding: 2em;
    }

    .contact-form-persona{
        background-color:#2222;
        
    }

    .contact-form-persona form p{
        margin:0;
        padding: 1em;
    }

    .contact-form-persona form{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        width: 1050px;
        border:2px solid #2222;
    }

    .contact-form-persona form .block-persona{
        grid-column: 2/4;
    }



    .contact-form-persona form button,
    .contact-form-persona form input
    {
        width: 100%;
        padding: 1em;
        border:none;
        background: none;
        outline:0;
        color:#ffff;
        border-bottom: 2px solid #05da93;
        
    }

    .contact-form-persona form button{
        background: #05da93;
        text-transform: uppercase;
        padding: 1.5em;
        border-bottom: none;
        color:black;
    }

    .contact-form-persona form button:hover,
    .contact-form-persona form button:focus{
        background: rgb(91, 157, 34);
        color:#ffff;
        transition: background-color 1s ease-out;
        outline: 0;
    }

    .contact-form-persona select{
        background-color: #05da93;
        outline:0;
        border:none;
    }

    /*Pantallas grandes*/
    @media(min-width:700px){
        body{
            padding: 0 4rem;
            
        }

        .contact-wrapper-persona{
            display: grid;
            grid-template-columns: 2fr 1fr;
        }

        .contact-wrapper-persona > *{
            padding: 2em;
        }

    
    }
</style>