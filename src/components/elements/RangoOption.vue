<script setup>

const rangoCheck = () => {
    if(document.getElementById('rango').checked){
        document.querySelector('#rangoConfig').style.display='block';
    }else{
        document.querySelector('#rangoConfig').style.display='none';
    }
}

</script>

<template>
    <div class="from-check form-check-inline">
        <input type="radio" class="form-check-input" id="rango" name="questionsRadio" @click="rangoCheck()">
        <label for="rango">Rango</label>
    </div>

    <div class="show" id="rangoConfig">
        <p>¿Que iconos te gustaria utilizar?</p>
        <div class="from-check form-check-inline">
            <input type="radio" class="form-check-input" id="icono1" name="iconoRango">
        <label for="rango"><i class="fa-solid fa-star"></i></label>
        </div>
        <div class="from-check form-check-inline">
            <input type="radio" class="form-check-input" id="icono1" name="iconoRango">
        <label for="rango"><i class="fa-solid fa-face-smile"></i></label>
        </div>
    </div>
</template>

<style scoped>

.show {
    display: none;
}

</style>