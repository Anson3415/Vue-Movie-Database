<script setup>
const props = defineProps({
    class: String,
    id: String,

});

let elementClass = props.class;
let idclass = props.id;
</script>

<template>
    <img :class="idclass" src="\src\assets\497286.jpg" />
    <h1 :class="elementClass">All Your Favourite Movies All In One Place</h1>
</template>

<style scoped>
img {
    height: 100vh;
    width: 100%;
    opacity: 70%;
    user-select: none;
    -webkit-user-drag: none;
    filter: blur(0px) contrast(110%) brightness(130%);
}

h1 {
    filter: contrast(110%) brightness(130%);
    text-shadow: 4px 4px 3px rgb(13, 73, 76);
    color: rgb(177, 210, 59);
    font-size: 28px;
    user-select: none;
    -webkit-user-drag: none;
    height: 10vh;
    width: 1%;
    text-align: center;
    position: absolute;
    z-index: 1;
    top: 31%;
    left: 46%;
}

.store {
    display: none;

}

.gray {
    filter: brightness(50%);
}
</style>