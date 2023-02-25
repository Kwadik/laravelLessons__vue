<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
                <ShowComponent :person="person" :ref="`show_${person.id}`"></ShowComponent>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import EditComponent from "./EditComponent";
import ShowComponent from "./ShowComponent";
export default {
    name: "IndexComponent",
    data() {
        return {
            people: null,
            editPersonId: null,
        }
    },
    mounted() {
        this.getPeople()
    },
    methods: {
        getPeople() {
            axios.get('/api/people').then(res => {
                this.people = res.data
            })
        },
        isPersonEdit(id) {
            return this.editPersonId === id
        },
    },
    components: {
        ShowComponent,
        EditComponent,
    }
}
</script>

<style scoped>

</style>
