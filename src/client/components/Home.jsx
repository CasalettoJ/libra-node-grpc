import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Home(props) {
    const [lastResponse, setLastResponse] = useState({});
    const [lastErr, setLastErr] = useState({});

    function handleClick() {
        axios
            .get(props.apiAddr)
            .then(response => {
                setLastResponse(response);
                console.log(response);
            })
            .catch(error => {
                setLastErr(error);
                console.log(error);
            });
    }

    return (
        <Fragment>
            <button type="button" onClick={handleClick}>
                Update to Latest Ledger
            </button>
            {lastErr && <div> ERROR: {JSON.stringify(lastErr)}</div>}
            {lastResponse && (
                <div>
                    Latest Ledger: <div>{JSON.stringify(lastResponse)}</div>
                </div>
            )}
        </Fragment>
    );
}

Home.propTypes = {
    apiAddr: PropTypes.string.isRequired
};

export default Home;
