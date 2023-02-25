<template>
    <tr :class="!this.$parent.isPersonEdit(person.id) ? '' : 'd-none'">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td><a @click.prevent="changeEditedPerson(person)" href="#" class="btn btn-success">Edit</a></td>
        <td><a @click.prevent="deletePerson(person.id)" href="#" class="btn btn-danger">Delete</a></td>
    </tr>
</template>

<script>
export default {
    name: "ShowComponent",
    data() {
        return {
        }
    },
    props: [
        'person',
    ],
    mounted() {
    },
    methods: {
        deletePerson(id) {
            this.$parent.editPersonId = null
            axios.delete(`/api/people/${id}`).then(res => {
                this.$parent.getPeople()
            })
        },
        changeEditedPerson(person) {
            this.$parent.editPersonId = person.id
            let componentRef = `edit_${person.id}`
            this.$parent.$refs[componentRef][0].editPersonName = person.name
            this.$parent.$refs[componentRef][0].editPersonAge = person.age
            this.$parent.$refs[componentRef][0].editPersonJob = person.job
        },
    },
}
</script>

<style scoped>

</style>
