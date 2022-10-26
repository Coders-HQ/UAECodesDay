<template>
    <div id="form-container"
    class="d-flex flex-column justify-content-center align-itmes-center align-itmes-start-sm bg-light shadow rounded mx-3 p-5">
        
        <div class="text-center pb-4">
            <img id="logo" src="../assets/images/UAE-Codes-Color-Logo.png" alt="UAE-Codes-Colored-Logo">
        </div>

        <div class="">
            <CommandForm />
        </div>
    </div>
</template>

<script>
import CommandForm from './CommandForm.vue'
export default {
  components: { CommandForm },

}
</script>

<style>
</style>