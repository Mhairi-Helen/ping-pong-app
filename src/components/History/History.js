import React from "react";


const History = ({ game, player1Name, score1, player2Name, score2, winner }) => {

    return (
        <table className="table">


            <thead className="thead-dark">
                <tr>
                    <th scope="col">Game Number</th>
                    <th scope="col">{player1Name}</th>
                    <th scope="col">{player1Name}'s Score</th>
                    <th scope="col">{player2Name}</th>
                    <th scope="col">{player2Name}'s Score</th>
                    <th scope="col">{winner}</th>
                </tr>
            </thead>


        </table>
    )


};

export default History;