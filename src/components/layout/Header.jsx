
function Header({mode, setMode}) {

    return(
        <div>
            <p>current mode is {mode}</p>
            <button className="outline-2 outline-offset-2 outline-solid" onClick={() => setMode((prev) => prev === 'jrp' ? 'exp' : 'jrp')}>Change Mode</button>
        </div>
    )
} 
export default Header