import React from 'react'
import { Card, Image, Pagination, Icon } from 'semantic-ui-react'

import getUsers from '../function/GetUsers';

import './index.css'

export default class ShowUsers extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            activePage: 1
        }
    }

    componentDidMount = async () => {
        const response = await getUsers()

        await this.setState({
            users: response.data.data
        })

        console.log(this.state.users)
    }

    handlePaginationChange = async (e, { activePage }) => {
        await this.setState({ activePage })

        const response = await getUsers(`page=${activePage}`)

        await this.setState({
            users: response.data.data
        })

        console.log(this.state.users)
    }

    render() {
        return (
            <div className='container'>
                <div className='card-group'>
                    {this.state.users.map((user, index) => {
                        return (
                            <Card key={user.id} className='card'>
                                <Image src={user.avatar} />
                                <Card.Content>
                                    <Card.Header>{user.first_name} {user.last_name}</Card.Header>
                                </Card.Content>
                            </Card>
                        )
                    })}
                </div>

                <Pagination className='pagination'
                    activePage={this.state.activePage}
                    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                    prevItem={{ content: <Icon name='angle left' />, icon: true }}
                    nextItem={{ content: <Icon name='angle right' />, icon: true }}
                    totalPages={4}
                    onPageChange={this.handlePaginationChange}
                />
            </div>
        )
    }
}