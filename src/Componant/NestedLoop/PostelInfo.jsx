function PastelInfo({ postInfo }) {
  return (
    <div>
      {postInfo.map((items, i) => {
        return (
          <div key={i}>
            <p>{items.address}</p>
            <p>{items.pinCode}</p>
          </div>
        );
      })}
    </div>
  );
}
export default PastelInfo;
