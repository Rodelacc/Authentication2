<template>
  <div>
    <div class="title">
      <h2>Login</h2>
    </div>
    <div class="container form">
      <label for="uname"><b>Email</b></label>
      <input
        v-model="user.email"
        type="text"
        class="input"
        placeholder="Enter Username"
        name="uname"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="input"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button @click="login()" type="submit" class="button">Login</button>
    </div>
  </div>
</template>

<script setup>
import { authService } from "@/components/AuthService";
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  email: null,
  password: null,
});
const router = useRouter();

//cons login here is the value of the login

const login = async () => {
  try {
    const params = {
      Email: "user.email",
      Password: "user.password",
    };
    //this API os from AuthService.ts
    const response = await authService.login(params);
    //token
    if (response.data) {
    }
  } catch (error) {
    // console.log();
  }
};
</script>
