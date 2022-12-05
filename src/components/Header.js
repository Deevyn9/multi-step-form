import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="header__item">
        <div className="number">1</div>
        <div className="number__info">
          <span>STEP 1</span>
          <p>YOUR INFO</p>
        </div>
      </div>
      <div className="header__item">
        <div className="number">2</div>
        <div className="number__info">
          <span>STEP 2</span>
          <p>SELECT PLAN</p>
        </div>
      </div>
      <div className="header__item">
        <div className="number">3</div>
        <div className="number__info">
          <span>STEP 3</span>
          <p>ADD-ONS</p>
        </div>
      </div>
      <div className="header__item">
        <div className="number">4</div>
        <div className="number__info">
          <span>STEP 4</span>
          <p>SUMMARY</p>
        </div>
      </div>
    </div>
  );
}

export default Header
