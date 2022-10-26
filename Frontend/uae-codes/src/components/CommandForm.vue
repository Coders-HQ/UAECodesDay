<template>
  <form @submit.prevent="postCommand()">
    <div class="mb-4">
      <label for="name" class="mb-1 form-label">Name</label>
      <input
        type="text"
        class="form-control p-2"
        id="name"
        placeholder="Your Name"
        v-model="name"
      />
    </div>

    <label for="command" class="mb-1 form-label">Print Command</label>
    <div class="input-group mb-4">
      <input
        type="text"
        class="form-control p-2"
        id="command"
        :placeholder='selectedLang.placeholder'
        aria-label="Text input with dropdown button"
      />
      <button
        class="btn btn-secondary dropdown-toggle px-3"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ selectedLang.label }}
      </button>
      <ul class="dropdown-menu dropdown-menu-dark p-2">
        <li v-for="lang in langs" :key="lang.id" ><a @click="updateLang(lang)" class="p-2 py-1 dropdown-item cp">{{ lang.label }}</a></li>
      </ul>
    </div>

    <button :disabled="!validInputs" type="submit" class="w-100 mt-5 btn btn-primary btn-dark">
      Submit Command
    </button>
  </form>
</template>

<script>
export default {
    data(){
        return {
            name: "",
            selectedLang: { id: "python", label: "Python", placeholder: 'print("Hello World")'},
            langs: [
                { id: "python", label: "Python", placeholder: 'print("Hello World")'},
                { id: "js", label: "JavaScript", placeholder: 'console.log("Hello World")'},
                //{ id: "java", label: "Java"},
            ]
        }
    },
    computed: {

      validInputs(){
        console.log( ![null, undefined, ""].includes(this.name))
        return ![null, undefined, ""].includes(this.name)
      }

    },
    methods: {
        postCommand(){
          console.log("Send Command..")
        },
        updateLang(lang){
            this.selectedLang = { ...lang }
        }
    }
};
</script>

<style>
button.dropdown-toggle{
    border: none ;
    background: #1c232f;
}
button.dropdown-toggle:hover{
    background: #4a5c7c;
}

button.btn-primary{
    padding: 13px 0 !important;
    background: #1c232f;
    border: none;
    font-weight: 500;
    transition: all .4s ease;
}
button.btn-primary:hover{
    background: #4a5c7c;
}
</style>
