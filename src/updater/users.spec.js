import { merge, path, compose } from 'ramda'
import { setUsers, setProcess, setUsersAndProcess } from './users'

// Helper function for creating test/fake state
const getState = ({
  users = [],
  process = {}
}) => {
  // create new process object which handles default and updated values of process object.
  const newProcess = merge(process, {
    isLoading: false,
    success: false,
    error: null,
    ...process
  })

  return {
    users,
    process: newProcess
  }
}

// initial state
const state = getState({})

describe('setUsers', () => {
  it('should create an object which update the users state', () => {
    // update the state using setUsers.
    const received = setUsers(['irish', 'dennis'])(state)
    // creating expected state
    const expected = getState({users: ['irish', 'dennis']})
    expect(received).toEqual(expected)
  })
})

describe('setProcess', () => {
  it('should create an object which update the process state', () => {
    // test data for process object.
    const testProcess = {
      isLoading: true, success: true
    }
    // update the state using setProcess.
    const received = setProcess(testProcess)(state)
    // creating expected state
    const expected = getState({process: testProcess})
    expect(received).toEqual(expected)
  })

  it('should return an equal error message', () => {
    const error = new Error('Error')
    // get the value assigns in error prop of process object
    const received = compose(path(['process', 'error', 'message']), setProcess({error}))(state)
    const expected = 'Error'
    expect(received).toBe(expected)
  })
})

describe('setUsersAndProcess', () => {
  it('should create an object which update the users and process state', () => {
    const testState = {
      users: ['irish', 'dennis'],
      process: {
        isLoading: true,
        success: true
      }
    }
    const received = setUsersAndProcess(testState)(state)
    const expected = getState(testState)
    expect(received).toEqual(expected)
  })
})
