import router from "../../router";

const state = {
    person: null,
    people: null,
}

const getters = {
    person: () => state.person,
    people: () => state.people,
}

const actions = {
    getPeople({state, commit, dispatch}) {
        axios.get('/api/people').then(res => {
            commit('setPeople', res.data.data)
        })
    },
    getPerson({state, commit, dispatch}, id) {
        axios.get(`/api/people/${id}`).then(res => {
            commit('setPerson', res.data.data)
        })
    },
    deletePerson({state, commit, dispatch}, id) {
        axios.delete(`/api/people/${id}`).then(res => {
            dispatch('getPeople')
        })
    },
    updatePerson({}, data) {
        this.editPersonId = null
        axios.patch(`/api/people/${data.id}`, {
            name: data.name,
            age: data.age,
            job: data.job,
        }).then(res => {
            router.push({
                name: 'person.show',
                params: {
                    id: data.id,
                },
            })
        })
    },
    storePerson({}, data) {
        axios.post('/api/people', {
            name: data.name,
            age: data.age,
            job: data.job,
        }).then(res => {
            router.push({name: 'person.index'})
        })
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    },
}

export default {
    state,
    mutations,
    getters,
    actions
}
