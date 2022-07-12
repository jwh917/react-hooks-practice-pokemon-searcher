import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNameInput, handleHpInput, handleFrontUrlInput, handleBackUrlInput, handlePokeForm}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handlePokeForm}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleNameInput}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleHpInput}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFrontUrlInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBackUrlInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
