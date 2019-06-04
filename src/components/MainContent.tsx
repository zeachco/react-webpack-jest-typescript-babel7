import React, { useState, useEffect } from 'react';
import { Test } from '../controllers/Test';
import '../controllers/BaseClass.scss'

export const MainContent: React.FC = () => {
    const [controller, setCtrl] = useState();

    useEffect(() => {
        if(!controller) {
            const ctrl = new Test('Okay!');
            ctrl.setName('Hello!');
            setCtrl(ctrl)
        }
    }, [controller])

    if(!controller) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1 className="important">{controller.greet()}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus porro similique officiis magni illo id odit enim harum illum quo sed, recusandae hic aliquam cum error iste velit quasi.</p>
        </div>
    )
};
