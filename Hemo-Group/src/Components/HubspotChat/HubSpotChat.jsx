import React, { useEffect } from 'react';

const HubspotChat = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js-na1.hs-scripts.com/45057861.js';
        script.async = true;
        script.defer = true;
        script.id = "hs-script-loader";


        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div>{}</div>
};

export default HubspotChat;
