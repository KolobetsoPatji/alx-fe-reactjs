function UserProfile(props) {
    return (
        <div style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;