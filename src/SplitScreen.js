import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 30px;
  background-color: gray;
`;

const TopContainer = styled.div`
  padding: 20px;
  display: flex;
  margin: auto;
  background-color: white;
  
`;
const TopPane = styled.div`
  padding: 20px;
  flex: ${(props) => props.weight};
  background-color: ${(props) => props.color};
  
`;

const Pane = styled.div`
  padding: 20px;
  flex: ${(props) => props.weight};
  background-color: ${(props) => props.color};
`;

export const SplitScreen = ({
  children,
  topLeftWeight = 3,
  topRightWeight = 1,
  leftWeight = 1,
  rightWeight = 1,
  leftColor = "orange",
  rightColor = "yellow",
  topLeftColor = "#66a3ff",
  topRightColor = "#b3b3ff",
  
}) => {
  const [left, right, topLeft, topRight] = children;
  return (
    <>
      <TopContainer>
        <TopPane weight={topLeftWeight} color={topLeftColor} >
			{topLeft}
		</TopPane>
		<TopPane weight={topRightWeight} color={topRightColor} >
			{topRight}
		</TopPane>
      </TopContainer>

      <Container>
        <Pane weight={leftWeight} color={leftColor}>
          {left}
        </Pane>
        <Pane weight={rightWeight} color={rightColor}>
          {right}
        </Pane>
      </Container>
    </>
  );
};
