import startFetchAction, { startFetchActionName } from '../startFetchAction'
import Payload from '../../Payload'
import lolex from 'lolex'

describe('startFetchAction', () => {
  let clock
  const mockedTime = 0

  beforeEach(() => {
    clock = lolex.install({now: mockedTime, toFake: []})
  })

  afterEach(() => {
    clock.uninstall()
  })

  it('should have the right action name', () => {
    expect(startFetchActionName('endpoint')).toBe('START_FETCH_ENDPOINT')
  })

  it('should create the right action', () => {
    expect(startFetchAction('endpoint')).toEqual({type: startFetchActionName('endpoint'), payload: new Payload(true)})
  })
})
