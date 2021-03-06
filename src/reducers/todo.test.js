import { todo } from './todo'
import { localAddItem as addItem, localRemoveItem as removeItem, localToggleDone as toggleDone } from '../actions/todo'

describe('todo reducer', () => {

  it('reduce without state initializes it', () => {
    expect(todo(undefined, { type: 'blah' })).toEqual({
      items: []
    })
  })

  it('adds an an item', () => {
    const action = addItem({ _id: 0, text: 'ir al banio', done: false })
    expect(todo(undefined, action)).toEqual({
      items: [{ _id: 0, text: 'ir al banio', done: false }],
    })
  })

  it('removes an an item', () => {
    const state = {
      items: [
        { _id: 23, text: 'comprar leche', done: true }
      ]
    }
    const action = removeItem(23)
    expect(todo(state, action)).toEqual({
      items: [],
    })
  })

  it('toggles to done', () => {
    const state = {
      items: [
        { _id: 23, text: 'comprar leche', done: false }
      ]
    }
    const action = toggleDone(23)
    expect(todo(state, action)).toEqual({
      items: [{ _id: 23, text: 'comprar leche', done: true }],
    })
  })

  it('toggles to undone', () => {
    const state = {
      items: [
        { _id: 23, text: 'comprar leche', done: true }
      ]
    }
    const action = toggleDone(23)
    expect(todo(state, action)).toEqual({
      items: [{ _id: 23, text: 'comprar leche', done: false }],
    })
  })
  
})
