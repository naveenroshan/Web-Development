<template>
  <div>
    <div v-for="item in configurationArray">
      <div v-if="item.type === 'text'">
        {{ item.label }}
        <input
          v-bind:placeholder="item.label"
          type="text"
          v-bind:id="item.id"
        />
      </div>
      <div v-if="item.type === 'email'">
        {{ item.label }}
        <input
          v-bind:placeholder="item.label"
          type="email"
          v-bind:id="item.id"
        />
      </div>
      <div v-if="item.type === 'date'">
        {{ item.label }}
        <input
          v-bind:placeholder="item.label"
          type="date"
          v-bind:id="item.id"
        />
      </div>
      <div v-if="item.type === 'datetime-local'">
        {{ item.label }}
        <input
          v-bind:placeholder="item.label"
          type="datetime-local"
          v-bind:id="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      configurationArray: [
        {
          label: "Email",
          type: "email",
          id: "email"
        },
        {
          label: "Alternate Email",
          type: "email",
          id: "altEmail"
        },
        {
          label: "First Name",
          type: "text",
          id: "firstName"
        },
        {
          label: "Last Name",
          type: "text",
          id: "lastName"
        },
        {
          label: "DateOfBirth",
          type: "date",
          id: "date"
        },
        {
          label: "DateTimeOfBirth",
          type: "datetime-local",
          id: "date"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
