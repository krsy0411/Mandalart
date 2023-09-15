import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    width: 539px;
    height: 75px;
    border-radius: 40px;
    box-shadow: 0.5px 0.5px 40px 15px #EFEFF1;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
`;
const Goal = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    text-align: center;
`;
const Progress = styled.div`
    width: 312px;
    height: 12px;
    background-color: #E3E5E5;
`;
const Completed = styled.div`
  background-color: #6B4EFF;
  width: ${(props) => props.completed + "%"};
  height: 100%;
  transition: 'width 1s ease-in-out';
`;
const Percent = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #6B4EFF;
    margin-right: 10px;
`;

function ProgressBar(props) {
    return(
        <Container>
            <Goal>{props.goal}</Goal>
            <Progress>
                <Completed completed={props.completed}></Completed>
            </Progress>
            <Percent>{`${props.completed}%`}</Percent>
        </Container>
    )
}

export default ProgressBar;