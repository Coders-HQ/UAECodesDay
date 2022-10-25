<template>
  <form @submit="prevent.default">
    <div class="mb-3">
      <label for="name" class="mb-1 form-label">Name</label>
      <input
        type="text"
        class="form-control p-2"
        id="name"
        placeholder="Your Name"
      />
    </div>

    <label for="command" class="mb-1 form-label">Print Command</label>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control p-2"
        id="command"
        placeholder='console.log("Hello World")'
        aria-label="Text input with dropdown button"
      />
      <button
        class="btn btn-secondary dropdown-toggle px-3"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ selectedLang }}
      </button>
      <ul class="dropdown-menu dropdown-menu-dark p-2">
        <li v-for="lang in langs" :key="lang.id" ><a @click="updateLang(lang.label)" class="p-2 py-1 dropdown-item cp">{{ lang.label }}</a></li>
      </ul>
    </div>

    <button type="button" class="w-100 mt-4 p-2 btn btn-primary btn-dark">
      Submit Command
    </button>
  </form>
</template>

<script>
export default {
    data(){
        return {
            selectedLang: "",
            langs: [
                { id: "python", label: "Python"},
                { id: "js", label: "JavaScript"},
                //{ id: "java", label: "Java"},
            ]
        }
    },
    mounted(){
        this.updateLang()
    },
    methods: {
        updateLang(lang){
            this.selectedLang = lang ?? "Python"
        }
    }
};
</script>

<style></style>
