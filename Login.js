import styled from 'styled-components';

const Login = (props) => {
    return (
    <Container>
        <Nav>
            <a href= "/">
                <img src="/images/JSU1.svg" alt="" />
            </a>
            <div>
                <Join>Join Now</Join>
                <SignIn>Sign In</SignIn>
            </div>
        </Nav>
        <Section>
            <Hero>
                <h1>Welcome To Your Campus Community, JSU Tigers!</h1>
                <img src="/images/login-hero.svg" alt="" />
            </Hero>
            <Form>
                    <Google>
                        <img src="/images/google.svg" alt="" />
                        Sign In with Google
                    </Google>
                    </Form>
            </Section>
    </Container>
    )
};
 

const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.nav`
    max-width 1128px;
    margin-left: 0px;
    padding: 12px 0 16px;
    display: flex;
    align-items:  center;
    justify-content:  space-between;
    flex-wrap:  nowrap;

    & > a {
        width:  135px;
        height:  34px;
        @media (max-width:  768px){
            padding:  0 5px;
        }
    }

`;
const Join = styled.a`
    font-size:  16px;
    padding:  10px 24px;
    text-decoration:  none;
    border radius:  4px;
    color:  rgba(0, 0, 200, 1);
    margin-right:  0px;
    &:hover {
        background color:  rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration:  none;
    }
`;

const SignIn = styled.a`
box-shadow:  inset 0 0 0 1px #a9a9a9a9;
color:  #0000c8;
border-radius:  24px;
transition-duration:  167ms;
font-size:  16px;
font-weight:  600;
line-height:  40px;
padding:  10px 24px;
text-align:  center;
background-color: rgba(0, 0, 0, 0);
&:hover {
    background-color:  rgba(0, 0, 0, 0.5);
    color:  #000000;
    text-decoration: none;
}
`;

const Section = styled.section`
    display:  flex;
    align-content:  start;
    min-height:  700px;
    padding-bottom:  138px;
    padding-top:  40px;
    padding:  60px 0;
    position:  relative;
    flex-wrap:  wrap;
    width: 100%;
    max-width:  1128px;
    align-items:  center;
    margin: auto;
    
    @media (max-width:  768){
        margin:  auto;
        min-height:  0px;
    }
`;

const Hero = styled.div`
    width:  100%;
    h1 {
        padding-bottom: 0;
        width:  55%;
        font-size:  56px;
        color: #0000c8;
        font-weight:  200;
        line-height:  70px;
    @media (max-width:  768px){
            text-align:  center;
            font-size:  20px;
            width:  100%;
            line-height:  2;
    }
}
    img {
        width: 700px;
        height: 670px;
        position: absolute;
        bottom:  -2px;
        right:  -150px;
        @media (max-width: 768px) {
            top: 230px;
            width:  initial;
            position:  initial;
            height:  initial;
        }
    }
`;

const Form = styled.div`
    margin-top:  100px;
    width:  400px;
    @media (max-width:  768px) {
        margin-top:  20px;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items:  center;
    height:  56px;
    width:  100%;
    border-radius 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), 
        inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

    vertical-align:  middle;
    z-index:  0;
    transition-duration:  167ms;
    font-size:  20px;
    color:  rgba(0, 0, 0, 0.6);
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`;
export default Login;
