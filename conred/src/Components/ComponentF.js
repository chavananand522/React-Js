import React, { useContext } from 'react'
import { UserContext, trainingContext } from '../App'

const ComponentF = () => {
    const user = useContext(UserContext);
    const training = useContext(trainingContext);
    return (
        <div>
            {/* <UserContext.Consumer>
                {user => {
                    return (
                        <trainingContext.Consumer>
                            {training => { return (<h2>User Name is : {user}. Trainer for {training} </h2>) }}
                        </trainingContext.Consumer>
                    )
                }}
            </UserContext.Consumer> */}

            <h2>User Name is : {user}. Trainer for {training} </h2>
        </div>
    )
}

export default ComponentF