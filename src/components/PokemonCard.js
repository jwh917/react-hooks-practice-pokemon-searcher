import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [showBack, setShowBack] = useState(false)

  const {name, hp, sprites} = pokemon
  // console.log(name, hp, sprites.front, sprites.back)

  function displayBack(){
    setShowBack((prevState) => !prevState) 
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={displayBack}>
          {showBack ? <img src={sprites.back} alt={name} /> : <img src={sprites.front} alt={name} />}
          {/* <img src={sprites.front} alt={sprites.back} /> */}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
