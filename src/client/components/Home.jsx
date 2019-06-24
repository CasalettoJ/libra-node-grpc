import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Home(props) {
    const [lastResponse, setLastResponse] = useState(null);
    const [lastErr, setLastErr] = useState(null);

    function handleClick() {
        setLastResponse(null);
        setLastErr(null);
        axios
            .get(props.apiAddr)
            .then(response => {
                const { data } = response;
                if (data.error) {
                    setLastErr(data.error);
                } else {
                    setLastResponse(data.response);
                }
                console.log(response);
            })
            .catch(error => {
                setLastErr(error);
                console.log(error);
            });
    }

    return (
        <Fragment>
            <button
                style={{ position: "relative", left: "50px", top: "20px", width: "200px", height: "100px" }}
                type="button"
                onClick={handleClick}
            >
                Update to Latest Ledger
            </button>
            <br />
            <br />
            <br />
            {lastErr && <div> ERROR: {JSON.stringify(lastErr)}</div>}
            {lastResponse && (
                <div>
                    <h1>Latest Ledger:</h1>
                    <div>
                        <p>
                            <b>Version:</b> {lastResponse.ledgerInfoWithSigs.ledgerInfo.version}
                        </p>
                        <p>
                            <b>Transaction Accumulator Hash:</b>{" "}
                            {lastResponse.ledgerInfoWithSigs.ledgerInfo.transactionAccumulatorHash}
                        </p>
                        <p>
                            <b>Consensus Data Hash:</b> {lastResponse.ledgerInfoWithSigs.ledgerInfo.consensusDataHash}
                        </p>
                        <p>
                            <b>Consensus Block ID:</b> {lastResponse.ledgerInfoWithSigs.ledgerInfo.consensusBlockId}
                        </p>
                        <p>
                            <b>Epoch:</b> {lastResponse.ledgerInfoWithSigs.ledgerInfo.epochNum}
                        </p>
                        <p>
                            <b>Timestamp:</b> {lastResponse.ledgerInfoWithSigs.ledgerInfo.timestampUsecs}
                        </p>
                        <h3>Validators</h3>
                        {lastResponse.ledgerInfoWithSigs.signaturesList.map(x => (
                            <Fragment>
                                <div>
                                    Validator ID: {x.validatorId}
                                    <br />
                                    Signature: {x.signature}
                                </div>
                                <br />
                                <br />
                            </Fragment>
                        ))}
                    </div>
                </div>
            )}
        </Fragment>
    );
}

Home.propTypes = {
    apiAddr: PropTypes.string.isRequired
};

export default Home;
