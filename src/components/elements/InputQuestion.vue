<script setup>

import RangeQuestion from './RangeQuestion.vue';

const requerido = () => {
    if(document.getElementById('checkBoxObligatorio').checked) {
        document.getElementById('mainQuestion').setAttribute("required", "true");
    }
}

</script>

<template>
    <div class="container-sm">
        <div class="mb-2">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="¿Como calificarias la calidad de nuestro servicio?"
                    aria-describedby="aditionalconfig" arial-label="button-addon2" id="mainQuestion" />
                <button class="btn btn-outline-success" type="button" id="button-addon2">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <div id="aditionalconfig">
                <input id="checkBoxObligatorio" type="checkbox" class="form-check-label">
                <label for="checkBoxObligatorio" class="form-text" @click="requerido">
                    Pregunta Obligatoria
                </label>
                <input id="checkBoxPuntuacion" type="checkbox" class="form-check-label">
                <label for="checkBoxPuntuacion" class="form-text">
                    Esta pregunta contara en la puntuacion de tu coloborador
                </label>
            </div>
        </div>

        <RangeQuestion />
    </div>
</template>