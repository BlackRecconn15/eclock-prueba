<script setup>
const props = defineProps(['title'])

</script>

<template>
    <div class="container text-center p-2 my-2">
        <div class="row">
            <div class="col-8 my-3 p-2">
                <h2><i class="fa-solid fa-file-pen fa-lg"></i> {{ title }}</h2>
            </div>
            <div class="col-3 text-end">
                <button type="submit" class="btn">
                    <i class="fa-regular fa-floppy-disk fa-2xl mx-2"></i>
                </button>
                
                <i class="fa-solid fa-filter fa-2xl mx-2"></i>
                <i class="fa-regular fa-user fa-2xl mx-2"></i>
            </div>
        </div>
    </div>
</template>