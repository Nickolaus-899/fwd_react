import React, {JSX} from 'react'
import './../css/index.css'

const SomeElement: ({word} : {word: string}) => JSX.Element = ({ word }) => {
    return (
        <div className="custom">Hello {word}</div>
    )
}



export default SomeElement
