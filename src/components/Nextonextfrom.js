import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */
  height: 100vh; /* Set height to 100% of viewport height */
`;

const TitleContainer = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center; /* Center text */
`;

const Question = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const OptionCardContainer = styled.div`
  display: flex;
  justify-content: center; /* Center option cards horizontally */
  width: 50%;
  margin-bottom: 2rem; /* Increased margin for gap between cards */
`;

const OptionCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem; /* Added margin for gap between cards */
  position: relative; /* Required for positioning badge */
`;

const OptionImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 1rem;
`;

const OptionText = styled.p`
   span:first-of-type {
    font-weight: bold;
  }
`;

const PopularBadge = styled.span`
  background-color: #ffd700;
  padding: 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center badge */
`;

const Option = ({ text, image, isMostPopular, onClick }) => {
    const firstSpaceIndex = text.indexOf('Build');
    const firstTwoWords = text.substring(0, firstSpaceIndex);
    const remainingText = text.substring(firstSpaceIndex);
  return (
    <OptionCard onClick={onClick}>
      {isMostPopular && <PopularBadge>MOST POPULAR</PopularBadge>}
      {image && <OptionImage src={image} alt={text} />}
      <OptionText><span>{firstTwoWords}</span>{remainingText}</OptionText>
    </OptionCard>
  );
};

const Nextonextfrom = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionClick = (text) => {
    setSelectedOption(text);
  };

  return (
    <Container>
      <TitleContainer>
        <Question>Learning paths based on your answers</Question>
        <p>Choose one to get started. You can switch anytime.</p>
      </TitleContainer>
      <OptionCardContainer>
        <Option
          
          text="Foundational Math Build your foundational skills in algebra, geometry, and probability."
          image="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/09/what-is-algebra.jpg"
          isMostPopular={true}
          onClick={() => handleOptionClick('Foundational Math')}
        />
        <Option
          text="Mathematical Thinking Build your foundational skills in algebra, geometry, and probability."
          image="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/09/what-is-algebra.jpg"
          onClick={() => handleOptionClick('Mathematical Thinking')}
        />
      </OptionCardContainer>
    </Container>
  );
};

export default Nextonextfrom;
