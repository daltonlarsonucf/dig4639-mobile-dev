import { Sum, AddList } from './MyMath.js'

describe("AddList", () => {

  test('Adds a list of numbers together', () => {
    let input = [1,2]
    let result = 3
    expect(AddList(input)).toBe(result)
  })

  test('Tests if empty array returns undefined', () => {
    let input = []
    expect(AddList(input)).toBeUndefined()
  })

  test('Tests if elements in array are numbers', () => {
    let input = [undefined, 1]
    expect(AddList(input)).toBeUndefined()
  })

  test('Tests if non-array returns undefined', () => {
    let input = 100
    expect(AddList(input)).toBeUndefined()
  })

})

describe("Sum", () => {

  test('Whether undefined is returned on invalid type', () => {
    expect(Sum(1, "Test")).toBeUndefined()
  })

  test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
  })

  test('produces the sum of 10 + 20, which should be 30', () => {
    expect(Sum(10, 20)).toBe(30)
  })
})

// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
