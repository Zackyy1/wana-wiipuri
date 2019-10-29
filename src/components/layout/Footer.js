import React, { Component } from 'react'
import './css/Footer.css'
export class Footer extends Component {
    // componentDidMount() {
    //     const script = document.createElement("script");
    //     script.src="https://www.jscache.com/wejs?wtype=cdsratingsonlywide&amp;uniq=336&amp;locationId=7038006&amp;lang=en_CA&amp;border=false&amp;shadow=false&amp;backgroundColor=white&amp;display_version=2";
    //     // script.data-loadtrk;
    //     script.onload="this.loadtrk=true";
    //     script.async = true;
    //     document.body.appendChild(script);

    // }
    
    

    render() {
        return (
            <div className="footer-bg">
                {/* 

                    Footer will be used for TripAdvisor / FB page and other links
                    as well as more restaurant info and additional contact info

                */}

                {/* TRIPADVISOR FAILED EMBED */}
                
                {/* <div id="TA_cdsratingsonlywide336" class="TA_cdsratingsonlywide">
                    <ul id="Pxefwp" class="TA_links ZLFMmXzUv">
                        <li id="8ewUBoS03RNn" class="zk6Z92uJt9">
                            <a target="_blank" href="https://www.tripadvisor.ca/">
                                <img src="https://www.tripadvisor.ca/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png" alt="TripAdvisor"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <script async src="https://www.tripadvisor.com/WidgetEmbed-cdsratingsonlynarrow?amp;locationId=17821239&border=true&uniq=350&lang=en_US&display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
                */}
               

            </div>
        )
    }
}

export default Footer
