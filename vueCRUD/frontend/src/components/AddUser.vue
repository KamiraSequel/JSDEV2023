<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nume">Nume</label>
        <input
          type="text"
          class="form-control"
          id="nume"
          required
          v-model="user.nume"
          name="nume"
        />
      </div>
      <div class="form-group">
        <label for="prenume">Prenume</label>
        <input
          type="text"
          class="form-control"
          id="prenume"
          required
          v-model="user.prenume"
          name="prenume"
        />
         <div class="form-group">
        <label for="telefon">Telefon</label>
        <input
          type="text"
          class="form-control"
          id="telefon"
          required
          v-model="user.telefon"
          name="telefon"
        />
      </div>
      
      </div>
      <button @click="saveUser" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUser">Add user</button>
    </div>
  </div>
</template>
<script>
import UserService from "../services/UserService";
export default {
  name: "add-user",
  data() {
    return {
      user: {
        id: null,
        nume: "",
        prenume: "",
        telefon: "", 
        email: "",
      },
      submitted: false
    };
  },
  methods: {
    seveUser() {
      var data = {
        nume: this.user.nume,
        prenume: this.user.prenume,
        telefon: this.user.telefon,
        email: this.user.email
      };
      UserService.create(data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newUser() {
      this.submitted = false;
      this.user = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>