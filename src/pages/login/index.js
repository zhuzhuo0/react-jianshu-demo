import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
    render() {
        const { loginStatus, doLogin } = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input innerRef={(account) => { this.accountElem = account }} placeholder='帐号' />
                        <Input innerRef={(password) => { this.passwordElem = password }} placeholder='密码' type='password' />
                        <Button onClick={() => {
                            doLogin(this.accountElem, this.passwordElem)
                        }}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'loginStatus'])
})

const mapDispatch = (dispatch) => ({
    doLogin(accountElem, passwordElem) {
        dispatch(actionCreators.getDoLoginAction(accountElem.value, passwordElem.value))
    }
})

export default connect(mapState, mapDispatch)(Login);