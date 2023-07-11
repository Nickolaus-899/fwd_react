import React from 'react'
import Image from "next/image";
import teller from '@/app/_home_/images/teller.svg'

function MyButton() {
    return (
        <button className="MyButton">
            <div className="ButtonContentWrapper">
                {/*<Image className="Teller" src={teller} alt={'teller'}/>*/}
                <svg className="Teller" fill="#000000"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.113 408.113">
                    <path d="M203.174,342.483c-76.33,0-138.429-62.097-138.429-138.424c0-76.33,62.099-138.429,138.429-138.429
	c76.327,0,138.424,62.099,138.424,138.429C341.598,280.387,279.501,342.483,203.174,342.483z M203.174,75.63
	c-70.815,0-128.429,57.613-128.429,128.429c0,70.813,57.613,128.424,128.429,128.424c70.813,0,128.424-57.611,128.424-128.424
	C331.598,133.243,273.987,75.63,203.174,75.63z M35.277,336.753H21.132c-2.762,0-5-2.239-5-5V176.161
	C6.603,171.921,0,162.824,0,152.311V82.113c0-2.761,2.238-5,5-5s5,2.239,5,5v65.198h5.468V82.113c0-2.761,2.238-5,5-5s5,2.239,5,5
	v65.198h5.474V82.113c0-2.761,2.238-5,5-5s5,2.239,5,5v65.198h5.469V82.113c0-2.761,2.238-5,5-5s5,2.239,5,5v70.198
	c0,10.513-6.604,19.61-16.133,23.851v155.591C40.277,334.514,38.039,336.753,35.277,336.753z M26.132,326.753h4.146V178.703h-4.146
	V326.753z M10.866,157.311c2.353,6.602,9.236,11.393,17.339,11.393s14.986-4.791,17.339-11.393H10.866z M384.691,335.464h-14.6
	c-2.762,0-5-2.239-5-5V79.242c0-2.063,1.268-3.916,3.191-4.662c1.928-0.747,4.108-0.234,5.501,1.29
	c1.122,1.229,27.53,30.567,32.242,72.151c4.586,40.435,0.21,107.148,0.021,109.968c-0.176,2.626-2.357,4.667-4.989,4.667h-11.367
	v67.808C389.691,333.225,387.453,335.464,384.691,335.464z M375.092,325.464h4.6v-62.808h-4.6V325.464z M375.092,252.656h21.26
	c0.916-16.083,3.539-70.003-0.261-103.508c-2.673-23.579-13.229-43.257-20.999-54.955V252.656z M203.174,299.064
	c-52.389,0-95.01-42.619-95.01-95.005c0-52.389,42.621-95.01,95.01-95.01c52.386,0,95.005,42.622,95.005,95.01
	C298.179,256.445,255.56,299.064,203.174,299.064z M203.174,119.049c-46.875,0-85.01,38.135-85.01,85.01
	c0,46.872,38.135,85.005,85.01,85.005c46.872,0,85.005-38.133,85.005-85.005C288.179,157.184,250.046,119.049,203.174,119.049z
	 M104.805,140.978c-0.894,0-1.799-0.239-2.615-0.742c-2.353-1.447-3.085-4.527-1.638-6.879
	c16.541-26.879,47.096-41.172,48.388-41.767c2.509-1.156,5.479-0.059,6.634,2.45c1.154,2.507,0.059,5.475-2.447,6.631l0,0
	c-0.289,0.134-29.134,13.675-44.059,37.927C108.123,140.133,106.483,140.978,104.805,140.978z"
                    />
                </svg>
                <div>
                    Order Now
                </div>
            </div>
        </button>
    )
}

export default MyButton
