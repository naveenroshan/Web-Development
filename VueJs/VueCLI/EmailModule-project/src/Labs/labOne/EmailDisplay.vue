<template>
 <div>
      <div class="grid-container">
        <!--Email list-->
        <div class="grid-child purple">
          <h1>Email List</h1>
          <ul>
            <li v-for="email in emails">
              <button v-on:click="setCurrentlySelectedEmail(email)">{{email.id}}</button>
            </li>
          </ul>
        </div>

        <!--Email Body-->
        <div class="grid-child green">
          <h2>Email Details</h2>
          <p>{{currentlySelectedEmail.title}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default{
  data() {
    return {
      emails: [
      {
        id: 1,
        title: "Medium Daily",
        body: "Hello Sir Thanks for paying",
      },
      {
        id: 2,
        title: "Apple",
        body: "Apple give you 50% Off",
      },
    ],
    currentlySelectedEmail: {},
    };
  },
  //creating a function for this instance
  methods: {
   setCurrentlySelectedEmail(email){
     this.currentlySelectedEmail = email;
   }
  },
};
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
</style>
