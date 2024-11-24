/* eslint-disable react/prop-types */
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import "./Thanks.css";

const emojidata = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom com
        10% de desconto para sua próxima compra
      </p>
      <p>Para concluir sua avaliação, clique no botão abaixo</p>
      <h3>Aqui esta o resuma da sua avaliação {data.name}:</h3>
      <p className="review-data">
        <span>satisfação com o produto:</span>
        {emojidata[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
