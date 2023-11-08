import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <div className="footer--updates">
            <div className="footer--content">
              <h3>Join the Green Squad</h3>
              <p>To receive exclusive Green Meat offers, updates and more.</p>
            </div>
            <div className="footer--contact">
              <Form>
                <Form.Group className="footer--updates-request" controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Email" />
                  <button>
                    <p>SEND</p>
                    <span className="icon-mobile">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                    </span>
                  </button>
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="footer--menu">
            <div className="footer--menu-list">
              <div className="footer--brand">
                <Image
                  src="/images/footer/Group1093.svg"
                  width={70}
                  height={70}
                  alt=""
                />
              </div>
              <ul>
                <li >
                  <Link href='#' className="active">Home</Link>
                </li>
                <li>
                  <Link href='#'>The Promise</Link>
                </li>
                <li>
                  <Link href='#'>Food For</Link>
                </li>
                <li>
                  <Link href='#'>Spotlight</Link>
                </li>
                <li>
                  <Link href='#'>Who We Are</Link>
                </li>
              </ul>
            </div>
            <div className="footer--social">
              <ul>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="32.628" height="26.5" viewBox="0 0 32.628 26.5">
                  <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M29.274,9.985c.021.29.021.58.021.87,0,8.84-6.729,19.026-19.026,19.026A18.9,18.9,0,0,1,0,26.879a13.834,13.834,0,0,0,1.615.083,13.392,13.392,0,0,0,8.3-2.857,6.7,6.7,0,0,1-6.252-4.638,8.433,8.433,0,0,0,1.263.1,7.073,7.073,0,0,0,1.76-.228A6.688,6.688,0,0,1,1.325,12.78V12.7a6.735,6.735,0,0,0,3.023.849A6.7,6.7,0,0,1,2.277,4.6a19.008,19.008,0,0,0,13.788,7,7.549,7.549,0,0,1-.166-1.532A6.694,6.694,0,0,1,27.473,5.492a13.166,13.166,0,0,0,4.244-1.615,6.669,6.669,0,0,1-2.94,3.685,13.406,13.406,0,0,0,3.851-1.035,14.375,14.375,0,0,1-3.354,3.457Z" transform="translate(0 -3.381)" fill="#7c7c7c" />
                </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15.274" height="28.391" viewBox="0 0 15.274 28.391">
                    <path id="Icon_zocial-facebook" data-name="Icon zocial-facebook" d="M13.257,15.246V9.824H17.63V7.1a7.135,7.135,0,0,1,1.915-5.025A6.094,6.094,0,0,1,24.187,0h4.344V5.423H24.187a.957.957,0,0,0-.766.468,1.9,1.9,0,0,0-.341,1.15V9.823h5.45v5.422H23.08V28.391H17.629V15.246Z" transform="translate(-13.257)" fill="#fff" />
                  </svg>
                </li>
                <li className="insta">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30.5" height="30.5" viewBox="0 0 30.5 30.5">
                    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-1.5 -1.5)" opacity="0.485">
                      <path id="Path_960" data-name="Path 960" d="M9.875,3h13.75A6.875,6.875,0,0,1,30.5,9.875v13.75A6.875,6.875,0,0,1,23.625,30.5H9.875A6.875,6.875,0,0,1,3,23.625V9.875A6.875,6.875,0,0,1,9.875,3Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                      <path id="Path_961" data-name="Path 961" d="M23.005,16.628a5.5,5.5,0,1,1-4.634-4.634,5.5,5.5,0,0,1,4.634,4.634Z" transform="translate(-0.755 -0.745)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                      <path id="Path_962" data-name="Path 962" d="M26.25,9.75h0" transform="translate(-1.938 -0.563)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                    </g>
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36.583" height="25.723" viewBox="0 0 36.583 25.723">
                    <path id="Icon_awesome-youtube" data-name="Icon awesome-youtube" d="M36.869,8.525a4.6,4.6,0,0,0-3.234-3.255C30.782,4.5,19.342,4.5,19.342,4.5S7.9,4.5,5.049,5.269A4.6,4.6,0,0,0,1.814,8.525C1.05,11.4,1.05,17.387,1.05,17.387s0,5.991.764,8.863a4.528,4.528,0,0,0,3.234,3.2c2.853.769,14.293.769,14.293.769s11.44,0,14.293-.769a4.528,4.528,0,0,0,3.234-3.2c.764-2.871.764-8.863.764-8.863s0-5.991-.764-8.863ZM15.6,22.827V11.948l9.562,5.44L15.6,22.827Z" transform="translate(-1.05 -4.5)" fill="#fff" opacity="0.485" />
                  </svg>
                </li>


              </ul>
            </div>
          </div>
        </Container>
        <div className="footer--Privacy-Policy">
          <Container>
            <div className="footer----Privacy-Policy-info">
              <ul>
                <li>© 2022 by Greenovative Foods Pvt Ltd.</li>
                <li>Terms & Conditions | Privacy Policy</li>
                <li>Designed by : Webandcrafts</li>
              </ul>
            </div>
          </Container>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
