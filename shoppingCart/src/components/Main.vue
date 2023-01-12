<template>
    
    <input v-model="text" id="input">
    <input type="button" value="Pridaj" @click="appendToList()">
    
    <div class="cointainer">
        <div class="row" v-for="i in items.length" :key="i">
            <div v-if="visible[i-1]==visibility" class="item">
                <Item  :name=items[i-1]></Item>
                <input v-if="visibility ==1" type="button" value="Odober" @click="removeFromVisible(i-1)">
            </div>
        </div>
    </div> 
    <button class = "btn" @click="seeRemoved()"> {{buttonName}} </button>
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
            buttonName: 'See History',
            visibility: 1
        };
    }, 
    methods: {
        appendToList(){
            this.items.push(this.text)
            this.visible.push(1)
            this.text = ''
        },

        removeFromVisible(index){
            this.visible[index] = 0
        },
        seeRemoved(){
            if(this.visibility == 1){
                this.visibility = 0
                this.buttonName = 'See toDo'
            }else{
                this.visibility = 1
                this.buttonName = 'See Removed'
            }

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


.btn{
    margin-top: 10px;
}
</style>