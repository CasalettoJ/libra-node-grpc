import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import LibraClient from "../../server/libra/libraclient"; // TODO : Have to move this to server and expose via REST endpoint

function Home(props) {
    const [lastResponse, setLastResponse] = useState({});
    const [lastErr, setLastErr] = useState({});
    const libraClient = new LibraClient(props.address);

    function handleLatestLedgerResponse(err, resp) {
        if (err) {
            setLastErr(err);
        } else {
            setLastResponse(resp);
        }
    }

    return (
        <Fragment>
            <button type="button" onClick={() => libraClient.UpdateToLatestLedger([], handleLatestLedgerResponse)}>
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
    address: PropTypes.string.isRequired
};

export default Home;
