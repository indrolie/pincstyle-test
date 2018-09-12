import React from 'react'
import { Form, Button, Modal } from 'semantic-ui-react'

import login from '../function/Login'

import './index.css'

export default class MyLoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            username: this.state.username,
            password: this.state.password
        }

        const response = await login(data)

        if (response.request.status === 200) {
            this.setState({
                message: 'Login successful'
            })
        } else {
            this.setState({
                message: 'Login failed'
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit} className='form-login'>
                    <div className='field-login'>
                        <Form.Field>
                            <label>Email</label>
                            <input name='username' type='text' placeholder='First Name' onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input name='password' type='password' placeholder='Last Name' onChange={this.handleChange} />
                        </Form.Field>
                    </div>
                    <Modal
                        trigger={<Button type='submit'>Submit</Button>}
                        header='Information'
                        content={this.state.message}
                        actions={[{ key: 'Ok', content: 'Ok', positive: true }]}
                    />
                </Form>
            </div>
        )
    }
}