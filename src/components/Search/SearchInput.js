import React from 'react';

const noop = () => {};

const SearchInput = ({onChange = noop}) => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(inputValue);
  }, [onChange]);

  return (
    <div className="">
      <input type="text" className="form-control" id="search" name="search" placeholder="https://github.com/deepak-chandani" value={value} onChange={handleChange} />
    </div>
  )
}

export default SearchInput;
