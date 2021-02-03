import React from 'react';
import './Loading.css';
import { useStateValue } from './StateWrap';

function Loading() {
    const [{ loadingDisplay }] = useStateValue();
    
    return (
        <div className="loading" style={{display: loadingDisplay}}>
            <div className="loading_row row">
                <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary col-12"></span>
                <div className="col-12 text">Loading . . . </div>
            </div>
        </div>
    )
}

export default Loading;