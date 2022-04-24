export default function Header() {
    return (
        <>        
        <div className="flex-container-row">
            <div className="logo">
                
            </div>          
            <div className="menu-items">
                <a href='/'>home</a>    <a href='/#projects'>projects</a>  <a href='/#socials'>socials</a>  <a href='/#resume'>résumé</a>
                {/* <a href='/#about'>about</a> */}
            </div>
        </div>
        <div className="max-width"></div>
        </>
    )
}