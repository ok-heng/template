<template>
    <div class="home-container">
        <Header />
    </div>
</template>

<script>
import Header from '@/components/home/header'

export default {
    name: 'home',
    components: {
        Header
    }
}
</script>

<style lang="scss">
.home-container {
    display: flex;
    flex-direction: column;
}
</style>


