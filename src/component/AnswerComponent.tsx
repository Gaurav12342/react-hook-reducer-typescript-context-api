import React, { FC, useContext } from 'react';
import { couterContext } from '../component/context';


const AnswerComponent: FC = () => {
    const counterContext = useContext(couterContext);

    return <div>
        <h3>Result : {counterContext?.state?.result}</h3>
    </div>;
};

export default AnswerComponent;
