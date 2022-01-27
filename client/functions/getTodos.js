const axios = require('axios');
require('dotenv').config();

exports.handler = async (event) =>{
    const GET_LINKS = `
        query{
            allTodos{
                data {
                    name
                    _id
                    description
                    archived
                }
            }
        }`;

}