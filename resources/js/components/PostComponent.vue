<template>
    <div class="p-5">
        <CreateComponent></CreateComponent>
        <SinglePostComponent></SinglePostComponent>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
import CreateComponent from "./CreateComponent";
export default {
    name: "PostComponent",
    components: {
        SinglePostComponent,
        CreateComponent,
    },
}
</script>

<style scoped>

</style>
