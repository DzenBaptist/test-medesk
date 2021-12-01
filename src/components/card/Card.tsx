import React, {useState} from 'react';
import './Card.css';
import clsx from "clsx";

interface CardProps {
    title?: string,
    text?: string
}


const Card: React.FC<CardProps> = ({
    title = 'Title',
    text = 'Text'
}) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="card">
      <h3 className={clsx("card__title", {["card__title--open"]: open})}onClick={()=>setOpen((prev)=>!prev)}>{title}</h3>
        <div className={clsx("card__description", {["card__description--open"]: open})}>
            <p className="card__text">
                {text}</p>
        </div>

    </div>
  );
}

export default Card;
