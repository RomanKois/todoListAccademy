<template>
    <div v-if="visible==visibility" class="item">
        <h4 class="text-center">{{ name }}</h4>
        <input v-if="visibility == true" type="button" value="Odober" @click="removeFromVisible()">
        <input v-if="visibility == false" type="button" value="Pridaj" @click="addToVisible()">

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
        visibility: Boolean
    },
    data() {
        return {
            visible: true,
            changeText: ''
        };
    },
    methods: {
        async post(){
            axios.post('/public/mock/mocks/api/items/1.json', JSON.stringify(this.name))
        },
        removeFromVisible(){
            this.visible = false
            this.$store.commit('decrement')
            this.post()
        },
        addToVisible(){
            this.visible = true
            this.$store.commit('increment')
            this.post()
        },
        change(){
            this.$store.commit('change', [this.name, this.changeText])
            this.changeText = ''

        }
    }
};
</script>
  
<style scoped>


</style>