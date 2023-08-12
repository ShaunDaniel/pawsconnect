const Pets = (props) =>{


    return(
        <div>
            {    props.pets.map((pet)=> (
        <div key={pet._id}>
        <h1>{pet.name} - {pet.type}</h1>
        <h2>Owner - {pet.owner}</h2>
        <p><b>Age-</b>{pet.age}</p>
        <p>{pet.description}</p>
        <br />
        <p>Current status - {pet.status}</p>
        </div>
    )
    )
}
        </div>
    )
}

export default Pets