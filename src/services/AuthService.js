// export const register = (email, password, firstname, lastname, ) => {
//     return axios.post(API_URL + "signup", {
//         username,
//         email,
//         password,
//     });
// };


export const login = (email, password) => {

    const dataLogin = useQuery(loginUser, {
        variables: {
            email: username,
            passWord: password,
        },
        enabled: false
    })
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};
