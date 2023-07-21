import React, {JSX} from 'react'
import Image from "next/image";
import cava from "@/app/about/images/cava.jpg";
import {PartnerInfo} from "@/app/about/components/AboutMain";

const PartnerLogo: ({item} : { item: PartnerInfo }) => JSX.Element = ({item}) => {
    return (
        <div className="SinglePartner">
            <a href={item.url} target="_blank">
                <Image className="SinglePartnerImage PartnerLogo" src={item.image} alt={item.name}/>
            </a>
        </div>
    )
}

export default PartnerLogo
