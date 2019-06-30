import React from 'react'

const Workouts = ({ workouts }) => {
  return (
      <div>
          <h1>Workouts List</h1>
          Hi, the main page is currently a work in progress, check out the api at alfredobot.com/api
          {workouts.map((workout) => (
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">{workout.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Sets: {workout.sets}, Reps: {workout.reps}</h6>
                      <p className="card-text">Weight: {workout.weight}</p>
                  </div>
              </div>
          ))}
      </div>
  )
};

export default Workouts;