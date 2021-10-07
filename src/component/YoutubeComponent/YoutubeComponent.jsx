import React from 'react';

const YoutubeComponent = (props) => {
    return(
        <div>
            <p> {props.name} </p>
            <img src="https://www.kindpng.com/picc/m/493-4936719_naruto-chibi-hd-png-download.png" alt="" width="100" height="100" />
        </div>
    );
}

YoutubeComponent.defaultProps = {
    name: "HEHE DEFAULT"
}

export default YoutubeComponent;