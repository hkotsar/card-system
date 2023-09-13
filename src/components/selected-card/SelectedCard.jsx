import React, { useState, useRef, useEffect } from 'react';
import './selected-card.scss';

function SelectedCard({selectedImg}) {
    const [heading, setHeading] = useState('');
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');
    const canvasRef = useRef(null);
    console.log(selectedImg + 'sdsdsd')

    const handleHeadingChange = (e) => {
        setHeading(e.target.value);
        
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
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

          const headingCenter = centerX - context.measureText(heading).width / 2;
          const messageCenter = centerX - context.measureText(message).width / 2;
          const textCenter = centerX - context.measureText(text).width / 2;
          
    
           
           context.fillStyle = '#333';
           context.font = '24px Arial';
           context.fillText(heading, headingCenter, 96);
    
           
           context.fillStyle = '#333';
           context.font = '24px Arial';
           context.fillText(message, messageCenter, 200);


           context.fillStyle = '#333';
           context.font = '24px Arial';
           context.fillText(text, textCenter, 320);
        };
      }, [selectedImg, heading, message, text]);
    
        

    const generateImage = () => {
        const canvas = canvasRef.current;
    
        // Generate a data URL for the canvas content (JPEG format)
        const dataURL = canvas.toDataURL('image/jpeg');
    
        // Create a download link
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = 'generated_image.jpeg';
        a.click();
    };

  return (
    <div className="selected-card">
        <aside className="sidebar">
            <div className="form">
                <div className="form__group">
                    <label className="form__label">Label</label>
                    <input
                        className="form__input"
                        type="text"
                        value={heading}
                        onChange={handleHeadingChange}
                    />
                </div>
                <div className="form__group">
                    <label className="form__label">Label</label>
                    <textarea
                        className="form__textarea"
                        name="message" 
                        id="" cols="30" rows="10"  
                        value={message} 
                        onChange={handleMessageChange}>
                    </textarea>
                </div>
                <div className="form__group">
                    <label className="form__label">Label</label>
                    <input
                        className="form__input"
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                    />
                </div>
                <button className="form__button" onClick={generateImage}>Genereeri kaart</button>
            </div>
        </aside>
        <canvas className="canvas" ref={canvasRef} width={566} height={396} />
    </div>
  )
}

export default SelectedCard
