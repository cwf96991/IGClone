function NewlineText({ text }) {
  const newText = text.split("\n").map((str, index) => (
    <div key={index} className="inline">
      {str}
      <br />
    </div>
  ));

  return newText;
}
export default NewlineText;
