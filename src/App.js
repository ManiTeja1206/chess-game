// import React, { useState } from 'react';
import './App.css';

function App() {

  let started = () => {
    const pieces = ['R', 'Kn', 'B', 'Ki', 'Q', 'B', 'Kn', 'R'];
    const pawns = 'P';
  
    for (let i = 0; i < 8; i++) {
      document.getElementById(`8${String.fromCharCode(97 + i)}Content`).innerHTML = pieces[i];
      document.getElementById(`7${String.fromCharCode(97 + i)}Content`).innerHTML = pawns;
      document.getElementById(`2${String.fromCharCode(97 + i)}Content`).innerHTML = pawns;
      document.getElementById(`1${String.fromCharCode(97 + i)}Content`).innerHTML = pieces[i];
    }
  }


return(

  
<div className="mainFrame">
<div class="chessboard">
  <div class="row">

  <div id='8a' className="square white">
            <p className="topLeftItem">8</p>
            <p id='8aContent'></p>
            <p className="bottomRightItem">a</p>
          </div>

    <div id='8b' class="square black">
      <p class="topLeftItem">8</p>
      <p id='8bContent'></p>
      <p class="bottomRightItem">b</p>
    </div>

    <div id='8c' class="square white">
      <p class="topLeftItem">8</p>
      <p id='8cContent'></p>
      <p class="bottomRightItem">c</p>
    </div>

    <div id='8d' class="square black">
      <p class="topLeftItem">8</p>
      <p id='8dContent'></p>
      <p class="bottomRightItem">d</p>
    </div>

    <div id='8e' class="square white">
      <p class="topLeftItem">8</p>
      <p id='8eContent'></p>
      <p class="bottomRightItem">e</p>
    </div>

    <div id='8f' class="square black">
      <p class="topLeftItem">8</p>
      <p id='8fContent'></p>
      <p class="bottomRightItem">f</p>
    </div>

    <div id='8g' class="square white">
      <p class="topLeftItem">8</p>
      <p id='8gContent'></p>
      <p class="bottomRightItem">g</p>
    </div>

    <div id='8h' class="square black">
      <p class="topLeftItem">8</p>
      <p id='8hContent'></p>
      <p class="bottomRightItem">h</p>
    </div>
  </div>

  <div class="row">
    <div id='7a' class="square black">
      <p class="topLeftItem">7</p>
      <p id='7aContent'></p>
      <p class="bottomRightItem">a</p>
    </div>

    <div id='7b' class="square white">
      <p class="topLeftItem">7</p>
      <p id='7bContent'></p>
      <p class="bottomRightItem">b</p>
    </div>

    <div id='7c' class="square black">
      <p class="topLeftItem">7</p>
      <p id='7cContent'></p>
      <p class="bottomRightItem">c</p>
    </div>

    <div id='7d' class="square white">
      <p class="topLeftItem">7</p>
      <p id='7dContent'></p>
      <p class="bottomRightItem">d</p>
    </div>

    <div id='7e' class="square black">
      <p class="topLeftItem">7</p>
      <p id='7eContent'></p>
      <p class="bottomRightItem">e</p>
    </div>

    <div id='7f' class="square white">
      <p class="topLeftItem">7</p>
      <p id='7fContent'></p>
      <p class="bottomRightItem">f</p>
    </div>

    <div id='7g' class="square black">
      <p class="topLeftItem">7</p>
      <p id='7gContent'></p>
      <p class="bottomRightItem">g</p>
    </div>

    <div id='7h' class="square white">
      <p class="topLeftItem">7</p>
      <p id='7hContent'></p>
      <p class="bottomRightItem">h</p>
    </div>
  </div>

  <div class="row">
    <div id='6a' class="square white">
      <p class="topLeftItem">6</p>
      <p id='6aContent'></p>
      <p class="bottomRightItem">a</p>
    </div>

    <div id='6b' class="square black">
      <p class="topLeftItem">6</p>
      <p id='6bContent'></p>
      <p class="bottomRightItem">b</p>
    </div>

    <div id='6c' class="square white">
      <p class="topLeftItem">6</p>
      <p id='6cContent'></p>
      <p class="bottomRightItem">c</p>
    </div>

    <div id='6d' class="square black">
      <p class="topLeftItem">6</p>
      <p id='6dContent'></p>
      <p class="bottomRightItem">d</p>
    </div>

    <div id='6e' class="square white">
      <p class="topLeftItem">6</p>
      <p id='6eContent'></p>
      <p class="bottomRightItem">e</p>
    </div>

    <div id='6f' class="square black">
      <p class="topLeftItem">6</p>
      <p id='6fContent'></p>
      <p class="bottomRightItem">f</p>
    </div>

    <div id='6g' class="square white">
      <p class="topLeftItem">6</p>
      <p id='6gContent'></p>
      <p class="bottomRightItem">g</p>
    </div>

    <div id='6h' class="square black">
      <p class="topLeftItem">6</p>
      <p id='6hContent'></p>
      <p class="bottomRightItem">h</p>
    </div>
  </div>

  <div class="row">
    <div id='5a' class="square black">
      <p class="topLeftItem">5</p>
      <p id='5aContent'></p>
      <p class="bottomRightItem">a</p>
    </div>

    <div id='5b' class="square white">
      <p class="topLeftItem">5</p>
      <p id='5bContent'></p>
      <p class="bottomRightItem">b</p>
    </div>

    <div id='5c' class="square black">
      <p class="topLeftItem">5</p>
      <p id='5cContent'></p>
      <p class="bottomRightItem">c</p>
    </div>

    <div id='5d' class="square white">
      <p class="topLeftItem">5</p>
      <p id=''></p>
      <p class="bottomRightItem">d</p>
    </div>

    <div id='5e' class="square black">
      <p class="topLeftItem">5</p>
      <p id='5dContent'></p>
      <p class="bottomRightItem">e</p>
    </div>

    <div id='5f' class="square white">
      <p class="topLeftItem">5</p>
      <p id='5fContent'></p>
      <p class="bottomRightItem">f</p>
    </div>

    <div id='5g' class="square black">
      <p class="topLeftItem">5</p>
      <p id='5gContent'></p>
      <p class="bottomRightItem">g</p>
    </div>

    <div id='5h' class="square white">
      <p class="topLeftItem">5</p>
      <p id='5hContent'></p>
      <p class="bottomRightItem">h</p>
    </div>
  </div>

  <div class="row">

    <div id='4a' class="square white">
      <p class="topLeftItem">4</p>
      <p id='4aContent'></p>
      <p class="bottomRightItem">a</p>
    </div>

    <div id='4b' class="square black">
      <p class="topLeftItem">4</p>
      <p id='4bContent'></p>
      <p class="bottomRightItem">b</p>
    </div>

    <div id='4c' class="square white">
      <p class="topLeftItem">4</p>
      <p id='4cContent'></p>
      <p class="bottomRightItem">c</p>
    </div>

    <div id='4d' class="square black">
      <p class="topLeftItem">4</p>
      <p id='4dContent'></p>
      <p class="bottomRightItem">d</p>
    </div>

    <div id='4e' class="square white">
      <p class="topLeftItem">4</p>
      <p id='4eContent'></p>
      <p class="bottomRightItem">e</p>
    </div>

    <div id='4f' class="square black">
      <p class="topLeftItem">4</p>
      <p id='4fContent'></p>
      <p class="bottomRightItem">f</p>
    </div>

    <div id='4g' class="square white">
      <p class="topLeftItem">4</p>
      <p id='4gContent'></p>
      <p class="bottomRightItem">g</p>
    </div>

    <div id='4h' class="square black">
      <p class="topLeftItem">4</p>
      <p id='4hContent'></p>
      <p class="bottomRightItem">h</p>
    </div>

  </div>
  <div class="row">

    <div id='3a' class="square black">
      <p class="topLeftItem">3</p>
      <p id='3aContent'></p>
      <p class="bottomRightItem">a</p>
    </div>

    <div id='3b' class="square white">
      <p class="topLeftItem">3</p>
      <p id='3bContent'></p>
      <p class="bottomRightItem">b</p>
    </div>

    <div id='3c' class="square black">
      <p class="topLeftItem">3</p>
      <p id='3cContent'></p>
      <p class="bottomRightItem">c</p>
    </div>

    <div id='3d' class="square white">
      <p class="topLeftItem">3</p>
      <p id='3dContent'></p>
      <p class="bottomRightItem">d</p>
    </div>

    <div id='3e' class="square black">
      <p class="topLeftItem">3</p>
      <p id='3eContent'></p>
      <p class="bottomRightItem">e</p>
    </div>

    <div id='3f' class="square white">
      <p class="topLeftItem">3</p>
      <p id='3fContent'></p>
      <p class="bottomRightItem">f</p>
    </div>

    <div id='3g' class="square black">
      <p class="topLeftItem">3</p>
      <p id='3gContent'></p>
      <p class="bottomRightItem">g</p>
    </div>

    <div id='3h' class="square white">
      <p class="topLeftItem">3</p>
      <p id='3hContent'></p>
      <p class="bottomRightItem">h</p>
    </div>

  </div>

  <div class="row">
    <div id='2a' class="square white">
      <p class="topLeftItem">2</p>
      <p id='2aContent'></p>
      <p class="bottomRightItem">a</p>
    </div>

    <div id='2b' class="square black">
      <p class="topLeftItem">2</p>
      <p id='2bContent'></p>
      <p class="bottomRightItem">b</p>
    </div>

    <div id='2c' class="square white">
      <p class="topLeftItem">2</p>
      <p id='2cContent'></p>
      <p class="bottomRightItem">c</p>
    </div>

    <div id='2d' class="square black">
      <p class="topLeftItem">2</p>
      <p id='2dContent'></p>
      <p class="bottomRightItem">d</p>
    </div>

    <div id='2e' class="square white">
      <p class="topLeftItem">2</p>
      <p id='2eContent'></p>
      <p class="bottomRightItem">e</p>
    </div>

    <div id='2f' class="square black">
      <p class="topLeftItem">2</p>
      <p id='2fContent'></p>
      <p class="bottomRightItem">f</p>
    </div>

    <div id='2g' class="square white">
      <p class="topLeftItem">2</p>
      <p id='2gContent'></p>
      <p class="bottomRightItem">g</p>
    </div>

    <div id='2h' class="square black">
      <p class="topLeftItem">2</p>
       <p id='2hContent'></p>
      <p class="bottomRightItem">h</p>
    </div>

  </div>

  <div class="row">
    <div id='1a' class="square black">
      <p class="topLeftItem">1</p>
      <p id='1aContent'> </p>
      <p class="bottomRightItem">a</p>
    </div>

    <div id='1b' class="square white">
      <p class="topLeftItem">1</p>
      <p id='1bContent'> </p>
      <p class="bottomRightItem">b</p>
    </div>

    <div id='1c' class="square black">
      <p class="topLeftItem">1</p>
      <p id='1cContent'> </p>
      <p class="bottomRightItem">c</p>
    </div>

    <div id='1d' class="square white">
      <p class="topLeftItem">1</p>
      <p id='1dContent'>  </p>
      <p class="bottomRightItem">d</p>
    </div>

    <div id='1e' class="square black">
      <p class="topLeftItem">1</p>
      <p id='1eContent'> </p>
      <p class="bottomRightItem">e</p>
    </div>

    <div id='1f' class="square white">
      <p class="topLeftItem">1</p>
      <p id='1fContent'></p>
      <p class="bottomRightItem">f</p>
    </div>

    <div id='1g' class="square black">
      <p class="topLeftItem">1</p>
      <p id='1gContent'>  </p>
      <p class="bottomRightItem">g</p>
    </div>

    <div id='1h' class="square white">
      <p class="topLeftItem">1</p>
      <p id='1hContent'></p>
      <p class="bottomRightItem">h</p>
    </div>

  </div>
</div>

<div><button onClick={started}>start</button></div>

</div>
)

}

export default App;