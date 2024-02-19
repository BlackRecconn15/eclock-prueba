<script setup>

import RangoOption from './RangoOption.vue';

const tiposPreguntas = [
    {value: 'rango', text: 'Rango'},
    {value: 'cerrada', text: 'Cerrada'},
    {value: 'abierta', text: 'Abierta'},
    {value: 'opciones', text: 'Opciones'},
]

</script>

<template>
    <p class="text-start">Tipo de pregunta</p>
    <div class="my-2">
        <div class="row">
            <div class="">
                <RangoOption />
                <div class="from-check form-check-inline">
                    <input type="radio" class="form-check-input" id="cerrada" name="questionsRadio">
                    <label for="cerrada">Cerrada(Si o No)</label>
                </div>
                <div class="from-check form-check-inline">
                    <input type="radio" class="form-check-input" id="abierta" name="questionsRadio">
                    <label for="abierta">Abierta</label>
                </div>
                <div class="from-check form-check-inline">
                    <input type="radio" class="form-check-input" id="opciones" name="questionsRadio">
                    <label for="opciones">Opciones</label>
                </div>
            </div>
        </div>
    </div>
</template>