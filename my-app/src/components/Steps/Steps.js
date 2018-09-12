import React from 'react';
import { Steps } from 'antd'
import './steps.css'
const Step = Steps.Step;

class StepHeader extends React.Component {
    render() {
        const step = this.props.steps.map(item => {
            return <Step title={item.title} key={item.title}/>
        })
        return (
            <div>
                <div className="stepHead">
                    <Steps current={this.props.current}>
                        {step}
                    </Steps>
                </div>
            </div>
        );
    }
}

export default StepHeader;