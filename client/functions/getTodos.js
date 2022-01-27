const axios = require('axios');
require('dotenv').config();

exports.handler = async (event) =>{
    const GET_TODOS = `
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
  
    const {data} = await axios({
        url: 'https://graphql.fauna.com/graphql',
        method: 'post',
        headers: {     
            Authorization: `Bearer fnAEd6QNH6AASd4d4P17t4UPSxL_-Oxjgeyt6Vq7`
        },
        data: {
            query: GET_TODOS,
            variables: {},
        }
    })
    console.log(data);

    return {
        statusCode:200,
        body: JSON.stringify(data)
    }
   
}