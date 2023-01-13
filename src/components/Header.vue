<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "../store/index.js";
const store = useStore();
const number = ref(0)
number.value = store.titles.length
const props = defineProps({
    prop: String,
    prop2: String,

});
let newCss = props.prop;
let anotherProp = props.prop2;
const router = useRouter()

const toHome = () => {
    router.push("./")
}
const redirect = () => {
    router.push("./login");
}
const toCheckout = () => {
    router.push("./checkout")
}
const backToStore = () => {
    router.push("./store")
}

</script>

<template>
    <div class="navbar">
        <img class="homeImg" src="\src\assets\pngtree-neon-camera-yellow-line-camera-icon-png-image_6840510.png" />
        <h1 @click="toHome()">9movies</h1>
        <input type="button" value="Login" @click="redirect()" />
        <button @click="backToStore()" class="back" :class="anotherProp">Continue Shopping</button>
        <img class="shoppingCart" :class="newCss" src="src\assets\yellow-shopping-cart-10905.png"
            @click="toCheckout()" />
        <h5 class="counter" :class="newCss">{{ number }}</h5>
    </div>
</template>

<style scoped>
* {
    margin: 0px;
}

h1 {
    font-size: 36px;
    font-family: 'Roboto Mono';
    color: rgb(177, 210, 59);
    margin-left: -60%;
    margin-top: 5%;
    height: 50%;
    width: 20%;
    z-index: 1;
    user-select: none;
    -webkit-user-drag: none;
}

.homeImg {
    margin-top: 2%;
    height: 100%;
    width: 10%;
    margin-left: 2%;
    filter: brightness(5);
    user-select: none;
    -webkit-user-drag: none;
}

.navbar {
    filter: contrast(110%) brightness(130%);
    align-items: center;
    display: flex;
    background-color: rgba(0, 0, 0, 0.593);
    justify-content: space-between;
    height: 20%;
    width: 100%;
    gap: 60%;
    box-shadow: 0px 1px 10px 5px rgb(177, 210, 59);
    position: fixed;
    top: -5%;
    z-index: 3;
    border-radius: 25px;
}

template {
    height: 100%;
    width: 100%;
}

input {
    margin-top: 2%;
    margin-right: 5%;
    height: 30%;
    width: 8%;
    border-radius: 10px;
    font-family: 'Ubuntu', 'Roboto Mono';
    background-color: rgba(0, 0, 0, 0.644);
    border-color: rgb(177, 210, 59);
    color: rgb(177, 210, 59);
    font-weight: 600;
    font-size: 18px;
}

input:hover {
    background-color: rgb(8, 43, 44);
    height: 33%;
    width: 9%;
    margin-right: 4.5%;
    font-size: 19px;

}

.shoppingCart {
    height: 50%;
    position: absolute;
    top: 35%;
    left: 80%;
    user-select: none;
    -webkit-user-drag: none;
    display: none;
}

.counter {
    color: rgb(177, 210, 59);
    position: absolute;
    left: 85%;
    user-select: none;
    -webkit-user-drag: none;
    display: none;
}

.back {
    position: absolute;
    left: 80%;
    top: 45%;
    height: 30%;
    width: 7%;
    border-radius: 10px;
    font-family: 'Ubuntu', 'Roboto Mono';
    background-color: rgba(0, 0, 0, 0.644);
    border-color: rgb(177, 210, 59);
    color: rgb(177, 210, 59);
    font-weight: 600;
    font-size: 16px;
    display: none;

}

.back:hover {
    background-color: rgb(8, 43, 44);
    height: 32%;
    width: 8%;
    left: 79.5%;
    font-size: 19px;
}

.show {
    display: inline !important;
}
</style>