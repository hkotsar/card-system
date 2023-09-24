import React, { useState, useRef, useEffect } from 'react';
import './selected-card.scss';

function SelectedCard({selectedImg, textColor, alt}) {
    const [heading, setHeading] = useState('');
    const [message, setMessage] = useState('');
    const [messageOptional, setMessageOptional] = useState('');
    const [other, setText] = useState('');
    const canvasRef = useRef(null);
    console.log(selectedImg + 'sdsdsd')

    const handleHeadingChange = (e) => {
        setHeading(e.target.value);
        
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleMessageOptionalChange = (e) => {
        setMessageOptional(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const image = new Image();
        image.src = selectedImg;
    
        image.onload = () => {
          
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            const headingMargin = 50;
            const textMargin = 4;
            const textOptionalMargin = -28;
            const otherMargin = -76;

            const headingFontSize = 32; 
            const textFontSize = 20;
            context.fillStyle = textColor;
          
            context.font = `${headingFontSize}px Montserrat`;
            const headingWith = context.measureText(heading).width;

            context.font = `${textFontSize}px Montserrat`;
            const textWith = context.measureText(message).width;
            const textOptionalWidth = context.measureText(messageOptional).width;

            const otherWith = context.measureText(other).width


            const headingX = centerX - headingWith / 2;
            const headingY = centerY - headingMargin - headingFontSize;

            const textX = centerX - textWith / 2;
            const textY = centerY - textMargin;

            const textOptionalX = centerX - textOptionalWidth / 2;
            const textOptionalY = centerY - textOptionalMargin;

            const otherX = centerX - otherWith / 2;
            const otherY =  centerY - otherMargin;
          
    
           
           
           
            context.font = `${headingFontSize}px Montserrat`;
            context.fillText(heading, headingX, headingY);
    
            context.font = `${textFontSize}px Montserrat`;
            context.fillText(message, textX, textY);

            context.font = `${textFontSize}px Montserrat`;
            context.fillText(messageOptional, textOptionalX, textOptionalY);

            context.font = `${textFontSize}px Montserrat`;
            context.fillText(other, otherX, otherY);

        };
      }, [textColor, selectedImg, heading, message, messageOptional, other]);
    
        

    const generateImage = () => {
        const canvas = canvasRef.current;
    
        // Generate a data URL for the canvas content (JPEG format)
        const dataURL = canvas.toDataURL('image/jpeg');
    
        // Create a download link
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = `${alt}.jpeg`;
        a.click();
    };

  return (
    <div className="selected-card">
        <aside className="sidebar">
            <div className="form">
                <div className="form__group">
                    <label className="form__label">Pöördumine</label>
                    <input
                        className="form__input"
                        type="text"
                        value={heading}
                        onChange={handleHeadingChange}
                    />
                </div>
                <div className="form__group">
                    <label className="form__label">Sisu tekst</label>
                    <textarea
                        className="form__textarea"
                        name="message" 
                        cols="30" rows="2"
                        spellCheck={false}    
                        value={message} 
                        onChange={handleMessageChange}>
                    </textarea>
                </div>
                <div className="form__group">
                    <label className="form__label">Sisu tekst (vabal valikul)</label>
                    <textarea
                        className="form__textarea"
                        name="message" 
                        cols="30" rows="2"
                        spellCheck={false}  
                        value={messageOptional} 
                        onChange={handleMessageOptionalChange}>
                    </textarea>
                </div>
                <div className="form__group">
                    <label className="form__label">Kuupäev/muu</label>
                    <input
                        className="form__input"
                        type="text"
                        value={other}
                        onChange={handleTextChange}
                    />
                </div>
                <button className="form__button" onClick={generateImage}>Genereeri kaart</button>
            </div>
        </aside>
        <canvas className="canvas" ref={canvasRef} width={600} height={400} />
    </div>
  )
}

export default SelectedCard
