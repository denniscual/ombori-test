import { assoc, compose } from 'ramda'

/**
 * setUsers :: Array => Function
 *
 * A point-free function which accepts payload then  update the users state using the
 * given payload
 * @param {Array} users payload
 * @return {Function} An Updater function which accepts the previous state and return state change object.
 * @function
 */
export const setUsers = (payload) => assoc('users', payload)

/**
 * setProcess :: Object => Function
 *
 * A point-free function which accepts payload then  update the process state using the
 * given payload
 * @param {Array} process payload
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

export const setUsersAndProcess = (payload) => compose(
  setUsers(payload.users),
  setProcess(payload.process)
)
