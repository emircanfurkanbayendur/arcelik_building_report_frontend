import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Card, Row, Col, Figure } from 'react-bootstrap';

const fileTypes = ['JPG', 'PNG', 'GIF'];

function DragDrop({ uploadedImage, setUploadedImage }) {
    const handleChange = (file) => {
        setUploadedImage(file);
        console.log(file);
    };
    console.log(`uploadedImage: ${uploadedImage}`);
    return (
        <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            label="Okutmak istediğiniz Qr Kod görselini buraya sürükleyiniz."
            hoverTitle="Buraya bırak."
            children={
                <Row>
                    <Card>
                        <Card.Body>
                            <p>
                                Buraya tıklayarak okutmak istediğiniz Qr Kod
                                görselini seçiniz.
                            </p>

                            {<hr></hr>}
                            <small className="text-muted">
                                İzin verilen dosya türleri:{' '}
                                {fileTypes.join(',')}
                            </small>
                            {uploadedImage && (
                                <>
                                    {<hr></hr>}
                                    <small className="text-muted">
                                        Seçilen Dosya: {uploadedImage?.name}
                                    </small>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </Row>
            }
        />
    );
}

export default DragDrop;
