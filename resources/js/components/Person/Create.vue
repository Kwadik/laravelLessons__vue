<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" class="form-control" v-model="name" id="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" v-model="age" id="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" v-model="job" id="job" placeholder="job">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('storePerson', {
                name,
                age,
                job,
            })" type="submit" class="btn btn-primary" value="Add">
        </div>
    </div>
</template>

<script>
export default {
    name: "Create",
    data() {
        return {
            'name': null,
            'age': null,
            'job': null,
        }
    },
    computed: {
        isDisabled() {
            return this.name && this.age && this.job
        },
    },
    methods: {
    },
}
</script>

<style scoped>

</style>
