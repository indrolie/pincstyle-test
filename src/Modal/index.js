import React from 'react'
import ReactModal from 'react-modal-resizable-draggable'
import { Icon, Grid } from 'semantic-ui-react'

import './index.css';

export default class MyModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modals: []
        };
    }

    deleteModal = async (index) => {
        delete this.state.modals[index]

        await this.setState({
            modals: this.state.modals
        })

        console.log(this.state.modals)
    }

    addModal = async () => {
        await this.state.modals.push('')

        await this.setState({
            modals: this.state.modals
        })

        await console.log(this.state.modals)
    }

    render() {
        return (
            <div>
                <button onClick={this.addModal} className='button-add'>
                    Add modal
                </button>
                {this.state.modals.map((modal, index) => {
                    return (
                        <ReactModal key={index} initWidth={400} initHeight={200} isOpen={true}>
                            <div className="content">
                                <div className="header">
                                    <Grid>
                                        <Grid.Column floated='left' width={5}>
                                            <label>Welcome</label>
                                        </Grid.Column>
                                        <Grid.Column floated='right' className='icon-close'>
                                            <Icon name='close' onClick={() => this.deleteModal(index)} />
                                        </Grid.Column>
                                    </Grid>
                                </div>
                                <div className="body">
                                    <p>Hello there...</p>
                                </div>
                            </div>
                        </ReactModal>
                    )
                })}
            </div>
        );
    }
}
