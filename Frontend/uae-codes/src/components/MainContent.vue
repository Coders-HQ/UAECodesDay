<template>
    <div id="form-container"
    class="d-flex flex-column justify-content-center align-itmes-center bg-light shadow rounded mx-3 p-4">
        
        <div class="border text-center pb-3">
            <img id="logo" src="../assets/images/UAE-Codes-Color-Logo.png" alt="UAE-Codes-Colored-Logo">
        </div>

        <div class="border">
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