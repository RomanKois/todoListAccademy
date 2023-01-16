<template>
    <div  class="item">
        <h4 class="text-center">{{ name }}</h4>
        <input v-if="$store.state.visibility == true" type="button" value="Odober" @click="removeFromVisible()">
        <input v-if="$store.state.visibility == false" type="button" value="Pridaj" @click="addToVisible()">

        <input v-model="changeText" id="input" class="input">
        <input  type="button" value="Zmen nazov" @click="change()">
    
    </div>

</template>
  
<script >
import axios from 'axios';
export default {
    name: "item",
    props: {
        name: String,
    },
    data() {
        return {
            changeText: ''
        };
    },
    methods: {
        removeFromVisible(){
            this.$store.dispatch('remove', this.name)
        },
        addToVisible(){
            this.$store.dispatch('addRemoved', this.name)
        },
        change(){
            this.$store.dispatch('changeName', [this.name, this.changeText])
            this.changeText = ''

        }
    }
};
</script>
  
<style scoped>


</style>