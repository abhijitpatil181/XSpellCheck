const TextArea = ({ value, setValue }) => {
  return (
    <>
      <textarea
        placeholder="Enter Text..."
        id="text"
        rows="5"
        cols="40"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default TextArea;
