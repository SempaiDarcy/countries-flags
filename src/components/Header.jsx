import styled from "styled-components";
import {IoMoon, IoMoonOutline} from 'react-icons/io5';
import { Container } from './Container';

const HeaderEl = styled.header``;

const Wrapper = styled.div``;

const Title = styled.a.attrs({
    href:'/'
})``;
const ModeSwitcher = styled.div``;
export const Header = () => {
    return <HeaderEl>
        <Container>
            <Wrapper>
                <Title>
                    Where is the world?
                </Title>
                <ModeSwitcher>
                    <IoMoon/> Light Theme
                </ModeSwitcher>
            </Wrapper>
        </Container>
    </HeaderEl>
};
