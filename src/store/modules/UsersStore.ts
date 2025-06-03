import UserService from "../../plugins/api/services/UserService.js";

const userModule = {
    namespaced: true,
    state: {
        currentUser: {},
    },
    getters: {
        currentUser: state => {
            console.log(state);
            return  state.currentUser},
    },
    mutations: {
        SET_CURRENT_USER(state, payload) {
            state.currentUser = payload;
            state.currentUser.fullShortName = state.currentUser.lastName + " " + state.currentUser.name[0] + '.' + state.currentUser.secondName[0] + ".";

        }
    },
    actions: {
        async INIT_CURRENT_USER({ commit }, userId) {
            await UserService.getUserById(userId).then((response) => {
                commit('SET_CURRENT_USER', response)
            })
                .catch(error => {
                    console.error(error);
                    alert('Ошибка авторизации');
                })
        },
        async INIT_AUTORIZATION({commit, dispatch}, usersInfo) {
            await UserService.authorizationUser(usersInfo.login, usersInfo.password).then((response) => {
                alert(response.message);
                console.log(response)
                localStorage.setItem('currentUser', JSON.stringify(response.user.Id));
                dispatch('INIT_CURRENT_USER', response.user.Id);
            })
                .catch(error => {
                    console.error(error);
                    alert('Ошибка авторизации');
                })
        },
        async INIT_REGISTRATION({commit}, payload) {
            await UserService.createUser(payload)
                .then(response => {
                    console.log(response);
                    localStorage.setItem('currentUser', response.id);
                    commit('SET_CURRENT_USER', response);
                })
                .catch(error => {
                    console.error(error);

                })
        },
        async INIT_LOGOUT({commit}) {
            localStorage.removeItem("currentUser");
            commit('SET_CURRENT_USER', {});
        }
        

    },
}

export default userModule;