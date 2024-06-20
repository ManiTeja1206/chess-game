import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedSquare, setSelectedSquare] = useState(null);

  const started = () => {
    const pieces = ['R', 'Kn', 'B', 'Q', 'Ki', 'B', 'Kn', 'R'];
    const pawns = 'P';
  
    for (let i = 0; i < 8; i++) {
      document.getElementById(`8${String.fromCharCode(97 + i)}Content`).innerHTML = pieces[i];
      document.getElementById(`7${String.fromCharCode(97 + i)}Content`).innerHTML = pawns;
      document.getElementById(`2${String.fromCharCode(97 + i)}Content`).innerHTML = pawns;
      document.getElementById(`1${String.fromCharCode(97 + i)}Content`).innerHTML = pieces[i];
    }
  };

  const handleSquareClick = (id) => {
    const contentElement = document.getElementById(`${id}Content`);
    const piece = contentElement.innerHTML;

    if (selectedSquare) {
      document.getElementById(`${selectedSquare}Content`).innerHTML = '';
      contentElement.innerHTML = piece;
      setSelectedSquare(null);
    } else if (piece !== '') {

      setSelectedSquare(id);
    }
  };

  return (
    <div className="mainFrame">
      <div className="chessboard">
        <div className="row">
          <div id='8a' className="square white" onClick={() => handleSquareClick('8a')}>
            <p className="topLeftItem">8</p>
            <p id='8aContent'></p>
            <p className="bottomRightItem">a</p>
          </div>
          <div id='8b' className="square black" onClick={() => handleSquareClick('8b')}>
            <p className="topLeftItem">8</p>
            <p id='8bContent'></p>
            <p className="bottomRightItem">b</p>
          </div>
          <div id='8c' className="square white" onClick={() => handleSquareClick('8c')}>
            <p className="topLeftItem">8</p>
            <p id='8cContent'></p>
            <p className="bottomRightItem">c</p>
          </div>
          <div id='8d' className="square black" onClick={() => handleSquareClick('8d')}>
            <p className="topLeftItem">8</p>
            <p id='8dContent'></p>
            <p className="bottomRightItem">d</p>
          </div>
          <div id='8e' className="square white" onClick={() => handleSquareClick('8e')}>
            <p className="topLeftItem">8</p>
            <p id='8eContent'></p>
            <p className="bottomRightItem">e</p>
          </div>
          <div id='8f' className="square black" onClick={() => handleSquareClick('8f')}>
            <p className="topLeftItem">8</p>
            <p id='8fContent'></p>
            <p className="bottomRightItem">f</p>
          </div>
          <div id='8g' className="square white" onClick={() => handleSquareClick('8g')}>
            <p className="topLeftItem">8</p>
            <p id='8gContent'></p>
            <p className="bottomRightItem">g</p>
          </div>
          <div id='8h' className="square black" onClick={() => handleSquareClick('8h')}>
            <p className="topLeftItem">8</p>
            <p id='8hContent'></p>
            <p className="bottomRightItem">h</p>
          </div>
        </div>

        <div className="row">
          <div id='7a' className="square black" onClick={() => handleSquareClick('7a')}>
            <p className="topLeftItem">7</p>
            <p id='7aContent'></p>
            <p className="bottomRightItem">a</p>
          </div>
          <div id='7b' className="square white" onClick={() => handleSquareClick('7b')}>
            <p className="topLeftItem">7</p>
            <p id='7bContent'></p>
            <p className="bottomRightItem">b</p>
          </div>
          <div id='7c' className="square black" onClick={() => handleSquareClick('7c')}>
            <p className="topLeftItem">7</p>
            <p id='7cContent'></p>
            <p className="bottomRightItem">c</p>
          </div>
          <div id='7d' className="square white" onClick={() => handleSquareClick('7d')}>
            <p className="topLeftItem">7</p>
            <p id='7dContent'></p>
            <p className="bottomRightItem">d</p>
          </div>
          <div id='7e' className="square black" onClick={() => handleSquareClick('7e')}>
            <p className="topLeftItem">7</p>
            <p id='7eContent'></p>
            <p className="bottomRightItem">e</p>
          </div>
          <div id='7f' className="square white" onClick={() => handleSquareClick('7f')}>
            <p className="topLeftItem">7</p>
            <p id='7fContent'></p>
            <p className="bottomRightItem">f</p>
          </div>
          <div id='7g' className="square black" onClick={() => handleSquareClick('7g')}>
            <p className="topLeftItem">7</p>
            <p id='7gContent'></p>
            <p className="bottomRightItem">g</p>
          </div>
          <div id='7h' className="square white" onClick={() => handleSquareClick('7h')}>
            <p className="topLeftItem">7</p>
            <p id='7hContent'></p>
            <p className="bottomRightItem">h</p>
          </div>
        </div>

        <div className="row">
          <div id='6a' className="square white" onClick={() => handleSquareClick('6a')}>
            <p className="topLeftItem">6</p>
            <p id='6aContent'></p>
            <p className="bottomRightItem">a</p>
          </div>
          <div id='6b' className="square black" onClick={() => handleSquareClick('6b')}>
            <p className="topLeftItem">6</p>
            <p id='6bContent'></p>
            <p className="bottomRightItem">b</p>
          </div>
          <div id='6c' className="square white" onClick={() => handleSquareClick('6c')}>
            <p className="topLeftItem">6</p>
            <p id='6cContent'></p>
            <p className="bottomRightItem">c</p>
          </div>
          <div id='6d' className="square black" onClick={() => handleSquareClick('6d')}>
            <p className="topLeftItem">6</p>
            <p id='6dContent'></p>
            <p className="bottomRightItem">d</p>
          </div>
          <div id='6e' className="square white" onClick={() => handleSquareClick('6e')}>
            <p className="topLeftItem">6</p>
            <p id='6eContent'></p>
            <p className="bottomRightItem">e</p>
          </div>
          <div id='6f' className="square black" onClick={() => handleSquareClick('6f')}>
            <p className="topLeftItem">6</p>
            <p id='6fContent'></p>
            <p className="bottomRightItem">f</p>
          </div>
          <div id='6g' className="square white" onClick={() => handleSquareClick('6g')}>
            <p className="topLeftItem">6</p>
            <p id='6gContent'></p>
            <p className="bottomRightItem">g</p>
          </div>
          <div id='6h' className="square black" onClick={() => handleSquareClick('6h')}>
            <p className="topLeftItem">6</p>
            <p id='6hContent'></p>
            <p className="bottomRightItem">h</p>
          </div>
        </div>

        <div className="row">
          <div id='5a' className="square black" onClick={() => handleSquareClick('5a')}>
            <p className="topLeftItem">5</p>
            <p id='5aContent'></p>
            <p className="bottomRightItem">a</p>
          </div>
          <div id='5b' className="square white" onClick={() => handleSquareClick('5b')}>
            <p className="topLeftItem">5</p>
            <p id='5bContent'></p>
            <p className="bottomRightItem">b</p>
          </div>
          <div id='5c' className="square black" onClick={() => handleSquareClick('5c')}>
            <p className="topLeftItem">5</p>
            <p id='5cContent'></p>
            <p className="bottomRightItem">c</p>
          </div>
          <div id='5d' className="square white" onClick={() => handleSquareClick('5d')}>
            <p className="topLeftItem">5</p>
            <p id='5dContent'></p>
            <p className="bottomRightItem">d</p>
          </div>
          <div id='5e' className="square black" onClick={() => handleSquareClick('5e')}>
            <p className="topLeftItem">5</p>
            <p id='5eContent'></p>
            <p className="bottomRightItem">e</p>
          </div>
          <div id='5f' className="square white" onClick={() => handleSquareClick('5f')}>
            <p className="topLeftItem">5</p>
            <p id='5fContent'></p>
            <p className="bottomRightItem">f</p>
          </div>
          <div id='5g' className="square black" onClick={() => handleSquareClick('5g')}>
            <p className="topLeftItem">5</p>
            <p id='5gContent'></p>
            <p className="bottomRightItem">g</p>
          </div>
          <div id='5h' className="square white" onClick={() => handleSquareClick('5h')}>
            <p className="topLeftItem">5</p>
            <p id='5hContent'></p>
            <p className="bottomRightItem">h</p>
          </div>
        </div>

        <div className="row">
          <div id='4a' className="square white" onClick={() => handleSquareClick('4a')}>
            <p className="topLeftItem">4</p>
            <p id='4aContent'></p>
            <p className="bottomRightItem">a</p>
          </div>
          <div id='4b' className="square black" onClick={() => handleSquareClick('4b')}>
            <p className="topLeftItem">4</p>
            <p id='4bContent'></p>
            <p className="bottomRightItem">b</p>
          </div>
          <div id='4c' className="square white" onClick={() => handleSquareClick('4c')}>
            <p className="topLeftItem">4</p>
            <p id='4cContent'></p>
            <p className="bottomRightItem">c</p>
          </div>
          <div id='4d' className="square black" onClick={() => handleSquareClick('4d')}>
            <p className="topLeftItem">4</p>
            <p id='4dContent'></p>
            <p className="bottomRightItem">d</p>
          </div>
          <div id='4e' className="square white" onClick={() => handleSquareClick('4e')}>
            <p className="topLeftItem">4</p>
            <p id='4eContent'></p>
            <p className="bottomRightItem">e</p>
          </div>
          <div id='4f' className="square black" onClick={() => handleSquareClick('4f')}>
            <p className="topLeftItem">4</p>
            <p id='4fContent'></p>
            <p className="bottomRightItem">f</p>
          </div>
          <div id='4g' className="square white" onClick={() => handleSquareClick('4g')}>
            <p className="topLeftItem">4</p>
            <p id='4gContent'></p>
            <p className="bottomRightItem">g</p>
          </div>
          <div id='4h' className="square black" onClick={() => handleSquareClick('4h')}>
            <p className="topLeftItem">4</p>
            <p id='4hContent'></p>
            <p className="bottomRightItem">h</p>
          </div>
        </div>

        <div className="row">
          <div id='3a' className="square black" onClick={() => handleSquareClick('3a')}>
            <p className="topLeftItem">3</p>
            <p id='3aContent'></p>
            <p className="bottomRightItem">a</p>
          </div>
          <div id='3b' className="square white" onClick={() => handleSquareClick('3b')}>
            <p className="topLeftItem">3</p>
            <p id='3bContent'></p>
            <p className="bottomRightItem">b</p>
          </div>
          <div id='3c' className="square black" onClick={() => handleSquareClick('3c')}>
            <p className="topLeftItem">3</p>
            <p id='3cContent'></p>
            <p className="bottomRightItem">c</p>
          </div>
          <div id='3d' className="square white" onClick={() => handleSquareClick('3d')}>
            <p className="topLeftItem">3</p>
            <p id='3dContent'></p>
            <p className="bottomRightItem">d</p>
          </div>
          <div id='3e' className="square black" onClick={() => handleSquareClick('3e')}>
            <p className="topLeftItem">3</p>
            <p id='3eContent'></p>
            <p className="bottomRightItem">e</p>
          </div>
          <div id='3f' className="square white" onClick={() => handleSquareClick('3f')}>
            <p className="topLeftItem">3</p>
            <p id='3fContent'></p>
            <p className="bottomRightItem">f</p>
          </div>
          <div id='3g' className="square black" onClick={() => handleSquareClick('3g')}>
            <p className="topLeftItem">3</p>
            <p id='3gContent'></p>
            <p className="bottomRightItem">g</p>
          </div>
          <div id='3h' className="square white" onClick={() => handleSquareClick('3h')}>
            <p className="topLeftItem">3</p>
            <p id='3hContent'></p>
            <p className="bottomRightItem">h</p>
          </div>
        </div>

        <div className="row">
          <div id='2a' className="square white" onClick={() => handleSquareClick('2a')}>
            <p className="topLeftItem">2</p>
            <p id='2aContent'></p>
            <p className="bottomRightItem">a</p>
          </div>
          <div id='2b' className="square black" onClick={() => handleSquareClick('2b')}>
            <p className="topLeftItem">2</p>
            <p id='2bContent'></p>
            <p className="bottomRightItem">b</p>
          </div>
          <div id='2c' className="square white" onClick={() => handleSquareClick('2c')}>
            <p className="topLeftItem">2</p>
            <p id='2cContent'></p>
            <p className="bottomRightItem">c</p>
          </div>
          <div id='2d' className="square black" onClick={() => handleSquareClick('2d')}>
            <p className="topLeftItem">2</p>
            <p id='2dContent'></p>
            <p className="bottomRightItem">d</p>
          </div>
          <div id='2e' className="square white" onClick={() => handleSquareClick('2e')}>
            <p className="topLeftItem">2</p>
            <p id='2eContent'></p>
            <p className="bottomRightItem">e</p>
          </div>
          <div id='2f' className="square black" onClick={() => handleSquareClick('2f')}>
            <p className="topLeftItem">2</p>
            <p id='2fContent'></p>
            <p className="bottomRightItem">f</p>
          </div>
          <div id='2g' className="square white" onClick={() => handleSquareClick('2g')}>
            <p className="topLeftItem">2</p>
            <p id='2gContent'></p>
            <p className="bottomRightItem">g</p>
          </div>
          <div id='2h' className="square black" onClick={() => handleSquareClick('2h')}>
            <p className="topLeftItem">2</p>
            <p id='2hContent'></p>
            <p className="bottomRightItem">h</p>
          </div>
        </div>

        <div className="row">
          <div id='1a' className="square black" onClick={() => handleSquareClick('1a')}>
            <p className="topLeftItem">1</p>
            <p id='1aContent'></p>
            <p className="bottomRightItem">a</p>
          </div>
          <div id='1b' className="square white" onClick={() => handleSquareClick('1b')}>
            <p className="topLeftItem">1</p>
            <p id='1bContent'></p>
            <p className="bottomRightItem">b</p>
          </div>
          <div id='1c' className="square black" onClick={() => handleSquareClick('1c')}>
            <p className="topLeftItem">1</p>
            <p id='1cContent'></p>
            <p className="bottomRightItem">c</p>
          </div>
          <div id='1d' className="square white" onClick={() => handleSquareClick('1d')}>
            <p className="topLeftItem">1</p>
            <p id='1dContent'></p>
            <p className="bottomRightItem">d</p>
          </div>
          <div id='1e' className="square black" onClick={() => handleSquareClick('1e')}>
            <p className="topLeftItem">1</p>
            <p id='1eContent'></p>
            <p className="bottomRightItem">e</p>
          </div>
          <div id='1f' className="square white" onClick={() => handleSquareClick('1f')}>
            <p className="topLeftItem">1</p>
            <p id='1fContent'></p>
            <p className="bottomRightItem">f</p>
          </div>
          <div id='1g' className="square black" onClick={() => handleSquareClick('1g')}>
            <p className="topLeftItem">1</p>
            <p id='1gContent'></p>
            <p className="bottomRightItem">g</p>
          </div>
          <div id='1h' className="square white" onClick={() => handleSquareClick('1h')}>
            <p className="topLeftItem">1</p>
            <p id='1hContent'></p>
            <p className="bottomRightItem">h</p>
          </div>
        </div>

        <button onClick={started}>Start Game</button>
      </div>
    </div>
  );
}

export default App;
