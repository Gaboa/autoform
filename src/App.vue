<template>
  <div id="app">
    <h3>Firebase Data</h3>
    {{ firebaseData }}
  
  </div>
</template>

<script>
import { db } from './firebase'
const docPath = 'contacts/dima'

export default {
  firestore() {
    return {
      firebaseData: db.doc(docPath)
    }
  }
}
</script>

<style>
</style>
