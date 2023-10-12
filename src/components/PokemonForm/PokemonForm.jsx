import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export const PokemonForm = ({onSubmit}) => {

  const [value, setValue] = useState('');

  const handleNameChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    // if (value === '') {
    //   toast.error("Введіть ім'я покемона");
    //   return;
    // }

    onSubmit(value);
    setValue('');
  };

    return (
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={value}
          onChange={handleNameChange}
        />
        <button type="submit">
          {/* <ImSearch style={{ marginRight: 8 }} /> */}
          Знайти
        </button>
      </form>
    );
}