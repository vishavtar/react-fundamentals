const Hobbies = ({ hobbies }) => {
  return (
    <div>
      {hobbies.map((hobbies, index) => (
        <div key={index}>
          <h4>{hobbies}</h4>
        </div>
      ))}
    </div>
  );
};
export default Hobbies;
