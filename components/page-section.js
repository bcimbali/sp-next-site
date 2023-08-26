import styled, { css } from 'styled-components';
import useIntersect from './../hooks/intersection-observer';

const PageWrapper = styled.section`
  align-items: center;
  color: ${({ $textColor = "deepskyblue" }) => $textColor};
  display: flex;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 100;
  text-transform: uppercase;
  min-height: 100vh;
  opacity: 0;
  transition: opacity 0.8s;

  ${({ $fullWidth }) => $fullWidth && css`
    justify-content: center;
    padding: 0 20px;
    width: 100vw;
  `}

  ${({ $isIntersecting }) => $isIntersecting && css`
    opacity: 1;
  `}

  @media (max-width: 768px) {
    font-weight: 300;
    transition-duration: 0.5s;
  }
`;

function PageSection({ children, fullWidth, textColor }) {
  const [ref, entry] = useIntersect({
    threshold: 0.3
  });

  return (
    <PageWrapper
      ref={ref}
      $ratio={entry.intersectionRatio}
      $isIntersecting={entry.isIntersecting}
      $fullWidth={fullWidth}
      $textColor={textColor}
    >
      {children}
    </PageWrapper>
  )

}

export default PageSection;