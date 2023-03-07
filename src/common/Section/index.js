import { Wrapper, StyledHeader, SectionBody } from './styled.js';

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <StyledHeader>
            {title}
            {extraHeaderContent}
        </StyledHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </Wrapper>
);

export default Section;