const HeadingComp = ({first, second}) => {
  return (
    <div className="col-lg-4 col-left column  d-flex fustify-content-center align-items-center ">
      <h1 className="text-center sign-up-heading">
        {first}
        <br /> {second}
      </h1>
    </div>
  );
};

export default HeadingComp