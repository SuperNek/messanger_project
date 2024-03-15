export const login = async (req, res) => {
    try {
        const {fullname, username, password, confirmPassword} = req.body;

    } catch (error) {
        console.log(error)
    }
}

export const logout = (req, res) => {
    res.send('Logout')
}

export const register = (req, res) => {
    res.send('Register')
}