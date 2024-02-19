<script setup>
import InputQuestion from './elements/InputQuestion.vue';
</script>

<template>
    <div class="">
        <div class="card">
            <div class="col-lg-8 col-sm-6 text-start" >
                <h2>Personaliza tus preguntas</h2>
                <small>En esta sección podras adaptar preguntas con tus preferencias,
                     para que tus clientes cuenten su experiencia.
                </small>
                <br>
                <small>(Limite de 5 preguntas)</small>
            </div>
            <div class="card-body p-3">
                <form>
                    <InputQuestion />
                </form>
            </div>
        </div>
    </div>
</template>