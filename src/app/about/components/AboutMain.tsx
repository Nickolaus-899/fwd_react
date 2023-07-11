import React from 'react'
import Image from "next/image";

import cava from '@/app/about/images/cava.jpg'
import cacio from '@/app/about/images/cacio.jpg'
import burger from '@/app/about/images/Burger-and-Beer-108.jpg'
import messa from '@/app/about/images/messa.jpg'
import kuji from '@/app/about/images/kuji.png'

function AboutMain() {
    const PartnersTitles: string[] = [
        'BigBoss',
        'Insight',
        'Patefon',
        'Innomax',
        'Jonjoli'
    ]
    return (
        <div>
            <div className="AboutLogo">Our Partners</div>
            <div className="Partners">
                <div className="SinglePartner">
                    <a href="http://www.coffeecava.ru/">
                        <Image className="SinglePartnerImage PartnerLogo" src={cava} alt={"cava"}/>
                    </a>
                </div>
                <div className="SinglePartner">
                    <div className="PartnersList">
                        {
                            PartnersTitles.map((partner, i) => (
                                <a key={i}>{partner}</a>
                            ))
                        }
                    </div>
                </div>
                <div className="SinglePartner">
                    <a href="https://eda.yandex.ru/innopolis/r/bar_108">
                        <Image className="SinglePartnerImage PartnerLogo" src={burger} alt={"burger"}/>
                    </a>
                </div>
                <div className="SinglePartner">
                    <a href="https://eda.yandex.ru/innopolis/r/cacio_e_vino">
                        <Image className="SinglePartnerImage PartnerLogo" src={cacio} alt={"cacio"}/>
                    </a>
                </div>
                <div className="SinglePartner">
                    <a href="http://messaeres.tilda.ws/">
                        <Image className="SinglePartnerImage PartnerLogo" src={messa} alt={"messa"}/>
                    </a>
                </div>
                <div className="SinglePartner">
                    <a href="https://kujisushi.ru/">
                        <Image className="SinglePartnerImage PartnerLogo" src={kuji} alt={"innomax"}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutMain
