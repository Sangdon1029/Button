import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { Link } from 'react-router-dom';
export const FirstMain = () => {
  return (
    <FirstMainPage>
      <div className="cont-item">
        <h2>It's For You</h2>
        <p className="kr">당신에게 어울리는 향수를 추천해드릴께요</p>
        <Link to="/test">
          <Button>
            <p>Click to Find Your Mood</p>
          </Button>
        </Link>
      </div>
    </FirstMainPage>
  );
};

const FirstMainPage = styled.section`
  height: 50vh;
  display: flex;
  padding-top: 300px;
  justify-content: space-evenly;
  position: relative;
  .cont-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 200px;
    text-align: center;
    h2 {
      font-size: 90px;
      font-family: ${Font.des};
      color: #fff;
      text-shadow: 8px 4px 5px #4f355ab1;
    }
    .kr {
      color: #fff;
      font-size: 26px;
      margin-top: 40px;
      font-family: ${Font.etitle};
    }
  }
  @media screen and (max-width: 720px) {
    padding-top: 300px;
    position: relative;
    .cont-item {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      left: 20px;
      text-align: center;
      h2 {
        font-size: 40px;
      }
      .kr {
        color: #fff;
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .cont-item {
      width:200px;
      left: 110px;
  }
`;

const Button = styled.button`
  max-width: 400px;
  min-width: 280px;
  height: 60px;
  margin-top: 40px;
  font-size: 30px;
  font-family: ${Font.des};
  color: #fff;
  text-shadow: 8px 4px 15px rgba(105, 0, 147, 1);
  background-color: rgba(105, 0, 147, 1);
  border: none;
  border-radius: 10px;
  box-shadow: 8px 4px 5px #35213f;
  &:hover {
    color: ${COLOR.right};
    background-color: ${COLOR.sub};
  }
  @media screen and (max-width: 720px) {
  font-size: 24px;
`;
