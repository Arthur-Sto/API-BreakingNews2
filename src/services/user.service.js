import User from '../models/User.js';

//onde acessamos o banco
const createService = (body) => User.create(body);
// atribui a const create a função de criar o usuario conforme as infos d body

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
); //função inline, se botar chaves, precisa de return

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
};