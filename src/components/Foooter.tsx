
import ApiKeyInput from "./ApiKeyInput";


interface FooterProps {
  blurPage: boolean;
}

export function FooterEx({ blurPage }: FooterProps) {

  return(
    <div>
      <div className="container my-3">
        <footer className="text-white text-center" style= {{backgroundColor:"salmon"}}>
          <section className="d-flex justify-content-between p-4" style={{backgroundColor: "#916448"}}>
            <div >
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <a href="https://www.youtube.com/watch?v=coaN2VBNgYA&ab_channel=Brisses" target="_blank" className="text-white me-4" style={{fontSize: 24}} rel="noreferrer">
                <i className="fa fa-youtube-play"></i>
              </a>
              <a target="_blank" href="https://www.google.com/search?q=shrimp+fried+rice+meme&sca_esv=a0ffaebd0ed0b666&sca_upv=1&rlz=1C1VDKB_enUS981US981&ei=L_s6ZsGIMKLj5NoP352BmAg&ved=0ahUKEwiB3Lfal_2FAxWiMVkFHd9OAIMQ4dUDCBA&uact=5&oq=shrimp+fried+rice+meme&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnNocmltcCBmcmllZCByaWNlIG1lbWUyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjOC1CEBFiqCnABeAGQAQCYAVigAf4CqgEBNbgBA8gBAPgBAZgCBqACmgPCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBRAuGIAEwgIHEAAYgAQYCsICCxAAGIAEGIYDGIoFmAMAiAYBkAYKkgcBNqAHvSA&sclient=gws-wiz-serp" className="text-white me-4" style={{fontSize: 24}} rel="noreferrer">
                <i className="fa fa-google"></i>
              </a>
              <a target="_blank" href="https://github.com/selinAbacaz/starter_helpi" className="text-white me-4" style={{fontSize: 24}} rel="noreferrer">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </section>
          <section  style= {{backgroundColor: "salmon", fontSize: 18}}>
              <div className="row d-flex justify-content-center">
                  <p>
                    <br></br>
                    Career Quiz made by Selin Bacaz, Brandon Nauta, Nathan Rowell
                    <br></br>
                    For Cisc 275, Introduction to Software Engineering based in UDEL
                  </p>
              </div>
          </section>
          <hr style={{height: 4, backgroundColor: "white", marginLeft: "15%", marginRight: "15%", borderRadius:80, color: "white"}}></hr>
          <ApiKeyInput blurPage={blurPage} type={"footer"}></ApiKeyInput>
        </footer>
      </div>
    </div>
  )
}


