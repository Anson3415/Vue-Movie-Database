<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const redirect = () => {
    router.push("./login");
}
</script>

<template>
    <div class="navbar">
        <img src="\src\assets\pngtree-neon-camera-yellow-line-camera-icon-png-image_6840510.png" />
        <h1>9movies</h1>
        <input type="button" value="Login" @click = "redirect()"/>
    </div>
</template>

<style scoped>
h1 {
    font-size: 36px;
    font-family: 'Roboto Mono';
    color: rgb(204, 235, 94);
    margin-left: -60%;
    margin-top: 10%;
    height: 100%;
    width: 20%;
    z-index: 1;
    user-select: none;
    -webkit-user-drag: none;
}

img {
    margin-top: 2%;
    height: 100%;
    width: 10%;
    margin-left: 2%;
    filter: brightness(5);
    user-select: none;
    -webkit-user-drag: none;
}

.navbar {
    align-items: center;
    display: flex;
    background-color: rgba(0, 0, 0, 0.593);
    justify-content: space-between;
    height: 20%;
    width: 100%;
    gap: 60%;
    box-shadow: 0px 1px 10px 5px rgb(225, 255, 116);
    position: fixed;
    top: -5%;
    z-index: 1;
    border-radius: 25px;
    z-index: 1;
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
    border-color: rgb(225, 255, 116);
    color: rgb(225, 255, 116);
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
</style>