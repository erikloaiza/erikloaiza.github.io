import React from 'react';

function Contact(){
    return(
        <div>
            <h1 className="display-3">Contact</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form className="d-flex flex-column p-4">
              <label className="mt-2">name</label>
              <input/>
              <label className="mt-2">email</label>
              <input/>
              <label className="mt-4">message</label>
              <textarea></textarea>
              <input type="submit" className="mx-auto mt-4 py-1 px-2" value="Send"/>
          </form>
        </div>
    )
}
export default Contact;