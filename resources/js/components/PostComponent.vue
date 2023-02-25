<template>
    <div class="p-5">
        <CreateComponent></CreateComponent>
        <IndexComponent ref="index"></IndexComponent>
    </div>
</template>

<script>
import CreateComponent from "./CreateComponent";
import IndexComponent from "./IndexComponent";
export default {
    name: "PostComponent",
    components: {
        CreateComponent,
        IndexComponent,
    },
}
</script>

<style scoped>

</style>
