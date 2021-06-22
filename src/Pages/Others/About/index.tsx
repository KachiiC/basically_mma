import React from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { showModal } from 'SiteRedux/SiteReducers/actions';

const mapDispatchToProps = {
    dispatchShowModal: showModal,
};
  
const connector = connect(undefined, mapDispatchToProps);
  
type AppProps = {} & ConnectedProps<typeof connector>;

const About = (props: AppProps) => {

    const { dispatchShowModal } = props;

    const dispatchLogic = () => dispatchShowModal(
        {
            content: <h1>This is the Content</h1>
        }
    )

    return (
        <>
            <div className="text-center">
                <p>
                    This is a website is designed with react and django rest framework 
                </p>
                <button onClick={dispatchLogic}>
                    Show Modal
                </button>
            </div>
        </>
    )
}

export default connector(About);