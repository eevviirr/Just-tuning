import React from 'react'
import GoogleMapReact from 'google-map-react';


function Map() {
    const defaultProps = {
        center: {
        lat: 20.99835602,
        lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div>
            <div style={{ height: '648px', width: '100%', marginTop: '80px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}

                >
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map;
