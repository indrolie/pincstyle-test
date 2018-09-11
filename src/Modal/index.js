import React from 'react';
import ReactModal from 'react-modal-resizable-draggable';

import './index.css';

export default class MyModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modals: []
        };
    }

    deleteModal = async (index) => {
        delete this.state.modals[index - 1]

        console.log(this.state.modals)
    }

    addModal = async () => {
        await this.setState({
            modals: this.state.modals.concat(
                <ReactModal key={this.state.modals.length} initWidth={400} initHeight={200} isOpen={true}>
                    <h3>My Modal</h3>
                    <div className="body">
                        <p>This is the modal's body.</p>
                    </div>
                    <button onClick={() => this.deleteModal(this.state.modals.length)} >
                        Close modal
                    </button>
                </ReactModal>
            )
        })
        console.log(this.state.modals)
    }

    render() {
        return (
            <div>
                <button onClick={this.addModal} className='button-add'>
                    Add modal
                </button>
                {this.state.modals}
            </div>
        );
    }
}
