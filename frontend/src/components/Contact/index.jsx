import React from 'react';
import { Divider, Form, Message, TextArea } from 'semantic-ui-react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = { email: '', message: '', status: '' };
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
    }

    render() {
        const { email, message, status } = this.state

        return (
            <div className='contactSection'>
               <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase', fontFamily: 'Dalek', color: 'white' }}
                    >
                    Kontakt
                </Divider>

                <p className="info" style={{textAlign: 'center'}}>
                    Chcesz zapisać się do zamkniętej bety i zostać testerem? A może po prostu chcesz mi coś powiedzieć na temat gry lub strony? <br></br>
                    Jeśli na któreś z tych pytań odpowiedziałeś tak, to wypełnij poniższy formularz. Postaram się odpisać tak szybko, jak tylko to możliwe!
                </p>

                <Form 
                    action="https://formspree.io/mknjagze"
                    method="POST" 
                    onSubmit={this.submitForm}
                    className='contactForm'>
                    <Form.Group>
                        <Form.Input
                        label='Twój Email'
                        placeholder='Email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        className='field1'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Treść'
                        placeholder='Treść'
                        type='text'
                        name='message'
                        value={message}
                        onChange={this.handleChange}
                        className='field2'
                        />
                    </Form.Group>
                    <Form.Group>
                        {status === "SUCCESS" ? <p className='info'>Dzięki za wiadomość!</p> 
                                                : 
                                                <Form.Button color='green' content='Wyślij!' />}
                        {status === "ERROR" && <p>Wystąpił błąd. Spróbuj ponownie później.</p>}
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Contact; 