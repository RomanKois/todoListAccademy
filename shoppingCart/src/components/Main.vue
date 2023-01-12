<template>
    <div class="container getpost">
        <div class="row">
            <button class="btn" @click="get">Get</button>
            <button class="btn" @click="post">Post</button>
        </div>
    </div>
    <input v-model="text" id="input" class="input">
    <input type="button" value="Pridaj" @click="appendToList()">
    <div class="cointainer">
        <div class="row" v-for="i in items.length" :key="i">
                <Item  :name=items[i-1] :visibility=this.visibility></Item>
        </div>
    </div> 
    <button class = "btn" @click="seeRemoved()"> {{buttonName}} </button>
</template>
  
<script >
import Item from './Item.vue';
import axios from 'axios'
import { onMounted } from 'vue';


export default {
    name: "main",
    components: {
        Item
    },
    data() {
        return {
            items: [],
            text: '',
            buttonName: 'See History',
            visibility: true
        };
    }, 
    methods: {
        async get(){
            let temp = await axios.get('/public/mock/mocks/api/items/1.json')
            this.items = temp.data
        },
        async post(){
            axios.post('/public/mock/mocks/api/items/1.json', JSON.stringify(this.items))
        },
        appendToList(){
            this.items.push(this.text)
            this.text = ''
        },      
        seeRemoved(){
            if(this.visibility){
                this.visibility = false
                this.buttonName = 'See toDo'
            }else{
                this.visibility = true
                this.buttonName = 'See Removed'
            }

        }
    },mounted(){
        this.get()

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
    margin: 10px;
}

.input{
    margin-right: 10px;
}

.getpost{
    margin: 10px;
}
</style>