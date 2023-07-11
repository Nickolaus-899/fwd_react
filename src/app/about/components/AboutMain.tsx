import React from 'react'
import Image, {StaticImageData} from "next/image";

import cava from '@/app/about/images/cava.jpg'
import cacio from '@/app/about/images/cacio.jpg'
import burger from '@/app/about/images/Burger-and-Beer-108.jpg'
import messa from '@/app/about/images/messa.jpg'
import kuji from '@/app/about/images/kuji.png'
import PartnerLogo from "@/app/about/components/PartnerLogo";

export interface PartnerInfo {
    name: string,
    url: string,
    image: string | StaticImageData
}

function AboutMain() {
    const PartnersTitles: PartnerInfo[] = [
        {
            name: 'BigBoss',
            url: 'http://bigbosscafe.tilda.ws/',
            image: ''
        },
        {
            name: 'Insight',
            url: 'https://eda.yandex.ru/innopolis/r/insight',
            image: ''
        },
        {
            name: 'Patefon',
            url: 'https://eda.yandex.ru/innopolis/r/patefon',
            image: ''
        },
        {
            name: 'Innomax',
            url: 'https://foodeon.com/venue/innomax-tivs',
            image: ''
        },
        {
            name: 'SEasLOc',
            url: 'https://seasloc.ru/',
            image: ''
        }
    ]

    const firstItem: PartnerInfo = {
            name: 'cava',
            url: 'http://www.coffeecava.ru/',
            image: cava
    }

    const PartnersLogos: PartnerInfo[] = [
        {
            name: 'burger',
            url: 'https://eda.yandex.ru/innopolis/r/bar_108',
            image: burger
        },
        {
            name: 'cacio',
            url: 'https://eda.yandex.ru/innopolis/r/cacio_e_vino',
            image: cacio
        },
        {
            name: 'messa',
            url: 'http://messaeres.tilda.ws/',
            image: messa
        },
        {
            name: 'kuji',
            url: 'https://kujisushi.ru/',
            image: kuji
        }
    ]
    return (
        <div>
            <div className="AboutLogo">Our Partners</div>
            <div className="Partners">
                <PartnerLogo item={firstItem}/>
                <div className="SinglePartner">
                    <div className="PartnersList">
                        {
                            PartnersTitles.map((partner, i) => (
                                <a href={partner.url} key={i}>{partner.name}</a>
                            ))
                        }
                    </div>
                </div>
                {
                    PartnersLogos.map((partner, i) => (
                        <PartnerLogo item={partner} key={i}/>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutMain
