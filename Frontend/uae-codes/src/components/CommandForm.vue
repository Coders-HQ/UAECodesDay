<template>
  <form @submit.prevent="testMatch()">
    <div class="mb-4">
      <label for="name" class="mb-2 form-label">Name</label>
      <input
        type="text"
        class="form-control p-2"
        id="name"
        placeholder="Your Name"
        v-model="name"
      />
    </div>

    <div class="w-100 d-flex justify-content-between align-items-center">
      <label for="command" class="mb-2 form-label">Print Command</label>
      <label v-if="error" id="error" class="mb-2 form-label"
        ><small>Please match {{ selectedLang.label }} format</small></label
      >
    </div>

    <div class="input-group mb-4">
      <input
        type="text"
        class="form-control p-2"
        id="command"
        v-model="command"
        :placeholder="selectedLang.placeholder"
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
        <li v-for="lang in langs" :key="lang.id">
          <a @click="updateLang(lang)" class="p-2 py-1 dropdown-item cp">{{
            lang.label
          }}</a>
        </li>
      </ul>
    </div>

    <button
      :disabled="!validInputs"
      type="submit"
      class="w-100 mt-5 btn btn-primary btn-dark"
    >
      Submit Command
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      command: "",
      error: false,
      selectedLang: {
        id: "python",
        label: "Python",
        placeholder: 'print("Hello World")',
        regex: /^print\(('([^']*)'|"([^""]*)")\)$/gm,
      },
      langs: [
        {
          id: "python",
          label: "Python",
          placeholder: 'print("Hello World")',
          regex: /^print\(('([^']*)'|"([^""]*)")\)$/gm,
        },
        {
          id: "js",
          label: "JavaScript",
          placeholder: 'console.log("Hello World")',
          regex: /^console.log\(('([^']*)'|"([^""]*)")\)$/gm,
        },
        //{ id: "java", label: "Java"},
      ],
    };
  },
  computed: {
    validInputs() {
      //console.log(![null, undefined, ""].includes(this.name));
      return (
        ![null, undefined, ""].includes(this.name) &&
        ![null, undefined, ""].includes(this.command)
      );
    },
  },
  methods: {
    testMatch() {
      let processed = this.processCMD(this.command);

      if (processed == false) {
        this.error = true;
        console.log("Command not recognized, try again!");
        return false;
      }

      //if success match
      this.error = false;
      console.log(processed);
      this.postCommand(processed);
    },

    processCMD(textInput) {
      // for (var i = 0; i < this.langs.length; i++) {
      let lang = this.selectedLang;
      var re = lang.regex;

      var test = re.exec(textInput);

      if (test != null) {
        return {
          ...lang,
          msg: test[3],
        };
      }
      // }

      return false;
    },

    postCommand(processed) {
      //To do Send Request to the server... ->
      console.log("Send Command..");
      window.alert(
        `Thank ${this.name}\n The message is sent "${processed.msg}"`
      );

      //Reset form
      this.name = "";
      this.command = "";
      this.selectedLang = {
        id: "python",
        label: "Python",
        placeholder: 'print("Hello World")',
        regex: /^print\(('([^']*)'|"([^""]*)")\)$/gm,
      };
    },
    updateLang(lang) {
      this.selectedLang = { ...lang };
    },
  },
};
</script>

<style>
button.dropdown-toggle {
  border: none;
  background: #1c232f;
}
button.dropdown-toggle:hover {
  background: #4a5c7c;
}

button.btn-primary {
  padding: 13px 0 !important;
  background: #1c232f;
  border: none;
  font-weight: 500;
  transition: all 0.4s ease;
}
button.btn-primary:hover {
  background: #4a5c7c;
}
#error {
  color: rgb(214, 76, 76) !important;
}
</style>
