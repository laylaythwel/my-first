import React, { Component } from 'react'
import LOADING from '../vendor/img/loading.gif'

export default class Loading extends Component {
    render() {
        return (
            <div
                className="position-fixed"
                style={{
                    left: '0',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: '999999',
                    background: '#fff'
                }}
            >
                <div className="col-12 col-lg-4 mx-auto h-100">
                    <div className="d-table w-100 h-100">
                        <div className="d-table-cell align-middle">
                            <img 
                                src={LOADING} 
                                alt="" 
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}
