import React, { Component } from 'react';
import StepHeader from '../../components/Steps/Steps'
import { Radio, Row, Col, Button, Input  } from 'antd'

const RadioGroup = Radio.Group;

class ModifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            methodType: 1,//验证方式
            currentStep: 0,//当前步骤
            steps: [//步骤内容
                {title: '验证身份'},
                {title: '输入手机号码'},
                {title: '成功'},
            ]
        };
        this.nextStep = this.nextStep.bind(this)//1
    }
    methodChange = (e) => {//2
        // console.log('radio checked', e.target.value);
        this.setState({methodType: e.target.value})
    }
    nextStep() {
        // const current = this.state.currentStep + 1;
        this.setState((prevState) => ({
            currentStep: prevState.currentStep + 1
        }))
        console.log(this.state.currentStep);
    }
    render() {
        return (
            <div>
                <StepHeader current={this.state.currentStep} steps={this.state.steps}/>
                <Row>
                    <Col span={12} className="textLeft">请选择验证身份方式：</Col>
                    <Col span={12}>
                        <RadioGroup onChange={this.methodChange} value={this.state.methodType}>
                            <Radio value={1}>手机验证</Radio>
                            <Radio value={2}>邮箱验证</Radio>
                        </RadioGroup>
                    </Col>
                </Row>
                {this.state.methodType === 1 &&
                <div>
                    <Row>
                        <Col span={12} className="textLeft">手机号码：</Col>
                        <Col span={12}>+86-15884284641</Col>
                    </Row>
                    <Row>
                        <Col span={12} className="textLeft">手机验证码：</Col>
                        <Col span={12}>
                            <Input placeholder="请输入6位数" className="codeInput"/>
                            <Button type="primary">发送验证码</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={12}>
                            <Button type="primary" onClick={this.nextStep}>下一步</Button>
                        </Col>
                    </Row>
                </div>}
                {this.state.methodType === 2 &&
                <div>
                    <Row>
                        <Col span={12} className="textLeft">邮箱：</Col>
                        <Col span={12}>573300577@qq.com</Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={12}>
                            <Button type="primary">发送验证邮件</Button>
                        </Col>
                    </Row>
                </div>}

            </div>
        );
    }
}

export default ModifyEmail;