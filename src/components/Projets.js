import React from 'react'

function Projets() {
  return (
    <div className='container '>
      <section className='section'>
        <div>
          <div className='project-container'>
            <div className='project-card card'>
              <div className='card-body'>
                <div className='project-title card-title h5'>
                Création d'une application mobile qui permet de parcourir une liste des Pokémon
                </div>
                <div className='project-school card-subtitle h6'>
                application mobile avec Flutter et dart
                </div>
              </div>
            </div>
          </div>
        </div>
        
 
        <div>
          <div className='project-container'>
            <div className='project-card card'>
              <div className='card-body'>
                <div className='project-title card-title h5'>
                Application de gestion de parapharmacie
                </div>
                <div className='project-school card-subtitle h6'>
                application web avec c#

                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='project-container'>
            <div className='project-card card'>
              <div className='card-body'>
                <div className='project-title card-title h5'>
                Application de location de voiture
                </div>
                <div className='project-school card-subtitle h6'>
                Application web avec Django , python  

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projets