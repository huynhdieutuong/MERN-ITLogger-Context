import React, { useContext, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import techContext from '../../contexts/tech/techContext';

const AddTechModal = () => {
  const { addTech } = useContext(techContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    if (!firstName || !lastName) {
      return M.toast({ html: 'Please enter firstName and lastName' });
    }

    await addTech({ firstName, lastName });

    M.toast({ html: `Added ${firstName} ${lastName}` });
    setFirstName('');
    setLastName('');
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add Tech</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              id='firstName'
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName'>First Name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              id='lastName'
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName'>Last Name</label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-green btn red'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
