import React from 'react'
import { TextField, Button } from '@material-ui/core'
import Flexbox from 'flexbox-react'
import { useForm } from '../../../form'


const SimpleForm = ({ submit }) => {
  const [fields, form] = useForm({
    fields: [
      { name: 'fullName', label: 'Full Name' },
      { name: 'nickname', label: 'Nickname' },
    ],
    submit,
    options: {
      id: 'simple',
    },
  })

  return (
    <form.Form id={form.id}>
      <Flexbox flexDirection='column'>
        <TextField {...fields.fullName} />
        <TextField {...fields.nickname} />
      </Flexbox>
      <Button type='submit' onClick={form.submit}>Submit</Button>
    </form.Form>
  )
}

export { SimpleForm }
