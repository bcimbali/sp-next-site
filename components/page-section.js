import styled, { css } from 'styled-components';
import useIntersect from './../hooks/intersection-observer';

const PageWrapper = styled.section`
  align-items: center;
  color: ${({ textColor = "deepskyblue" }) => textColor};
  display: flex;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 100;
  text-transform: uppercase;
  min-height: 100vh;

  ${({ fullWidth }) => fullWidth && css`
    justify-content: center;
    padding: 0 20px;
    width: 100vw;
  `}

  ${({ isIntersecting }) => isIntersecting && css`
    border: 3px solid yellow;
  `}

  @media (max-width: 768px) {
    font-weight: 300;
  }
`;

function PageSection({ children, fullWidth, textColor }) {
  const [ref, entry] = useIntersect({
    threshold: 0.5
  });

  return (
    <PageWrapper
      ref={ref}
      ratio={entry.intersectionRatio}
      isIntersecting={entry.isIntersecting}
      fullWidth={fullWidth}
      textColor={textColor}
    >
      {children}
    </PageWrapper>
  )

}

export default PageSection;