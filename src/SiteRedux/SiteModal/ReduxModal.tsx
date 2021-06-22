import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { hideModal } from '../SiteReducers/actions';
import { RootState } from '../SiteReducers/reducers';
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
        <div className="redux-modal-overlay">
            <div className="redux-modal">
            <span className="redux-modal-close" onClick={onCloseButtonClick}>
                &#10005;
            </span>
            {modal.content}
            </div>
        </div>
    )
}

export default connector(SiteReduxModal);