import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Card, Alert } from 'react-bootstrap';

const QrCodeReader = ({ buildingCodeInput, setBuildingCodeInput }) => {
    const [data, setData] = useState(buildingCodeInput);

    return (
        <>
            <Card>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result.text);
                            setBuildingCodeInput(result.text);
                            console.log(result);
                        }

                        if (error) {
                            console.info(error);
                        }
                    }}
                />
                {data && (
                    <Alert variant="secondary">QR Kod Sonucu: {data}</Alert>
                )}
            </Card>
        </>
    );
};

export default QrCodeReader;
