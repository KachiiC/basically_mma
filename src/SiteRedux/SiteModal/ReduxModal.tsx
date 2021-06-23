import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { hideModal } from '../SiteReducers/actions';
import { RootState } from '../SiteReducers/reducers';
import CloseButton from './CloseButton';
import './ReduxModal.css';

const mapStateToProps = (state: RootState) => ({
    modal: state.modal.modal
})

const mapDispatchToProps = {
    dispatchHideModal: hideModal
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ModalProps = {} & ConnectedProps<typeof connector>

const SiteReduxModal = (props: ModalProps) => {

    const { dispatchHideModal, modal } = props
  
    if (!modal) {
        return null
    }
  
    const onCloseButtonClick = () => dispatchHideModal()
  
    return (
        <div className="site-overlay w-100 h-100">
            <div className="site-modal-window w-80 h-80" 
                style={{"width": `${modal.width}`}}
            >
                <CloseButton click={onCloseButtonClick} />
                <div className="site-overflow site-modal-content">
                    {modal.content}
                </div>
            </div>
        </div>
    )
}

export default connector(SiteReduxModal);