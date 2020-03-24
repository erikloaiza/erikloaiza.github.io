import React from 'react';

function Contact(){
    return(
        <div>
            <h1 className="display-3">Contact</h1>
            <p>
            Send me a message, i'll be glad to answer.
          </p>
          <form className="d-flex flex-column p-4" action="mailto:erik.loaiza.p@gmail.com" method="post" encType="text/plain">
              <label className="mt-2">subject</label>
              <input/>
              <label className="mt-2">email or contact</label>
              <input/>
              <label className="mt-4">message</label>
              <textarea></textarea>
              <input type="submit" className="mx-auto mt-4 py-1 px-2" value="Send"/>
          </form>
        </div>
    )
}
export default Contact;