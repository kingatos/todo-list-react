import { StyledSection, StyledHeader, SectionBody } from './styled.js';

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>
            {title}
            {extraHeaderContent}
        </StyledHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </StyledSection>
);

export default Section;