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
            <input :disabled="!isDisabled" @click.prevent="update" type="submit" class="btn btn-primary" value="Update">
        </div>
    </div>
</template>

<script>
export default {
    name: "Edit",
    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },
    mounted() {
        this.getPerson()
    },
    computed: {
        isDisabled() {
            return this.name && this.age && this.job
        },
    },
    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`).then(res => {
                this.name = res.data.data.name
                this.age = res.data.data.age
                this.job = res.data.data.job
            })
        },
        update(id) {
            this.editPersonId = null
            axios.patch(`/api/people/${this.$route.params.id}`, {
                name: this.name,
                age: this.age,
                job: this.job,
            }).then(res => {
                this.$router.push({
                    name: 'person.show',
                    params: {
                        id: this.$route.params.id,
                    },
                })
            })
        },
    },
}
</script>

<style scoped>

</style>
