import { validateForm } from './validateForm'
import { validateFields } from './validateFields'
import { validateAll } from './validateAll'
import { mergeErrors } from './mergeErrors'

jest.mock('./validateForm')
jest.mock('./validateFields')
jest.mock('./mergeErrors')

let state, fieldData, validate, getAllValues
beforeEach(() => {
  state = 'the state'
  fieldData = 'the field data'
  getAllValues = 'i will get all values'
  validate = jest.fn()

  const formErrors = {
    nickname: 'nickname, error',
    colors: [
      { color: 'color 0 error' },
    ],
  }
  const fieldErrors = {
    colors: [
      null,
      { color: 'color 1 error' },
    ],
  }

  validateForm.mockReturnValue(formErrors)
  validateFields.mockReturnValue(fieldErrors)
  mergeErrors.mockReturnValue('mergedErrors')
})

test('merges form and field errors, dispatches results', () => {
  expect(validateAll(state, fieldData, validate, getAllValues)).toEqual('mergedErrors')
  expect(validateForm.mock.calls[0]).toMatchSnapshot()
  expect(validateFields.mock.calls[0]).toMatchSnapshot()
})
