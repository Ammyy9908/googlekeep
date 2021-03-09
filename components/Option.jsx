import React from 'react'

export default function Option({Icon,text}) {
    return (
        <div className="option">
           { <Icon/>}<span className="option__text">{text}</span>
        </div>
    )
}
