import React from 'react';
import AllComments from './allComments';

const CommentSection = () => {
    return (
        <div>
        <div className='comSection'>
            <AllComments/>
        </div>
        <p style={{color: 'white', textAlign: 'center', fontFamily: 'verdana'}}>Sekcja opinii i komentarzy zostanie odblokowana po premierze gry.</p>
        </div>
    )
}

export default CommentSection;