import React, { useState } from 'react';
import { SortingContext } from './contexts/SortingContext'

import Finished from './components/Finished'
import Progress from './components/Progress'
import Question from './components/Question'

const App = () => {
    const [house, updateHouse] = useState('tie')
    const [percentage, updatePercentage] = useState(0)

    return (
      <div className='App'>
        <SortingContext.Provider value={{ house, percentage }}>
          <Question />
          <Progress />
        </SortingContext.Provider>
      </div>
    )
}

export default App
