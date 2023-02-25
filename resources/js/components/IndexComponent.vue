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
                </tr>
                <tr :class="isPersonEdit(person.id) ? '' : 'd-none'">
                    <th scope="row">{{ person.id }}</th>
                    <td><input v-model="editPersonName" type="text" class="form-control"></td>
                    <td><input v-model="editPersonAge" type="number" class="form-control"></td>
                    <td><input v-model="editPersonJob" type="text" class="form-control"></td>
                    <td><a @click.prevent="updatePerson(person.id)" href="#" class="btn btn-success">Update</a></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "IndexComponent",
    data() {
        return {
            people: null,
            editPersonId: null,
            editPersonName: '',
            editPersonAge: null,
            editPersonJob: '',
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
        updatePerson(editPersonId) {
            this.editPersonId = null
            axios.patch(`/api/people/${editPersonId}`, {
                name: this.editPersonName,
                age: this.editPersonAge,
                job: this.editPersonJob,
            }).then(res => {
                this.getPeople()
            })
        },
        changeEditedPerson(person) {
            this.editPersonId = person.id
            this.editPersonName = person.name
            this.editPersonAge = person.age
            this.editPersonJob = person.job
        },
        isPersonEdit(id) {
            return this.editPersonId === id
        },
    },
}
</script>

<style scoped>

</style>
