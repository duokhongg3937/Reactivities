import { observer } from "mobx-react-lite";
import { Button, Comment, Form, Header, Segment } from "semantic-ui-react";

export default observer(function ActivityDetailChat() {
    return (
        <>
            <Segment
                textAlign="center"
                attached="top"
                inverted
                color="teal"
                style={{ border: "none" }}>
                <Header>Chat about this event</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src="/assets/user.png" />
                        <Comment.Content>
                            <Comment.Author as="a">Matt</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 10:00AM</div>
                            </Comment.Metadata>
                            <Comment.Text>How artistic!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                    <Comment>
                        <Comment.Avatar src="/assets/user.png" />
                        <Comment.Content>
                            <Comment.Author as="a">Matt</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 10:00AM</div>
                            </Comment.Metadata>
                            <Comment.Text>How artistic!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea />
                        <Button content="Add reply" labelPosition="left" icon="edit" primary />
                    </Form>
                </Comment.Group>
            </Segment>
        </>
    );
});
