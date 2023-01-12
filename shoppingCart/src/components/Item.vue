<template>
    <div v-if="visible==visibility" class="item">
        <h4 class="text-center">{{ name }}</h4>
        <input v-if="visibility == true" type="button" value="Odober" @click="removeFromVisible()">
    </div>
</template>
  
<script >
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
        removeFromVisible(){
            this.visible = false
        },
    }
};
</script>
  
<style scoped>


</style>