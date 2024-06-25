const element = (
  <div className='container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='Details'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='image'
        alt='profile-pic'
      />
      <h1 className='name'>Kiran V</h1>
      <p className='description'>
        Vishnu Institute of Computer Science Education and Technology,Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='image'
        alt='watch'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
