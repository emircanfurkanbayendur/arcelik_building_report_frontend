import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Card, Alert } from 'react-bootstrap';
import getDocument from '../../api/getDocument';
const QrCodeReader = ({ buildingCodeInput, setBuildingCodeInput }) => {
    const [data, setData] = useState(buildingCodeInput);
    
    return (
        <>
            <Card>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setTimeout(() => {
                                debugger;
                                setData(result.text);
                                setBuildingCodeInput(result.text);
                                console.log(result.text);
                                var x =  getDocument(result.text);
                                console.log(x); 
                            }, 100);
                        }

                        if (error) {
                            console.info(error);
                        }
                    }}
                />
                {data && (
                    <Alert variant="secondary">QR Kod Sonucu: {data}
                    
                    </Alert>
                )}
            </Card>
        </>
    );
};

export default QrCodeReader;
