<template>
  <div id="app">
    <h3>Firebase Data</h3>
    {{ firebaseData }}

    <form>

      <input type="text"   name="name">
      <input type="number" name="age">
      <input type="email"  name="email">

      <button type="submit">SUBMIT</button>

    </form>
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
  }
}
</script>

<style>
</style>
