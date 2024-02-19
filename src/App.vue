<script setup>

import SideMenuComponent from './components/SideMenuComponent.vue';
import MainForm from './components/MainForm.vue';
import TitlePage from './components/elements/TitlePage.vue';


</script>


<template>
  <div class="container">
    <div class="row d-flex">
      <div class="col-sm-2 col-md-4 col-lg-3">
        <SideMenuComponent />
      </div>
      <div class="col-sm-2 col-md-8 col-lg-10 col-xl-8">
        <TitlePage title="Preguntas Personalizadas"/>
        <MainForm />
      </div>
    </div>
  </div>
</template>
