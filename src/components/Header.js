import myPhoto from '../photo.jpg';

function Header() {
    return (
        <header className="header">
            <img src={myPhoto} className="profile-photo" alt="just me" />
            <h1>Patrin Viktor</h1>
            <h2>Frontend Developer</h2>
            <a href='http://viktorpatrin.com/'>viktorpatrin.com</a>
        </header>
    );
}

export default Header;