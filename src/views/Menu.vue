<template>
    <div>
        <h1>Hola estas en el dashboard</h1>
        <form v-on:submit.prevent="subirImg">
            <label for="">Busca tu imagen</label>
            <input type="file" name="image">
            <button type="submit">Subir</button>
        </form>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                imagenes:[],
                imagen:null
            }
        },
        methods:{
            subirImg(e){
                this.imagen = e.target.files[0];
                console.log(this.imagen)
            }
        }
    }
</script>

<style scoped>
    body{
        color: white;
    }
</style>

