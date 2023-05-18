import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Card, Alert } from 'react-bootstrap';
import { Link, useNavigate  } from "react-router-dom";
import { getDocument } from '../../api/document';
const QrCodeReader = ({ buildingCodeInput, setBuildingCodeInput }) => {
    const [data, setData] = useState(buildingCodeInput);
    const navigate = useNavigate();
function result () {
if(data!=null){
  
    window.location.replace(data);
}

}
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
                                
                            }, 100);
                        }

                        if (error) {
                            console.info(error);
                        }
                    }}
                />
                
                {data && (
                    <Alert variant="secondary">QR Kod Sonucu: {data}</Alert>
                )}
                {result()}
            </Card>
        </>
    );
};

export default QrCodeReader;
