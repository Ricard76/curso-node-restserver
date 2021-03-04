const { response } = require("express")

const usuariosGet = (req, res) => {

    const { q = null, nombre = "no name", apikey = " no apikey", page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'get API - Controller',
        q, 
        nombre, 
        apikey, 
        page, 
        limit
    });
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API - Controller',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controller', 
        id
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    });
}

module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete, 
    usuariosPatch
}