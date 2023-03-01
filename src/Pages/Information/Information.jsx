import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardGroup,
} from 'mdb-react-ui-kit';
const Information = () => {
    return (
        <div>
            <MDBCardGroup fluid>
                <MDBCard style={{ marginTop: '100px' }}>
                    <MDBCardImage
                        src="https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2021/06/11/thumbs_b_c_a5ad8a10a70f36724fb5c4625f144e36.jpg"
                        width="100%"
                        height="77%"
                        alt="..."
                        position="top"
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Arçelik İletişim</MDBCardTitle>
                        <MDBCardText>
                            Şirket ile alt tarafta bulunan kanallar yoluyla
                            iletişime geçebilirsiniz <br />
                            <br />
                            Telefon : (0212) 314 34 34 <br />
                            Mail : arcelikinfo@arcelik.com.tr <br />
                            Adres : Sütlüce, Karaağaç Cd No:2 D:6, 34445
                            Beyoğlu/İstanbul
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard style={{ marginTop: '100px' }}>
                    <MDBCardImage
                        src="https://www.unifiedsoftware.co.uk/wp-content/uploads/2020/03/laptop2-1024x695.png"
                        alt="..."
                        position="top"
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Proje Ekibi İletişim</MDBCardTitle>
                        <MDBCardText>
                            Proje ile alakalı detaylı bilgiye ulaşmak veya
                            dilediğiniz soruları sormak adına proje ekibimiz ile
                            alt tarafta bulunan kanallar yoluyla iletişime
                            geçebilirsiniz <br /> <br />
                            Telefon : (0212) 000 00 00 <br />
                            Mail : recoveryproject@arcelik.com.tr <br />
                            Adres : Sütlüce, Karaağaç Cd No:2 D:6, 34445
                            Beyoğlu/İstanbul
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard style={{ marginTop: '100px' }}>
                    <MDBCardImage
                        src="https://www.evrensel.net/upload/dosya/228087.jpg"
                        alt="..."
                        position="top"
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Yapı Kontrol</MDBCardTitle>
                        <MDBCardText>
                            Depremden etkilenmemek adına çeşitli kanallar ile
                            iletişime geçerek yapılarınızın güvenliğini
                            sağlayabilirsiniz. <br />
                            <br />
                            <br />
                            İBB Telefon : +90 (212) 455 1300
                            <br />
                            İBB Yapı İşleri Müdürlüğü Telefon : 0212 449 47 42
                            <br />
                            Afad : https://www.afad.gov.tr/
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
            <br></br>
        </div>
    );
};

export default Information;
