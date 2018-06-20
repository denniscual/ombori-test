import { assoc, compose } from 'ramda'

/**
 * setUsers :: Array => Function
 *
 * A point-free function which accepts payload then  update the users state using the
 * given payload
 * @param {Array} payload users array
 * @return {Function} An Updater function which accepts the previous state and return state change object.
 * @function
 */
export const setUsers = (payload) => assoc('users', payload)

/**
 * setProcess :: Object => Function
 *
 * A point-free function which accepts payload then update the process state using the
 * given payload
 * @param {Object} payload process object
 * @return {Function} An Updater function which accepts the previous state and return state change object.
 * @function
 */
export const setProcess = ({
  isLoading = false,
  success = false,
  error = null
}) => assoc('process', {
  isLoading,
  success,
  error
})

/**
 * setUsersAndProcess :: Object => Function
 *
 * A point-free function which accepts payload and update the users and process object state.
 * setUsersAndProcess is composed by setUsers and setProcess (Function composition).
 * @param {Object} payload object which has a properties of users and process
 * @return {Function} An updater functoin which accepts the previous state and return state change object.
 * @function
 */
export const setUsersAndProcess = (payload) => compose(
  setUsers(payload.users),
  setProcess(payload.process)
)
