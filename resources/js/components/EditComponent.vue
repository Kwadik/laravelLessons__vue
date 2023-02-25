<template>
    <tr :class="this.$parent.isPersonEdit(person.id) ? '' : 'd-none'">
        <th scope="row">{{ person.id }}</th>
        <td><input v-model="editPersonName" type="text" class="form-control"></td>
        <td><input v-model="editPersonAge" type="number" class="form-control"></td>
        <td><input v-model="editPersonJob" type="text" class="form-control"></td>
        <td><a @click.prevent="updatePerson(person.id)" href="#" class="btn btn-success">Update</a></td>
    </tr>
</template>

<script>
export default {
    name: "EditComponent",
    data() {
        return {
            editPersonName: '',
            editPersonAge: null,
            editPersonJob: '',
        }
    },
    props: [
        'person',
    ],
    mounted() {
    },
    methods: {
        updatePerson(id) {
            this.$parent.editPersonId = null
            axios.patch(`/api/people/${id}`, {
                name: this.editPersonName,
                age: this.editPersonAge,
                job: this.editPersonJob,
            }).then(res => {
                this.$parent.getPeople()
            })
        },
    },
}
</script>

<style scoped>

</style>
