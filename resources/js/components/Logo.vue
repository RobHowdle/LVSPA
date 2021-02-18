<template>
<div>
    <h1 class="mb-8 text-3xl font-normal leading-none text-grey-darkest">
        Full Logo
    </h1>

    <div class="mb-8">
        <picture style="height:382px;" class="flex items-center justify-center block mb-6 rounded-lg shadow">
            <img src="/images/logo.svg" alt="logo">
        </picture>

        <div class="flex items-center justify-between"> 
            <p>Original Logo on <strong>white</strong> background</p>

            <a href="/images/logo.svg" class="px-8 py-2 text-xs font-bold text-black border rounded-full border-grey-light">logo.svg</a>
        </div>
    </div>

    <div>
        <picture style="height:382px;" class="flex items-center justify-center block mb-6 rounded-lg shadow bg-blue">
            <img src="/images/negative-logo.svg" alt="logo">
        </picture>

        <div class="flex items-center justify-between"> 
            <p>Negative Logo on <strong>white</strong> background</p>

            <a href="/images/logo.svg" class="px-8 py-2 text-xs font-bold text-black border rounded-full border-grey-light">logo.svg</a>
        </div>
    </div>
    
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>