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
                <tr :class="!isPersonEdit(person.id) ? '' : 'd-none'">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td><a @click.prevent="changeEditedPerson(person)" href="#" class="btn btn-success">Edit</a></td>
                    <td><a @click.prevent="deletePerson(person.id)" href="#" class="btn btn-danger">Delete</a></td>
                </tr>
                <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import EditComponent from "./EditComponent";
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
        deletePerson(id) {
            this.editPersonId = null
            axios.delete(`/api/people/${id}`).then(res => {
                this.getPeople()
            })
        },
        changeEditedPerson(person) {
            this.editPersonId = person.id
            let componentRef = `edit_${person.id}`
            this.$refs[componentRef][0].editPersonName = person.name
            this.$refs[componentRef][0].editPersonAge = person.age
            this.$refs[componentRef][0].editPersonJob = person.job
        },
        isPersonEdit(id) {
            return this.editPersonId === id
        },
    },
    components: {
        EditComponent,
    }
}
</script>

<style scoped>

</style>
