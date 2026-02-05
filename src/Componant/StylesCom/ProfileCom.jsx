function ProfileCom(prop) {
  const props = prop;

  return (
    <div className="profileCon" style={prop ? props.ConStyle.style1 : {}}>
      <img
        className="profileImg"
        src={props.data.userImg ? props.data.userImg : "public/vite.svg"}
        alt=""
      />
      <div className="profileName" style={prop ? props.ConStyle.style2 : {}}>
        {props.data.name ? props.data.name : Name}
      </div>
      <div
        className="profileLocation"
        style={prop ? props.ConStyle.style3 : {}}
      >
        {props.data.location ? props.data.location : Location}
      </div>
    </div>
  );
}
export default ProfileCom;
