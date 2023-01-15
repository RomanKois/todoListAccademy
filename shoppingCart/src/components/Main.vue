<template>
    <div class="container getpost">
        <div class="row">
            <button class="btn" @click="$store.dispatch('get')">Get</button>
            <button class="btn" @click="$store.dispatch('post')">Post</button>
            <p>Pocet nezmazanych prvkov: {{count}}</p>
        </div>
    </div>
    <input v-model="text" id="input" class="input">
    <input type="button" value="Pridaj" @click="appendToList()">
    <div class="cointainer">
        <div class="row" v-for="i in items.length" :key="i">
            <Item  :name=items[i-1] ></Item>
                
        </div>
    </div> 
    <button class = "btn" @click="seeRemoved()"> {{$store.state.buttonName}} </button>
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
            text: '',
            
        };
    },computed:{
        count(){return this.$store.state.count },
        items(){return this.$store.state.array}
    }, 
    methods: {  
        appendToList(){

            this.$store.dispatch('add', this.text)
            this.text = this.$store.state.text
            this.$store.dispatch('post')
        },      
        seeRemoved(){
           this.$store.commit('seeRemoved')
        }
    },mounted(){
        this.$store.dispatch('init')
        
    }
};
</script>
  
<style scoped>
.item{
    width: 60%;
    height: 8rem;
    background-color: rgb(59, 59, 59);
    margin: 0 auto;
    margin-top: 10px;
}


.btn{
    margin: 10px;
}

.input{
    margin-right: 10px;
}

.getpost{
    margin: 10px;
}
</style>