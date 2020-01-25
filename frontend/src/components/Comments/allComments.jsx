import React from 'react';
import setHeaders from '../../utils/setHeaders';
import { Segment, Comment, Divider, Placeholder } from 'semantic-ui-react';

class AllComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: [], loading: true };
    }

    getData = async () => {
        const com = await fetch('/api/comments', setHeaders())
            .then(response => response.json());
        const newComs = com.length > 50 ? com.reverse().slice(0, com.length - (com.length - 50)) : com.reverse();

        this.setState({ comments: newComs, loading: false });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <Comment.Group>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase', fontFamily: 'Dalek', color: 'white' }}
                    >
                    Komentarze
                </Divider>

                    {/* {this.state.comments.map(x => (
                        <Segment inverted color='olive' key={x._id}>
                            <Comment>
                                <Comment.Avatar src={x.avatar} />
                                <Comment.Content>
                                    <Comment.Author>{x.name}</Comment.Author>
                                    <Comment.Metadata>
                                        <div>{x.postdate.slice(0, 10)} o {x.postdate.slice(11, 16)}</div>
                                    </Comment.Metadata>
                                        <Comment.Text>{x.description}</Comment.Text>
                                </Comment.Content>
                            </Comment>
                        </Segment>
                    ))}
                    {this.state.loading && (
                        <div>
                            <Placeholder inverted color='olive'>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            </Placeholder>
                            <br></br>
                            <Placeholder inverted color='olive'>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            </Placeholder>
                        </div>
                    )}
                    {this.state.comments.length === 0 && (
                        <div style={{color: 'white'}}>Brak komentarzy. Niech Twój będzie pierwszy!</div>
                    )} */}
                </Comment.Group>
            </div>
        )
    }
}

export default AllComments; 