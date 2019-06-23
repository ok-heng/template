<template>
    <div class="header-container">
        <div class="header-main">
            <div class="header-row1">
                <span>template</span>
                <van-image :src="images[0].image" fit="contain" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "header",
    data() {
        return {
            images: [
                {
                    image: require('@/assets/qq.png')
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.header-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .header-main {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.625rem;
        .header-row1 {
            display: flex;
        }
    }
}
</style>