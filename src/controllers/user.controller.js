import userService from '../services/user.service.js';

const create = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;
        //verifica se todos os campos existem
        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).send({ message: "Submit all fields for registration" })
        }

        const user = await userService.createService(req.body);
        //await manda esperrar retornar para prosseguir no codigo.

        if (!user) {
            return res.status(400).send({ message: "Error creating User" });
        }

        res.status(201).send({
            message: "User created sucessfuly",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
                background
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findAll = async (req, res) => {
    try {
        const Users = await userService.findAllService();

        if (Users.lenght === 0) {
            return res.status(400).send({ message: "There are no registared users" })
        }

        res.send(Users)
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findById = async (req, res) => {
    try {
        const user = req.user;
        res.send(user)
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;
        //verifica se todos os campos existem
        if (!name && !username && !email && !password && !avatar && !background) {
            res.status(400).send({ message: "Submit at least one field for update" })
        }

        const { id, user } = req

        await userService.updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        )

        res.send({ message: "User sucessfuly updated!" })
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export default { create, findAll, findById, update };