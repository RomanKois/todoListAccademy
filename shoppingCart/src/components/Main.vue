<template>
    
    <input v-model="text" id="input">
    <input type="button" value="Pridaj" @click="appendToList()">
    <div class="cointainer">
        <div class="row" v-for="i in items.length" :key="i">
            <div v-if="visible[i-1]==1" class="item">
                <Item  :name=items[i-1]></Item>
                <input type="button" value="Odober" @click="removeFromVisible(i-1)">
            </div>
        </div>
    </div> 
</template>
  
<script >
import Item from './Item.vue';
export default {
    name: "main",
    components: {
        Item
    },
    data() {
        return {
            items: [],
            visible: [],
            text: '',
            
        };
    }, 
    methods: {
        appendToList(){
            this.items.push(this.text)
            this.visible.push(1)
        },

        removeFromVisible(index){
            this.visible[index] = 0
        }
       


    }
};
</script>
  
<style scoped>
.item{
    width: 60%;
    height: 5rem;
    background-color: rgb(59, 59, 59);
    margin: 0 auto;
    margin-top: 10px;
}

</style>