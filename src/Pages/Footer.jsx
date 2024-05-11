

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <>
           <div className="footer-container">
            <div className="footer">
                <p>Made by <span><a target="blank" href="https://t.me/Opixanax">Natannan Zeleke</a></span></p>
                <p>Copyright © <span>{year}</span> By BlackXWolf</p>
            </div>
           </div> 
        </>
    )
}

export default Footer