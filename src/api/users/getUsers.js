import axios from 'axios'

// DOMAIN URL
const DOMAIN = 'https://reqres.in/'

/**
 * getUsers :: none => Promise
 *
 * Make a request for getting the users.
 * @return {Promise} Promise value which either resolved or rejected.
 */
export const getUsers = () => axios.get(`${DOMAIN}/api/users`)
