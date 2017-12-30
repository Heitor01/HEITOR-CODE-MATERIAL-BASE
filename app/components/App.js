import React from 'react';
import TextField from 'material-ui/TextField';

const App = () => {
  return (
    <div>
      <p>FAÇA LOGIN NO SITE</p>
      <TextField floatingLabelText="Email" />
      <TextField floatingLabelText="Password" />
      <p>Esqueceu a senha?</p>
    </div>
  );
};

export default App;
