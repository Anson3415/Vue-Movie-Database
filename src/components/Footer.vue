<script setup>
</script>

<template>
    <div class="container">
        <div class="image">
            <img src="\src\assets\87390.png" />
            <img src="\src\assets\60580.png" />
            <img src="\src\assets\49354.png" />
        </div>
        <div class="name">
            <img class="logo" src="\src\assets\pngtree-neon-camera-yellow-line-camera-icon-png-image_6840510.png" />
            <h1>9movies</h1>
        </div>
        <div class="block1">
            <h2>About</h2>
            <h4>Blog</h4>
            <h4>Application</h4>
            <h4>FAQ</h4>
            <h4>Documentation</h4>
        </div>
        <div class="block2">
            <h2>Company</h2>
            <h4>Support</h4>
            <h4>Careers</h4>
            <h4>Parntnerships</h4>
            <h4>Pricing</h4>
        </div>
        <div class="follow">
            <h3>Follow Us</h3>
        </div>
        <div class="copyright">
            <h5>Copyright @ 2022 9movies, Inc. All rights reserved</h5>
            <h5>Privacy Policy &nbsp; &nbsp; &nbsp; Terms of Use</h5>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0px;
    color: rgba(220, 253, 101, 0.678);
    text-shadow: 4px 4px 3px rgb(13, 73, 76);
    user-select: none;
    -webkit-user-drag: none;
}

.container {
    opacity: 80%;
    height: 200px;
    width: 100%;
    box-shadow: inset 0px 120px 200px rgb(175, 199, 91);
    background-color: rgb(13, 73, 76);
    display: grid;
    justify-content: center;
    gap: 1%;
    grid-template-columns: [first] 24% [line2] 24% [line3] 24% [line4] 24% [end];
    grid-template-rows: [row1-start] 29% [row1-end] 29% [third-line] 29% [fourth-line] 10%[last-line];
    filter: contrast(110%) brightness(130%);
}

.image {
    box-shadow: 10px 10px 20px 2px rgb(13, 73, 76);
    display: flex;
    grid-column: 4 /span 1;
    grid-row: 3/span 1;
    justify-content: space-evenly;
    border-radius: 25px;
    width: 70%;
    padding-top: 2%;
    padding-bottom: 2%;
}

h1 {
    text-shadow: 4px 4px 3px rgb(13, 73, 76);
}

.name {
    display: flex;
    grid-column: 1/span 1;
    grid-row: 1/ span 1;
}

.logo {
    height: 100px;
}

.copyright {
    grid-column: 1 /span 4;
    grid-row: 4/ span 1;
    display: flex;
    justify-content: space-between;
}

.block1 {
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    grid-column: 2 /span 1;
    grid-row: 1/ span 3;
}

.block2 {
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    grid-column: 3 /span 1;
    grid-row: 1/ span 3;
}

.follow {
    grid-column: 4 /span 1;
    grid-row: 2 / span 1;
    position: relative;
    top: 40%;
}

div h1 {
    position: relative;
    top: 20px;
}
</style>