import { connect, ConnectedProps } from 'react-redux';
import { showModal } from 'SiteRedux/SiteReducers/actions';

const mapDispatchToProps = {
    dispatchShowModal: showModal,
};
  
export const modalConnector = connect(undefined, mapDispatchToProps);
  
export type modalProps = {} & ConnectedProps<typeof modalConnector>;
