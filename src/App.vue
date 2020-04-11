<template>
  <div id="app">
    <h3>Firebase Data</h3>
    {{ firebaseData }}

    <h3>Form Data</h3>
    {{ formData }}

      <input type="text"   name="name">
      <input type="number" name="age">
      <input type="email"  name="email">

      <input type="text"   name="name"  v-model="formData.name"  />
      <input type="number" name="age"   v-model="formData.age"   />
      <input type="email"  name="email" v-model="formData.email" />
      <button type="submit">SUBMIT</button>

    </form>
    <div v-if="state == 'synced'">
      Firestore is synced
  </div>
    <div v-else-if="state == 'modified'">
      Data is modified and will be synced later
    </div>
    <div v-else-if="state == 'error'">
      Error!!! {{ this.errorMessage }}
    </div>
    <div v-else-if="state == 'loading'">
      Loading...
    </div>
  </div>
</template>

<script>
import { db } from './firebase'
const docPath = 'contacts/dima'

export default {
  data() {
    return {
      firebaseData: null,
      formData: {}
    }
  },
  firestore() {
    return {
      firebaseData: db.doc(docPath)
    }
  created: async function() {
    const doc = db.doc(docPath)
    let data = (await doc.get()).data()

    if (!data)
      data = { name: '', age: '', email: '' }

    this.formData = data
    this.state = 'synced'
  }
}
</script>

<style>
</style>
