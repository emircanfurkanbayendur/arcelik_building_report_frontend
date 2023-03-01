import React from 'react';
import './Team.css';

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
    MDBIcon,
} from 'mdb-react-ui-kit';

const Team = () => {
    return (
        <div>
            <br />
            <br />

            <section>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10 col-xl-8 text-center">
                        <h3 class="mb-4">Proje Geliştirme Ekibi</h3>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-md-4 mb-5 mb-md-0">
                        <div class="card testimonial-card">
                            <div
                                class="card-up"
                                style={{ backgroundColor: '#7a81a8' }}
                            ></div>
                            <div class="avatar mx-auto bg-white">
                                <img
                                    src="https://media.licdn.com/dms/image/C5603AQHrM695Opz1SA/profile-displayphoto-shrink_800_800/0/1645609497175?e=2147483647&v=beta&t=3SsVBZfcmJ27oNvBWtqcFMfsAD4CNLh1BLt-Ob2Ie6A"
                                    class="rounded-circle img-fluid"
                                />
                            </div>
                            <div class="card-body">
                                <h4 class="mb-4">Baykal Mehmet Uçar</h4>
                                <hr />
                                <p class="dark-grey-text mt-4">
                                    <i class="fas fa-quote-left pe-2"></i>
                                    Recovery Project - Proje Sorumlusu ve
                                    Koordinatörü
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5 mb-md-0">
                        <div class="card testimonial-card">
                            <div
                                class="card-up"
                                style={{ backgroundColor: '#7a81a8' }}
                            ></div>
                            <div class="avatar mx-auto bg-white">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                    class="rounded-circle img-fluid"
                                />
                            </div>
                            <div class="card-body">
                                <h4 class="mb-4">Melisa Demirhan</h4>
                                <hr />
                                <p class="dark-grey-text mt-4">
                                    <i class="fas fa-quote-left pe-2"></i>
                                    Recovery Project - Yazılım Geliştirici/Ekip
                                    Lideri
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-0">
                        <div class="card testimonial-card">
                            <div
                                class="card-up"
                                style={{ backgroundColor: '#7a81a8' }}
                            ></div>
                            <div class="avatar mx-auto bg-white">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                    class="rounded-circle img-fluid"
                                />
                            </div>
                            <div class="card-body">
                                <h4 class="mb-4">Osman Çağlar</h4>
                                <hr />
                                <p class="dark-grey-text mt-4">
                                    <i class="fas fa-quote-left pe-2"></i>
                                    Recovery Project - Yazılım Geliştirici
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-0">
                        <br />
                        <br />
                        <div class="card testimonial-card">
                            <div
                                class="card-up"
                                style={{ backgroundColor: '#7a81a8' }}
                            ></div>
                            <div class="avatar mx-auto bg-white">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                    class="rounded-circle img-fluid"
                                />
                            </div>
                            <div class="card-body">
                                <h4 class="mb-4">Emircan Furkan Bayendur</h4>
                                <hr />
                                <p class="dark-grey-text mt-4">
                                    <i class="fas fa-quote-left pe-2"></i>
                                    Recovery Project - Yazılım Geliştirici
                                </p>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div class="col-md-4 mb-0">
                        <br />
                        <br />
                        <div class="card testimonial-card">
                            <div
                                class="card-up"
                                style={{ backgroundColor: '#7a81a8' }}
                            ></div>
                            <div class="avatar mx-auto bg-white">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                    class="rounded-circle img-fluid"
                                />
                            </div>
                            <div class="card-body">
                                <h4 class="mb-4">Çağrı Şentürk</h4>
                                <hr />
                                <p class="dark-grey-text mt-4">
                                    <i class="fas fa-quote-left pe-2"></i>
                                    Recovery Project - Yazılım Geliştirici
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-0">
                        <br />
                        <br />
                        <div class="card testimonial-card">
                            <div
                                class="card-up"
                                style={{ backgroundColor: '#7a81a8' }}
                            ></div>
                            <div class="avatar mx-auto bg-white">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                    class="rounded-circle img-fluid"
                                />
                            </div>
                            <div class="card-body">
                                <h4 class="mb-4">Utku Oğulcan Erdoğan</h4>
                                <hr />
                                <p class="dark-grey-text mt-4">
                                    <i class="fas fa-quote-left pe-2"></i>
                                    Recovery Project - Yazılım Geliştirici
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
