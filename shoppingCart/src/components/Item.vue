<template>
    <div v-if="visible==visibility" class="item">
        <h4 class="text-center">{{ name }}</h4>
        <input v-if="visibility == true" type="button" value="Odober" @click="removeFromVisible()">
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
        };
    },
    methods: {
        async post(){
            axios.post('/public/mock/mocks/api/items/1.json', JSON.stringify(this.name))
        },
        removeFromVisible(){
            this.visible = false
            this.post()
        },
    }
};
</script>
  
<style scoped>


</style>