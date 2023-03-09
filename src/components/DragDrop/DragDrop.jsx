import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Card, Row, Col, Figure } from 'react-bootstrap';

function DragDrop({ selectedFile, setSelectedFile, fileTypes, label }) {
    const handleChange = (file) => {
        setSelectedFile(file);
        console.log(file);
    };
    console.log(`selectedFile: ${selectedFile}`);
    return (
        <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            label={label}
            hoverTitle="Buraya bırak."
            children={
                <Card>
                    <Card.Body>
                        <p>{label}</p>

                        {<hr></hr>}
                        <small className="text-muted">
                            İzin verilen dosya türleri: {fileTypes.join(',')}
                        </small>
                        {selectedFile && (
                            <>
                                {<hr></hr>}
                                <small className="text-muted">
                                    Seçilen Dosya: {selectedFile?.name}
                                </small>
                            </>
                        )}
                    </Card.Body>
                </Card>
            }
        />
    );
}

export default DragDrop;
