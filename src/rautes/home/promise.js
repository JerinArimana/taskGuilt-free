import React from "react";
import Image from "next/image";
const Promise = () => {
    return (
        <React.Fragment>
            <div className="guilt-promise-better--content">
                <div className="guilt-promise-better--content-item">
                    <div className="guilt-promise-better--content-item-image">
                        <Image
                            src="/images/home/MaskGroup18.png"
                            width={787}
                            height={619}
                            alt=""
                            className="left-food"
                        />
                        <Image
                            src="/images/home/MaskGroup19.png"
                            width={85}
                            height={36}
                            alt=""
                            className="right-food-mobile"
                        />
                    </div>
                    <div className="guilt-promise-better--content-item-info">
                        <p>{`Did you know that every 100 gms of Chicken you eat adds up to <<number>> of GHG Emissions of CO2, <<value>> of trees, and <<value>> of water? We have still not considered the run-off from an Industrial grade animal/poultry farm into our precious soil and groundwater that can eventually reach us! Add to that, the price we pay for healthcare!`}</p>
                        <button className="btn-promise-better guilt-free-button guilt-free--transparent mb-right-white">EXPLORE 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="guilt-promise-better--content-item second">
                    <div className="guilt-promise-better--content-item-image">
                        <Image
                            src="/images/home/MaskGroup19.png"
                            width={663}
                            height={480}
                            alt=""

                        />
                    </div>
                    <div className="guilt-promise-better--content-item-info">
                        <Image
                            src="/images/home/Group1094.png"
                            width={85}
                            height={36}
                            alt=""
                        />
                        <p>“ Quote Dummy Text Did you know that every 100 gms of Chicken you eat adds up “</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Promise;