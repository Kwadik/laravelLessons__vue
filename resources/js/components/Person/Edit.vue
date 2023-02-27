<template>
    <div v-if="person" class="w-25">
        <div class="mb-3">
            <input type="text" class="form-control" v-model="person.name" id="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" v-model="person.age" id="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" v-model="person.job" id="job" placeholder="job">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('updatePerson', person)" type="submit" class="btn btn-primary" value="Update">
        </div>
    </div>
</template>

<script>
export default {
    name: "Edit",
    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },
    computed: {
        isDisabled() {
            return this.person.name && this.person.age && this.person.job
        },
        person() {
            return this.$store.getters.person
        },
    },
    methods: {
    },
}
</script>

<style scoped>

</style>
