const ToolTip = ({ title, children }) => {
  return (
    <div class="iconscontainer">
      <div class="icon">
        <span>{title}</span>
        {children}
      </div>
    </div>
  );
};
export default ToolTip;
