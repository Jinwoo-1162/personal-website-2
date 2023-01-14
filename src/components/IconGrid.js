import "../css/component_css/IconGrid.css";
import Icon from "../components/Icon";

function IconGrid(props) {
  return (
    <div id="icon-grid">
      {props.appList.map((ele) => (
        <Icon
          id={ele.title.toLowerCase()}
          className="icon"
          icon_content={ele}
          numActiveApps={props.numActiveApps}
          setActiveCount={props.setActiveCount}
          appList={props.appList}
          setAppList={props.setAppList}
        />
      ))}
    </div>
  );
}

export default IconGrid;
