// import { SwipeableDrawer } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import TinderCards from 'react-tinder-card'
import "./TinderCards.css"
import axios from "./axios"

function TinderCard() {
    // make states to keep track of data
    const [people, setPeople] = useState([])

    // hook this up to the backend!
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards')

            setPeople(req.data) // store data which are posted in mongoDB in state
        }

        fetchData()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCards
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="tinderCards__card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCards>
                ))}
            </div>
        </div>
    )
}

export default TinderCard
